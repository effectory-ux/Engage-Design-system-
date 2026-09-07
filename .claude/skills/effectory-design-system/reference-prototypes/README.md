# Reference prototypes — how to add a new screen

A reference prototype is a screen with an **approved, fixed design** that should
be reused verbatim when someone asks for it (e.g. "the reports page"), instead of
rebuilt from scratch.

## Ask first

Before you create anything, walk through the eight intake questions in the
"Een scherm toevoegen als referentie" section of `SKILL.md`. Question 3 — how
would someone ask for this screen, three to five phrasings in Dutch and English —
is the one that decides whether the screen is ever found again. The rest map
straight onto the sections of the `.md` you are about to write.

## Then add it

1. **Finalize** the screen as `prototypes/<name>.html` (built with the design system).
2. **Copy it into the skill — in BOTH locations** (`sync-skill.sh` does NOT copy this folder or `SKILL.md`):
   - `.claude/skills/effectory-design-system/reference-prototypes/<name>.html`
   - `skill-source/reference-prototypes/<name>.html`
   Add a `<name>.md` next to each, in the house format: **What the screen is ·
   Behaviour (the rules) · Components used · Prototype-only**.
3. **Register it** in the "Referentie-prototypes" section of **both** `SKILL.md` files
   (project + skill-source), using the phrasings from question 3. Describe it by
   **intent**, not by one exact trigger phrase.
4. **Check** with `./check-skill-consistency.py`. Four manual copies is four chances
   to do three of them; this is what tells you which one you missed.
5. **Release:** open a pull request and merge it. The pre-commit hook regenerates
   `skill-manifest.json` and `skill-source/` (CI refuses the PR if they are stale), and the
   merge refreshes the `skill-latest` release; the
   deployed skill picks the new screen up at its next `ds-skill.sh sync`. Bump `VERSION` if you
   want the change to be visible as a version; the zip in Claude.ai only needs re-uploading when
   `SKILL.md` or `ds-skill.sh` themselves changed.

`SKILL.md` is written in this repo only. The copy in `effectory-design-documentation`
is downstream — refresh it from here, never the other way around.

## The download is automatic

The get-started page (`prototypes-docs.html`) links to the stable rolling release:
`…/releases/download/skill-latest/effectory-design-system.zip`. The release workflow
replaces the asset there on every merge to `main`, so the newest build is always the one
people download — **no per-release page edit needed**, for this screen or any future one.
