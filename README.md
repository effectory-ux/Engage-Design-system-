# effectory-design-documentation

## Contributor setup

After cloning, enable the versioned git hooks once:

```bash
git config core.hooksPath .githooks
```

This activates the **pre-commit guard against inline SVG icons** in `*-docs.html`
and `index.html` — per CLAUDE.md §14, icons must use `<i data-icon="name">` from
the library. The hook silently allows:

- Do/Don't tick SVGs (`fill="#16a34a"` / `fill="#dc2626"`)
- Tab bar icons inside `<button class="page-tab">`
- Anything preceded by `<!-- icon-exempt: reason -->`

If you genuinely need a decorative inline SVG, annotate it:

```html
<!-- icon-exempt: callout line in anatomy figure -->
<svg ...>...</svg>
```

## Releasing the skill

The skill is distributed as a single rolling GitHub release, **`skill-latest`**, whose download URL never changes and always serves the newest build:

```
https://github.com/effectory-ux/Engage-Design-system-/releases/download/skill-latest/effectory-design-system.zip
```

**Versioning.** The version lives in the root `VERSION` file (single source of truth). Bump it when you ship changes (e.g. `1.17.2` → `1.17.3`). The number is stamped into the bundle (`VERSION` + the `**Version:**` line in `SKILL.md`), shown in the build output, and used as the GitHub release title.

**What is automatic.** Merging to `main` is the release; there is no manual step:

- `.github/workflows/release-skill.yml` rebuilds the bundle on every push to `main` that touches the skill and replaces the `skill-latest` asset, so the download URL above always serves the newest build.
- The pre-commit hook regenerates the derived files — `skill-source/` and `skill-manifest.json` — whenever a skill or design-system source is staged (`tools/regenerate.sh`), so a commit is complete before it leaves your machine. Enable the hooks once per clone: `git config core.hooksPath .githooks`.
- `.github/workflows/checks.yml` runs the drift checks on every pull request and **refuses a pull request whose derived files are stale**, printing the exact command to fix it. Optional: add a `REGEN_TOKEN` repository secret (fine-grained PAT, Contents: read/write on this repo) and the workflow commits the regeneration to the branch itself instead of failing.
- `main` is protected: changes arrive through a pull request whose `checks` run is green. Direct pushes are refused.

**What is not automatic.** The deployed skill fetches the reference doc, the reference screens and the design-system files from this repo at run time (`ds-skill.sh sync` / `apply`), so most changes reach the team without anyone touching Claude.ai. Only a change to `skill-source/SKILL.md` or `tools/ds-skill.sh` needs the zip re-uploaded in Claude.ai → Organization settings → Skills; `ds-skill.sh sync` tells the user when that is the case, and the release notes say so too.

**Publish by hand** (only if the workflow is unavailable): `tools/release-skill.sh` does the same rebuild and upload from your laptop.
