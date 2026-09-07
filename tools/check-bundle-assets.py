#!/usr/bin/env python3
"""Does skill-source/design-system-files/assets.tar.gz still match assets/?

tar + gzip output is not byte-stable (mtimes, gzip header), so comparing the
archive itself would flag a change on every rebuild. Compare the *content*
instead: the set of files under assets/{icons,illustrations,flags} and their
hashes. tools/regenerate.sh uses this to decide whether a freshly built archive
is worth committing.

Exit 0 when archive and folders match, 1 when they differ, 2 when the archive is missing.
"""
import hashlib
import sys
import tarfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARCHIVE = ROOT / 'skill-source/design-system-files/assets.tar.gz'
DIRS = ('icons', 'illustrations', 'flags')


def tree() -> dict:
    out = {}
    for d in DIRS:
        base = ROOT / 'assets' / d
        if not base.is_dir():
            continue
        for p in sorted(base.rglob('*')):
            if p.is_file() and p.name != '.DS_Store' and not p.name.startswith('._'):
                out[f'{d}/{p.relative_to(base).as_posix()}'] = hashlib.sha256(p.read_bytes()).hexdigest()
    return out


JUNK: list = []  # macOS AppleDouble entries (._foo) — invisible to bsdtar -t, real files on Linux


def archive() -> dict:
    out = {}
    with tarfile.open(ARCHIVE, 'r:gz') as tf:
        for m in tf:
            if not m.isfile():
                continue
            name = m.name[2:] if m.name.startswith('./') else m.name
            if name.rsplit('/', 1)[-1].startswith('._'):
                JUNK.append(name)
                continue
            if name.endswith('.DS_Store'):
                continue
            out[name] = hashlib.sha256(tf.extractfile(m).read()).hexdigest()
    return out


def main() -> int:
    if not ARCHIVE.exists():
        print(f'✗ {ARCHIVE.relative_to(ROOT)} is missing')
        return 2
    a, t = archive(), tree()
    if JUNK:
        print(f'✗ assets.tar.gz carries {len(JUNK)} macOS AppleDouble entries (._*), e.g. {JUNK[0]} — rebuild it')
        return 1
    if a == t:
        print(f'✓ assets.tar.gz matches assets/ ({len(t)} files)')
        return 0
    added = sorted(set(t) - set(a))
    removed = sorted(set(a) - set(t))
    changed = sorted(k for k in set(a) & set(t) if a[k] != t[k])
    print(f'✗ assets.tar.gz differs from assets/: +{len(added)} −{len(removed)} ~{len(changed)}')
    for k in (added + removed + changed)[:20]:
        print(f'    {k}')
    return 1


if __name__ == '__main__':
    sys.exit(main())
