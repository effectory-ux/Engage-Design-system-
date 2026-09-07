#!/usr/bin/env bash
# Kept for the project skill's instructions; the implementation lives in ds-skill.sh.
#
#   tools/ds-update.sh            → ds-skill.sh apply           (latest, honours ds-pin.json)
#   tools/ds-update.sh --check    → ds-skill.sh apply --check   (report only)
#   tools/ds-update.sh --force    → ds-skill.sh apply --force   (update a manual-pinned project)
#   tools/ds-update.sh <sha>      → ds-skill.sh apply --ref <sha>
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
case "${1:-}" in
  "")               exec bash "$HERE/ds-skill.sh" apply ;;
  --check|--force)  exec bash "$HERE/ds-skill.sh" apply "$1" ;;
  *)                exec bash "$HERE/ds-skill.sh" apply --ref "$1" ;;
esac
