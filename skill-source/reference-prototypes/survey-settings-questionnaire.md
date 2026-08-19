# Reference prototype — CYOS template questionnaire page (Questions step)

Canonical implementation: [`survey-settings-questionnaire.html`](survey-settings-questionnaire.html)
(in this folder). When the user asks for "the survey settings screen", "the questions step", "the CYOS
flow", "de vragenlijst van een survey" or the screen you land on after creating a survey, **copy that
file** into `prototypes/` and adapt — it is the source of truth for layout, states and behaviour.

Captured from production on 17 Aug 2026 by actually creating a survey
(`/projects/{projectId}/surveys/{surveyId}/questionnaire`, Angular `lib-cyos-lib`).

## What the screen is

Step 1 of the **create-your-own-survey (CYOS)** flow — where a new survey lands straight after
[`create-survey-dialog`](create-survey-dialog.md). **There is no main navigation here:** the flow
replaces the app shell with its own header, stepper and footer action bar. Content column is
**1000px**, centered.

- **Header** (`.cyos-head`, 65px, white, hairline bottom border) — logo · a grey **Draft** tag ·
  `clipboard` icon + the survey name (`.text-medium.text-w500`) · **Edit name** (tertiary, `edit`
  icon). Right: **Help articles** (tertiary + `external-link`) and a **English** language switcher
  (tertiary + `globe`).
- **Stepper** (`.cyos-steps`, hairline bottom border, `chevron-right` separators) — four steps.
  Each badge is a **28px circle** with a 2px `--bg-base` border that overlaps its **44px icon tile**
  by 4px (`margin-right: -4px` + `z-index: 2`) — that border is what makes it read as sitting on
  top. The circle holds the **step number** while pending and a **check** once done:

  | State | Circle | Tile | Title |
  |---|---|---|---|
  | Pending | `--bg-secondary-hover` + `--content-secondary`, number | `--bg-secondary-hover` + `--content-secondary` | `--content-secondary` |
  | Done, not active | `--bg-positive` + white check | `--bg-secondary-hover` + `--content-secondary` | `--content-secondary` |
  | Active | `--bg-brand-subtle-selected` + `--content-brand-secondary` check | `--bg-brand-subtle-selected` + `--content-brand-secondary` | `--content-base` |

  All six values were measured against production and match its computed styles exactly.
  Titles are `.text-l5` (16/600), sub-lines `.text-small.text-w500` (12/500).

  The four steps:
  1. **Questions** — active, complete, "N questions · N mins" (derived from the template)
  2. **Participants** — "Select participants"
  3. **Survey period** — "Select period"
  4. **Layout & emails** — complete, "Survey: Effectory default / Email: Effectory default"
- **Questions** (`.text-l3`) heading.
- **Template card** — `.card.card-elevated` with the 64px illustration, the template name
  (`.text-l4`) and its meta line, over a `--bg-secondary` strip reading
  **"You are not able to change or edit questions in this template"**. A standard template is
  read-only at this step.
- **Questionnaire** — the template's questions grouped by section: a `.text-l5` heading + a count
  pill, over a white bordered card of rows (question text · colour-coded scale chip · **Standard**
  tag). Identical markup to the block in the preview dialog — production uses the very same
  `lib-questionnaire-overview` component in both places.
- **Footer action bar** (`.cyos-foot`, fixed to the bottom, hairline top border + `--sh-footer`) —
  **Save & Close** (secondary) · **Next Step →** (primary) · **Review & Plan** (primary, disabled
  until the earlier steps are done).

## Behaviour (the rules)

1. **The screen is parameterised by the URL.** `?template=<template name>&name=<survey name>` — the
   create flow hands both over. Unknown or missing template falls back to Strategic Fitness Model, so
   the file is still useful opened on its own.
2. **Everything on the page derives from the template**: card name + meta + illustration, the
   Questions step summary ("N questions · N mins"), and the question list. Question counts are
   consistent by construction — the meta line and the rendered rows come from the same data.
3. **Which steps are done, and why.** Every step is optional and pre-filled, so **Layout & emails**
   is done from the start. Coming from a **template**, the questions are already chosen and fixed, so
   **Questions** is done too — that is the normal state of a freshly created survey. Participants and
   Survey period are the two that actually need the user. The states live in `STEPS` at the top of
   the script (`done` / `active` per step); flip `done` to false to see the pending treatment.
4. **Save & Close returns to the overview the flow started from.** `create-survey-dialog` carries
   its `FLOW_CONTEXT` over as `&context=…`, and this screen turns that into `RETURN_TO`: started from
   All surveys → back to [`create-survey-dialog`](create-survey-dialog.md); started inside a project →
   back to [`projects`](projects.md). The survey stays a draft — it exists from the moment it was
   created, so there is nothing to persist on the way out. **Next Step** and **Review & Plan** are
   still inert.
5. Nothing on this screen changes step state — the stepper is presentational here.

## Where it sits in the flow

`all-surveys` → **Create survey** → *Choose a survey template* → **Use template** (from a card or the
preview footer) → *Let's get started* (name + project) → **this screen**, with that template applied.

**Start from scratch leads somewhere else** and that screen is deliberately **not** built — the
create dialog stops there rather than inventing it.

## Components used

Card (`.card.card-elevated`) · Button (primary/secondary/tertiary) · Tag · everything in the
questionnaire block from [`create-survey-dialog`](create-survey-dialog.md). The header, stepper and
footer bar are layout-only CSS on top of DS tokens — production's `lib-header` / `lib-navigation` /
`lib-footer` have no documented DS equivalent yet.

The **Draft** tag is `.tag.is-draft` **in the design system** (`components.css`), not a per-screen
override — the same class the all-surveys list uses. It, the **Standard** tag in the questionnaire
and every status pill are the *same* Tag component at **SemiBold 600**; only the fill changes. Don't
add `.text-w400` to a one-word tag — that's only for the contextual pattern
("**Completed** on 22 aug 2025"). The section **count pill** and the subtle-brand **Standard** fill
are still prototype-local.

The **logo** is `assets/illustrations/logo/effectory-logo.svg` — the design system's own Effectory mark, the same
artwork `.mn-logo` carries (a yellow `effectory-logo-personal.svg` ships alongside it for the
Personal portal).

## Prototype-only (simulation, not production)

- Questions come from the `realistic-content` skill's **IP-safe** library, duplicated into this file
  as `QUESTIONNAIRES` so the screen stays self-contained when copied. Regenerate from the library
  rather than hand-editing, and keep it in step with `create-survey-dialog.html`.
- **The real section names differ.** Production's Strategic Fitness questionnaire is split into
  "Fun at work", "Work enablement", "Work performance", "Wellbeing and workload", "Team collaboration
  and performance", "Team leadership", "Company strategy", "Company communication and collaboration",
  "Company culture", "Growth and development". The IP-safe library rewords and regroups; that's
  expected. Switch to `data.real.json` only for internal use.
- Every step, button and header action is inert — no navigation between steps.
- Production shows an info notification, "This is a demonstration, no actual surveys will be
  planned." That's demo-account chrome, not part of the design — left out, like the DEMO tags.

## ⚠️ Token names: use the ones in `tokens.css`, not the `-base` ones in the reference

`design-system-reference.md` documents several tokens with a `-base` suffix that **do not exist** in
`tokens.css`. A `var()` on a name that isn't defined silently resolves to nothing, so the property
just doesn't apply — no error, just a wrong colour. The real names:

| Written in the reference (broken) | Actually defined |
|---|---|
| `--bg-brand-base` | `--bg-brand` |
| `--bg-info-base` | `--bg-info` |
| `--bg-positive-base` | `--bg-positive` |
| `--bg-negative-base` | `--bg-negative` |
| `--bg-inverse-base` | `--bg-inverse` |
| `--border-brand-base` | `--border-brand` |
| `--content-brand-base` | `--content-brand` |
| `--content-negative-base` | `--content-negative` |
| `--content-inverse-base` | `--content-inverse` |
| `--content-accent-{colour}-base` | `--content-accent-{colour}` |

This screen and `create-survey-dialog` were audited and use only names that resolve. **Most of the
other reference prototypes still carry the broken ones** — worth a sweep. To check a file:

```bash
grep -o 'var(--[a-z0-9-]*' file.html | sort -u
```
and compare against `grep -o '^\s*--[a-z0-9-]*' tokens.css | sort -u`.
