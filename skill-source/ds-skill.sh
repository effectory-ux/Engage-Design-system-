#!/usr/bin/env bash
# Fetch skill content from the repo, keeping a local copy as it goes.
#
#   ds-skill.sh sync                    refresh manifest, reference doc and design-system files
#   ds-skill.sh apply [--check|--force|--ref <sha>]
#                                       put the design-system files in the project (honours ds-pin.json)
#   ds-skill.sh screen <slug>           fetch one reference screen (html + md)
#   ds-skill.sh status                  what is cached, how fresh, and what the project is pinned to
#
# Every successful fetch is written to .ds-cache/ in the current directory, the
# project. If GitHub is unreachable the cached copy is used instead, so a network
# problem degrades to "slightly old" rather than "skill does not work". The cache
# is only ever replaced by a successful download, never emptied on failure.
#
# The bundle next to this script is the cold-start copy: it seeds the cache on
# the first run and is what `apply` falls back to without network. `sync` also
# says so when the bundle itself is behind the repo — SKILL.md or this script
# changed — because that is the one thing a fetch cannot fix.
#
# Env overrides: DS_REF (branch or tag, default main), DS_CACHE (default .ds-cache),
#                DS_RAW (raw base URL without the ref, for testing).

set -uo pipefail
REPO="effectory-ux/Engage-Design-system-"
REF="${DS_REF:-main}"
RAWBASE="${DS_RAW:-https://raw.githubusercontent.com/$REPO}"
RAW="$RAWBASE/$REF"
SKILLPATH=".claude/skills/effectory-design-system"
CACHE="${DS_CACHE:-.ds-cache}"
SKILL_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BUNDLE_FILES="$SKILL_DIR/design-system-files"
DS_FILES="tokens.css foundation.css components.css icons.js serve.py"
mkdir -p "$CACHE/reference-prototypes" "$CACHE/design-system-files"

# json <file> <python expression over m>   — tiny jq stand-in
json() { python3 -c 'import json,sys; m=json.load(open(sys.argv[1])); print(eval(sys.argv[2]))' "$1" "$2" 2>/dev/null; }
sha12() { python3 -c 'import hashlib,sys; print(hashlib.sha256(open(sys.argv[1],"rb").read()).hexdigest()[:12])' "$1"; }
repo_path() { case "$1" in serve.py) echo "tools/serve.py" ;; *) echo "$1" ;; esac; }
# URLs in the manifest point at main; honour DS_REF / DS_RAW by re-basing them
rebase_url() { case "$1" in *"/$REPO/main/"*) echo "$RAW/${1#*/$REPO/main/}" ;; *) echo "$1" ;; esac; }

seed() {  # <bundle-file> <cache-file>: cold start from the bundle, only when the cache is empty
  local src="$1" dest="$2"
  [ -s "$dest" ] && return 0
  [ -s "$src" ] || return 0
  cp "$src" "$dest" && echo "  · seeded $(basename "$dest") from the bundle"
}

fetch() {  # <url> <cache-path> <label>
  local url="$1" dest="$2" label="$3" tmp
  tmp="$(mktemp)"
  if curl -fsSL --max-time 20 "$url" -o "$tmp" 2>/dev/null && [ -s "$tmp" ]; then
    mv "$tmp" "$dest"
    echo "  ✓ $label (fetched)"
    return 0
  fi
  rm -f "$tmp"
  if [ -s "$dest" ]; then
    echo "  ~ $label (offline — using cached copy from $(date -r "$dest" '+%d %b %H:%M' 2>/dev/null || echo earlier))"
    return 0
  fi
  echo "  ✗ $label — not reachable and nothing cached"
  return 1
}

manifest_ready() {  # a manifest in the cache, seeded from the bundle if need be; no network
  seed "$SKILL_DIR/skill-manifest.json" "$CACHE/skill-manifest.json"
  [ -s "$CACHE/skill-manifest.json" ]
}

skill_md_sha() {  # hash of the bundled SKILL.md without its stamped **Version:** line
  python3 - "$SKILL_DIR/SKILL.md" <<'PY'
import hashlib, re, sys
t = open(sys.argv[1], encoding='utf-8').read()
t = re.sub(r'^\*\*Version:\*\*.*\n?', '', t, flags=re.M)
print(hashlib.sha256(t.encode('utf-8')).hexdigest()[:12])
PY
}

bundle_notice() {  # the one thing a fetch cannot fix: the bundle itself is behind
  local m="$CACHE/skill-manifest.json" remote_v local_v remote_md remote_sh changed=""
  remote_v="$(json "$m" "m['version']")"
  local_v="$(tr -d '[:space:]' < "$SKILL_DIR/VERSION" 2>/dev/null || echo '?')"
  remote_md="$(json "$m" "m.get('bundle',{}).get('skillMd','')")"
  remote_sh="$(json "$m" "m.get('bundle',{}).get('dsSkill','')")"
  [ -z "$remote_md" ] && return 0   # manifest from before 1.18: nothing to compare
  if [ -s "$SKILL_DIR/SKILL.md" ] && [ "$(skill_md_sha)" != "$remote_md" ]; then changed="de instructies (SKILL.md)"; fi
  if [ "$(sha12 "${BASH_SOURCE[0]}")" != "$remote_sh" ]; then changed="${changed:+$changed en }ds-skill.sh"; fi
  if [ -n "$changed" ]; then
    echo "  ⚠ De skill-bundel is verouderd: $changed veranderde in de repo (bundel v$local_v, repo v$remote_v)."
    echo "    Meld dit één keer aan de gebruiker — de admin moet de skill in Claude.ai bijwerken — en werk door met de huidige instructies."
  elif [ "$local_v" != "$remote_v" ]; then
    echo "  · bundel v$local_v, repo v$remote_v — alleen inhoud veranderde, en die is nu opgehaald."
  fi
}

cmd_sync() {
  echo "→ Design system skill"
  seed "$SKILL_DIR/skill-manifest.json" "$CACHE/skill-manifest.json"
  seed "$SKILL_DIR/design-system-reference.md" "$CACHE/design-system-reference.md"
  fetch "$RAW/skill-manifest.json" "$CACHE/skill-manifest.json" "manifest" || exit 1
  local m="$CACHE/skill-manifest.json" f url
  fetch "$(rebase_url "$(json "$m" "m['reference']['url']")")" "$CACHE/design-system-reference.md" "design-system-reference.md" || exit 1
  for f in $DS_FILES; do
    seed "$BUNDLE_FILES/$f" "$CACHE/design-system-files/$f"
    url="$(json "$m" "(m.get('designSystem',{}).get('$f') or {}).get('url','') if isinstance(m.get('designSystem',{}).get('$f'), dict) else ''")"
    [ -z "$url" ] && url="$RAW/$(repo_path "$f")"
    fetch "$(rebase_url "$url")" "$CACHE/design-system-files/$f" "$f" || true
  done
  echo "  v$(json "$m" "m['version']") · $(json "$m" "len(m['screens'])") reference screens available"
  bundle_notice
}

fetch_missing_icons() {  # icons the project references but does not have yet
  local used n missing=0 got=0
  used="$(grep -rho 'data-icon="[^"]*"' . --include='*.html' --exclude-dir="$CACHE" --exclude-dir=.ds-cache 2>/dev/null | sed 's/.*="//;s/"//' | sort -u)"
  [ -z "$used" ] && return 0
  mkdir -p assets/icons
  for n in $used; do
    [ -s "assets/icons/$n.svg" ] && continue
    missing=$((missing + 1))
    if curl -fsSL --max-time 20 "$RAW/assets/icons/$n.svg" -o "assets/icons/$n.svg" 2>/dev/null; then got=$((got + 1)); else rm -f "assets/icons/$n.svg"; fi
  done
  [ "$missing" -gt 0 ] && echo "  · icons: $got of $missing missing icons fetched"
  return 0
}

cmd_apply() {
  local check=0 force=0 pinref=""
  while [ $# -gt 0 ]; do
    case "$1" in
      --check) check=1 ;;
      --force) force=1 ;;
      --ref)   pinref="${2:?--ref needs a commit or tag}"; shift ;;
      *) echo "usage: ds-skill.sh apply [--check|--force|--ref <sha>]"; exit 1 ;;
    esac
    shift
  done
  manifest_ready || { echo "  ✗ no manifest yet — run ./ds-skill.sh sync first"; exit 1; }
  local m="$CACHE/skill-manifest.json" mode current latest present=0 f src url
  latest="$(json "$m" "m.get('generation') or m['version']")"
  mode="$(json ds-pin.json "m.get('update') or 'auto'" || echo auto)"; [ -z "$mode" ] && mode=auto
  current="$(json ds-pin.json "m.get('ref','')" || echo '')"
  [ -f tokens.css ] && [ -f components.css ] && present=1

  echo "→ Design system in this project"
  if [ -n "$current" ]; then echo "  pinned to : $current ($mode)"; else echo "  pinned to : (not applied yet)"; fi
  echo "  latest    : $latest"

  if [ "$check" = 1 ]; then
    if [ "$current" = "$latest" ]; then echo "  ✓ up to date"
    elif [ -z "$current" ]; then echo "  → not applied yet: ./ds-skill.sh apply"
    elif [ "$mode" = manual ]; then echo "  → an update is available; the project is pinned (manual). Update on request: ./ds-skill.sh apply --force"
    else echo "  → an update is available: ./ds-skill.sh apply"; fi
    return 0
  fi
  if [ "$present" = 1 ] && [ "$mode" = manual ] && [ "$force" = 0 ] && [ -z "$pinref" ]; then
    if [ "$current" = "$latest" ]; then echo "  ✓ pinned (manual) and up to date — nothing changed"
    else echo "  · pinned (manual) — not touched. Update only when the user asks: ./ds-skill.sh apply --force"; fi
    return 0
  fi

  # 1. the five design-system files: an explicit ref, else the cache (refreshed by
  #    sync), else the bundle, else fetch them now
  for f in $DS_FILES; do
    if [ -n "$pinref" ]; then
      fetch "$RAWBASE/$pinref/$(repo_path "$f")" "$CACHE/design-system-files/$f" "$f@$pinref" || exit 1
    fi
    if [ -s "$CACHE/design-system-files/$f" ]; then src="$CACHE/design-system-files/$f"
    elif [ -s "$BUNDLE_FILES/$f" ]; then src="$BUNDLE_FILES/$f"; echo "  · $f from the bundle (run sync for the current version)"
    else
      url="$(json "$m" "(m.get('designSystem',{}).get('$f') or {}).get('url','') if isinstance(m.get('designSystem',{}).get('$f'), dict) else ''")"
      [ -z "$url" ] && url="$RAW/$(repo_path "$f")"
      fetch "$(rebase_url "$url")" "$CACHE/design-system-files/$f" "$f" || exit 1
      src="$CACHE/design-system-files/$f"
    fi
    cp "$src" "./$f"
  done
  echo "  ✓ $DS_FILES"

  # 2. assets: seed icons, illustrations and flags from the bundle once, then top up
  if [ ! -d assets/icons ]; then
    if [ -s "$BUNDLE_FILES/assets.tar.gz" ]; then
      mkdir -p assets && tar -xzf "$BUNDLE_FILES/assets.tar.gz" -C assets/ && echo "  ✓ assets/ (icons, illustrations, flags from the bundle)"
    else
      echo "  · no assets.tar.gz in the bundle; icons are fetched as the project references them"
    fi
  fi
  fetch_missing_icons

  # 3. record what the project runs
  python3 - "${pinref:-$latest}" "$mode" <<'PY'
import json, sys, datetime
json.dump({"designSystem": "effectory-ux/Engage-Design-system-",
           "ref": sys.argv[1],
           "pinned": datetime.date.today().isoformat(),
           "update": sys.argv[2]},
          open("ds-pin.json", "w"), indent=2)
PY
  echo "  ✓ ds-pin.json → ${pinref:-$latest} ($mode)"
}

cmd_screen() {
  local slug="${1:?usage: ds-skill.sh screen <slug>}" ext url m="$CACHE/skill-manifest.json"
  manifest_ready || true
  for ext in md html; do
    seed "$SKILL_DIR/reference-prototypes/$slug.$ext" "$CACHE/reference-prototypes/$slug.$ext"
    url=""
    [ -s "$m" ] && url="$(json "$m" "next((s['$ext']['url'] for s in m['screens'] if s['slug']=='$slug'), '')")"
    [ -z "$url" ] && url="$RAW/$SKILLPATH/reference-prototypes/$slug.$ext"
    fetch "$(rebase_url "$url")" "$CACHE/reference-prototypes/$slug.$ext" "$slug.$ext" || exit 1
  done
}

cmd_status() {
  if [ -f "$CACHE/skill-manifest.json" ]; then
    python3 - "$CACHE" "$SKILL_DIR" <<'PY'
import json, sys, os, time
c, skill = sys.argv[1], sys.argv[2]
m = json.load(open(f'{c}/skill-manifest.json'))
age = (time.time() - os.path.getmtime(f'{c}/skill-manifest.json')) / 3600
gen = m.get('generation', '-')
print(f"  cached manifest : v{m['version']}, {age:.1f}h old, {len(m['screens'])} screens, generation {gen}")
have = sorted({f.rsplit('.', 1)[0] for f in os.listdir(f'{c}/reference-prototypes')}) \
    if os.path.isdir(f'{c}/reference-prototypes') else []
print(f"  cached screens  : {len(have)}" + (f" ({', '.join(have)})" if have else ""))
ds = sorted(os.listdir(f'{c}/design-system-files')) if os.path.isdir(f'{c}/design-system-files') else []
print(f"  cached DS files : {len(ds)}" + (f" ({', '.join(ds)})" if ds else ""))
try:
    v = open(f'{skill}/VERSION').read().strip()
except OSError:
    v = '?'
print(f"  bundle          : v{v}")
if os.path.exists('ds-pin.json'):
    p = json.load(open('ds-pin.json'))
    state = 'up to date' if p.get('ref') == gen else 'behind the cached manifest'
    print(f"  project pin     : {p.get('ref', '?')} ({p.get('update', 'auto')}, pinned {p.get('pinned', '?')}) — {state}")
else:
    print("  project pin     : none yet — run: ./ds-skill.sh apply")
PY
  else
    echo "  nothing cached yet — run: ./ds-skill.sh sync"
  fi
}

case "${1:-sync}" in
  sync)   cmd_sync ;;
  apply)  shift; cmd_apply "$@" ;;
  screen) cmd_screen "${2:-}" ;;
  status) cmd_status ;;
  *) echo "usage: ds-skill.sh [sync|apply [--check|--force|--ref <sha>]|screen <slug>|status]"; exit 1 ;;
esac
