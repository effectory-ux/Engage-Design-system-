#!/usr/bin/env bash
# Fetch the design system into the current project.
#
#   ./ds-update.sh              → latest on main
#   ./ds-update.sh d7ac1a5      → that exact commit
#   ./ds-update.sh --check      → report only, change nothing
#
# Writes ds-pin.json so the project records what it is running, and so a later
# run can tell you whether you are behind.

set -euo pipefail
REPO="effectory-ux/Engage-Design-system-"
RAW="https://raw.githubusercontent.com/$REPO"
API="https://api.github.com/repos/$REPO"
FILES=(tokens.css foundation.css components.css icons.js i18n.js effectiveness.js effectiveness.css)

REF="${1:-main}"
CHECK=0
[ "$REF" = "--check" ] && { CHECK=1; REF="main"; }

LATEST=$(curl -fsSL "$API/commits/main" | python3 -c 'import sys,json;print(json.load(sys.stdin)["sha"][:7])')
CURRENT=$(python3 -c 'import json;print(json.load(open("ds-pin.json"))["ref"])' 2>/dev/null || echo "")

if [ -n "$CURRENT" ]; then
  echo "pinned to : $CURRENT"
else
  echo "pinned to : (not pinned yet)"
fi
echo "latest    : $LATEST"

if [ "$CHECK" = "1" ]; then
  [ "$CURRENT" = "$LATEST" ] && echo "✓ up to date" || echo "→ an update is available: ./ds-update.sh"
  exit 0
fi

[ "$REF" = "main" ] && REF="$LATEST"
echo "→ fetching $REF"
for f in "${FILES[@]}"; do
  curl -fsSL "$RAW/$REF/$f" -o "$f" && echo "  $f"
done

# icons + illustrations: only what this project actually references, not all 211
mkdir -p assets/icons assets/illustrations
USED=$(grep -rho 'data-icon="[^"]*"' . --include=*.html 2>/dev/null | sed 's/.*="//;s/"//' | sort -u)
for n in $USED; do
  curl -fsSL "$RAW/$REF/assets/icons/$n.svg" -o "assets/icons/$n.svg" 2>/dev/null || true
done
echo "  assets/icons/ ($(echo "$USED" | grep -c . ) referenced icons)"

python3 - "$REF" <<'PY'
import json, sys, datetime
json.dump({"designSystem": "effectory-ux/Engage-Design-system-",
           "ref": sys.argv[1],
           "pinned": datetime.date.today().isoformat()},
          open("ds-pin.json", "w"), indent=2)
PY
echo "✓ ds-pin.json updated → $REF"
