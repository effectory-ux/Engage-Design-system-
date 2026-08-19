#!/usr/bin/env bash
# Build a .zip file from skill-source/ for upload as an Organization Skill.
# Run ./sync-skill.sh FIRST so the bundle is up to date.
#
# Output: ./dist/effectory-design-system.zip
#
# Upload via: Claude.ai → Organization settings → Skills → Add → select the .zip

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SKILL_SRC="$ROOT/skill-source"
OUT_DIR="$ROOT/dist"
OUT_FILE="$OUT_DIR/effectory-design-system.zip"
TMP_FILE="/tmp/effectory-design-system.zip"

mkdir -p "$OUT_DIR"
rm -f "$TMP_FILE" "$OUT_FILE"

echo "→ Building skill zip"
cd "$SKILL_SRC"
zip -rq "$TMP_FILE" . -x "*.DS_Store"
cp "$TMP_FILE" "$OUT_FILE"
rm "$TMP_FILE"

SIZE=$(du -h "$OUT_FILE" | awk '{print $1}')
VER=$(tr -d '[:space:]' < "$ROOT/VERSION" 2>/dev/null || echo "?")
echo ""
echo "✓ Built: dist/effectory-design-system.zip (v$VER, $SIZE)"
echo ""
echo "Upload to:"
echo "  Claude.ai → Organization settings → Skills → + Add → select this .zip"
echo ""
echo "Prerequisite: 'Code execution and file creation' must be enabled in"
echo "Organization settings → Capabilities."
