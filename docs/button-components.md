# Button Components

Buttons are clickable elements used to trigger actions. They communicate calls to action to the user and allow users to interact with pages in a variety of ways. Button labels express what action will occur when the user interacts with it. Each page should have only one primary button; any remaining calls to action should be represented as lower-emphasis buttons.

---

## Component Overview

The button system consists of six distinct components, each serving a specific purpose in the interface hierarchy.

| Component | Size | Font | Use case |
|---|---|---|---|
| `button` | 36×auto px | 14px | Standard actions across the product |
| `button-big` | 56×268 px | 16px | High-emphasis, full-width or modal CTAs |
| `icon-button` | 36×36 or 24×24 px | — | Icon-only actions where space is constrained |
| `link-button` | 23 or 20 px height | 14px or 12px | Inline navigational or secondary actions |
| `filter-button` | 36×182 px | 14px | Filtering controls with a label/value pair |
| `sentiment-button` | 36×auto px | 14px | Contextual feedback actions (status-aware) |

---

## Variant Overviews

### `button`

The standard button. 16 variants total.

**Properties**

| Property | Values |
|---|---|
| Type | `Primary` · `Secondary` · `Tertiary` · `Danger` |
| State | `Default` · `Hover` · `Pressed` · `Disabled` |

**Types**

- **Primary** — Highest emphasis. Use for the single most important action on a page or within a section (e.g. "Save", "Submit", "Confirm").
- **Secondary** — Medium emphasis. Use for supporting actions that are important but not the primary CTA (e.g. "Cancel", "Edit").
- **Tertiary** — Low emphasis. Use for supplementary or optional actions where visual weight should be minimal (e.g. "Learn more", "View details").
- **Danger** — Destructive actions. Use when the action is irreversible or has significant consequences (e.g. "Delete", "Remove").

---

### `button-big`

A full-width, prominent button for high-impact moments. 8 variants total.

**Properties**

| Property | Values |
|---|---|
| Type | `Primary` · `Secondary` |
| State | `Default` · `Hover` · `Pressed` · `Disabled` |

**Types**

- **Primary** — Full-width primary CTA. Use in dialogs, onboarding flows, and empty states where the action is the central focus.
- **Secondary** — Full-width alternative. Use alongside a Primary big button to offer a secondary path (e.g. "Skip" next to "Continue").

---

### `icon-button`

Icon-only button. Requires a tooltip for all non-decorative usage. 24 variants total.

**Properties**

| Property | Values |
|---|---|
| Type | `Primary` · `Secondary` · `Tertiary` |
| Size | `36px` · `24px` |
| State | `Default` · `Hover` · `Pressed` · `Disabled` |

**Types**

- **Primary** — High-emphasis icon action. Use sparingly, just like a text Primary button.
- **Secondary** — Medium-emphasis icon action. Common in toolbars and action rows.
- **Tertiary** — Low-emphasis icon action. Use for dense UIs where visual noise must be minimised.

**Sizes**

- **36px** — Default touch target. Use in most contexts.
- **24px** — Compact target. Use in tight layouts such as table rows or inline toolbars. Ensure adequate spacing around the button to maintain a minimum effective touch area.

---

### `link-button`

Text link styled as a button. Used for navigational or inline secondary actions. 24 variants total.

**Properties**

| Property | Values |
|---|---|
| Type | `Default` · `Inverse` · `Danger` |
| Size | `14px` · `12px` |
| State | `Default` · `Hover` · `Pressed` · `Disabled` |

**Types**

- **Default** — Standard link colour. Use on light backgrounds.
- **Inverse** — Use on dark or coloured backgrounds where the default link colour would not provide sufficient contrast.
- **Danger** — Destructive link action. Use for in-copy destructive actions (e.g. "Remove" in a sentence).

**Sizes**

- **14px** — Default. Matches body copy size for inline usage.
- **12px** — Small. Use in dense components like table cells or captions.

---

### `filter-button`

Displays a filter label/value pair with interactive states. No disabled state — filters should be removed rather than disabled. 6 variants total.

**Properties**

| Property | Values |
|---|---|
| State | `Default` · `Hover` · `Pressed` |
| Inline | `False` · `True` |

**Inline prop**

- **False** — Standalone filter button, typically in a filter bar above a list or table.
- **True** — Inline variant for embedding within text or denser layouts.

**Anatomy** — The button renders two text segments: a **Filter name** label (e.g. "Status:") followed by the selected **Value** (e.g. "Active").

---

### `sentiment-button`

Contextual action button tied to a sentiment/status category. 32 variants total.

**Properties**

| Property | Values |
|---|---|
| Type | `Positive` · `Negative` · `Warning` · `Informative` |
| Primary | `True` · `False` |
| State | `Default` · `Hover` · `Pressed` · `Disabled` |

**Types**

- **Positive** — Confirms or approves (e.g. "Approve", "Mark resolved"). Uses green-family tokens.
- **Negative** — Rejects or flags negatively (e.g. "Reject", "Mark failed"). Uses red-family tokens.
- **Warning** — Caution-level actions (e.g. "Escalate", "Flag"). Uses amber-family tokens.
- **Informative** — Neutral informational actions (e.g. "Acknowledge", "Note"). Uses blue-family tokens.

**Primary prop**

- **True** — Filled/solid variant with a higher visual weight. Use as the main CTA within a sentiment context.
- **False** — Outlined/ghost variant. Use for secondary sentiment actions or to reduce emphasis.

---

## States

All interactive button components share the same state model:

| State | Description |
|---|---|
| **Default** | Resting state. No user interaction. |
| **Hover** | Cursor is over the button. Provides visual feedback that the button is interactive. |
| **Pressed** | Button is actively being clicked or tapped. |
| **Disabled** | Action is unavailable. The button is visible but non-interactive. Must not be focusable. |

> `filter-button` does not include a Disabled state — remove a filter rather than disabling it.

---

## Accessibility Guidelines

### Keyboard interaction

- All buttons must be reachable via `Tab` and activatable via `Enter` or `Space`.
- Disabled buttons (`State=Disabled`) must be excluded from the tab order (`tabindex="-1"` or the native `disabled` attribute). Do not use `aria-disabled="true"` as a substitute unless you intentionally keep them in the tab order for discoverability.
- `icon-button` must have a visible or programmatically associated label (see below).

### Labels and names

- **`button`, `button-big`, `link-button`, `sentiment-button`** — The visible text label serves as the accessible name. Keep labels short and action-oriented (verb + object: "Save changes", "Delete account").
- **`icon-button`** — Has no visible text. Always provide an `aria-label` or a visually-hidden label that describes the action, not the icon (use "Close dialog", not "X"). Pair with a tooltip to surface this label on hover/focus.
- **`filter-button`** — The accessible name should include both the filter name and value (e.g. "Status: Active"). Ensure the combined label is announced as a single unit.

### Roles and semantics

- Use a native `<button>` element wherever possible. Avoid `<div role="button">` unless the element must support non-button HTML context.
- For `link-button`, use `<a href="...">` when the action navigates to a new page or resource. Use `<button>` when it triggers an in-page action.
- `sentiment-button` should communicate its category through colour and label, not colour alone. The sentiment type must be reflected in the visible label or an `aria-label`.

### Colour and contrast

- Button text and icon colours must meet a minimum **4.5:1** contrast ratio against their background in all interactive states (Default, Hover, Pressed).
- The Disabled state is exempt from contrast requirements per WCAG 2.1 §1.4.3, but aim for 3:1 or above where possible to aid users with low vision.
- `Danger` type and `Negative` sentiment buttons must not rely solely on red colour to convey the destructive meaning — ensure the label itself makes the consequence explicit.
- `Inverse` link-buttons are specifically designed for dark backgrounds. Always verify contrast in context before use.

### Focus indicators

- All focusable buttons must have a clearly visible focus ring. Do not remove the default `:focus-visible` outline without replacing it with an equivalent custom indicator.
- Focus rings must have a **3:1** contrast ratio against adjacent colours (WCAG 2.2 §2.4.11).

### Motion and animation

- If hover/pressed state transitions involve animation, respect `prefers-reduced-motion` by reducing or eliminating transition durations.

---

## Usage Guidelines

### Hierarchy and emphasis

- **One Primary button per view.** When multiple actions are needed, pair one Primary with Secondary or Tertiary buttons.
- **Never place two Primary buttons side by side.** If both actions are equally important, reconsider the information architecture.
- Use `button-big` only for the single most critical action in a full-screen or modal context (e.g. onboarding, checkout, empty states). Do not use it in lists or inline with content.
- Use `link-button` for low-friction, supporting actions — especially those embedded in body copy or captions. Do not use it as a primary CTA.

### Labelling

- Use concise, action-oriented labels: **verb + noun** (e.g. "Add member", "Export report").
- Avoid vague labels like "Click here", "Submit", or "OK" without further context. These are unhelpful for screen readers and provide poor scannability.
- Avoid all-caps labels in implementation — capitalisation should be controlled by design tokens, not hardcoded text.
- For `filter-button`, the filter **name** should always end with a colon (e.g. "Status:") and the **value** should reflect the currently applied selection.

### Placement and layout

- Place the primary action on the **right** in horizontal button groups (matches natural reading flow for LTR languages and thumb reach on mobile).
- In vertical stacked layouts (e.g. mobile modals), place the primary action at the **top**.
- Maintain adequate spacing between adjacent buttons — do not allow tap targets to merge.
- `icon-button` at 24px should only be used in contexts where the surrounding spacing compensates for the reduced touch target. The minimum recommended effective tap area is 44×44px (iOS HIG) or 48×48dp (Material).

### Sentiment buttons

- Use `sentiment-button` only in contexts where the semantic tone of an action needs to be reinforced (e.g. approval workflows, alert resolution, feedback forms).
- Set `Primary=True` for the most expected or recommended sentiment action; set `Primary=False` for alternative or secondary sentiment paths.
- Never use more than one `Primary=True` sentiment button per interaction group.

### Destructive actions

- Use `Type=Danger` on `button` or `Type=Negative` on `sentiment-button` for irreversible actions.
- Always pair destructive buttons with a confirmation step (dialog or inline confirmation) to prevent accidental activation.
- Avoid placing a Danger button immediately adjacent to a Primary button without clear separation.

### Disabled state

- Only disable a button when the reason is immediately clear to the user — ideally through an inline validation message or tooltip.
- Do not use disabled buttons as a substitute for hiding unavailable actions. If an action is irrelevant to the current context, consider hiding it entirely.
- `filter-button` has no disabled state by design. To indicate a filter is no longer applicable, remove it from the UI.
