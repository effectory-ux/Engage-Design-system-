#!/usr/bin/env python3
"""
Compare components.css against design-system-reference.md.

The reference is hand-maintained (see CLAUDE.md 19). Rule 1 of the skill says the
model may only use class names listed in the reference, so a component that lives
in components.css but was never written into the reference is invisible: the skill
will report it as non-existent and refuse to build with it.

This check catches that drift.

  - A whole class family missing from the reference (a new component nobody
    documented) is an ERROR and fails the run.
  - Individual classes missing while their family is documented (a new variant or
    sub-element) is a WARNING and does not fail, because the reference deliberately
    documents the public shape of a component and not every internal element.

Usage:
  ./check-reference-drift.py            # errors fail, variants warn
  ./check-reference-drift.py --strict   # variants fail too
  ./check-reference-drift.py --quiet    # only print problems
"""
import os
import re
import sys
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSS = os.path.join(ROOT, 'components.css')
REF = os.path.join(ROOT, '.claude/skills/effectory-design-system/design-system-reference.md')

# Classes that are intentionally absent from the reference. Keep this list short and
# explain every entry, otherwise the check quietly stops catching real drift.
ALLOWLIST = set()  # e.g. {'foo-internal'} — explain every entry you add

STRICT = '--strict' in sys.argv
QUIET = '--quiet' in sys.argv


def css_classes(text):
    """Class selectors actually defined in the stylesheet."""
    # Comments can hold commented-out rules, url() payloads hold SVG data URIs
    # containing "www.w3.org" — both would register as fake classes.
    text = re.sub(r'/\*.*?\*/', '', text, flags=re.S)
    text = re.sub(r'url\([^)]*\)', 'url()', text)
    found = set(re.findall(r'\.([a-zA-Z][\w-]*)', text))
    return {c for c in found if not c.startswith('is-')} - ALLOWLIST


def ref_tokens(text):
    """Every identifier-ish token in the reference, with or without a leading dot."""
    return set(re.findall(r'\.?([a-zA-Z][\w-]*)', text))


def main():
    for path in (CSS, REF):
        if not os.path.exists(path):
            print(f'✗ missing file: {path}')
            return 1

    defined = css_classes(open(CSS, encoding='utf-8').read())
    documented = ref_tokens(open(REF, encoding='utf-8').read())

    families = defaultdict(set)
    for cls in defined:
        families[cls.split('-')[0]].add(cls)

    undocumented_families = []
    undocumented_variants = []
    for family, members in sorted(families.items()):
        if not (members & documented):
            undocumented_families.append((family, sorted(members)))
        else:
            gone = sorted(m for m in members if m not in documented)
            if gone:
                undocumented_variants.append((family, gone))

    if not QUIET:
        print(f'→ Reference drift check: {len(defined)} classes in '
              f'{len(families)} families')

    if undocumented_families:
        print('')
        print(f'✗ {len(undocumented_families)} component(s) in components.css '
              f'with nothing in design-system-reference.md:')
        for family, members in undocumented_families:
            shown = ', '.join('.' + m for m in members[:8])
            more = f' (+{len(members) - 8} more)' if len(members) > 8 else ''
            print(f'    {family}: {shown}{more}')
        print('')
        print('  The skill cannot use these. Document them in section 4 of')
        print('  design-system-reference.md, or add them to ALLOWLIST in this script.')

    if undocumented_variants:
        n = sum(len(g) for _, g in undocumented_variants)
        print('')
        label = '✗' if STRICT else '!'
        print(f'{label} {n} class(es) in documented components are not in the '
              f'reference:')
        for family, gone in undocumented_variants:
            shown = ', '.join('.' + g for g in gone[:10])
            more = f' (+{len(gone) - 10} more)' if len(gone) > 10 else ''
            print(f'    {family}: {shown}{more}')
        if not STRICT:
            print('')
            print('  Not fatal: the reference documents a component\'s public shape, '
                  'not every')
            print('  internal element. Worth a look if one of these is a variant '
                  'people should use.')

    failed = bool(undocumented_families) or (STRICT and bool(undocumented_variants))
    clean = not undocumented_families and not undocumented_variants
    if clean and not QUIET:
        print('✓ Every component in components.css is in the reference.')
    return 1 if failed else 0


if __name__ == '__main__':
    sys.exit(main())
