# Skill: Effectory Design System

Activeer deze skill wanneer iemand vraagt een **prototype**, **mockup**, **design**, **scherm**, **pagina** of **losse component-demo** te bouwen met onze design-system-componenten.

Laad voor elke bouwsessie eerst:
```
Read(".claude/skills/effectory-design-system/design-system-reference.md")
```

---

## Referentie-prototypes (bekende schermen)

In `reference-prototypes/` staan volledig uitgewerkte schermen met een vaste, goedgekeurde vorm. Herken ze op **intentie, niet op exacte woorden** — in welke taal of bewoording dan ook. Gaat een verzoek (ook impliciet) over zo'n scherm, dan is het **niet vrij in te vullen**: lees de referentie en neem die exact over.

1. Lees `reference-prototypes/<naam>.md` (layout, states, gedrag, regels).
2. Kopieer `reference-prototypes/<naam>.html` naar `prototypes/` en pas alleen aan wat de gebruiker vraagt. Verzin geen afwijkende layout of states.

**Beschikbare schermen**

- **My Effectory homepage (Coordinator)** → `reference-prototypes/homepage.md` + `homepage.html`
  De landings-/activiteiten-pagina die een coordinator bij inloggen ziet: app-shell (`.mainnav`) met een gecentreerde wide-kolom — welkomstheader ("Welcome {naam}!" + "Let's understand your people"), tabs (Activity/Resources/Getting ready/Webinars), een **Latest activities**-kaart (activiteitrijen met gekleurde icoontegels + actieknop), een **Updates**-kaart (illustratie-thumbnails + gekleurde labels) en **Helpful articles** (2-koloms interactieve kaarten met illustratie links). Voor "de My Effectory homepage", "coordinator home", "het homescherm" of "de startpagina" — in welke taal of bewoording dan ook.

- **Surveys / All surveys pagina (Coordinator)** → `reference-prototypes/all-surveys.md` + `all-surveys.html`
  De Surveys-landingspagina van My Effectory: app-shell met Surveys uitgeklapt (sub-items All surveys + Projects), een page header met "Create survey", een **Latest projects**-carousel (3 kaarten passen exact in 1200px, rest via pijltjes) en een **All surveys**-lijstkaart met werkende filters — inline zoekbalk, "Show only my surveys", **Sort by** (single-select menu) en **Status** (multi-select menu met gekleurde status-pills), plus survey-rijen met status-pill, response-rate en kebab. Voor "de surveys-pagina", "all surveys", "survey-overzicht" of "het surveys-scherm" — in welke taal of bewoording dan ook.

- **Surveys / Projects pagina (Coordinator)** → `reference-prototypes/projects.md` + `projects.html`
  De Projects-landingspagina van My Effectory: app-shell met Surveys uitgeklapt (Projects actief), page header "Projects", een toolbar met zoekbalk + **Sort by**-menu (single-select), een **3-koloms grid** van project-kaarten (titel + "N surveys") met een werkende **View all projects** in-/uitklap (cap op 6), en een **promo-carousel** "Get more out of your employee listening efforts" — **4 kaarten per view**, side-pijlen (verborgen als disabled), grijze kaarten met `--border-base` die op hover hun accent-kleur tonen; illustraties in `assets/illustrations/projects/`. Voor "de projects-pagina", "project-overzicht" of "het projecten-scherm" — in welke taal of bewoording dan ook.

- **Reports pagina** → `reference-prototypes/reports.md` + `reports.html`
  Het scherm waar je survey-rapporten downloadt (essential + raw-data reports, taalkeuze, generate/download), onderdeel van het results-/result-dashboard. Bedoelt iemand de reports- of rapporten-pagina, "download reports", of het rapporten-overzicht in het results-dashboard — in NL of EN, hoe dan ook geformuleerd — dan is dit het scherm.

- **Resultaten-dashboard — Overview** → `reference-prototypes/effectiveness-overview.md` + `effectiveness-overview.html`
  De overzichtspagina van het resultaten-dashboard: app-shell met een kaarten-grid (Effectiveness-matrix, Engagement, eNPS, Themes, Response rate, Workload/Retention/Well-being, Feel-good topics, Highest/Lowest scores) en een AI-samenvatting. Groep-switch (Team IT ↔ Novanta), periode-switch (Q2 ↔ Q3), EN/NL/DE-taalwissel, blur-overgang. Voor "resultaten-/results-dashboard", "overzichtspagina van de resultaten" of "engagement-dashboard".

- **Resultaten-dashboard — Focus View** → `reference-prototypes/effectiveness-focus.md` + `effectiveness-focus.html`
  Dezelfde app op het Focus View-tabblad: verdict + matrix ("At first glance"), "What needs focus" (laagste scores met aanbevolen acties) en "Celebrate your wins" (hoogste scores). Voor "focus view", "focus areas" of "aandachtsgebieden".

- **Effectiveness matrix side panel** → `reference-prototypes/effectiveness-panel.md` + `effectiveness-panel.html`
  Het rechter side panel van de Effectiveness-kaart: verdict, vergelijkings-matrix met markers, suggested focus, areas to focus, legenda.

- **Engagement side panel** → `reference-prototypes/engagement-panel.md` + `engagement-panel.html`
  Het rechter side panel van de Engagement-kaart: uitleg, verdeling betrokken medewerkers, vergelijkingskaarten + score-over-time, thema- en correlerende vragen.

- **eNPS side panel** → `reference-prototypes/enps-panel.md` + `enps-panel.html`
  Het rechter side panel van de eNPS-kaart: de score-berekening (Passive | Promoter − Detractor = eNPS), een diverging vergelijkings-bargrafiek (groep/previous/benchmark/top 3), de 1–10 aanbevelingsschaal met legenda, en de score-breakdown (promoters/passives/detractors). Voor "eNPS side panel", "eNPS-paneel" of "employee net promoter score panel".

- **Resultaten-dashboard — kaart-bibliotheek** → `reference-prototypes/dashboard-cards.md` + `dashboard-cards.html`
  Alle losse dashboard-kaarten in een grid (zonder chrome), om één kaart te hergebruiken of te kiezen welke kaarten een dashboard moet tonen.

- **Resultaten-dashboard — Themes** → `reference-prototypes/themes.md` + `themes.html`
  Het Themes-tabblad in het resultaten-dashboard: een theme-comparison kaart (Current/Previous/Benchmark bargroepen met **"Select filter"** icon button) en een grid met thema-kaarten (titel, pin, beschrijving, org-score, "View insights"). Voor "themes pagina", "thema's pagina", "themes view" of "thema-vergelijking" — in welke taal of bewoording dan ook.
- **Resultaten-dashboard — Scores** → `reference-prototypes/scores.md` + `scores.html`
  Het Scores-tabblad: een full-width tabel met alle vragen gegroepeerd per thema, met een bevroren vraagkolom (Asana-stijl scheidingslijn) + horizontaal scrollende, heatmap-gekleurde vergelijkingskolommen, een Comparisons-popover (Quick comparisons chips + Segments/Age-crossing met kolommen), een zwevende legenda, en een vraag-side-panel (5-punts antwoorddistributie met "X% agree"-bracket, score-vergelijkingskaarten, score-over-time grafiek, thema-vragen). Voor "scores pagina", "scores view", "scores prototype" of "vragen & scores tabel" — in welke taal of bewoording dan ook.
- **Resultaten-dashboard — Action Planner** → `reference-prototypes/action-planner.md` + `action-planner.html`
  Het Actions-tabblad: de **Action Planner** / pinboard — een tabel met vastgepinde onderwerpen (Topic, Score, Goal-chip Improve/Promote/Contemplate, Action progress), Search, Export (PDF/Excel), Custom pin, en per rij een Actions-side-panel met doel, beschrijving en een afvinkbare to-do-lijst (deadline + toegewezene). Goal wordt gedeeld per onderwerp (pin ↔ planner ↔ side panel). Voor "action planner", "actieplanner", "actions tab", "acties-pagina" of "pinboard" — in welke taal of bewoording dan ook.

**Bij een verzoek om het resultaten-dashboard (algemeen — niet één specifiek tabblad): vraag in twee stappen. Bouw nooit zomaar alles; soms is maar een deel nodig.**

1. **Welke tabbladen** moeten gebouwd worden? Beschikbare referenties: **Overview**, **Focus View**, **Themes**, **Scores**, **Reports**, **Actions** (Action Planner). (Open answers en Topics & Ideas hebben nog geen referentie — meld dat als ze gevraagd worden.) Bouw alleen de gekozen tabs.
2. **Per gekozen tabblad** de relevante deelkeuzes uitvragen (weer: niet automatisch alles):
   - **Overview** → welke **kaarten** (standaard alle) en welke **side panels**. Elk side panel opent vanuit zijn kaart, dus bied een panel alléén aan als die kaart op het dashboard staat: **Effectiveness-kaart → Effectiveness panel**, **Engagement-kaart → Engagement panel**, **eNPS-kaart → eNPS panel**.
   - **Focus View** → of de **Effectiveness / eNPS side panels** ook nodig zijn.
   - **Themes / Scores / Reports / Actions** → uit hun eigen referentie (Themes en Scores hebben een vraag/thema-side-panel ingebouwd; Actions is de Action Planner met Actions-side-panel).

Bouw daarna elk gekozen tabblad met de bijbehorende referentie hierboven, met werkende tab-navigatie ertussen.

Vraagt iemand expliciet om één specifiek tabblad (bijv. "scores pagina", "reports pagina"), bouw dan direct dat scherm — sla de tab-uitvraag over. Twijfel je of een verzoek een van deze schermen bedoelt? Ga uit van ja en gebruik de referentie. Staat het gevraagde scherm er niet bij, bouw dan normaal volgens de reference.

---

## Scope

| Bouwen | Niet bouwen |
|---|---|
| Schone productschermen | Documentatie-pagina's |
| Losse component-demo's | Navigatie- of docs-layout |
| Realistische workflows | Iets dat niet in de reference staat |

---

## Component-keuze (let op gelijkende namen)

- **Page Header** (`.ph`) = titelblok bovenaan een hele view (de page-`h1`). **Section Header** (`.sh`) = kop van een blok *binnen* een pagina.
- **Announcement** (`.announcement`) = compacte, non-blocking card. **Announcement Dialog** (`.dlg`) = modale, meerstaps release-tour. **Dialog** (`.dialog`) = generieke modale kaart.

Kies bewust de juiste; verzin geen mengvorm. Markup staat in `design-system-reference.md` sectie 4.

---

## Regels — altijd van toepassing

### 1. Alleen bestaande namen
Gebruik **uitsluitend** classes, tokens, varianten en iconnamen uit `design-system-reference.md`.
Verzin geen nieuwe class, token, icoon of variant — ook niet als workaround.

Als iets ontbreekt: **stop en meld het expliciet** vóór je verder bouwt.
> Voorbeeld: "De component `Badge` bestaat niet in `components.css`. Wil je dat ik een ticket aanmaak, of bouw je de Badge-stijl zelf?"

**Het design system is de source of truth.** `components.css`, `tokens.css` en `design-system-reference.md` zijn leidend voor styling — radius, font-size, spacing, states en structuur. Figma en screenshots zijn **referenties, geen autoriteit**. Pak altijd eerst het bestaande component/patroon uit het design system en neem de exacte styling daarvan over (gebruik de echte DS-classes, bijv. `.menu` / `.menu-item` voor een single-select, `.dialog` / `.dialog-subtitle` voor een confirm-dialog). Wijkt Figma af van het design system, volg dan het design system en **meld** dat Figma niet helemaal consistent is.

### 2. HTML-boilerplate
Gebruik de boilerplate uit `design-system-reference.md` sectie 1, met deze links in volgorde:
1. `tokens.css`
2. `foundation.css`
3. `components.css`
4. `icons.js` (onderaan `<body>`)

**Nooit meenemen:**
- `nav.html`, `nav.js`
- `styles.css`
- Classes: `.shell` `.topnav` `.sidebar` `.content-wrap` `.page-header` `.page-tabs` `.tab-panel` `.states-row` `.state-col` `.dd-grid` `.dd-card` `.dd-prev` `.variant-rows` `.variant-row` `.token-table` `.pg-card` `.pg-preview` `.dev-preview` `.dev-code-wrap` `.toc-col` `.section` `.pagination` `.anatomy-fig` `.anatomy-items`

### 3. Tokens, geen hardcoded waarden
Gebruik altijd design tokens of foundation-variabelen voor kleuren, spacing en shadows.
Nooit: `color: #0a9d99`, `padding: 16px`, `box-shadow: 0 2px 4px ...`
Altijd: `color: var(--content-brand-base)`, `padding: var(--spacing-base)`, `box-shadow: var(--sh-card)`

### 3b. Let op contrast bij tekstkleuren
Kies tekstkleuren op **leesbaarheid/contrast**, niet alleen op hiërarchie.
- `--content-subtle` (50% opacity) is **alleen** voor niet-essentiële, decoratieve micro-tekst die bewust op de achtergrond mag vallen (bijv. een uitgegrijsde hint). Het haalt op een witte achtergrond **geen** WCAG AA-contrast voor normale tekst.
- Voor **echte, leesbare content** — timestamps, meta-regels, sub-labels, omschrijvingen, helper text — gebruik **`--content-secondary`** (80% opacity). Dat is de default voor secundaire tekst.
- Gebruik `--content-base` voor primaire tekst.

Vuistregel: twijfel je tussen `--content-subtle` en `--content-secondary` voor tekst die de gebruiker moet kunnen lezen, kies dan **`--content-secondary`**. Reserveer `--content-subtle` voor puur decoratieve of bewust gedempte accenten.

### 4. UX-copy via de `ux-copy` skill
Alle zichtbare tekst in een prototype (knoppen, labels, helper text, placeholders, errors, empty states, tooltips, dialog-titels, notificaties, microcopy in component-demo's) **moet** via de **`ux-copy`** skill geschreven of gereviewd worden, zodat de tekst in de Effectory tone of voice staat.

Roep `ux-copy` aan zodra je tekst gaat schrijven of wijzigen — niet alleen op expliciet verzoek. Bouw je een prototype, mockup, scherm of component-demo met copy erin, dan hoort `ux-copy` standaard in de flow: schrijf nooit zelf "vrije" UI-tekst.

### 5. Iconen via `data-icon`
```html
<!-- ✅ -->
<i data-icon="search" style="display:flex;width:16px;height:16px;"></i>

<!-- ❌ -->
<svg ...>...</svg>  <!-- alleen voor puur decoratieve geometrie, nooit voor iconen -->
```
Gebruik alleen iconnamen uit de lijst in `design-system-reference.md` sectie 5.

### 6. tokens.css is auto-generated
Nooit `tokens.css` handmatig bewerken. Alleen lezen en gebruiken.
Regenereren: `python3 build-tokens.py`

### 7. Prototype is een productscherm
Een prototype ziet eruit als een echte pagina in de app — niet als een docs-pagina.
- Gebruik `--bg-interface-body` als paginaachtergrond
- Gebruik `--content-base` als standaard tekstkleur
- Geen docs-chrome (sidebar, tabs, TOC, etc.)

### 8. Assets relatief laden — nooit `<base href="/">`
`icons.js` haalt SVG's op naast **zichzelf** (via `document.currentScript`), dus relatieve paden werken
gewoon. Gebruik ze:

```html
<link rel="stylesheet" href="tokens.css" />
<link rel="stylesheet" href="foundation.css" />
<link rel="stylesheet" href="components.css" />
...
<script src="icons.js"></script>
```

Staat het prototype in een submap zoals `prototypes/`, zet er dan een base bij die één niveau omhoog wijst:

```html
<base href="../" />
```

**Nooit `<base href="/">`.** Dat werkt alleen zolang je lokaal serveert vanaf de repo-root. Zodra het
prototype op GitHub Pages staat, wijst `/` naar de root van het domein en niet naar de repo, en laadt
geen enkele stylesheet of icoon meer. Dat is precies wat er op 17-08-2026 met vijftien prototypes gebeurde:
de pagina's bleven werken op de lokale server en waren live compleet ongestyled.

Wil je het prototype los van deze bestanden publiceren, verwijs dan naar het design system zelf:

```html
<link rel="stylesheet" href="https://effectory-ux.github.io/Engage-Design-system-/components.css" />
<script src="https://effectory-ux.github.io/Engage-Design-system-/icons.js"></script>
```

Open prototypes altijd via `python3 serve.py` → `http://localhost:<poort>/...`, nooit via dubbelklik
(`file://`) — CSS-masks voor het Toggle-vinkje werken dan niet.

### 9. Animaties via motion-tokens en `.overlay`
Verzin geen eigen duraties of easings — gebruik de motion-tokens (`--motion-fast/base/slow`, `--ease-out/in/standard`; zie reference sectie 2 → Motion).
Toon een dialog of side panel altijd in een `.overlay`, dan komt de juiste enter-animatie automatisch mee:
```html
<div class="overlay"><div class="dialog dialog-s"> … </div></div>        <!-- scale 0.8→1, backdrop fade -->
<div class="overlay is-right"><div class="sidepanel"> … </div></div>     <!-- slide van rechts -->
```
De backdrop gebruikt `--bg-interface-overlay`. `prefers-reduced-motion` is al afgevangen.

**Sluiten met animatie — nooit direct uit de DOM halen.** De enter-animatie zit automatisch op `.overlay`; bij sluiten moet je de exit-animatie eerst láten spelen, anders knalt het paneel in één frame weg. Zet `.is-closing` op de `.overlay` (dialog schaalt terug 1→0.8 + fade, side panel slidet weer naar rechts, backdrop fade-out) en verwijder de node pas op `animationend`:
```js
function closeOverlay(overlay){
  overlay.classList.add('is-closing');
  const surface = overlay.querySelector('.sidepanel, .dialog');
  const done = () => overlay.remove();          // of: overlay.hidden = true
  if (surface) surface.addEventListener('animationend', done, { once: true });
  else done();                                   // reduced-motion: geen animatie → meteen weg
}
```
Luister op de `.sidepanel`/`.dialog` (niet op de backdrop) zodat de langste beweging (`--motion-slow`) is afgerond. Bij `prefers-reduced-motion` is er geen animatie, dus vang die af of laat de `done()`-fallback het paneel meteen sluiten.

### 10. Icon buttons hebben ALTIJD een tooltip
Een icoon-only knop (`.ib` / icon button) is zonder label niet te begrijpen. Geef elke icon button **altijd** een tooltip die het doel benoemt, plus een `aria-label` met dezelfde tekst.
```html
<!-- ✅ tooltip via de .tt-demo wrapper + .tooltip bubble; aria-label = dezelfde tekst -->
<div class="tt-demo">
  <button class="ib ib-secondary" aria-label="Edit"><i data-icon="edit"></i></button>
  <div class="tooltip is-above">Edit</div>
</div>

<!-- ❌ nooit een naakte icon button zonder label/tooltip -->
<button class="ib"><i data-icon="edit"></i></button>
```
Geldt voor elke icon-only knop (toolbar-acties, close-knoppen die alleen een icoon tonen, kebab-menu's, enz.). Knoppen mét zichtbare tekst hebben geen tooltip nodig. In Angular: de `matTooltip`-directive op de knop.

### 11. Paginabreedte & padding — uit de grid-regel, nooit uit de Figma-artboard
Layout-maten komen **altijd** uit de grid/layout-regel in `design-system-reference.md` §2 — **nooit** uit de Figma-frame/artboard (1440/1920px is canvas; reken nooit `artboard − sidebar`).

**Page padding is responsive en geldt voor de héle pagina** (breadcrumb, header, tabs én content gebruiken dezelfde horizontale padding, zodat alles op één lijn begint):

| Breakpoint | Horizontaal | Verticaal | Navigatie |
|---|---|---|---|
| Desktop ≥1200px | **64px** | 48px | sidebar 240px, altijd zichtbaar |
| Tablet 576–1199px | 24px | 32px | hamburger |
| Mobile <576px | 16px | 24px | hamburger |

Token-gebaseerd: 64 = `--spacing-extra-loose × 2`, 48 = `--spacing-loose × 2`, 24 = `--spacing-loose`, 32 = `--spacing-extra-loose`, 16 = `--spacing-base`. Zet ze in responsive CSS-vars en gebruik die overal (`padding: var(--pad-y) var(--pad-x)`).

**Content-breedte (los van de page-padding):**
- **wide 1200px — de default voor app-pagina's, card-grids én dashboards** → een gecentreerde kolom van max. 1200px content, met de page-padding als gutter. Een resultaten-dashboard(-tab) is **wide**, géén full-width.
- **narrow 960px** → lezen, formulieren, focus-flows.
- **full-width (geen cap)** → alléén data-zware tabellen / complexe UI's die de volle breedte echt nodig hebben.

> ⚠️ Onder de globale `* { box-sizing: border-box }`-reset (boilerplate §1) telt een max-width-cap de padding mee. Voor 1200px content **mét** page-padding: `max-width: calc(1200px + 2 * var(--page-x)); margin-inline: auto;`. Zet **nooit** `max-width: 1200px` op een wrapper die zelf horizontale padding heeft — dan wordt de content `1200 − 2×padding` (bijv. 1152 of 1072) en oogt er te veel ruimte aan de zijkanten. (Dit ging eerder mis.)

---

### 12. Vraag in welke track het prototype hoort
Bouw je een nieuw prototype, vraag dan **voordat je begint** bij welke track het hoort. Product & Tech
werkt in drie tracks, en de projects-pagina is daarop ingedeeld:

| Track | Waar het over gaat |
|---|---|
| **Surveying** | een survey opzetten, uitzetten en koppelen |
| **Leadership enablement** | van resultaat naar gesprek en actie |
| **Reporting** | resultaten teruggeven en duiden |
| **Platform** | alles wat geen track raakt: homepage, instellingen, integraties |

Het gaat om het onderwerp, niet om wie het maakt: group linking is van Jente maar hoort bij Surveying.

Weet de gebruiker het niet, doe dan een voorstel op basis van het scherm en laat het bevestigen. Noteer
het antwoord in de oplevering, zodat het prototype met de juiste `group` in
[`prototypes.json`](https://github.com/effectory-ux/prototypes) van de projects-pagina kan.

---

### 13. Vraag hoe het prototype moet heten
Vraag **voordat je begint** hoe het prototype heet. Die naam legt drie dingen tegelijk vast: de
**bestandsnaam**, de **`<title>`** van elke pagina, en de **`name`** van de kaart op de projects-pagina. Achteraf
hernoemen kost een nieuwe URL, en gedeelde links breken daarop.

- **Bestandsnaam:** de naam in kebab-case → `prototypes/<naam>.html`. Bestaat het prototype uit meerdere
  schermen, dan komt het scherm erachter (regel 14).
- **Kaartnaam:** de naam zoals de gebruiker hem uitspreekt, op de kaart op de projects-pagina (regel 15).

Weet de gebruiker het nog niet, doe dan een voorstel op basis van het scherm en laat het bevestigen.
Benoem het onderwerp, niet de plek waar het toevallig begon: "CSM result settings" zegt meer dan
"results overview".

---

### 14. Meerdere pagina's = meerdere bestanden, elk met een eigen URL
Bestaat een prototype uit meer dan één scherm, dan is **elk scherm een apart HTML-bestand** met zijn eigen
URL. Bouw **nooit** één bestand dat met JS de hele view omwisselt (`showPage()`, `hidden` op
page-containers, hash-routing, een `switch` op een `currentPage`-variabele).

Waarom: elk scherm is dan deelbaar als deep link (review, Slack, Figma, de projects-pagina), refresh en
back/forward landen op hetzelfde scherm, en de bestanden blijven leesbaar.

**Naamgeving:** `<prototype>-<scherm>.html`, met het scherm als laatste deel.
```
prototypes/action-center-overview.html
prototypes/action-center-actions.html
prototypes/action-center-settings.html
```

**Navigeren gaat met echte links** — geen `onclick` die de view verwisselt:
```html
<a class="mainnav-item is-active" href="action-center-overview.html">Overview</a>
<a class="mainnav-item" href="action-center-actions.html">Actions</a>
```
Zet in elk bestand het actieve navigatie-item en de actieve tab hard op die pagina.

**Wat blijft wél in dezelfde pagina** (geen apart bestand): tijdelijke UI-state boven of binnen het
scherm — dialogs, side panels, dropdown-menu's, tooltips, popovers, accordions, filter- en zoekstates,
en losse component-demo's.

**Tabs — kijk naar het niveau.**
- **Page-level tabs** staan onder de page header, wisselen de héle hoofdcontent en zijn in het echte
  product een eigen route. Die krijgen elk hun eigen bestand, zoals het resultaten-dashboard:
  `…-overview.html`, `…-focus.html`, `…-themes.html`, `…-scores.html`, `…-reports.html`, `…-actions.html`.
- **Lokale tabs** wisselen alleen de inhoud van één card, sectie, side panel of dialog (bijvoorbeeld een
  segmented control boven een chart). Die blijven in-page — daar hoort ook in het echte product geen
  eigen URL bij.

**Vuistregel:** zou je in het echte product een link naar precies deze staat kunnen sturen? Ja → eigen
bestand. Nee → in-page. Anders gezegd: verandert de page header, de breadcrumb of het actieve
navigatie-item, dan is het een nieuwe pagina.

Houd de app-shell (`.mainnav`, header, page padding) in alle bestanden identiek; wijzig je de shell, pas
hem dan in élk pagina-bestand aan. Meld bij oplevering de URL van iedere pagina, niet alleen die van de
eerste.

---


### 15. Vraag wat de zichtbaarheid moet zijn — en commit niks zonder akkoord
Zodra een prototype gepusht is, staat het live op zijn eigen URL. Daar los van staat of het een **kaart
krijgt op de projects-pagina** ([`effectory-ux/prototypes`](https://github.com/effectory-ux/prototypes)).
Die staat in een **andere repo** en de kaarten zijn met de hand samengesteld, dus vraag na het bouwen wat
het moet worden:

| Zichtbaarheid | Wat het betekent |
|---|---|
| **Public** | krijgt een kaart op de projects-pagina, vindbaar voor het hele team |
| **Hidden** | geen kaart; alleen te openen door wie de URL heeft |

⚠️ **Hidden is geen afscherming.** De pagina staat gewoon op een publieke Pages-site, dus de URL blijft
voor iedereen te openen. Het enige verschil is dat hij niet op de projects-pagina verschijnt. Is iets
écht niet deelbaar, zeg dat dan — een prototype is daar de verkeerde plek voor.

**Bij hidden:** voeg de entry gewoon toe met `"hidden": true`. De kaart wordt dan niet gerenderd, maar
naam, track, eigenaar en omschrijving blijven bewaard en de pagina's blijven geclaimd — dus geen
`ignore`-regex, en de builder klaagt niet over niet-opgeëiste pagina's. Publiceren is later één vlag
weghalen. Meld bij de oplevering dat het prototype alleen via zijn URL te vinden is.

```json
{ "name": "…", "desc": "…", "owner": "…", "group": "…",
  "repo": "engage", "path": "prototypes/….html", "hidden": true }
```

**Bij public:**

1. **Stel de entry voor** die in `prototypes.json` zou komen: `path` = de **entry-pagina**, `also`-regexes
   die de overige schermen claimen (zodat een prototype van meerdere pagina's één kaart blijft met
   "N schermen"), de `name` uit regel 13, de `group` uit regel 12, en een korte, zelf geschreven omschrijving.
2. **Vraag expliciet of je hem mag toevoegen.** Geen akkoord = niet committen in de projects-repo.
3. **Na akkoord:** push eerst het prototype zelf — `build-gallery.py` crawlt de bron-repo live via de
   GitHub API en vindt ongepushte pagina's niet. Voeg dan de entry toe, draai `./build-gallery.py` en
   commit **zowel** `prototypes.json` als de gegenereerde `index.html`. Alleen `prototypes.json`
   committen laat de kaart achter op de oude build.
4. **Check de output van de builder:** die print elke pagina die geen enkele kaart claimt. Staat een van je
   nieuwe schermen in die lijst, dan dekt je `also` niet alles — fix dat vóór de commit.
5. **Let op bestaande `also`-regexes:** een te brede regex van een ánder prototype slokt je pagina op, en
   dan verschijnt hij als naamloze variant onder díe kaart in plaats van als eigen kaart. Controleer na
   het bouwen of je prototype als eigen kaart in `index.html` staat.

**Eén kaart per prototype, niet per pagina.** Regel 14 levert meerdere bestanden op; die horen allemaal bij
dezelfde kaart.

---


## Workflow

1. **Lees de reference** — laad `design-system-reference.md` volledig
2. **Begrijp de vraag** — welk scherm, welke componenten, welke flow?
3. **Vraag de naam** — hoe heet dit prototype? Bepaalt bestandsnaam, `<title>` en de kaart op de projects-pagina (zie regel 13)
4. **Controleer beschikbaarheid** — staan alle benodigde componenten en tokens in de reference?
   - Niet beschikbaar → stop en meld het aan de gebruiker
5. **Bepaal de pagina's** — benoem elk scherm dat het prototype nodig heeft en geef elk scherm zijn eigen bestand + URL (regel 14). Meer dan één scherm? Bouw dan nooit één bestand dat views omwisselt.
6. **Bouw incrementeel** — begin met de HTML-structuur, voeg components toe, stel layout in met tokens
7. **Geen eigen stijlen** — custom CSS alleen voor layout-specifieke zaken (positionering, grid, flex), altijd met tokens voor waarden
8. **Review** — check de output op doc-classes en hardcoded waarden vóór oplevering
9. **Lokale server vereist** — meld na het bouwen altijd de URL van **elke** pagina:
   > ⚠️ Open dit prototype via de lokale server, **niet** via dubbelklik (file://).
   > SVG-maskers (o.a. Toggle-vinkje) en icoonfuncties werken niet zonder HTTP.
   > Start de server met `python3 serve.py` en open daarna:
   > `http://localhost:<poort>/prototypes/<bestandsnaam>.html`
10. **Vraag de zichtbaarheid** — public (kaart op de projects-pagina) of hidden (alleen via de URL)? Zie regel 15

---

## Voorbeeld custom CSS in een prototype (toegestaan)

```css
.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--spacing-loose);
  padding: var(--spacing-extra-loose);
}
.card {
  background: var(--bg-base);
  border: 1px solid var(--border-base);
  border-radius: var(--radius-lg);
  box-shadow: var(--sh-card);
  padding: var(--spacing-loose);
}
```
