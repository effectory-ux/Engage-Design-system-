#!/usr/bin/env python3
"""
Reads the Figma variables export and generates:
  - tokens.css        — CSS custom properties for all modes
  - colors-tokens.js  — JS token data for the dynamic colors page

FIGMA IS NO LONGER THE SOURCE OF TRUTH FOR TOKENS. tokens.css was reconciled by
hand against the live dev styleguide on 2026-07-29 (commit 888c966, 164/164 on
the light theme) because Figma's values were wrong. Writing from a Figma export
would undo that, so this script REPORTS by default and only writes when you pass
--write and mean it.

Usage:
  ./build-tokens.py [export.json]           compare the export against what is
                                            committed and print the differences
  ./build-tokens.py [export.json] --write   actually overwrite tokens.css and
                                            colors-tokens.js from the export
  FIGMA_VARIABLES=… ./build-tokens.py       same, path via the environment

Without an argument it looks for ./figma-variables.json.
"""
import json, re, textwrap, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
DEST_CSS = os.path.join(HERE, 'tokens.css')
DEST_JS  = os.path.join(HERE, 'colors-tokens.js')

WRITE = '--write' in sys.argv
positional = [a for a in sys.argv[1:] if not a.startswith('-')]
SRC = positional[0] if positional else (
    os.environ.get('FIGMA_VARIABLES') or os.path.join(HERE, 'figma-variables.json'))

if not os.path.exists(SRC):
    print(f'✗ Figma variables export not found: {SRC}')
    print('')
    print('  This script compares a Figma variables export against the committed')
    print('  tokens. To do that it needs the export. Take it from the variables')
    print('  panel in the Figma file, then either:')
    print('')
    print('    · save it as figma-variables.json next to this script, or')
    print('    · pass the path:  ./build-tokens.py ~/Downloads/variables.json, or')
    print('    · set FIGMA_VARIABLES=/path/to/export')
    print('')
    print('  Note: Figma is not the source of truth for tokens. This script only')
    print('  writes when you pass --write.')
    sys.exit(1)


def emit(path, content):
    """Report the difference with what is committed; only write with --write."""
    current = None
    if os.path.exists(path):
        with open(path, encoding='utf-8') as fh:
            current = fh.read()
    name = os.path.basename(path)
    same = current == content
    if not WRITE:
        if same:
            print(f'= {name} matches the export')
        else:
            a = (current or '').splitlines()
            b = content.splitlines()
            import difflib
            n = sum(1 for line in difflib.unified_diff(a, b, lineterm='', n=0)
                    if line[:1] in '+-' and line[:3] not in ('+++', '---'))
            print(f'≠ {name} differs from the export ({n} lines)')
        return same
    with open(path, 'w', encoding='utf-8') as fh:
        fh.write(content)
    print(f'Written: {path}')
    return True


up_to_date = []

# ── 1. Parse multi-doc file ────────────────────────────────────────────────
with open(SRC, 'r', encoding='utf-8') as f:
    raw = f.read()

sections = {}
parts = re.split(r'^(.+?\.tokens\.json)\s*$', raw, flags=re.MULTILINE)
i = 1
while i + 1 < len(parts):
    name = parts[i].strip()
    try:
        sections[name] = json.loads(parts[i + 1])
    except json.JSONDecodeError as e:
        print(f'  WARN: could not parse {name}: {e}')
    i += 2

print(f'Parsed sections: {list(sections.keys())}')

# ── 2. Flatten nested token tree → "a/b/c" paths ─────────────────────────
def flatten(obj, prefix=''):
    out = {}
    for k, v in obj.items():
        path = f'{prefix}/{k}' if prefix else k
        if isinstance(v, dict):
            if '$value' in v:
                out[path] = v
            else:
                out.update(flatten(v, path))
    return out

# ── 3. Build primitive lookup: "color.neutral.1200" → hex ────────────────
prims_flat = flatten(sections.get('2. Primitives.Mode 1.tokens.json', {}))
prim_lookup = {}   # dotted key  → hex string
prim_names  = {}   # dotted key  → display name (for alias labels)
for path, tok in prims_flat.items():
    key = path.replace('/', '.')
    prim_lookup[key] = tok['$value']
    prim_names[key]  = path  # e.g. "color/neutral/1200"

def resolve(value):
    """Return (hex, prim_display_name) for a token value."""
    if isinstance(value, str) and value.startswith('{') and value.endswith('}'):
        ref = value[1:-1]
        hex_val = prim_lookup.get(ref)
        if hex_val:
            # Clean up alpha values: 0.9499... → 0.95
            hex_val = re.sub(r'(\d\.\d{2})\d+', r'\1', hex_val)
            return hex_val, prim_names.get(ref, ref)
        return value, ref   # unresolved reference (leave as-is)
    return value, None

# ── 4. Process semantic modes ─────────────────────────────────────────────
MODES = {
    '1. Color tokens.Light - Coordinator.tokens.json': 'lc',
    '1. Color tokens.Light - Personal.tokens.json':    'lp',
    '1. Color tokens.Dark - Coordinator.tokens.json':  'dc',
}

mode_tokens = {}   # mode_key → { "bg/base": {hex, prim}, ... }
for fname, mkey in MODES.items():
    if fname not in sections:
        print(f'  WARN: section not found: {fname}')
        continue
    flat = flatten(sections[fname])
    mode_tokens[mkey] = {}
    for path, tok in flat.items():
        if tok.get('$type') != 'color':
            continue
        hex_val, prim = resolve(tok['$value'])
        mode_tokens[mkey][path] = {'hex': hex_val, 'prim': prim}

lc = mode_tokens.get('lc', {})
lp = mode_tokens.get('lp', {})
dc = mode_tokens.get('dc', {})

# ── 5. Determine which tokens differ across modes ─────────────────────────
def css_var(path):
    """Convert "bg/brand/base" → "--tok-bg-brand-base" """
    return '--tok-' + path.replace('/', '-').replace(' ', '-').replace('(', '').replace(')', '')

def changed_tokens(base, other):
    """Return list of paths where other differs from base."""
    out = []
    for path in base:
        if path in other and other[path]['hex'] != base[path]['hex']:
            out.append(path)
    return out

dark_changes     = changed_tokens(lc, dc)
personal_changes = changed_tokens(lc, lp)
print(f'Dark overrides:     {len(dark_changes)} tokens')
print(f'Personal overrides: {len(personal_changes)} tokens')

# ── 6. Key semantic mappings → existing CSS vars ──────────────────────────
# These keep the existing component CSS (--bg, --text, etc.) working.
ALIASES = {
    'bg/base':                    '--bg',
    'bg/secondary':               '--bg-subtle',
    'bg/base-hover':              '--bg-hover',
    'border/base':                '--border',
    'border/base-hover':          '--border-light',
    'content/base':               '--text',
    'content/secondary':          '--text-2',
    'content/subtle':             '--text-3',
    'bg/brand/base':              '--brand',
    'bg/brand/base-hover':        '--brand-hover',
    'bg/brand/base-pressed':      '--brand-pressed',
    'border/brand/base':          '--brand-border',
    'border/brand/base-pressed':  '--brand-deep',
    'content/on/brand-base':      '--brand-text',
    'bg/inverse/base':            '--inverse-bg',
    'content/inverse/base':       '--inverse-text',
    'bg/brand/subtle':            '--brand-subtle',
}

# ── 7. Generate tokens.css ────────────────────────────────────────────────
lines = []
lines.append('/* AUTO-GENERATED — do not edit manually.')
lines.append('   Run  python3 build-tokens.py  to regenerate from the Figma export. */')
lines.append('')

# Primitive variables
lines.append(':root {')
lines.append('  /* ── Primitives ── */')
prev_group = None
for path, tok in sorted(prims_flat.items()):
    group = path.split('/')[0]
    if group != prev_group:
        lines.append(f'  /* {group} */')
        prev_group = group
    var_name = '--p-' + path.replace('/', '-').replace(' ', '-').replace('(','').replace(')','').replace('---','-').lower()
    lines.append(f'  {var_name}: {tok["$value"]};')

lines.append('')
lines.append('  /* ── Semantic tokens — Light Coordinator (default) ── */')
for path, data in sorted(lc.items()):
    lines.append(f'  {css_var(path)}: {data["hex"]};')

lines.append('')
lines.append('  /* ── Aliases for existing component CSS ── */')
for token_path, alias in ALIASES.items():
    if token_path in lc:
        lines.append(f'  {alias}: var({css_var(token_path)});')

lines.append('}')
lines.append('')

# Dark Coordinator
lines.append('/* Dark mode — Coordinator */')
lines.append('@media (prefers-color-scheme: dark) {')
lines.append('  html:not([data-theme="light"]) {')
for path in dark_changes:
    lines.append(f'    {css_var(path)}: {dc[path]["hex"]};')
# Alias updates
for token_path, alias in ALIASES.items():
    if token_path in dark_changes:
        lines.append(f'    {alias}: var({css_var(token_path)});')
lines.append('  }')
lines.append('}')
lines.append('html[data-theme="dark"] {')
for path in dark_changes:
    lines.append(f'  {css_var(path)}: {dc[path]["hex"]};')
for token_path, alias in ALIASES.items():
    if token_path in dark_changes:
        lines.append(f'  {alias}: var({css_var(token_path)});')
lines.append('}')
lines.append('')

# Light Personal (only override tokens that differ from coordinator)
lines.append('/* Personal portal — light mode */')
lines.append('html[data-portal="personal"]:not([data-theme="dark"]) {')
for path in personal_changes:
    lines.append(f'  {css_var(path)}: {lp[path]["hex"]};')
for token_path, alias in ALIASES.items():
    if token_path in personal_changes:
        lines.append(f'  {alias}: var({css_var(token_path)});')
lines.append('}')
lines.append('')

# Extra component variables derived from semantic tokens
lines.append('/* ── Extra vars used by component CSS, derived from semantic tokens ── */')
lines.append(':root {')
lines.append('  --brand-subtle:  var(--tok-bg-brand-subtle);')
lines.append('  --brand-focus:   color-mix(in srgb, var(--brand) 40%, transparent);')
lines.append('  --brand-deep:    var(--tok-border-brand-base-pressed);')
lines.append('}')
# brand-subtle must also update when portal changes (it uses the token var so it auto-updates)

up_to_date.append(emit(DEST_CSS, '\n'.join(lines) + '\n'))

# ── 8. Generate colors-tokens.js ─────────────────────────────────────────
# Collect all token paths that appear in any mode
all_paths = sorted(set(list(lc.keys()) + list(lp.keys()) + list(dc.keys())))

js_lines = []
js_lines.append('/* AUTO-GENERATED — run build-tokens.py to regenerate */')
js_lines.append('(function () {')
js_lines.append('  var T = {')

for path in all_paths:
    lc_d = lc.get(path)
    lp_d = lp.get(path, lc_d)
    dc_d = dc.get(path, lc_d)
    if not lc_d:
        continue

    def fmt(d):
        if not d:
            return 'null'
        h = d['hex'].replace("'", "\\'")
        p = (d['prim'] or '').replace("'", "\\'")
        return f"{{hex:'{h}',prim:'{p}'}}"

    js_lines.append(f"    '{path}': {{ lc:{fmt(lc_d)}, lp:{fmt(lp_d)}, dc:{fmt(dc_d)} }},")

js_lines.append('  };')
js_lines.append('')
js_lines.append("""  function getMode() {
    var dark = localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (dark) return 'dc';
    return (localStorage.getItem('portal') || 'coordinator') === 'personal' ? 'lp' : 'lc';
  }

  function fmtHex(hex) {
    if (!hex) return '';
    if (hex.indexOf('rgba') === 0) {
      var m = hex.match(/rgba\\((\\d+),(\\s*)(\\d+),(\\s*)(\\d+),(\\s*)([\\d.]+)\\)/);
      if (!m) m = hex.match(/rgba\\((\\d+),\\s*(\\d+),\\s*(\\d+),\\s*([\\d.]+)\\)/);
      if (m) {
        var r = parseInt(m[1]);
        var pct = Math.round(parseFloat(m[m.length-1]) * 100);
        return pct + '% ' + (r > 200 ? 'White' : 'Navy');
      }
    }
    return hex.toUpperCase();
  }

  function updatePage() {
    var mode = getMode();
    document.querySelectorAll('.sem-row[data-token]').forEach(function (row) {
      var tok = T[row.dataset.token];
      if (!tok) return;
      var val = tok[mode] || tok.lc;
      if (!val) return;
      var dot = row.querySelector('.sem-dot');
      if (dot) dot.style.background = val.hex;
      var inner = row.querySelector('.alpha-bg-inner');
      if (inner) inner.style.background = val.hex;
      var hexEl = row.querySelector('.sem-hex');
      if (hexEl) hexEl.textContent = fmtHex(val.hex);
      var aliasCode = row.querySelector('.sem-alias code:first-child');
      if (aliasCode && val.prim) aliasCode.textContent = val.prim;
    });
  }

  window.ColorTokens = { update: updatePage, getMode: getMode };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updatePage);
  } else {
    updatePage();
  }
  document.addEventListener('themechange', updatePage);
  document.addEventListener('portalchange', updatePage);
})();""")

up_to_date.append(emit(DEST_JS, '\n'.join(js_lines) + '\n'))

if not WRITE:
    print('')
    if all(up_to_date):
        print('The export and the committed files agree. Nothing to do.')
    else:
        print('Figma is NOT the source of truth for tokens — the committed files are,')
        print('reconciled against the live dev styleguide. A difference here does not')
        print('mean the committed files are wrong; it usually means Figma is behind.')
        print('')
        print('Only if you are certain the export is the correct newer version:')
        print('  ./build-tokens.py ' + (positional[0] if positional else '<export>') + ' --write')
    sys.exit(0)
print('Done.')
