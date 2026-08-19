#!/usr/bin/env python3
"""Fail if a docs page or stylesheet points at an asset that isn't there.

The docs site lives in docs/ while the design system payload stays at the repo
root, so references cross a directory boundary. A path inside a CSS file resolves
relative to *that file*, not to the page including it — which is how
docs/styles.css ended up importing docs/tokens.css after the restructure and
silently dropped every design token. The page still loaded; it just had no
colours, borders or radii.

Assets (css/js/images/fonts) are a hard failure: when one goes missing the page
renders wrong with nothing in the console. Links to other pages are reported as
warnings — a dead link is visible the moment someone clicks it, and there is a
pre-existing backlog of them.
"""
import re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ASSET_EXT = {'.css', '.js', '.svg', '.png', '.jpg', '.jpeg', '.gif', '.webp', '.woff', '.woff2', '.json'}
errors, warnings = [], []

def looks_templated(ref):
    # fragments of JS string-building picked up by the regex, not real references
    return any(t in ref for t in ('${', "' +", '" +', '…', '{{'))

def check(src, ref, base):
    if re.match(r'^(https?:|data:|#|mailto:|//)', ref) or not ref.strip() or looks_templated(ref):
        return
    clean = ref.split('?')[0].split('#')[0]
    if not clean:
        return
    target = (base / clean).resolve()
    if target.exists():
        return
    entry = f'{src.relative_to(ROOT)} → {ref}'
    (errors if Path(clean).suffix.lower() in ASSET_EXT else warnings).append(entry)

for html in sorted((ROOT / 'docs').glob('*.html')):
    text = html.read_text(encoding='utf-8', errors='ignore')
    for ref in re.findall(r'(?:href|src)="([^"]+)"', text):
        check(html, ref, html.parent)

# Scripts and styles built in JavaScript are invisible to the HTML scan — nav.js
# assigns script.src at runtime. Those broke silently in the restructure, so check
# any string literal assigned to .src / .href that looks like a local file.
for js in sorted((ROOT / 'docs').glob('*.js')):
    text = js.read_text(encoding='utf-8', errors='ignore')
    for ref in re.findall(r"\.(?:src|href)\s*=\s*['\"]([^'\"]+)['\"]", text):
        check(js, ref, js.parent)

for css in sorted(ROOT.rglob('*.css')):
    if any(p in css.parts for p in ('.git', 'skill-source', '.claude', 'dist', 'node_modules')):
        continue
    text = css.read_text(encoding='utf-8', errors='ignore')
    for ref in re.findall(r"@import\s+url\(['\"]?([^'\")]+)", text):
        check(css, ref, css.parent)
    for ref in re.findall(r"url\(['\"]?(?!data:)([^'\")]+)", text):
        check(css, ref, css.parent)

if warnings:
    print(f'! {len(warnings)} dead page link(s) — pre-existing, not blocking:')
    for w in sorted(set(warnings)):
        print('   ', w)
if errors:
    print(f'\n✗ {len(errors)} missing asset(s) — these break rendering silently:')
    for e in sorted(set(errors)):
        print('   ', e)
    sys.exit(1)
print(f'✓ Docs assets: every stylesheet, script and image reference resolves')
