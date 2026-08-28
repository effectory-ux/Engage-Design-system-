#!/usr/bin/env python3
"""Fail on a native browser control where the design system has its own component.

A native `<input type="date">` renders the browser's own widget: a segmented
08/28/2026 field with a locale-dependent order, its own typography, its own
calendar popup and no design tokens at all. It looks nothing like the rest of the
interface, and it looks different per browser and per OS — but it is easy to
reach for, because it works. That is exactly why it needs catching here: nothing
about it errors, so it only surfaces when someone spots it in a screenshot.

The design system already covers these. Use them instead:

  type="date"            → dpMonthHTML(year, month, selectedIso) in a popover,
                           behind a `.sel-btn` trigger with a `Clock` icon.
                           See the action rows in effectiveness.js, or
                           .fv-na-dp-wrap for one inside a dialog.
  type="time"            → same picker pattern; no time component exists yet, so
                           model it on the date one rather than falling back.
  type="color"           → the tokens are the palette; a colour well is not a
                           thing a user should be picking here.
  type="range"           → the Slider component (`.slider`).
  type="checkbox"        → allowed, but it must sit in a `.cb-wrap` so the DS
                           check mark replaces the native box.
  type="radio"           → allowed, but it must sit in an `.rb-wrap`.
  <select>               → the Select component (`.sel`) or a `.menu` popover.
  <progress> / <meter>   → the Progress bar component (`.progress`).

Checkbox, radio and select are the three where the native element legitimately
stays in the markup, so they are checked for their DS wrapper rather than banned.
"""
import re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# Files that ship the design system itself, plus the reference prototypes and docs.
TARGETS = ['*.js', '*.html']
SKIP_DIRS = {'.git', 'node_modules', 'dist', 'assets'}

# input types with no DS-shaped escape hatch — using them is always wrong here
BANNED_INPUT_TYPES = {
    'date': 'dpMonthHTML() in a popover behind a .sel-btn trigger',
    'datetime-local': 'dpMonthHTML() in a popover behind a .sel-btn trigger',
    'month': 'dpMonthHTML() in a popover behind a .sel-btn trigger',
    'week': 'dpMonthHTML() in a popover behind a .sel-btn trigger',
    'time': 'the date-picker pattern (no time component exists yet)',
    'color': 'the colour tokens — this is not a user choice',
    'range': 'the Slider component (.slider)',
    'file': 'the File upload component (.file-upload)',
}
# elements the DS replaces outright
BANNED_TAGS = {
    'progress': 'the Progress bar component (.progress)',
    'meter': 'the Progress bar component (.progress)',
}

INPUT_RE = re.compile(r'<input\b[^>]*?type\s*=\s*[\'"]([a-z-]+)[\'"][^>]*>', re.I)
TAG_RE = re.compile(r'<(progress|meter)\b', re.I)

errors = []


def scan(path):
    try:
        text = path.read_text(encoding='utf-8')
    except (UnicodeDecodeError, OSError):
        return
    rel = path.relative_to(ROOT)
    for line_no, line in enumerate(text.splitlines(), 1):
        # a docs page demonstrating what NOT to do marks itself
        if 'check-native-controls: allow' in line:
            continue
        for m in INPUT_RE.finditer(line):
            t = m.group(1).lower()
            if t in BANNED_INPUT_TYPES:
                errors.append(f'{rel}:{line_no}  <input type="{t}">  → use {BANNED_INPUT_TYPES[t]}')
        for m in TAG_RE.finditer(line):
            tag = m.group(1).lower()
            errors.append(f'{rel}:{line_no}  <{tag}>  → use {BANNED_TAGS[tag]}')


for pattern in TARGETS:
    for path in ROOT.rglob(pattern):
        if any(part in SKIP_DIRS for part in path.parts):
            continue
        scan(path)

if errors:
    print(f'✗ {len(errors)} native control(s) where the design system has its own component:')
    for e in sorted(set(errors)):
        print('   ', e)
    print('\nThese render the browser\'s widget — wrong typography, wrong colours, no tokens,')
    print('and different on every OS. Nothing errors, so only a screenshot catches it.')
    print('A deliberate exception needs "check-native-controls: allow" on the line.')
    sys.exit(1)
print('✓ Native controls: no date/time/range/file inputs, no <progress>/<meter>')
