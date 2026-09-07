#!/usr/bin/env bash
# Regenerate everything that is derived: skill-source/ (the org bundle) and
# skill-manifest.json (root copy + bundle copy). Idempotent; safe to run any time.
#
#   tools/regenerate.sh            regenerate and list what changed
#   tools/regenerate.sh --quiet    same, but stay silent when nothing changed
#
# Who runs it, so that nobody has to remember:
#   · .githooks/pre-commit, when a skill or design-system source is staged
#   · CI (.github/workflows/checks.yml) on every pull request — it refuses the
#     pull request when the committed copies differ from what it regenerates
#     (or commits the fix itself when the REGEN_TOKEN secret is set)
#   · the release workflow, right before it zips the bundle
#
# assets.tar.gz is only replaced when its *content* changed: tar/gzip output is
# not byte-stable, so a blind rebuild would show a diff on every run.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
QUIET=0
[ "${1:-}" = "--quiet" ] && QUIET=1
TARBALL="skill-source/design-system-files/assets.tar.gz"

# fingerprint of the derived files, so the report lists what *this run* changed
snapshot() { { [ -f skill-manifest.json ] && shasum skill-manifest.json; find skill-source -type f -print0 | sort -z | xargs -0 shasum; } 2>/dev/null; }
before="$(snapshot)"

# 1. does the committed tarball already carry exactly what assets/ holds?
assets_current=0
if python3 tools/check-bundle-assets.py >/dev/null 2>&1; then assets_current=1; fi

# 2. sync the bundle. The drift checks are CI steps of their own (and run in the
#    hook via sync-skill.sh's default); here we only derive.
SKIP_DRIFT_CHECK="${SKIP_DRIFT_CHECK:-1}" bash tools/sync-skill.sh >/dev/null

# 3. when only the bytes of the tarball moved, put the committed one back
if [ "$assets_current" = 1 ] && ! git diff --quiet -- "$TARBALL" 2>/dev/null; then
  git checkout -- "$TARBALL" 2>/dev/null || true
fi

# 4. the manifest, in both places
python3 tools/build-manifest.py >/dev/null
cp skill-manifest.json skill-source/skill-manifest.json

# 5. report what this run changed
after="$(snapshot)"
# diff exits 1 when the two differ, which is the interesting case — not an error
changed="$(diff <(echo "$before") <(echo "$after") | sed -n 's/^> [0-9a-f]*  //p' || true)"
if [ -n "$changed" ]; then
  echo "→ regenerated:"
  echo "$changed" | sed 's/^/    /'
elif [ "$QUIET" = 0 ]; then
  echo "✓ derived files already current"
fi
