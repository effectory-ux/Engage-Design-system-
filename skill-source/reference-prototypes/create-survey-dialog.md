# Reference prototype — Template selection dialog ("Choose a survey template")

Canonical implementation: [`create-survey-dialog.html`](create-survey-dialog.html) (in this folder).
When the user asks for "the create survey dialog", "the template picker", "kies een survey-template"
or anything about picking a survey template, **copy that file** into `prototypes/` and adapt — it is
the source of truth for layout, states and behaviour. Don't reinvent it.

Captured from production (`my.effectory.com/surveys` → **Create survey**, Coordinator portal) on
17 Aug 2026. Template names, descriptions, question counts and illustrations are the **real** ones —
this screen is a capture, not an invention. Keep the copy as-is when you reuse it.

**One deliberate deviation:** the **"What will you get?"** text is rewritten. Production lists every
section of the template and runs long; here it's condensed to the gist, max 5 lines, following the
`ux-copy` skill. That rewrite also resolves two production contradictions — ESG now says 31 questions
(not "21 + 1 open" against a 31-question meta line) and SOS Survey says 34 (not "32, including 2
open"). Both now agree with the meta line and the questionnaire below it.

## What the screen is

The [`all-surveys`](all-surveys.md) page with a working **Create survey** button. Clicking it opens
a modal that fills most of the viewport:

### Dialog 1 — "Choose a survey template"

`.overlay` > `.dialog.dialog-l`. Header, search and grid stack in a flex column; **only the grid
scrolls**, so the title, "Start from scratch" and the search box stay put.

- **Header** — `.dialog-header` with `.dialog-title` "Choose a survey template" (26px) and
  `.dialog-subtitle` "Save time with pre-made survey templates crafted by our experts".
  `.dialog-close` (with a hover tooltip, SKILL rule 10) is pinned top-right.
- **Search row** — the DS Search component (`.search-wrap` + `input.srch`, placeholder
  "Search templates") takes the width, with the `.btn.btn-secondary` **+ Start from scratch**
  beside it on the same row.
- **Grid** — 3 columns, 24px gap, of `.card.card-elevated` tiles. Each tile: a 64px illustration,
  the name (`.text-large.text-w600`), a 12px project line (`.text-small.text-w500`), a
  **3-line-clamped** description, and `.tpl-actions` pinned to the bottom with **Use template** +
  `.btn.btn-tertiary` **Preview** — both `flex: 1`, so they split the card width with 16px between
  them.
- **No results** — heading "No results found" (`.text-l4`) over the
  `search-no-results-illustration` (380px). Replaces the grid entirely.

### Dialog 2 — template preview

Opens on top when you press **Preview**; production mounts it as a separate
`lib-preview-questionnaire-template-dialog`, also `dialog-l`.

- `.btn.btn-secondary` **← Back to templates** top-left, `.dialog-close` top-right.
- Header: 64px illustration + name (`.text-l3`) + meta line "Standard template · N questions · N minutes".
- The template description, then **Why is it valuable?**, with **Show more** revealing
  **When to use it?** and **What will you get?**. Show more is the **Link button**
  (`.btn.btn-link`) with its side padding removed — no fill, no border, only the label colour
  changes on hover/press.
- **Questionnaire** — the template's questions, grouped into sections. Follows the Figma
  *Questionnaire list* frame (`3912:51393`): a `--bg-secondary` panel holding, per section, a
  `.text-l5` heading + a count pill, over a white bordered card of question rows. Each row is
  question text · a colour-coded scale chip (icon + label) · a **Standard** tag.
  The Standard tag is the DS **Tag** in a subtle brand fill — same component, same **SemiBold 600**
  text as the status pills, only the colour differs. A one-word tag never takes `.text-w400`.
  Scale kinds map to icon + accent: 5-point scale → `point-scale`/turquoise · Multiple choice →
  `check-square`/yellow · Open-ended question → `text-entry`/orange · 0–10 scale →
  `net-promoter-score`/blue · Yes / No → `single-answer`/green. ("Open-ended", not "open", is the
  approved glossary term — see the `ux-copy` skill.)
- `.dialog-footer` **floats over the content** at the bottom edge of the dialog: taken out of flow
  (`position: absolute`, full width) and filled with a `transparent → --bg-base` gradient, so the
  questionnaire fades away underneath it instead of stopping at a hard bar. The gradient is
  `pointer-events: none`; only the button takes clicks. It carries a centered 326px
  `.btn-big.btn-big-primary` **Use template** with a trailing `arrow-right` icon.

### Dialog 3 — "Let's get started"

Opens from **Use template** *and* **Start from scratch** — the same dialog either way. Production
mounts it as `lib-create-draft-survey-dialog`, a 600px `.dialog-s` with a small header
(`.dialog-header.is-sm`, 18px title).

- **Survey name** — DS Text Field (`.tf-wrap` / `input.tf`), placeholder "Enter a survey name",
  helper "At least 3 and at most 35 characters", `maxlength="35"`.
- **What project does it belong to?** — DS Select (`.slt`) opening the shared `.menu`, helper
  "Your new survey will be added to this project and use its settings". **Conditional** — see the
  rule below.
- `.dialog-footer` with **Go back** (secondary) + **Create survey** (primary, disabled until valid).

**The DEMO tag is deliberately left out.** Production renders a `lib-surveys-demo-tag` next to the
"Survey name" label, and a DEMO tag on most rows of the project dropdown. Those mark demo data on
this particular account, not part of the design — don't add them back.

## Behaviour (the rules)

1. **Search filters live on name *and* description** — "german" finds Psychological Risk Assessment
   through its description only. Matching production exactly. No match → the no-results state.
2. **Hovering a template card promotes its "Use template" to the primary button** (and reverts on
   leave); keyboard focus inside the card does the same. Implemented by swapping the real
   `.btn-secondary` / `.btn-primary` class rather than restyling the secondary button, so the button
   is genuinely the DS primary in that state. The handler ignores pointer moves between children of
   the same card.
3. **Both routes into "Let's get started" are the same dialog.** **Use template** (from a card or the
   preview footer) and **Start from scratch** open it identically — name, plus the project field when
   the context calls for it. Only what happens *after* differs: with a template you land on
   [`survey-settings-questionnaire`](survey-settings-questionnaire.md) with that template applied;
   from scratch production goes elsewhere, and that screen is not built.
4. **The project field depends on where the flow started — this is the important rule.**
   Opened from **All surveys**, the new survey has no home yet, so "Let's get started" asks which
   project it belongs to and offers **every project on the account** (the same list the
   [`projects`](projects.md) page shows). Opened from **inside a project**, that answer is already
   known: the field is left out entirely and the dialog is just the name. Driven by `FLOW_CONTEXT`
   at the top of the script; append **`?context=project`** to the URL to see the in-project variant.
5. **"Create survey" stays disabled** until the name is 3–35 characters *and* — in the All surveys
   context — a project is picked. The name field only turns red on blur, not while typing.
6. **Go back** pops to the template dialog underneath (instant swap, same as "Back to templates").
7. **One scrim at a time.** Preview opens a second `.overlay`, but only the topmost live overlay is
   painted (`.overlay.is-behind { visibility: hidden }`). The dialog underneath keeps its state, so
   **Back to templates** returns to the same search query and scroll position.
8. **Back is an instant swap**, not an animated close — crossfading two full-size dialogs reads as a
   jumble. Dismissing the flow (X, Escape, scrim click) *does* play the exit animation.
9. **X / scrim dismiss the whole flow**; **Escape** pops one level (preview → template list → closed).
10. Closing follows SKILL rule 9: `.is-closing` on the `.overlay`, node removed on `animationend` on
    the surface — plus a 400ms safety timeout so reduced-motion or a throttled tab can't wedge a
    dialog open.

## Components used

Dialog (`.dialog.dialog-l` / `.dialog-s`, `.dialog-header` + `.is-sm`,
`-title/-subtitle/-body/-footer/-close`) · Overlay + motion tokens · Card (`.card.card-elevated`) ·
Button (primary/secondary/tertiary/**link**) · **Button Big** (`.btn-big.btn-big-primary`) ·
**Text Field** (`.tf-wrap`/`.tf`/`.tf-help`, `.is-error` + `.tf-icon-right`) · **Select** (`.slt`) ·
Dropdown menu (`.menu`, single-select with `.menu-item-check`) · Tag · Search ·
Tooltip (`.tt-demo` + `.tooltip`) · everything else from the `all-surveys` screen.

Status pills use the design system's own `.tag.is-draft` / `.tag.is-planned`. The section **count
pill** and the **Standard** tag are still prototype-local, because Eff Tag has no subtle-brand
background (documented Figma/dev gap).

## Layout gotchas that bit during the build

These are load-bearing; don't "clean them up":

- `.tpl-grid { grid-auto-rows: min-content }` — the grid has a flex-constrained (definite) height, so
  plain `auto` rows split that height between them and the cards get clipped by `.card`'s
  `overflow: hidden` instead of scrolling.
- `flex-shrink: 0` on the card's name / project line / description and on the empty-state
  illustration — the card and the empty state are flex columns, and without it the flexible child
  (the clamped description, the 380px illustration) is squashed to zero height.
- `.tpl-grid[hidden], .tpl-empty[hidden], .tpl-card[hidden] { display: none }` — a class-level
  `display` beats the UA rule for `[hidden]`, so the grid and the no-results state would otherwise
  be laid out at the same time. Same trap applies to `.tf-field-icon[hidden]`.
- **The close-button tooltip is `position: fixed`, placed by JS.** `.dialog` has
  `overflow: hidden` for its rounded corners, so an absolutely positioned bubble is clipped at the
  dialog edge. The `Tooltip auto-position` block measures the trigger on hover/focus and places the
  bubble in a fixed layer, flipping and clamping inside the viewport — the pattern from
  *design-system-reference → Tooltip → "Clipping vermijden"*. Don't "fix" this by putting
  `overflow: visible` on the dialog. Carry the block into any dialog or scroll container with a
  tooltip in it. The project select's `.menu` uses the same fixed-layer rule.

## Prototype-only (simulation, not production)

- Templates live in a `TEMPLATES` array at the top of the trailing `<script>` and the cards are
  rendered from it — change the data, not the markup.
- **Questions come from the `realistic-content` skill's IP-safe library** (`data.safe.json`), in
  the `QUESTIONNAIRES` object — no real Effectory question wording, safe to show externally. Each
  template maps to its solution (Strategic Fitness, WCWP, DEI, SOS Pulse, SOS Survey, PSA, ESG) and
  the counts line up exactly with the meta line on each template (22 · 15 · 44 · 9 · 34 · 10 · 31).
  PSA is filtered to its 10 mandatory risk-assessment items, matching production. Regenerate from
  the library rather than hand-editing; switch to `data.real.json` only for internal use. Keep it in
  step with the copy in `survey-settings-questionnaire.html`.
- Sections come from the solution's topics; where a solution has a single topic (Strategic Fitness)
  they come from the questions' primary theme instead, so the list still reads as sections.
- Every row shows the **Standard** tag — question ownership (Standard vs custom) is not modelled.
- **Start from scratch stops at "Let's get started".** In production it continues to a *different*
  screen than the template route does; that screen is deliberately not built, so the prototype
  dismisses instead of inventing it.
- The project list is `PROJECTS` at the top of the script, mirroring `projects.html`. Note that
  `all-surveys.html`'s own carousel and survey rows use a *different* set of project names
  ("Central Employee Listening", "Employee lifecycle", "Example projects") — the two reference
  prototypes disagree about what projects exist on the account. Worth reconciling.
- **Create survey** hands off to
  [`survey-settings-questionnaire.html`](survey-settings-questionnaire.md) with
  `?template=…&name=…`. The chosen project isn't passed on — that screen doesn't show it.

## Production inconsistencies noticed while capturing

Worth raising with the team; deliberately **not** silently fixed here, since this is a capture:

- **ESG Scan** shows "in User Testing Surveys, March 2024 - March 2027" where every other card shows
  "Available in N projects".
- Question counts disagree between the meta line and the body: ESG says *31 questions* but lists
  *21 + 1 open*; SOS Survey says *34* but lists *32, including 2 open*. (Resolved in this prototype
  — see the deviation note at the top.)
- "Open questions" should be **"open-ended questions"** per the product glossary.
- WCWP: "It can be integrated in an annual surveyor conducted as a stand-alone survey" — missing a
  space in "survey or".
- The bulleted "What will you get?" content is a single `<p>` with `<br>` separators, not a list.
- Card titles are inconsistently cased ("World-class workplace Scan" vs "ESG Scan").
- The grid order is not stable between renders — ESG and Psychological Risk Assessment swap places.
- The preview dialog's **Questionnaire** list never loads (permanent skeleton), even though the same
  `lib-questionnaire-overview` component renders fine on
  [`survey-settings-questionnaire`](survey-settings-questionnaire.md).
