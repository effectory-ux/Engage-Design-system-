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

**Versioning.** The version lives in the root `VERSION` file (single source of truth). Bump it when you ship changes (e.g. `1.0.0` → `1.0.1`). The number is stamped into the bundle (`VERSION` + the `**Version:**` line in `SKILL.md`), shown in the build output, and used as the GitHub release title — so you always know which version you're uploading/using.

**Publish a new build** (rebuilds the bundle and refreshes the `skill-latest` asset + title):

```bash
./release-skill.sh
```

**Automate it (optional).** `ci/release-skill.yml.example` is a GitHub Action that does the same on every push to `main`. To enable it, move it to `.github/workflows/release-skill.yml` (needs a token with the `workflow` scope, or add the file via the GitHub web UI).
