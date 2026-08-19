#!/usr/bin/env python3
"""
Keep the two SKILL.md copies and the two reference-prototypes folders in step.

SKILL.md lives in two writable places here (the project skill and the org
bundle) and sync-skill.sh deliberately does not copy it, because the two differ
in frontmatter, the Setup section and their paths. Everything else about them is
supposed to be identical, and today it silently was not: four commits had piled
up on one side. Adding a reference screen has the same shape — four manual
copies, and a half-finished one looks exactly like a finished one.

Checks:
  A  the numbered rules match between the two SKILL.md copies
  B  the registered reference screens match between the two copies
  C  both reference-prototypes folders are identical, every .html has a .md,
     and every screen is registered in both SKILL.md files
  D  every "regel N" cross-reference points at a rule that exists

Usage:
  ./check-skill-consistency.py           # report and fail on any problem
  ./check-skill-consistency.py --quiet   # only print problems
"""
import filecmp
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROJECT = os.path.join(ROOT, '.claude/skills/effectory-design-system')
ORG = os.path.join(ROOT, 'skill-source')
QUIET = '--quiet' in sys.argv

RULE_RE = re.compile(r'^### (\d+)\.\s*(.+?)\s*$', re.M)
SCREEN_RE = re.compile(r'`reference-prototypes/([\w-]+)\.md`')
REF_RE = re.compile(r'regel (\d+)', re.I)

problems = []


def report(msg):
    problems.append(msg)


def read(path):
    with open(path, encoding='utf-8') as f:
        return f.read()


def main():
    for path in (f'{PROJECT}/SKILL.md', f'{ORG}/SKILL.md'):
        if not os.path.exists(path):
            print(f'✗ missing file: {path}')
            return 1

    proj, org = read(f'{PROJECT}/SKILL.md'), read(f'{ORG}/SKILL.md')

    # A — the numbered rules
    proj_rules = RULE_RE.findall(proj)
    org_rules = RULE_RE.findall(org)
    if proj_rules != org_rules:
        report('The numbered rules differ between the two SKILL.md copies:')
        for n, t in sorted(set(proj_rules) ^ set(org_rules)):
            where = 'project only' if (n, t) in proj_rules else 'org bundle only'
            report(f'    {n}. {t}  ({where})')

    # B — registered reference screens
    proj_screens = sorted(set(SCREEN_RE.findall(proj)))
    org_screens = sorted(set(SCREEN_RE.findall(org)))
    if proj_screens != org_screens:
        report('The registered reference screens differ between the two SKILL.md copies:')
        for s in sorted(set(proj_screens) ^ set(org_screens)):
            where = 'project only' if s in proj_screens else 'org bundle only'
            report(f'    {s}  ({where})')

    # C — the folders themselves
    proj_dir, org_dir = f'{PROJECT}/reference-prototypes', f'{ORG}/reference-prototypes'
    cmp_result = filecmp.dircmp(proj_dir, org_dir)
    for name in sorted(cmp_result.left_only):
        report(f'reference-prototypes/{name} is only in the project skill')
    for name in sorted(cmp_result.right_only):
        report(f'reference-prototypes/{name} is only in the org bundle')
    _, mismatch, errors = filecmp.cmpfiles(
        proj_dir, org_dir, cmp_result.common_files, shallow=False)
    for name in sorted(mismatch) + sorted(errors):
        report(f'reference-prototypes/{name} differs between the two copies')

    on_disk = sorted(f[:-5] for f in os.listdir(org_dir) if f.endswith('.html'))
    for screen in on_disk:
        if not os.path.exists(f'{org_dir}/{screen}.md'):
            report(f'reference-prototypes/{screen}.html has no {screen}.md next to it')
        if screen not in org_screens:
            report(f'{screen}.html is in reference-prototypes/ but registered in no SKILL.md')
    for screen in org_screens:
        if screen not in on_disk:
            report(f'{screen} is registered in SKILL.md but has no .html in reference-prototypes/')

    # D — cross-references
    for label, text in (('project skill', proj), ('org bundle', org)):
        numbers = {n for n, _ in RULE_RE.findall(text)}
        for ref in sorted(set(REF_RE.findall(text))):
            if ref not in numbers:
                report(f'{label}: "regel {ref}" points at a rule that does not exist')

    if not QUIET:
        print(f'→ Skill consistency: {len(org_rules)} rules, '
              f'{len(org_screens)} reference screens')

    if problems:
        print('')
        print(f'✗ {len(problems)} problem(s):')
        for p in problems:
            print(f'  {p}' if p.startswith('    ') else f'  · {p}')
        print('')
        print('  Both SKILL.md copies and both reference-prototypes folders carry the')
        print('  same content; only frontmatter, the Setup section and the paths differ.')
        return 1

    if not QUIET:
        print('✓ Both skill copies carry the same rules and the same screens.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
