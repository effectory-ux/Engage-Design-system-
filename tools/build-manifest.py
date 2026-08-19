#!/usr/bin/env python3
"""Generate skill-manifest.json — the index the skill fetches at session start.

The skill ships thin: SKILL.md plus a cold-start cache. Everything that changes
often — the reference doc, the reference screens — is fetched from this repo at
run time, so adding a screen is a commit rather than a re-upload of the org zip.

The manifest is derived, never hand-written, so it cannot drift from the registry
in SKILL.md. CI regenerates it and fails if the committed copy is out of date.

Output: ./skill-manifest.json
"""
import json, re, hashlib, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SKILL = ROOT / '.claude/skills/effectory-design-system'
RAW = 'https://raw.githubusercontent.com/effectory-ux/Engage-Design-system-/main'

def sha(p):
    return hashlib.sha256(p.read_bytes()).hexdigest()[:12]

skill_md = (SKILL / 'SKILL.md').read_text(encoding='utf-8')

# every registry entry: "- **Name** → `reference-prototypes/<slug>.md` + `<slug>.html`"
screens = []
for m in re.finditer(
        r'^- \*\*(?P<name>.+?)\*\* → `reference-prototypes/(?P<slug>[a-z0-9-]+)\.md`.*?$'
        r'(?P<body>(?:\n(?!- \*\*|\n?## |> ).*)*)', skill_md, re.M):
    slug = m.group('slug')
    body = m.group('body')
    trig = re.search(r'\*Trigger op o\.a\.:\*(.+?)(?:\n|$)', body, re.S)
    html, md = SKILL / f'reference-prototypes/{slug}.html', SKILL / f'reference-prototypes/{slug}.md'
    if not (html.exists() and md.exists()):
        print(f'✗ registry lists {slug} but the files are missing', file=sys.stderr); sys.exit(1)
    screens.append({
        'slug': slug,
        'name': m.group('name').strip(),
        'triggers': [t.strip(' .·') for t in re.split(r'[·|]', trig.group(1))][:40] if trig else [],
        'html': {'url': f'{RAW}/.claude/skills/effectory-design-system/reference-prototypes/{slug}.html',
                 'sha': sha(html), 'bytes': html.stat().st_size},
        'md':   {'url': f'{RAW}/.claude/skills/effectory-design-system/reference-prototypes/{slug}.md',
                 'sha': sha(md),   'bytes': md.stat().st_size},
    })

ref = SKILL / 'design-system-reference.md'
manifest = {
    'version': (ROOT / 'VERSION').read_text().strip(),
    'repo': 'effectory-ux/Engage-Design-system-',
    'raw': RAW,
    'reference': {'url': f'{RAW}/.claude/skills/effectory-design-system/design-system-reference.md',
                  'sha': sha(ref), 'bytes': ref.stat().st_size},
    'designSystem': {f: f'{RAW}/{f}' for f in
                     ['tokens.css', 'foundation.css', 'components.css', 'icons.js']},
    'screens': sorted(screens, key=lambda s: s['slug']),
}

out = ROOT / 'skill-manifest.json'
new = json.dumps(manifest, indent=2, ensure_ascii=False) + '\n'
if '--check' in sys.argv:
    cur = out.read_text(encoding='utf-8') if out.exists() else ''
    if cur != new:
        print('✗ skill-manifest.json is out of date — run tools/build-manifest.py', file=sys.stderr); sys.exit(1)
    print(f'✓ skill-manifest.json current ({len(screens)} screens)'); sys.exit(0)
out.write_text(new, encoding='utf-8')
print(f'✓ Wrote skill-manifest.json: {len(screens)} screens, v{manifest["version"]}')
