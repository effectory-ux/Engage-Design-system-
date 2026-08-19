#!/usr/bin/env bash
# Sync repo files → skill-source/ bundle
# Run this after updating the design system, before building the .zip.
#
# What it checks first:
#   - check-reference-drift.py — fails the sync if components.css has a component
#     that design-system-reference.md never mentions (the skill would refuse to
#     use it). Bypass with SKIP_DRIFT_CHECK=1.
#
# What it syncs:
#   - design-system-reference.md  (from .claude/skills/...)
#   - tokens.css, foundation.css, components.css, icons.js, serve.py
#   - assets/icons/ + assets/illustrations/ (packed into assets.tar.gz)
#
# What it does NOT sync:
#   - SKILL.md — has different paths from the project skill. Edit
#     skill-source/SKILL.md directly if you need to change the rules.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
PROJECT_SKILL="$ROOT/.claude/skills/effectory-design-system"
SKILL_SRC="$ROOT/skill-source"
BUNDLE="$SKILL_SRC/design-system-files"

# The reference doc is hand-maintained, so components.css can gain a component
# the reference never mentions — and the skill refuses to use what the reference
# does not list. Catch that before it ships. Override with SKIP_DRIFT_CHECK=1.
if [ "${SKIP_DRIFT_CHECK:-0}" != "1" ]; then
  if ! "$ROOT/check-reference-drift.py"; then
    echo ""
    echo "✗ Sync aborted: components.css and design-system-reference.md are out of sync."
    echo "  Fix the reference, or re-run with SKIP_DRIFT_CHECK=1 to sync anyway."
    exit 1
  fi
  echo ""
fi

VER=$(tr -d '[:space:]' < "$ROOT/VERSION")
echo "→ Stamping version $VER"
cp "$ROOT/VERSION" "$SKILL_SRC/VERSION"
# Keep the **Version:** line in SKILL.md in sync with the VERSION file
sed -i.bak "s/^\*\*Version:\*\*.*/**Version:** $VER/" "$SKILL_SRC/SKILL.md" && rm -f "$SKILL_SRC/SKILL.md.bak"

echo "→ Syncing reference doc"
cp "$PROJECT_SKILL/design-system-reference.md" "$SKILL_SRC/design-system-reference.md"

echo "→ Syncing CSS / JS / serve.py"
for f in tokens.css foundation.css components.css icons.js serve.py; do
  cp "$ROOT/$f" "$BUNDLE/$f"
done

echo "→ Bundling icons + illustrations into assets.tar.gz (org-skills have a file-count limit)"
rm -f "$BUNDLE/assets.tar.gz" "$BUNDLE/icons.tar.gz"
rm -rf "$BUNDLE/assets"
( cd "$ROOT/assets" && tar --exclude='.DS_Store' -czf "$BUNDLE/assets.tar.gz" icons illustrations )

echo ""
echo "✓ skill-source/ in sync."
echo ""
echo "Reminder: if you edited the rules in SKILL.md, update them in BOTH places:"
echo "  - $PROJECT_SKILL/SKILL.md (project skill, used in Claude Code locally)"
echo "  - $SKILL_SRC/SKILL.md (org skill, distributed to the team)"
echo ""
echo "Next: ./build-skill.sh to produce dist/effectory-design-system.zip"
