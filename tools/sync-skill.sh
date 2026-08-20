#!/usr/bin/env bash
# Sync repo files → skill-source/ bundle
# Run this after updating the design system, before building the .zip.
#
# What it checks first:
#   - check-reference-drift.py — fails the sync if components.css has a component
#     that design-system-reference.md never mentions (the skill would refuse to
#     use it).
#   - check-skill-consistency.py — fails the sync if the two SKILL.md copies or
#     the two reference-prototypes folders have drifted apart.
#   Bypass both with SKIP_DRIFT_CHECK=1.
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

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PROJECT_SKILL="$ROOT/.claude/skills/effectory-design-system"
SKILL_SRC="$ROOT/skill-source"
BUNDLE="$SKILL_SRC/design-system-files"

# Two hand-maintained things can silently rot, and both would ship:
#   - components.css gaining a component the reference never mentions, which the
#     skill then refuses to use
#   - the two SKILL.md copies or the two reference-prototypes folders drifting
# Catch both before the bundle is touched. Override with SKIP_DRIFT_CHECK=1.
if [ "${SKIP_DRIFT_CHECK:-0}" != "1" ]; then
  if ! "$ROOT/tools/check-reference-drift.py"; then
    echo ""
    echo "✗ Sync aborted: components.css and design-system-reference.md are out of sync."
    echo "  Fix the reference, or re-run with SKIP_DRIFT_CHECK=1 to sync anyway."
    exit 1
  fi
  echo ""
  if ! "$ROOT/tools/check-skill-consistency.py"; then
    echo ""
    echo "✗ Sync aborted: the two skill copies do not carry the same content."
    echo "  Fix them, or re-run with SKIP_DRIFT_CHECK=1 to sync anyway."
    exit 1
  fi
  echo ""
fi

VER=$(tr -d '[:space:]' < "$ROOT/VERSION")
echo "→ Stamping version $VER"
cp "$ROOT/VERSION" "$SKILL_SRC/VERSION"
# Keep the **Version:** line in SKILL.md in sync with the VERSION file
sed -i.bak "s/^\*\*Version:\*\*.*/**Version:** $VER/" "$SKILL_SRC/SKILL.md" && rm -f "$SKILL_SRC/SKILL.md.bak"

cp "$ROOT/tools/ds-update.sh" "$SKILL_SRC/ds-update.sh"
chmod +x "$SKILL_SRC/ds-update.sh"
cp "$ROOT/tools/ds-skill.sh" "$SKILL_SRC/ds-skill.sh"
chmod +x "$SKILL_SRC/ds-skill.sh"
cp "$ROOT/skill-manifest.json" "$SKILL_SRC/skill-manifest.json"

echo "→ Syncing reference doc"
cp "$PROJECT_SKILL/design-system-reference.md" "$SKILL_SRC/design-system-reference.md"

echo "→ Syncing CSS / JS / serve.py"
for f in tokens.css foundation.css components.css icons.js; do
  cp "$ROOT/$f" "$BUNDLE/$f"
done

cp "$ROOT/tools/serve.py" "$BUNDLE/serve.py"

echo "→ Bundling icons + illustrations into assets.tar.gz (org-skills have a file-count limit)"
rm -f "$BUNDLE/assets.tar.gz" "$BUNDLE/icons.tar.gz"
rm -rf "$BUNDLE/assets"
( cd "$ROOT/assets" && tar --exclude='.DS_Store' -czf "$BUNDLE/assets.tar.gz" icons illustrations )

echo ""
echo "✓ skill-source/ in sync."
echo ""
echo "Reminder: SKILL.md is written HERE, never in effectory-design-documentation."
echo "That copy is downstream; refresh it from this one. Both places here:"
echo "  - $PROJECT_SKILL/SKILL.md (project skill, used in Claude Code locally)"
echo "  - $SKILL_SRC/SKILL.md (org skill, distributed to the team)"
echo ""
echo "Next: ./build-skill.sh to produce dist/effectory-design-system.zip"
