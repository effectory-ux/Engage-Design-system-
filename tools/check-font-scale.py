#!/usr/bin/env python3
"""Fail on a font-size that is not on the type scale.

The scale is 12 / 14 / 16 / 20 / 26 / 32 / 42 (foundation.css, .text-l1….text-l6
plus .text-small/.text-medium/.text-large). Anything else is a size someone
invented while eyeballing a design, and it is invisible in review: 15px next to
14px looks like nothing in a diff and like a mismatch on screen. 15px in
particular is banned outright — it crept in twice through copied prototype CSS.

LEGACY holds the off-scale sizes that already existed when this check landed.
They are tolerated so the check can run green, not endorsed: do not add to that
set. Use the nearest scale step instead, and if a design genuinely needs a new
size, add it to foundation.css as a text class first so it is a decision rather
than a one-off.

docs/styles.css is reported but does not fail the build. It is the documentation
site's own chrome, and it runs on a deliberate half-step system (11.5 / 12.5 /
13.5) that predates this check — a different surface from the payload prototypes
actually load. 15px is still a hard failure there, everywhere, as asked.
"""
import re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

SCALE = {12, 14, 16, 20, 26, 32, 42}
# Pre-existing off-scale sizes. Frozen on purpose — this set should shrink, never grow.
LEGACY = {10, 11, 13, 18, 22}
NEVER = {15}          # called out separately so the message can say why

SKIP_DIRS = {'.git', 'node_modules', 'dist', 'assets'}
# the docs chrome has its own half-step sizes; report them, don't block on them
SOFT = {Path('docs/styles.css')}
FONT_RE = re.compile(r'font-size:\s*([0-9]+(?:\.[0-9]+)?)px', re.I)

errors, warnings, legacy_hits = [], [], 0

for path in sorted(ROOT.rglob('*.css')):
    if any(part in SKIP_DIRS for part in path.parts):
        continue
    rel = path.relative_to(ROOT)
    for line_no, line in enumerate(path.read_text(encoding='utf-8').splitlines(), 1):
        if 'check-font-scale: allow' in line:
            continue
        for m in FONT_RE.finditer(line):
            raw = m.group(1)
            val = float(raw)
            as_int = int(val) if val.is_integer() else None
            if as_int in SCALE:
                continue
            if as_int in LEGACY:
                legacy_hits += 1
                continue
            if as_int in NEVER:
                errors.append(f'{rel}:{line_no}  font-size: {raw}px — 15px is never allowed')
            elif rel in SOFT:
                warnings.append(f'{rel}:{line_no}  font-size: {raw}px')
            else:
                errors.append(f'{rel}:{line_no}  font-size: {raw}px')

if warnings:
    print(f'! {len(warnings)} off-scale size(s) in the docs chrome — pre-existing, not blocking:')
    for w in sorted(set(warnings)):
        print('   ', w)
if errors:
    print(f'\n✗ {len(errors)} off-scale font-size(s):')
    for e in sorted(set(errors)):
        print('   ', e)
    print('\nThe type scale is 12 / 14 / 16 / 20 / 26 / 32 / 42 (foundation.css).')
    print('Pick the nearest step, or add a text class to foundation.css first.')
    print('A deliberate exception needs "check-font-scale: allow" on the line.')
    sys.exit(1)
print(f'✓ Font scale: every size is on the scale ({legacy_hits} legacy off-scale, not growing)')
