#!/usr/bin/env python3
"""Generate skill-manifest.json — the index the skill fetches at session start.

The skill ships thin: SKILL.md plus a cold-start cache. Everything that changes
often — the reference doc, the reference screens, the design-system files — is
fetched from this repo at run time, so adding a screen or changing a token is a
commit rather than a re-upload of the org zip.

The manifest is derived, never hand-written, so it cannot drift from the registry
in SKILL.md. Regeneration is automatic: the pre-commit hook and CI both run
tools/regenerate.sh, and CI fails on main if the committed copy is stale.

Fields the deployed skill (ds-skill.sh <= 1.17) relies on — keep these stable:
  version, repo, raw, reference{url,sha,bytes},
  screens[]{slug,name,triggers,html{url,sha,bytes},md{url,sha,bytes}}
Added for ds-skill.sh >= 1.18:
  designSystem{<file>: {url,sha,bytes}}  tokens.css foundation.css components.css icons.js serve.py
  bundle{skillMd,dsSkill}                hashes of the two files that only reach users via a new bundle,
                                         so `ds-skill.sh sync` can say when the bundle itself is behind
  generation                             hash over everything above: changes whenever any content changes

Usage:
  tools/build-manifest.py            write skill-manifest.json
  tools/build-manifest.py --check    exit 1 when the committed copies (root + skill-source/) are stale
"""
import hashlib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SKILL = ROOT / '.claude/skills/effectory-design-system'
ORG = ROOT / 'skill-source'
REPO = 'effectory-ux/Engage-Design-system-'
RAW = f'https://raw.githubusercontent.com/{REPO}/main'
OUT = ROOT / 'skill-manifest.json'
OUT_ORG = ORG / 'skill-manifest.json'

# name the project sees  ->  path in this repo
DESIGN_SYSTEM_FILES = {
    'tokens.css': 'tokens.css',
    'foundation.css': 'foundation.css',
    'components.css': 'components.css',
    'icons.js': 'icons.js',
    'serve.py': 'tools/serve.py',
}
VERSION_LINE = re.compile(r'^\*\*Version:\*\*.*\n?', re.M)


def sha(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()[:12]


def entry(path: Path, url: str) -> dict:
    return {'url': url, 'sha': sha(path.read_bytes()), 'bytes': path.stat().st_size}


def bundle_hashes() -> dict:
    """The two files that only reach users through a new bundle. The **Version:**
    line is stamped by sync-skill.sh and ignored: a version bump alone is not a
    change of instructions."""
    skill_md = VERSION_LINE.sub('', (ORG / 'SKILL.md').read_text(encoding='utf-8'))
    return {
        'skillMd': sha(skill_md.encode('utf-8')),
        'dsSkill': sha((ROOT / 'tools/ds-skill.sh').read_bytes()),
    }


def build() -> dict:
    skill_md = (SKILL / 'SKILL.md').read_text(encoding='utf-8')

    # every registry entry: "- **Name** → `reference-prototypes/<slug>.md` + `<slug>.html`"
    screens = []
    for m in re.finditer(
            r'^- \*\*(?P<name>.+?)\*\* → `reference-prototypes/(?P<slug>[a-z0-9-]+)\.md`.*?$'
            r'(?P<body>(?:\n(?!- \*\*|\n?## |> ).*)*)', skill_md, re.M):
        slug = m.group('slug')
        trig = re.search(r'\*Trigger op o\.a\.:\*(.+?)(?:\n|$)', m.group('body'), re.S)
        html = SKILL / f'reference-prototypes/{slug}.html'
        md = SKILL / f'reference-prototypes/{slug}.md'
        if not (html.exists() and md.exists()):
            print(f'✗ registry lists {slug} but the files are missing', file=sys.stderr)
            sys.exit(1)
        base = f'{RAW}/.claude/skills/effectory-design-system/reference-prototypes'
        screens.append({
            'slug': slug,
            'name': m.group('name').strip(),
            'triggers': [t.strip(' .·') for t in re.split(r'[·|]', trig.group(1))][:40] if trig else [],
            'html': entry(html, f'{base}/{slug}.html'),
            'md': entry(md, f'{base}/{slug}.md'),
        })

    manifest = {
        'version': (ROOT / 'VERSION').read_text().strip(),
        'repo': REPO,
        'raw': RAW,
        'reference': entry(SKILL / 'design-system-reference.md',
                           f'{RAW}/.claude/skills/effectory-design-system/design-system-reference.md'),
        'designSystem': {name: entry(ROOT / path, f'{RAW}/{path}')
                         for name, path in DESIGN_SYSTEM_FILES.items()},
        'bundle': bundle_hashes(),
        'screens': sorted(screens, key=lambda s: s['slug']),
    }
    manifest['generation'] = sha(json.dumps(manifest, sort_keys=True).encode('utf-8'))
    return manifest


def main() -> int:
    manifest = build()
    new = json.dumps(manifest, indent=2, ensure_ascii=False) + '\n'
    n = len(manifest['screens'])

    if '--check' in sys.argv:
        stale = []
        for out in (OUT, OUT_ORG):
            cur = out.read_text(encoding='utf-8') if out.exists() else ''
            if cur != new:
                try:
                    old = json.loads(cur)
                except ValueError:
                    old = {}
                keys = [k for k in manifest if old.get(k) != manifest[k]] + [k for k in old if k not in manifest]
                stale.append(f'{out.relative_to(ROOT)} ({", ".join(keys) or "missing"})')
        if stale:
            print('✗ stale: ' + '; '.join(stale) + ' — run tools/regenerate.sh', file=sys.stderr)
            return 1
        print(f'✓ skill-manifest.json current ({n} screens, generation {manifest["generation"]})')
        return 0

    OUT.write_text(new, encoding='utf-8')
    print(f'✓ Wrote skill-manifest.json: {n} screens, v{manifest["version"]}, generation {manifest["generation"]}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
