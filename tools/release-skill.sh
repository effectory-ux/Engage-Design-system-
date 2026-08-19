#!/usr/bin/env bash
# Build the skill bundle and publish it to the rolling "skill-latest" GitHub
# release, so the shareable download URL always serves the newest build:
#
#   https://github.com/effectory-ux/Engage-Design-system-/releases/download/skill-latest/effectory-design-system.zip
#
# Usage:  ./release-skill.sh
# Auth:   the gh CLI. It picks up $GH_TOKEN / $GITHUB_TOKEN by itself, and
#         otherwise uses whatever `gh auth login` stored.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OWNER="effectory-ux"
REPO="Engage-Design-system-"
TAG="skill-latest"
ASSET="effectory-design-system.zip"
ZIP="$ROOT/dist/$ASSET"

# 1. Rebuild the bundle from source
"$ROOT/sync-skill.sh"
"$ROOT/build-skill.sh"

VER=$(tr -d '[:space:]' < "$ROOT/VERSION")
BUILT=$(date +"%Y-%m-%d %H:%M")
TITLE="Effectory Design System — skill v$VER"
BODY=$(cat <<EOF
Version **$VER** · built $BUILT

Always the latest build. Download $ASSET and upload it in Claude.ai → Organization settings → Skills → + Add. (Requires 'Code execution and file creation' enabled.)

The version number is also inside the bundle (VERSION file + SKILL.md).
EOF
)

# 2. Publish with gh, which is already authenticated
if ! command -v gh >/dev/null 2>&1; then
  echo "✗ gh not found. Install the GitHub CLI (brew install gh), then run 'gh auth login'."
  exit 1
fi
if ! gh auth status >/dev/null 2>&1; then
  echo "✗ gh is not logged in. Run 'gh auth login' (or set GH_TOKEN)."
  exit 1
fi

echo "→ Publishing to release '$TAG'"

GH=(--repo "$OWNER/$REPO")

# 3. Refresh the rolling release, creating it the first time
if gh release view "$TAG" "${GH[@]}" >/dev/null 2>&1; then
  gh release edit "$TAG" "${GH[@]}" --title "$TITLE" --notes "$BODY" >/dev/null
else
  gh release create "$TAG" "${GH[@]}" --target main --title "$TITLE" --notes "$BODY" >/dev/null
fi

# 4. Replace the asset. --clobber overwrites the previous upload of the same name,
#    so there is nothing to delete first.
gh release upload "$TAG" "$ZIP" "${GH[@]}" --clobber >/dev/null

URL="https://github.com/$OWNER/$REPO/releases/download/$TAG/$ASSET"

echo ""
echo "✓ Published v$VER. Shareable download URL (stable, always newest):"
echo "  $URL"
