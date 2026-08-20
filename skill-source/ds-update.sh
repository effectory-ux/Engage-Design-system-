#!/usr/bin/env bash
# Manage the design system copy inside a prototype.
#
#   ds-update.sh --check      is this project behind? what would change? changes nothing
#   ds-update.sh              take the latest from main
#   ds-update.sh <ref>        take that exact commit
#   ds-update.sh --revert     put the previous copy back
#
# The project keeps its own vendored copy of the design system, so a prototype
# renders the same tomorrow as it does today. ds-pin.json records which commit
# that copy came from. Before replacing anything the current files are copied to
# .ds-prev/ , so an update that breaks a screen can be undone in one command.

set -uo pipefail
REPO="effectory-ux/Engage-Design-system-"
RAW="https://raw.githubusercontent.com/$REPO"
API="https://api.github.com/repos/$REPO"
FILES=(tokens.css foundation.css components.css icons.js i18n.js effectiveness.js effectiveness.css)
PREV=".ds-prev"

pinned_ref() { python3 -c "import json;print(json.load(open('ds-pin.json'))['ref'])" 2>/dev/null || echo ""; }
pinned_mode() { python3 -c "import json;print(json.load(open('ds-pin.json')).get('update','auto'))" 2>/dev/null || echo "auto"; }
latest_ref() { curl -fsSL --max-time 15 "$API/commits/main" \
  | python3 -c 'import sys,json;print(json.load(sys.stdin)["sha"][:7])' 2>/dev/null || echo ""; }

write_pin() {
  python3 - "$1" "$2" <<'PY'
import json, sys, datetime, os
ref, mode = sys.argv[1], sys.argv[2]
json.dump({"designSystem": "effectory-ux/Engage-Design-system-",
           "ref": ref, "pinned": datetime.date.today().isoformat(), "update": mode},
          open("ds-pin.json", "w"), indent=2)
PY
}

# --------------------------------------------------------------- --revert
if [ "${1:-}" = "--revert" ]; then
  [ -d "$PREV" ] || { echo "✗ nothing to revert to — no $PREV/"; exit 1; }
  for f in "${FILES[@]}"; do [ -f "$PREV/$f" ] && cp "$PREV/$f" "$f"; done
  [ -f "$PREV/ds-pin.json" ] && cp "$PREV/ds-pin.json" ds-pin.json
  echo "✓ Reverted to $(pinned_ref) — the copy from before the last update"
  exit 0
fi

CUR="$(pinned_ref)"; MODE="$(pinned_mode)"
LATEST="$(latest_ref)"
[ -z "$LATEST" ] && { echo "! Could not reach GitHub — keeping the current copy ($CUR)"; exit 0; }

# --------------------------------------------------------------- --check
if [ "${1:-}" = "--check" ]; then
  if [ -z "$CUR" ]; then echo "not pinned yet · latest is $LATEST"; exit 0; fi
  if [ "$CUR" = "$LATEST" ]; then echo "up to date ($CUR)"; exit 0; fi
  echo "behind: on $CUR, latest is $LATEST  [mode: $MODE]"
  # say which files would actually change, so the choice is informed
  changed=0
  for f in "${FILES[@]}"; do
    [ -f "$f" ] || continue
    if ! curl -fsSL --max-time 15 "$RAW/$LATEST/$f" 2>/dev/null | diff -q - "$f" >/dev/null 2>&1; then
      echo "  would change: $f"; changed=$((changed+1))
    fi
  done
  [ "$changed" = 0 ] && echo "  no file differences — only the commit moved"
  exit 0
fi

# --------------------------------------------------------------- update
REF="${1:-$LATEST}"; [ "$REF" = "main" ] && REF="$LATEST"

# keep the copy we are about to replace
mkdir -p "$PREV"
for f in "${FILES[@]}"; do [ -f "$f" ] && cp "$f" "$PREV/$f"; done
[ -f ds-pin.json ] && cp ds-pin.json "$PREV/ds-pin.json"

echo "→ fetching $REF"
for f in "${FILES[@]}"; do
  curl -fsSL --max-time 20 "$RAW/$REF/$f" -o "$f" 2>/dev/null && echo "  $f"
done

# icons + illustrations: only what this project references, not all 211
mkdir -p assets/icons
USED=$(grep -rho 'data-icon="[^"]*"' . --include=*.html 2>/dev/null | sed 's/.*="//;s/"//' | sort -u)
for n in $USED; do
  curl -fsSL --max-time 20 "$RAW/$REF/assets/icons/$n.svg" -o "assets/icons/$n.svg" 2>/dev/null || true
done
echo "  assets/icons/ ($(echo "$USED" | grep -c .) referenced icons)"

write_pin "$REF" "$MODE"
echo "✓ now on $REF   (previous copy kept in $PREV/ — ds-update.sh --revert to undo)"
