#!/usr/bin/env python3
"""Generate changelog.json from the git history.

Each commit becomes an entry with the real author, date, short hash and
subject, plus the list of component doc pages it touched (so each page can
show only its own changes). Run this before committing/releasing:

    python3 build-changelog.py

Output: ./changelog.json  (served by GitHub Pages, fetched by nav.js)
"""
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "docs" / "changelog.json"

# A commit "touches a page" when it changes that page's *-docs.html file (or
# index.html). Changes to shared files (components.css, styles.css, scripts)
# still appear in the global changelog, just without a per-page tag.
PAGE_RE = re.compile(r"(^|/)([a-z0-9-]+-docs\.html|index\.html)$")

# Commit subjects we never want to surface (housekeeping noise).
SKIP_SUBJECT_RE = re.compile(r"^(Merge |WIP\b)", re.IGNORECASE)

SEP = "\x1f"  # unit separator between fields
REC = "\x1e"  # record separator between commits


def git_log():
    # Lead each commit with REC so we can split cleanly; the head line holds
    # the SEP-joined fields, the remaining lines are the changed files.
    fmt = REC + SEP.join(["%h", "%an", "%ad", "%s"])
    out = subprocess.run(
        ["git", "log", "--no-merges", "--date=short",
         f"--pretty=format:{fmt}", "--name-only"],
        cwd=ROOT, capture_output=True, text=True, check=True,
    ).stdout
    entries = []
    for chunk in out.split(REC):
        if not chunk.strip():
            continue
        lines = chunk.splitlines()
        parts = lines[0].split(SEP)
        if len(parts) < 4:
            continue
        h, author, date, subject = parts[0], parts[1], parts[2], parts[3]
        if SKIP_SUBJECT_RE.match(subject):
            continue
        pages = sorted({
            Path(line).name
            for line in lines[1:]
            if PAGE_RE.search(line.strip())
        })
        entries.append({
            "hash": h,
            "author": author,
            "date": date,
            "subject": subject,
            "pages": pages,
        })
    return entries


def main():
    try:
        entries = git_log()
    except subprocess.CalledProcessError as e:
        print("git log failed:", e.stderr, file=sys.stderr)
        sys.exit(1)
    data = {"count": len(entries), "entries": entries}
    OUT.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    print(f"✓ Wrote {OUT.name}: {len(entries)} commits")


if __name__ == "__main__":
    main()
