#!/usr/bin/env bash
# Fetch skill content from the repo, keeping a local copy as it goes.
#
#   ds-skill.sh sync            refresh the manifest + reference doc
#   ds-skill.sh screen <slug>   fetch one reference screen (html + md)
#   ds-skill.sh status          what is cached, and how fresh
#
# Every successful fetch is written to .ds-cache/ . If GitHub is unreachable the
# cached copy is used instead, so a network problem degrades to "slightly old"
# rather than "skill does not work". The cache is only ever replaced by a
# successful download, never emptied on failure.

set -uo pipefail
REF="${DS_REF:-main}"
RAW="https://raw.githubusercontent.com/effectory-ux/Engage-Design-system-/$REF"
SKILLPATH=".claude/skills/effectory-design-system"
CACHE="${DS_CACHE:-.ds-cache}"
mkdir -p "$CACHE/reference-prototypes"

# Cold start: the org bundle ships a copy of the manifest and the reference doc.
# Seed the cache from it so a first run with no network still works — the fetch
# below then refreshes it whenever the network is there.
seed() {
  local src="$1" dest="$2"
  [ -s "$dest" ] && return 0
  [ -s "$src" ] || return 0
  cp "$src" "$dest" && echo "  · seeded $(basename "$dest") from the bundle"
}
seed "skill-manifest.json"           "$CACHE/skill-manifest.json"
seed "design-system-reference.md"    "$CACHE/design-system-reference.md"

# fetch <url> <cache-path> <label>
fetch() {
  local url="$1" dest="$2" label="$3" tmp
  tmp="$(mktemp)"
  if curl -fsSL --max-time 20 "$url" -o "$tmp" 2>/dev/null && [ -s "$tmp" ]; then
    mv "$tmp" "$dest"
    echo "  ✓ $label (fetched)"
    return 0
  fi
  rm -f "$tmp"
  if [ -s "$dest" ]; then
    echo "  ~ $label (offline — using cached copy from $(date -r "$dest" '+%d %b %H:%M'))"
    return 0
  fi
  echo "  ✗ $label — not reachable and nothing cached"
  return 1
}

case "${1:-sync}" in
  sync)
    echo "→ Design system skill"
    fetch "$RAW/skill-manifest.json" "$CACHE/skill-manifest.json" "manifest" || exit 1
    ref=$(python3 -c "import json;print(json.load(open('$CACHE/skill-manifest.json'))['reference']['url'])")
    fetch "$ref" "$CACHE/design-system-reference.md" "design-system-reference.md" || exit 1
    v=$(python3 -c "import json;print(json.load(open('$CACHE/skill-manifest.json'))['version'])")
    n=$(python3 -c "import json;print(len(json.load(open('$CACHE/skill-manifest.json'))['screens']))")
    echo "  v$v · $n reference screens available"
    ;;
  screen)
    slug="${2:?usage: ds-skill.sh screen <slug>}"
    for ext in md html; do
      # the bundle ships a copy of every screen too — seed it so a cold offline
      # start can still open one, then let the fetch refresh it
      seed "reference-prototypes/$slug.$ext" "$CACHE/reference-prototypes/$slug.$ext"
      fetch "$RAW/$SKILLPATH/reference-prototypes/$slug.$ext" \
            "$CACHE/reference-prototypes/$slug.$ext" "$slug.$ext" || exit 1
    done
    ;;
  status)
    if [ -f "$CACHE/skill-manifest.json" ]; then
      python3 - "$CACHE" <<'PY'
import json, sys, os, time
c = sys.argv[1]; m = json.load(open(f'{c}/skill-manifest.json'))
age = (time.time() - os.path.getmtime(f'{c}/skill-manifest.json')) / 3600
print(f"  cached manifest : v{m['version']}, {age:.1f}h old, {len(m['screens'])} screens")
have = sorted({f.rsplit('.',1)[0] for f in os.listdir(f'{c}/reference-prototypes')}) \
       if os.path.isdir(f'{c}/reference-prototypes') else []
print(f"  cached screens  : {len(have)}" + (f" ({', '.join(have)})" if have else ""))
PY
    else
      echo "  nothing cached yet — run: tools/ds-skill.sh sync"
    fi
    ;;
  *) echo "usage: ds-skill.sh [sync|screen <slug>|status]"; exit 1 ;;
esac
