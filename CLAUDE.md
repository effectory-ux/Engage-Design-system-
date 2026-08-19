# Engage Design System — Component Page Conventions

Reference this file whenever creating or editing a component documentation page. It describes the shared HTML structure, CSS patterns, and authoring rules used across all component pages.

---

## 1. File Setup

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>[Component Name] — Engage Design System</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300..900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
  <style>
    /* Component-specific styles only — no overrides of global patterns */
  </style>
</head>
<body>

<div id="topnav-placeholder"></div>

<div class="shell">
<div id="sidebar-placeholder"></div>

<div class="content-wrap">
  <!-- page header + tabs + panels go here -->
</div><!-- /content-wrap -->
</div><!-- /shell -->

<script src="nav.js"></script>
</body>
</html>
```

- The `<style>` block contains only component styles (the actual interactive component CSS). Never put layout or documentation overrides here — those belong in `styles.css`.
- `nav.js` injects the top nav and sidebar via the placeholder `<div>`s.

---

## 2. Page Header

```html
<div class="page-header-row">
  <div class="page-header">
    <div class="page-badges">
      <span class="page-updated">Updated [Month Year]</span>
    </div>
    <h1 class="text-l1">[Component Name]</h1>
    <p class="page-desc">[One-sentence description of what this component is and when to use it.]</p>
  </div>
</div><!-- /page-header-row -->
```

- `page-badges` is always present, even if empty. Use `<span class="page-updated">` for the date badge.
- `text-l1` is the only heading level used for the page `<h1>`.
- `page-desc` is a single paragraph. Keep it concise (1–2 sentences max).

---

## 3. Page Tabs

Every component page has exactly two tabs: **Design** and **Developer**.

```html
<!-- PAGE TABS -->
<div class="page-tabs">
  <div class="page-tabs-inner">
    <button class="page-tab" data-tab="design">
      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.5"/><rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.5"/><rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.5"/><rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.5"/></svg>
      Design
    </button>
    <button class="page-tab" data-tab="developer">
      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 4L1 8l4 4M11 4l4 4-4 4M9 2l-2 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      Developer
    </button>
  </div>
</div>
```

Tab switching is handled by `nav.js`. Each tab's content lives in a `<div class="tab-panel" data-panel="[design|developer]">`.

---

## 4. Panel Layout Wrapper

Both the Design and Developer panels use the same two-column layout:

```html
<div class="tab-panel" data-panel="design">
  <div class="content-cols">
    <article class="content">
      <!-- sections go here -->

      <!-- PAGINATION at the bottom of the article -->
      <div class="pagination">
        <a class="pag-card left" href="[prev-page].html">
          <span class="pag-dir">← Previous</span>
          <span class="pag-name">[Previous Component]</span>
        </a>
        <a class="pag-card right" href="[next-page].html">
          <span class="pag-dir">Next →</span>
          <span class="pag-name">[Next Component]</span>
        </a>
      </div>
    </article>

    <div class="toc-col">
      <nav class="toc">
        <div class="toc-title">ON THIS PAGE</div>
        <a class="toc-link" href="#[section-id]">[Section Name]</a>
        <!-- one link per section -->
      </nav>
    </div>

  </div><!-- /content-cols -->
</div><!-- /tab-panel design -->
```

- If there is no previous page, use `<div></div>` as the left pagination slot.
- TOC links must use the exact `id` values from section elements.

---

## 5. Design Tab — Section Order

Sections appear in this order inside `<article class="content">`:

| # | Section | `id` | Heading |
|---|---------|------|---------|
| 1 | Anatomy | `anatomy` | Anatomy |
| 2 | Usage | `usage` | Usage |
| 3 | Variants | `variants` | Variants |
| 4 | Content guidelines | `content-guidelines` | Content guidelines |
| 5 | States | `states` | States |
| 6 | Design Tokens | `tokens` | Design Tokens |
| 7 | Accessibility | `accessibility` | Accessibility |

Not all sections are required for every component — skip ones that don't apply. Keep the order when sections are present.

### Design tab is code-free

The **Design tab never references code** — no prop names, input names, CSS class names, enum values, or framework details (e.g. don't write `isOneLiner: true`, `messageType: 'warn'`, `buttonMessages`, `showCloseButton`, or "the Angular styleguide…"). Describe everything in plain design language: use the human-friendly variant name ("One-liner", "Warning", "Close only") and explain *when* and *why* to use it. All code, prop/input names, API tables, and Figma-vs-code gap callouts belong in the **Developer tab**. The two audiences are separate: designers read the Design tab, developers read the Developer tab.

### Section boilerplate

```html
<section class="section" id="[section-id]">
  <h2 class="text-l3">[Section Title]</h2>
  <p class="section-lead">[One-line intro sentence.]</p>
  <!-- section content -->
</section>
```

Sub-headings within a section use `<h3 class="text-l4">`.

---

## 6. Anatomy Section

```html
<div class="anatomy-fig">
  <!-- Live rendered component with callout lines and numbered labels -->
  <!-- All elements inside use pointer-events:none -->
</div>

<div class="anatomy-items">
  <div class="anatomy-item">
    <div class="anatomy-num">1</div>
    <div><span class="anatomy-term">[Part name]</span> — [Description.]</div>
  </div>
  <!-- repeat for each part -->
</div>
```

- Number badges in the figure: `width:18-20px; height:18-20px; border-radius:50%; background:var(--content-base); color:var(--bg-base); font-size:9-10px; font-weight:700`.
- Callout lines: `1px` solid `var(--content-subtle)`.
- All components in anatomy figures must have `pointer-events:none` (they are not interactive).

---

## 7. Usage Section — Do/Don't Cards

Use a `dd-grid` for each Do/Don't pair. Always come in pairs of exactly two: one Do, one Don't.

```html
<div class="dd-grid">
  <div class="dd-card">
    <div class="dd-prev">
      <!-- live component demo, pointer-events:none -->
    </div>
    <div class="dd-cap do">
      <div class="dd-cap-hd">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="9" fill="#16a34a"/><path d="M5 9l3 3 5-5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Do
      </div>
      [Caption text.]
    </div>
  </div>
  <div class="dd-card">
    <div class="dd-prev">
      <!-- live component demo, pointer-events:none -->
    </div>
    <div class="dd-cap dont">
      <div class="dd-cap-hd">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="9" fill="#dc2626"/><path d="M6 6l6 6M12 6l-6 6" stroke="white" stroke-width="1.8" stroke-linecap="round"/></svg>
        Don't
      </div>
      [Caption text.]
    </div>
  </div>
</div>
```

### dd-prev layout rules

The global `.dd-prev` CSS uses `min-height: 200px`, `display: flex`, `align-items: center`, `align-content: center`, and `flex-wrap: wrap`. Content is always vertically and horizontally centred. Do not add a fixed `height` or override `align-content`.

**Default** (horizontal, single-line previews):
```html
<div class="dd-prev">
  <!-- items in a centred row, vertically and horizontally -->
</div>
```

**Column layout** (stacked items — lists, form fields, etc.):
```html
<div class="dd-prev" style="flex-direction:column; flex-wrap:nowrap; flex:1; height:auto; justify-content:center; gap:[X]px; align-items:flex-start; padding:20px 28px;">
```

Critical: when `flex-direction:column`, always add **all five** of these inline overrides:
- `flex-wrap:nowrap` — prevents items overflowing into a phantom right column
- `flex:1` — lets the preview grow to fill the card height (captions then align via `flex:none` on `.dd-cap`)
- `height:auto` — overrides the global `min-height` so the container shrinks to content
- `justify-content:center` — items are centred vertically within the min-height container
- `align-items:flex-start` — items align left

The `spread` modifier class (`<div class="dd-prev spread">`) adds `justify-content:space-between` for cases where items should be pushed apart.

### Caption SVG icons

Do (green check): `<circle cx="9" cy="9" r="9" fill="#16a34a"/>` + `<path d="M5 9l3 3 5-5" …/>`  
Don't (red X): `<circle cx="9" cy="9" r="9" fill="#dc2626"/>` + `<path d="M6 6l6 6M12 6l-6 6" …/>`

### Content guidelines section — also uses Do/Don't cards

The **Content guidelines** section (`id="content-guidelines"`) is not a plain bullet list — it uses the same Do/Don't card pattern as Usage. Structure each rule as a `<div class="cg-rule">` containing an `<h3 class="text-l4">` rule title, a short `<p>` explanation, and a `dd-grid` with a Do card and a Don't card. The card previews should show **example copy** in a live component (title/message/label text), `pointer-events:none`, demonstrating good vs bad wording — not visual states.

```html
<section class="section" id="content-guidelines">
  <h2 class="text-l3">Content guidelines</h2>
  <p class="section-lead">[One-line intro.]</p>
  <div class="cg-rule">
    <h3 class="text-l4">[Rule title]</h3>
    <p>[Why this rule matters.]</p>
    <div class="dd-grid"> … Do card + Don't card with example copy … </div>
  </div>
  <!-- one cg-rule per guideline -->
</section>
```

Don't use a bare `<ul>`/`<li>` list for Content guidelines — match the Do/Don't card format used on the Button, Checkbox, Toggle, and Radio Group pages.

---

## 8. Variants Section

Every Variants section uses the `variant-rows` / `variant-row` pattern — a live component preview on the left and a **when-to-use description** on the right. This is the canonical layout for all component pages.

```html
<section class="section" id="variants">
  <h2 class="text-l3">Variants</h2>
  <p class="section-lead">[One sentence describing what the variants control, e.g. "The Type property controls visual hierarchy."]</p>

  <div class="variant-rows">
    <div class="variant-row">
      <div class="variant-row-btn">
        <!-- live component demo, pointer-events:none -->
      </div>
      <div class="variant-row-desc"><strong>[Variant name]</strong> — [When to use this variant. Keep it 1–3 sentences. Include the Figma property name in the first sentence where relevant.]</div>
    </div>
    <!-- repeat for each variant -->
  </div>
</section>
```

Rules:
- **One row per variant.** Do not show multiple states (hover, focus, etc.) inside the Variants section — that is what the States section is for.
- **`variant-row-btn` contains a fully live, interactive component** — no `pointer-events:none`, no `tabindex="-1"`. Users can click, type, and hover to feel the component directly. Remove all static overrides.
- **`variant-row-btn` shows only the default / rest state** — no `is-hover`, `is-focus`, `is-error` classes. Let the user trigger states naturally.
- **`variant-row-desc` explains when to use it** — not what it looks like. Start with the use case, not the visual description.
- If a component has sub-groups (e.g. a text field with Standard, Inline text, and Inline number sub-variants), use an `<h3 class="text-l4">` heading before the relevant `variant-rows` block for each sub-group.

Example from the Button page:
```html
<div class="variant-rows">
  <div class="variant-row">
    <div class="variant-row-btn"><button class="btn btn-primary" style="pointer-events:none;">Primary</button></div>
    <div class="variant-row-desc">The single highest-emphasis action on a view. Submit a form, complete an onboarding step, confirm a key decision. Use only once per page section.</div>
  </div>
  <div class="variant-row">
    <div class="variant-row-btn"><button class="btn btn-secondary" style="pointer-events:none;">Secondary</button></div>
    <div class="variant-row-desc">Supporting actions alongside a Primary — Cancel, Edit, Export. Can appear multiple times without competing with the primary.</div>
  </div>
</div>
```

---

## 9. States Section

Show all interactive states in a consistent grid. Standard states to document (where applicable):

- Default / Rest
- Hover → add class `is-hover`
- Pressed / Active → add class `is-pressed`
- Checked / Selected → add class `is-checked` or `is-selected`
- Indeterminate → add class `is-indeterminate`
- Filled → value present, no active state class
- Error → add class `is-error`
- Disabled → add class `is-disabled` + `pointer-events:none`

All state demo elements must have `pointer-events:none` — they are static illustrations, not interactive.

State class naming: always `is-[statename]` (kebab-case, prefixed with `is-`).

### States layout — grey cards

States are **always** displayed using the `states-row` + `state-col` pattern. Every state gets its own individual grey card. The label (`state-lbl`) goes **above** the component inside the card.

```html
<div class="states-row">
  <div class="state-col">
    <span class="state-lbl">Default</span>
    <!-- component instance, pointer-events:none, tabindex="-1" -->
  </div>
  <div class="state-col">
    <span class="state-lbl">Hover</span>
    <!-- component instance with is-hover class -->
  </div>
  <div class="state-col">
    <span class="state-lbl">Focus</span>
    <!-- component instance with is-focus class -->
  </div>
  <div class="state-col">
    <span class="state-lbl">Disabled</span>
    <!-- component instance with is-disabled class + pointer-events:none -->
  </div>
  <!-- … one state-col per state … -->
</div>
```

CSS behind the pattern (defined in `styles.css`, do not redefine inline):
- `states-row` — CSS grid, `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`, `gap: 4px`, `border-radius: 12px`, `overflow: hidden`
- `state-col` — `background: var(--bg-secondary)`, `padding: 40px`
- `state-lbl` — `font-size: 11px`, uppercase, sits above the component

Rules:
- **Never wrap states in a `preview` / `preview-bar` / `preview-body` container** — that is the old browser-chrome style and must not be used for states.
- **Never use a grid table or matrix layout** — every state is its own card, even for components with sub-variants (e.g. unchecked / checked / indeterminate inside a single "Default" card is acceptable when they represent visual sub-states of the same interaction state, but each interactive state — Default, Hover, Disabled — still gets its own card).
- **Every variant must be shown for every applicable state.** If a component has multiple variants (e.g. Standard, Inline text, Inline number), use a separate `states-row` block per variant, preceded by an `<h3 class="text-l4">` heading. Never document states for only one variant and leave others without states.
- If a state genuinely does not apply to a specific variant (e.g. Error on an inline editor), omit that card only for that variant — but make a deliberate decision, not an oversight.
- All component instances inside `state-col` must have `pointer-events:none` and `tabindex="-1"` — they are static illustrations.

---

## 9b. Accessibility Section — Always use `.a11y-list`

Every Accessibility section — both in the Design tab (`#accessibility`) and the Developer tab (`#dev-a11y`) — uses the styled `.a11y-list` pattern. Never use a plain `<ul>` / `<li>` list. The arrow + bold lead-in is part of the page identity.

```html
<section class="section" id="accessibility">
  <h2 class="text-l3">Accessibility</h2>
  <p class="section-lead">[One-line intro about the component's a11y requirements.]</p>
  <div class="a11y-list">
    <div class="a11y-item">
      <span class="a11y-arrow">→</span>
      <div><strong>[Short rule title.]</strong> [Explanation of what to do and why.]</div>
    </div>
    <!-- one a11y-item per rule -->
  </div>
</section>
```

Rules:
- Each item starts with a short **bold lead** ending in a period — the "rule name" — followed by the explanation.
- Don't use `<ul class="section-list">` or a bare `<ul>` — those don't get the arrow + divider styling defined in `styles.css`.
- The arrow span (`<span class="a11y-arrow">→</span>`) is required; the CSS expects it for layout.
- If a section needs a sub-grouping (e.g. "Keyboard interaction" + "ARIA requirements"), use an `<h3 class="text-l4">` heading before each `.a11y-list` block. Don't nest `.a11y-list` inside another container.

---

## 10. Design Tokens Section

```html
<section class="section" id="tokens">
  <h2 class="text-l3">Design Tokens</h2>
  <p class="section-lead">...</p>
  <table class="token-table">
    <thead>
      <tr><th>Token</th><th>Role</th><th>Value</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--[token-name]</code></td>
        <td>[What it's used for]</td>
        <td>[Resolved value or alias]</td>
      </tr>
    </tbody>
  </table>
</section>
```

Token naming conventions:
- **Fills / backgrounds**: `--bg-[role]-[state]` e.g. `--bg-brand-base`, `--bg-brand-base-hover`, `--bg-brand-base-pressed`
- **Borders**: `--border-[role]-[state]` e.g. `--border-brand-base`, `--border-action-hover`
- **Text / icons**: `--content-[role]` e.g. `--content-base`, `--content-secondary`, `--content-on-brand-base`
- **Shadows**: `--sh-[name]` e.g. `--sh-action`
- **Radius**: `--radius-base`
- State suffix order: `base` → `base-hover` → `base-pressed`

> ⚠️ `--bg-brand-base` ≠ `--border-brand-base` — they resolve to different hex values. Never use a `bg-` token as a border color or vice versa.

> ⚠️ **Deprecated format** — some older pages use `<div class="tbl-wrap"><table>` with `<span class="token"><span class="swatch">` swatches and Figma-path token names like `bg/brand/base`. This format is deprecated. Always use `<table class="token-table">` with `<code>--css-var-name</code>` as shown above.

---

## 11. Developer Tab — Section Order

| # | Section | `id` | Heading | Notes |
|---|---------|------|---------|-------|
| 1 | Playground | `dev-playground` | Playground | Required |
| 2 | Usage | `dev-usage` | Usage | Required. Contains `dev-preview` + `dev-code-wrap` pairs |
| 3 | CSS classes | `dev-props` | CSS classes | API reference table |
| 4 | CSS tokens | `dev-tokens` | CSS tokens | Same token table as design tab |
| 5 | Accessibility | `dev-a11y` | Accessibility | Required |

---

## 12. Developer Tab — Preview + Code Pattern

Each example in the dev Usage section is a preview block followed immediately by a code block:

```html
<h3 class="text-l4">[Example Title]</h3>
<div class="dev-preview">
  <!-- live component, fully interactive -->
</div>
<div class="dev-code-wrap">
  <button class="dev-copy-btn">Copy</button>
  <pre><code><!-- syntax-highlighted HTML snippet --></code></pre>
</div>
```

### Code snippet integrity — never invent class names or APIs

**The `dev-code-wrap` snippet must only contain code that actually exists in the Angular codebase.** Verify against the live styleguide at `styleguide.effectory.com` before writing any snippet.

- **Do not invent class names**, component selectors, wrapper elements, or HTML patterns. If you cannot confirm a class or selector exists in the live styleguide, do not include it.
- **`dev-preview` HTML may use internal documentation-only CSS classes** for visual rendering (e.g. `.tf-inline` for demo purposes). Those classes must **never** appear in the `dev-code-wrap` code snippet.
- **If the Angular API is unknown or not yet documented**, omit the code snippet and add a `dev-gap` callout explaining what needs to be confirmed before the snippet can be written.
- **The playground `buildCode()` function** must follow the same rule — it generates code the user will copy into their app. No invented class names.

Syntax highlight classes inside `<code>`:
- `<span class="ct">` — tag names (`<button`, `/>`)
- `<span class="ca">` — attribute names (`class`, `type`)
- `<span class="cv">` — attribute values (`"btn-primary"`)
- `<span class="cc">` — comments

**Never add a dark theme inline override** to `.dev-code-wrap` or `.dev-preview`. The global `styles.css` handles the light theme. Any `background: var(--bg-inverse-base)` or similar dark overrides on these elements must be removed.

`dev-preview` inline style overrides (when needed):
```html
<!-- horizontal row, wrapping -->
<div class="dev-preview" style="flex-wrap:wrap;">

<!-- column layout (e.g. form fields stacked) -->
<div class="dev-preview" style="flex-direction:column; gap:10px; align-items:flex-start; padding:24px 28px;">

<!-- custom padding -->
<div class="dev-preview" style="padding:24px 28px; gap:12px; justify-content:flex-start;">
```

---

## 13. Gap / Figma Discrepancy Callouts

Use the `dev-gap` pattern **everywhere** — both Design tab and Developer tab — to flag Design ↔ Dev mismatches. The `gap-callout` class is deprecated; do not use it.

```html
<div class="dev-gap">
  <span class="dev-gap-icon">⚠️</span>
  <div class="dev-gap-body">
    <span class="dev-gap-label">Figma gap</span>
    <span class="dev-gap-text">[Description of the discrepancy and what needs to be done.]</span>
  </div>
</div>
```

Place these directly before the relevant section, state card, or `dev-preview` block they relate to.

---

## 14. Icons — Always Use the Icon Library

**Never use inline SVGs for icons.** Always use `<i data-icon="[name]">` so icons stay consistent with the design system and automatically pick up colour via `currentColor`.

```html
<!-- ✅ Correct -->
<i data-icon="info" style="display:flex;width:16px;height:16px;"></i>

<!-- ❌ Wrong — never do this -->
<svg width="16" height="16" viewBox="0 0 16 16" ...>...</svg>
```

Icons live in `assets/icons/{name}.svg` and are injected by `icons.js`. Size and colour are controlled via CSS on the host `<i>` element — the SVG inside inherits `width:100%`, `height:100%`, and `currentColor`.

**Exceptions** — the only cases where an inline `<svg>` is acceptable:
- Do/Don't caption tick and cross icons (the green circle-check and red circle-X)
- Tab bar icons (design / developer tab buttons in the page header)
- Any SVG that is purely decorative layout geometry (e.g. callout lines in anatomy figures)

Every other icon — in components, state demos, variant rows, anatomy callouts, info buttons, error messages — must use `data-icon`.

---

## 14b. Typography — Always Use the Type Scale

**Font sizes for components must come from the type scale. Never use an arbitrary `px` value.**

Allowed sizes (px): **12, 14, 16, 18, 20, 26, 32, 42**. These map to the `text-l*` / `body-*` utilities. Prefer the utility class (`class="text-l5"`, `body-14`) over a raw `font-size`; when you must write `font-size`, use only a scale value.

**Never** use off-scale values like `13`, `13.5`, `14.5`, `12.5`, `11`, `10.5`, `9.5px`. If a design looks like 13px, it's 12 or 14 — pick one. This applies to every component (in `components.css`) and every component demo in a `*-docs.html` `<style>` block.

> The `styles.css` documentation chrome (page header, badges, TOC) is the website's own furniture and may use its own micro-sizes — that is **not** the component type scale and is out of scope.

A pre-commit hook (`.githooks/pre-commit`, Guard 2) blocks off-scale `font-size` additions in `*-docs.html` and `components.css`. For a genuine exception, add `/* font-scale-exempt: reason */` on the line.

---

## 14c. Border radius — Always Use a Radius Token

**Border radius must come from a `--radius-*` token via `var()`. Never write a raw `px` radius.**

The scale (px): `--radius-sm` 4 · `--radius-base` 6 · `--radius-md` 8 · `--radius-lg` 12 · `--radius-xl` 16 · `--radius-full` 999. Pick the nearest token — a design that looks like `9px` is `var(--radius-md)`, `10px`/`11px` is `var(--radius-lg)`, a pill/circle is `var(--radius-full)`.

**Never** hardcode a px value like `border-radius: 9px` or `border-radius: 10px`. Percentages for true circles (`50%`) and `0` are allowed, but prefer `var(--radius-full)` for pills and circular avatars/badges so the system stays consistent. This applies to every component (in `components.css`) and every component demo in a `*-docs.html` `<style>` block.

A pre-commit hook (`.githooks/pre-commit`, Guard 3) blocks raw-px `border-radius` additions in `*-docs.html`, `index.html` and `components.css`. For a genuine exception, add `/* radius-exempt: reason */` on the line.

---

## 15. Playground Section (Developer Tab — Required)

Every component page must include a Playground as the first section in the Developer tab.

```html
<section class="section" id="dev-playground">
  <h2 class="text-l3">Playground</h2>
  <p class="section-lead">Configure props and see the component update live — the code snippet below reflects your selection.</p>

  <div class="pg-card">
    <div class="pg-preview" id="pg-preview"></div>
    <div class="pg-bottom">
      <div class="pg-tab-bar">
        <button class="pg-tab is-active" data-pgtab="props">Properties</button>
        <button class="pg-tab" data-pgtab="code">Code</button>
        <button class="pg-reset" id="pg-reset">Reset</button>
      </div>
      <div class="pg-panel pg-props-wrap" id="pg-panel-props">
        <!-- .pg-row elements for each prop -->
      </div>
      <div class="pg-panel pg-code-wrap" id="pg-panel-code" hidden>
        <button class="dev-copy-btn" id="pg-copy">Copy</button>
        <pre><code id="pg-code"></code></pre>
      </div>
    </div>
  </div>
</section>
```

Prop row patterns:
```html
<!-- Select (enum) -->
<div class="pg-row">
  <div class="pg-row-name">[prop]</div>
  <div class="pg-row-ctrl">
    <select class="pg-select" id="pg-[prop]">
      <option value="[val]">[val]</option>
    </select>
  </div>
</div>

<!-- Toggle (boolean) -->
<div class="pg-row">
  <div class="pg-row-name">[prop]</div>
  <div class="pg-row-ctrl">
    <label class="pg-toggle"><input type="checkbox" id="pg-[prop]"><span class="pg-toggle-track"></span></label>
  </div>
</div>
```

The playground logic is written as an inline `<script>` at the bottom of the panel.

---

## 16. Component CSS Conventions

### Hover on `<input>` inside a `<label>`

CSS `:hover` on a `<label>` or wrapper does **not** propagate to a contained `<input>`. Always add explicit parent-hover rules:

```css
/* Wrong — input:hover only fires when the cursor is directly on the input */
input[type="radio"].rb:hover { border-color: var(--border-action-hover); }

/* Correct — also covers hover on any ancestor wrapper */
input[type="radio"].rb:hover,
.rb-label-wrap:hover .rb:not(.is-disabled),
.rb-info-wrap:hover .rb:not(.is-disabled) {
  border-color: var(--border-action-hover);
}
```

### State classes vs. pseudo-classes

Always define both the real pseudo-class and the static state class (used in documentation demos):

```css
input:checked,
input.is-checked { /* ... */ }

input:hover,
input.is-hover { /* ... */ }

input:disabled,
input.is-disabled { /* ... */ }
```

### pointer-events on demo elements

All components inside `dd-prev` and anatomy figures must have `pointer-events:none` on the component element itself (not the wrapper). This prevents accidental interaction while keeping the demo visually accurate.

---

## 17. TOC Link → Section ID Mapping

TOC `href`s must exactly match the section `id`. Standard IDs:

**Design tab:**
- `#anatomy`
- `#usage`
- `#variants`
- `#content-guidelines`
- `#states`
- `#tokens`
- `#accessibility`

**Developer tab:**
- `#dev-playground`
- `#dev-usage`
- `#dev-props`
- `#dev-tokens`
- `#dev-a11y`

---

## 18. Common Mistakes to Avoid

| Mistake | Fix |
|---------|-----|
| `flex-direction:column` on `dd-prev` without `flex-wrap:nowrap` + `height:auto` | Items overflow into phantom right column. Add all five column overrides (see §7). |
| Adding a fixed `height` to `dd-prev` | Use the global `min-height: 200px` instead. A fixed height clips tall content and breaks the column-layout override. |
| Wrapping a component in a `div` inside `state-col` without `width:100%` | `.state-col` has `align-items: flex-start`, so a wrapper `div` will shrink to its content width instead of stretching. Always add `width:100%` to any block wrapper (e.g. `.tf-wrap`) placed directly inside a `state-col`. |
| Using `--bg-brand-base` as a border color | Use `--border-brand-base` for borders. Different values. |
| Dark background override on `.dev-code-wrap` or `.dev-preview` | Remove it. `styles.css` handles the light theme globally. |
| Setting `layoutSizingHorizontal = 'FILL'` before `appendChild` | Not applicable here (Figma SDK rule), but mirrors the flex rule: set sizing after the parent relationship is established. |
| Mixing `flex:1` and `flex:none` incorrectly in `dd-card` | `dd-prev` gets `flex:1` (grows to fill height); `dd-cap` gets `flex:none` (natural height, pins to bottom). |
| Missing `is-` prefix on state classes | All state classes are `is-hover`, `is-pressed`, `is-checked`, `is-disabled`, etc. Never `hover`, `active`, `checked`. |
| Inventing class names in `dev-code-wrap` snippets | Only use class names / selectors confirmed in the live Angular styleguide (`styleguide.effectory.com`). If the API is unknown, add a `dev-gap` callout instead of guessing. |
| Using internal demo CSS classes in code snippets | Classes written in the page `<style>` block for visual demos (e.g. `.tf-inline`, `.tf-num-wrap`) must never appear in copyable code snippets — they are documentation scaffolding, not production code. |

---

## 19. Synchronisatie met het prototype-systeem

Het prototype-systeem (`.claude/skills/effectory-design-system/`) leunt op drie herbruikbare lagen: `tokens.css`, `foundation.css` en `components.css`. Houd deze in sync met de documentatie:

- **Nieuwe component gedocumenteerd of component-CSS gewijzigd?** Werk `components.css` bij zodat de gebundelde CSS klopt met de `<style>`-blokken in de doc-pagina's.
- **Fundament gewijzigd** (spacing, radius of shadows in `:root` van `styles.css`)? Werk `foundation.css` overeenkomstig bij.
- **Nieuwe of gewijzigde componenten, varianten, tokens of iconen?** Werk `.claude/skills/effectory-design-system/design-system-reference.md` bij.
- **`tokens.css` is auto-gegenereerd** via `build-tokens.py` vanuit Figma — bewerk het **nooit** met de hand. Wijzig tokens in Figma en draai daarna `python3 build-tokens.py`.
- **`SKILL.md` schrijf je hier, nooit in `effectory-design-documentation`.** Die repo heeft een kopie van de skill, maar die is stroomafwaarts: ververs hem vanuit deze repo, nooit andersom. Doe je het toch omgekeerd, dan bouwt `release-skill.sh` uit `skill-source/` en levert het team een oudere versie — dat ging op 19-08-2026 net goed omdat het toevallig opviel.
- **Controleer beide skill-kopieën** met `./check-skill-consistency.py`: dezelfde regels, dezelfde referentieschermen, dezelfde `reference-prototypes/`-mappen, en geen verwijzing naar een regel die niet bestaat. Draait mee in `./sync-skill.sh`.
- **Controleer de drift** met `./check-reference-drift.py`. Die vergelijkt de classes in `components.css` met wat er in de reference staat en faalt op een component die nergens in de reference voorkomt. `./sync-skill.sh` draait hem automatisch en breekt af als het misgaat (omzeilen: `SKIP_DRIFT_CHECK=1`).
- Raken deze bestanden uit sync met de docs, dan bouwt het team prototypes met verouderde of ontbrekende componenten.
