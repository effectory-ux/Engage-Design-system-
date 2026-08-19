# Engage Design System — Reference

Hand-maintained. Describes `tokens.css`, `foundation.css`, `components.css` and `assets/icons/`.
Change any of those and update this document too, or the skill will not know the new component exists (see CLAUDE.md §19).
Do NOT invent names. If something isn't listed here, it does not exist.

---

## 1. HTML boilerplate voor een prototype

```html
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Prototype</title>
  <base href="../" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/tokens.css" />
  <link rel="stylesheet" href="/foundation.css" />
  <link rel="stylesheet" href="/components.css" />
  <style>
    /* De base reset (box-sizing, body-margin, font, kleur) zit in foundation.css —
       die laad je hierboven, dus die hoef je hier NIET te herhalen. Zet hier alleen
       pagina-specifieke stijl, zoals de achtergrond. */
    body { background: var(--bg-interface-body); }
  </style>
</head>
<body>
  <!-- prototype content here -->
  <script src="/icons.js"></script>
</body>
</html>
```

**Waarom relatieve paden en nooit `<base href="/">`:**
`icons.js` haalt SVG's op naast zichzelf (`document.currentScript`), dus `href="tokens.css"` en
`src="icons.js"` werken zoals ze staan. Ligt het prototype in een submap zoals `prototypes/`, zet er dan
`<base href="../" />` bij. Gebruik nooit `<base href="/">`: dat klopt alleen zolang je lokaal vanaf de
repo-root serveert, en breekt op GitHub Pages, waar `/` de root van het domein is en niet van de repo.

**Nooit meenemen:** `nav.html`, `nav.js`, `.shell`, `.topnav`, `.sidebar`, `.content-wrap`, `.page-header`, `.page-tabs`, `.tab-panel`, `.states-row`, `.state-col`, `.dd-grid`, `.token-table`, `.pg-card`, `.dev-preview`, `.dev-code-wrap`, `.toc-col`, `.section`, `.pagination`

---

## 2. Foundation-variabelen (`foundation.css`)

### Grid & layout
Geen formeel kolomgrid. Layout = **page padding** (responsive margin rondom de content) + **container max-width** + een vaste **gutter**.
| Property | Waarde |
|---|---|
| Page padding — desktop (`≥1200px`) | `48px` verticaal · `64px` horizontaal — nav (sidebar 240px) altijd zichtbaar |
| Page padding — tablet (`576–1199px`) | `32px` verticaal · `24px` horizontaal — nav als hamburger |
| Page padding — mobile (`<576px`) | `24px` verticaal · `16px` horizontaal — nav als hamburger |
| Container — narrow | `max-width: 960px` (lezen, formulieren, focus-flows) |
| Container — wide | `max-width: 1200px` (standaard app-pagina's, card-grids, dashboards) |
| Container — full width | geen max-width (data-zware tabellen / complexe UI's) |
| Default gutter | `24px` tussen elementen |
| Sidebar (desktop) | `240px` breed |
| Nav switch | op `1200px` wisselt sidebar ↔ hamburger-header |

> ⚠️ **Layout-maten komen uit deze regel, niet uit de Figma-artboard** (1440/1920px is canvas; reken nooit `artboard − sidebar`). De **page padding hierboven geldt voor de héle pagina** — breadcrumb, header, tabs én content gebruiken dezelfde horizontale padding (desktop **64px**, tablet 24px, mobile 16px) zodat alles uitlijnt. App-pagina's, card-grids én **dashboards zijn wide = 1200px** (gecentreerde kolom met de page-padding als gutter), niet full-width; **narrow (960px)** voor lezen/formulieren; **full-width** alleen voor data-zware tabellen. ⚠️ Onder de globale `* { box-sizing: border-box }`-reset telt een cap de padding mee: voor 1200px content mét padding gebruik `max-width: calc(1200px + 2 × page-padding)` + `margin-inline: auto`; zet dus nooit `max-width: 1200px` op een gepadde wrapper (content wordt dan te smal). Zie ook SKILL-regel 10.

### Spacing
| Token | Waarde |
|---|---|
| `--spacing-extra-tight` | `4px` |
| `--spacing-tight` | `8px` |
| `--spacing-base-tight` | `12px` |
| `--spacing-base` | `16px` |
| `--spacing-loose` | `24px` |
| `--spacing-extra-loose` | `32px` |
| `--spacing-super-loose` | `40px` |
| `--spacing-super-extra-loose` | `56px` |

**Sectie-spacing (vaste regels):**
- Tussen een **sectieheader en de sectiecontent** zit altijd **12px** (`--spacing-base-tight`) — dus tussen de titel/subtitel-kop van een blok en de eerste content eronder (bars, kaarten, lijst, grid). Heeft een sectie zowel een titel als een subtitel, dan blijft de titel→subtitel-afstand klein (`--spacing-extra-tight`, 4px) en geldt de 12px tussen de subtitel en de content.
- Tussen **opeenvolgende secties** (in side panels / `.sp-body`) zit altijd **40px** (`--spacing-super-loose`). Pas dit consistent toe op elk side-panel (Effectiveness, Engagement, eNPS, …); varieer niet per panel.

Houd dit consistent in elk prototype; varieer niet per sectie.

### Border radius
| Token | Waarde |
|---|---|
| `--radius-none` | `0` |
| `--radius-sm` | `4px` |
| `--radius-base` | `6px` |
| `--radius-md` | `8px` |
| `--radius-lg` | `12px` |
| `--radius-xl` | `16px` |
| `--radius-full` | `999px` |
| `--radius` | alias → `--radius-md` |

### Shadows
| Token | Gebruik |
|---|---|
| `--sh-action` | Buttons, inputs (rest) |
| `--sh-action-hover` | Buttons, inputs (hover) |
| `--sh-card` | Cards (rest) |
| `--sh-card-hover` | Cards (hover) |
| `--sh-popovers` | Dropdowns, menus |
| `--sh-dialogs` | Dialogs |
| `--sh-footer` | Footer bars |
| `--sh-slide-panel` | Slide-in panels |

### Motion
Gebruik altijd deze tokens voor animaties; verzin geen eigen duraties/easings.
| Token | Waarde | Gebruik |
|---|---|---|
| `--motion-fast` | `75ms` | exits, snelle fades |
| `--motion-base` | `150ms` | dialog open, standaard enters |
| `--motion-slow` | `300ms` | grotere surfaces (side panel slide) |
| `--ease-out` | `cubic-bezier(0,0,.2,1)` | enters (decelerate) |
| `--ease-in` | `cubic-bezier(.4,0,1,1)` | exits (accelerate) |
| `--ease-standard` | `cubic-bezier(.4,0,.2,1)` | bewegen op het scherm |

**Overlays animeren automatisch.** Wikkel een `.dialog` of `.sidepanel` in `.overlay` (gebruik `.overlay.is-right` voor een side panel) en de juiste enter-animatie wordt toegepast:
```html
<div class="overlay"><div class="dialog dialog-s"> … </div></div>
<div class="overlay is-right"><div class="sidepanel"> … </div></div>
```
- Dialog: surface scaleert `0.8 → 1` in `--motion-base` met `--ease-out`; backdrop fade't in.
- Backdrop-kleur: `rgba(25,39,67,.6)`. ⚠️ Figma/dev gap: Figma-token `--bg-interface-overlay` = `.50`, styleguide rendert `.65`; we gebruiken `.60` tot het is gelijkgetrokken.
- Side panel: slidet van rechts in (`translateX(100%) → 0`) in `--motion-slow`.
- **Sluiten:** zet `.is-closing` op de `.overlay` en verwijder de node pas op `animationend` — anders is er geen exit-animatie en klapt het paneel in één frame weg. De exit spiegelt de enter (dialog `1 → 0.8` + fade, side panel `0 → translateX(100%)`, backdrop fade-out) met `--ease-in` en `forwards` (houdt de eindstand vast tot removal). Luister op de `.sidepanel`/`.dialog`, niet op de backdrop, zodat de langste beweging klaar is. JS-patroon staat in SKILL.md sectie 9.
- `prefers-reduced-motion` zet de animaties uit (in én uit; al ingebouwd) — vang die af met een fallback die meteen sluit.

### Typografie-utility-classes
```
.text-l1   42px / 600 / -.03em    heading niveau 1
.text-l2   32px / 600 / -.02em    heading niveau 2
.text-l3   26px / 600 / -.02em    heading niveau 3
.text-l4   20px / 600 / -.01em    heading niveau 4
.text-l5   16px / 600 / 0         heading niveau 5
.text-l6   12px / 600 / .08em     label uppercase (content-subtle)
.text-small   12px / lh 1.5
.text-medium  14px / lh 1.6
.text-large   16px / lh 1.6
.text-w600 / .text-w500 / .text-w400   font-weight helpers
.text-subdued  color: var(--content-subtle)
```

**Toegestane font-size waarden: 12, 14, 16, 20, 26, 32, 42px — niets anders.**
Gebruik altijd een van de klassen hierboven of een inline `font-size` die exact overeenkomt met een van deze waarden. Waarden zoals `13px`, `15px` of `11px` bestaan niet in het systeem en mogen nooit worden gebruikt.

---

## 3. Design tokens (`tokens.css`)

Tokens zijn auto-generated vanuit Figma via `build-tokens.py`. Nooit handmatig bewerken.

### Dark mode
`tokens.css` bevat drie dark-mode lagen:
1. `@media (prefers-color-scheme: dark)` — automatisch op systeemvoorkeur
2. `html[data-theme="dark"]` — expliciet dark
3. `html[data-theme="light"]` — expliciet light (forceert light ook in dark-OS)

### Portals
- Default (Coordinator): teal brand (`--bg-brand-base: #0a9d99`)
- Personal portal: `html[data-portal="personal"]` → geel brand (`--bg-brand-base: #fecd29`)

### Semantische tokens — selectie voor prototype-gebruik

**Achtergronden**
| Token | Light waarde |
|---|---|
| `--bg-base` | `#ffffff` |
| `--bg-base-hover` | `#f8f8f9` |
| `--bg-base-pressed` | `#f1f2f4` |
| `--bg-secondary` | `#f8f8f9` |
| `--bg-tertiary` | `#e1e4e8` |
| `--bg-brand-base` | `#0a9d99` |
| `--bg-brand-subtle` | `#d2f8f6` |
| `--bg-input` | `#ffffff` |
| `--bg-disabled` | `rgba(25,39,67,.10)` |
| `--bg-negative-base` | `#d3353b` |
| `--bg-negative-subtle` | `#ffebeb` |
| `--bg-positive-base` | `#278747` |
| `--bg-positive-subtle` | `#d7f9e0` |
| `--bg-info-base` | `#3174db` |
| `--bg-info-subtle` | `#e6f0fe` |
| `--bg-warning-bold` | `#fa8324` |
| `--bg-warning-subtle` | `#feede1` |
| `--bg-highlight-base` | `#fdbd12` |
| `--bg-highlight-subtle` | `#ffefc2` |
| `--bg-inverse-base` | `#192743` |
| `--bg-interface-body` | `#ffffff` |

**Borders**
| Token | Light waarde |
|---|---|
| `--border-base` | `#e1e4e8` |
| `--border-action` | `#bcc1cd` |
| `--border-action-hover` | `#a5adbc` |
| `--border-brand-base` | `#0c827f` |
| `--border-brand-subtle` | `#7adddb` |
| `--border-negative-base` | `#b9252a` |
| `--border-positive-base` | `#39a35c` |
| `--border-info-base` | `#3174db` |
| `--border-warning-base` | `#ec6e0a` |
| `--border-highlight-base` | `#d68100` |
| `--border-disabled` | `rgba(25,39,67,.30)` |

**Tekst / iconen**
| Token | Light waarde |
|---|---|
| `--content-base` | `#192743` |
| `--content-secondary` | `rgba(25,39,67,.80)` |
| `--content-subtle` | `rgba(25,39,67,.50)` |
| `--content-placeholder` | `rgba(25,39,67,.67)` |
| `--content-disabled` | `rgba(25,39,67,.30)` |
| `--content-brand-base` | `#166764` |
| `--content-on-brand-base` | `#ffffff` |
| `--content-negative-base` | `#b9252a` |
| `--content-negative-secondary` | `#d3353b` |
| `--content-positive-base` | `#236e41` |
| `--content-info-base` | `#205bb9` |
| `--content-warning-base` | `#a83e00` |
| `--content-highlight-base` | `#8a4b15` |
| `--content-inverse-base` | `#ffffff` |

**Accent-kleuren** (voor badges, tags, highlights)
Patroon: `--bg-accent-{kleur}-base` / `--bg-accent-{kleur}-subtle`
Kleuren: `blue`, `green`, `orange`, `purple`, `red`, `turquoise`, `yellow`
Overeenkomstige border: `--border-accent-{kleur}-base`
Overeenkomstige tekst: `--content-accent-{kleur}-base`

---

## 4. Componenten (`components.css`)

### Button
```html
<!-- Primary -->
<button class="btn btn-primary">Label</button>
<button class="btn btn-primary"><i data-icon="plus"></i> Label</button>

<!-- Secondary -->
<button class="btn btn-secondary">Label</button>

<!-- Tertiary -->
<button class="btn btn-tertiary">Label</button>

<!-- Danger (filled) -->
<button class="btn btn-danger">Verwijderen</button>

<!-- Danger secondary -->
<button class="btn btn-danger-secondary">Verwijderen</button>

<!-- Danger tertiary -->
<button class="btn btn-danger-tertiary">Verwijderen</button>

<!-- Link -->
<button class="btn btn-link">Meer info</button>

<!-- Link delete -->
<button class="btn btn-link-delete">Verwijderen</button>

<!-- Disabled (elke variant) -->
<button class="btn btn-primary is-disabled" disabled>Label</button>
```
States: `.is-hover` `.is-pressed` `.is-disabled`

### Button Big
```html
<button class="btn-big btn-big-primary">Aan de slag</button>
<button class="btn-big btn-big-secondary">Meer weten</button>
<button class="btn-big btn-big-primary is-disabled" disabled>Disabled</button>
```
States: `.is-hover` `.is-pressed` `.is-disabled`

### Upgrade Button
```html
<button class="btn-upgrade">
  <span class="btn-upgrade-badge"><i data-icon="arrow-up"></i></span>
  Upgrade
</button>
```
States: `.is-hover` `.is-pressed` `.is-disabled`

### Sentiment Button
Knop gekleurd naar sentiment. **Voornamelijk gebruikt binnen een container die zelf een sentiment draagt** — een Inline notification, een gekleurde card, of de Announcement card / Announcement dialog: de knop neemt dezelfde kleur over zodat boodschap + actie als één geheel lezen. Losse, neutrale acties → gewone Button.
```html
<button class="sbtn is-positive">Approve</button>      <!-- secondary (outline) -->
<button class="sbtn is-primary is-negative">Delete</button>  <!-- primary (filled) -->
```
- Sentiment: `is-positive` / `is-negative` / `is-info` / `is-warning` — zet de border (secondary) of fill (`.is-primary`).
- Secondary: witte fill + sentiment-border + `--content-base`; hover = `-base-hover` border + `--sh-action-hover`; pressed = `--bg-{sent}-subtle`.
- Primary: gevuld met `--bg-{sent}-base` (warning = `--bg-warning-bold`, **donkere tekst**; info/positive/negative = witte tekst `--content-on-brand-base`).
- Hoogte 36, radius `--radius-base`, `--sh-action`, label `body-14` Medium. States: `.is-hover` `.is-pressed` `.is-disabled`.
> ⚠️ Figma/dev gap: Figma heeft een losse sentiment-knop met secondary én **filled primary**; de Angular-styleguide kent 'm momenteel alleen als **secondary** sentiment-actie binnen een Inline notification (`buttonMessages` / `messageType`). Standalone filled-primary nog te bevestigen.
> ⚠️ Figma/dev gap: sommige states zijn in Figma met **primitieve** tokens gekleurd (`color/orange/700`, `color/blue/900`, …). Gebruik altijd de **semantische** tokens (`--bg-{sentiment}-base/-hover/-pressed`, `--border-{sentiment}-base/-hover`); de Figma-lagen moeten daar nog op gebonden worden.

### Icon Button
Vierkante knop met alleen een icoon. Maat via `.ib-36` (36px knop, 16px icoon, radius `--radius-md`) of `.ib-24` (24px knop, **16px icoon**, 4px padding, radius `--radius-base`); variant via `.ib-primary` / `.ib-secondary` / `.ib-tertiary`. Beide maten gebruiken een 16px icoon — het verschil is de knop-grootte/padding. Altijd een `aria-label` meegeven.
```html
<button class="ib ib-36 ib-secondary" aria-label="Sluiten"><i data-icon="cross"></i></button>
<button class="ib ib-36 ib-primary" aria-label="Toevoegen"><i data-icon="plus"></i></button>
<button class="ib ib-24 ib-tertiary" aria-label="Meer"><i data-icon="more-horizontal"></i></button>
```
Secondary = witte vulling + 1px `--border-action` + subtiele `--sh-action` (bijv. de close-knop op een dialog). States: `.is-hover` `.is-pressed` `.is-disabled`.
> **Altijd een tooltip** (zie SKILL-regel 9): een icoon-only knop krijgt naast `aria-label` ook een tooltip met dezelfde tekst — wikkel 'm in een `.tt-demo` met een `.tooltip`-bubble (Angular: `matTooltip`).

### Text Field
```html
<!-- Standaard -->
<div class="tf-wrap">
  <label class="tf-lbl">Label <span class="tf-required">*</span></label>
  <div class="tf-field">
    <input class="tf" type="text" placeholder="Placeholder" />
  </div>
  <span class="tf-help">Helper tekst</span>
</div>

<!-- Met leading icon -->
<div class="tf-wrap">
  <label class="tf-lbl">Zoeken</label>
  <div class="tf-field">
    <span class="tf-field-icon tf-icon-left"><i data-icon="search"></i></span>
    <input class="tf" type="text" placeholder="Zoek..." />
  </div>
</div>

<!-- Error state -->
<div class="tf-wrap">
  <label class="tf-lbl">E-mail</label>
  <div class="tf-field">
    <input class="tf is-error" type="email" value="fout@" />
  </div>
  <span class="tf-err"><i data-icon="alert-circle"></i> Ongeldig e-mailadres</span>
</div>

<!-- Inline variant -->
<input class="tf-inline" type="text" value="Inline tekst" />

<!-- Inline number variant -->
<div class="tf-num-wrap">
  <input class="tf-num" type="number" value="42" />
  <span class="tf-num-lbl">%</span>
  <div class="tf-num-stepper">
    <button class="tf-num-btn"><i data-icon="chevron-up"></i></button>
    <button class="tf-num-btn"><i data-icon="chevron-down"></i></button>
  </div>
</div>
```
States op `input.tf`: `.is-hover` `.is-focus` `.is-error` `.is-disabled` `.is-readonly`
States op `.tf-num-wrap`: `.is-hover` `.is-focus` `.is-error` `.is-disabled`

### Search
```html
<div class="search-wrap">
  <span class="search-icon"><i data-icon="search"></i></span>
  <input type="search" class="srch" placeholder="Zoeken..." />
</div>
```
States op `input.srch`: `.is-hover` `.is-focus` `.is-disabled`

### Textarea
```html
<div class="ta-wrap">
  <label class="ta-lbl">Omschrijving <span class="ta-required">*</span></label>
  <textarea class="ta" rows="4" placeholder="Typ hier..."></textarea>
  <span class="ta-help">Max. 500 tekens</span>
</div>

<!-- Error state -->
<div class="ta-wrap">
  <label class="ta-lbl">Omschrijving</label>
  <textarea class="ta is-error"></textarea>
  <span class="ta-err"><i data-icon="alert-circle"></i> Verplicht veld</span>
</div>
```
States op `textarea.ta`: `.is-hover` `.is-focus` `.is-error` `.is-disabled`

### Select (Single)
```html
<div class="slt-wrap">
  <label class="slt-lbl">Keuze</label>
  <div class="slt" tabindex="0">
    <span class="slt-left">
      <span class="slt-ph">Selecteer...</span>
    </span>
    <i data-icon="chevron-down"></i>
  </div>
</div>

<!-- Met geselecteerde waarde -->
<div class="slt" tabindex="0">
  <span class="slt-left"><span class="slt-val">Optie A</span></span>
  <i data-icon="chevron-down"></i>
</div>
```
States: `.is-hover` `.is-focus` `.is-typing` `.is-error` `.is-warning` `.is-disabled`

### Select (Multi)
```html
<div class="ms" tabindex="0">
  <span class="ms-ph">Selecteer opties...</span>
  <span class="ms-ch"><i data-icon="chevron-down"></i></span>
</div>

<!-- Met chips -->
<div class="ms">
  <span class="chip">Optie A <i data-icon="cross"></i></span>
  <span class="chip">Optie B <i data-icon="cross"></i></span>
  <span class="ms-ch"><i data-icon="chevron-down"></i></span>
</div>
```
Chip-varianten: `.chip` `.chip-info` `.chip-error` `.chip-warning`

### Selection Button
```html
<button class="sel-btn">
  <span class="sel-btn-name">Filter</span>
  <span class="sel-btn-value">Actief</span>
  <i data-icon="chevron-down"></i>
</button>

<!-- Inline variant -->
<button class="sel-btn sel-btn-inline">
  <span class="sel-btn-name">Sorteren</span>
  <i data-icon="chevron-down"></i>
</button>

<!-- Selected/filled: add .is-filled zodra er een waarde gekozen is -->
<button class="sel-btn sel-btn-inline is-filled">
  <i data-icon="Clock"></i>
  <span class="sel-btn-value">30 jun 2026</span>
</button>
```
States: `.is-hover` `.is-pressed` `.is-focus` `.is-filled`.
`.sel-btn-value` is standaard `content-secondary` (placeholder-look). Voeg `.is-filled` toe wanneer er een waarde geselecteerd is — dat promoot de waarde én een leidend icoon naar `content-base`, gelijk aan de "Filled in"-state van de bordered Single Select.

### Dropdown menu
```html
<div class="menu">
  <div class="menu-item">Optie 1</div>
  <!-- Single-select: geselecteerde item krijgt ALTIJD de trailing check -->
  <div class="menu-item is-selected">Optie 2 <i data-icon="check" class="menu-item-check"></i></div>
  <div class="menu-divider"></div>
  <div class="menu-item">Optie 3</div>
</div>

<!-- Met zoekbalk -->
<div class="menu">
  <div class="menu-search">
    <i data-icon="search"></i>
    <input placeholder="Zoeken..." />
  </div>
  <div class="menu-item">Resultaat</div>
  <div class="menu-empty">Geen resultaten</div>
</div>
```

> ⚠️ **Selected state is verplicht — verzin er nooit een eigen.** Elk keuzemenu (taal, thema, filters, elk single-/multi-select dropdown) is het `.menu`-component met `.menu-item`'s. De geselecteerde optie(s) krijgen **`.menu-item.is-selected` + `<i data-icon="check" class="menu-item-check">`** (voeg `aria-checked` / `role="menuitemradio"` toe voor a11y). Bouw hiervoor **geen eigen popover met eigen knoppen** en gebruik **geen zelfbedachte selected-stijl** (dus geen los `font-weight`/kleur, geen custom `.is-active`). Toont een menu iets als geselecteerd zonder de trailing check, dan is het fout.

<!-- Header, groepslabel, subtitel, avatar, label, submenu, checkmark -->
<div class="menu">
  <div class="menu-header">Choose option</div>
  <div class="menu-item">
    <i data-icon="box" class="menu-item-icon"></i>
    <span class="menu-item-body">
      <span class="menu-item-title">Titel</span>
      <span class="menu-item-sub">Subtitel</span>
    </span>
  </div>
  <div class="menu-group-lbl">Groep A</div>
  <div class="menu-item">
    <span class="av av-24 av-yellow">JT</span>
    <span class="menu-item-body"><span class="menu-item-title">Met avatar</span></span>
  </div>
  <div class="menu-divider"></div>
  <div class="menu-item">
    <i data-icon="box" class="menu-item-icon"></i>
    <span class="menu-item-body"><span class="menu-item-title">Met label</span></span>
    <span class="menu-label">beta</span>
  </div>
  <div class="menu-item">
    <i data-icon="box" class="menu-item-icon"></i>
    <span class="menu-item-body"><span class="menu-item-title">Submenu</span></span>
    <i data-icon="chevron-right" class="menu-chevron"></i>
  </div>
</div>
```
States op `.menu-item`: `.is-hover` `.is-selected` `.is-focus` `.is-disabled`.
**Single-select selected state:** het `.is-selected` item krijgt naast de brand-subtle achtergrond ALTIJD de trailing check `<i data-icon="check" class="menu-item-check"></i>` (teal, `content-brand-base`) — de achtergrondtint alleen is niet genoeg. Multi-select gebruikt in plaats daarvan `.menu-cb` checkboxen, geen check. `.menu-item-check` heeft `display:flex` nodig om zijn 16px-box te krijgen.
Echte Angular-API: Material `mat-menu` met `[matMenuTriggerFor]`; items `<button mat-menu-item disableRipple>` (icoon + `<span>`) of `<a mat-menu-item class="icon-before">` voor links.
Onderdelen: `.menu-header` (titel), `.menu-group-lbl`, `.menu-divider`, `.menu-item` (+ `.menu-item-icon` / `.av` avatar, `.menu-item-body` → `.menu-item-title` + `.menu-item-sub`), trailing `.menu-item-check` / `.menu-chevron` / `.menu-label`.
Icoongrootte: `.menu-item-icon` is 16px (default); voeg `size-24` of `size-32` toe voor een groter icoon (16/24/32). Hou één maat aan binnen één menu.
Breedte: een dropdown groeit mee met de inhoud tot een max-breedte (~320px) en kapt daarna title/subtitle af met ellipsis (`width: max-content; min-width; max-width` + `text-overflow: ellipsis` op `.menu-item-title`/`.menu-item-sub`). Geen vaste breedte.

> ⚠️ **Clipping vermijden — render de dropdown in een fixed overlay-laag.** Net als bij de Tooltip: een `.menu` die met `position:absolute` binnen een `overflow:hidden`- of scroll-container leeft, wordt afgekapt zodra hij buiten die container valt. Klassiek geval: een filter-/header-dropdown binnen een `.card` — en `.card` heeft zélf `overflow:hidden` (voor de ronde hoeken), dus de dropdown wordt op de kaartrand afgeknipt. Pure CSS lost dit niet op. Laat de trigger-klik de `.menu` met **`position:fixed`** + hoge `z-index` op berekende coördinaten onder de trigger zetten (rechts uitgelijnd op de trigger), **omhoog klappen** als er onderaan te weinig ruimte in de viewport is, en **clampen** binnen de viewport als laatste redmiddel; herbereken bij `scroll` (met capture, zodat inner scrollers meetellen) en `resize`, en sluit bij klik buiten het menu. Zo kan **geen enkele voorouder** (kaart, scroll-container, `overflow:hidden`) de dropdown ooit clippen. Dit geldt voor **álle popover-achtige overlays**: Dropdown menu, account-/portal-menu, filter-menu's, combobox-lijsten en date pickers. **Zet dus géén `overflow:hidden` op kaarten "voor de zekerheid"**, en reken erop dat de bestaande `.card` het al heeft — gebruik `position:fixed` voor elke overlay die eruit moet breken. Zie ook de identieke aanpak bij de Tooltip (*Clipping vermijden*).

### Checkbox
```html
<!-- Bare -->
<span class="cb-wrap">
  <input type="checkbox" class="cb" />
</span>

<!-- Labeled -->
<label class="cb-label-wrap">
  <span class="cb-wrap"><input type="checkbox" class="cb" /></span>
  Optie label
</label>

<!-- Met beschrijving -->
<div class="cb-info-wrap">
  <span class="cb-wrap"><input type="checkbox" class="cb" /></span>
  <div class="cb-info-body">
    <span class="cb-info-label">Titel</span>
    <span class="cb-info-desc">Korte beschrijving</span>
  </div>
</div>

<!-- Checkbox button (ghost) -->
<button class="cb-btn">
  <span class="cb-wrap"><input type="checkbox" class="cb" /></span>
  Label
</button>

<!-- Checkbox button (bordered) -->
<button class="cb-btn-bordered">
  <span class="cb-wrap"><input type="checkbox" class="cb" /></span>
  Label
</button>

<!-- Tile -->
<div class="cb-tile">
  <div class="cb-tile-cb"><span class="cb-wrap"><input type="checkbox" class="cb" /></span></div>
  <div class="cb-tile-body">
    <div class="cb-tile-title">Titel</div>
    <div class="cb-tile-desc">Beschrijving</div>
  </div>
</div>
```
Groottes: `.cb-large` / `.cb-lg` op de `input` (20×20 px)
States op `input.cb`: `.is-hover` `.is-checked` `.is-indeterminate` `.is-disabled`
State op `.cb-label-wrap` / `.cb-info-wrap` / `.cb-btn` / `.cb-btn-bordered`: `.is-disabled`

### Radio Group
```html
<!-- Bare -->
<span class="rb-wrap">
  <input type="radio" class="rb" name="g1" />
</span>

<!-- Labeled -->
<label class="rb-label-wrap">
  <span class="rb-wrap"><input type="radio" class="rb" name="g1" /></span>
  Optie A
</label>

<!-- Met beschrijving -->
<div class="rb-info-wrap">
  <span class="rb-wrap"><input type="radio" class="rb" name="g1" /></span>
  <div class="rb-info-body">
    <span class="rb-info-label">Titel</span>
    <span class="rb-info-desc">Beschrijving</span>
  </div>
</div>

<!-- Groep -->
<div class="rb-group">
  <label class="rb-label-wrap">
    <span class="rb-wrap"><input type="radio" class="rb" name="g1" /></span>Optie A
  </label>
  <label class="rb-label-wrap">
    <span class="rb-wrap"><input type="radio" class="rb" name="g1" /></span>Optie B
  </label>
</div>

<!-- Tile -->
<div class="rb-tile">
  <div class="rb-tile-radio"><span class="rb-wrap"><input type="radio" class="rb" name="g1" /></span></div>
  <div class="rb-tile-body">
    <div class="rb-tile-title">Titel</div>
    <div class="rb-tile-desc">Beschrijving</div>
  </div>
</div>

<!-- Button ghost -->
<button class="rb-btn-ghost">
  <span class="rb-wrap"><input type="radio" class="rb" /></span>
  Label
</button>

<!-- Button bordered -->
<button class="rb-btn-bordered">
  <span class="rb-wrap"><input type="radio" class="rb" /></span>
  Label
</button>
```
Grootte: `.rb-lg` op `input` (20×20 px)
States op `input.rb`: `.is-hover` `.is-checked` `.is-disabled`
State op wrappers: `.is-disabled`

### Toggle
```html
<!-- Bare -->
<label class="tgl-wrap">
  <input type="checkbox" class="tgl" />
  <span class="tgl-track"><span class="tgl-thumb"></span></span>
</label>

<!-- Labeled -->
<label class="tgl-label-wrap">
  <span class="tgl-wrap">
    <input type="checkbox" class="tgl" />
    <span class="tgl-track"><span class="tgl-thumb"></span></span>
  </span>
  Meldingen aan
</label>

<!-- Met beschrijving -->
<div class="tgl-info-wrap">
  <span class="tgl-wrap">
    <input type="checkbox" class="tgl" />
    <span class="tgl-track"><span class="tgl-thumb"></span></span>
  </span>
  <div class="tgl-info-body">
    <span class="tgl-info-label">Titel</span>
    <span class="tgl-info-desc">Beschrijving van de instelling</span>
  </div>
</div>
```
On-state: `input.tgl:checked` (native) of `.tgl-track.is-on` (statisch)
States op `.tgl-track`: `.is-on` `.is-hover` `.is-disabled`
States op wrappers: `.is-disabled`

### Segmented Control
Compacte groep van 2–3 opties waarvan er altijd precies één geselecteerd is — voor het wisselen van views/modes binnen dezelfde pagina (chart/table, week/maand). Méér dan 3 opties → Select; aan/uit → Toggle; navigatie → Tabs.
```html
<div class="segctl">
  <button class="segctl-btn is-active"><i data-icon="box"></i> Chart</button>
  <button class="segctl-btn"><i data-icon="box"></i> Table</button>
</div>
```
- Track: `--bg-tertiary`, 4px padding, 4px gap, `--radius-base`.
- Segment: 6px 16px padding, 8px icon-gap, `body-14` Medium; icoon 16px (optioneel — alle segmenten of geen).
- Geselecteerd (`.is-active`): `--bg-base` + `--sh-card`, tekst `--content-action-pressed`. Niet-geselecteerd: transparant, `--content-secondary`. Hover (`.is-hover`): `--bg-secondary` achtergrond + tekst `--content-base`.
- Echte Angular-API: Material `mat-button-toggle-group` + `mat-button-toggle [value] checked` (styleguide: Toggles → "Button toggles"); icoon via `eff-svg-* class="icon"` + `<span>`.
> ⚠️ Figma/dev gap: de styleguide kent ook `multiple` (meerdere segmenten tegelijk aan); Figma dekt alleen single select met 2–3 buttons.

### Date Picker
```html
<!-- Trigger knop -->
<button class="dp-trigger">
  <i data-icon="calendar"></i>
  12 jan 2025
  <i data-icon="chevron-down"></i>
</button>

<!-- Kalender popup -->
<div class="dp">
  <div class="dp-body">
    <div class="dp-header">
      <div class="dp-month-group">
        <span class="dp-month-label">Januari 2025</span>
        <i data-icon="chevron-down"></i>
      </div>
      <div class="dp-nav">
        <button class="dp-nav-btn"><i data-icon="chevron-left"></i></button>
        <button class="dp-nav-btn"><i data-icon="chevron-right"></i></button>
      </div>
    </div>
    <div class="dp-weekdays">
      <div class="dp-wday">Ma</div><!-- ... -->
    </div>
    <div class="dp-grid">
      <div class="dp-day">1</div>
      <div class="dp-day is-today">2</div>
      <div class="dp-day is-selected">3</div>
      <div class="dp-day is-disabled">4</div>
      <div class="dp-day is-other-month">31</div>
    </div>
  </div>
  <div class="dp-footer">
    <button class="btn-dp-cancel">Annuleren</button>
    <button class="btn-dp-apply">Toepassen</button>
  </div>
</div>

<!-- Inline kalender (geen border/shadow) -->
<div class="dp dp-inline">...</div>
```
States op `.dp-day`: `.is-today` `.is-selected` `.is-hover` `.is-disabled` `.is-other-month` `.is-empty`
Range states: `.is-range-start` `.is-range-end` `.is-in-range`
Trigger states: `.is-hover` `.is-focus` `.is-open`

**Range — twee kalenders naast elkaar**
```html
<div class="dp-range-wrap">
  <div class="dp-range-calendars">
    <div class="dp">
      <div class="dp-body">
        <div class="dp-header">
          <div class="dp-month-group"><span class="dp-month-label">Mei 2026</span><i data-icon="chevron-down-small" style="display:flex;width:16px;height:16px;color:var(--content-secondary);"></i></div>
          <div class="dp-nav">
            <button class="dp-nav-btn"><i data-icon="chevron-left"></i></button>
            <button class="dp-nav-btn" style="opacity:0;pointer-events:none;"></button>
          </div>
        </div>
        <div class="dp-weekdays">…</div>
        <div class="dp-grid">
          <div class="dp-day is-range-start">14</div>
          <div class="dp-day is-in-range">15</div>
          <div class="dp-day is-range-end">10</div>
        </div>
      </div>
    </div>
    <div class="dp">… tweede maand …</div>
  </div>
  <div class="dp-range-footer">
    <button class="btn-dp-cancel">Annuleren</button>
    <button class="btn-dp-apply">Toepassen</button>
  </div>
</div>
```
De linker kalender toont alleen de vorige-pijl, de rechter alleen de volgende-pijl. Houd de ongebruikte
`.dp-nav-btn` leeg met `opacity:0;pointer-events:none;` zodat de header niet verspringt.
De footer zit één niveau hoger dan bij een enkele kalender: `.dp-range-footer` onder beide kalenders,
niet `.dp-footer` binnen één `.dp`.

**Tijd en tijdzone** — `.dp-time-section` is een kind van `.dp`, tussen `.dp-body` en `.dp-footer`.
```html
<div class="dp">
  <div class="dp-body">…</div>

  <div class="dp-time-section">
    <!-- tijdzone (optioneel) -->
    <div class="dp-tz-wrap">
      <div class="dp-time-field dp-tz-field">
        <i data-icon="globe"></i>
        <span class="dp-time-value">Europe/Amsterdam</span>
        <i data-icon="chevron-down" class="dp-time-chevron dp-tz-chevron"></i>
      </div>
      <div class="dp-tz-dropdown" hidden>
        <div class="dp-tz-option is-active">Europe/Amsterdam</div>
        <div class="dp-tz-option">Europe/London</div>
      </div>
    </div>

    <!-- tijd -->
    <div class="dp-time-field">
      <i data-icon="Clock"></i>
      <input type="text" class="dp-time-input" value="09:00">
      <div class="dp-steppers">
        <button class="dp-stepper-btn"><i data-icon="chevron-up" style="display:flex;width:12px;height:12px;"></i></button>
        <button class="dp-stepper-btn"><i data-icon="chevron-down" style="display:flex;width:12px;height:12px;"></i></button>
      </div>
    </div>
  </div>

  <div class="dp-footer">…</div>
</div>
```
Een tijdkiezer hoort bij een popup-kalender, niet bij `.dp-inline`. De footer is dan verplicht: de tijd
wordt pas toegepast op "Toepassen". `.dp-tz-dropdown` is `hidden` tot je op `.dp-tz-field` klikt, de
actieve regel krijgt `.is-active`.

**Jaar- en maandkiezer** — openen via `.dp-month-group` in de header.
```html
<!-- jaren: 16 per scherm -->
<div class="dp-year-panel">
  <div class="dp-year-grid">
    <div class="dp-year-cell">2025</div>
    <div class="dp-year-cell is-selected">2026</div>
  </div>
</div>

<!-- maanden: 12 -->
<div class="dp-month-panel">
  <div class="dp-month-grid">
    <div class="dp-month-cell">Jan</div>
    <div class="dp-month-cell is-selected">Mei</div>
  </div>
</div>
```
`.dp-month-group` stelt zijn chevron niet op maat in (anders dan `.dp-nav-btn i` en `.dp-time-chevron`), dus geef die `<i>` altijd zelf `width:16px;height:16px;display:flex` mee. Zonder die maat vult het icoon de halve kalender.

Beide panelen staan vóór `.dp-weekdays` in de `.dp-body` en zijn `display:none` in dagweergave. Staat er
een open, zet dan `.dp-year-open` op de `.dp-body` — dat draait de chevron in de header om. `.dp-month-label`
toont dan het bereik (`2016 – 2031`) of het jaar in plaats van "Mei 2026". Leg de hoogte van `.dp-body`
vast op de hoogte van de dagweergave, anders springt de popup bij het wisselen.

### Inline notification
Moods heten in code (Angular `messageType`): **`subtle` · `info` · `warn` · `success` · `error`**. De prototype-classes volgen deze namen: `is-subtle` `is-info` `is-warn` `is-success` `is-error`. Layout: standaard gestapeld; voeg `.is-one-liner` toe voor één regel.

```html
<!-- Stacked (default — title boven message) -->
<div class="inline-notif is-info">
  <img class="inline-notif-icon" src="/assets/icons/notification-information.svg" alt="" />
  <div class="inline-notif-content">
    <span class="inline-notif-text">
      <span class="inline-notif-title">Heads up!</span>
      <span class="inline-notif-msg">This alert needs your attention</span>
    </span>
  </div>
  <button class="inline-notif-close" aria-label="Dismiss"><i data-icon="cross"></i></button>
</div>

<!-- One-liner (titel + message lopen door als één tekst, knop blijft rechts) -->
<div class="inline-notif is-warn is-one-liner">
  <img class="inline-notif-icon" src="/assets/icons/notification-warning.svg" alt="" />
  <div class="inline-notif-content">
    <span class="inline-notif-text">
      <span class="inline-notif-title">Warning!</span>
      <span class="inline-notif-msg">Better check yourself, you're not looking too good</span>
    </span>
    <div class="inline-notif-actions">
      <button class="btn btn-secondary">Renew now</button>
    </div>
  </div>
  <button class="inline-notif-close" aria-label="Dismiss"><i data-icon="cross"></i></button>
</div>

<!-- Subtle met actieknop -->
<div class="inline-notif is-subtle">
  <span class="inline-notif-icon is-subtle"><i data-icon="featured"></i></span>
  <div class="inline-notif-content">
    <span class="inline-notif-text">
      <span class="inline-notif-title">New feature!</span>
      <span class="inline-notif-msg">We released a new feature you might want to use</span>
    </span>
    <div class="inline-notif-actions">
      <button class="btn btn-secondary">Try it</button>
    </div>
  </div>
  <button class="inline-notif-close" aria-label="Dismiss"><i data-icon="cross"></i></button>
</div>
```

**Structuur:** titel + message zitten samen in `<span class="inline-notif-text">`, en `.inline-notif-actions` is een **sibling** daarvan binnen `.inline-notif-content`. Layout volgt vanzelf:
- **Stacked (default):** text-blok boven, actieknop(pen) eronder.
- **One-liner (`.is-one-liner`):** titel + message lopen door als één doorlopende tekst (wrapt samen naar de volgende regel); de actieknoppen blijven **rechts** op de regel.

**Icoon-keuze per mood:**
- `.is-info` → `<img src="/assets/icons/notification-information.svg">` (blauwe cirkel met "i")
- `.is-warn` → `<img src="/assets/icons/notification-warning.svg">` (oranje cirkel met "!")
- `.is-success` → `<img src="/assets/icons/notification-positive.svg">` (groene cirkel met "✓")
- `.is-error` → `<img src="/assets/icons/notification-negative.svg">` (rode cirkel met "!")
- `.is-subtle` → `<span class="inline-notif-icon is-subtle"><i data-icon="featured"></i></span>` (oranje sparkle op witte card)

Belangrijk: voor de vier gekleurde moods **altijd `<img>` gebruiken** — niet `<i data-icon="…">`. De cirkel zit in de SVG zelf en `icons.js` zou de kleuren wegnormaliseren tot één `currentColor`.

**Acties — volg de live styleguide. Per mood zetten we accent-variabelen op `.inline-notif` (`--notif-accent`, `--notif-accent-border`, `--notif-accent-on`); de knoppen lezen die.**
- **Sentiment action button** — `btn btn-secondary` (wit + mood-rand) of `btn btn-primary` (gevuld in mood-kleur), max 3, via Angular `[buttonMessages]`. Staat **onder** de tekst (stacked) of **rechts** (one-liner). Voor `is-subtle` is de secondary-rand neutraal grijs (`--border-action`), de primary blijft brand-teal.
- **Link button** — `[inlineButtonText]` + `(inlineButtonCallback)`. Staat in de **actie-rij** naast de knoppen. Voert een **actie** uit (navigeert niet), gestyled als link maar **zónder underline**. In prototypes: `<button class="link-inline" style="text-decoration:none;">` binnen `.inline-notif-actions`.
- **Link** — `[linkText]` + `[linkHref]`. Staat ook in de **actie-rij**. Een echte `<a>` die **navigeert**, **mét underline**. In prototypes: `<a class="link-inline">` binnen `.inline-notif-actions`.

In de actie-rij mag dus een link óf een link button naast de actieknoppen komen.
Regel (algemeen): inline links en links zien er hetzelfde uit (underline); een link button heeft géén underline omdat het een actie is.
Sluitknop-states: `.is-hover` `.is-focus`.
Toegankelijkheid: `role="alert"` voor Warn/Error; `role="status"` voor de rest. Close-button altijd met `aria-label`.

> ⚠️ **Dev/Figma gaps (nog te harmoniseren):**
> 1. **Mood-namen:** Figma `Feature / Warning / Positive / Negative` vs code `subtle / warn / success / error`.
> 2. **Primary sentiment button:** Figma heeft een gevulde, mood-gekleurde primary actieknop; de Angular styleguide heeft die nog niet (alleen de `secondary` sentiment-knop via `buttonMessages`).
> 3. **Inline-button plaatsing:** Figma groepeert de inline button bij de andere actieknoppen; de styleguide rendert `inlineButtonText` inline in de boodschap-tekst.
> 4. **One-liner tekst-flow:** in dit design lopen titel en message als één doorlopende regel tekst (wrappen samen); de Angular styleguide doet dit nog niet. Nog gelijk te trekken.
>
> **Echte Angular component:** `<eff-inline-notification [messageTitle] [message] [messageType] [isOneLiner] [showCloseButton] [inlineButtonText] [buttonMessages] [linkText] [linkHref] …>`. De prototype-HTML hierboven is de visuele weergave; in productie-Angular gebruik je de component met inputs.

### System Notification
Donkere, systeem-brede melding (uitkomst van een achtergrond-proces of systeem-event). Niet voor element-specifieke feedback — gebruik daarvoor de Inline notification.
```html
<div class="sysnotif" role="status">
  <div class="sysnotif-title">Export ready</div>
  <div class="sysnotif-desc">Your report finished exporting.</div>   <!-- optioneel -->
  <button class="link-inline sysnotif-action">Download</button>       <!-- optioneel -->
  <button class="sysnotif-close" aria-label="Dismiss"><i data-icon="cross"></i></button>
</div>
```
- Sentiment via modifier op `.sysnotif`: default = Success (accent `--border-positive-base`), `is-error` (`--border-negative-base`), `is-warning` (`--border-warning-base`).
- Donkere surface `--bg-inverse-base`; titel `--content-inverse-base`; desc `--content-inverse-secondary`; shadow `--sh-popovers`; radius `--radius-md`; 8px accent-balk links.
- De action is een **Link Button** (`.link-inline`) met een kleur-override naar de sentiment (`--border-positive/negative/warning-base`): `<button class="link-inline sysnotif-action">…</button>`. ⚠️ Figma/dev gap: Figma tekent de action wit/secondary — nog gelijk te trekken.
- a11y: `role="status"` (Success) / `role="alert"` (Error/Warning); `aria-label` op de close-knop.
- Onderdelen: `.sysnotif-title`, `.sysnotif-desc`, `.sysnotif-action`, `.sysnotif-close`.
- **Plaatsing:** altijd rechtsboven in het scherm, gestapeld. Mount ze in `.sysnotif-stack` (fixed, `inset:0`, `align-items:flex-end`, 8px padding, `pointer-events:none`; de notificaties zelf weer `pointer-events:auto`).
- **Animatie:** enter = slide-up + fade-in (`translateY(16px)→0`, opacity 0→1) in ~200ms `ease-in-out`. `prefers-reduced-motion` zet 'm uit (ingebouwd).
```html
<div class="sysnotif-stack">
  <div class="sysnotif" role="status"> … </div>
</div>
```
> **Figma/dev gap:** de echte Angular-component/service is nog te bevestigen op `styleguide.effectory.com`. De HTML hierboven is de visuele design-system-weergave.

### Tooltip
Kleine, niet-interactieve donkere bubble die op hover/focus verschijnt. Alleen korte tekst. In Angular: de Material `matTooltip` directive + `matTooltipPosition`.

```html
<!-- Prototype-weergave: bubble + pijl, positie boven/onder/links/rechts -->
<div class="tt-demo">
  <span class="ib"><i data-icon="trash"></i></span>
  <div class="tooltip is-above">Delete survey</div>
</div>
```
Positie-classes: `.is-above` `.is-below` `.is-left` `.is-right`. Bubble = `--bg-inverse-base` (#192743), witte tekst, Poppins Medium 14, `--radius-md`. Tekst wrapt op max-width ~240px. Gebruik nooit voor essentiële info of interactieve content → dan een Spotlight of dialog.

> ⚠️ **Clipping vermijden — render de tooltip in een fixed overlay-laag.** Een tooltip die binnen een scrollende of `overflow:hidden`-container leeft, wordt afgekapt zodra hij buiten die container valt (een `.is-above`-tooltip op een icon button bovenin een kaart schiet boven de scroll-viewport uit). Pure CSS lost dit niet op. **Markeer tooltips met de gewenste standaardrichting** (meestal `.is-above`) en laat een klein **auto-positioneer-scriptje** het werk doen: bij hover/focus meet het de trigger, kiest de eerste richting die in de viewport past (standaardzijde eerst, dan `above > below > right > left`), en zet de bubble met `position:fixed` op berekende coördinaten — geclampt binnen de viewport. Zo kan **geen enkele voorouder** (kaart, scroll-container, `overflow:hidden`) hem ooit nog clippen. Het hangt gedelegeerd op `document` (overleeft de in-place re-renders van `#root`) en herberekent bij elke hover/focus. De referentie-prototypes hebben dit blok al ingebouwd (zoek op `Tooltip auto-position`); neem het mee bij elk dashboard/scroll-scherm. Pijl volgt de gekozen `.is-*`-class via `.tooltip.is-*::after`. **Zet dus géén `overflow:hidden` op kaarten "voor de zekerheid"** — niet nodig, en het werkt het clippen juist in de hand.

> ⚠️ **Dev/Figma gap:** Figma gebruikt **Medium (500)** voor de tooltip-tekst; de Material `matTooltip` rendert **Normal (400)**. Nog gelijk te trekken.

### Loading (spinner)
Geanimeerde spinner voor een onbepaalde wachttijd. Voor content die in een bekende layout laadt → Skeleton; voor meetbare voortgang → Progress Bar.
```html
<!-- Block loader: spinner + optioneel label -->
<div class="block-loader"><span class="spinner" role="status" aria-label="Loading"></span> Loading</div>

<!-- Inline loader (in tekst/knop) -->
<span class="loader-inline"></span>
```
- Block-spinner `.spinner` (24px) + sizes `.spinner-sm` (16px) / `.spinner-lg` (32px): track `--border-base`, arc `--content-base`, `border-radius: var(--radius-full)`, rotatie `.8s` linear.
- `.loader-inline` (16px): border `--content-base` met `border-top-color: transparent` (geen track), `.8s` ease.
- Echte Angular-API: block = `<eff-loader />`; inline = `<div class="loader-inline">`; (loading bar = `<eff-loading-bar>` → zie Progress Bar). Styleguide: Loaders.
- a11y: `role="status"` + `aria-label="Loading"` als er geen zichtbaar label is; haal de loader uit de DOM zodra klaar.

### Skeleton
Placeholder-vormen die de content-layout nabootsen tijdens het laden (met shimmer). Gebruik bij een bekende layout (lijsten, cards, tabellen); korte/onbekende wachttijd → Loading spinner; meetbare voortgang → Progress Bar.
```html
<div aria-busy="true" aria-label="Loading">
  <div class="skeleton skeleton-circle" style="width:40px;height:40px"></div>
  <div class="skeleton skeleton-text" style="width:80%"></div>
  <div class="skeleton skeleton-text" style="width:60%"></div>
</div>
```
- Basis `.skeleton` (pulse tussen `--border-base` en `--bg-base-pressed`, ~1s ease-in, respecteert `prefers-reduced-motion`) + shape: `.skeleton-text` (12px), `.skeleton-title` (20px), `.skeleton-circle` (`--radius-full`), `.skeleton-block` (`--radius-md`). Zet breedte/hoogte inline, passend bij de echte content.
- In een `mat-table` vult de styleguide elke cel met een pulserende `.loading-bar` (zelfde pulse, ~12px hoog, 8px radius).
- a11y: shapes `aria-hidden="true"`; regio `aria-busy="true"` + zichtbaar/verborgen "Loading"-status; zelfde maat als de content (geen layout-shift).
> ⚠️ Figma/dev gap: de styleguide gebruikt een pulserende `.loading-bar` voor table-loading, maar heeft geen algemene skeleton-component voor willekeurige layouts. Bovenstaande `.skeleton`-classes zijn het design-system-pattern — stem een gedeelde `.loading-bar` / `eff-skeleton` af met engineering.

### Spotlight
Interactieve coach-mark/onboarding-overlay (Angular: `<eff-tooltip-dialog>`). Donkere card met optionele NEW-badge, titel, body, en footer met óf één primary knop (single-step) óf paginatie-dots + "Next" (multi-step).

```html
<!-- Single-step -->
<div class="spotlight is-above">
  <div class="sl-badge"><i data-icon="featured"></i> New</div>
  <p class="sl-title">Choose your settings later</p>
  <p class="sl-body">Confirm your project settings before you create a survey.</p>
  <div class="sl-footer is-single"><button class="btn btn-primary">Got it!</button></div>
</div>

<!-- Multi-step -->
<div class="spotlight is-above">
  <p class="sl-title">Pick a template</p>
  <p class="sl-body">Start from a ready-made survey, then tweak the questions.</p>
  <div class="sl-footer is-multi">
    <div class="sl-dots"><span class="sl-dot is-active"></span><span class="sl-dot"></span><span class="sl-dot"></span></div>
    <button class="btn btn-primary">Next</button>
  </div>
</div>
```
Classes: `.spotlight` (+ `.is-above/.is-below/.is-left/.is-right`), `.sl-badge` (optioneel, oranje), `.sl-title` (16/SemiBold), `.sl-body` (14), `.sl-footer` (`.is-single` = volle-breedte knop · `.is-multi` = dots links + knop rechts), `.sl-dot.is-active`. Card = `--bg-inverse-base`, knop = `--bg-brand-base` (teal). Behandel als een dialog: focus erin, Escape sluit, focus terug.

> 🧩 **Eén component, twee patronen:** `eff-tooltip-dialog` dekt twee design-system-componenten af. **Spotlight** = de verankerde coach-mark/**tour**-modus (target + 1-of-meer stappen, `.tour-progression`). **Announcement** = dezelfde component in `with-svg`-modus (zwevende feature-card met illustratie). Zelfde inputs (`[targetElement]`, `[dialogTitle]`, `[dialogSubtitle]`, `[dialogButtonText]`, `[dialogLinkButtonText]`, `[dialogPositionToTarget]`, `[addHighlightToTargetElement]`, `[isNewFeature]`, `[svgUrl]`, `(dialogClosedOutput)`), andere configuratie.

### Announcement
Compacte, zwevende, non-blocking feature-aankondiging. De pagina eronder blijft bruikbaar; de gebruiker dismisst hem zelf (geen auto-dismiss). Lichte 300px-card met een **full-bleed** illustratie bovenaan (raakt boven + zijkanten, geclipt op de ronde hoeken), titel, body, en twee **verticaal gestapelde full-width acties**: primary CTA "Learn more" boven, "Close" (tertiary/ghost) eronder. Onderscheid: Toast = vluchtig/statusfeedback, Spotlight = verankerde coach-mark/tour, Announcement = aankondiging met illustratie.

**In code is dit dezelfde Angular-component als Spotlight:** `<eff-tooltip-dialog>` in de `with-svg`-configuratie (styleguide → Tooltips → "display tooltip with-svg").

Prototype-markup (`components.css`):
```html
<div class="announcement">
  <div class="ann-media"><!-- full-bleed illustratie ([svgUrl]); placeholder als leeg --></div>
  <div class="ann-body">
    <p class="ann-title">Dynamic reporting is here!</p>
    <p class="ann-text">A new look, new features, and even more to explore.</p>
    <div class="ann-actions">
      <button class="btn btn-primary">Learn more</button>
      <button class="btn btn-tertiary">Close</button>
    </div>
  </div>
</div>
```
Classes: `.announcement` (300px, `--bg-base`, `--border-base`, `--sh-dialogs`, `--radius-lg`, `overflow:hidden`), `.ann-media` (optioneel, **full-bleed** 168px; `<img>` vult 'm anders een gekleurde placeholder (#6c5ce7, wit icoon)), `.ann-body` (20px padding), `.ann-title` (16/SemiBold), `.ann-text` (14), `.ann-actions` (verticale stack full-width: `.btn-primary` CTA bovenaan + `.btn-tertiary` "Close" eronder — primary eerst in DOM).

**Gestapeld = card deck:** meerdere teams kunnen op dezelfde pagina iets promoten; je queuet ze als een **stapel** met echte kaarten erachter die net uitsteken. Markup: `.ann-deck` met de achterste kaarten (`.ann-b2`, `.ann-b1`) en de voorste (`.ann-front`). "Close" onthult de volgende: de voorste valt naar beneden (`.ann-front.is-leaving`) en de kaarten erachter promoten één stap (`.ann-b1.is-promoting`, `.ann-b2.is-promoting`). Het queuen/volgorde-bepalen is app-orkestratie (render één kaart tegelijk, index ophogen). De deck-visual + animatie zit niet in het styleguide-voorbeeld — met engineering te bevestigen.

Echte Angular-API (`eff-tooltip-dialog`, `class="with-svg"`): `[svgUrl]` (illustratie), `[dialogTitle]`, `[dialogSubtitle]`, `[dialogButtonText]` (primary CTA, optioneel), `[dialogLinkButtonText]` (link/dismiss), `[targetElement]`, `[dialogPositionToTarget]` ('after'/'before'/'above'/'below'), `[dialogWidth]`, `[addOutlineToTargetElement]`, `[addHighlightToTargetElement]`, `(dialogClosedOutput)`. Gerenderd: `.tour-container` > `img.illustration` + `p.text-l5.text-w600` + `p.text-w400.text-subdued` + `.tour-footer` (`button.link` + `button.primary`). A11y: non-modal — geen focus stelen, `aria-live="polite"`, altijd dismissible.

### Main Navigation
De primaire app-sidebar (240px, links). Bevat een portal-switcher bovenaan, navigatie-items in het midden, en het account-menu onderaan. Eén per scherm.

```html
<div class="mainnav">                          <!-- + .is-personal voor het Personal-portal (geel accent) -->
  <div class="mn-portal"><span class="mn-logo"></span><button class="mn-portal-btn"><b>Coordinator</b> <i data-icon="chevron-down" class="mn-chev"></i></button></div>
  <nav class="mn-nav" aria-label="Main">
    <a class="mn-item is-active"><i data-icon="home"></i> Home</a>
    <a class="mn-item"><i data-icon="clipboard"></i> Surveys <i data-icon="chevron-down" class="mn-chev"></i></a>
    <div class="mn-sub"><a class="mn-subitem is-active">All surveys</a><a class="mn-subitem">Projects</a></div>
    <a class="mn-item"><i data-icon="globe"></i> Organization <i data-icon="chevron-down" class="mn-chev"></i></a>
  </nav>
  <div class="mn-foot">
    <a class="mn-item"><i data-icon="help"></i> Help &amp; learn</a>
    <div class="mn-foot-divider"></div>
    <div class="mn-user"><div class="av av-36 av-blue">JR</div><div class="mn-meta"><div class="mn-name">Jamal…</div><div class="mn-org">Effectory B.V.</div></div><i data-icon="chevron-down"></i></div>
  </div>
</div>
```
Classes: `.mainnav` (+ `.is-personal`), `.mn-portal` (container) met statisch `.mn-logo` + klikbare `.mn-portal-btn` (alleen het label/chevron heeft een hover-achtergrond, het logo niet), `.mn-nav`/`.mn-item` (states `.is-hover`/`.is-active`, optionele `.mn-chev`), uitklapbare groep `.mn-sub`/`.mn-subitem` (+ `.mn-sub-divider`), footer `.mn-foot`/`.mn-user` (states `.is-hover`/`.is-pressed`). De portal-switcher én de account-knop openen elk een **Dropdown Menu** (de gedeelde `.menu`-component — zie sectie *Dropdown menu*); de portal-dropdown heeft een `.menu-header` ("Switch my role") en mini-logo's, de account-dropdown groepeert account-acties met een `.menu-divider` boven Log out. De actieve item gebruikt `--bg-brand-subtle-selected` (highlight) + `--content-brand-base` (icoon). Het portal-logo (`.mn-logo`) is het Effectory-merklogo als `background-image` (teal voor Coordinator), dat naar het gele logo wisselt bij `.mainnav.is-personal`. Het Personal-portal (`html[data-portal="personal"]`, of `.mainnav.is-personal` in een prototype) remapt die brand-tokens naar geel. Het account-menu gebruikt de gedocumenteerde **Avatar** (`.av av-36`), niet een eigen avatar-class. Menu-item-iconen zijn 16px met `--content-action`; alle radii komen uit `--radius-*` tokens. A11y: `<nav aria-label="Main">`, `aria-current="page"` op de actieve item, `aria-expanded` op groep-headers.

> ⚠️ **Dev gap:** de Angular-selector/inputs van de app-sidebar zijn nog niet bevestigd in de styleguide. Deze `.mainnav`-classes zijn de prototype-structuur; verifieer de productie-API met engineering.

### Card
Surface die gerelateerde content groepeert. Drie varianten (Material/Atlassian-stijl): **Elevated** (shadow), **Outlined** (border), **Filled** (getinte fill).
```html
<div class="card card-outlined">
  <div class="card-body">
    <span class="card-title">Titel</span>
    <span class="card-text">Ondersteunende tekst.</span>
  </div>
  <div class="card-actions"><button class="btn btn-secondary">Actie</button></div>   <!-- optioneel; .has-divider voor topborder -->
</div>
```
- `.card` (basis: `--bg-base`, `--radius-md`, overflow hidden) + variant: `.card-elevated` (border `--border-base` + `--sh-card`), `.card-outlined` (alleen `--border-base`), `.card-filled` (`--bg-secondary`).
- Klikbare hele kaart: `.card.is-interactive` (op een `<a>`/`<button>`), lift op hover (`--sh-card-hover`).
- Inhoud is **volledig dynamisch**: `.card-body` is het content-slot, `.card-title` (`text-l5`) + `.card-text` (`body-14`) zijn slechts voorbeeld-helpers — vul het met wat de kaart nodig heeft (tekst, metric, chart, lijst). `.card-actions` is optioneel.
- Density: `.card-body`/`.card-actions` hebben standaard **24px** padding; `.card.is-sm` → 16px, `.card.is-compact` → 12px.
> ⚠️ Figma/dev gap: de Angular-styleguide heeft **één** `.card` (border + `--sh-card`, radius 8) met `.card-title-container` (onderlijn) + `.card-content-container` (24px), titel `h2.card-title.text-l5`; géén elevated/outlined/filled-splitsing. De drie varianten hierboven zijn een **voorstel** (Material/Atlassian) — nog te verzoenen met styleguide/Figma.

### Tag (Eff Tag)
Compact label; de **kleur draagt de betekenis** (status, categorie, marker). **Eén** component — de styleguide (`Eff Tag`) kent géén aparte "badge". Je kiest een semantische *background* en een *radius* (medium = compacte marker/"badge"-look, full = pill).
```html
<span class="tag tag-positive">Completed</span>
<span class="tag tag-info tag-full"><i data-icon="tag"></i> Engagement</span>
```
- `.tag` (basis = `--bg-info-base` + wit, `--radius-base`, 12px/600) + background-variant: `.tag-info` (blauw, default), `.tag-brand` (teal), `.tag-warning` (oranje), `.tag-negative` (rood), `.tag-highlight` (geel, tekst `--content-base`), `.tag-positive` (groen). Radius: standaard medium; `.tag-full` maakt een pill.
- Optioneel leading `<i data-icon>` (12px, erft de tekstkleur). Bold fills = witte tekst, behalve highlight (ink). A11y: betekenis staat altijd in de **tekst**, nooit alleen in de kleur; een tag is niet focusbaar (geen knop/link).
- Styleguide-API: `<eff-tag [background]="'info|brand|warning|negative|highlight|positive'" [radius]="'medium|full'" [textSize] [weight]>`. Er is dus geen `Badge`.
- **Survey/report-status** heeft een eigen hogere component **Survey Status** (`[surveyEndDate]`, `[isSurveyResponseComplete]`, `[surveyStatusFailed]`, `[showTooltip]`…) die zelf de juiste pill+tekst rendert (incl. draft/planned/running/completed). Bouw survey-status in productie dus níét na met een losse Tag. Prototype-pills als `gl-tag`, `mb-gpill`, `tr-conf-badge` zijn losse Tags → normaliseer naar `.tag`.
> ⚠️ Figma/dev gap: `Eff Tag` heeft geen grijze/donkere background — de all-surveys "draft" (grijs) en "planned" (donker) pills zijn prototype-lokaal (`.tag.is-draft`/`.is-planned`) en horen in productie bij Survey Status.

### List
Verticale stapel rijen met hairline-dividers. Elke rij = een leading content-blok (titel + optionele sub-regel) + optionele trailing meta/tag/actie. Het patroon achter survey-, project- en instellingenlijsten.
```html
<div class="list">
  <a class="list-item is-interactive" href="…">
    <div class="list-item-content">
      <div class="list-item-title">Engagement 2025</div>
      <div class="list-item-sub"><i data-icon="folder"></i> <span>Central Employee Listening</span></div>
    </div>
    <span class="tag tag-positive">Completed</span>   <!-- optionele trailing status (Tag) -->
    <i data-icon="chevron-right"></i>                            <!-- affordance bij interactive -->
  </a>
</div>
```
- `.list` (kolom-container) → `.list-item` (rij: min-height 64px, 16px/24px padding, onder-divider `--border-base`; laatste rij geen divider). `.list-item-content` (flex:1, truncate) met `.list-item-title` (`text-l5`) + optionele `.list-item-sub` (12px, `--content-secondary`; optioneel 12px leading `<i data-icon>`).
- Klikbare rij: `.list-item.is-interactive` (op een `<a>`/`<button>`) → hover-fill `--bg-secondary` + pointer; gangbaar met een trailing `<i data-icon="chevron-right">`.
- Trailing content staat na `.list-item-content`; meerdere nodes kunnen in `.list-item-trailing` (flex, 24px gap). **Actie-knoppen + kebab** → `.list-item-actions` (strak 8px-cluster). Let op: een rij met eigen knoppen is een **statische** `.list-item`, niet `.is-interactive` (je kunt geen knoppen in een klikbare `<a>`-rij nesten — maak dan de titel de link). Lege staat: `.list-empty` (gecentreerde melding) i.p.v. een lege lijst.
- Status per rij komt uit de **Tag**-component (in productie: **Survey Status**). Tabellarische data met meerdere uitgelijnde kolommen → Table, geen List. Zie het `all-surveys` reference-prototype voor een lijst met filters, sortering en response-rate.

### Avatar
Ronde avatar met initialen of een icoon. Gebruik altijd deze gedocumenteerde component — bouw nooit een eigen avatar-class.

```html
<div class="av av-32 av-blue">JR</div>                 <!-- initialen -->
<div class="av av-40 av-turquoise"><i data-icon="user"></i></div>  <!-- icoon -->
```
Maten: `.av-40` / `.av-36` / `.av-32` / `.av-24` / `.av-20` (font schaalt mee; av-24=11px, av-20=10px zijn bewust off-scale voor initialen). Kleuren: `.av-blue`, `.av-turquoise`, `.av-green`, `.av-orange`, `.av-red`, `.av-yellow`, `.av-grey` — elk een `--bg-accent-*-subtle` vlak met `--content-accent-*-base` tekst. Radius is altijd `--radius-full`. Gebruikt o.a. in de Main Navigation (`.av av-36` in `.mn-user`).

### Dialog
Een modale kaart die over een scrim verschijnt: titel, optionele subtitle, content-slot en een footer met acties. Eén primaire actie + een uitweg (Cancel/close).

```html
<div class="dialog dialog-s" role="dialog" aria-modal="true" aria-labelledby="dlg-title">
  <button class="dialog-close" aria-label="Close"><i data-icon="cross"></i></button>
  <div class="dialog-media"><i data-icon="image"></i></div>   <!-- optioneel: visual header -->
  <div class="dialog-header">
    <div class="dialog-header-top"><i class="dialog-header-icon" data-icon="info"></i><h3 class="dialog-title" id="dlg-title">Discard changes?</h3></div> <!-- optioneel icoon; anders alleen de <h3> -->
    <p class="dialog-subtitle">You have unsaved edits to this report.</p>
  </div>
  <div class="dialog-body">…custom content…</div>             <!-- optioneel content-slot -->
  <div class="dialog-footer">
    <a class="dialog-footer-link" href="#">Outgoing link <i data-icon="external-link"></i></a> <!-- optioneel -->
    <button class="btn btn-secondary">Keep editing</button>
    <button class="btn btn-primary">Discard</button>
  </div>
</div>
```
Maten (breedte): default `.dialog` = 440 (XS), `.dialog-s` = 600, `.dialog-m` = 800, `.dialog-l` = 1080. **Header-formaat:** twee maten — Large (titel 26px, `text-l3`, default) en Small (titel 18px, `body-18-SB`) via `.dialog-header.is-sm`. Onafhankelijk van de breedte; combineer met elke maat. **Optioneel icoon:** wikkel de titel in `.dialog-header-top` met een `.dialog-header-icon` ervoor — 24px bij een Large header, 20px bij Small. Icoon en kleur zijn vrij; gangbaar: info (default, `--content-info-secondary`), warning (`.is-warning`) en error (`.is-error`). `.dialog-media` is een full-bleed band bovenaan (illustratie/afbeelding) voor de *visual header*-variant. Footer-knoppen zijn de Button-component (`.btn` + `.btn-primary`/`.btn-secondary`); de optionele `.dialog-footer-link` staat links. Tokens: `--bg-base`/`--border-base`, `--sh-dialogs`, `--radius-xl` (16), `--content-base`/`--content-secondary`, `--content-action` (close), `--bg-brand-subtle` (media). A11y: `role="dialog"` + `aria-modal="true"`, `aria-labelledby` naar de titel, focus-trap + focus terug op de trigger bij sluiten, Escape sluit.

> ⚠️ **Dev gap:** de Angular-selector/inputs van de dialog (en de overlay/scrim-wiring) zijn nog niet bevestigd in de styleguide. Deze `.dialog`-classes zijn de prototype-structuur; verifieer de productie-API met engineering.

### Side panel
Een paneel dat rechts invliegt over een scrim: details, een formulier of een gerichte taak naast de huidige pagina. Maten: Default (800px) en Small (400px, `.sidepanel-sm`). Raakt de rechter-/boven-/onderrand van het scherm; `--radius-xl` (16px) alleen linksboven en linksonder, 0 rechts.

```html
<div class="sidepanel" role="dialog" aria-modal="true">       <!-- + .sidepanel-sm voor smal -->
  <div class="sp-header">
    <div class="sp-toolbar">
      <div class="sp-nav"><i data-icon="arrow-up"></i><i data-icon="arrow-down"></i></div>  <!-- optioneel: advanced menu -->
      <div class="sp-actions"><i data-icon="bookmark"></i><i data-icon="message"></i><i data-icon="clock"></i><i data-icon="more-vertical"></i><span class="sp-sep"></span><i data-icon="cross"></i></div>
    </div>
    <div class="sp-heading"><h3 class="sp-title">Title</h3><p class="sp-subtitle">Subtitle</p></div>  <!-- + .is-sm voor 18px titel -->
    <div class="sp-tabs"><a class="sp-tab is-active"><i data-icon="box"></i> Item</a><a class="sp-tab"><i data-icon="box"></i> Item</a></div>  <!-- optioneel -->
  </div>
  <div class="sp-body">…content…</div>
  <div class="sp-footer"><button class="btn btn-secondary">Cancel</button><button class="btn btn-primary">Confirm</button></div>  <!-- optioneel -->
</div>
```
Classes: `.sidepanel` (+ `.sidepanel-sm`), `.sp-header` met `.sp-toolbar` (`.sp-actions` rechts: standaard alléén de close-knop; het **advanced-menu** voegt links de `.sp-nav`-pijlen toe én rechts bookmark/comment/history + de kebab (⋮) met een `.sp-sep` vóór close), `.sp-heading` (+ `.is-sm` voor de kleine 18px-header) → `.sp-title`/`.sp-subtitle`; de kleine header gebruikt 24px padding overal (via `.sidepanel.is-sm-header`) i.p.v. 40px, en zet de acties op de titel-regel via `.sp-header.is-compact` (behalve bij advanced-menu). Optionele `.sp-tabs`/`.sp-tab` (`.is-active` = teal underline), `.sp-body` (scrollt), optionele `.sp-footer` (Button-component). Tokens: `--bg-base`, `--sh-dialogs`, `--border-base` (tabs/footer), `--content-base`/`--content-secondary`/`--content-action`, `--content-brand-base` (actieve tab). A11y: modal, `aria-labelledby` op de titel, focus-trap, Escape sluit, icon-only knoppen krijgen `aria-label`.

> **Productie-API:** in code is dit de **`SidepanelService`** (`@effectory/branding-angular`): `sidepanelService.open(Component, data)`, `.close(data)`, `.afterClosed`. De paneel-component gebruikt `.title.text-l3`, `.subtitle`, `.icon-button.close-button` en `.actions-container` (met `.primary`/`.secondary`). De `.sidepanel`/`.sp-*`-classes hier zijn de prototype-structuur voor de visuele opbouw.

### Tabs
Wissel tussen secties van dezelfde view (altijd horizontaal); label optioneel met een icoon.

```html
<div class="tabs">
  <a class="tab is-active"><i data-icon="home"></i> Overview</a>
  <a class="tab">Open answers</a>
  <a class="tab">Reports</a>
</div>
```
Classes: `.tabs`, `.tab` (states `.is-hover`/`.is-active`/`.is-disabled`; optioneel een leading `<i data-icon>` en/of een `.tab-count`-badge vóór of na het label — blauwe pill `--bg-info-base`, witte 12px-tekst). Actieve tab: `--content-base` tekst + een 4px afgeronde bar `--content-brand-secondary` (via `.tab::after`); inactief `--content-secondary`; disabled `--content-disabled`; track `--border-base`. Typografie `body-14-M`. A11y: `role="tablist"`/`tab`/`tabpanel`, `aria-selected`, pijltjestoetsen + roving `tabindex`.

> **Productie-API:** in code is dit Angular Material `mat-tab-group` met `class="tabs"` (`mat-align-tabs="start"`, `disableRipple`) en `mat-tab`-children (`label`, of een `<ng-template mat-tab-label>` met `eff-mat-icon class="tab-icon"`). De `.tabs`/`.tab`-classes hier zijn de prototype-structuur.

---

### Accordion
Stapel van inklapbare secties (header + content) voor progressive disclosure. **Let op:** Figma noemt dit "Accordion" én "Expansion panel", maar in code is het één component (`mat-expansion-panel`); de "expansion panel" is een accordion met een rijkere header (counts/tags, pop-out).
```html
<div class="acc">
  <div class="acc-item is-open">
    <button class="acc-header">
      <i data-icon="box" class="acc-icon"></i>           <!-- optioneel leading icon -->
      <span class="acc-title">Accordion header</span>
      <span class="acc-meta">4 questions</span>          <!-- optioneel trailing meta (expansion-panel stijl) -->
      <i data-icon="chevron-down" class="acc-chevron"></i>
    </button>
    <div class="acc-body"><div class="acc-body-inner">Content van het paneel.</div></div>
  </div>
</div>
```
- Panel `.acc-item` (witte `--bg-base`, 1px `--border-base`, `--radius-md`), 16px tussen panels; header `.acc-header` (16px 24px, hover `--bg-base-hover`); titel `.acc-title` = `text-l5` (16px/600); body `.acc-body` (0 24px 16px, `--content-secondary`); chevron `.acc-chevron` roteert 180° bij `.is-open`. De border verandert niet bij open. Open/dicht animeert smooth via `grid-template-rows 0fr→1fr` op `.acc-body` (content in `.acc-body-inner`, ~0.26s; respecteert `prefers-reduced-motion`).
- Open zetten: `.acc-item.is-open`. Single-open gedrag = groepslogica (in Angular: `mat-accordion`).
- Varianten: leading icon (`.acc-icon`), **beschrijving** (titel + `.acc-desc` onder elkaar in `.acc-titles`), trailing meta (`.acc-meta`), **selectie** (checkbox `<span class="cb-wrap"><input class="cb">` in de header + `.acc-item.is-selected` → brand-border), en **borderless/hidden header** (`.acc-item.is-borderless` → geen border/zijpadding, alleen titel + chevron).
- Echte Angular-API: `mat-expansion-panel` (+ `mat-expansion-panel-header`, `ng-template matExpansionPanelContent`), groepeer in `mat-accordion`. Styleguide: Accordions.
> ⚠️ Figma/dev gap: Accordion en Expansion panel zijn in code hetzelfde `mat-expansion-panel`.

### Breadcrumb
Toont waar de gebruiker zit in de hiërarchie en laat hem omhoog stappen. Een **Back**-actie leidt de balk, gevolgd door het pad van pagina's.

```html
<nav class="breadcrumb" aria-label="Breadcrumb">
  <button class="btn btn-secondary"><i data-icon="arrow-left"></i> Back</button>
  <ol class="bc-trail">
    <li><a class="bc-link" href="/projects">Projects</a></li>
    <li><a class="bc-link" href="/projects/pulse">Company pulse</a></li>
    <li><span class="bc-current" aria-current="page">Reporting structures</span></li>
  </ol>
</nav>
```
Classes: `.breadcrumb` (witte balk, `--bg-base` + onderrand `--border-base`, 64px hoog, **6px** gap tussen items), `.bc-trail` (de `<ol>`; scheidingsteken `/` via `li:not(:first-child)::before`), `.bc-link` (crumb-link, `--content-secondary`, hover `--bg-base-hover`/`--content-base`, radius `--radius-sm`), `.bc-current` (huidige pagina, `--content-base`, géén link, met `aria-current="page"`), `.btn.btn-secondary` voor **Back** (met `<i data-icon="arrow-left">`). A11y: `nav[aria-label]`, geordende lijst, `aria-current` op de huidige pagina, scheidingstekens zijn decoratief.

> **Productie-API:** controleer in de Angular-styleguide of er een dedicated breadcrumb-component/selector bestaat (bijv. `eff-breadcrumb`) vóór je het met de hand bouwt; de classes hier zijn de prototype-structuur. **Figma-gap:** de crumb (Link Button) heeft in Figma meer horizontale side-padding dan in de styleguide/code — stem de `.bc-link`-padding af.

### Page Header
Het titelblok bovenaan een view: benoemt waar de gebruiker is, geeft context, en bevat de primaire acties van de pagina. Eén per view; de titel is de `h1`. Voor een kop *binnen* een pagina → Section Header.

```html
<div class="ph">
  <div class="ph-eyebrow">Project name</div>            <!-- optioneel: parent-context, brand-kleur -->
  <div class="ph-row">                                   <!-- centreert acties op titel+subtitle; eyebrow staat er bewust buiten -->
    <div class="ph-left">
      <h1 class="ph-title">Employees</h1>
      <div class="ph-meta">                              <!-- optioneel, flexibel slot -->
        <span class="ph-range">21 Feb 2019 <i data-icon="from-to"></i> 21 Feb 2019</span>
      </div>
    </div>
    <div class="ph-controls"><button class="btn btn-primary"><i data-icon="plus"></i> New survey</button></div>  <!-- optioneel -->
  </div>
  <div class="ph-tabs"><a class="ph-tab is-active">Overview</a><a class="ph-tab">Reports</a></div>  <!-- optioneel; zet dan ph-row padding-bottom:0 -->
  <div class="ph-divider"></div>
</div>
```
Classes: `.ph`, `.ph-eyebrow` (optionele overline, 12px uppercase, `--content-brand-base`), `.ph-row` (`align-items:center` → acties centreren op **titel+subtitle**; daarom staat de eyebrow búiten de row), `.ph-title` (26px `text-l3`, de page-`h1`). Het flexibele **subtitle-slot** `.ph-meta` met o.a.: platte tekst, `.ph-range` (datumrange met het `from-to`-icoon ertussen), `.ph-status` (`.ph-status-dot` + label + `.muted`), `.ph-link` (inline link-button, `--content-brand-secondary`). Voor een group/filter-selector in het slot: de bestaande **Selection Button** (`.sel-btn`). `.ph-controls` (rechter-acties: Button / Icon Button / Search). Optionele `.ph-tabs`/`.ph-tab` (**Tabs**-component; actief = 4px underline). `.ph-divider` (1px `--border-base`) sluit de header; in de app loopt die **full-bleed** tot de schermranden terwijl de content de container-padding houdt. Typografie: titel `text-l3`, subtitle `body-14`.

> ⚠️ **Dev gap:** Angular-API nog te bevestigen; `.ph-*` is de prototype-structuur (titel/eyebrow/subtitle/acties/tabs componeren).

### Section Header
Een kop die een blok content *binnen* een pagina introduceert: titel + optionele beschrijving + optionele sectie-acties + optionele divider. Kleiner dan de Page Header. In de praktijk meestal **alleen een titel**.

```html
<div class="sh">
  <div class="sh-row">
    <div class="sh-left">
      <h2 class="sh-title">Team members</h2>
      <p class="sh-desc">Manage your team members and their account permissions here.</p>  <!-- optioneel -->
    </div>
    <div class="sh-actions"><button class="btn btn-secondary">Secondary</button><button class="btn btn-primary">Button</button></div>  <!-- optioneel: button / kebab / search -->
  </div>
  <div class="sh-divider"></div>  <!-- optioneel -->
</div>
```
Classes: `.sh`, `.sh-row` (titel-blok links + `.sh-actions` rechts), `.sh-title` (18px `text-l4`, een echte `h2`/`h3` onder de page-`h1`), `.sh-desc` (optioneel, `--content-secondary`), `.sh-actions` (sectie-scoped: Button, kebab-icon-knop, of Search — niet page-level), `.sh-divider` (optioneel; weglaten als een card of spacing het blok al groepeert). A11y: echt heading-element, geen bold `<div>`; icon-only acties krijgen `aria-label`.

> ⚠️ **Dev gap:** Angular-API nog te bevestigen; `.sh-*` is de prototype-structuur.

### Announcement Dialog
Een gecentreerde, modale **release-tour**: loopt door meerdere features, één scherm tegelijk — een feestelijke intro, een gekleurde feature-stap per release, en een outro. Onderscheid t.o.v. de **Announcement** (card): de Dialog is blokkerend/modaal en meerstaps; de card is compact/non-blocking. 600px breed, 440px media.

```html
<div class="overlay">
  <div class="dlg has-bg" role="dialog" aria-modal="true"
       style="--dlg-tint:var(--bg-info-subtle); --dlg-accent:var(--bg-info-base); --dlg-band:color-mix(in srgb, var(--bg-info-base) 38%, #fff); --dlg-border:var(--border-info-subtle);">
    <button class="ib ib-36 ib-secondary dlg-close" aria-label="Close"><i data-icon="cross"></i></button>
    <div class="dlg-progress"><span class="dlg-seg is-fill"></span><span class="dlg-seg"></span><span class="dlg-seg"></span></div>
    <div class="dlg-media has-img">
      <svg class="dlg-wave" viewBox="0 0 600 440" preserveAspectRatio="none"><rect class="band" width="600" height="440"/><path class="crest" d="M0,348 C150,316 330,392 600,338 L600,440 L0,440 Z"/></svg>
      <img src="/assets/illustrations/tasks.png" alt="">
    </div>
    <div class="dlg-body">
      <span class="dlg-tag"><i data-icon="lock"></i> Available on Plan 2 and higher</span>   <!-- of <div class="dlg-tag-spacer"></div> als er geen tag is -->
      <p class="dlg-title">Export to PowerPoint in seconds</p>
      <p class="dlg-text">Turn your results into a polished, on-brand deck — no more copy-pasting charts.</p>
      <div class="dlg-footer">
        <button class="ib ib-36 ib-secondary" aria-label="Previous"><i data-icon="arrow-left"></i></button>
        <button class="btn btn-primary">Next feature <i data-icon="arrow-right"></i></button>
      </div>
    </div>
  </div>
</div>
```
Classes: `.dlg` (tint/rand/accent uit inline `--dlg-tint`/`--dlg-border`/`--dlg-accent`/`--dlg-band`), `.dlg-media` (440px; `.has-img` = full-bleed illustratie + verbergt de accent-glow; `.dlg-media-ph` = placeholder-icoon). Achtergrond: `.dlg-wave` (SVG `.band` + `.crest`; `.flat` = rechte rand, band = body-tint) en `.dlg-fade` (illustratie vervaagt naar body-tint, voor de outro). Story-progress: `.dlg-progress` + `.dlg-seg` (gevuld = `.is-fill`, `--content-subtle`). Body: `.dlg-body`, `.dlg-tag` (premium-chip; `.dlg-tag-spacer` reserveert dezelfde ruimte zonder tag → slides even hoog), `.dlg-title` (26px), `.dlg-text` (14px, `min-height:112px`), `.dlg-footer` (Previous als **Icon Button** + full-width primary; outro: secundaire "See all updates"-link + primary "Done" die sluit). Feestelijke intro: `.dlg-burst` (glow) + `.dlg-hero` (witte badge met gift-icoon) + `.confetti` + `.dlg-spark-deco` (sparkle-iconen) — exploderen bij openen, zweven daarna. Toon in een `.overlay` (sectie *Animaties*).

> ⚠️ **Dev gap / app-orkestratie:** de per-stap kleur (inline `--dlg-*` vars), de confetti-posities en de progress-vulling zijn **app-logica** (JS) — net als de Announcement-deck. Referentie-implementatie: `prototypes/announcement-playground.html`. Angular-API nog te bevestigen.

---

## 5. Iconen

Patroon: `<i data-icon="naam" style="display:flex;width:16px;height:16px;"></i>`
Kleur via `color: currentColor` op de `<i>` of een ancestor.
Iconen worden geïnjecteerd door `icons.js` (moet onderaan `<body>` staan).

**Beschikbare iconen** (uit `assets/icons/`):

`accessibility` `activity` `add-on` `aggregations` `alert-circle` `alert-triangle` `alert-triangle-1` `all changes` `approximately` `archive` `archive-1` `arrow-down` `arrow-left` `arrow-right` `arrow-sub` `arrow-up` `asterisk` `at-mail` `barchart-2` `bell` `benchmark-down` `benchmark-up` `bold` `book-open` `bookmark` `bookmark-filled` `box` `briefcase` `building` `bullet-point` `calendar` `calendar-add` `calendar-recurring` `calendar-remove` `category` `check` `check-square` `chevron-down` `chevron-down-small` `chevron-end` `chevron-left` `chevron-right` `chevron-start` `chevron-up` `clipboard` `clipboard-a` `clipboard-note` `clipboard-settings` `code` `collapse-left` `collapse-right` `compass` `cookie` `copy` `correlation-positive` `cpu` `cross` `desktop` `double-chevron-down` `double-chevron-up` `down-vote` `download` `download-2` `drag-drop` `edit` `edit-inline` `equal` `excel` `expand-left` `expand-right` `export` `external-link` `eye` `eye-off` `featured` `file` `file-error` `file-plus` `filter` `find-replace` `flag` `folder` `from-to` `gear` `gender-male` `gender-male-1` `gender-non-binary` `gift` `globe` `goals` `group` `help` `hierarchy` `home` `import-export` `info` `italic` `key` `language` `layer-up-alt` `layout` `lightbulb` `link` `list-unordered` `lock` `log-out` `love` `mail` `maximize` `menu` `message` `message-filled` `minimize` `minus` `mobile` `moon` `more-horizontal` `more-vertical` `net-promoter-score` `net-promoter-score-detractor` `net-promoter-score-passive` `palette` `passkey` `pause` `pen-tool` `percent` `pie-chart` `pin` `pin-filled` `pipet` `play` `plus` `plus-minus` `point-scale` `privacy` `randomize` `refresh` `response` `rotate-backward` `rotate-forward` `search` `segments` `select` `selected` `send` `shapes` `share` `share-1` `shield` `single-answer` `single-answer-1` `sliders` `sort-ascending` `sort-descending` `star` `star-filled` `stop` `structure` `sun` `table` `tag` `target` `text-entry` `themes` `toggle-left` `toggle-right` `tool` `top-3-filled` `trash` `trend-stable` `underline` `undo` `unlock` `up-vote` `upload` `upload-file` `user` `user-badge` `user-check` `user-min` `user-plus` `users` `version-history` `waypoint` `win` `words` `youtube` `zap` `zap-filled`

`Clock` werkt wél als `data-icon`, met hoofdletter C — de bestandsnaam is `Clock.svg`. De Date Picker gebruikt hem in het tijdveld.

**Niet als `data-icon` te gebruiken** (bestandsnamen met spaties of hoofdletters zijn illustraties, geen UI-iconen):
`Barchart-1` `ESG scan` `ESG scan-1` `ESG scan-2` `Strategic fitness scan` `Tree` `Trend-down` `Trend-up` `Type` `magic wand`
