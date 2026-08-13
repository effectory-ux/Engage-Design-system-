
/* ============================================================
   Effectiveness group comparison — shared overview renderer
   One template + per-variant DATA. before.html / after.html call
   renderOverview('before' | 'after'). No structural duplication.
   ============================================================ */

/* ---------- per-variant data ---------- */
const DATA = {
  'team-it-before': {
    groupName: 'Team IT',
    surveyName: 'Your voice 2026 Q2',
    dateFrom: '22 Apr 2026', dateTo: '22 May 2026', prevDateTo: '22 Jan 2026',
    /* AI summary */
    aiIntro: { en: "Team IT's results reflect a situation that is recognizable across the acquired business: motivated and capable people working in conditions that are not yet set up to bring out their best.", nl: "De resultaten van Team IT weerspiegelen een situatie die binnen het overgenomen bedrijf breed herkenbaar is: gemotiveerde en bekwame medewerkers die werken onder omstandigheden die nog niet optimaal zijn ingericht om het beste uit hen naar boven te halen.", de: "Die Ergebnisse von Team IT spiegeln eine Situation wider, die im übernommenen Unternehmen weit verbreitet ist: motivierte und kompetente Mitarbeitende arbeiten unter Bedingungen, die noch nicht optimal darauf ausgerichtet sind, ihr volles Potenzial zu entfalten." },
    aiMore: {
      en: [
        "Engagement in Team IT sits at 58%, below the organization average. What stands out most is the gap between how the team feels about their work and how well-equipped they feel to do it. Workload manageability and clarity of direction are the two dimensions pulling the overall score down most significantly.",
        "This is not a team that has given up. The participation rate was 91%. People answered because they wanted to be heard — and because they believe something can change."
      ],
      nl: [
        "De bevlogenheid binnen Team IT bedraagt 58%, onder het organisatiegemiddelde. Het meest opvallend is het verschil tussen hoe medewerkers hun werk ervaren en hoe goed zij zich toegerust voelen om dat werk uit te voeren. Beheersbaarheid van de werkdruk en duidelijkheid over richting zijn de dimensies die de totaalscore het meest negatief beïnvloeden.",
        "Dit is geen team dat heeft opgegeven. Het responspercentage bedraagt 91%. Medewerkers hebben deelgenomen omdat zij gehoord willen worden en geloven dat er iets kan veranderen."
      ],
      de: [
        "Das Engagement in Team IT liegt bei 58 % und damit unter dem Organisationsdurchschnitt. Besonders auffällig ist die Diskrepanz zwischen der Wahrnehmung der Arbeit und dem Gefühl, ausreichend ausgestattet zu sein, um diese erfolgreich auszuführen. Die Beherrschbarkeit der Arbeitsbelastung und die Klarheit der Ausrichtung sind die Dimensionen, die die Gesamtbewertung am stärksten belasten.",
        "Dies ist kein Team, das aufgegeben hat. Die Rücklaufquote liegt bei 91 %. Die Mitarbeitenden haben teilgenommen, weil sie gehört werden möchten und daran glauben, dass Veränderungen möglich sind."
      ]
    },
    aiStrengths: {
      en: [
        "A participation rate of 91% is above the organization average and signals that Team IT wants to engage with this process",
        "The team shows genuine motivation and commitment to the work itself — the issue is conditions, not attitude",
        "Relationships within the team score well, pointing to a strong foundation to build on"
      ],
      nl: [
        "Met een responspercentage van 91% ligt Team IT ruim boven het organisatiegemiddelde, wat laat zien dat het team betrokken wil zijn bij dit proces.",
        "Het team toont oprechte motivatie en betrokkenheid bij het werk; het probleem zit in de omstandigheden, niet in de houding.",
        "De onderlinge samenwerking en relaties binnen het team vormen een sterke basis voor verdere verbetering."
      ],
      de: [
        "Mit einer Rücklaufquote von 91 % liegt Team IT deutlich über dem Organisationsdurchschnitt und zeigt damit seine Bereitschaft, sich aktiv an diesem Prozess zu beteiligen.",
        "Das Team zeigt echte Motivation und Engagement für seine Arbeit; das Problem liegt in den Rahmenbedingungen, nicht in der Einstellung.",
        "Die Zusammenarbeit und die Beziehungen innerhalb des Teams bilden eine starke Grundlage für weitere Verbesserungen."
      ]
    },
    aiGrowth: {
      en: [
        "Direction clarity is the lowest-scoring dimension and the most urgent priority — without it, workload and priorities cannot be effectively managed",
        "Workload (below organization average) is unmanageable for a significant part of the team and is the primary barrier to performance",
        "Manager support, while valued, is experienced as inconsistent — clearer guidance and more regular check-ins would make a material difference",
        "Development opportunities score low, which over time becomes a retention signal"
      ],
      nl: [
        "Duidelijkheid over richting is de laagst scorende dimensie en daarmee de hoogste prioriteit. Zonder duidelijkheid zijn werkdruk en prioriteiten moeilijk te beheersen.",
        "Werkdruk (onder het organisatiegemiddelde) wordt door een aanzienlijk deel van het team als onbeheersbaar ervaren en vormt de belangrijkste belemmering voor prestaties.",
        "Ondersteuning door de leidinggevende wordt gewaardeerd maar als inconsistent ervaren; duidelijkere begeleiding en regelmatige check-ins zouden veel verschil maken.",
        "Ontwikkelmogelijkheden scoren laag en vormen op termijn een risico voor behoud van medewerkers."
      ],
      de: [
        "Die Klarheit über die Ausrichtung ist die am niedrigsten bewertete Dimension und damit die höchste Priorität. Ohne Klarheit lassen sich Arbeitsbelastung und Prioritäten nur schwer steuern.",
        "Die Arbeitsbelastung (unter dem Organisationsdurchschnitt) wird von einem erheblichen Teil des Teams als nicht beherrschbar wahrgenommen und stellt die größte Hürde für Leistung dar.",
        "Die Unterstützung durch die Führungskraft wird geschätzt, jedoch als uneinheitlich erlebt; klarere Orientierung und regelmäßige Check-ins würden einen spürbaren Unterschied machen.",
        "Entwicklungsmöglichkeiten werden niedrig bewertet und stellen langfristig ein Risiko für die Mitarbeiterbindung dar."
      ]
    },
    aiActions: {
      en: [
        "Hold a structured team conversation about direction: what does the team understand, what is still unclear, and what do they need to move forward with confidence",
        "Escalate the workload issue formally — this is a structural problem that sits above the team level and requires a resourcing conversation with leadership",
        "Identify one or two concrete changes that would make the biggest difference to the team's day-to-day experience and commit to them before the next cycle",
        "Create a regular moment for the team to raise priorities and blockers — predictability of communication is as important as the content"
      ],
      nl: [
        "Organiseer een gestructureerd teamgesprek over richting: wat begrijpt het team, wat is nog onduidelijk en wat is nodig om met vertrouwen verder te gaan?",
        "Escaleer het werkdrukvraagstuk formeel; dit betreft een structureel probleem dat boven teamniveau ligt en om een gesprek met het leiderschap vraagt.",
        "Bepaal één of twee concrete verbeteringen die de grootste impact hebben op de dagelijkse werkervaring en committeer hieraan vóór de volgende meting.",
        "Creëer een vast moment waarop het team prioriteiten en knelpunten kan bespreken; voorspelbare communicatie is net zo belangrijk als de inhoud zelf."
      ],
      de: [
        "Ein strukturiertes Teamgespräch über die Ausrichtung durchführen: Was versteht das Team? Was ist noch unklar? Was wird benötigt, um mit Zuversicht voranzukommen?",
        "Das Thema Arbeitsbelastung formell eskalieren; es handelt sich um ein strukturelles Problem auf einer höheren Ebene, das eine Diskussion mit der Führungsebene erfordert.",
        "Ein oder zwei konkrete Verbesserungen definieren, die den größten Einfluss auf die tägliche Arbeitserfahrung haben, und diese vor der nächsten Befragung verbindlich umsetzen.",
        "Einen festen Rahmen schaffen, in dem das Team regelmäßig Prioritäten und Hindernisse ansprechen kann; Vorhersehbarkeit in der Kommunikation ist genauso wichtig wie deren Inhalt."
      ]
    },

    /* Effectiveness card markers (x = Engagement, y = Performance environment) */
    fxMarkers: [
      { variant: 'is-org',     chip: 'is-chip-above', icon: 'building', label: 'Novanta B.V.', x: 70, y: 44 },
      { variant: 'is-current', chip: 'is-chip-above', icon: 'group',    label: 'Team IT', x: 26, y: 26 }
    ],

    /* Engagement card */
    engValue: '56%', engTrend: '11%', engTrendIcon: 'Trend-up', engBench: '70%', engBenchW: 70,

    /* Focus View extras */
    fvEngTrend: null, fvPerform: '58%', fvPerformTrend: null, npsTrend: null,

    /* eNPS */
    npsPromoters: 42, npsPassives: 28, npsDetractors: 30,
    npsPromCount: 237, npsPassCount: 158, npsDetrCount: 170,
    npsPrev: 8, npsBench: 20, npsTop3: 30,

    /* Themes radar */
    swCurrent: [56, 61, 56, 87, 62, 78],
    swPrevious: [13, 50, 77, 60, 62, 62],

    /* Response rate */
    rrValue: 66, rrPartDone: 373, rrPartTotal: 565, rrTrend: '13%', rrTrendIcon: 'Trend-up', rrBench: 84,

    /* KPI gauges */
    kpiWorkload: 38, kpiRetention: 73, kpiWellbeing: 48,

    /* Topics */
    topics: [
      { name: 'Collaboration between teams', count: 540, color: 'is-green' },
      { name: 'Our feedback culture very long example', count: 384, color: 'is-turquoise' },
      { name: 'Our feedback culture', count: 146, color: 'is-blue' }
    ],

    /* Highest / Lowest scores */
    highScores: [
      { q: 'I feel comfortable within the team', s: 95 },
      { q: 'Our team trusts one another', s: 88 },
      { q: 'During a team meeting, everyone has a fair chance to speak up', s: 84 },
      { q: 'There is a relaxed atmosphere within our team', s: 75 },
      { q: 'I enjoy my work', s: 75 }
    ],
    lowScores: [
      { q: 'I know what results are expected of me at work', s: 43 },
      { q: 'Doing my work gives me energy', s: 51 },
      { q: 'I am provided with good work resources', s: 52 },
      { q: 'My skills and abilities fit in well with my job', s: 54 },
      { q: 'I enjoy doing my work / tasks', s: 60 }
    ],

    /* Effectiveness side panel */
    efpLeadPre: 'Team IT is ', efpLeadEm: 'ineffective', efpLeadEmClass: '',
    efpLeadDesc: 'Both engagement and the performance environment are under pressure. Without attention, this can affect results and team wellbeing over time.',
    efpComparisons: '2 selected',
    efpHasPrevious: false,
    efpBench: '68%',
    efpFocusIntro: 'In this situation, it is important to slow down and create focus. A structured and supported follow-up helps bring stability and direction. Rather than trying to fix everything, concentrate on the few areas that are most urgent and within your influence.',
    efpFocusBullets: [
      { t: 'Prepare &amp; reflect:', d: 'Take time to understand the results and, if helpful, seek support before moving into team discussions.' },
      { t: 'Review &amp; prioritize:', d: 'Group feedback by urgency (critical, high risk, improvement) and select the few priorities that matter most.' },
      { t: 'Discuss &amp; align:', d: 'Share findings transparently with the team and agree on clear priorities together.' },
      { t: 'Implement &amp; monitor:', d: 'Assign clear ownership, ensure appropriate support is in place, and establish a tight cadence to track progress and adjust where needed.' }
    ],
    efpFocusClosing: 'Clear priorities, visible action and consistent follow-up help rebuild trust and restore momentum step by step.',
    efpScores: [
      { name: 'Engagement', desc: 'Employees that are inspired and energized by their work', cur: '56%', bench: '68%', benchClass: 'is-bench' },
      { name: 'Performance environment', desc: 'Important basic conditions which enable employees to work effectively and efficiently', cur: '58%', bench: '68%', benchClass: 'is-bench' },
      { name: 'Providing Direction', sub: true, cur: '50%', bench: '64%', benchClass: 'is-bench' },
      { name: 'Leading change', sub: true, cur: '78%', bench: '67%', benchClass: 'is-bench-pos' },
      { name: 'Managing People', sub: true, cur: '53%', bench: '67%', benchClass: 'is-bench' },
      { name: 'Managing Systems', sub: true, cur: '47%', bench: '72%', benchClass: 'is-bench-neg' }
    ],
    efpMarkers: [
      { variant: 'is-peer',    icon: 'building', label: 'Help Desk / IT Support',        x: 33, y: 82 },
      { variant: 'is-peer',    icon: 'building', label: 'Infrastructure Team',           x: 43, y: 70 },
      { variant: 'is-peer',    icon: 'building', label: 'Network Team',                  x: 57, y: 80 },
      { variant: 'is-peer',    icon: 'building', label: 'Cybersecurity Team',            x: 15, y: 34 },
      { variant: 'is-peer',    icon: 'building', label: 'Systems Administration Team',   x: 64, y: 30 },
      { variant: 'is-peer',    icon: 'building', label: 'Cloud Operations Team',         x: 40, y: 15 },
      { variant: 'is-org',     icon: 'building', label: 'Novanta B.V.',                  x: 82, y: 62 },
      { variant: 'is-current', icon: 'group',    label: 'Team IT',                       x: 27, y: 24 }
    ],

    /* Engagement side panel */
    engpDist: { dis: 13, pot: 31, eng: 56 },
    engpCards: [
      { lbl: 'Team IT', val: '56%' },
      { lbl: 'Novanta B.V.', val: '72%' },
      { lbl: 'Effectory Index', val: '75%' }
    ],
    engpLine: { labels: ['Jun 2025', 'May 2026'], data: [60, 56] },
    engpTheme: [
      { q: 'Doing my work gives me energy', s: '75%' },
      { q: 'I enjoy doing my work / tasks', s: '81%' },
      { q: 'I am proud to work at Novanta', s: '85%' },
      { q: 'I feel that I fit in at Novanta', s: '85%' }
    ],
    engpCorr: [
      { q: 'My skills and abilities fit in well with my job', s: '90%' },
      { q: 'I identify with the culture of Novanta', s: '85%' },
      { q: 'Novanta is a good organisation to work for', s: '90%' },
      { q: 'The vision for the future of Novanta inspires me', s: '70%' },
      { q: 'Novanta uses employees’ ideas and suggestions to do better', s: '63%' }
    ]
  },

  'team-it-after': {
    groupName: 'Team IT',
    surveyName: 'Your voice 2026 Q3',
    dateFrom: '22 Jul 2026', dateTo: '22 Sep 2026', prevDateTo: '22 May 2026',
    /* AI summary */
    aiIntro: { en: "The movement in Team IT's results is significant. Engagement has risen from 58% to 69% — an 11-point improvement that places the team above the acquired-business average and within range of the organization benchmark. Workload scores have improved from a low base to a level where people feel they can manage. The direction clarity question, which was the lowest-scoring item in the first survey, has risen by 14 points.", nl: "De ontwikkeling in de resultaten van Team IT is aanzienlijk. De bevlogenheid is gestegen van 58% naar 69% — een verbetering van 11 procentpunten waarmee het team boven het gemiddelde van het overgenomen bedrijf uitkomt en dicht bij het organisatiegemiddelde ligt. Ook de werkdrukscore is vanuit een laag uitgangspunt duidelijk verbeterd. De vraag over duidelijkheid van richting, die in het eerste onderzoek de laagste score had, is met 14 punten gestegen.", de: "Die Entwicklung der Ergebnisse von Team IT ist bemerkenswert. Das Engagement ist von 58 % auf 69 % gestiegen – eine Verbesserung um 11 Prozentpunkte, wodurch das Team über dem Durchschnitt des übernommenen Unternehmens liegt und sich dem Organisationsbenchmark annähert. Auch die Bewertung der Arbeitsbelastung hat sich von einem niedrigen Ausgangsniveau deutlich verbessert. Die Frage zur Klarheit der Ausrichtung, die in der ersten Befragung den niedrigsten Wert aufwies, ist um 14 Punkte gestiegen." },
    aiMore: {
      en: [
        "These results reflect what happened after the first survey. The team results were shared openly. The workload issue was escalated. Honest conversations happened about what was getting in the way. The scores show that those actions had a real and measurable effect.",
        "Team IT has moved from the lower-left quadrant of the Effectiveness Matrix into the top half. That is the journey this survey was designed to track."
      ],
      nl: [
        "Deze resultaten weerspiegelen wat er na het eerste onderzoek is gebeurd. De resultaten zijn openlijk gedeeld, het werkdrukvraagstuk is geëscaleerd en er zijn eerlijke gesprekken gevoerd over de barrières die het team ervoer. De scores laten zien dat deze acties een meetbaar positief effect hebben gehad.",
        "Team IT is verschoven van het linksonder kwadrant van de Effectiviteitsmatrix naar de bovenste helft. Dat is precies de ontwikkeling die dit onderzoek zichtbaar moest maken."
      ],
      de: [
        "Diese Ergebnisse spiegeln wider, was nach der ersten Befragung geschehen ist. Die Ergebnisse wurden offen geteilt, das Thema Arbeitsbelastung wurde eskaliert und es fanden ehrliche Gespräche über die Hindernisse statt, die das Team erlebt hat. Die Werte zeigen, dass diese Maßnahmen einen messbaren positiven Effekt hatten.",
        "Team IT hat sich vom unteren linken Quadranten der Effektivitätsmatrix in die obere Hälfte bewegt. Genau diese Entwicklung sollte durch die Befragung sichtbar gemacht werden."
      ]
    },
    aiStrengths: {
      en: [
        "Engagement (69%) has risen 11 points and now sits above the acquired-business average",
        "Direction clarity improved by 14 points — the most significant single-dimension improvement in the team",
        "The team's participation rate increased to 94%, indicating growing trust in the process",
        "Team relationships remain strong and now show up as an active source of support rather than just a baseline"
      ],
      nl: [
        "Bevlogenheid (69%) is met 11 punten gestegen en ligt nu boven het gemiddelde van het overgenomen bedrijf.",
        "Duidelijkheid over richting verbeterde met 14 punten; de grootste vooruitgang van alle dimensies.",
        "Het responspercentage steeg naar 94%, wat wijst op groeiend vertrouwen in het proces.",
        "De sterke onderlinge relaties binnen het team fungeren nu actief als bron van ondersteuning in plaats van enkel als basisvoorwaarde."
      ],
      de: [
        "Das Engagement (69 %) ist um 11 Punkte gestiegen und liegt nun über dem Durchschnitt des übernommenen Unternehmens.",
        "Die Klarheit über die Ausrichtung verbesserte sich um 14 Punkte – die größte Verbesserung aller Dimensionen.",
        "Die Rücklaufquote stieg auf 94 %, was auf wachsendes Vertrauen in den Prozess hinweist.",
        "Die starken Beziehungen innerhalb des Teams fungieren nun aktiv als Quelle der Unterstützung und nicht mehr nur als grundlegende Voraussetzung."
      ]
    },
    aiGrowth: {
      en: [
        "Workload (61%) has improved but remains below benchmark — the structural adjustment helped, but underlying pressure has not fully resolved",
        "Development opportunities remain low and are becoming the most likely next driver of disengagement if left unaddressed",
        "Recognition scores have improved modestly but still lag — team members do not consistently feel their contribution is seen"
      ],
      nl: [
        "Werkdruk (61%) is verbeterd maar blijft onder de benchmark; de structurele aanpassingen hebben geholpen, maar de onderliggende druk is nog niet volledig verdwenen.",
        "Ontwikkelmogelijkheden blijven laag en vormen mogelijk de volgende oorzaak van afnemende betrokkenheid als hier niets mee gebeurt.",
        "Waardering en erkenning zijn beperkt verbeterd, maar blijven achter; teamleden ervaren nog niet consequent dat hun bijdrage wordt gezien."
      ],
      de: [
        "Die Arbeitsbelastung (61 %) hat sich verbessert, liegt jedoch weiterhin unter dem Benchmark; die strukturellen Anpassungen haben geholfen, aber der grundlegende Druck ist noch nicht vollständig beseitigt.",
        "Entwicklungsmöglichkeiten bleiben niedrig bewertet und könnten zum nächsten Treiber sinkenden Engagements werden, wenn sie nicht adressiert werden.",
        "Die Bewertung von Anerkennung und Wertschätzung hat sich zwar leicht verbessert, bleibt jedoch hinter den Erwartungen zurück; Teammitglieder haben nicht durchgängig das Gefühl, dass ihr Beitrag gesehen wird."
      ]
    },
    aiActions: {
      en: [
        "Sustain the structured team conversations — the score improvement reflects the quality of dialogue as much as the structural changes, and it requires continued investment",
        "Address recognition explicitly in the next cycle: identify simple, visible ways to acknowledge contribution at the team level without waiting for a formal process",
        "Make development a standing agenda item — connect it to concrete next steps for individuals, not a general aspiration",
        "Run a targeted check-in on workload within three months rather than waiting for the next full cycle — the improvement is real but the margin is still narrow",
        "Use Team IT's journey as an internal example in conversations with leadership about what the acquired business needs to continue improving"
      ],
      nl: [
        "Blijf investeren in gestructureerde teamgesprekken. De verbetering in scores komt net zo goed voort uit de kwaliteit van de dialoog als uit de structurele veranderingen.",
        "Geef expliciet aandacht aan waardering en erkenning in de volgende meetcyclus. Zoek naar eenvoudige en zichtbare manieren om bijdragen te erkennen zonder afhankelijk te zijn van formele processen.",
        "Maak ontwikkeling een vast onderdeel van de agenda en vertaal dit naar concrete vervolgstappen voor individuele medewerkers.",
        "Voer binnen drie maanden een gerichte check-in uit op werkdruk in plaats van te wachten op de volgende volledige meting; de verbetering is duidelijk, maar blijft kwetsbaar.",
        "Gebruik de ontwikkeling van Team IT als intern praktijkvoorbeeld in gesprekken met leiderschap over wat het overgenomen bedrijf nodig heeft om verder te groeien."
      ],
      de: [
        "Weiterhin in strukturierte Teamgespräche investieren. Die Verbesserung der Ergebnisse ist ebenso auf die Qualität des Dialogs zurückzuführen wie auf die strukturellen Veränderungen.",
        "Anerkennung und Wertschätzung im nächsten Befragungszyklus gezielt adressieren. Einfache und sichtbare Möglichkeiten schaffen, Beiträge auf Teamebene anzuerkennen – ohne auf formale Prozesse angewiesen zu sein.",
        "Entwicklung zu einem festen Tagesordnungspunkt machen und in konkrete Entwicklungsschritte für einzelne Mitarbeitende übersetzen.",
        "Innerhalb von drei Monaten einen gezielten Check-in zur Arbeitsbelastung durchführen, statt auf die nächste vollständige Befragung zu warten; die Verbesserung ist real, aber weiterhin fragil.",
        "Die Entwicklung von Team IT als internes Erfolgsbeispiel in Gesprächen mit Führungskräften nutzen, um aufzuzeigen, was das übernommene Unternehmen benötigt, um sich weiterzuentwickeln."
      ]
    },

    fxMarkers: [
      { variant: 'is-org',      chip: 'is-chip-below', icon: 'building',         label: 'Novanta B.V.', x: 74, y: 75 },
      { variant: 'is-previous', chip: 'is-chip-above', icon: 'rotate-backward',  label: 'Previous survey', x: 27, y: 24 },
      { variant: 'is-current',  chip: 'is-chip-above', icon: 'group',            label: 'Team IT', x: 67, y: 80 }
    ],

    engValue: '67%', engTrend: '11%', engTrendIcon: 'Trend-up', engBench: '70%', engBenchW: 70,

    /* Focus View extras */
    fvEngTrend: '11%', fvPerform: '71%', fvPerformTrend: '13%', npsTrend: '19',

    npsPromoters: 52, npsPassives: 27, npsDetractors: 21,
    npsPromCount: 329, npsPassCount: 171, npsDetrCount: 132,
    npsPrev: 12, npsBench: 20, npsTop3: 30,

    swCurrent: [67, 72, 75, 88, 82, 85],
    swPrevious: [56, 61, 56, 87, 62, 78],

    rrValue: 79, rrPartDone: 499, rrPartTotal: 632, rrTrend: '13%', rrTrendIcon: 'Trend-up', rrBench: 84,

    kpiWorkload: 56, kpiRetention: 73, kpiWellbeing: 79,

    topics: [
      { name: 'Collaboration between teams', count: 540, color: 'is-green' },
      { name: 'Our feedback culture very long example', count: 384, color: 'is-turquoise' },
      { name: 'Our feedback culture', count: 146, color: 'is-blue' }
    ],

    highScores: [
      { q: 'I feel comfortable within the team', s: 95 },
      { q: 'Our team trusts one another', s: 92 },
      { q: 'During a team meeting, everyone has a fair chance to speak up', s: 90 },
      { q: 'There is a relaxed atmosphere within our team', s: 88 },
      { q: 'I enjoy my work', s: 86 }
    ],
    lowScores: [
      { q: 'Important information is readily accessible for me', s: 68 },
      { q: 'I am able to maintain a good balance between working and relaxing', s: 70 },
      { q: 'My skills and abilities fit in well with my job', s: 71 },
      { q: 'I enjoy doing my work / tasks', s: 72 },
      { q: 'I know what results are expected of me at work', s: 73 }
    ],

    efpLeadPre: 'Team IT is ', efpLeadEm: 'effective', efpLeadEmClass: 'is-pos',
    efpLeadDesc: 'The team has both the energy and the foundations in place to perform well. Engagement and the performance environment reinforce each other, creating the conditions for strong and sustainable results.',
    efpComparisons: '3 selected',
    efpHasPrevious: true,
    efpBench: '68%',
    efpFocusIntro: 'Here, a light-touch follow-up is enough. Take time to reflect on the results together and acknowledge what is going well. The goal is to keep momentum and avoid overcomplicating something that already works.',
    efpFocusBullets: [
      'Reflect on the strengths that stand out in the results.',
      'Discuss what helps the team perform at its best.',
      'Consider where successful practices could inspire others.'
    ],
    efpFocusClosing: 'Keep attention on what works well and continue building on it. Use the survey results as an opportunity to reinforce the practices that help the team perform at its best.',
    efpScores: [
      { name: 'Engagement', desc: 'Employees that are inspired and energized by their work', cur: '81%', bench: '68%', benchClass: 'is-bench-pos' },
      { name: 'Performance environment', desc: 'Important basic conditions which enable employees to work effectively and efficiently', cur: '71%', bench: '68%', benchClass: 'is-bench-neutral' },
      { name: 'Providing Direction', sub: true, cur: '74%', bench: '64%', benchClass: 'is-bench-pos' },
      { name: 'Leading change', sub: true, cur: '81%', bench: '67%', benchClass: 'is-bench-pos' },
      { name: 'Managing People', sub: true, cur: '66%', bench: '67%', benchClass: 'is-bench-neutral' },
      { name: 'Managing Systems', sub: true, cur: '65%', bench: '72%', benchClass: 'is-bench-neutral' }
    ],
    efpMarkers: [
      { variant: 'is-peer',     icon: 'building',        label: 'Help Desk / IT Support',      x: 33, y: 82 },
      { variant: 'is-peer',     icon: 'building',        label: 'Infrastructure Team',         x: 43, y: 70 },
      { variant: 'is-peer',     icon: 'building',        label: 'Network Team',                x: 57, y: 80 },
      { variant: 'is-peer',     icon: 'building',        label: 'Cybersecurity Team',          x: 15, y: 34 },
      { variant: 'is-peer',     icon: 'building',        label: 'Systems Administration Team', x: 64, y: 30 },
      { variant: 'is-peer',     icon: 'building',        label: 'Cloud Operations Team',       x: 40, y: 15 },
      { variant: 'is-org',      icon: 'building',        label: 'Novanta B.V.',                x: 80, y: 62 },
      { variant: 'is-previous', icon: 'rotate-backward', label: 'Previous survey',             x: 27, y: 24 },
      { variant: 'is-current',  icon: 'group',           label: 'Team IT',                     x: 67, y: 80 }
    ],

    engpDist: { dis: 5, pot: 25, eng: 70 },
    engpCards: [
      { lbl: 'Team IT', val: '67%' },
      { lbl: 'Novanta B.V.', val: '72%' },
      { lbl: 'Effectory Index', val: '75%' }
    ],
    engpLine: { labels: ['Jun 2025', 'May 2026', 'Nov 2026'], data: [60, 56, 67] },
    engpTheme: [
      { q: 'Doing my work gives me energy', s: '88%' },
      { q: 'I enjoy doing my work / tasks', s: '85%' },
      { q: 'I am proud to work at Novanta', s: '90%' },
      { q: 'I feel that I fit in at Novanta', s: '88%' }
    ],
    engpCorr: [
      { q: 'My skills and abilities fit in well with my job', s: '92%' },
      { q: 'I identify with the culture of Novanta', s: '88%' },
      { q: 'Novanta is a good organisation to work for', s: '93%' },
      { q: 'The vision for the future of Novanta inspires me', s: '82%' },
      { q: 'Novanta uses employees’ ideas and suggestions to do better', s: '78%' }
    ]
  },

  'novanta-after': {
    groupName: 'Novanta B.V.',
    fvVerdictPre: 'Novanta is',
    surveyName: 'Your voice 2026 Q3',
    dateFrom: '22 Jul 2026', dateTo: '22 Sep 2026', prevDateTo: '22 May 2026',
    aiIntro: { en: "Six months on, the data tells a different story. Engagement has risen to 72% and retention to 76%, both above the sector benchmark. The performance environment has seen the strongest movement: departments that clustered in the lower quadrants of the Effectiveness Matrix are shifting toward the Effective quadrant. The eNPS has moved from +20 to +31, and response rate has increased to 81% — a sign that trust in the process is growing.", nl: "Zes maanden later vertelt de data een ander verhaal. De bevlogenheid is gestegen naar 72% en de retentie naar 76%, beide boven de benchmark voor de sector. Ook de werkomgeving laat duidelijke vooruitgang zien: afdelingen die eerder in de onderste kwadranten van de Effectiviteitsmatrix stonden, bewegen richting het kwadrant Effectief. De eNPS is gestegen van +20 naar +31 en het responspercentage is toegenomen naar 81%, wat erop wijst dat het vertrouwen in het proces groeit.", de: "Sechs Monate später erzählt die Datenlage eine andere Geschichte. Das Engagement ist auf 72 % und die Retention auf 76 % gestiegen – beide Werte liegen über dem Branchenbenchmark. Auch das Arbeitsumfeld hat sich deutlich verbessert: Abteilungen, die zuvor in den unteren Quadranten der Effektivitätsmatrix lagen, bewegen sich zunehmend in Richtung des Quadranten „Effektiv“. Der eNPS ist von +20 auf +31 gestiegen, und die Rücklaufquote hat sich auf 81 % erhöht – ein Zeichen dafür, dass das Vertrauen in den Prozess wächst." },
    aiMore: {
      en: [
        "The actions managers took after the first survey are visible in these results. Teams where managers created actions in the Action Planner and followed through show measurably higher scores on direction, workload, and engagement than teams where no action was taken. The gap between the two groups is the clearest finding in this round.",
        "Three departments in the acquired business remain in the lower quadrants and require targeted attention before the next cycle."
      ],
      nl: [
        "De acties die leidinggevenden na het eerste onderzoek hebben ondernomen zijn zichtbaar in deze resultaten. Teams waarvan leidinggevenden acties hebben aangemaakt in de Actieplanner en deze daadwerkelijk hebben uitgevoerd, scoren aantoonbaar hoger op richting, werkdruk en bevlogenheid dan teams waar geen opvolging heeft plaatsgevonden. Het verschil tussen beide groepen is de meest opvallende bevinding uit deze meting.",
        "Drie afdelingen binnen het overgenomen bedrijf bevinden zich nog steeds in de onderste kwadranten en vragen om gerichte aandacht vóór de volgende meetcyclus."
      ],
      de: [
        "Die Maßnahmen, die Führungskräfte nach der ersten Befragung ergriffen haben, spiegeln sich deutlich in diesen Ergebnissen wider. Teams, deren Führungskräfte Maßnahmen im Action Planner erstellt und auch umgesetzt haben, erzielen nachweislich höhere Werte bei Ausrichtung, Arbeitsbelastung und Engagement als Teams ohne entsprechende Nachverfolgung. Der Unterschied zwischen diesen beiden Gruppen ist die auffälligste Erkenntnis dieser Befragungsrunde.",
        "Drei Bereiche des übernommenen Unternehmens befinden sich weiterhin in den unteren Quadranten und benötigen vor dem nächsten Zyklus gezielte Aufmerksamkeit."
      ]
    },
    aiStrengths: {
      en: [
        "Managers who engaged with their results drove the most significant team-level improvements",
        "Direction clarity improved significantly across the acquired business — the integration communication changes made in month three are reflected here",
        "Workload scores improved in departments where resourcing conversations were escalated and acted on"
      ],
      nl: [
        "Leidinggevenden die actief met hun resultaten aan de slag gingen, realiseerden de grootste verbeteringen op teamniveau.",
        "Duidelijkheid over richting is sterk verbeterd binnen het overgenomen bedrijf; de aangepaste integratiecommunicatie uit maand drie is hierin zichtbaar.",
        "Werkdrukscores zijn verbeterd in afdelingen waar capaciteitsvraagstukken zijn besproken en aangepakt."
      ],
      de: [
        "Führungskräfte, die aktiv mit ihren Ergebnissen gearbeitet haben, erzielten die größten Verbesserungen auf Teamebene.",
        "Die Klarheit über die Ausrichtung hat sich im übernommenen Unternehmen deutlich verbessert; die Anpassungen in der Integrationskommunikation aus dem dritten Monat sind hier sichtbar.",
        "Die Bewertungen zur Arbeitsbelastung haben sich in den Bereichen verbessert, in denen Kapazitätsfragen angesprochen und bearbeitet wurden."
      ]
    },
    aiGrowth: {
      en: [
        "Workload (61%) has improved but remains the lowest-scoring dimension across the organization",
        "Three production departments still sit in the Ineffective quadrant and need a different kind of intervention, not just an action plan",
        "Development opportunities (59%) are growing but remain below the sector average"
      ],
      nl: [
        "Werkdruk (61%) is verbeterd, maar blijft de laagst scorende dimensie binnen de organisatie.",
        "Drie productieafdelingen bevinden zich nog steeds in het kwadrant Ineffectief en hebben meer nodig dan alleen een actieplan.",
        "Ontwikkelmogelijkheden (59%) nemen toe, maar blijven onder het sectorgemiddelde."
      ],
      de: [
        "Die Arbeitsbelastung (61 %) hat sich verbessert, bleibt jedoch die niedrigst bewertete Dimension innerhalb der Organisation.",
        "Drei Produktionsabteilungen befinden sich weiterhin im Quadranten „Ineffektiv“ und benötigen mehr als nur einen Maßnahmenplan.",
        "Entwicklungsmöglichkeiten (59 %) verbessern sich, liegen jedoch weiterhin unter dem Branchendurchschnitt."
      ]
    },
    aiActions: {
      en: [
        "Deepen the approach in the three departments still showing low scores on both dimensions",
        "Share the practices of the highest-moving teams broadly — use them as internal proof points",
        "Run a targeted pulse for the three lagging departments within the next three months rather than waiting for the full cycle",
        "Connect development to visible career pathways to strengthen retention in the acquired business"
      ],
      nl: [
        "Verdiep de aanpak in de drie afdelingen die nog laag scoren op beide dimensies.",
        "Deel de werkwijzen van teams die de grootste vooruitgang hebben geboekt als interne succesvoorbeelden.",
        "Voer binnen drie maanden een gerichte pulsemeting uit voor de achterblijvende afdelingen in plaats van te wachten op de volgende volledige meting.",
        "Koppel ontwikkeling aan zichtbare loopbaanpaden om retentie binnen het overgenomen bedrijf verder te versterken."
      ],
      de: [
        "Den Ansatz in den drei Abteilungen mit niedrigen Werten in beiden Dimensionen vertiefen.",
        "Die Vorgehensweisen der Teams mit den größten Fortschritten als interne Erfolgsbeispiele teilen.",
        "Innerhalb der nächsten drei Monate eine gezielte Pulsbefragung für die zurückliegenden Bereiche durchführen, anstatt auf den nächsten vollständigen Befragungszyklus zu warten.",
        "Entwicklungsmöglichkeiten stärker mit sichtbaren Karrierepfaden verknüpfen, um die Retention im übernommenen Unternehmen weiter zu stärken."
      ]
    },

    fxMarkers: [
      { variant: 'is-previous', chip: 'is-chip-below', icon: 'rotate-backward', label: 'Previous survey', x: 66, y: 66 },
      { variant: 'is-current',  chip: 'is-chip-above', icon: 'group',           label: 'Novanta B.V.', x: 74, y: 75 }
    ],

    engValue: '72%', engTrend: '4%', engTrendIcon: 'Trend-up', engBench: '75%', engBenchW: 75,

    fvEngTrend: '4%', fvPerform: '74%', fvPerformTrend: '3%', npsTrend: '10',

    npsPromoters: 50, npsPassives: 30, npsDetractors: 20,
    npsPromCount: 2380, npsPassCount: 1420, npsDetrCount: 950,
    npsPrev: 20, npsBench: 20, npsTop3: 30,

    swCurrent: [72, 70, 74, 86, 76, 81],
    swPrevious: [69, 67, 70, 84, 73, 78],

    rrValue: 81, rrPartDone: 3842, rrPartTotal: 4743, rrTrend: '4%', rrTrendIcon: 'Trend-up', rrBench: 84,

    kpiWorkload: 62, kpiRetention: 76, kpiWellbeing: 81,

    topics: [
      { name: 'Collaboration between teams', count: 540, color: 'is-green' },
      { name: 'Our feedback culture very long example', count: 384, color: 'is-turquoise' },
      { name: 'Our feedback culture', count: 146, color: 'is-blue' }
    ],

    highScores: [
      { q: 'I feel comfortable within the team', s: 92 },
      { q: 'Our team trusts one another', s: 89 },
      { q: 'During a team meeting, everyone has a fair chance to speak up', s: 88 },
      { q: 'There is a relaxed atmosphere within our team', s: 86 },
      { q: 'I enjoy my work', s: 85 }
    ],
    lowScores: [
      { q: 'My skills and abilities fit in well with my job', s: 66 },
      { q: 'I enjoy doing my work / tasks', s: 68 },
      { q: 'Doing my work gives me energy', s: 69 },
      { q: 'Important information is readily accessible for me', s: 70 },
      { q: 'I am provided with good work resources', s: 71 }
    ],

    efpLeadPre: 'Novanta is ', efpLeadEm: 'effective', efpLeadEmClass: 'is-pos',
    efpLeadDesc: 'Across the organization, engagement and the performance environment reinforce each other. Most teams have the energy and the foundations in place to perform well and deliver sustainable results.',
    efpComparisons: '2 selected',
    efpHasPrevious: true,
    efpHasOrg: false,
    efpBench: '75%',
    efpFocusIntro: 'Here, a light-touch organization-wide follow-up is enough. Acknowledge what is going well and give departments the space to act on their own results. The goal is to keep momentum across the organization.',
    efpFocusBullets: [
      'Reflect on the strengths that stand out across the organization.',
      'Let each department translate the results into their own focus.',
      'Support the few teams that are not yet performing at their best.'
    ],
    efpFocusClosing: 'Keep attention on what works well and continue building on it across teams.',
    efpScores: [
      { name: 'Engagement', desc: 'Employees that are inspired and energized by their work', cur: '72%', bench: '75%', benchClass: 'is-bench-neutral' },
      { name: 'Performance environment', desc: 'Important basic conditions which enable employees to work effectively and efficiently', cur: '74%', bench: '68%', benchClass: 'is-bench-pos' },
      { name: 'Providing Direction', sub: true, cur: '73%', bench: '64%', benchClass: 'is-bench-pos' },
      { name: 'Leading change', sub: true, cur: '78%', bench: '67%', benchClass: 'is-bench-pos' },
      { name: 'Managing People', sub: true, cur: '71%', bench: '67%', benchClass: 'is-bench-pos' },
      { name: 'Managing Systems', sub: true, cur: '70%', bench: '72%', benchClass: 'is-bench-neutral' }
    ],
    efpMarkers: [
      { variant: 'is-peer',     icon: 'building',        label: 'Team IT',           x: 67, y: 80 },
      { variant: 'is-peer',     icon: 'building',        label: 'Marketing',         x: 55, y: 72 },
      { variant: 'is-peer',     icon: 'building',        label: 'Sales',             x: 82, y: 58 },
      { variant: 'is-peer',     icon: 'building',        label: 'Finance',           x: 48, y: 64 },
      { variant: 'is-peer',     icon: 'building',        label: 'Human Resources',   x: 70, y: 86 },
      { variant: 'is-peer',     icon: 'building',        label: 'Operations',        x: 38, y: 46 },
      { variant: 'is-peer',     icon: 'building',        label: 'Product',           x: 88, y: 78 },
      { variant: 'is-peer',     icon: 'building',        label: 'Customer Success',  x: 60, y: 38 },
      { variant: 'is-previous', icon: 'rotate-backward', label: 'Previous survey',   x: 66, y: 66 },
      { variant: 'is-current',  icon: 'group',           label: 'Novanta',           x: 74, y: 75 }
    ],

    engpDist: { dis: 6, pot: 26, eng: 68 },
    engpCards: [
      { lbl: 'Novanta B.V.', val: '72%' },
      { lbl: 'Effectory Index', val: '75%' }
    ],
    engpLine: { labels: ['Jun 2025', 'May 2026', 'Nov 2026'], data: [69, 70, 72] },
    engpTheme: [
      { q: 'Doing my work gives me energy', s: '80%' },
      { q: 'I enjoy doing my work / tasks', s: '82%' },
      { q: 'I am proud to work at Novanta', s: '86%' },
      { q: 'I feel that I fit in at Novanta', s: '85%' }
    ],
    engpCorr: [
      { q: 'My skills and abilities fit in well with my job', s: '88%' },
      { q: 'I identify with the culture of Novanta', s: '85%' },
      { q: 'Novanta is a good organisation to work for', s: '90%' },
      { q: 'The vision for the future of Novanta inspires me', s: '80%' },
      { q: 'Novanta uses employees’ ideas and suggestions to do better', s: '75%' }
    ]
  },

  'novanta-before': {
    groupName: 'Novanta B.V.',
    fvVerdictPre: 'Novanta is',
    surveyName: 'Your voice 2026 Q2',
    dateFrom: '22 Apr 2026', dateTo: '22 May 2026', prevDateTo: '22 Jan 2026',
    aiIntro: { en: "Across Novanta, this survey points to a mixed picture following the recent acquisition. Organization-wide engagement stands at 66% with retention at 56% — most employees are reasonably committed, but that energy is not yet translating into a consistent performance environment. An eNPS of +20 and a response rate of 77% give a solid read on where the organization stands.", nl: "Binnen Novanta laat dit onderzoek een gemengd beeld zien na de recente overname. Organisatiebreed ligt de bevlogenheid op 66% en de retentie op 56% — de meeste medewerkers zijn redelijk betrokken, maar die energie vertaalt zich nog niet overal naar een consistente werkomgeving waarin prestaties optimaal mogelijk zijn. Met een eNPS van +20 en een responspercentage van 77% geeft het onderzoek een betrouwbaar beeld van de situatie.", de: "Diese Befragung zeigt bei Novanta nach der jüngsten Übernahme ein gemischtes Bild. Die organisationsweite Mitarbeiterbindung (Engagement) liegt bei 66 %, die Bindungsabsicht (Retention) bei 56 % – die meisten Mitarbeitenden sind grundsätzlich engagiert, doch diese Energie führt noch nicht überall zu einem Arbeitsumfeld, das optimale Leistungen ermöglicht. Mit einem eNPS von +20 und einer Rücklaufquote von 77 % liefert die Befragung ein verlässliches Bild der aktuellen Situation." },
    aiMore: {
      en: [
        "The data shows two Novanta organizations sitting side by side. Legacy teams are largely stable and performing. Teams from the acquired business cluster in the lower quadrants of the Effectiveness Matrix — motivated people working in conditions that do not yet fully support them. This pattern is most visible in unclear direction, workload pressure, and gaps in manager support.",
        "The good news: the engagement is there. The task now is to build the conditions around it."
      ],
      nl: [
        "De resultaten laten zien dat er als het ware twee Novanta-organisaties naast elkaar bestaan. De oorspronkelijke teams zijn over het algemeen stabiel en presteren goed. Teams uit het overgenomen bedrijf bevinden zich vooral in de onderste kwadranten van de Effectiviteitsmatrix: gemotiveerde medewerkers die werken onder omstandigheden die hen nog onvoldoende ondersteunen. Dit patroon is vooral zichtbaar op het gebied van richting en duidelijkheid, werkdruk en ondersteuning door leidinggevenden.",
        "Het goede nieuws: de betrokkenheid is aanwezig. De uitdaging ligt nu in het creëren van de juiste randvoorwaarden om die betrokkenheid volledig tot haar recht te laten komen."
      ],
      de: [
        "Die Ergebnisse zeigen, dass bei Novanta gewissermaßen zwei Organisationen nebeneinander existieren. Die bestehenden Teams sind überwiegend stabil und leistungsfähig. Die Teams des übernommenen Unternehmens konzentrieren sich dagegen vor allem in den unteren Quadranten der Effektivitätsmatrix: motivierte Mitarbeitende, die unter Bedingungen arbeiten, die sie noch nicht ausreichend unterstützen. Dieses Muster zeigt sich besonders bei der Klarheit von Richtung und Strategie, der Arbeitsbelastung sowie der Unterstützung durch Führungskräfte.",
        "Die gute Nachricht: Das Engagement ist vorhanden. Die Herausforderung besteht nun darin, die richtigen Rahmenbedingungen zu schaffen, damit dieses Engagement sein volles Potenzial entfalten kann."
      ]
    },
    aiStrengths: {
      en: [
        "Engagement (66%) is a workable foundation, particularly in the legacy business",
        "Pride in the organization remains high, giving employees a reason to stay invested through the transition",
        "A response rate of 77% signals that employees believe their voice will lead to something"
      ],
      nl: [
        "Bevlogenheid (66%) vormt een werkbare basis, met name in de bestaande organisatie",
        "Trots op de organisatie blijft hoog, wat medewerkers een reden geeft om betrokken te blijven tijdens de transitie",
        "Een respons van 77% laat zien dat medewerkers geloven dat hun stem tot iets leidt"
      ],
      de: [
        "Engagement (66 %) bildet eine solide Grundlage, insbesondere im etablierten Unternehmensteil",
        "Der Stolz auf die Organisation bleibt hoch und gibt den Mitarbeitenden einen Grund, sich während der Transformation weiterhin einzubringen",
        "Eine Rücklaufquote von 77 % zeigt, dass die Mitarbeitenden glauben, dass ihre Stimme etwas bewirkt"
      ]
    },
    aiGrowth: {
      en: [
        "Retention (56%) points to a growing intention to leave — fewer people are certain they want to stay",
        "Direction and strategic clarity score low across the acquired teams — people are unsure how their work fits the new organization",
        "Workload (54%) is under pressure in multiple departments, compounded by lagging manager support and development opportunities in teams going through structural change"
      ],
      nl: [
        "Retentie (56%) wijst op een toenemende vertrekintentie: minder medewerkers zijn zeker dat ze willen blijven",
        "Richting en strategische duidelijkheid scoren laag binnen de overgenomen teams: medewerkers weten niet goed hoe hun werk past binnen de nieuwe organisatie",
        "Werkdruk (54%) staat in meerdere afdelingen onder druk, versterkt door achterblijvende managerondersteuning en ontwikkelmogelijkheden in teams die een structurele verandering doormaken"
      ],
      de: [
        "Die Bindung (56 %) deutet auf eine wachsende Wechselbereitschaft hin – weniger Mitarbeitende sind sich sicher, bleiben zu wollen",
        "Richtung und strategische Klarheit werden in den übernommenen Teams niedrig bewertet – die Mitarbeitenden wissen nicht genau, wie ihre Arbeit in die neue Organisation passt",
        "Die Arbeitsbelastung (54 %) steht in mehreren Abteilungen unter Druck, verstärkt durch mangelnde Führungsunterstützung und fehlende Entwicklungsmöglichkeiten in Teams, die einen strukturellen Wandel durchlaufen"
      ]
    },
    aiActions: {
      en: [
        "Prioritize communication of direction to acquired-business teams — clarity is the fastest lever available",
        "Give managers in the lower-scoring teams a structured starting point for their team conversations",
        "Address workload distribution before the next cycle — it is the most likely driver of early attrition",
        "Set measurable targets per department and track movement in the next scan"
      ],
      nl: [
        "Geef prioriteit aan communicatie over de organisatiekoers richting teams uit het overgenomen bedrijf; meer duidelijkheid is de snelste manier om verbetering te realiseren.",
        "Geef leidinggevenden in lager scorende teams een duidelijke structuur voor teamgesprekken.",
        "Pak de verdeling van werkdruk aan vóór de volgende meting; dit is waarschijnlijk de belangrijkste oorzaak van vroegtijdig vertrek.",
        "Stel meetbare doelstellingen per afdeling vast en volg de ontwikkeling in de volgende meting."
      ],
      de: [
        "Die Kommunikation zur Unternehmensausrichtung für die Teams des übernommenen Unternehmens priorisieren; mehr Klarheit ist der schnellste Hebel für Verbesserungen.",
        "Führungskräften in niedriger bewerteten Teams einen klaren Rahmen für Teamgespräche geben.",
        "Die Verteilung der Arbeitsbelastung vor der nächsten Befragung adressieren; sie ist wahrscheinlich der wichtigste Treiber für vorzeitige Fluktuation.",
        "Messbare Ziele je Abteilung festlegen und die Entwicklung in der nächsten Befragung verfolgen."
      ]
    },

    fxMarkers: [
      { variant: 'is-current',  chip: 'is-chip-above', icon: 'group',           label: 'Novanta B.V.', x: 70, y: 44 }
    ],

    engValue: '66%', engTrend: '0%', engTrendIcon: 'Trend-up', engBench: '75%', engBenchW: 75,

    fvEngTrend: null, fvPerform: '58%', fvPerformTrend: null, npsTrend: null,

    npsPromoters: 44, npsPassives: 32, npsDetractors: 24,
    npsPromCount: 2090, npsPassCount: 1520, npsDetrCount: 1140,
    npsPrev: 18, npsBench: 20, npsTop3: 30,

    swCurrent: [66, 64, 68, 82, 70, 75],
    swPrevious: [63, 61, 65, 80, 68, 72],

    rrValue: 77, rrPartDone: 3650, rrPartTotal: 4740, rrTrend: '0%', rrTrendIcon: 'Trend-up', rrBench: 84,

    kpiWorkload: 54, kpiRetention: 56, kpiWellbeing: 73,

    topics: [
      { name: 'Collaboration between teams', count: 540, color: 'is-green' },
      { name: 'Our feedback culture very long example', count: 384, color: 'is-turquoise' },
      { name: 'Our feedback culture', count: 146, color: 'is-blue' }
    ],

    highScores: [
      { q: 'I feel comfortable within the team', s: 90 },
      { q: 'Our team trusts one another', s: 87 },
      { q: 'During a team meeting, everyone has a fair chance to speak up', s: 85 },
      { q: 'There is a relaxed atmosphere within our team', s: 83 },
      { q: 'I enjoy my work', s: 82 }
    ],
    lowScores: [
      { q: 'I am able to maintain a good balance between working and relaxing', s: 58 },
      { q: 'I know what results are expected of me at work', s: 61 },
      { q: 'Important information is readily accessible for me', s: 63 },
      { q: 'I am provided with good work resources', s: 64 },
      { q: 'Doing my work gives me energy', s: 66 }
    ],

    efpLeadPre: 'Novanta is ', efpLeadEm: 'not fully utilized', efpLeadEmClass: '',
    efpLeadDesc: 'Employees across the organization are motivated, but the performance environment is not yet keeping up. Improving workload, clarity and support will help this engagement translate into stronger results.',
    efpComparisons: '2 selected',
    efpHasPrevious: false,
    efpHasOrg: false,
    efpBench: '75%',
    efpFocusIntro: 'Focus organization-wide on the performance environment. Help departments reduce workload pressure and create clarity, so the energy that is already there can be put to use.',
    efpFocusBullets: [
      'Identify the departments under the most workload pressure.',
      'Give managers clearer priorities and support.',
      'Track a few shared improvements across teams.'
    ],
    efpFocusClosing: 'Small, consistent improvements to how work is organized will lift the whole organization over time.',
    efpScores: [
      { name: 'Engagement', desc: 'Employees that are inspired and energized by their work', cur: '66%', bench: '75%', benchClass: 'is-bench' },
      { name: 'Performance environment', desc: 'Important basic conditions which enable employees to work effectively and efficiently', cur: '58%', bench: '68%', benchClass: 'is-bench' },
      { name: 'Providing Direction', sub: true, cur: '60%', bench: '64%', benchClass: 'is-bench' },
      { name: 'Leading change', sub: true, cur: '64%', bench: '67%', benchClass: 'is-bench' },
      { name: 'Managing People', sub: true, cur: '59%', bench: '67%', benchClass: 'is-bench' },
      { name: 'Managing Systems', sub: true, cur: '55%', bench: '72%', benchClass: 'is-bench-neg' }
    ],
    efpMarkers: [
      { variant: 'is-peer',     icon: 'building',        label: 'Team IT',           x: 26, y: 26 },
      { variant: 'is-peer',     icon: 'building',        label: 'Marketing',         x: 52, y: 58 },
      { variant: 'is-peer',     icon: 'building',        label: 'Sales',             x: 78, y: 48 },
      { variant: 'is-peer',     icon: 'building',        label: 'Finance',           x: 44, y: 52 },
      { variant: 'is-peer',     icon: 'building',        label: 'Human Resources',   x: 66, y: 64 },
      { variant: 'is-peer',     icon: 'building',        label: 'Operations',        x: 34, y: 38 },
      { variant: 'is-peer',     icon: 'building',        label: 'Product',           x: 84, y: 60 },
      { variant: 'is-peer',     icon: 'building',        label: 'Customer Success',  x: 58, y: 32 },
      { variant: 'is-current',  icon: 'group',           label: 'Novanta',           x: 70, y: 44 }
    ],

    engpDist: { dis: 10, pot: 31, eng: 59 },
    engpCards: [
      { lbl: 'Novanta B.V.', val: '66%' },
      { lbl: 'Effectory Index', val: '75%' }
    ],
    engpLine: { labels: ['Jun 2025', 'May 2026'], data: [67, 66] },
    engpTheme: [
      { q: 'Doing my work gives me energy', s: '74%' },
      { q: 'I enjoy doing my work / tasks', s: '77%' },
      { q: 'I am proud to work at Novanta', s: '82%' },
      { q: 'I feel that I fit in at Novanta', s: '81%' }
    ],
    engpCorr: [
      { q: 'My skills and abilities fit in well with my job', s: '83%' },
      { q: 'I identify with the culture of Novanta', s: '80%' },
      { q: 'Novanta is a good organisation to work for', s: '85%' },
      { q: 'The vision for the future of Novanta inspires me', s: '72%' },
      { q: 'Novanta uses employees’ ideas and suggestions to do better', s: '68%' }
    ]
  }
};

/* Recommended action per approach — 1:1 uses the Figma copy, the rest are placeholders */
/* Recommended actions per survey item — keyed by survey item, then by recommendation type.
   Source: Effectory assessment "Recommendations" sheet (title + recommendation per type). */
const APPROACHES = ['Self directed', '1 on 1 action', 'Team level action', 'Process / structural action'];
const RECO = {
  'I enjoy doing my work / tasks': {
    'Self directed': { title: 'Notice which tasks you protect or postpone', body: 'For one week, track which recurring tasks you protect, delay, delegate last, or complain about. Use the pattern to adjust one draining task in the next planning cycle.' },
    '1 on 1 action': { title: 'Run a task enjoyment map in 1:1s', body: 'In your next 1:1s, ask each person which recurring tasks energise them, feel neutral, or drain them. Agree one small adjustment for the next four weeks.' },
    'Team level action': { title: 'Rotate or pair the least-liked recurring work', body: 'Pick one recurring task the team dislikes and test a better setup for one month: rotate it, pair people, batch it, or add a checklist.' },
    'Process / structural action': { title: 'Remove or simplify one low-value recurring task', body: 'Review recurring meetings, reports, approvals, checks, and handovers. Remove or simplify one that no longer improves decisions, quality, or service.' }
  },
  'I am provided with good work resources': {
    'Self directed': { title: 'Separate fixable friction from escalation issues', body: 'Sort resource issues into three groups: you can fix, the team can work around, and needs escalation. Start with one issue you can fix this week.' },
    '1 on 1 action': { title: "Ask what resource gap slows this person's work most", body: 'In each 1:1, ask which tool, material, permission, instruction, or workspace issue slows the person down most often. Capture a specific example.' },
    'Team level action': { title: 'Build a resource friction log and close one item weekly', body: 'Create a simple resource issue list and review it weekly with the team. Close at least one item you control each week.' },
    'Process / structural action': { title: 'Escalate repeated resource gaps with evidence', body: 'Set a clear rule for when a resource issue must be escalated, such as repeated blockers, safety or quality risk, material time loss, customer impact, workaround cost, or unequal access. Escalate with facts: affected work, frequency, impact, current workaround, and support needed.' }
  },
  'My skills and abilities fit in well with my job': {
    'Self directed': { title: 'Check whether you are using people for availability instead of fit', body: 'Review recent assignments and spot where work went to whoever was available rather than whoever was best fitted or ready to grow. Adjust one upcoming assignment.' },
    '1 on 1 action': { title: 'Run a skills-to-work fit review', body: 'Ask each person which parts of the role use their strengths, underuse them, or stretch them too far. Agree one practical adjustment or support step.' },
    'Team level action': { title: 'Map critical task coverage without exposing weaknesses', body: 'Map recurring work against coverage: covered, workable with support, risky if only one person knows it, needs clearer standard, or needs training. Choose one pairing, cross-training, checklist, or backup action.' },
    'Process / structural action': { title: 'Create a support rule for new or difficult work', body: 'For new, difficult, or risky work, give five basics before assigning it: expected output, good example, check-in moment, support person, and fallback option.' }
  },
  'I know what results are expected of me at work': {
    'Self directed': { title: 'State trade-offs, not only tasks', body: 'At the start of each week or shift cycle, state what matters most and what can wait or be done lighter if pressure rises.' },
    '1 on 1 action': { title: 'Confirm one outcome expectation per person', body: 'In each 1:1, choose one important piece of work and ask what a good result looks like. Correct unclear expectations immediately.' },
    'Team level action': { title: 'Run a weekly priority reset', body: "Run a weekly priority reset. Share the team's top three priorities and one piece of work that should receive less attention right now." },
    'Process / structural action': { title: 'Use definition-of-done for recurring ambiguous work', body: 'Define the minimum standard for recurring ambiguous work before it starts: output, quality level, deadline, handover format, and exception rule.' }
  },
  'Doing my work gives me energy': {
    'Self directed': { title: 'Look for energy drains you may be causing', body: 'Check whether your routines create avoidable interruptions, unclear priorities, rework, last-minute pressure, or tension. Change one behaviour for the next two weeks.' },
    '1 on 1 action': { title: 'Map personal energisers and drainers', body: 'Ask each person what gives them energy and what drains more energy than it should. Agree one local fix for the draining item.' },
    'Team level action': { title: 'Run an energy drain audit with a fixability filter', body: 'Ask the team to list energy drains, rank them by frequency and fixability, and change one high-frequency drain for four weeks.' },
    'Process / structural action': { title: 'Make repeated hidden work visible before reallocating it', body: 'Track hidden work for two weeks, such as error fixing, informal coordination, handover clean-up, last-minute cover, admin recovery, customer follow-up, or emotional support after difficult incidents. Then rebalance one recurring task.' }
  },
  'Important information is readily accessible for me': {
    'Self directed': { title: 'Stop adding new unofficial channels', body: 'For two weeks, stop adding new places for information. Put lasting updates in the official source and mark temporary updates clearly.' },
    '1 on 1 action': { title: 'Ask each person where they lose information', body: 'In 1:1s, ask where the person gets stuck when looking for information. Identify whether the issue is location, access, ownership, wording, timing, or version control, then fix one concrete issue.' },
    'Team level action': { title: "End team updates with 'what changed, where it lives'", body: 'End each meeting, huddle, or shift briefing by saying what changed, who is affected, what action is needed, and where the latest information lives.' },
    'Process / structural action': { title: 'Create a five-item source-of-truth map', body: 'Pick the five information types the team uses most and name the official location, owner, update rhythm, and duplicate source to stop using.' }
  },
  'I am able to maintain a good balance between working and relaxing': {
    'Self directed': { title: 'Remove one manager-created boundary leak', body: 'Review where your own behaviour weakens recovery, such as after-hours messages, last-minute requests, unclear urgency, praise for constant availability, or cancelled breaks. Remove one boundary leak this week.' },
    '1 on 1 action': { title: 'Ask what is pushing work into recovery time', body: 'In 1:1s, ask what work most often spills into breaks, evenings, weekends, or recovery time. Identify whether the cause is volume, staffing, handover, unclear priority, or personal habit, then agree one immediate protection.' },
    'Team level action': { title: 'Use a workload trade-off rule in planning', body: 'When new work is added, ask what will stop, move, or become lighter. Use the answer to protect people from hidden overload.' },
    'Process / structural action': { title: 'Add recovery and workload limits to planning', body: 'Add a workload and recovery check to planning. Define peak periods, work to pause, cover needed, escalation triggers, and recovery time.' }
  }
};

/* Which recommendation types show as radio options per survey item — a different
   mix per question so the cards don't all repeat the same four options. */
const FOCUS_TYPES = {
  'I know what results are expected of me at work': ['Self directed', '1 on 1 action', 'Team level action'],
  'Doing my work gives me energy': ['1 on 1 action', 'Team level action', 'Process / structural action'],
  'I am provided with good work resources': ['Self directed', 'Team level action', 'Process / structural action'],
  'My skills and abilities fit in well with my job': ['Self directed', '1 on 1 action', 'Process / structural action'],
  'I enjoy doing my work / tasks': ['Self directed', '1 on 1 action', 'Team level action', 'Process / structural action'],
  'Important information is readily accessible for me': ['1 on 1 action', 'Team level action', 'Process / structural action'],
  'I am able to maintain a good balance between working and relaxing': ['Self directed', 'Team level action', 'Process / structural action']
};

/* ---------- Focus View (second tab) ---------- */
function focusView(d) {
  const npsValue = d.npsPromoters - d.npsDetractors;
  /* Theme labels per question — questions match the overview's Highest/Lowest cards */
  const THEME = {
    /* focus items (lowest scores) */
    'I know what results are expected of me at work': 'Work performance',
    'Doing my work gives me energy': 'Wellbeing and workload',
    'I am provided with good work resources': 'Work enablement',
    'My skills and abilities fit in well with my job': 'Work performance',
    'I enjoy doing my work / tasks': 'Work enjoyment',
    'Important information is readily accessible for me': 'Work enablement',
    'I am able to maintain a good balance between working and relaxing': 'Wellbeing and workload',
    /* wins items (highest scores) */
    'I feel comfortable within the team': 'Engagement',
    'Our team trusts one another': 'Collaboration',
    'During a team meeting, everyone has a fair chance to speak up': 'Collaboration',
    'There is a relaxed atmosphere within our team': 'Wellbeing and workload',
    'I enjoy my work': 'Work enjoyment'
  };
  const fxMarker = (m) => `<div class="fx-marker ${m.variant} ${m.chip}" style="left:${m.x}%;top:${100 - m.y}%"><div class="fx-dot"></div><div class="fx-chip"><i data-icon="${m.icon}"></i>${m.label}</div></div>`;
  const trend = (val) => val ? `<div class="fv-trend-row"><span class="fv-trend">${val} <i data-icon="arrow-up"></i></span><span class="fv-trend-note">vs previous survey</span></div>` : '';
  const verdictClass = 'is-' + d.efpLeadEm.toLowerCase().replace(/\s+/g, '-');
  const approach = (i, q) => (FOCUS_TYPES[q] || APPROACHES)
    .map(a => `<button class="rb-btn-bordered" data-appr="${a}"><span class="rb-wrap"><input type="radio" class="rb" name="appr-${i}"></span>${a}</button>`).join('');

  const focusCard = (s, i) => `
    <div class="fv-card" data-q="${s.q}">
      <div class="fv-card-head">
        <div class="fv-card-top">
          <div class="fv-card-q">
            <p class="fv-card-question">${s.q}</p>
            <span class="fv-card-theme">${THEME[s.q] || ''}</span>
          </div>
          <span class="fv-score is-focus">${s.s}%</span>
        </div>
        <div class="fv-relevance">
          <a class="fv-rel-btn"><i data-icon="up-vote"></i> This is relevant</a>
          <a class="fv-rel-btn"><i data-icon="down-vote"></i> This focus area is not relevant right now</a>
        </div>
      </div>
      <div class="fv-divider"></div>
      <div class="fv-approach">
        <div class="fv-approach-lbl"><i data-icon="lightbulb"></i> Pick an approach to see the recommended action:</div>
        <div class="fv-approach-chips">${approach(i, s.q)}</div>
        <div class="fv-reco" hidden>
          <div class="fv-reco-content">
            <div class="fv-reco-head">
              <div class="fv-reco-title-wrap">
                <span class="fv-reco-eyebrow"></span>
                <p class="fv-reco-title"></p>
              </div>
            </div>
            <p class="fv-reco-body"></p>
          </div>
          <button class="btn btn-primary fv-reco-add"><i data-icon="target"></i> Add to action planner</button>
        </div>
        <button class="btn btn-link fv-create"><i data-icon="plus"></i> Create new action</button>
      </div>
    </div>`;

  const winCard = (s) => `
    <div class="fv-win-card">
      <div class="fv-card-q">
        <p class="fv-card-question">${s.q}</p>
        <span class="fv-card-theme">${THEME[s.q] || ''}</span>
      </div>
      <span class="fv-score is-win">${s.s}%</span>
    </div>`;

  return `
  <div class="fv-stats">
    <div class="fv-stat-pill">
      <span class="fv-stat-pill-lbl">Response rate</span>
      <span class="fv-stat-pill-val">${d.rrValue}%</span>
      <span class="fv-trend">${d.rrTrend} <i data-icon="arrow-up"></i></span>
    </div>
    <div class="fv-stat-pill is-clickable fv-nps-pill" role="button" tabindex="0" aria-label="Open eNPS details">
      <span class="fv-stat-pill-lbl">eNPS</span>
      <span class="fv-stat-pill-val">${npsValue}</span>
      ${d.npsTrend ? `<span class="fv-trend">${d.npsTrend} <i data-icon="arrow-up"></i></span>` : ''}
    </div>
  </div>

  <div class="fv-glance">
    <div class="fv-glance-head">
      <span class="fv-eyebrow is-glance">At first glance</span>
      <h2 class="fv-verdict ${verdictClass}">${d.fvVerdictPre || 'Your team is'} <span class="fv-verdict-word">${d.efpLeadEm}<span class="fv-verdict-underline"></span></span></h2>
    </div>
    <div class="fv-glance-body">
      <div class="fv-glance-left">
      <div class="fv-stat-cards">
        <div class="fv-stat-card">
          <div class="fv-stat-text">
            <p class="fv-stat-main"><span class="fv-stat-val">${d.engValue}</span> is engaged</p>
            ${trend(d.fvEngTrend)}
          </div>
          <a class="fv-explore">Explore <i data-icon="chevron-right"></i></a>
        </div>
        <div class="fv-stat-card">
          <div class="fv-stat-text">
            <p class="fv-stat-main"><span class="fv-stat-val">${d.fvPerform}</span> can perform effectively</p>
            ${trend(d.fvPerformTrend)}
          </div>
          <a class="fv-explore">Explore <i data-icon="chevron-right"></i></a>
        </div>
      </div>
      <div class="fv-meaning">
        <div class="fv-meaning-hd"><i data-icon="info"></i> What does this mean?</div>
        <p>${d.efpLeadDesc}</p>
      </div>
    </div>
    <div class="fv-glance-matrix">
      <div class="fv-matrix-row">
        <span class="fv-y-axis">Performance environment</span>
        <div class="fx-matrix">
          <div class="fx-quad is-detached">Detached</div>
          <div class="fx-quad is-effective">Effective</div>
          <div class="fx-quad is-ineffective">Ineffective</div>
          <div class="fx-quad is-not-utilized">Not fully utilized</div>
          <span class="fx-scale is-top-left">100%</span>
          <span class="fx-scale is-bottom-left">0%</span>
          <span class="fx-scale is-bottom-right">100%</span>
          <div class="efp-bench-badge"><i data-icon="benchmark-up"></i> ${d.engBench}<div class="tooltip is-above">Benchmark ${d.engBench}</div></div>
          <div class="efp-bench-badge is-left">${d.efpBench} <i data-icon="benchmark-up"></i><div class="tooltip is-above">Benchmark ${d.efpBench}</div></div>
          ${d.fxMarkers.map(fxMarker).join('')}
        </div>
      </div>
      <p class="fv-x-axis">Engagement score</p>
      </div>
    </div>
  </div>

  <div class="fv-block fv-focus">
    <div class="fv-block-aside">
      <span class="fv-eyebrow is-focus">What needs focus</span>
      <h2 class="fv-section-title">This is where your attention matters most</h2>
      <p class="fv-section-desc">These are questions where improvement will have the most impact on your team results.</p>
    </div>
    <div class="fv-block-main">
      <a class="fv-why" data-dialog="fa-dialog"><i data-icon="info"></i> Why these focus areas?</a>
      <div class="fv-cards">${d.lowScores.slice(0, 3).map(focusCard).join('')}</div>
    </div>
  </div>

  <div class="fv-block fv-wins">
    <div class="fv-block-aside">
      <span class="fv-eyebrow is-wins">Celebrate your wins</span>
      <h2 class="fv-section-title">Your team is already getting this right</h2>
      <p class="fv-section-desc">These are the areas where your team is performing well. Share these wins with your team to keep the momentum going!</p>
    </div>
    <div class="fv-block-main">
      <a class="fv-why" data-dialog="wins-dialog"><i data-icon="info"></i> Why these successes?</a>
      <div class="fv-win-cards">${d.highScores.slice(0, 3).map(winCard).join('')}</div>
    </div>
  </div>

  <div class="overlay" id="fa-dialog" hidden>
    <div class="dialog dialog-s" role="dialog" aria-modal="true" aria-labelledby="fa-dlg-title">
      <button class="dialog-close" aria-label="Close"><i data-icon="cross"></i></button>
      <div class="dialog-header is-sm"><div class="dialog-header-top"><h3 class="dialog-title" id="fa-dlg-title">Why these focus areas?</h3></div></div>
      <div class="dialog-body fv-why-dialog">
        <p>Focus areas are identified based on four factors from your team's survey results:</p>
        <ul>
          <li>Trend - whether your team's score on this question has declined since the last survey</li>
          <li>Gap - how your team's score compares to the rest of the organisation</li>
          <li>Consistency - how aligned your team members are in their responses</li>
          <li>Performance - how your score compares to internal and external benchmarks</li>
        </ul>
        <p>Questions that score highest across these four factors are surfaced as your top focus areas.</p>
      </div>
      <div class="dialog-footer"><button class="btn btn-primary">Got it</button></div>
    </div>
  </div>

  <div class="overlay" id="wins-dialog" hidden>
    <div class="dialog dialog-s" role="dialog" aria-modal="true" aria-labelledby="wins-dlg-title">
      <button class="dialog-close" aria-label="Close"><i data-icon="cross"></i></button>
      <div class="dialog-header is-sm"><div class="dialog-header-top"><h3 class="dialog-title" id="wins-dlg-title">Why these successes?</h3></div></div>
      <div class="dialog-body fv-why-dialog">
        <p>Successes are identified based on the same four factors from your team's survey results:</p>
        <ul>
          <li>Trend - whether your team's score on this question has improved since the last survey</li>
          <li>Gap - how your team's score compares to the rest of the organisation</li>
          <li>Consistency - how aligned your team members are in their responses</li>
          <li>Performance - how your score compares to internal and external benchmarks</li>
        </ul>
        <p>Questions that score best across these four factors are surfaced as your top successes.</p>
      </div>
      <div class="dialog-footer"><button class="btn btn-primary">Got it</button></div>
    </div>
  </div>
  `;
}

/* ---------- Reports (third tab) ---------- */
function reportsView(d) {
  const row = (icon, key, name, desc) => `
    <div class="report-row" data-report="${key}">
      <img class="file-icon" src="assets/icons/${icon}.svg" alt="" />
      <div class="report-meta">
        <div class="report-name">${name}</div>
        <div class="report-desc">${desc}</div>
      </div>
      <button class="ib ib-36 ib-tertiary" aria-label="Download ${name}"><i data-icon="download"></i></button>
    </div>`;
  return `
  <div class="rd-intro">
    <h2 class="text-l3">Reports</h2>
    <span class="rd-bar"></span>
    <span class="rd-sub">View and download your reports</span>
  </div>
  <div class="report-group">
    <h3 class="text-l5 report-group-title">Essential reports</h3>
    <div class="report-card">
      ${row('ppt-file', 'sgr', 'Standard Group Results', 'Includes response rate, themes, question performance and group deep-dives. Includes eNPS and Organizational Effectiveness when available.')}
      ${row('ppt-file', 'mgmt', 'Management Summary', 'A leadership-ready summary of key outcomes, strengths, improvement areas, and the main takeaways.')}
      ${row('pdf-file', 'onepager', 'Results One-Pager Summary', 'A concise overview of the key results and highlights to share quickly.')}
    </div>
  </div>`;
}

/* Reports dialogs (language picker, generating dialog, ready notification) */
function reportsDialogs() {
  const T2 = (s) => window.tr ? tr(s) : s;
  /* language + country shown in the current UI language so users can find the language they want */
  const langRow = (lang, flag, name, region, checked) => `
    <label class="lang-row${checked ? ' is-selected' : ''}" data-lang="${lang}">
      <span class="rb-wrap"><input type="radio" class="rb" name="lang"${checked ? ' checked' : ''}></span>
      <span class="lang-flag">${flag}</span>
      <span class="lang-name">${T2(name)} <span class="lang-region">(${T2(region)})</span></span>
    </label>`;
  return `
<div class="scrim" id="lang-scrim" hidden>
  <div class="dialog dialog-s" role="dialog" aria-modal="true" aria-labelledby="lang-title">
    <button class="dialog-close" id="lang-close" aria-label="Close"><i data-icon="cross"></i></button>
    <div class="dialog-header is-sm">
      <h3 class="dialog-title" id="lang-title">Choose a language</h3>
      <p class="dialog-subtitle" id="lang-sub">Download “<span id="lang-report">reportName</span>” in the language you select below</p>
    </div>
    <div class="dialog-body">
      <div class="lang-list" role="radiogroup" aria-label="Language">
        ${langRow('Dutch', '🇳🇱', 'Dutch', 'The Netherlands', true)}
        ${langRow('English', '🇬🇧', 'English', 'United Kingdom')}
        ${langRow('German', '🇩🇪', 'German', 'Germany')}
      </div>
    </div>
    <div class="dialog-footer">
      <button class="btn btn-secondary" id="lang-cancel">Cancel</button>
      <button class="btn btn-primary">Download…</button>
    </div>
  </div>
</div>

<div class="toast-region" id="ready-toast" hidden>
  <div class="sysnotif" role="status">
    <button class="sysnotif-close" id="ready-close" aria-label="Dismiss"><i data-icon="cross"></i></button>
    <span class="sysnotif-title" id="ready-title"></span>
    <button class="sysnotif-action" id="ready-download"><i data-icon="download"></i> Download</button>
  </div>
</div>

<div class="scrim" id="gen-scrim" hidden>
  <div class="dialog dialog-s" role="dialog" aria-modal="true" aria-labelledby="gen-title">
    <button class="dialog-close" id="gen-close" aria-label="Close"><i data-icon="cross"></i></button>
    <div class="dialog-header is-sm">
      <h3 class="dialog-title" id="gen-title">Generating report</h3>
      <p class="dialog-subtitle" id="gen-subtitle">File is being generated.</p>
    </div>
    <div class="dialog-body">
      <div class="gen-panel" id="gen-panel">
        <div class="gen-card gen-loading">
          <div class="gen-icon">
            <img class="gen-file" src="assets/icons/file-loading.svg" alt="" />
            <span class="gen-spinner"></span>
          </div>
          <div class="gen-text">
            <span class="gen-title">Generating excel file…</span>
            <span class="gen-sub" id="gen-sub">In your selected language</span>
          </div>
        </div>
        <div class="gen-done">
          <div class="gen-card">
            <img class="gen-file" src="assets/icons/file-ready.svg" alt="" />
            <div class="gen-text">
              <span class="gen-title">Done!</span>
              <span class="gen-sub">The report will download automatically</span>
            </div>
          </div>
          <a class="gen-fallback" href="#">Download does not start? Click here</a>
        </div>
      </div>
      <div class="gen-longer" id="gen-longer">
        <div class="gen-longer-note">
          <i data-icon="info" class="gen-longer-icon"></i>
          <p>This can take a while. Feel free to close this window and keep working in My Effectory — your report will be ready to download here when it’s done.</p>
        </div>
        <div class="gen-longer-actions"><button class="btn btn-secondary" id="gen-close-btn">Got it</button></div>
      </div>
    </div>
  </div>
</div>`;
}

/* ---------- Action Planner (in-page view) ---------- */
/* Runtime state for the planner: custom-pinned rows the user adds, removed keys, active sort. */
let AP_CUSTOM = [];
let AP_REMOVED = new Set();
let AP_PINNED = [];                 /* questions/themes pinned via the Scores page: { key, name, score } */
let AP_SORT = null;                 /* { col: 'score'|'goal'|'progress', dir: 1|-1 } */
const AP_GOAL_ORDER = { promote: 3, improve: 2, contemplate: 1, '': 0 };
let AP_CUSTOM_SEQ = 0;

/* The subjects shown in the planner: a couple of themes/questions plus any custom pins. */
function actionPlannerSeed(d) {
  const g = groupKey(d), p = periodKey(d);
  const themeScore = (n) => { const t = THEMES.find(x => x.name === n); return t ? t.v[g][p] : null; };
  const qScore = (q) => { for (const grp of SCORES_GROUPS) { const r = grp.rows.find(x => x.q === q); if (r) return r.v[g][p]; } return null; };
  return [
    { key: 'I enjoy doing my work / tasks', name: 'I enjoy doing my work / tasks', score: qScore('I enjoy doing my work / tasks') },
    { key: 'I know what results are expected of me at work', name: 'I know what results are expected of me at work', score: qScore('I know what results are expected of me at work') }
  ];
}

/* Seed ACT_STORE once so the planner rows AND the question/theme side panels stay in sync. */
function seedActionPlanner() {
  const T2 = (s) => window.tr ? tr(s) : s;
  const defaults = {
    'I enjoy doing my work / tasks': { goal: 'improve', actions: [
      { text: 'Plan monthly one-on-ones', done: true, deadline: '', assignee: 'Alex de Vries' },
      { text: 'Review how tasks are shared out', done: false, deadline: '', assignee: '' },
      { text: 'Run a team energiser session', done: false, deadline: '', assignee: '' } ] },
    'I know what results are expected of me at work': { goal: 'promote', actions: [
      { text: 'Write down the team goals together', done: true, deadline: '', assignee: 'Sam Bakker' },
      { text: 'Share the quarterly priorities', done: false, deadline: '', assignee: '' },
      { text: 'Set up progress check-ins', done: false, deadline: '', assignee: '' } ] }
  };
  let off = 0;
  Object.entries(defaults).forEach(([k, v]) => { if (!ACT_STORE[k]) ACT_STORE[k] = { goal: v.goal, desc: '', lastEdited: Date.now() - (++off) * 36e5, actions: v.actions.map(a => ({ ...a, text: T2(a.text) })) }; });
}

/* Current planner rows (seed + pins added on the Scores page + custom), minus removed, deduped by key. */
function actionPlannerRows(d) {
  const all = [...actionPlannerSeed(d), ...AP_PINNED, ...AP_CUSTOM].filter(r => !AP_REMOVED.has(r.key));
  const seen = new Set();
  return all.filter(r => (seen.has(r.key) ? false : seen.add(r.key)));
}

function apRowHTML(r) {
  const T2 = (s) => window.tr ? tr(s) : s;
  const st = actState(r.key);
  const total = st.actions.length, done = st.actions.filter(a => a.done).length;
  const scoreTxt = r.scoreText != null ? r.scoreText : (r.score == null ? '–' : r.score + '%');
  const progress = total > 0
    ? `<div class="ap-prog"><div class="ap-bar"><div class="ap-bar-fill" style="width:${Math.round(done / total * 100)}%"></div></div><span class="ap-bar-count">${done}/${total}</span></div>`
    : `<button class="btn btn-secondary ap-add" type="button">${T2('Add actions')}</button>`;
  const isCustom = r.key.startsWith('custom:');
  const hasName = r.name && r.name.trim();
  const display = isCustom ? (hasName ? esc(r.name) : `<span class="ap-name-empty">${T2('Untitled pin')}</span>`) : T2(r.name);
  return `<div class="ap-row" data-key="${esc(r.key)}" data-name="${esc((hasName ? r.name : (isCustom ? 'pin' : r.name)).toLowerCase())}" role="button" tabindex="0">
    <span class="ap-name">${display}</span>
    <span class="ap-score">${scoreTxt}</span>
    <span class="ap-goal">${st.goal ? goalChipHTML(st.goal) : '<span class="ap-goal-none">–</span>'}</span>
    <span class="ap-prog-cell">${progress}</span>
    <div class="ap-kebab-wrap">
      <button class="ib ib-36 ib-tertiary ap-kebab" type="button" aria-label="${T2('More actions')}"><i data-icon="more-vertical"></i></button>
      <div class="menu ap-kebab-menu" hidden>
        <div class="menu-item ap-edit" role="button" tabindex="0"><i data-icon="edit" class="menu-item-icon"></i><span class="menu-item-title">${T2('Edit pin')}</span></div>
        <div class="menu-item ap-addk" role="button" tabindex="0"><i data-icon="plus" class="menu-item-icon"></i><span class="menu-item-title">${T2('Add actions')}</span></div>
        <div class="menu-divider"></div>
        <div class="menu-item ap-remove" role="button" tabindex="0"><i data-icon="trash" class="menu-item-icon"></i><span class="menu-item-title">${T2('Remove pin')}</span></div>
      </div>
    </div>
  </div>`;
}

function actionsView(d) {
  const T2 = (s) => window.tr ? tr(s) : s;
  seedActionPlanner();
  const rows = actionPlannerRows(d);
  return `
  <div class="ap-wrap">
    <div class="ap-headrow">
      <div class="rd-intro"><h2 class="text-l3">${T2('Action Planner')}</h2><span class="rd-bar"></span><span class="rd-sub">${T2('Pinboard & actions')}</span></div>
      <a class="ap-tutorial" href="https://support.effectory.com/hc/en-us/articles/16130091054749-results-dashboard-action-planner" target="_blank" rel="noopener noreferrer">${T2('Watch tutorial')} <i data-icon="external-link"></i></a>
    </div>
    <div class="ap-toolbar">
      <div class="search-wrap ap-search"><span class="search-icon"><i data-icon="search"></i></span><input type="search" class="srch ap-srch" placeholder="${T2('Search')}"></div>
      <div class="ap-toolbar-right">
        <div class="ap-export-wrap">
          <button class="btn btn-secondary ap-export" type="button"><i data-icon="download"></i> ${T2('Export')} <i data-icon="chevron-down"></i></button>
          <div class="menu ap-export-menu" hidden>
            <div class="menu-item ap-export-opt"><span class="menu-item-title">${T2('Export as PDF')}</span></div>
            <div class="menu-item ap-export-opt"><span class="menu-item-title">${T2('Export as Excel')}</span></div>
          </div>
        </div>
        <button class="btn btn-primary ap-custom" type="button"><i data-icon="plus"></i> ${T2('Custom pin')}</button>
      </div>
    </div>
    <div class="ap-table">
      <div class="ap-thead">
        <span class="ap-th ap-th-name">${T2('Topic')}</span>
        <button class="ap-th ap-sort" data-col="score" type="button">${T2('Score')} <i data-icon="chevron-down"></i></button>
        <button class="ap-th ap-sort" data-col="goal" type="button">${T2('Goal')} <i data-icon="chevron-down"></i></button>
        <button class="ap-th ap-sort" data-col="progress" type="button">${T2('Action progress')} <i data-icon="chevron-down"></i></button>
        <span></span>
      </div>
      <div class="ap-tbody">${rows.map(apRowHTML).join('')}</div>
    </div>
  </div>`;
}

/* Action Planner side panel — reuses the shared Actions tab content (goal, description, to-do list). */
function actionPanel() {
  return `
<div class="overlay is-right" id="app-overlay" hidden>
  <div class="sidepanel" role="dialog" aria-modal="true" aria-labelledby="app-title">
    <div class="sp-header">
      <div class="sp-toolbar"><span class="app-eyebrow" id="app-eyebrow" hidden></span><div class="sp-actions"><i data-icon="cross" id="app-close" role="button" tabindex="0" aria-label="Close"></i></div></div>
      <div class="sp-heading"><h2 class="sp-title" id="app-title">Action</h2></div>
    </div>
    <div class="sp-body">
      ${actionsPanelInner()}
    </div>
  </div>
</div>`;
}

/* Per-question side panel (opens from a Scores row) — same look as the engagement panel */
function scorePanel() {
  return `
<div class="overlay is-right" id="scp-overlay" hidden>
  <div class="sidepanel" role="dialog" aria-modal="true" aria-labelledby="scp-title">
    <div class="sp-header">
      <div class="sp-toolbar"><div class="sp-actions"><i data-icon="cross" id="scp-close" role="button" tabindex="0" aria-label="Close"></i></div></div>
      <div class="sp-heading"><h2 class="sp-title" id="scp-title">Question</h2></div>
      <div class="sp-tabs engp-tabs">
        <a class="sp-tab is-active" data-scptab="insights"><i data-icon="category"></i> Insights</a>
        <a class="sp-tab" data-scptab="tips"><i data-icon="lightbulb"></i> Tips &amp; Best practices</a>
        <a class="sp-tab" data-scptab="actions"><i data-icon="target"></i> Actions <span class="act-count engp-tab-count" hidden>0</span></a>
      </div>
    </div>
    <div class="sp-body">
      <div class="scp-tabpanel" data-scptab="insights">
        <div class="engp-section">
          <h3 class="engp-section-title">Distribution of answers</h3>
          <p>Knowing the distribution of answers can help you understand the sentiment behind the score. It gives you a quick look at how most respondents feel about this question.</p>
          <div class="engp-dist">
            <div class="dist-ends">
              <span class="dist-end is-dis"><i data-icon="net-promoter-score-detractor"></i> Strongly disagree</span>
              <span class="dist-end is-eng">Strongly agree <i data-icon="net-promoter-score"></i></span>
            </div>
            <div class="dist-bar" id="scp-dist-bar"></div>
            <div class="scp-agree-row">
              <div class="scp-agree-bracket" id="scp-agree-bracket">
                <span class="scp-br-cap is-left"></span>
                <span class="scp-br-lbl" id="scp-agree-lbl"></span>
                <span class="scp-br-cap is-right"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="engp-section">
          <h3 class="engp-section-title">Score comparison</h3>
          <p>See how your group scores compared to the top-level group and benchmark. If your group scores close or higher than the benchmark, that is great! If your group is falling far behind, you should look closer into this topic.</p>
          <div class="engp-cards" id="scp-cards"></div>
          <div class="engp-chart-card" style="margin-top: var(--spacing-base);">
            <div class="engp-chart-hd">Score over time <span class="engp-chart-dot"></span> <span id="scp-chart-grp"></span></div>
            <div class="engp-chart-wrap"><canvas id="scp-chart" role="img" aria-label="Score over time"></canvas></div>
          </div>
        </div>
        <div class="engp-section" id="scp-theme-section" hidden>
          <h3 class="engp-section-title">This question is part of a theme <span class="scp-theme-tag" id="scp-theme-tag"></span></h3>
          <p>Compare how your group scores on the other questions that belong to the same theme</p>
          <div id="scp-theme-rows" style="margin-top:var(--spacing-base);"></div>
        </div>
      </div>
      <div class="scp-tabpanel" data-scptab="tips" hidden>
        <div class="engp-section">
          <h3 class="engp-section-title">Tips</h3>
          <ul class="scp-tips" id="scp-tips"></ul>
        </div>
        <div class="engp-section">
          <h3 class="engp-section-title">Best practice</h3>
          <p class="scp-bp" id="scp-bp"></p>
        </div>
      </div>
      <div class="scp-tabpanel" data-scptab="actions" hidden>${actionsPanelInner()}</div>
    </div>
  </div>
</div>`;
}

/* ---------- Actions tab (shared by the side panels) ---------- */
/* Score is read-only (the question/theme score). Picking a goal enables "Add action";
   each action is a checkable to-do that drives the progress bar + the tab count. */
function actionsPanelInner() {
  return `
  <div class="act-props">
    <div class="act-row act-row-activity" hidden><span class="act-row-lbl"><i data-icon="version-history"></i> Activity</span><span class="act-row-val act-activity"></span></div>
    <div class="act-row act-row-score"><span class="act-row-lbl"><i data-icon="benchmark-up"></i> Score</span><span class="act-row-val act-score">–</span></div>
    <div class="act-row"><span class="act-row-lbl"><i data-icon="goals"></i> Goal</span>
      <div class="act-goal-wrap">
        <button class="act-goal-trigger" type="button"><span class="act-goal-current">Select a goal</span> <i data-icon="chevron-down"></i></button>
        <div class="menu act-goal-menu" hidden>
          <div class="menu-item act-goal-opt" role="option" tabindex="0" data-goal="improve"><span class="goal-chip is-improve"><i data-icon="barchart-2"></i> Improve</span></div>
          <div class="menu-item act-goal-opt" role="option" tabindex="0" data-goal="promote"><span class="goal-chip is-promote"><i data-icon="win"></i> Promote</span></div>
          <div class="menu-item act-goal-opt" role="option" tabindex="0" data-goal="contemplate"><span class="goal-chip is-contemplate"><i data-icon="message"></i> Contemplate</span></div>
          <div class="menu-divider act-goal-remove-sep"></div>
          <div class="menu-item act-goal-remove" role="button" tabindex="0"><i data-icon="trash" class="menu-item-icon"></i><span class="menu-item-title">Remove goal &amp; actions</span></div>
        </div>
      </div></div>
    <div class="act-row act-row-desc"><span class="act-row-lbl"><i data-icon="text-entry"></i> Description</span>
      <textarea class="act-desc tf-inline" rows="1" placeholder="Add a relevant description"></textarea></div>
  </div>
  <div class="act-prog-head">
    <h3 class="engp-section-title" style="margin:0;">Action progress</h3>
    <div class="tt-demo act-add-wrap"><button class="btn btn-primary act-add" disabled><i data-icon="plus"></i> Add action</button><div class="tooltip is-below">Select a goal before adding actions</div></div>
  </div>
  <div class="act-prog-bar"><div class="act-prog-fill"></div></div>
  <div class="act-list"></div>
  <div class="act-empty">
    <svg class="act-empty-ico" width="51" height="65" viewBox="0 0 51 65" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g clip-path="url(#act-empty-clip)"><path d="M0 4.05C0 1.81325 1.81325 0 4.05 0H35.4375L43.5375 8.1L50.625 15.1875V60.75C50.625 62.9868 48.8118 64.8 46.575 64.8H4.05C1.81325 64.8 0 62.9868 0 60.75V4.05Z" fill="#F5F7FA"/><path d="M35.4375 0L43.0313 7.59375L50.625 15.1875H37.4625C36.3441 15.1875 35.4375 14.2809 35.4375 13.1625V0Z" fill="#E6E9EE"/><rect x="25.3125" y="38.4746" width="17.2125" height="3.0375" rx="1.51875" fill="#D8DBE2"/><rect x="25.3125" y="25.3125" width="17.2125" height="3.0375" rx="1.51875" fill="#D8DBE2"/><rect x="9.83813" y="24.8027" width="5.41559" height="2.36247" rx="1.18123" transform="rotate(47.3691 9.83813 24.8027)" fill="#D8DBE2"/><rect x="10.3721" y="28.9355" width="10.1744" height="2.36247" rx="1.18123" transform="rotate(-45 10.3721 28.9355)" fill="#D8DBE2"/><rect x="25.3125" y="51.6367" width="17.2125" height="3.0375" rx="1.51875" fill="#D8DBE2"/><circle cx="12.6563" cy="39.9938" r="3.54375" stroke="#D8DBE2" stroke-width="2.025"/><circle cx="12.6563" cy="53.1559" r="3.54375" stroke="#D8DBE2" stroke-width="2.025"/></g><defs><clipPath id="act-empty-clip"><rect width="50.625" height="64.8" fill="white"/></clipPath></defs></svg>
    <p>Start working towards your goal<br>Plan your first action!</p>
  </div>`;
}
/* Actions state, kept PER subject (question / theme / engagement / eNPS) so each has its own goal,
   description and to-do list. Keyed by overlay.__actKey set in loadActions(). */
const ACT_STORE = {};
const actState = (key) => ACT_STORE[key] || (ACT_STORE[key] = { goal: '', desc: '', actions: [] });
const GOAL_CHIPS = {
  improve: { cls: 'is-improve', icon: 'barchart-2', label: 'Improve' },
  promote: { cls: 'is-promote', icon: 'win', label: 'Promote' },
  contemplate: { cls: 'is-contemplate', icon: 'message', label: 'Contemplate' }
};
const goalChipHTML = (key) => {
  const T2 = (s) => window.tr ? tr(s) : s;
  const g = GOAL_CHIPS[key];
  return g ? `<span class="goal-chip ${g.cls}"><i data-icon="${g.icon}"></i> ${T2(g.label)}</span>` : T2('Select a goal');
};
/* Pin → "select a goal" popover, shared by Scores rows, Theme cards and Overview cards. */
function pinPopHTML(name, scoreText) {
  return `<div class="menu sc-pin-pop" hidden>
    <div class="sc-pin-head"><span class="sc-pin-q">${name}</span> <span class="sc-pin-score">(${scoreText})</span></div>
    <div class="menu-group-lbl">Select a goal</div>
    <div class="menu-item sc-pin-goal" role="button" tabindex="0" data-goal="promote"><span class="goal-chip is-promote"><i data-icon="win"></i> Promote</span></div>
    <div class="menu-item sc-pin-goal" role="button" tabindex="0" data-goal="improve"><span class="goal-chip is-improve"><i data-icon="barchart-2"></i> Improve</span></div>
    <div class="menu-item sc-pin-goal" role="button" tabindex="0" data-goal="contemplate"><span class="goal-chip is-contemplate"><i data-icon="message"></i> Contemplate</span></div>
  </div>`;
}
/* A pin icon button + its goal popover. key/name/score travel on the wrapper for the generic wiring. */
function pinControl(key, name, scoreText, btnClass) {
  return `<div class="sc-pin-wrap" data-pin-key="${esc(key)}" data-pin-name="${esc(name)}" data-pin-score="${esc(scoreText)}">
    <div class="tt-demo"><button class="ib ${btnClass || 'ib-36 ib-tertiary'} sc-pin" aria-label="Pin: no status"><i data-icon="pin"></i></button><div class="tooltip is-above">Pin: no status</div></div>
    ${pinPopHTML(name, scoreText)}
  </div>`;
}
/* Multi-item pin: the popover first lists the card's items; clicking one shows the goal step.
   items: [{ key, name, score }]. Used by Themes, Feel-good topics, Highest/Lowest scores. */
function pinListControl(items, btnClass) {
  const T2 = (s) => window.tr ? tr(s) : s;
  const list = items.map(it => `<div class="menu-item sc-pinlist-item" role="button" tabindex="0" data-pin-key="${esc(it.key)}" data-pin-name="${esc(it.name)}" data-pin-score="${esc(it.score)}">
      <span class="menu-item-body"><span class="menu-item-title">${it.name} <span class="sc-pinlist-score">(${it.score})</span></span><span class="sc-pinlist-meta"></span></span>
      <i data-icon="pin-filled" class="sc-pinlist-pin"></i>
    </div>`).join('');
  return `<div class="sc-pin-wrap sc-pin-multi">
    <span class="sc-pin-count" hidden></span>
    <div class="tt-demo"><button class="ib ${btnClass || 'ib-36 ib-tertiary'} sc-pin" aria-label="Pin: no status"><i data-icon="pin"></i></button><div class="tooltip is-above">Pin: no status</div></div>
    <div class="menu sc-pin-pop sc-pinlist" hidden>
      <div class="sc-pinlist-view">${list}</div>
      <div class="sc-pingoal-view" hidden>
        <button class="sc-pin-back" type="button"><i data-icon="chevron-left"></i> ${T2('Back')}</button>
        <div class="sc-pin-head"><span class="sc-pin-q"></span> <span class="sc-pin-score"></span></div>
        <div class="menu-group-lbl">Select a goal</div>
        <div class="menu-item sc-pin-goal" role="button" tabindex="0" data-goal="promote"><span class="goal-chip is-promote"><i data-icon="win"></i> Promote</span></div>
        <div class="menu-item sc-pin-goal" role="button" tabindex="0" data-goal="improve"><span class="goal-chip is-improve"><i data-icon="barchart-2"></i> Improve</span></div>
        <div class="menu-item sc-pin-goal" role="button" tabindex="0" data-goal="contemplate"><span class="goal-chip is-contemplate"><i data-icon="message"></i> Contemplate</span></div>
      </div>
    </div>
  </div>`;
}
function pinThemeItems(d) { const g = groupKey(d), p = periodKey(d); return THEMES.map(t => ({ key: 'theme:' + t.name, name: t.name, score: t.v[g][p] + '%' })); }
function pinQItems(arr) { return arr.map(x => ({ key: x.q, name: x.q, score: x.s + '%' })); }
function pinTopicItems(d) { return d.topics.map(t => ({ key: 'topic:' + t.name, name: t.name, score: t.count + '×' })); }
const autoGrow = (ta) => { ta.style.height = 'auto'; ta.style.height = ta.scrollHeight + 'px'; };
const ACT_PEOPLE = [
  { name: 'Jente Insing', av: 'av-blue', initials: 'JI', email: 'jente.insing@effectory.com' },
  { name: 'Alex de Vries', av: 'av-green', initials: 'AV', email: 'alex.devries@effectory.com' },
  { name: 'Sam Bakker', av: 'av-orange', initials: 'SB', email: 'sam.bakker@effectory.com' },
  { name: 'Robin Smit', av: 'av-red', initials: 'RS', email: 'robin.smit@effectory.com' }
];
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const avatarHTML = (name, size) => {
  const p = ACT_PEOPLE.find(x => x.name === name);
  const initials = p ? p.initials : (name || '?').split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return `<span class="av ${size} ${p ? p.av : 'av-grey'}">${initials}</span>`;
};
/* ── Localized month/weekday names (dates are shown in the active language) ── */
const MONTHS_ABBR = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  nl: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
  de: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
};
const MONTHS_FULL = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  nl: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
  de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
};
const WEEKDAYS = {
  en: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  nl: ['ma', 'di', 'wo', 'do', 'vr', 'za', 'zo'],
  de: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']
};
const lang3 = () => (MONTHS_ABBR[window.LANG] ? window.LANG : 'en');
/* Translate an English "DD Mon YYYY" / "Mon YYYY" / "Mon 'YY" string to the active language. */
const locDate = (s) => {
  if (!s) return s; const L = lang3(); if (L === 'en') return s;
  return s.replace(/\b([A-Z][a-z]{2})\b/, (m) => { const i = MONTHS_ABBR.en.indexOf(m); return i === -1 ? m : MONTHS_ABBR[L][i]; });
};
const fmtActDate = (iso) => { if (!iso) return ''; const [y, m, da] = iso.split('-').map(Number); const L = lang3(); const mon = MONTHS_ABBR[L][m - 1]; return L === 'en' ? `${mon} ${da}, ${y}` : `${da} ${mon} ${y}`; };
/* "Last edited on" timestamp for the Activity row (e.g. "Jun 25, 2026, 11:47" / "25 jun 2026, 11:47") */
const fmtActivity = (ts) => { if (!ts) return ''; const d = new Date(ts); const L = lang3(); const mon = MONTHS_ABBR[L][d.getMonth()]; const hh = String(d.getHours()).padStart(2, '0'), mm = String(d.getMinutes()).padStart(2, '0'); const dp = L === 'en' ? `${mon} ${d.getDate()}, ${d.getFullYear()}` : `${d.getDate()} ${mon} ${d.getFullYear()}`; return `${dp}, ${hh}:${mm}`; };
const apTouch = (key) => { const s = actState(key); s.lastEdited = Date.now(); };
/* System notification toast (top-right) shown after pinning a score on the Scores page. */
function showSysNotif(key, name) {
  const T2 = (s) => window.tr ? tr(s) : s;
  const stack = document.getElementById('sysnotif-stack');
  if (!stack) return;
  const el = document.createElement('div');
  el.className = 'sysnotif';
  el.innerHTML = `<span class="sysnotif-title">${T2('Pinned')}: “${esc(T2(name))}”</span>`
    + `<a class="sysnotif-action link-inline" role="button" tabindex="0" data-key="${esc(key)}">${T2('Add action')}</a>`
    + `<button class="sysnotif-close" aria-label="${T2('Close')}"><i data-icon="cross"></i></button>`;
  stack.appendChild(el);
  if (window.Icons) window.Icons.render(el);
  const remove = () => el.remove();
  el.querySelector('.sysnotif-close').addEventListener('click', remove);
  setTimeout(remove, 6000);
}
/* Generic pin → goal popover wiring for every .sc-pin-wrap[data-pin-key]
   (Scores rows, Theme cards, Overview cards). Pinning sets the goal, adds it to the
   Action Planner and shows a system notification; the pin tooltip reflects the status. */
/* Update a single pin's visual (icon, colour, tooltip, aria) from its stored goal. */
function setPinTip(wrap) {
  const T2 = (s) => window.tr ? tr(s) : s;
  const pin = wrap.querySelector('.sc-pin'); if (!pin) return;
  const goal = actState(wrap.dataset.pinKey).goal;
  const txt = goal ? `Pin: ${T2(GOAL_CHIPS[goal].label)}` : T2('Pin: no status');
  pin.classList.toggle('is-pinned', !!goal);
  ['promote', 'improve', 'contemplate'].forEach(g => pin.classList.toggle('is-goal-' + g, goal === g));
  pin.setAttribute('aria-label', txt);
  const tip = wrap.querySelector('.tooltip'); if (tip) tip.textContent = txt;
  /* filled pin when pinned, outline when not */
  const ico = pin.querySelector('[data-icon]');
  if (ico) { const want = goal ? 'pin-filled' : 'pin'; if (ico.dataset.icon !== want) { ico.dataset.icon = want; delete ico.dataset.iconLoaded; ico.innerHTML = ''; if (window.Icons) window.Icons.renderOne(ico); } }
}
/* Re-sync any single-pin controls bound to `key` after the goal changed elsewhere (e.g. a side panel). */
function syncPinsForKey(key) {
  document.querySelectorAll('.sc-pin-wrap[data-pin-key]').forEach(wrap => { if (wrap.dataset.pinKey === key) setPinTip(wrap); });
}
function wirePins() {
  const T2 = (s) => window.tr ? tr(s) : s;
  const setTip = setPinTip;
  const closeAll = () => { document.querySelectorAll('.sc-pin-pop').forEach(p => p.hidden = true); document.querySelectorAll('.is-pin-open').forEach(r => r.classList.remove('is-pinning', 'is-pin-open')); document.querySelectorAll('.sc-pin.is-pressed').forEach(b => b.classList.remove('is-pressed')); };
  document.querySelectorAll('.sc-pin-wrap[data-pin-key]').forEach(wrap => {
    if (wrap.dataset.pinWired) return; wrap.dataset.pinWired = '1';
    const key = wrap.dataset.pinKey, name = wrap.dataset.pinName, scoreText = wrap.dataset.pinScore;
    const btn = wrap.querySelector('.sc-pin'), pop = wrap.querySelector('.sc-pin-pop');
    const host = wrap.closest('.sc-row') || wrap.closest('.card');   /* lift this card/row above siblings so the popover isn't covered */
    setTip(wrap);
    btn.addEventListener('click', (e) => { e.stopPropagation(); const willOpen = pop.hidden; closeAll(); pop.hidden = !willOpen; btn.classList.toggle('is-pressed', willOpen); if (host) { host.classList.toggle('is-pin-open', willOpen); if (host.classList.contains('sc-row')) host.classList.toggle('is-pinning', willOpen); } });
    pop.addEventListener('click', (e) => e.stopPropagation());
    pop.querySelectorAll('.sc-pin-goal').forEach(opt => opt.addEventListener('click', () => {
      const st = actState(key); st.goal = opt.dataset.goal; st.lastEdited = Date.now();
      if (!AP_PINNED.some(r => r.key === key)) AP_PINNED.push({ key, name, scoreText });
      AP_REMOVED.delete(key);
      closeAll(); setTip(wrap); showSysNotif(key, name);
    }));
  });
  /* Multi-item cards: pin → list of items → pick one → goal step */
  document.querySelectorAll('.sc-pin-multi').forEach(wrap => {
    if (wrap.dataset.pinWired) return; wrap.dataset.pinWired = '1';
    const btn = wrap.querySelector('.sc-pin'), pop = wrap.querySelector('.sc-pin-pop');
    const listView = pop.querySelector('.sc-pinlist-view'), goalView = pop.querySelector('.sc-pingoal-view');
    const host = wrap.closest('.sc-row') || wrap.closest('.card');
    const refresh = () => {
      let n = 0;
      wrap.querySelectorAll('.sc-pinlist-item').forEach(it => {
        const st = actState(it.dataset.pinKey), pinned = !!st.goal; if (pinned) n++;
        it.classList.toggle('is-pinned', pinned);
        const pinIco = it.querySelector('.sc-pinlist-pin'); if (pinIco) ['promote', 'improve', 'contemplate'].forEach(g => pinIco.classList.toggle('is-goal-' + g, st.goal === g));
        const meta = it.querySelector('.sc-pinlist-meta'); if (meta) meta.textContent = pinned ? `${st.actions.length} ${T2('action(s)')}` : '';
      });
      const cnt = wrap.querySelector('.sc-pin-count'); if (cnt) { cnt.textContent = n; cnt.hidden = n === 0; }
      btn.classList.toggle('is-pinned', n > 0);
      const ico = btn.querySelector('[data-icon]'); if (ico) { const want = n > 0 ? 'pin-filled' : 'pin'; if (ico.dataset.icon !== want) { ico.dataset.icon = want; delete ico.dataset.iconLoaded; ico.innerHTML = ''; if (window.Icons) window.Icons.renderOne(ico); } }
      const txt = n > 0 ? T2('{n} items with selected goal').replace('{n}', n) : T2('Pin: no status');
      btn.setAttribute('aria-label', txt);
      const tip = wrap.querySelector('.tooltip'); if (tip) tip.textContent = txt;
    };
    refresh();
    const showList = () => { listView.hidden = false; goalView.hidden = true; };
    btn.addEventListener('click', (e) => { e.stopPropagation(); const willOpen = pop.hidden; closeAll(); pop.hidden = !willOpen; showList(); refresh(); btn.classList.toggle('is-pressed', willOpen); if (host) host.classList.toggle('is-pin-open', willOpen); });
    pop.addEventListener('click', (e) => e.stopPropagation());
    listView.querySelectorAll('.sc-pinlist-item').forEach(it => it.addEventListener('click', () => {
      pop.dataset.curKey = it.dataset.pinKey; pop.dataset.curName = it.dataset.pinName; pop.dataset.curScore = it.dataset.pinScore;
      goalView.querySelector('.sc-pin-q').textContent = T2(it.dataset.pinName);
      goalView.querySelector('.sc-pin-score').textContent = `(${it.dataset.pinScore})`;
      listView.hidden = true; goalView.hidden = false;
    }));
    pop.querySelector('.sc-pin-back')?.addEventListener('click', showList);
    goalView.querySelectorAll('.sc-pin-goal').forEach(opt => opt.addEventListener('click', () => {
      const key = pop.dataset.curKey, name = pop.dataset.curName;
      const st = actState(key); st.goal = opt.dataset.goal; st.lastEdited = Date.now();
      if (!AP_PINNED.some(r => r.key === key)) AP_PINNED.push({ key, name, scoreText: pop.dataset.curScore });
      AP_REMOVED.delete(key);
      closeAll(); refresh(); showSysNotif(key, name);
    }));
  });
  document.addEventListener('click', closeAll);
}
const isoOf = (y, m, d) => `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
/* Design-system calendar (.dp) for one month */
function dpMonthHTML(year, month, selIso) {
  const L = lang3();
  const monNames = MONTHS_FULL[L];
  const wdays = WEEKDAYS[L];
  const startWd = (new Date(year, month, 1).getDay() + 6) % 7;
  const dim = new Date(year, month + 1, 0).getDate();
  const dimPrev = new Date(year, month, 0).getDate();
  const t = new Date(); const todayIso = isoOf(t.getFullYear(), t.getMonth(), t.getDate());
  const cells = [];
  for (let i = 0; i < startWd; i++) cells.push({ d: dimPrev - startWd + 1 + i, other: true });
  for (let d = 1; d <= dim; d++) cells.push({ d, iso: isoOf(year, month, d) });
  while (cells.length % 7 !== 0) cells.push({ d: cells.length - (startWd + dim) + 1, other: true });
  const days = cells.map(c => `<div class="dp-day${c.other ? ' is-other-month' : ''}${c.iso === selIso ? ' is-selected' : ''}${c.iso === todayIso ? ' is-today' : ''}"${c.iso ? ` data-iso="${c.iso}"` : ''}>${c.d}</div>`).join('');
  return `<div class="dp"><div class="dp-body">
    <div class="dp-header"><div class="dp-month-group"><span class="dp-month-label">${monNames[month][0].toUpperCase() + monNames[month].slice(1)} ${year}</span></div>
      <div class="dp-nav"><button class="dp-nav-btn dp-prev" type="button" data-y="${year}" data-m="${month}"><i data-icon="chevron-left"></i></button><button class="dp-nav-btn dp-next" type="button" data-y="${year}" data-m="${month}"><i data-icon="chevron-right"></i></button></div></div>
    <div class="dp-weekdays">${wdays.map(w => `<div class="dp-wday">${w}</div>`).join('')}</div>
    <div class="dp-grid">${days}</div></div></div>`;
}
function renderActList(overlay) {
  const T2 = (s) => window.tr ? tr(s) : s;
  const st = actState(overlay.__actKey);
  const list = overlay.querySelector('.act-list');
  list.innerHTML = st.actions.map((a, i) => `
    <div class="act-item${a.done ? ' is-done' : ''}">
      <span class="cb-wrap"><input type="checkbox" class="cb act-item-cb" data-i="${i}"${a.done ? ' checked' : ''} aria-label="Mark done"></span>
      <div class="act-item-main">
        <input type="text" class="tf-inline act-item-input" data-i="${i}" value="${esc(a.text)}" placeholder="${T2('What needs to be done?')}">
        <div class="act-item-controls">
          <div class="act-item-deadline-wrap">
            <span class="act-item-sel-trigger${a.deadline ? ' tt-demo' : ''}">
              <button class="sel-btn sel-btn-inline act-item-deadline${a.deadline ? ' is-filled' : ''}" type="button" data-i="${i}"><i data-icon="Clock"></i><span class="sel-btn-value">${a.deadline ? fmtActDate(a.deadline) : T2('Pick due date')}</span></button>
              ${a.deadline ? `<div class="tooltip is-above">${T2('Due date')}</div>` : ''}
            </span>
            ${a.deadline ? `<span class="tt-demo"><button class="ib ib-24 ib-tertiary act-item-deadline-clear" type="button" data-i="${i}" aria-label="${T2('Remove due date')}"><i data-icon="cross"></i></button><div class="tooltip is-above">${T2('Remove due date')}</div></span>` : ''}
            <div class="act-item-dp" hidden></div>
          </div>
          <div class="act-item-assign-wrap">
            <span class="act-item-sel-trigger${a.assignee ? ' tt-demo' : ''}">
              <button class="sel-btn sel-btn-inline act-item-assign${a.assignee ? ' is-filled' : ''}" type="button" data-i="${i}">${a.assignee ? `${avatarHTML(a.assignee, 'av-24')}<span class="sel-btn-value">${esc(a.assignee)}</span>` : `<i data-icon="user"></i><span class="sel-btn-value">${T2('Assign someone')}</span>`}</button>
              ${a.assignee ? `<div class="tooltip is-above">${T2('Assigned person')}</div>` : ''}
            </span>
            ${a.assignee ? `<span class="tt-demo"><button class="ib ib-24 ib-tertiary act-item-assign-clear" type="button" data-i="${i}" aria-label="${T2('Remove assignee')}"><i data-icon="cross"></i></button><div class="tooltip is-above">${T2('Remove assignee')}</div></span>` : ''}
            <div class="menu act-item-assign-menu" hidden>${assigneeOptionsHTML(a.assignee)}</div>
          </div>
        </div>
      </div>
      <div class="act-item-more-wrap">
        <button class="ib ib-36 ib-tertiary act-item-more" type="button" aria-label="More"><i data-icon="more-vertical"></i></button>
        <div class="menu act-item-menu" hidden><div class="menu-item act-item-del" role="button" data-i="${i}"><i data-icon="trash" class="menu-item-icon"></i><span class="menu-item-title">${T2('Remove action')}</span></div></div>
      </div>
    </div>`).join('');
  if (window.Icons) window.Icons.render(list);
  const done = st.actions.filter(a => a.done).length;
  overlay.querySelector('.act-prog-fill').style.width = st.actions.length ? (done / st.actions.length * 100) + '%' : '0';
  const badge = overlay.querySelector('.act-count');
  if (badge) { badge.textContent = st.actions.length; badge.hidden = st.actions.length === 0; }
  const empty = overlay.querySelector('.act-empty');
  if (empty) empty.hidden = st.actions.length > 0;
}
function assigneeOptionsHTML(selected) {
  const T2 = (s) => window.tr ? tr(s) : s;
  return ACT_PEOPLE.map(p => `<div class="menu-item act-item-assign-opt${p.name === selected ? ' is-selected' : ''}" role="option" aria-selected="${p.name === selected}" data-name="${esc(p.name)}"><span class="av av-32 ${p.av}">${p.initials}</span><div class="menu-item-body"><span class="menu-item-title">${esc(p.name)}</span><span class="menu-item-sub">${esc(p.email)}</span></div>${p.name === selected ? `<i data-icon="check" class="menu-item-check"></i>` : ''}</div>`).join('');
}
function closeActPopups(overlay) { overlay.querySelectorAll('.act-item-dp, .act-item-assign-menu, .act-item-menu').forEach(x => { x.hidden = true; }); }
/* Point a panel's Actions tab at a subject: restore its state + set the score. */
function loadActions(overlay, key, scoreText) {
  if (!overlay) return;
  overlay.__actKey = key;
  const st = actState(key);
  const T2 = (s) => window.tr ? tr(s) : s;
  const act = overlay.querySelector('.act-row-activity');
  if (act) { if (st.lastEdited) { act.hidden = false; act.querySelector('.act-activity').textContent = T2('Last edited on {date}').replace('{date}', fmtActivity(st.lastEdited)); } else { act.hidden = true; } }
  const sc = overlay.querySelector('.act-score'); if (sc) sc.textContent = scoreText;
  const cur = overlay.querySelector('.act-goal-current'); if (cur) { cur.innerHTML = goalChipHTML(st.goal); if (window.Icons) window.Icons.render(cur); }
  const menu = overlay.querySelector('.act-goal-menu'); if (menu) { menu.hidden = true; menu.classList.toggle('has-goal', !!st.goal); }
  overlay.querySelectorAll('.act-goal-opt').forEach(o => o.classList.toggle('is-selected', o.dataset.goal === st.goal));
  const desc = overlay.querySelector('.act-desc'); if (desc) { desc.value = st.desc; autoGrow(desc); }
  const addBtn = overlay.querySelector('.act-add'); if (addBtn) { addBtn.disabled = !st.goal; addBtn.toggleAttribute('data-has-goal', !!st.goal); }
  renderActList(overlay);
}
function wireActions(overlay) {
  if (!overlay || overlay.dataset.actWired) return;
  const trigger = overlay.querySelector('.act-goal-trigger');
  const menu = overlay.querySelector('.act-goal-menu');
  const desc = overlay.querySelector('.act-desc');
  const addBtn = overlay.querySelector('.act-add');
  const list = overlay.querySelector('.act-list');
  if (!trigger || !addBtn || !list) return;
  overlay.dataset.actWired = '1';
  /* custom goal dropdown (Improve / Promote / Contemplate chips) */
  trigger.addEventListener('click', (e) => { e.stopPropagation(); menu.hidden = !menu.hidden; });
  menu.addEventListener('click', (e) => e.stopPropagation());
  document.addEventListener('click', () => { menu.hidden = true; });
  menu.querySelectorAll('.act-goal-opt').forEach(opt => opt.addEventListener('click', () => {
    actState(overlay.__actKey).goal = opt.dataset.goal; apTouch(overlay.__actKey);
    const cur = overlay.querySelector('.act-goal-current'); cur.innerHTML = goalChipHTML(opt.dataset.goal); if (window.Icons) window.Icons.render(cur);
    menu.querySelectorAll('.act-goal-opt').forEach(o => o.classList.toggle('is-selected', o === opt));
    menu.classList.add('has-goal');
    addBtn.disabled = false; addBtn.setAttribute('data-has-goal', ''); menu.hidden = true;
    syncPinsForKey(overlay.__actKey);   /* reflect the goal on the matching card pin */
  }));
  const removeItem = overlay.querySelector('.act-goal-remove');
  if (removeItem) removeItem.addEventListener('click', () => { menu.hidden = true; openRemoveDialog(overlay); });
  desc.addEventListener('input', () => { actState(overlay.__actKey).desc = desc.value; apTouch(overlay.__actKey); autoGrow(desc); });
  /* Add action → append a blank inline row and focus it (auto-saves, no editor) */
  addBtn.addEventListener('click', () => {
    if (addBtn.disabled) return;
    actState(overlay.__actKey).actions.push({ text: '', done: false, deadline: '', assignee: '' }); apTouch(overlay.__actKey);
    renderActList(overlay);
    const last = list.querySelector('.act-item:last-child .act-item-input'); if (last) last.focus();
  });
  /* inline editing — everything auto-saves to state */
  list.addEventListener('input', (e) => { const ti = e.target.closest('.act-item-input'); if (ti) { actState(overlay.__actKey).actions[+ti.dataset.i].text = ti.value; apTouch(overlay.__actKey); } });
  list.addEventListener('change', (e) => { const cb = e.target.closest('.act-item-cb'); if (cb) { actState(overlay.__actKey).actions[+cb.dataset.i].done = cb.checked; apTouch(overlay.__actKey); renderActList(overlay); } });
  list.addEventListener('click', (e) => {
    const st = actState(overlay.__actKey);
    const dClear = e.target.closest('.act-item-deadline-clear');
    if (dClear) { e.stopPropagation(); st.actions[+dClear.dataset.i].deadline = null; apTouch(overlay.__actKey); renderActList(overlay); return; }
    const aClear = e.target.closest('.act-item-assign-clear');
    if (aClear) { e.stopPropagation(); st.actions[+aClear.dataset.i].assignee = ''; apTouch(overlay.__actKey); renderActList(overlay); return; }
    const dBtn = e.target.closest('.act-item-deadline');
    if (dBtn) {
      e.stopPropagation();
      const pop = dBtn.closest('.act-item-deadline-wrap').querySelector('.act-item-dp');
      const willOpen = pop.hidden; closeActPopups(overlay);
      if (willOpen) { const i = +dBtn.dataset.i, iso = st.actions[i].deadline; const t = new Date(); const y = iso ? +iso.slice(0, 4) : t.getFullYear(), m = iso ? +iso.slice(5, 7) - 1 : t.getMonth(); pop.dataset.i = i; pop.innerHTML = dpMonthHTML(y, m, iso); if (window.Icons) window.Icons.render(pop); pop.hidden = false; }
      return;
    }
    const navBtn = e.target.closest('.dp-prev, .dp-next');
    if (navBtn) { e.stopPropagation(); let y = +navBtn.dataset.y, m = +navBtn.dataset.m; m += navBtn.classList.contains('dp-prev') ? -1 : 1; if (m < 0) { m = 11; y--; } if (m > 11) { m = 0; y++; } const pop = navBtn.closest('.act-item-dp'); pop.innerHTML = dpMonthHTML(y, m, st.actions[+pop.dataset.i].deadline); if (window.Icons) window.Icons.render(pop); return; }
    const day = e.target.closest('.dp-day[data-iso]');
    if (day) { e.stopPropagation(); const pop = day.closest('.act-item-dp'); st.actions[+pop.dataset.i].deadline = day.dataset.iso; apTouch(overlay.__actKey); renderActList(overlay); return; }
    const aBtn = e.target.closest('.act-item-assign');
    if (aBtn) { e.stopPropagation(); const m = aBtn.closest('.act-item-assign-wrap').querySelector('.act-item-assign-menu'); const willOpen = m.hidden; closeActPopups(overlay); m.hidden = !willOpen; return; }
    const opt = e.target.closest('.act-item-assign-opt');
    if (opt) { e.stopPropagation(); const i = +opt.closest('.act-item').querySelector('.act-item-assign').dataset.i; st.actions[i].assignee = opt.dataset.name; apTouch(overlay.__actKey); renderActList(overlay); return; }
    const more = e.target.closest('.act-item-more');
    if (more) { e.stopPropagation(); const m = more.closest('.act-item-more-wrap').querySelector('.act-item-menu'); const willOpen = m.hidden; closeActPopups(overlay); m.hidden = !willOpen; return; }
    const del = e.target.closest('.act-item-del');
    if (del) { st.actions.splice(+del.dataset.i, 1); apTouch(overlay.__actKey); renderActList(overlay); }
  });
  document.addEventListener('click', () => closeActPopups(overlay));
}
/* Generic Insights/Actions tab switching for a side panel (uses .sp-tab[data-scptab] + .scp-tabpanel). */
function wirePanelTabs(overlay) {
  if (!overlay || overlay.dataset.tabsWired) return;
  overlay.dataset.tabsWired = '1';
  overlay.querySelectorAll('.sp-tab[data-scptab]').forEach(tab => {
    tab.addEventListener('click', () => {
      const t = tab.dataset.scptab;
      overlay.querySelectorAll('.sp-tab').forEach(x => x.classList.toggle('is-active', x === tab));
      overlay.querySelectorAll('.scp-tabpanel').forEach(pn => { pn.hidden = pn.dataset.scptab !== t; });
    });
  });
}
function resetPanelTabs(overlay) {
  if (!overlay) return;
  overlay.querySelectorAll('.sp-tab[data-scptab]').forEach(t => t.classList.toggle('is-active', t.dataset.scptab === 'insights'));
  overlay.querySelectorAll('.scp-tabpanel').forEach(pn => { pn.hidden = pn.dataset.scptab !== 'insights'; });
}
/* Confirmation dialog shown before clearing a subject's goal + actions */
function actRemoveDialog() {
  return `
<div class="overlay" id="act-remove-dialog" hidden>
  <div class="dialog" role="dialog" aria-modal="true" aria-labelledby="act-rm-title">
    <button class="dialog-close" id="act-rm-close" aria-label="Close"><i data-icon="cross"></i></button>
    <div class="dialog-header is-sm">
      <h3 class="dialog-title" id="act-rm-title">Remove goal</h3>
      <p class="dialog-subtitle">Are you sure you want to remove this goal? All actions attached to it will be deleted.</p>
    </div>
    <div class="dialog-body act-rm-body">
      <label class="act-rm-skip"><span class="cb-wrap"><input type="checkbox" class="cb" id="act-rm-skip"></span> Don't show this message again</label>
    </div>
    <div class="dialog-footer"><button class="btn btn-secondary" id="act-rm-cancel">Cancel</button><button class="btn btn-danger" id="act-rm-confirm">Remove</button></div>
  </div>
</div>`;
}
let actRemoveTarget = null;
let actSkipRemoveConfirm = false;
function actClearGoal(overlay) {
  ACT_STORE[overlay.__actKey] = { goal: '', desc: '', actions: [] };
  loadActions(overlay, overlay.__actKey, overlay.querySelector('.act-score').textContent);
  syncPinsForKey(overlay.__actKey);   /* reset the matching card pin when the goal is removed */
}
function openRemoveDialog(overlay) {
  if (actSkipRemoveConfirm) { actClearGoal(overlay); return; }
  actRemoveTarget = overlay;
  const dlg = document.getElementById('act-remove-dialog'); if (dlg) dlg.hidden = false;
}
function wireActRemoveDialog() {
  const dlg = document.getElementById('act-remove-dialog');
  if (!dlg || dlg.dataset.wired) return;
  dlg.dataset.wired = '1';
  const close = () => { dlg.hidden = true; };
  document.getElementById('act-rm-close').addEventListener('click', close);
  document.getElementById('act-rm-cancel').addEventListener('click', close);
  dlg.addEventListener('click', (e) => { if (e.target === dlg) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !dlg.hidden) close(); });
  document.getElementById('act-rm-confirm').addEventListener('click', () => {
    if (document.getElementById('act-rm-skip').checked) actSkipRemoveConfirm = true;
    if (actRemoveTarget) actClearGoal(actRemoveTarget);
    close();
  });
}

/* ---------- Scores (tab) ---------- */
/* All survey questions grouped by theme, with the group score, the Effectory Index
   (external benchmark) and the previous-survey score. Illustrative data. */
/* Single source of truth: per question a score for each group (team-it / novanta) and
   period (before = Q2 / after = Q3), plus a fixed benchmark (Effectory Index). Everything
   else is derived so the same number shows everywhere:
   - group score = v[group][period]
   - Previous survey = the previous period's value (Q3 → Q2; Q2 has none → "–")
   - Organization score = the Novanta-wide value (v.novanta[period])
   - Benchmark = bench
   Current (Q3) values match the Focus View cards/lowest-highest scores for the same question. */
const SCORES_GROUPS = [
  { theme: 'Work enjoyment', rows: [
    { q: 'I enjoy doing my work / tasks', bench: 71, v: { 'team-it': { before: 60, after: 72 }, 'novanta': { before: 66, after: 68 } } }
  ] },
  { theme: 'Work performance', rows: [
    { q: 'I know what results are expected of me at work', bench: 74, v: { 'team-it': { before: 43, after: 73 }, 'novanta': { before: 61, after: 72 } } },
    { q: 'My skills and abilities fit in well with my job', bench: 75, v: { 'team-it': { before: 54, after: 71 }, 'novanta': { before: 60, after: 66 } } }
  ] },
  { theme: 'Work enablement', rows: [
    { q: 'I am provided with good work resources', bench: 73, v: { 'team-it': { before: 52, after: 71 }, 'novanta': { before: 64, after: 71 } } },
    { q: 'Important information is readily accessible for me', bench: 72, v: { 'team-it': { before: 63, after: 68 }, 'novanta': { before: 63, after: 70 } } }
  ] },
  { theme: 'Loyalty', rows: [
    { q: 'I would recommend my team as a good place to work', bench: 5.6, scale: '10', v: { 'team-it': { before: 6.4, after: 7.1 }, 'novanta': { before: 6.6, after: 7.3 } } },
    { q: 'I see myself working here in two years', bench: 6.6, scale: '10', v: { 'team-it': { before: 5.9, after: 6.4 }, 'novanta': { before: 6.3, after: 6.8 } } }
  ] },
  { theme: 'Wellbeing and workload', rows: [
    { q: 'Doing my work gives me energy', bench: 70, v: { 'team-it': { before: 51, after: 68 }, 'novanta': { before: 66, after: 69 } } },
    { q: 'I am able to maintain a good balance between working and relaxing', bench: 69, v: { 'team-it': { before: 60, after: 70 }, 'novanta': { before: 58, after: 64 } } }
  ] },
  { theme: 'Team collaboration and performance', rows: [
    { q: 'I feel comfortable within the team', bench: 80, v: { 'team-it': { before: 95, after: 95 }, 'novanta': { before: 90, after: 92 } } },
    { q: 'Our team trusts one another', bench: 82, v: { 'team-it': { before: 88, after: 92 }, 'novanta': { before: 87, after: 89 } } },
    { q: 'During a team meeting, everyone has a fair chance to speak up', bench: 84, v: { 'team-it': { before: 84, after: 90 }, 'novanta': { before: 85, after: 88 } } }
  ] }
];
const groupKey = (d) => /Novanta/.test(d.groupName) ? 'novanta' : 'team-it';
const periodKey = (d) => /Q3/.test(d.surveyName) ? 'after' : 'before';

/* Segments (demographic crossings) the user can compare by. Age is the interactive one;
   selecting it adds a column per category to the Scores table. */
const AGE_CATS = [
  { key: 'u25', label: 'Younger than 25 years', n: 12, delta: -4 },
  { key: '25-29', label: '25 - 29 years', n: 34, delta: -1 },
  { key: '30-34', label: '30 - 34 years', n: 55, delta: -7 },
  { key: '35-39', label: '35 - 39 years', n: 40, delta: 7 },
  { key: '40-44', label: '40 - 44 years', n: 15, delta: 6 },
  { key: '45+', label: '45+ years', n: 15, delta: 1 }
];
const SEGMENTS = [
  { key: 'age', name: 'Age', cats: AGE_CATS },
  { key: 'los', name: 'Length of Service', count: 6 },
  { key: 'loc', name: 'Location', count: 3 },
  { key: 'gender', name: 'Gender', count: 2 }
];
const ORG_LABEL = 'Novanta B.V.';

function scoresFor(group, period) {
  return SCORES_GROUPS.map(g => ({
    theme: g.theme,
    rows: g.rows.map(r => {
      const s = r.v[group][period];
      const scale = r.scale || '%';
      const mx = scale === '10' ? 10 : 100, u = scale === '10' ? 0.1 : 1;
      const age = {};
      AGE_CATS.forEach(c => { age[c.key] = (c.hidden || s == null) ? null : Math.max(0, Math.min(mx, Math.round((s + c.delta * u) * 10) / 10)); });
      return {
        q: r.q, scale: r.scale,
        s, idx: r.bench,
        prev: period === 'after' ? r.v[group].before : null,
        org: r.v.novanta[period],
        age
      };
    })
  }));
}

/* Which questions belong to a theme — shown in the per-question side panel (per-variant
   scores, consistent with the Scores table). Questions not listed are not part of a theme. */
const PANEL_THEMES = {
  'Engagement': [
    { q: 'Doing my work gives me energy', v: { 'team-it': { before: 51, after: 68 }, 'novanta': { before: 66, after: 69 } } },
    { q: 'I enjoy doing my work / tasks', v: { 'team-it': { before: 60, after: 72 }, 'novanta': { before: 66, after: 68 } } },
    { q: 'I am proud to work at Novanta B.V.', v: { 'team-it': { before: 90, after: 100 }, 'novanta': { before: 88, after: 95 } } },
    { q: 'I feel that I fit in at Effectory', v: { 'team-it': { before: 74, after: 78 }, 'novanta': { before: 80, after: 82 } } }
  ]
};
const QUESTION_THEME = {};
Object.keys(PANEL_THEMES).forEach(th => PANEL_THEMES[th].forEach(x => { QUESTION_THEME[x.q] = th; }));

/* Tips & Best practices per question — shown in the question side panel's second tab. */
const TIPS = {
  "I enjoy doing my work / tasks": {
    "tips": {
      "en": [
        "Make sure your team members’ experience is a match for their job duties and preferences. Take the actions needed when one of your team members experiences a mismatch, for example, spend a little more time with the team member, provide the team member with more help, or provide a training. In some situations, you might need to look for a more suitable position (inside or outside of the organization).",
        "Get to know your colleagues and make sure that they are continuing to develop their skills. It might be time to offer them a bigger challenge, a change in position or work tasks, or to set them on a path towards a promotion.",
        "Talk with your colleagues about the biggest obstacles you all encounter in your day to day work, and try to come up with solutions. Frustration diminishes job satisfaction, so take the time to remove obstacles when you can.",
        "Talk with your colleagues about what energizes them the most on the job (this may vary from person to person). Take this into account when allocating tasks amongs your team members.",
        "Work to maintain a pleasant atmosphere in the workplace. Lay down some ground rules and invest in team building exercises (for example, a team outing, lunch, joint training course, etc.)."
      ],
      "nl": [
        "Zorg ervoor dat je teamleden ervaren dat hun taken aansluiten bij wat ze graag doen. Onderneem actie wanneer ze een discrepantie ervaren, door hem/haar extra aandacht te geven, meer te helpen of een training te geven. In sommige situaties kan het nodig zijn om op zoek te gaan naar een meer geschikte functie (binnen of buiten de organisatie).",
        "Besteed aandacht aan je collega's en zorg ervoor dat ze hun vaardigheden blijven ontwikkelen. Misschien wil je ze een grotere uitdaging bieden of een verandering van functie of taken of een weg naar een promotie uitstippelen.",
        "Bespreek met je collega's de grootste frustraties die je op je werk tegenkomt en probeer met oplossingen te komen. Frustraties nemen vaak het plezier in het werk weg, dus waarom zou je niet proactief proberen om ze te verwijderen als dat mogelijk is.",
        "Bespreek wat je collega's de grootste energieboost geeft (dit kan van persoon tot persoon verschillen). Houd hier rekening mee bij het verdelen van taken over je teamleden.",
        "Zorg ervoor dat de sfeer op de werkplek aangenaam is. Bepaal enkele spelregels en investeer in teambuilding (zoals een dagje uit, een gezamenlijke lunch, een gezamenlijke training, etc.)."
      ],
      "de": [
        "Stellen Sie sicher, dass Mitarbeiter gut zu den für sie vorgesehenen Aufgaben passen, und ergreifen Sie Maßnahmen, wenn das Ergebnis nicht so gut ausfällt, wie Sie erwartet haben. In einigen Fällen kann das Problem, dass Mitarbeiter und Aufgabe nicht perfekt zusammen passen, behoben werden, indem Sie dem Mitarbeiter zusätzliche Aufmerksamkeit, Unterstützung und/oder Schulung geben, und in anderen Fällen müssen Sie geeignete Aufgaben für ihn/sie finden (innerhalb oder außerhalb des Unternehmens).",
        "Achten Sie auf Ihre Mitarbeiter und stellen Sie sicher, dass sie sich kontinuierlich weiterentwickeln, z. B. indem Sie sie vor eine größere Herausforderung stellen, ihnen attraktivere Perspektiven bieten oder ihnen neue Aufgaben oder sogar eine andere Stelle geben.",
        "Besprechen Sie die frustrierendsten Situationen, die sich für Mitarbeiter bei der Arbeit ergeben, und fragen Sie sie, welche Lösungen sie vorschlagen. Frustration ist häufig energieraubend, doch wenn solche Situationen vermieden werden können, erhöht das sicherlich die Arbeitszufriedenheit.",
        "Besprechen Sie die Dinge, die Ihren Mitarbeitern die meiste Energie geben: Welche Aufgaben, Projekte oder Herausforderungen bereiten ihnen am meisten Freude? (Das kann von Person zu Person unterschiedlich sein.) Sobald Sie entsprechende Erkenntnisse gewonnen haben, können Sie diese bei der Verteilung von Aufgaben berücksichtigen.",
        "Stellen Sie sicher, dass das Betriebsklima gut ist. Treffen Sie klare Vereinbarungen zum Umgang miteinander, und investieren Sie in Teambuildingmaßnahmen (Tagesausflug, gemeinsames Mittagessen, gemeinsame Schulung usw.)."
      ]
    },
    "bp": {
      "en": "“At the end of each shift, our team members wrote down what kind of day they had, that is, what they enjoyed and what they didn’t. After two weeks, everyone had a good picture of what gave them energy and what sapped their energy. We now take this into account when we allocate work duties.”",
      "nl": "“Aan het eind van elke dienst schreven onze teamleden op hoe hun dag was geweest, wat ze wel en niet leuk hadden gevonden. Na twee weken had iedereen een goed beeld van wat hen persoonlijk energie gaf en wat hun veel energie kostte. Daar houden we nu rekening mee bij het toewijzen van taken.”",
      "de": "„Eine ganze Zeit lang hielt sich unser Team am Ende jeder Schicht schriftlich fest, was ihm während der Arbeit Freude bereit hatte und was nicht. Nach zwei Wochen hatte jeder ein gutes Bild davon, was ihnen Energie verleiht und was ihnen Energie raubt. Wenn wir heute die Aufgaben verteilen, berücksichtigen wir diese Aspekte.“"
    }
  },
  "I know what results are expected of me at work": {
    "tips": {
      "en": [
        "During team meetings, ask team members to share if they feel like they are hitting a wall and if they think they can take on more responsibility. Then take a look at how you can accommodate their requests.",
        "Clearly define responsibilities within your team. Who is in charge and what does that entail? Make sure no issues are left up in the air.",
        "Communicate clearly with your team. Let them know what you do and don’t need to be informed about and why. Decide as a team how communication will take place.",
        "Determine how much freedom your team members can handle (also known as task maturity) and try to push them a little further."
      ],
      "nl": [
        "Vraag teamleden om tijdens teamvergaderingen aan te geven wanneer ze het gevoel hebben dat ze tegen de muur aan lopen en wanneer ze denken dat ze meer verantwoordelijkheden op zich kunnen nemen. Bekijk vervolgens hoe je aan hun wensen kunt voldoen.",
        "Wees in je team heel duidelijk met elkaar over verantwoordelijkheden. Wie heeft de leiding en wat betekent dat? Zorg ervoor dat er geen kwesties onopgelost blijven.",
        "Laat je team als leidinggevende duidelijk weten waar je wel en niet over geïnformeerd wilt worden en waarom. Beslis samen hoe deze feedback moet plaatsvinden.",
        "Bepaal hoeveel vrijheid je teamleden aankunnen (ook wel taakvolwassenheid genoemd) en probeer ze een beetje verder te duwen."
      ],
      "de": [
        "Erörtern Sie in einer Teambesprechung, wann Mitarbeiter das Gefühl haben, an Grenzen zu stoßen, und welche zusätzlichen Verantwortlichkeiten Sie übernehmen möchten. Prüfen Sie dann, ob Sie ihre Erwartungen erfüllen können.",
        "Schaffen Sie für alle Mitarbeiter absolute Klarheit über Verantwortungsbereiche: Wer ist für was verantwortlich, und was heißt das? Stellen Sie sicher, dass keine Probleme ungelöst bleiben.",
        "Legen Sie als Vorgesetzter klar fest, über was Sie informiert werden wollen und über was nicht, und begründen Sie Ihre Entscheidung. Legen Sie dann gemeinsam mit Ihren Mitarbeitern fest, wie dieses Feedback erfolgen soll.",
        "Versuchen Sie, sich auf das Endergebnis anstatt auf das Verfahren zu konzentrieren.",
        "Seien Sie sich darüber im Klaren, mit wie viel Freiheit Ihre Mitarbeiter umgehen können (Aufgabenreife), und zielen Sie darauf ab, diese auszuweiten.",
        "Teilen Sie mit Ihrem Team so viel relevantes Wissen wie möglich. Je mehr Informationen Mitarbeiter haben, desto besser können sie selbst die richtigen Entscheidungen treffen, und das wiederum erhöht ihre Unabhängigkeit erheblich. Wissen ist Macht, aber Wissen zu teilen ist Stärke!"
      ]
    },
    "bp": {
      "en": "At the beginning of each year, we set out the goals we need to achieve as a team by the end of the year. Then we split the overarching goal into various areas/projects. Team members can sign on to a certain area/project that then becomes their responsibility. Each group gives quarterly updates of their progress, and we collectively discuss whether the progress achieved to date is sufficient. We have seen that by doing things like this, our team members feel a much greater sense of responsibility for the tasks that they perform.”",
      "nl": "“Aan het begin van elk jaar leggen we de resultaten vast die we als team aan het einde van het jaar moeten behalen. Vervolgens splitsen we dit op in verschillende gebieden/projecten. Teamleden kunnen zich opgeven voor een bepaald gebied/project waarvoor zij dan verantwoordelijk zijn. Elk kwartaal geeft elke groep een update van de resultaten en bespreken we of het tot dan toe behaalde resultaat voldoende is. We hebben gezien dat onze teamleden zich door dit soort zaken te doen veel verantwoordelijker voelen voor de taken die ze uitvoeren.”",
      "de": "„Zu Beginn eines jeden Jahres entscheiden wir in unserem Team, welche Ergebnisse wir bis Ende des Jahres erreicht haben müssen. Anschließend teilen wir diese Ergebnisse in verschiedene Bereiche/Projekte auf, sodass sich die Mitarbeiter für einen bestimmten Bereich oder ein bestimmtes Projekt melden können, für den bzw. für das sie dann verantwortlich sind. Jeder Mitarbeiter bzw. jede Gruppe gibt vierteljährlich ein Update über die Ergebnisse, und wir diskutieren gemeinsam, ob die bisher erzielten Ergebnisse ausreichend sind oder nicht. Auf diese Weise hat man ein viel stärkeres Verantwortungsgefühl für die Aufgaben, die man ausführt.“"
    }
  },
  "I am provided with good work resources": {
    "tips": {
      "en": [
        "Talk with your team about the equipment and materials that are available to you. You don’t want anyone to feel like they aren’t allowed to perform at their best because of a lack of equipment or poor-quality equipment.",
        "Talk with your team members to determine whether necessary equipment is missing or if it’s time for something to be replaced. Decide as a team which improvements or investments could have a big impact while remaining cost effective. By engaging your team in the decision making process, you can establish a sense of ownership.",
        "If certain investments are cost prohibitive or are not possible for other reasons, discuss this openly as a team to avoid frustration."
      ],
      "nl": [
        "Creëer mogelijkheden binnen je team om te discussiëren over de apparatuur en het materiaal die voor je beschikbaar zijn. Je wilt niet dat iemand het gevoel krijgt dat hij of zij wordt gehinderd om zijn of haar werk zo goed mogelijk te doen vanwege het ontbreken van of de slechte kwaliteit van apparatuur.",
        "Bespreek met je teamleden of er apparatuur ontbreekt of dat het tijd is om iets te vervangen. Beslis samen welke verbeteringen of investeringen een grote impact zouden kunnen hebben en tegelijkertijd kostenefficiënt zijn. Door hen te betrekken bij de besluitvorming kun je een gevoel creëren van zeggenschap.",
        "Als bepaalde investeringen niet kunnen worden gedaan, bespreek dit dan openlijk als team om frustratie te voorkomen."
      ],
      "de": [
        "Sprechen Sie mit Ihren Mitarbeitern über die Ausstattung, die ihnen fehlt, oder fragen Sie sie, ob es ein Gerät, das ihre Anforderungen nicht erfüllt. Entscheiden Sie gemeinsam, welche Verbesserungen oder Investitionen erforderlich sind, um den höchsten Gewinn zu erzielen. Darüber hinaus ist es wichtig, offen über die finanzielle Machbarkeit bestimmter Geräte oder Ausstattungen zu sprechen.",
        "Ermutigen Sie Mitarbeiter, darüber nachzudenken, was eine Investition in eine neue Ausstattung voraussichtlich bringen wird. Wenn sie Fakten vorlegen, die den voraussichtlichen Ertrag einer bestimmten Investition bestätigen, wird das Geld dafür häufig schneller zur Verfügung gestellt.",
        "Nehmen Sie sich Zeit, um ausführlich zu erklären, warum bestimmte Investitionen nicht vorgenommen werden können. Wenn Mitarbeiter das verstehen, wird jegliche Frustration darüber (hoffentlich) schnell verfliegen."
      ]
    },
    "bp": {
      "en": "“At a large vegetable and seed supplier, employees use bicycles to get around the fields and greenhouses. An employee survey revealed that the top complaint among employees was the poor condition of the bicycles. They were quite old and punctures in the tires had to be repaired weekly, wasting everyone’s time and energy. By investing in new bicycles, the organization was able to drastically improve employee morale while increasing overall efficiency.”",
      "nl": "“Bij een grote groente- en zaaigoedleverancier maken medewerkers gebruik van fietsen om door de velden en kassen te rijden. Uit een medewerkersonderzoek is gebleken dat de grootste frustratie onder medewerkers de slechte staat van de fietsen was. Ze waren vrij oud en hadden lekke banden die wekelijks gerepareerd moesten worden, waardoor iedereen tijd en energie verloor. Door te investeren in nieuwe fietsen kon de organisatie de moraal van haar medewerkers drastisch verbeteren en tegelijkertijd de algehele efficiëntie verhogen.”",
      "de": "„Bei Rijkzwaan, einem großen Gemüse- und Saatgutlieferanten, nutzen die Mitarbeiter Fahrräder, um zu den Feldern und Gewächshäusern zu gelangen. Die Mitarbeiterbefragung hat ergeben, dass sich die Mitarbeiter am meisten über die Fahrräder geärgert haben, weil sie ziemlich alt waren. Platte Reifen mussten jede Woche repariert werden. Es war die reinste Zeit- und Energieverschwendung. Rijkzwaan investierte in neue Fahrräder, und jetzt drehen die Mitarbeiter mit großer Freude ihre Runden und schaffen viel mehr in der gleichen Zeit.“"
    }
  }
};

function scoresView(d) {
  /* Colour a comparison cell by how the current group compares to it
     (group − comparison): higher = green, lower = red. Thresholds match the legend. */
  const T2 = (s) => window.tr ? tr(s) : s;
  /* A question is either a 0–100 percentage or a 0–10 score; the colour thresholds differ. */
  const fmt = (v, scale) => v == null ? '–' : (scale === '10' ? Number(v).toFixed(1) : scale === 'nps' ? String(Math.round(v)) : v + '%');
  const diffClass = (delta, scale) => {
    if (delta == null) return '';
    const [pos, vpos] = scale === '10' ? [0.7, 1.5] : [10, 20];
    return delta >= vpos ? ' is-vpos' : delta >= pos ? ' is-pos' : delta <= -vpos ? ' is-vneg' : delta <= -pos ? ' is-neg' : '';
  };
  const cmpTip = (delta, label, scale) => {
    const L = T2(label), r2 = Math.round(delta * 10) / 10;
    if (r2 === 0) return T2('{group} scores the same as {label}').replace('{group}', d.groupName).replace('{label}', L);
    const usePoints = scale === '10' || scale === 'nps';
    const tpl = usePoints
      ? (delta > 0 ? '{group} scores {n} points higher than {label}' : '{group} scores {n} points lower than {label}')
      : (delta > 0 ? '{group} scores {n}% point higher than {label}' : '{group} scores {n}% point lower than {label}');
    const n = scale === '10' ? Math.abs(r2).toFixed(1) : Math.abs(Math.round(r2));
    return T2(tpl).replace('{group}', d.groupName).replace('{n}', n).replace('{label}', L);
  };
  const cmpCell = (val, groupVal, label, scale, extra = '', attrs = '') => {
    if (val == null) return `<div class="sc-cell${extra}"${attrs}><span class="sc-fill">–</span></div>`;
    const delta = groupVal - val;
    return `<div class="sc-cell${diffClass(delta, scale)}${extra}"${attrs}><span class="sc-fill tt-demo">${fmt(val, scale)}<div class="tooltip is-above">${cmpTip(delta, label, scale)}</div></span></div>`;
  };
  /* age-segment cells (one per age category) — hidden until the Age segment is applied */
  const ageCells = (r) => AGE_CATS.map(c => c.hidden
    ? `<div class="sc-cell sc-grp-age" data-age="${c.key}"><span class="sc-fill sc-fill-na"><i data-icon="eye-off"></i></span></div>`
    : cmpCell(r.age ? r.age[c.key] : null, r.s, T2(c.label), r.scale || '%', ' sc-grp-age', ` data-age="${c.key}"`)).join('');
  const scoreRow = (r) => {
    const scale = r.scale || '%';
    return `
    <div class="sc-row" data-q="${r.q}" data-group="${r.s == null ? '' : r.s}" data-bench="${r.idx}" data-org="${r.org == null ? '' : r.org}"${r.prev == null ? '' : ` data-prev="${r.prev}"`}${scale === '10' ? ' data-scale="10"' : ''}${r.enps ? ' data-enps="1"' : ''}>
      <div class="sc-q"><span class="sc-q-text">${r.q}</span>
        <div class="sc-actions">
          <button class="btn btn-secondary sc-insights">Insights</button>
          ${pinControl(r.q, r.q, fmt(r.s, scale), 'ib-36 ib-secondary')}
        </div>
      </div>
      <div class="sc-cell is-current"><span class="sc-fill">${fmt(r.s, scale)}</span></div>
      ${cmpCell(r.idx, r.s, 'Effectory Index', scale, ' sc-grp-default', ' data-col="index"')}
      ${cmpCell(r.prev, r.s, 'Previous survey', scale, ' sc-grp-default', ' data-col="prev"')}
      ${cmpCell(r.org, r.s, ORG_LABEL, scale, '', ' data-col="org"')}
      ${ageCells(r)}
    </div>`;
  };
  const colHead = (icon, label, extra = '', attrs = '') => `<div class="sc-col-head${extra}"${attrs}><i data-icon="${icon}"></i><span class="sc-col-lbl tt-demo">${label}<div class="tooltip is-above">${label}</div></span></div>`;
  const group = (g) => `
    <div class="sc-group" data-open="true">
      <div class="sc-head">
        <button class="sc-head-title"><i data-icon="chevron-down" class="sc-chev"></i> ${g.theme}</button>
        ${colHead('hierarchy', d.groupName, ' is-current')}
        ${colHead('benchmark-up', 'Effectory Index', ' is-index sc-grp-default', ' data-col="index"')}
        ${colHead('rotate-backward', 'Previous survey', ' sc-grp-default', ' data-col="prev"')}
        ${colHead('hierarchy', ORG_LABEL, '', ' data-col="org"')}
        ${AGE_CATS.map(c => colHead('segments', T2(c.label), ' sc-grp-age', ` data-age="${c.key}"`)).join('')}
      </div>
      <div class="sc-rows">${g.rows.map(scoreRow).join('')}</div>
    </div>`;
  return `
  <div class="rd-intro">
    <h2 class="text-l3">Scores</h2>
    <span class="rd-bar"></span>
    <span class="rd-sub">All survey questions &amp; scores</span>
  </div>
  <div class="sc-toolbar">
    <label class="sc-search">
      <i data-icon="search"></i>
      <input type="text" class="sc-search-input" placeholder="Search" aria-label="Search questions" />
    </label>
    <button class="sc-filter-btn" type="button"><i data-icon="sort-descending"></i><span class="sc-filter-lbl">Sort by:</span><span class="sc-filter-val">Default</span></button>
    <span class="sc-tb-divider"></span>
    <div class="sc-cmp-wrap">
      <button class="sc-filter-btn" id="sc-cmp-btn" type="button" aria-haspopup="true"><i data-icon="segments"></i><span class="sc-filter-lbl">Comparisons:</span><span class="sc-filter-val" id="sc-cmp-count">${T2('{n} selected').replace('{n}', '2')}</span></button>
      <div class="sc-pop" id="sc-cmp-pop" hidden>
        <div class="sc-pop-view" data-cmpview="main">
          <div class="sc-pop-sect">
            <div class="sc-pop-lbl">Quick comparisons</div>
            <div class="sc-quick">
              <button class="sc-quick-chip is-active" type="button" data-qcol="prev"><i data-icon="rotate-backward"></i> Previous survey</button>
              <button class="sc-quick-chip is-active" type="button" data-qcol="index"><i data-icon="benchmark-up"></i> Effectory Index</button>
              ${groupKey(d) === 'novanta' ? '' : '<button class="sc-quick-chip" type="button" data-qcol="org"><i data-icon="hierarchy"></i> Organization level</button>'}
            </div>
          </div>
          <div class="sc-pop-divider"></div>
          <div class="sc-pop-sect">
            <div class="sc-pop-lbl">All comparisons</div>
            <div class="sc-pop-rows">
              <button class="sc-pop-row" type="button"><i data-icon="hierarchy"></i><span class="sc-pop-row-name">Groups</span><span class="sc-pop-row-meta">${T2('{n} applied').replace('{n}', '1')}</span><i data-icon="chevron-right" class="sc-pop-row-arrow"></i></button>
              <button class="sc-pop-row" type="button" data-cmpgoto="segments"><i data-icon="segments"></i><span class="sc-pop-row-name">Segments</span><span class="sc-pop-row-meta" id="sc-seg-applied">${T2('{n} applied').replace('{n}', '0')}</span><i data-icon="chevron-right" class="sc-pop-row-arrow"></i></button>
              <button class="sc-pop-row" type="button"><i data-icon="benchmark-up"></i><span class="sc-pop-row-name">Benchmarks</span><span class="sc-pop-row-meta">${T2('{n} applied').replace('{n}', '1')}</span><i data-icon="chevron-right" class="sc-pop-row-arrow"></i></button>
            </div>
          </div>
        </div>
        <div class="sc-pop-view" data-cmpview="segments" hidden>
          <div class="sc-pop-head">
            <button class="sc-pop-back" id="sc-cmp-back" type="button"><i data-icon="arrow-left"></i> <span class="sc-pop-back-lbl">Segments</span></button>
            <p class="sc-pop-sub">Compare results across different employee demographics</p>
          </div>
          <div class="sc-pop-divider"></div>
          <div class="sc-seg-list">
          ${SEGMENTS.map(seg => `
          <div class="sc-seg" data-seg="${seg.key}">
            <div class="sc-seg-head">
              <span class="cb-wrap"><input type="checkbox" class="cb"${seg.key === 'age' ? ' id="sc-seg-age-cb"' : ' disabled'}></span>
              <button class="sc-seg-title" type="button">
                <span class="sc-seg-info">
                  <span class="sc-seg-name">${T2(seg.name)}</span>
                  <span class="sc-seg-count">${(seg.cats ? seg.cats.length : seg.count)} ${T2('categories')}${seg.note ? ` · <span class="sc-seg-note">${T2(seg.note)}</span>` : ''}</span>
                </span>
                <i data-icon="chevron-down" class="sc-seg-chev"></i>
              </button>
            </div>
            ${seg.cats ? `<div class="sc-seg-cats"><div class="sc-seg-cats-inner"><div class="sc-seg-cats-pad">${seg.cats.map(c => `<label class="sc-seg-cat${c.hidden ? ' is-hidden' : ''}"><span class="cb-wrap"><input type="checkbox" class="cb"${seg.key === 'age' ? ` data-cat="${c.key}"` : ''}${c.hidden ? ' disabled' : ''}></span><span class="sc-seg-cat-name">${T2(c.label)}</span>${c.hidden ? '<i data-icon="eye-off" class="sc-seg-cat-hidden"></i>' : ''}<span class="sc-seg-cat-n">${c.n}</span></label>`).join('')}</div></div></div>` : ''}
          </div>`).join('')}
          </div>
        </div>
      </div>
    </div>
    <button class="sc-reset" type="button" disabled><i data-icon="rotate-backward"></i> Reset</button>
  </div>
  <div class="sc-table">${[...scoresFor(groupKey(d), periodKey(d)), {
    theme: 'eNPS', rows: [{
      q: 'How likely is it that you would recommend Novanta B.V. as an employer to others?',
      s: d.npsPromoters - d.npsDetractors, idx: d.npsBench, prev: d.npsPrev, scale: 'nps', enps: true
    }]
  }].map(group).join('')}</div>
  <div class="sc-legend">
    <span class="sc-legend-label">Legend</span>
    <span class="sc-legend-side is-higher">${(window.tr ? tr('{group} scores higher') : '{group} scores higher').replace('{group}', d.groupName)}</span>
    <div class="sc-legend-scale">
      <span class="sc-legend-sw is-vpos">+20%</span>
      <span class="sc-legend-sw is-pos">+10%</span>
      <span class="sc-legend-sw is-neutral"></span>
      <span class="sc-legend-sw is-neg">-10%</span>
      <span class="sc-legend-sw is-vneg">-20%</span>
    </div>
    <span class="sc-legend-side is-lower">Lower</span>
    <span class="sc-legend-div"></span>
    <span class="tt-demo sc-legend-sig-wrap"><a class="sc-legend-sig" href="https://support.effectory.com/hc/en-us/articles/26186577977629-results-understanding-and-interpreting-survey-scores" target="_blank" rel="noopener" aria-label="Statistical significance — learn how it works"><span class="sc-legend-star">✱</span> <span class="sc-legend-sig-text">Statistical significance</span> <i data-icon="external-link"></i></a><span class="tooltip is-above">Learn how it works</span></span>
  </div>`;
}

/* ---------- Themes (in-page view) ---------- */
/* Per theme: benchmark (Effectory Index) + the group's score per survey period (0–100). */
/* SOS themes (Effectory). Note: bench/scores/sample questions are kept from the
   previous prototype data and have not been re-mapped to each new theme. */
const THEMES = [
  { name: 'Engagement', bench: 70, v: { 'team-it': { before: 48, after: 62 }, 'novanta': { before: 60, after: 66 } },
    desc: "Engagement is the degree to which your employees are inspired and energized by their work. It also refers to their positive connection to your organization. Engaged employees experience their work as meaningful and rewarding, are proud of their jobs, and feel that they fit in at the organization. They can go the extra mile because they love what they do and where they work. Your engagement score will tell you how enthusiastic your employees are about their work and how connected they feel to your organization.",
    questions: [
      { q: 'Doing my work gives me energy', s: '64%' },
      { q: 'I am proud of the work I do', s: '67%' },
      { q: 'I feel committed to our goals', s: '58%' }
    ] },
  { name: 'Managing systems', bench: 71, v: { 'team-it': { before: 45, after: 62 }, 'novanta': { before: 55, after: 64 } },
    desc: "Well-managed systems enable employees to reach the expected performance by providing them with the necessary working conditions. This includes good working tools, effective work processes, good collaboration on different levels, and the availability of development opportunities.",
    questions: [
      { q: 'We put the customer at the centre of what we do', s: '64%' },
      { q: 'I understand how my work affects our customers', s: '68%' },
      { q: 'We act on customer feedback to improve', s: '54%' }
    ] },
  { name: 'Facilitating employees', bench: 86, v: { 'team-it': { before: 71, after: 75 }, 'novanta': { before: 78, after: 80 } },
    desc: "People management ensures employees know the company’s expectations and can apply their knowledge and skills accordingly. This includes constructive feedback and recognition to show that good performance is acknowledged and well-rewarded in the company.",
    questions: [
      { q: 'I have enough energy to do my work well', s: '78%' },
      { q: 'I can recover well after a busy period', s: '73%' },
      { q: 'My workload is manageable', s: '69%' }
    ] },
  { name: 'Leadership in change', bench: 46, v: { 'team-it': { before: 26, after: 57 }, 'novanta': { before: 50, after: 58 } },
    desc: "Leading Change should aim to let employees know what has to be changed, why, and how, and to obtain their backing for the necessary changes. For this, managers need to involve their teams in the process so that they understand and trust them. Involvement is particularly important in unsettling situations that inevitably occur during ongoing change.",
    questions: [
      { q: 'I can do my work without unnecessary obstacles', s: '55%' },
      { q: 'Our processes help me work efficiently', s: '59%' },
      { q: 'We avoid duplicate or wasted work', s: '52%' }
    ] },
  { name: 'Giving direction', bench: 85, v: { 'team-it': { before: 70, after: 76 }, 'novanta': { before: 75, after: 80 } },
    desc: "Providing Direction should aim to make employees enthusiastic about the company’s vision, familiar with and convinced by the company’s strategy, and feel treated in a fair and just manner within the overall “ecosystem” of their company. Then, the employees will also be willing to go along with strategically necessary changes.",
    questions: [
      { q: 'I am satisfied with my job', s: '78%' },
      { q: 'I am happy with my working conditions', s: '74%' },
      { q: 'I would recommend us as a place to work', s: '72%' }
    ] },
  { name: 'Employer-ship', bench: 47, v: { 'team-it': { before: 30, after: 56 }, 'novanta': { before: 48, after: 60 } },
    desc: "Organizations that work on employer excellence provide their employees with a work environment where they feel at home and accepted. Such a work environment enhances your employees' feeling of being connected with their colleagues and your organization. High scores on employer excellence mean your employees feel part of a community, appreciated, inspired, and cared for at your organization. In such an environment, your employees will perform better and remain with the organization for a longer period because they are intrinsically motivated.",
    questions: [
      { q: 'I am open to new ways of working', s: '58%' },
      { q: 'I embrace improvements in how we work', s: '55%' },
      { q: 'I support the organization through change', s: '54%' }
    ] },
];

function themesView(d) {
  const T2 = (s) => window.tr ? tr(s) : s;
  const g = groupKey(d), p = periodKey(d);
  const rows = THEMES.map(t => ({
    name: t.name, desc: t.desc,
    current: t.v[g][p],
    previous: p === 'after' ? t.v[g].before : null,   /* previous survey only exists from Q3 onward */
    benchmark: t.bench
  }));
  /* each bar carries a hover tooltip with its series label + score */
  const bar = (cls, label, val) => `<div class="cmp-bar ${cls} tt-demo" style="height:${val}%"><div class="tooltip is-above">${T2(label)}: ${val}%</div></div>`;
  const bars = (r) => `
    <div class="cmp-bargroup">
      ${bar('is-current', 'Current', r.current)}
      ${r.previous != null ? bar('is-previous', 'Previous', r.previous) : ''}
      ${bar('is-benchmark', 'Benchmark', r.benchmark)}
    </div>`;
  const card = (r, i) => `
    <div class="card card-elevated t-panel tc">
      <div class="tc-top">
        <div class="tc-head">
          <span class="tc-title text-l5">${r.name}</span>
          ${pinControl('theme:' + r.name, r.name, r.current + '%', 'ib-36 ib-tertiary icon-ghost')}
        </div>
        <p class="tc-desc">${r.desc}</p>
      </div>
      <div class="tc-scores">
        <div class="score">
          <div class="score-label"><span class="score-name">${d.groupName}</span><span class="score-val">${r.current}%</span></div>
          <div class="score-track"><div class="score-fill is-current" style="right:${100 - r.current}%"></div></div>
        </div>
      </div>
      <button class="btn btn-link tc-link" data-theme="${i}">View insights <i data-icon="chevron-right"></i></button>
    </div>`;
  return `
  <div class="rd-intro">
    <h2 class="text-l3">Themes</h2>
    <span class="rd-bar"></span>
    <span class="rd-sub">Scores per theme to know what to focus on</span>
  </div>
  <div class="card card-elevated t-panel cmp-card">
    <div class="cmp-head">
      <span class="cmp-title text-l5">Theme comparison</span>
      <div class="cmp-head-right">
        <div class="cmp-legend">
          <span class="lg-item"><span class="lg-dot is-current"></span> Current</span>
          ${p === 'after' ? '<span class="lg-item"><span class="lg-dot is-previous"></span> Previous</span>' : ''}
          <span class="lg-item"><span class="lg-dot is-benchmark"></span> Benchmark</span>
        </div>
        <div class="tt-demo"><button class="ib ib-36 ib-tertiary icon-ghost" aria-label="Select filter"><i data-icon="gear"></i></button><div class="tooltip is-above">Select filter</div></div>
      </div>
    </div>
    <div class="cmp-chart">
      <div class="cmp-area">
        <div class="cmp-yaxis"><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span></div>
        <div class="cmp-plot">
          <div class="cmp-lines"><i></i><i></i><i></i><i></i><i></i></div>
          <div class="cmp-groups">${rows.map(bars).join('')}</div>
        </div>
      </div>
      <div class="cmp-xaxis">${rows.map(r => `<span class="cmp-xlabel">${r.name}</span>`).join('')}</div>
    </div>
  </div>
  <div class="themes-section">
    <span class="themes-label text-l6">ALL THEMES</span>
    <div class="themes-grid">${rows.map(card).join('')}</div>
  </div>`;
}

/* ---------- markup template ---------- */
function shell(d) {
  const T2 = (s) => window.tr ? tr(s) : s;
  const curLang = window.LANG || 'en';
  const curTheme = (typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme')) || 'light';
  const verdictClass = 'is-' + d.efpLeadEm.toLowerCase().replace(/\s+/g, '-');
  const npsValue = d.npsPromoters - d.npsDetractors;
  /* eNPS card: small trend badge comparing the current eNPS with a reference (previous survey / benchmark) */
  const npsTrendBadge = (delta) => {
    const cls = delta > 0 ? 'is-up' : delta < 0 ? 'is-down' : 'is-flat';
    const icon = delta > 0 ? 'Trend-up' : delta < 0 ? 'Trend-down' : 'trend-stable';
    return `<span class="nps-trend ${cls}">${Math.abs(delta)} <i data-icon="${icon}"></i></span>`;
  };
  const tpMax = Math.max(...d.topics.map(t => t.count));
  const li = (arr) => arr.map(x => `<li>${x}</li>`).join('');
  /* AI-summary content is stored per language ({en,nl,de}); pick the active language (fallback en). */
  const aiL = (v) => (v && typeof v === 'object' && !Array.isArray(v)) ? (v[window.LANG] || v.en) : v;
  const fxMarker = (m) => `<div class="fx-marker ${m.variant} ${m.chip}" style="left:${m.x}%;top:${100 - m.y}%"><div class="fx-dot"></div><div class="fx-chip"><i data-icon="${m.icon}"></i>${m.label}</div></div>`;
  const quad = (m) => {
    const eng = m.x >= 50, perf = m.y >= 50;
    if (eng && perf) return { q: 'var(--border-positive)', s: 'var(--bg-accent-green-subtle)' };   // Effective
    if (!eng && perf) return { q: 'var(--border-action-hover)', s: 'var(--bg-tertiary)' };              // Detached
    if (!eng && !perf) return { q: 'var(--bg-negative)', s: 'var(--bg-accent-red-subtle)' };       // Ineffective
    return { q: 'var(--bg-highlight-base)', s: 'var(--bg-accent-yellow-subtle)' };                      // Not fully utilized
  };
  /* Icon + label-type per marker variant (Figma label logic) */
  const markerIcon = (m) => ({ 'is-current': 'group', 'is-org': 'building', 'is-previous': 'rotate-backward' }[m.variant] || 'sort-descending');
  const tipEyebrow = (m) => ({ 'is-current': 'Current group', 'is-org': 'Organization level', 'is-previous': 'Previous survey' }[m.variant] || 'Group level below');
  const efpMarker = (m) => { const c = quad(m); return `<div class="efp-marker ${m.variant}${m.y >= 50 ? ' tip-below' : ''}" style="left:${m.x}%;top:${100 - m.y}%;--q:${c.q};--qs:${c.s}">
    <div class="efp-dot"></div>
    <div class="efp-chip"><i data-icon="${markerIcon(m)}"></i>${m.label}</div>
    <div class="efp-tip">
      <span class="efp-tip-bar"></span>
      <div class="efp-tip-body">
        <div class="efp-tip-head">
          <span class="efp-tip-eyebrow"><i data-icon="${markerIcon(m)}"></i> ${tipEyebrow(m)}</span>
          <span class="efp-tip-name">${m.label}</span>
        </div>
        <div class="efp-tip-rows">
          <div class="efp-tip-row"><span>Engagement</span><b>${m.x}%</b></div>
          <div class="efp-tip-row"><span>Performance environment</span><b>${m.y}%</b></div>
        </div>
      </div>
    </div>
  </div>`; };
  /* Effectiveness panel — List view: comparison groups grouped by quadrant */
  const efpListRow = (m) => `<div class="efp-li-row">
    <span class="efp-li-icon ${m.variant}"><i data-icon="${markerIcon(m)}"></i></span>
    <div class="efp-li-text">
      <div class="efp-li-name">${m.label}</div>
      <div class="efp-li-meta"><span>Engagement</span>: ${m.x}% • <span>Performance environment</span>: ${m.y}%</div>
    </div>
  </div>`;
  const efpListView = () => {
    const quads = [
      { name: 'Effective',         cls: 'is-effective',    test: (m) => m.x >= 50 && m.y >= 50 },
      { name: 'Not fully utilized', cls: 'is-not-utilized', test: (m) => m.x >= 50 && m.y < 50 },
      { name: 'Detached',          cls: 'is-detached',     test: (m) => m.x < 50 && m.y >= 50 },
      { name: 'Ineffective',       cls: 'is-ineffective',  test: (m) => m.x < 50 && m.y < 50 }
    ];
    const current = d.efpMarkers.find((m) => m.variant === 'is-current');
    return quads.map((q) => {
      const items = d.efpMarkers.filter(q.test);
      if (!items.length) return '';
      const hasCurrent = current && q.test(current);
      return `<div class="efp-acc ${q.cls}${hasCurrent ? ' is-open' : ''}">
        <button class="efp-acc-hd" type="button">
          <span class="efp-acc-label"><span class="efp-acc-title">${q.name}</span><span class="efp-acc-count">${items.length} <span>groups</span></span></span>
          <span class="efp-acc-right">${hasCurrent ? `<span class="efp-acc-chip"><i data-icon="group"></i>${current.label}</span>` : ''}<i data-icon="chevron-down" class="efp-acc-chev"></i></span>
        </button>
        <div class="efp-acc-body">${items.map(efpListRow).join('')}</div>
      </div>`;
    }).join('');
  };
  const topicTile = (t) => `<button class="tp-tile ${t.color}"><span class="tp-tile-fill" style="width:${Math.round(t.count / tpMax * 90)}%"></span><p class="tp-tile-name">${t.name}</p><span class="tp-tile-meta"><i data-icon="users"></i>${t.count} <span>times selected</span></span><span class="tp-tile-chevron"><i data-icon="chevron-right"></i></span></button>`;
  const qsRow = (s) => `<div class="qs-row"><p class="qs-row-q">${s.q}</p><span class="qs-row-score">${s.s}%</span></div>`;
  const efpScoreRow = (r) => `<div class="efp-score-row${r.sub ? ' is-sub' : ''}"><div class="efp-score-meta"><div class="efp-score-name">${r.name}</div>${r.desc ? `<div class="efp-score-desc">${r.desc}</div>` : ''}</div><span class="efp-score-badge is-current">${r.cur}</span><span class="efp-score-badge ${r.benchClass}">${r.bench}</span></div>`;
  const focusBullet = (b) => typeof b === 'string' ? `<li>${b}</li>` : `<li><strong>${b.t}</strong> ${b.d}</li>`;
  const engpCard = (c) => `<div class="engp-card-item"><div class="engp-card-lbl">${c.lbl}</div><div class="engp-card-val">${c.val}</div></div>`;
  const themeRow = (r) => `<div class="engp-q-row"><span class="engp-q-text">${r.q}</span><span class="engp-q-score">${r.s}</span></div>`;
  const corrRow = (r, i) => `<div class="engp-q-row"><span class="engp-q-num">${i + 1}</span><span class="engp-q-text">${r.q}</span><span class="engp-q-score">${r.s}</span></div>`;
  /* eNPS panel: diverging comparison bar (value range -100..100, 0 at centre) */
  const npsBar = (r) => {
    const pos = r.val >= 0;
    const w = Math.max(Math.min(Math.abs(r.val), 100) / 2, 1.5);
    const style = pos ? `left:50%;width:${w}%` : `left:${(50 - w).toFixed(2)}%;width:${w}%`;
    /* current group stays blue; everything else is green when positive, red when negative */
    const color = r.group ? 'is-blue' : (pos ? 'is-green' : 'is-red');
    return `<div class="npsp-bar-row ${r.group ? 'is-group' : ''}">
      <span class="npsp-bar-lbl">${r.icon ? `<i data-icon="${r.icon}"></i>` : ''}${r.label}</span>
      <div class="npsp-fill ${pos ? 'is-pos' : 'is-neg'} ${color}" style="${style}"><span class="npsp-val">${r.val}</span></div>
    </div>`;
  };
  /* eNPS panel: 1..10 recommendation-scale cells (detractors 1-6, passives 7-8, promoters 9-10) */
  const npsCells = () => Array.from({ length: 10 }, (_, i) => {
    const n = i + 1, cls = n <= 6 ? 'is-det' : n <= 8 ? 'is-pas' : 'is-pro';
    return `<span class="npsp-cell ${cls}">${n}</span>`;
  }).join('');

  return `
<div class="app">

  <div class="mainnav">
    <div class="mn-portal">
      <span class="mn-logo"></span>
      <button class="mn-portal-btn"><b>Coordinator</b> <i data-icon="chevron-down" class="mn-chev"></i></button>
    </div>
    <nav class="mn-nav" aria-label="Main">
      <a class="mn-item"><i data-icon="home"></i> Home</a>
      <a class="mn-item"><i data-icon="clipboard"></i> Surveys <i data-icon="chevron-up" class="mn-chev"></i></a>
      <div class="mn-sub">
        <a class="mn-subitem">All surveys</a>
        <a class="mn-subitem is-active">Projects</a>
      </div>
      <a class="mn-item"><i data-icon="refresh"></i> 360 feedback</a>
      <a class="mn-item"><i data-icon="globe"></i> Organization <i data-icon="chevron-down" class="mn-chev"></i></a>
    </nav>
    <div class="mn-foot">
      <a class="mn-item"><i data-icon="book-open"></i> Support wiki</a>
      <div class="mn-foot-divider"></div>
      <div class="mn-user" id="mn-user-btn" role="button" tabindex="0">
        <div class="av av-36 av-blue">JI</div>
        <div class="mn-meta">
          <div class="mn-name">Jente Insing</div>
          <div class="mn-org">Novanta B.V.</div>
        </div>
        <i data-icon="chevron-down"></i>
        <div class="menu lang-pop" id="lang-pop" role="menu" hidden>
          <div class="menu-group-lbl">${T2('Language')}</div>
          ${[['en', 'English'], ['nl', 'Nederlands'], ['de', 'Deutsch']].map(([c, l]) => `<div class="menu-item${c === curLang ? ' is-selected' : ''}" role="menuitemradio" aria-checked="${c === curLang}" tabindex="0" data-lang="${c}"><span class="menu-item-title">${l}</span>${c === curLang ? '<i data-icon="check" class="menu-item-check"></i>' : ''}</div>`).join('')}
          <div class="menu-divider"></div>
          <div class="menu-group-lbl">${T2('Theme')}</div>
          ${[['light', 'sun', T2('Light')], ['dark', 'moon', T2('Dark')]].map(([t, ic, l]) => `<div class="menu-item${t === curTheme ? ' is-selected' : ''}" role="menuitemradio" aria-checked="${t === curTheme}" tabindex="0" data-theme-opt="${t}"><i data-icon="${ic}" class="menu-item-icon"></i><span class="menu-item-title">${l}</span>${t === curTheme ? '<i data-icon="check" class="menu-item-check"></i>' : ''}</div>`).join('')}
        </div>
      </div>
    </div>
  </div>

  <div class="main">

    <nav class="breadcrumb" aria-label="Breadcrumb">
      <button class="btn btn-secondary"><i data-icon="arrow-left"></i> Back</button>
      <ol class="bc-trail">
        <li><a class="bc-link" href="#">Your voice, 2023–2026</a></li>
        <li><a class="bc-link" href="#">Results</a></li>
      </ol>
    </nav>

    <div class="main-scroll">

      <div class="results-head">
        <h1 class="text-l3 results-title">${d.surveyName}</h1>
        <div class="results-filters">
          <button class="sel-btn" id="hdr-filter" type="button">
            <i data-icon="filter"></i>
            <span class="sel-btn-name">Filter</span>
            <span class="sel-btn-value">${d.groupName}</span>
          </button>
          <div class="date-range">
            <span>${locDate(d.dateFrom)}</span>
            <i data-icon="from-to" style="display:flex;width:24px;height:16px;"></i>
            <span>${locDate(d.dateTo)}</span>
          </div>
        </div>
        <div class="tabs">
          <a class="tab is-active" data-view="overview">Overview</a>
          <a class="tab" data-view="focus"><i data-icon="featured" class="tab-spark"></i> Focus View</a>
          <a class="tab" data-view="themes">Themes</a>
          <a class="tab" data-view="scores">Scores</a>
          <a class="tab">Open answers</a>
          <a class="tab">Topics &amp; Ideas</a>
          <a class="tab" data-view="reports">Reports</a>
          <a class="tab" data-view="actions">Actions</a>
        </div>
      </div>

      <div class="overview-wrap">

<div class="view" id="view-overview">

<div class="ai-summary" id="ai-summary">
  <div class="ai-head">
    <div class="ai-head-left">
      <i data-icon="featured" class="ai-spark"></i>
      <p class="ai-title">AI Summary</p>
    </div>
    <div class="ai-head-right">
      <div class="tt-demo">
        <button class="ib ib-36 ib-tertiary" aria-label="Hide summary"><i data-icon="eye-off"></i></button>
        <div class="tooltip is-below">Hide summary</div>
      </div>
      <div class="tt-demo">
        <button class="ib ib-36 ib-tertiary" aria-label="More information"><i data-icon="info"></i></button>
        <div class="tooltip is-below">More information</div>
      </div>
    </div>
  </div>
  <p class="ai-intro">${aiL(d.aiIntro)}</p>
  <div class="ai-more">
    ${aiL(d.aiMore).map(p => `<p>${p}</p>`).join('')}
    <div class="ai-sec">
      <h4 class="ai-sec-title">Strengths</h4>
      <ul class="ai-list">${li(aiL(d.aiStrengths))}</ul>
    </div>
    <div class="ai-sec">
      <h4 class="ai-sec-title">Growth Areas</h4>
      <ul class="ai-list">${li(aiL(d.aiGrowth))}</ul>
    </div>
    <div class="ai-sec">
      <h4 class="ai-sec-title">Suggested actions</h4>
      <ul class="ai-list">${li(aiL(d.aiActions))}</ul>
    </div>
    <div class="ai-foot">
      <div class="ai-feedback">
        <button class="btn btn-tertiary ai-fb"><i data-icon="up-vote"></i> This summary was helpful</button>
        <button class="btn btn-tertiary ai-fb"><i data-icon="down-vote"></i> Not really helpful</button>
      </div>
      <p class="ai-disclaimer">This AI summary may not be fully accurate&mdash;please review before making decisions. <a href="#" class="ai-learn">Learn more</a></p>
    </div>
  </div>
  <button class="ai-toggle" id="ai-toggle" aria-expanded="false">
    <span class="ai-toggle-more">Show more <i data-icon="chevron-down"></i></span>
    <span class="ai-toggle-less">Show less <i data-icon="chevron-up"></i></span>
  </button>
</div>

<div class="ov-grid">

  <div class="card fx-card">
    <div class="fx-header">
      <p class="fx-title text-l5">Effectiveness</p>
      <div class="tt-demo">
        <button class="ib ib-36 ib-tertiary" aria-label="More information"><i data-icon="info"></i></button>
        <div class="tooltip is-above">More information</div>
      </div>
    </div>
    <div class="fx-body">
      <p class="fx-axis">Performance environment</p>
      <div class="fx-matrix" id="fx-matrix">
        <div class="fx-quad is-detached">Detached</div>
        <div class="fx-quad is-effective">Effective</div>
        <div class="fx-quad is-ineffective">Ineffective</div>
        <div class="fx-quad is-not-utilized">Not fully utilized</div>
        <span class="fx-scale is-top-left">100%</span>
        <span class="fx-scale is-bottom-left">0%</span>
        <span class="fx-scale is-bottom-right">100%</span>
        ${d.fxMarkers.map(fxMarker).join('')}
      </div>
      <p class="fx-axis is-x">Engagement</p>
    </div>
  </div>

  <div class="card eng-card">
    <div class="eng-header">
      <div class="eng-title-row">
        <p class="eng-title text-l5">Engagement</p>
        <div class="eng-icons">
          ${pinControl('engagement', 'Engagement', d.engValue)}
          <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="More information"><i data-icon="info"></i></button><div class="tooltip is-above">More information</div></div>
          <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="Correlating questions"><i data-icon="correlation-positive"></i></button><div class="tooltip is-above">Correlating questions</div></div>
        </div>
      </div>
      <p class="eng-subtitle">Employees that are inspired and energized by their work.</p>
    </div>
    <div class="eng-body">
      <!-- icon-exempt: decorative wave fill -->
      <svg class="eng-wave" viewBox="0 0 336 135.5" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 135.5V0.5C0 0.5 50.5 70.8587 167.5 70.8587C284.5 70.8587 336 0 336 0V135L0 135.5Z" fill="var(--bg-info-subtle)"/>
      </svg>
      <span class="eng-value">${d.engValue}</span>
      <div class="eng-trend">${d.engTrend} <i data-icon="${d.engTrendIcon}"></i></div>
    </div>
    <div class="eng-bench">
      <div class="eng-bench-row"><span>Benchmark</span><span>${d.engBench}</span></div>
      <div class="eng-bench-track"><div class="eng-bench-fill" style="width:${d.engBenchW}%"></div></div>
    </div>
  </div>

  <div class="card nps-card">
    <div class="nps-header">
      <div class="nps-title-row">
        <p class="nps-title text-l5">Employee Net Promoter Score</p>
        <div class="nps-icons">
          ${pinControl('enps', 'eNPS', String(npsValue))}
          <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="More information"><i data-icon="info"></i></button><div class="tooltip is-above">More information</div></div>
        </div>
      </div>
      <p class="nps-desc">Shows to what extent employees would recommend your organization</p>
    </div>
    <div class="nps-graph">
      <div class="nps-donut">
        <canvas id="nps-chart" width="100" height="100" role="img" aria-label="eNPS ${npsValue}"></canvas>
        <div class="nps-donut-center">
          <span class="nps-donut-value">${npsValue}</span>
          <span class="nps-donut-label">eNPS</span>
        </div>
      </div>
      <div class="nps-stats">
        <div class="nps-stat">
          <span class="nps-stat-lbl">Previous survey</span>
          <div class="nps-stat-val-row">
            <span class="nps-stat-val">${d.npsPrev}</span>
            ${npsTrendBadge(npsValue - d.npsPrev)}
          </div>
        </div>
        <div class="nps-stat">
          <span class="nps-stat-lbl">Benchmark<span class="tt-demo nps-stat-info-wrap"><i data-icon="info" class="nps-stat-info" aria-label="External benchmark"></i><span class="tooltip is-above">External benchmark</span></span></span>
          <div class="nps-stat-val-row">
            <span class="nps-stat-val">${d.npsBench}</span>
            ${npsTrendBadge(npsValue - d.npsBench)}
          </div>
        </div>
      </div>
    </div>
    <div class="nps-rows">
      <div class="nps-row is-promoters">
        <div class="nps-row-cat"><i data-icon="net-promoter-score"></i>Promoters</div>
        <div class="nps-row-pct">${d.npsPromoters}%</div>
        <div class="nps-row-count"><span>${d.npsPromCount}</span><i data-icon="users"></i></div>
      </div>
      <div class="nps-row is-passives">
        <div class="nps-row-cat"><i data-icon="net-promoter-score-passive"></i>Passives</div>
        <div class="nps-row-pct">${d.npsPassives}%</div>
        <div class="nps-row-count"><span>${d.npsPassCount}</span><i data-icon="users"></i></div>
      </div>
      <div class="nps-row is-detractors">
        <div class="nps-row-cat"><i data-icon="net-promoter-score-detractor"></i>Detractors</div>
        <div class="nps-row-pct">${d.npsDetractors}%</div>
        <div class="nps-row-count"><span>${d.npsDetrCount}</span><i data-icon="users"></i></div>
      </div>
    </div>
  </div>

  <div class="card sw-card">
    <div class="sw-header">
      <p class="sw-title text-l5">Themes</p>
      <div class="sw-icons">
        ${pinListControl(pinThemeItems(d), 'ib-36 ib-tertiary')}
        <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="Card settings"><i data-icon="gear"></i></button><div class="tooltip is-above">Card settings</div></div>
        <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="More information"><i data-icon="info"></i></button><div class="tooltip is-above">More information</div></div>
      </div>
    </div>
    <div class="sw-graph">
      <canvas id="sw-chart" width="334" height="290" role="img" aria-label="Spiderweb of theme scores, current versus previous survey"></canvas>
    </div>
    <div class="sw-legend">
      <div class="sw-legend-item"><span class="sw-legend-dot is-current"></span>Current</div>
      <div class="sw-legend-item"><span class="sw-legend-dot is-previous"></span>Previous</div>
    </div>
  </div>

  <div class="card rr-card">
    <div class="rr-header">
      <p class="rr-title text-l5">Response rate</p>
      <div class="rr-icons">
        ${pinControl('response', 'Response rate', d.rrValue + '%')}
        <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="More information"><i data-icon="info"></i></button><div class="tooltip is-above">More information</div></div>
      </div>
    </div>
    <div class="rr-body">
      <div class="rr-gauge">
        <canvas id="rr-chart" width="136" height="136" role="img" aria-label="Response rate ${d.rrValue}%"></canvas>
        <div class="rr-gauge-value">${d.rrValue}%</div>
      </div>
      <div class="rr-participants"><b>${d.rrPartDone}</b>/${d.rrPartTotal} <span>Participants</span></div>
      <div class="rr-trend">${d.rrTrend} <i data-icon="${d.rrTrendIcon}"></i></div>
    </div>
    <div class="rr-bench">
      <div class="rr-bench-row"><span>Benchmark</span><span>${d.rrBench}%</span></div>
      <div class="rr-bench-track"><div class="rr-bench-fill" style="width:${d.rrBench}%"></div></div>
    </div>
  </div>

  <div class="kpi-stack">
    <div class="kpi-card">
      <div class="kpi-text">
        <div class="kpi-title-row">
          <p class="kpi-title text-l5">Workload</p>
          <div class="kpi-icons">
            ${pinControl('kpi:workload', 'Workload', d.kpiWorkload + '%')}
            <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="More information"><i data-icon="info"></i></button><div class="tooltip is-above">More information</div></div>
          </div>
        </div>
        <p class="kpi-desc">Employees who find their workload just right.</p>
      </div>
      <div class="kpi-gauge"><canvas id="kpi-workload" width="72" height="72" role="img" aria-label="Workload ${d.kpiWorkload}%"></canvas><div class="kpi-gauge-value">${d.kpiWorkload}%</div></div>
    </div>
    <div class="kpi-card">
      <div class="kpi-text">
        <div class="kpi-title-row">
          <p class="kpi-title text-l5">Retention</p>
          <div class="kpi-icons">
            ${pinControl('kpi:retention', 'Retention', d.kpiRetention + '%')}
            <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="More information"><i data-icon="info"></i></button><div class="tooltip is-above">More information</div></div>
          </div>
        </div>
        <p class="kpi-desc">Employees who want to stay at their current role.</p>
      </div>
      <div class="kpi-gauge"><canvas id="kpi-retention" width="72" height="72" role="img" aria-label="Retention ${d.kpiRetention}%"></canvas><div class="kpi-gauge-value">${d.kpiRetention}%</div></div>
    </div>
    <div class="kpi-card">
      <div class="kpi-text">
        <div class="kpi-title-row">
          <p class="kpi-title text-l5">Well-being</p>
          <div class="kpi-icons">
            ${pinControl('kpi:wellbeing', 'Well-being', d.kpiWellbeing + '%')}
            <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="More information"><i data-icon="info"></i></button><div class="tooltip is-above">More information</div></div>
          </div>
        </div>
        <p class="kpi-desc">How well employees can maintain a good work-life balance.</p>
      </div>
      <div class="kpi-gauge"><canvas id="kpi-wellbeing" width="72" height="72" role="img" aria-label="Well-being ${d.kpiWellbeing}%"></canvas><div class="kpi-gauge-value">${d.kpiWellbeing}%</div></div>
    </div>
  </div>

  <div class="card tp-card">
    <div class="tp-header">
      <div class="tp-title-row">
        <p class="tp-title text-l5">Feel-good topics</p>
        <div class="tp-icons">
          ${pinListControl(pinTopicItems(d), 'ib-36 ib-tertiary')}
          <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="Card settings"><i data-icon="gear"></i></button><div class="tooltip is-above">Card settings</div></div>
          <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="More information"><i data-icon="info"></i></button><div class="tooltip is-above">More information</div></div>
        </div>
      </div>
      <p class="tp-desc">What topic are you most proud of within Novanta?</p>
    </div>
    <div class="tp-list">${d.topics.map(topicTile).join('')}</div>
    <div class="tp-footer">
      <button class="btn btn-link">View Topics &amp; Ideas <i data-icon="chevron-right"></i></button>
    </div>
  </div>

  <div class="card qs-card is-high">
    <div class="qs-header">
      <img class="qs-illu" src="assets/illustrations/win-small.svg" alt="" />
      <p class="qs-title text-l5">Highest scores</p>
      <div class="qs-icons">
        ${pinListControl(pinQItems(d.highScores), 'ib-36 ib-tertiary')}
        <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="More information"><i data-icon="info"></i></button><div class="tooltip is-above">More information</div></div>
      </div>
    </div>
    <div class="qs-rows">${d.highScores.map(qsRow).join('')}</div>
  </div>

  <div class="card qs-card is-low">
    <div class="qs-header">
      <img class="qs-illu" src="assets/illustrations/improve-small.svg" alt="" />
      <p class="qs-title text-l5">Lowest scores</p>
      <div class="qs-icons">
        ${pinListControl(pinQItems(d.lowScores), 'ib-36 ib-tertiary')}
        <div class="tt-demo"><button class="ib ib-36 ib-tertiary" aria-label="More information"><i data-icon="info"></i></button><div class="tooltip is-above">More information</div></div>
      </div>
    </div>
    <div class="qs-rows">${d.lowScores.map(qsRow).join('')}</div>
  </div>

</div><!-- /ov-grid -->

</div><!-- /view-overview -->

<div class="view" id="view-focus" hidden>
${focusView(d)}
</div><!-- /view-focus -->

<div class="view" id="view-reports" hidden>
${reportsView(d)}
</div><!-- /view-reports -->

<div class="view" id="view-themes" hidden>
${themesView(d)}
</div><!-- /view-themes -->

<div class="view" id="view-scores" hidden>
${scoresView(d)}
</div><!-- /view-scores -->

<div class="view" id="view-actions" hidden>
${actionsView(d)}
</div><!-- /view-actions -->

      </div><!-- /overview-wrap -->
    </div><!-- /main-scroll -->
  </div><!-- /main -->
</div><!-- /app -->

<!-- Effectiveness side panel -->
<div class="overlay is-right" id="efp-overlay" hidden>
  <div class="sidepanel" role="dialog" aria-modal="true" aria-labelledby="efp-title">
    <div class="sp-header">
      <div class="sp-toolbar"><div class="sp-actions"><i data-icon="cross" id="efp-close" role="button" tabindex="0" aria-label="Close"></i></div></div>
      <div class="sp-heading">
        <h2 class="sp-title" id="efp-title">Effectiveness</h2>
        <p class="sp-subtitle">How effective is a group in reaching their goals, staying innovative and dealing with change in an ever changing organization.</p>
      </div>
      <div class="sp-tabs efp-tabs">
        <a class="sp-tab is-active"><i data-icon="category"></i> Insights</a>
        <a class="sp-tab"><i data-icon="target"></i> Actions</a>
      </div>
    </div>

    <div class="sp-body">

      <div class="efp-lead ${verdictClass}">
        <h3 class="efp-lead-title">${d.efpLeadPre}<span class="efp-lead-em">${d.efpLeadEm}<span class="fv-verdict-underline"></span></span></h3>
        <p class="efp-lead-desc">${d.efpLeadDesc}</p>
      </div>

      <div class="efp-controls">
        <div class="efp-filter-wrap">
          <button class="sel-btn" id="efp-cmp-btn" type="button">
            <span class="sel-btn-name">Comparisons:</span>
            <span class="sel-btn-value" id="efp-cmp-count">${d.efpComparisons}</span>
            <i data-icon="chevron-down"></i>
          </button>
          <div class="efp-filter" id="efp-filter" hidden>
            ${[
              ...(d.efpHasOrg !== false ? [{ variant: 'is-org', label: ORG_LABEL, icon: 'building' }] : []),
              ...(d.efpHasPrevious ? [{ variant: 'is-previous', label: 'Previous survey', icon: 'rotate-backward' }] : []),
              { variant: 'is-peer', label: 'Group Level below', icon: 'sort-descending' }
            ].map(r => `<label class="efp-filter-row">
              <span class="cb-wrap"><input type="checkbox" class="cb" data-variant="${r.variant}" checked></span>
              <span class="efp-filter-label">${r.label}</span>
              <i data-icon="${r.icon}"></i>
            </label>`).join('')}
          </div>
        </div>
        <div class="segctl">
          <button class="segctl-btn is-active" data-seg="matrix"><i data-icon="table"></i> Matrix</button>
          <button class="segctl-btn" data-seg="list"><i data-icon="list-unordered"></i> List</button>
        </div>
      </div>

      <div class="efp-view" id="efp-view-matrix">
      <div class="efp-matrix-row">
        <div class="efp-y-axis"><span>${T2('Performance environment')} →</span></div>
        <div class="efp-matrix" id="efp-matrix">
          <div class="efp-quad is-detached"><span class="efp-quad-lbl">Detached</span></div>
          <div class="efp-quad is-effective"><span class="efp-quad-lbl">Effective</span></div>
          <div class="efp-quad is-ineffective"><span class="efp-quad-lbl">Ineffective</span></div>
          <div class="efp-quad is-not-utilized"><span class="efp-quad-lbl">Not fully utilized</span></div>
          <span class="efp-scale is-tl">100%</span>
          <span class="efp-scale is-bl">0%</span>
          <span class="efp-scale is-br">100%</span>
          <div class="efp-bench-badge"><i data-icon="benchmark-up"></i> ${d.efpBench}<div class="tooltip is-above">Benchmark ${d.efpBench}</div></div>
          <div class="efp-bench-badge is-left">${d.efpBench} <i data-icon="benchmark-up"></i><div class="tooltip is-above">Benchmark ${d.efpBench}</div></div>
          ${d.efpMarkers.map(efpMarker).join('')}
        </div>
      </div>
      <p class="efp-x-axis">${T2('Engagement score')} →</p>
      </div>

      <div class="efp-view" id="efp-view-list" hidden>
        <div class="efp-bench-row">
          <span class="efp-bench-stat"><i data-icon="benchmark-up"></i> Benchmark <span>Engagement</span> ${d.engBench}</span>
          <span class="efp-bench-stat"><i data-icon="benchmark-up"></i> Benchmark <span>Performance environment</span> ${d.efpBench}</span>
        </div>
        <div class="efp-list">${efpListView()}</div>
      </div>

      <div class="efp-section">
        <h3 class="efp-section-title">Suggested focus</h3>
        <p>${d.efpFocusIntro}</p>
        <ul class="efp-focus-list">${d.efpFocusBullets.map(focusBullet).join('')}</ul>
        <p>${d.efpFocusClosing}</p>
      </div>

      <div class="efp-section">
        <h3 class="efp-section-title">Areas to focus on</h3>
        <div class="efp-scores-intro">
          <p class="efp-section-lead" style="margin:0;">The position on the graph is defined by the scores below and how they relate to the benchmark. Focus on maintaining high scores and improving low scores.</p>
          <div class="efp-score-cols">
            <span class="efp-col-icon is-group"><i data-icon="group"></i></span>
            <span class="efp-col-icon"><i data-icon="benchmark-up"></i></span>
          </div>
        </div>
        ${d.efpScores.map(efpScoreRow).join('')}
      </div>

      <div class="efp-section">
        <h3 class="efp-section-title">Graph legend</h3>
        <p class="efp-section-lead">The colors of the graph give you a visual indication of how effective the group is and what areas to focus on.</p>
        <div class="efp-legend-item"><span class="efp-legend-dot is-effective"></span><div><div class="efp-legend-name">Effective</div><div class="efp-legend-desc">Engagement can unfold its full potential thanks to the excellent performance environment. Focus on maintaining and consolidating your strengths!</div></div></div>
        <div class="efp-legend-item"><span class="efp-legend-dot is-ineffective"></span><div><div class="efp-legend-name">Ineffective</div><div class="efp-legend-desc">Focus on the continuous improvement of the performance environment, especially with issues of particular importance to engagement and performance.</div></div></div>
        <div class="efp-legend-item"><span class="efp-legend-dot is-not-utilized"></span><div><div class="efp-legend-name">Not fully utilized</div><div class="efp-legend-desc">People are engaged but struggle to perform at their best. Improve their performance environment to make the group thrive.</div></div></div>
        <div class="efp-legend-item"><span class="efp-legend-dot is-detached"></span><div><div class="efp-legend-name">Detached</div><div class="efp-legend-desc">Maintain your good performance environment and review your drivers of employee engagement for opportunities to boost it.</div></div></div>
      </div>

    </div><!-- /sp-body -->
  </div><!-- /sidepanel -->
</div><!-- /overlay -->

<!-- Engagement side panel -->
<div class="overlay is-right" id="engp-overlay" hidden>
  <div class="sidepanel" role="dialog" aria-modal="true" aria-labelledby="engp-title">
    <div class="sp-header">
      <div class="sp-toolbar"><div class="sp-actions"><i data-icon="cross" id="engp-close" role="button" tabindex="0" aria-label="Close"></i></div></div>
      <div class="sp-heading"><h2 class="sp-title" id="engp-title">Engagement</h2></div>
      <div class="sp-tabs engp-tabs">
        <a class="sp-tab is-active" data-scptab="insights"><i data-icon="category"></i> Insights</a>
        <a class="sp-tab" data-scptab="actions"><i data-icon="target"></i> Actions <span class="act-count engp-tab-count" hidden>0</span></a>
      </div>
    </div>

    <div class="sp-body">
      <div class="scp-tabpanel" data-scptab="insights">

      <div class="engp-section">
        <h3 class="engp-section-title">What does &ldquo;Engagement&rdquo; mean?</h3>
        <p>Engagement is the degree to which your employees are inspired and energized by their work. It also refers to their positive connection to your organization. Engaged employees experience their work as meaningful and rewarding, are proud of their jobs, and feel that they fit in at the organization. They can go the extra mile because they love what they do and where they work. Your engagement score will tell you how enthusiastic your employees are about their work and how connected they feel to your organization.</p>
      </div>

      <div class="engp-section">
        <h3 class="engp-section-title">Engaged employees</h3>
        <p>The percentage of participants that are Disengaged, Potentials or Engaged. Participants are categorized based on their average scores on Engagement.</p>
        <div class="engp-dist">
          <div class="dist-ends">
            <span class="dist-end is-dis"><i data-icon="net-promoter-score-detractor"></i> Disengaged</span>
            <span class="dist-end is-eng">Engaged <i data-icon="net-promoter-score"></i></span>
          </div>
          <div class="dist-bar">
            <div class="dist-seg is-dis" style="width:${d.engpDist.dis}%">${d.engpDist.dis}%</div>
            <div class="dist-seg is-pot" style="width:${d.engpDist.pot}%">${d.engpDist.pot}%</div>
            <div class="dist-seg is-eng" style="width:${d.engpDist.eng}%">${d.engpDist.eng}%</div>
          </div>
        </div>
      </div>

      <div class="engp-section">
        <h3 class="engp-section-title">What are the results?</h3>
        <p>See how your group scored on &ldquo;Engagement&rdquo; in comparison to other groups.</p>
        <div class="engp-cards">${d.engpCards.map(engpCard).join('')}</div>
        <div class="engp-chart-card" style="margin-top: var(--spacing-base);">
          <div class="engp-chart-hd">Score over time <span class="engp-chart-dot"></span> ${d.groupName}</div>
          <div class="engp-chart-wrap"><canvas id="engp-chart" role="img" aria-label="Engagement score over time for ${d.groupName}"></canvas></div>
        </div>
      </div>

      <div class="engp-section">
        <div class="engp-section-head">
          <h3 class="engp-section-title" style="margin:0;">Theme questions</h3>
          <span class="engp-grouplbl">Group score</span>
        </div>
        <div>${d.engpTheme.map(themeRow).join('')}</div>
      </div>

      <div class="engp-section">
        <h3 class="engp-section-title"><i data-icon="correlation-positive"></i> Strongly correlating questions</h3>
        <p>Respondents who score high on Engagement also score high on the following questions:</p>
        <div style="margin-top:var(--spacing-base);">${d.engpCorr.map(corrRow).join('')}</div>
      </div>

      </div><!-- /insights panel -->
      <div class="scp-tabpanel" data-scptab="actions" hidden>${actionsPanelInner()}</div>
    </div><!-- /sp-body -->
  </div><!-- /sidepanel -->
</div><!-- /overlay -->

<!-- Theme side panel (opens from a theme card's "View insights") -->
<div class="overlay is-right" id="thp-overlay" hidden>
  <div class="sidepanel" role="dialog" aria-modal="true" aria-labelledby="thp-title">
    <div class="sp-header">
      <div class="sp-toolbar"><div class="sp-actions"><i data-icon="cross" id="thp-close" role="button" tabindex="0" aria-label="Close"></i></div></div>
      <div class="sp-heading"><h2 class="sp-title" id="thp-title"></h2></div>
      <div class="sp-tabs engp-tabs">
        <a class="sp-tab is-active" data-scptab="insights"><i data-icon="category"></i> Insights</a>
        <a class="sp-tab" data-scptab="actions"><i data-icon="target"></i> Actions <span class="act-count engp-tab-count" hidden>0</span></a>
      </div>
    </div>
    <div class="sp-body">
      <div class="scp-tabpanel" data-scptab="insights">
      <div class="engp-section">
        <h3 class="engp-section-title" id="thp-mean-title"></h3>
        <p id="thp-desc"></p>
      </div>
      <div class="engp-section">
        <h3 class="engp-section-title">What are the results?</h3>
        <p id="thp-results-lead"></p>
        <div class="engp-cards" id="thp-cards"></div>
        <div class="engp-chart-card" style="margin-top: var(--spacing-base);">
          <div class="engp-chart-hd">Score over time <span class="engp-chart-dot"></span> <span id="thp-chart-grp"></span></div>
          <div class="engp-chart-wrap"><canvas id="thp-chart" role="img" aria-label="Theme score over time"></canvas></div>
        </div>
      </div>
      <div class="engp-section">
        <div class="engp-section-head">
          <h3 class="engp-section-title" style="margin:0;">Theme questions</h3>
          <span class="engp-grouplbl">Group score</span>
        </div>
        <div id="thp-questions"></div>
      </div>
      </div><!-- /insights panel -->
      <div class="scp-tabpanel" data-scptab="actions" hidden>${actionsPanelInner()}</div>
    </div><!-- /sp-body -->
  </div><!-- /sidepanel -->
</div><!-- /overlay -->

<!-- eNPS side panel -->
<div class="overlay is-right" id="npsp-overlay" hidden>
  <div class="sidepanel" role="dialog" aria-modal="true" aria-labelledby="npsp-title">
    <div class="sp-header">
      <div class="sp-toolbar"><div class="sp-actions"><i data-icon="cross" id="npsp-close" role="button" tabindex="0" aria-label="Close"></i></div></div>
      <div class="sp-heading">
        <h2 class="sp-title" id="npsp-title">Employee net promoter score (eNPS)</h2>
        <p class="sp-subtitle">The eNPS shows you to what extent your employees would recommend your organization as a good employer.</p>
      </div>
      <div class="sp-tabs engp-tabs">
        <a class="sp-tab is-active" data-scptab="insights"><i data-icon="category"></i> Insights</a>
        <a class="sp-tab" data-scptab="actions"><i data-icon="pin"></i> Actions <span class="act-count engp-tab-count" hidden>0</span></a>
      </div>
    </div>

    <div class="sp-body">
      <div class="scp-tabpanel" data-scptab="insights">

      <div class="npsp-section">
        <h3 class="npsp-h">Your scores</h3>
        <p class="npsp-sub">This is how the calculation works.</p>
        <div class="npsp-calc">
          <div class="npsp-card is-passive">
            <span class="npsp-card-icon"><i data-icon="net-promoter-score-passive"></i></span>
            <span class="npsp-card-lbl">Passive</span>
            <span class="npsp-card-pct">${d.npsPassives}%</span>
            <span class="npsp-card-count"><i data-icon="user"></i> ${d.npsPassCount}</span>
          </div>
          <div class="npsp-divider"></div>
          <div class="npsp-card is-promoter">
            <span class="npsp-card-icon"><i data-icon="net-promoter-score"></i></span>
            <span class="npsp-card-lbl">Promoter</span>
            <span class="npsp-card-pct">${d.npsPromoters}%</span>
            <span class="npsp-card-count"><i data-icon="user"></i> ${d.npsPromCount}</span>
          </div>
          <div class="npsp-op"><span class="npsp-op-sign">–</span></div>
          <div class="npsp-card is-detractor">
            <span class="npsp-card-icon"><i data-icon="net-promoter-score-detractor"></i></span>
            <span class="npsp-card-lbl">Detractor</span>
            <span class="npsp-card-pct">${d.npsDetractors}%</span>
            <span class="npsp-card-count"><i data-icon="user"></i> ${d.npsDetrCount}</span>
          </div>
          <div class="npsp-op"><span class="npsp-op-sign">=</span></div>
          <div class="npsp-card is-result">
            <span class="npsp-card-lbl">eNPS</span>
            <span class="npsp-card-pct">${npsValue}</span>
          </div>
        </div>
      </div>

      <div class="npsp-section">
        <h3 class="npsp-h">Compare scores</h3>
        <p class="npsp-sub">Your score compared with the benchmarks.</p>
        <div class="npsp-bars">
          ${[
            { label: d.groupName,        val: npsValue,    group: true },
            { label: 'Previous survey',  val: d.npsPrev,   icon: 'rotate-backward' },
            { label: 'Effectory Index',  val: d.npsBench,  icon: 'benchmark-up' },
            { label: 'Top 3 benchmark',  val: d.npsTop3,   icon: 'star' }
          ].map(npsBar).join('')}
        </div>
        <div class="npsp-axis">
          <span class="npsp-axis-line"></span><span class="npsp-axis-tick"></span>
          <span class="npsp-axis-lbl l">-100</span><span class="npsp-axis-lbl m">0</span><span class="npsp-axis-lbl r">100</span>
        </div>
      </div>

      <div class="npsp-section">
        <div class="npsp-qcard">
          <p class="npsp-q">&ldquo;How likely is it that you would recommend Novanta B.V. as an employer to others?&rdquo;</p>
          <div class="npsp-cells">${npsCells()}</div>
          <div class="npsp-legend">
            <span class="npsp-leg is-det"><span class="npsp-dot"></span>Detractors (1–6)</span>
            <span class="npsp-leg is-pas"><span class="npsp-dot"></span>Passives (7–8)</span>
            <span class="npsp-leg is-pro"><span class="npsp-dot"></span>Promoters (9–10)</span>
          </div>
        </div>
        <p class="npsp-note">Scores are based on global standards</p>
      </div>

      <div class="npsp-section">
        <h3 class="npsp-h">Score breakdown</h3>
        <div class="npsp-break">
          <div class="npsp-break-card">
            <span class="npsp-break-icon is-pro"><i data-icon="net-promoter-score"></i></span>
            <div class="npsp-break-body">
              <div class="npsp-break-title">Promoters: 9 to 10</div>
              <p class="npsp-break-desc">These most positive, motivated and satisfied employees are most likely to recommend your company to others.</p>
            </div>
          </div>
          <div class="npsp-break-card">
            <span class="npsp-break-icon is-pas"><i data-icon="net-promoter-score-passive"></i></span>
            <div class="npsp-break-body">
              <div class="npsp-break-title">Passives: 7 to 8</div>
              <p class="npsp-break-desc">These neutral employees are generally content, but not fully committed to your company. Their results are excluded from the eNPS calculation.</p>
            </div>
          </div>
          <div class="npsp-break-card">
            <span class="npsp-break-icon is-det"><i data-icon="net-promoter-score-detractor"></i></span>
            <div class="npsp-break-body">
              <div class="npsp-break-title">Detractors: 1 to 6</div>
              <p class="npsp-break-desc">These employees will not recommend your company to others and may be dissatisfied.</p>
            </div>
          </div>
        </div>
        <button class="btn btn-link npsp-learn">Learn why the eNPS is important <i data-icon="external-link"></i></button>
      </div>

      </div><!-- /insights panel -->
      <div class="scp-tabpanel" data-scptab="actions" hidden>${actionsPanelInner()}</div>
    </div><!-- /sp-body -->
  </div><!-- /sidepanel -->
</div><!-- /overlay -->

${reportsDialogs()}
${scorePanel()}
${actionPanel()}
<div class="sysnotif-stack" id="sysnotif-stack"></div>
${actRemoveDialog()}
`;
}

/* ---------- chart helpers ---------- */
const css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
const rgba = (hex, a) => {
  const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16));
  return `rgba(${r},${g},${b},${a})`;
};
/* Shared "score over time" line chart — used by the engagement panel and the per-question
   panel so both look identical: angular line, content-base semibold axis labels with extra
   spacing, dashed blue grid, area gradient. */
/* Survey periods for the "score over time" trend. Q2 view shows the first 5 (ending May 2026);
   Q3 view shows all 6 (ending Sep 2026), matching each dataset's dateTo / prevDateTo. */
/* 12 survey moments (4-monthly), shortened to "Mon 'YY" so they fit on the axis.
   Q2 view shows the first 11 (ending May '26); Q3 shows all 12 (ending Sep '26). */
const TREND_LABELS = ["Jan '23", "May '23", "Sep '23", "Jan '24", "May '24", "Sep '24", "Jan '25", "May '25", "Sep '25", "Jan '26", "May '26", "Sep '26"];
/* Build an 11-point (Q2) or 12-point (Q3) trend ending at the known previous/current survey
   scores, with synthetic earlier surveys leading up to them. previous == null → Q2 (no previous). */
function trendSeries(current, previous, max = 100) {
  const cl = (v) => Math.max(0, Math.min(max, v));
  const rnd = (v) => max <= 10 ? Math.round(v * 10) / 10 : Math.round(v);
  const hasPrev = previous != null;
  const base = hasPrev ? previous : current;               // earliest "known" survey score
  const hist = [0.70, 0.74, 0.78, 0.76, 0.82, 0.85, 0.83, 0.88, 0.86, 0.92].map(f => cl(rnd(base * f)));  // 10 synthetic earlier surveys
  const data = hasPrev ? [...hist, previous, current] : [...hist, current];   // 12 (Q3) / 11 (Q2)
  const labels = (hasPrev ? TREND_LABELS.slice() : TREND_LABELS.slice(0, 11)).map(locDate);
  return { labels, data };
}
const makeLineChart = (cv, labels, data, { max = 100, unit = '%' } = {}) => {
  const info = css('--bg-info');
  const gridBlue = css('--border-info-subtle');
  const tickFont = { family: 'Poppins', size: 12, weight: 600 };
  const areaFill = (context) => {
    const { ctx, chartArea } = context.chart;
    if (!chartArea) return rgba(info, 0.18);
    const g = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
    g.addColorStop(0, rgba(info, 0.35));
    g.addColorStop(1, rgba(info, 0));
    return g;
  };
  return new Chart(cv, {
    type: 'line',
    data: { labels, datasets: [{ data, borderColor: info, borderWidth: 3, tension: 0, fill: true, backgroundColor: areaFill, pointBackgroundColor: info, pointBorderColor: css('--bg-base'), pointBorderWidth: 3, pointRadius: 7, pointHoverRadius: 7, clip: false }] },
    options: {
      responsive: true, maintainAspectRatio: false, layout: { padding: { top: 8, right: 12 } }, events: [],
      animation: { duration: 800, easing: 'easeOutQuart' }, plugins: { legend: { display: false }, tooltip: { enabled: false } },
      scales: {
        y: { min: 0, max, ticks: { stepSize: max / 2, color: css('--content-base'), font: tickFont, callback: (v) => v + unit, padding: 12 }, grid: { color: gridBlue, lineWidth: 1, borderDash: [5, 5], drawTicks: false }, border: { color: gridBlue } },
        x: { offset: false, ticks: { align: 'inner', color: css('--content-base'), font: tickFont, padding: 12 }, grid: { color: gridBlue, lineWidth: 1, borderDash: [5, 5], drawTicks: false }, border: { color: gridBlue } }
      }
    }
  });
};
const endDot = (colorVar, radius, lineWidth) => ({
  id: 'endDot',
  afterDatasetsDraw(chart) {
    const arc = chart.getDatasetMeta(0).data[0];
    if (!arc) return;
    const { ctx } = chart;
    const r = (arc.outerRadius + arc.innerRadius) / 2;
    const x = arc.x + Math.cos(arc.endAngle) * r;
    const y = arc.y + Math.sin(arc.endAngle) * r;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = css(colorVar);
    ctx.strokeStyle = css('--bg-base');
    ctx.lineWidth = lineWidth;
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
});
function gauge(id, pct, colorVar, opts) {
  new Chart(document.getElementById(id), {
    type: 'doughnut',
    data: { datasets: [{ data: [pct, 100 - pct], backgroundColor: [css(colorVar), css('--bg-tertiary')], borderWidth: 0, borderRadius: 999 }] },
    options: {
      rotation: 197.5, circumference: 325, cutout: opts.cutout, responsive: false, events: [],
      animation: { duration: 800, easing: 'easeOutQuart' },
      plugins: { legend: { display: false }, tooltip: { enabled: false } }
    },
    plugins: [endDot(colorVar, opts.dotRadius, opts.dotStroke)]
  });
}

/* ── Feedback widget — sales users send prototype feedback. ──────────────────
   Ready for Microsoft Forms: set FEEDBACK_FORM.embedUrl (the Forms "Embed"
   URL) and, optionally, pageParam (the page question's key from a Forms
   "Get pre-filled link") to auto-fill the current page. While embedUrl is
   empty the widget stores submissions in localStorage ('effx-feedback') so it
   stays demoable per device. */
const FEEDBACK_FORM = {
  embedUrl: 'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=1y956URA50ekDT-6RvHNCYhLeyOQYrJNu2uWOF_cct5UN0haTVIwUzdPR0RWWFBUNTM2Mk1SUzJOQi4u&embed=true',
  pageParam: ''   // optional pre-fill key for a "Page" question (from a Forms "Get pre-filled link")
};
function currentPageLabel() {
  const tab = document.querySelector('.tab.is-active[data-view]');
  const view = tab ? tab.textContent.trim() : 'Overview';
  const group = (document.querySelector('#hdr-filter .sel-btn-value')?.textContent || '').trim();
  const survey = (document.querySelector('.results-title')?.textContent || '').trim();
  return [view, group && ('— ' + group), survey && ('(' + survey + ')')].filter(Boolean).join(' ');
}
function wireFeedback() {
  if (document.getElementById('fb-btn')) return;   /* inject once; survives in-place re-renders */
  const T2 = (s) => window.tr ? tr(s) : s;
  const embed = !!FEEDBACK_FORM.embedUrl;
  const wrap = document.createElement('div');
  const nativeForm = `
    <div id="fb-form">
      <div class="fb-field"><label>${T2('Page')}</label><div class="fb-page"><i data-icon="file" style="width:14px;height:14px;display:flex;"></i><strong id="fb-page"></strong></div></div>
      <div class="fb-field"><label for="fb-problem">${T2("What's the problem?")}</label>
        <textarea id="fb-problem" placeholder="${T2("Describe what isn't working or what's confusing…")}"></textarea></div>
      <div class="fb-field"><label for="fb-solution">${T2('What would the solution be?')}</label>
        <textarea id="fb-solution" placeholder="${T2('Your idea for how to fix or improve it…')}"></textarea></div>
      <div class="fb-row">
        <div class="fb-field"><label for="fb-type">${T2('Type')}</label>
          <select id="fb-type"><option value="Bug">${T2('Bug')}</option><option value="Idea">${T2('Idea')}</option><option value="Question">${T2('Question')}</option></select></div>
        <div class="fb-field"><label for="fb-priority">${T2('Priority')}</label>
          <select id="fb-priority"><option value="Low">${T2('Low')}</option><option value="Medium" selected>${T2('Medium')}</option><option value="High">${T2('High')}</option></select></div>
      </div>
    </div>`;
  const embedForm = `
    <iframe class="fb-iframe" id="fb-iframe" title="${T2('Share feedback')}"></iframe>`;
  wrap.innerHTML = `
    <button class="btn btn-tertiary fb-fab is-attn" id="fb-btn" type="button"><i data-icon="message"></i> ${T2('Feedback')}</button>
    <div class="scrim" id="fb-scrim" hidden>
      <div class="dialog fb-dialog${embed ? ' is-embed' : ''}" role="dialog" aria-modal="true" ${embed ? `aria-label="${T2('Share feedback')}"` : 'aria-labelledby="fb-title"'}>
        <button class="dialog-close" id="fb-close" aria-label="${T2('Cancel')}"><i data-icon="cross"></i></button>
        ${embed ? '' : `<div class="dialog-header is-sm">
          <h3 class="dialog-title" id="fb-title">${T2('Share feedback')}</h3>
          <p class="dialog-subtitle">${T2('Help us improve this prototype — tell us what could be better.')}</p>
        </div>`}
        <div class="dialog-body">
          ${embed ? embedForm : nativeForm}
          <div class="fb-done" id="fb-done" hidden><div class="fb-done-ico"><i data-icon="check"></i></div><h4>${T2('Thanks for your feedback!')}</h4><p>${T2("We'll use it to improve the prototype.")}</p></div>
        </div>
        ${embed ? '' : `<div class="dialog-footer" id="fb-footer"><button class="btn btn-secondary" id="fb-cancel">${T2('Cancel')}</button><button class="btn btn-primary" id="fb-send">${T2('Send')}</button></div>`}
      </div>
    </div>`;
  document.body.appendChild(wrap);
  if (window.Icons) window.Icons.render(wrap);

  const fab = wrap.querySelector('#fb-btn');
  const stopAttn = () => fab.classList.remove('is-attn');
  setTimeout(stopAttn, 4500);   /* attention border runs for a few seconds on load */

  const scrim = wrap.querySelector('#fb-scrim');
  const setPage = () => { const el = wrap.querySelector('#fb-page'); if (el) el.textContent = currentPageLabel(); };
  const reset = () => {
    const form = wrap.querySelector('#fb-form'), done = wrap.querySelector('#fb-done'), footer = wrap.querySelector('#fb-footer');
    if (form) form.hidden = false; if (done) done.hidden = true; if (footer) footer.hidden = false;
    ['#fb-problem', '#fb-solution'].forEach(s => { const t = wrap.querySelector(s); if (t) { t.value = ''; t.style.borderColor = ''; } });
    const ty = wrap.querySelector('#fb-type'); if (ty) ty.value = 'Bug';
    const pr = wrap.querySelector('#fb-priority'); if (pr) pr.value = 'Medium';
  };
  const open = () => {
    stopAttn();
    if (!embed) reset();
    setPage();
    if (embed) {
      const ifr = wrap.querySelector('#fb-iframe');
      const sep = FEEDBACK_FORM.embedUrl.indexOf('?') === -1 ? '?' : '&';
      ifr.src = FEEDBACK_FORM.embedUrl + (FEEDBACK_FORM.pageParam ? sep + FEEDBACK_FORM.pageParam + '=' + encodeURIComponent(currentPageLabel()) : '');
    }
    scrim.hidden = false;
  };
  const close = () => { scrim.hidden = true; };
  wrap.querySelector('#fb-btn').addEventListener('click', open);
  wrap.querySelector('#fb-close').addEventListener('click', close);
  scrim.addEventListener('click', (e) => { if (e.target === scrim) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !scrim.hidden) close(); });

  if (!embed) {
    wrap.querySelector('#fb-cancel').addEventListener('click', close);
    const problem = wrap.querySelector('#fb-problem');
    problem.addEventListener('input', () => { problem.style.borderColor = ''; });
    wrap.querySelector('#fb-send').addEventListener('click', () => {
      if (!problem.value.trim()) { problem.style.borderColor = 'var(--border-negative)'; problem.focus(); return; }
      const entry = {
        ts: new Date().toISOString(), page: currentPageLabel(), url: location.href, lang: window.LANG || 'en',
        problem: problem.value.trim(), solution: wrap.querySelector('#fb-solution').value.trim(),
        type: wrap.querySelector('#fb-type').value, priority: wrap.querySelector('#fb-priority').value
      };
      try { const all = JSON.parse(localStorage.getItem('effx-feedback') || '[]'); all.push(entry); localStorage.setItem('effx-feedback', JSON.stringify(all)); } catch (e) {}
      wrap.querySelector('#fb-form').hidden = true;
      wrap.querySelector('#fb-footer').hidden = true;
      wrap.querySelector('#fb-done').hidden = false;
      setTimeout(close, 1800);
    });
  }
}

/* ---------- render ---------- */
function renderOverview(variant, initialView) {
  const d = (window.translateData ? translateData(DATA[variant] || DATA['team-it-after']) : (DATA[variant] || DATA['team-it-after']));
  document.getElementById('root').innerHTML = shell(d);

  /* Charts — wait for Poppins so radar labels are not clipped */
  document.fonts.ready.then(() => {
    gauge('rr-chart', d.rrValue, '--bg-info', { cutout: '82%', dotRadius: 7, dotStroke: 2.5 });
    gauge('kpi-workload', d.kpiWorkload, '--bg-positive', { cutout: '80%', dotRadius: 4.5, dotStroke: 2 });
    gauge('kpi-retention', d.kpiRetention, '--bg-positive', { cutout: '80%', dotRadius: 4.5, dotStroke: 2 });
    gauge('kpi-wellbeing', d.kpiWellbeing, '--bg-info', { cutout: '80%', dotRadius: 4.5, dotStroke: 2 });

    /* eNPS donut */
    new Chart(document.getElementById('nps-chart'), {
      type: 'doughnut',
      data: {
        labels: ['Promoters', 'Passives', 'Detractors'],
        datasets: [{
          data: [d.npsPromoters, d.npsPassives, d.npsDetractors],
          backgroundColor: [css('--bg-distribution-agree'), css('--bg-distribution-neither'), css('--bg-distribution-disagree')],
          borderWidth: 0
        }]
      },
      options: { rotation: 0, cutout: '82%', responsive: false, events: [], animation: { duration: 800, easing: 'easeOutQuart' }, plugins: { legend: { display: false }, tooltip: { enabled: false } } }
    });

    /* Themes radar */
    const swCur = css('--bg-results-current');
    const swPrev = css('--bg-results-previous');
    new Chart(document.getElementById('sw-chart'), {
      type: 'radar',
      data: {
        labels: ['Engagement', 'Managing systems', 'Facilitating employees', 'Leadership in change', 'Giving direction', 'Employer-ship'].map(s => window.tr ? tr(s) : s),
        datasets: [
          { label: 'Previous', data: d.swPrevious, backgroundColor: rgba(swPrev, 0.54), borderColor: swPrev, borderWidth: 1, pointBackgroundColor: css('--bg-base'), pointBorderColor: css('--border-highlight'), pointBorderWidth: 2, pointRadius: 5 },
          { label: 'Current', data: d.swCurrent, backgroundColor: rgba(swCur, 0.47), borderColor: swCur, borderWidth: 1, pointBackgroundColor: css('--bg-base'), pointBorderColor: css('--border-info'), pointBorderWidth: 2, pointRadius: 5 }
        ]
      },
      options: {
        responsive: false, events: ['mousemove', 'mouseout'], animation: { duration: 800, easing: 'easeOutQuart' },
        layout: { padding: 2 },
        interaction: { mode: 'nearest', intersect: true },
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true, backgroundColor: css('--bg-inverse'), padding: 8, cornerRadius: 8, displayColors: false,
            titleFont: { family: 'Poppins', size: 12, weight: 600 }, bodyFont: { family: 'Poppins', size: 12, weight: 500 },
            callbacks: { title: (items) => items[0].label, label: (item) => `${item.dataset.label}: ${item.formattedValue}%` }
          }
        },
        scales: { r: { min: 0, max: 100, ticks: { display: false, stepSize: 25 }, grid: { color: css('--border-base') }, angleLines: { color: css('--border-base') }, pointLabels: { color: css('--content-base'), padding: 6, font: { family: 'Poppins', size: 11, weight: 500 }, callback: (label) => {
          if (label.length <= 13) return label;
          const words = String(label).split(' ');
          if (words.length < 2) return label;
          let best = 1, bestDiff = Infinity, total = label.length;
          for (let i = 1; i < words.length; i++) { const a = words.slice(0, i).join(' ').length; const diff = Math.abs(a - (total - a)); if (diff < bestDiff) { bestDiff = diff; best = i; } }
          return [words.slice(0, best).join(' '), words.slice(best).join(' ')];
        } } } }
      }
    });

    /* Engagement panel: score over time (line) */
    const engLine = document.getElementById('engp-chart');
    if (engLine) {
      const ed = d.engpLine.data;
      const engCur = ed[ed.length - 1];
      const engPrev = periodKey(d) === 'after' ? ed[ed.length - 2] : null;
      const trd = trendSeries(engCur, engPrev, 100);
      makeLineChart(engLine, trd.labels, trd.data, { max: 100, unit: '%' });
    }
  });

  /* Panel open/close wiring */
  const wirePanel = (overlayId, closeId, cardSel, onOpen) => {
    const overlay = document.getElementById(overlayId);
    const card = document.querySelector(cardSel);
    const open = () => { if (onOpen) onOpen(); resetPanelTabs(overlay); overlay.hidden = false; };
    const close = () => { overlay.hidden = true; };
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.addEventListener('click', open);
    card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    document.getElementById(closeId).addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !overlay.hidden) close(); });
  };
  wirePanel('efp-overlay', 'efp-close', '.fx-card');
  /* re-sync the Actions tab from state on open so a goal set via the card pin shows in the panel */
  wirePanel('engp-overlay', 'engp-close', '.eng-card', () => loadActions(document.getElementById('engp-overlay'), 'engagement', (d.engpCards[0] || {}).val || '–'));
  wirePanel('npsp-overlay', 'npsp-close', '.nps-card', () => loadActions(document.getElementById('npsp-overlay'), 'enps', String(d.npsPromoters - d.npsDetractors)));

  /* interactive Actions tab on the Engagement + eNPS panels (score = the card's score) */
  wireActRemoveDialog();
  const engOv = document.getElementById('engp-overlay');
  if (engOv) { wirePanelTabs(engOv); wireActions(engOv); loadActions(engOv, 'engagement', (d.engpCards[0] || {}).val || '–'); }
  const npOv = document.getElementById('npsp-overlay');
  if (npOv) { wirePanelTabs(npOv); wireActions(npOv); loadActions(npOv, 'enps', String(d.npsPromoters - d.npsDetractors)); }

  /* Themes view: a theme card's "View insights" opens the theme side panel (same look as the engagement panel) */
  (function wireThemePanel() {
    const overlay = document.getElementById('thp-overlay');
    if (!overlay) return;
    const T2 = (s) => window.tr ? tr(s) : s;
    const g = groupKey(d), p = periodKey(d);
    let thChart = null;
    document.querySelectorAll('#view-themes .tc-link[data-theme]').forEach(btn => {
      btn.addEventListener('click', () => {
        const t = THEMES[+btn.dataset.theme];
        const current = t.v[g][p];
        const previous = p === 'after' ? t.v[g].before : null;
        document.getElementById('thp-title').textContent = T2(t.name);
        document.getElementById('thp-mean-title').textContent = T2('What does {theme} mean?').replace('{theme}', T2(t.name));
        document.getElementById('thp-desc').textContent = T2(t.desc);
        document.getElementById('thp-results-lead').textContent = T2('See how your group scored on this theme compared to other groups.');
        document.getElementById('thp-chart-grp').textContent = d.groupName;
        const cards = [
          { lbl: d.groupName, val: current + '%' },
          ...(previous != null ? [{ lbl: T2('Previous survey'), val: previous + '%' }] : []),
          { lbl: T2('Effectory Index'), val: t.bench + '%' }
        ];
        document.getElementById('thp-cards').innerHTML = cards.map(c => `<div class="engp-card-item"><div class="engp-card-lbl">${c.lbl}</div><div class="engp-card-val">${c.val}</div></div>`).join('');
        document.getElementById('thp-questions').innerHTML = (t.questions || []).map(r => `<div class="engp-q-row"><span class="engp-q-text">${T2(r.q)}</span><span class="engp-q-score">${r.s}</span></div>`).join('');
        loadActions(overlay, 'theme:' + t.name, current + '%');   /* Actions tab: per-theme state + score */
        resetPanelTabs(overlay);
        overlay.hidden = false;
        if (window.Icons) window.Icons.render(overlay);
        /* build the chart only once the panel is visible so the canvas has a measured size */
        if (thChart) { thChart.destroy(); thChart = null; }
        const trd = trendSeries(current, previous, 100);
        requestAnimationFrame(() => { thChart = makeLineChart(document.getElementById('thp-chart'), trd.labels, trd.data, { max: 100, unit: '%' }); });
      });
    });
    const close = () => { overlay.hidden = true; };
    document.getElementById('thp-close').addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !overlay.hidden) close(); });
    wirePanelTabs(overlay); wireActions(overlay);
  })();

  /* Effectiveness panel: Matrix / List segmented control + list accordions */
  const segBtns = document.querySelectorAll('#efp-overlay .segctl-btn');
  const mView = document.getElementById('efp-view-matrix');
  const lView = document.getElementById('efp-view-list');
  segBtns.forEach((b) => b.addEventListener('click', () => {
    segBtns.forEach((x) => x.classList.remove('is-active'));
    b.classList.add('is-active');
    const isList = b.dataset.seg === 'list';
    if (mView) mView.hidden = isList;
    if (lView) lView.hidden = !isList;
  }));
  document.querySelectorAll('#efp-view-list .efp-acc-hd').forEach((hd) => {
    hd.addEventListener('click', () => hd.closest('.efp-acc').classList.toggle('is-open'));
  });

  /* Comparisons filter dropdown (effectiveness panel) */
  const cmpBtn = document.getElementById('efp-cmp-btn');
  const cmpMenu = document.getElementById('efp-filter');
  const cmpCount = document.getElementById('efp-cmp-count');
  if (cmpBtn && cmpMenu) {
    const applyFilter = () => {
      let n = 0;
      cmpMenu.querySelectorAll('input.cb').forEach(b => {
        if (b.checked) n++;
        document.querySelectorAll('.efp-marker.' + b.dataset.variant)
          .forEach(el => { el.style.display = b.checked ? '' : 'none'; });
      });
      cmpCount.textContent = n + ' ' + (window.tr ? tr('selected') : 'selected');
    };
    cmpBtn.addEventListener('click', (e) => { e.stopPropagation(); cmpMenu.hidden = !cmpMenu.hidden; });
    cmpMenu.addEventListener('click', (e) => e.stopPropagation());
    cmpMenu.querySelectorAll('input.cb').forEach(b => b.addEventListener('change', applyFilter));
    document.addEventListener('click', () => { cmpMenu.hidden = true; });
    applyFilter();
  }

  /* Overview ↔ Focus View tab switching */
  const viewTabs = document.querySelectorAll('.tab[data-view]');
  const views = {
    overview: document.getElementById('view-overview'),
    focus: document.getElementById('view-focus'),
    themes: document.getElementById('view-themes'),
    reports: document.getElementById('view-reports'),
    scores: document.getElementById('view-scores'),
    actions: document.getElementById('view-actions')
  };
  viewTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const v = tab.dataset.view;
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      Object.entries(views).forEach(([k, el]) => { if (el) el.hidden = (k !== v); });
      document.querySelector('.overview-wrap')?.classList.toggle('is-full', v === 'scores');
      document.querySelector('.main-scroll').scrollTop = 0;
      if (v === 'actions' && window.renderAPBody) window.renderAPBody();   /* refresh planner rows from current ACT_STORE state */
      /* keep the URL in sync with the active view (no reload) */
      const path = location.pathname.replace(/(overview|focus|themes|reports|scores|actions)(\.html)?$/, (m, _g1, ext) => v + (ext || ''));
      if (path !== location.pathname) history.replaceState(null, '', path + location.search + location.hash);
    });
  });

  /* Open directly on a given view (e.g. shared Focus View / Reports link) */
  if (initialView === 'focus' || (typeof location !== 'undefined' && location.hash === '#focus')) {
    const ft = document.querySelector('.tab[data-view="focus"]');
    if (ft) ft.click();
  } else if (initialView === 'themes') {
    const tt = document.querySelector('.tab[data-view="themes"]');
    if (tt) tt.click();
  } else if (initialView === 'reports') {
    const rt = document.querySelector('.tab[data-view="reports"]');
    if (rt) rt.click();
  } else if (initialView === 'scores') {
    const st = document.querySelector('.tab[data-view="scores"]');
    if (st) st.click();
  } else if (initialView === 'actions') {
    const at = document.querySelector('.tab[data-view="actions"]');
    if (at) at.click();
  }

  wireFeedback();   /* floating feedback button + modal (sales → prototype feedback) */

  /* ---- Action Planner wiring ---- */
  (function wireActionPlanner() {
    const view = document.getElementById('view-actions');
    const appOverlay = document.getElementById('app-overlay');
    if (!view || !appOverlay) return;
    const T2 = (s) => window.tr ? tr(s) : s;
    wireActions(appOverlay);
    const closeAP = () => { appOverlay.hidden = true; window.renderAPBody(); };   /* refresh progress/goal on close */
    document.getElementById('app-close').addEventListener('click', closeAP);
    appOverlay.addEventListener('click', (e) => { if (e.target === appOverlay) closeAP(); });

    const titleEl = document.getElementById('app-title');
    const eyebrowEl = document.getElementById('app-eyebrow');
    const openAP = (key, name, score) => {
      const isCustom = key.startsWith('custom:');
      const realName = isCustom ? ((AP_CUSTOM.find(r => r.key === key) || {}).name || '') : name;
      titleEl.textContent = realName;
      titleEl.dataset.apkey = key;
      titleEl.contentEditable = isCustom ? 'true' : 'false';
      titleEl.classList.toggle('is-editable', isCustom);
      titleEl.setAttribute('data-placeholder', T2('What do you want to tackle?'));
      eyebrowEl.textContent = realName ? T2('Edit pin') : T2('Create pin');
      eyebrowEl.hidden = !isCustom;
      appOverlay.classList.toggle('is-custom', isCustom);   /* only a real custom pin hides the Score row */
      loadActions(appOverlay, key, score);
      appOverlay.hidden = false;
      if (window.Icons) window.Icons.render(appOverlay);
    };
    /* editing a custom pin's title updates its planner row */
    titleEl.addEventListener('input', () => {
      const key = titleEl.dataset.apkey;
      if (!key || !key.startsWith('custom:')) return;
      const row = AP_CUSTOM.find(r => r.key === key);
      if (row) row.name = titleEl.textContent.trim();
    });
    titleEl.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); titleEl.blur(); } });

    window.renderAPBody = function () {
      const tbody = view.querySelector('.ap-tbody');
      if (!tbody) return;
      let rows = actionPlannerRows(d);
      if (AP_SORT) {
        const val = (r) => {
          const st = actState(r.key);
          if (AP_SORT.col === 'score') return r.score == null ? -1 : r.score;
          if (AP_SORT.col === 'goal') return AP_GOAL_ORDER[st.goal] || 0;
          const tot = st.actions.length; return tot ? st.actions.filter(a => a.done).length / tot : -1;
        };
        rows = rows.slice().sort((a, b) => (val(a) - val(b)) * AP_SORT.dir);
      }
      tbody.innerHTML = rows.map(apRowHTML).join('');
      if (window.Icons) window.Icons.render(tbody);
    };

    /* Open the right panel for a subject (by key). A pinned score keeps its full tabs:
       questions → Scores question panel; themes → theme panel; engagement/eNPS → their cards' panels;
       other metrics & custom pins → the Actions-only panel. Always lands on the Actions tab.
       addAction also appends a fresh action + focuses it. Exposed globally for the pin toasts. */
    const apOpenActions = (key, name, scoreText, addAction) => {
      let overlay = null;
      /* fall back to the planner data for name/score (e.g. when opened from a pin toast) */
      const pr = actionPlannerRows(d).find(x => x.key === key);
      if (pr) {
        if (!name) name = T2(pr.name);
        if (scoreText == null || scoreText === '–') scoreText = pr.scoreText != null ? pr.scoreText : (pr.score == null ? '–' : pr.score + '%');
      }
      const goActions = (id) => { overlay = document.getElementById(id); overlay.querySelector('.sp-tab[data-scptab="actions"]')?.click(); };
      if (key.startsWith('custom:')) { openAP(key, '', scoreText); overlay = appOverlay; }
      else if (key.startsWith('theme:')) {
        const idx = THEMES.findIndex(t => t.name === key.slice(6));
        const link = document.querySelector(`#view-themes .tc-link[data-theme="${idx}"]`);
        if (link) { link.click(); goActions('thp-overlay'); }
      } else if (key === 'engagement') { const o = document.getElementById('engp-overlay'); loadActions(o, 'engagement', (d.engpCards[0] || {}).val || '–'); o.hidden = false; goActions('engp-overlay'); }
      else if (key === 'enps') { const o = document.getElementById('npsp-overlay'); loadActions(o, 'enps', String(d.npsPromoters - d.npsDetractors)); o.hidden = false; goActions('npsp-overlay'); }
      else {
        const sr = [...document.querySelectorAll('#view-scores .sc-row')].find(r => r.dataset.q === key);
        if (sr) { (sr.querySelector('.sc-insights') || sr.querySelector('.sc-q')).click(); goActions('scp-overlay'); }
      }
      if (!overlay) { openAP(key, name || '', scoreText); overlay = appOverlay; }
      if (addAction) { const add = overlay.querySelector('.act-add'); if (add && !add.disabled) add.click(); }
      return overlay;
    };
    window.apOpenActions = apOpenActions;
    const openSubject = (rowEl, addAction) => apOpenActions(rowEl.dataset.key, rowEl.querySelector('.ap-name').textContent, rowEl.querySelector('.ap-score').textContent, addAction);

    /* "Add action" link in any pin toast → open that subject's Actions */
    document.getElementById('sysnotif-stack')?.addEventListener('click', (e) => {
      const a = e.target.closest('.sysnotif-action'); if (!a) return;
      apOpenActions(a.dataset.key, '', '–', true);
      a.closest('.sysnotif')?.remove();
    });

    /* delegated clicks inside the Actions view */
    view.addEventListener('click', (e) => {
      const kebab = e.target.closest('.ap-kebab');
      if (kebab) { e.stopPropagation(); const m = kebab.closest('.ap-kebab-wrap').querySelector('.ap-kebab-menu'); const willOpen = m.hidden; view.querySelectorAll('.ap-kebab-menu, .ap-export-menu').forEach(x => x.hidden = true); m.hidden = !willOpen; return; }
      const edit = e.target.closest('.ap-edit');
      if (edit) { e.stopPropagation(); openSubject(edit.closest('.ap-row'), false); return; }
      const addk = e.target.closest('.ap-addk');
      if (addk) { e.stopPropagation(); openSubject(addk.closest('.ap-row'), true); return; }
      const remove = e.target.closest('.ap-remove');
      if (remove) { e.stopPropagation(); const key = remove.closest('.ap-row').dataset.key; AP_REMOVED.add(key); AP_CUSTOM = AP_CUSTOM.filter(r => r.key !== key); window.renderAPBody(); return; }
      const exportBtn = e.target.closest('.ap-export');
      if (exportBtn) { e.stopPropagation(); const m = view.querySelector('.ap-export-menu'); const willOpen = m.hidden; view.querySelectorAll('.ap-kebab-menu, .ap-export-menu').forEach(x => x.hidden = true); m.hidden = !willOpen; return; }
      if (e.target.closest('.ap-export-opt')) { view.querySelector('.ap-export-menu').hidden = true; return; }
      const sort = e.target.closest('.ap-sort');
      if (sort) { const col = sort.dataset.col; AP_SORT = (AP_SORT && AP_SORT.col === col) ? { col, dir: -AP_SORT.dir } : { col, dir: -1 }; view.querySelectorAll('.ap-sort').forEach(s => s.classList.toggle('is-active', s === sort)); window.renderAPBody(); return; }
      if (e.target.closest('.ap-custom')) {
        const key = 'custom:' + (++AP_CUSTOM_SEQ);
        ACT_STORE[key] = { goal: 'contemplate', desc: '', actions: [] };   /* a new custom pin starts on Contemplate */
        AP_CUSTOM.push({ key, name: '', score: null, custom: true });       /* empty title → placeholder in the panel */
        AP_REMOVED.delete(key);
        window.renderAPBody();
        openAP(key, '', '–');
        return;
      }
      const addBtn = e.target.closest('.ap-add');
      if (addBtn) { openSubject(addBtn.closest('.ap-row'), true); return; }
      const row = e.target.closest('.ap-row');
      if (row) { openSubject(row, false); }
    });
    view.addEventListener('keydown', (e) => { if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('ap-row')) { e.preventDefault(); e.target.click(); } });

    /* search filters rows by name */
    const srch = view.querySelector('.ap-srch');
    if (srch) srch.addEventListener('input', () => { const q = srch.value.trim().toLowerCase(); view.querySelectorAll('.ap-row').forEach(r => { r.style.display = r.dataset.name.includes(q) ? '' : 'none'; }); });

    /* close planner menus on outside click */
    document.addEventListener('click', () => { view.querySelectorAll('.ap-kebab-menu, .ap-export-menu').forEach(x => x.hidden = true); });

    /* refresh planner rows (goal / progress) whenever a subject panel closes while the planner is open */
    ['scp-overlay', 'thp-overlay', 'app-overlay'].forEach(id => {
      const ov = document.getElementById(id);
      if (ov) new MutationObserver(() => { if (ov.hidden && !view.hidden) window.renderAPBody(); }).observe(ov, { attributes: true, attributeFilter: ['hidden'] });
    });
  })();

  wirePins();   /* pin → goal popover on Scores rows, Theme cards and Overview cards */

  /* Header filter: toggle between team level (Team IT) and organization level (Novanta),
     keeping the survey period (before/after) and the active view (overview/focus). */
  const hdrFilter = document.getElementById('hdr-filter');
  if (hdrFilter) {
    hdrFilter.addEventListener('click', () => {
      const period = variant.endsWith('-before') ? 'before' : 'after';
      const group = variant.startsWith('novanta') ? 'team-it' : 'novanta';
      const activeTab = document.querySelector('.tab.is-active[data-view]');
      const view = activeTab ? activeTab.dataset.view : 'overview';
      location.href = `${group}-${period}-${view}.html`;
    });
  }

  /* Survey name / date range: switch survey period (Q2 <-> Q3), keeping group + view */
  const switchPeriod = () => {
    const group = variant.startsWith('novanta') ? 'novanta' : 'team-it';
    const targetPeriod = variant.endsWith('-before') ? 'after' : 'before';
    const activeTab = document.querySelector('.tab.is-active[data-view]');
    const view = activeTab ? activeTab.dataset.view : 'overview';
    location.href = `${group}-${targetPeriod}-${view}.html`;
  };
  document.querySelector('.results-title')?.addEventListener('click', switchPeriod);
  document.querySelector('.date-range')?.addEventListener('click', switchPeriod);

  /* Focus View: 'Explore' and the glance matrix open the effectiveness side panel */
  document.querySelectorAll('#view-focus .fv-explore, #view-focus .fv-glance-matrix').forEach(el => {
    el.addEventListener('click', () => { document.getElementById('efp-overlay').hidden = false; });
  });

  /* Focus View: the eNPS stat pill opens the eNPS side panel */
  document.querySelectorAll('#view-focus .fv-nps-pill').forEach(el => {
    const open = () => { document.getElementById('npsp-overlay').hidden = false; };
    el.addEventListener('click', open);
    el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });

  /* Focus View: 'Why these …?' opens an explainer dialog */
  document.querySelectorAll('#view-focus .fv-why').forEach(el => {
    el.addEventListener('click', () => { const ov = document.getElementById(el.dataset.dialog); if (ov) ov.hidden = false; });
  });
  ['fa-dialog', 'wins-dialog'].forEach(id => {
    const ov = document.getElementById(id);
    if (!ov) return;
    const close = () => { ov.hidden = true; };
    ov.querySelector('.dialog-close').addEventListener('click', close);
    ov.querySelector('.dialog-footer .btn-primary').addEventListener('click', close);
    ov.addEventListener('click', (e) => { if (e.target === ov) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !ov.hidden) close(); });
  });

  /* Focus View: picking an approach reveals a recommended-action card */
  document.querySelectorAll('#view-focus .fv-card').forEach(card => {
    const reco = card.querySelector('.fv-reco');
    if (!reco) return;
    card.querySelectorAll('.rb-btn-bordered').forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.preventDefault();
        const input = chip.querySelector('input.rb');
        if (input) input.checked = true;
        card.querySelectorAll('.rb-btn-bordered').forEach(c => c.classList.toggle('is-checked', c === chip));
        card.classList.add('is-active');
        const T2 = (s) => window.tr ? tr(s) : s;
        const byItem = RECO[card.dataset.q];
        const r = byItem && byItem[chip.dataset.appr];
        if (!r) { reco.hidden = true; return; }
        reco.querySelector('.fv-reco-eyebrow').textContent = T2(chip.dataset.appr);
        reco.querySelector('.fv-reco-title').textContent = T2(r.title);
        reco.querySelector('.fv-reco-body').textContent = T2(r.body);
        reco.hidden = false;
      });
    });

    /* "Add to action planner" / "Create new action" → set this focus item's goal to
       Improve, register it in the Action Planner, then open its Actions panel. */
    const q = card.dataset.q;
    const scoreText = (card.querySelector('.fv-score')?.textContent || '–').trim();
    const pinFocus = () => {
      actState(q).goal = 'improve';
      if (!AP_PINNED.some(r => r.key === q)) AP_PINNED.push({ key: q, name: q, scoreText });
      AP_REMOVED.delete(q); apTouch(q);
    };
    card.querySelector('.fv-reco-add')?.addEventListener('click', (e) => {
      e.preventDefault();
      const title = (card.querySelector('.fv-reco-title')?.textContent || '').trim();
      pinFocus();
      /* open the panel first, then let the recommended action appear so it reads as
         "being added" rather than already sitting there */
      const overlay = window.apOpenActions ? window.apOpenActions(q, q, scoreText, false) : null;
      if (overlay && title && !actState(q).actions.some(a => a.text === title)) {
        setTimeout(() => {
          actState(q).actions.push({ text: title, done: false, deadline: '', assignee: '' }); apTouch(q);
          renderActList(overlay);
          const rows = overlay.querySelectorAll('.act-list .act-item');
          const fresh = rows[rows.length - 1];
          if (fresh) requestAnimationFrame(() => fresh.classList.add('is-new'));
        }, 450);
      }
    });
    card.querySelector('.fv-create')?.addEventListener('click', (e) => {
      e.preventDefault();
      pinFocus();
      if (window.apOpenActions) window.apOpenActions(q, q, scoreText, true);
    });
  });

  /* Reports view: language picker → generate → download / notify */
  (function wireReports() {
    const t = (s) => window.tr ? tr(s) : s;
    const langScrim = document.getElementById('lang-scrim');
    if (!langScrim) return;
    const RAW_GEN_MS = 30000, QUICK_GEN_MS = 800, LONGER_HINT_MS = 10000;
    const langRows = langScrim.querySelectorAll('.lang-row');
    const langBtn = langScrim.querySelector('.btn-primary');
    const genScrim = document.getElementById('gen-scrim');
    const genTitle = document.getElementById('gen-title');
    const genSubtitle = document.getElementById('gen-subtitle');
    const genSub = document.getElementById('gen-sub');
    const genPanel = document.getElementById('gen-panel');
    const genLonger = document.getElementById('gen-longer');
    const toast = document.getElementById('ready-toast');
    const readyTitle = document.getElementById('ready-title');
    let longerTimer = null, current = null;
    /* Real downloadable files per report + language (only the 3 supported languages have files). */
    const REPORT_FILE_BASE = { sgr: 'reports/standard-group-results-', mgmt: 'reports/management-summary-', onepager: 'reports/one-pager-summary-' };
    const REPORT_FILE_NAME = { sgr: 'Standard Group Results', mgmt: 'Management Summary', onepager: 'Results One-Pager Summary' };
    const REPORT_FILE_EXT = { sgr: 'pptx', mgmt: 'pptx', onepager: 'pdf' };
    const LANG_FILE = { Dutch: 'nl', English: 'en', German: 'de' };
    const LANG_FILE_NAME = { nl: 'Nederlands', en: 'English', de: 'Deutsch' };
    /* Downloads are group-aware: the Team IT dashboard serves the Team IT files. */
    const GROUP_SEG = (variant.indexOf('novanta') === 0) ? '' : 'team-it-';
    const GROUP_NAME = d.groupName || (GROUP_SEG ? 'Team IT' : 'Novanta B.V.');
    const fileFor = (key, lang) => {
      const base = REPORT_FILE_BASE[key], suf = LANG_FILE[lang], ext = REPORT_FILE_EXT[key];
      if (!base || !suf) return null;
      return { url: base + GROUP_SEG + suf + '.' + ext, filename: `${GROUP_NAME} - ${REPORT_FILE_NAME[key]} - ${LANG_FILE_NAME[suf]}.${ext}` };
    };
    const triggerDownload = (info) => {
      if (!info) return;
      const a = document.createElement('a');
      a.href = info.url; a.download = info.filename; a.rel = 'noopener';
      document.body.appendChild(a); a.click(); a.remove();
    };
    let genFile = null, toastFile = null;   /* file behind the open gen dialog / the toast */
    const COPY = {
      genTitle: t('Generating report'),
      genBody: t('We are working hard to generate your file, please wait, your file will be downloaded once finished.'),
      doneTitle: t('Your report is ready'),
      doneBody: t('Your download will start automatically.')
    };
    const rowState = (row) => { if (!row._gen) row._gen = { generating: [], ready: [] }; return row._gen; };
    const updateRowLabel = (row) => {
      const label = row.querySelector('.report-gen-label'); if (!label) return;
      const g = rowState(row).generating;
      label.textContent = g.length > 1
        ? t('Generating in {count} languages').replace('{count}', g.length)
        : t('Generating in {lang}').replace('{lang}', g[0] ? t(g[0]) : '');
    };
    const selectedLanguage = () => { const s = langScrim.querySelector('.lang-row.is-selected'); return (s && s.dataset.lang) || 'Dutch'; };
    const updateLangButton = () => { if (current) langBtn.textContent = rowState(current.row).ready.indexOf(selectedLanguage()) !== -1 ? t('Download') : t('Generate'); };
    const refreshLangDialog = () => {
      const s = rowState(current.row);
      langRows.forEach((lr) => {
        const lang = lr.dataset.lang, old = lr.querySelector('.lang-status');
        if (old) old.remove();
        lr.classList.remove('is-busy');
        const radio = lr.querySelector('input'); radio.disabled = false;
        if (s.generating.indexOf(lang) !== -1) {
          lr.classList.add('is-busy'); radio.disabled = true;
          const st = document.createElement('span'); st.className = 'lang-status';
          st.innerHTML = '<span class="gen-spinner gen-spinner-sm"></span> ' + t('Generating…');
          lr.appendChild(st);
        } else if (s.ready.indexOf(lang) !== -1) {
          const st2 = document.createElement('span'); st2.className = 'lang-status is-ready';
          st2.textContent = t('Generated'); lr.appendChild(st2);
        }
      });
      const sel = langScrim.querySelector('.lang-row.is-selected');
      if (!sel || sel.classList.contains('is-busy')) {
        langRows.forEach((r) => { r.classList.remove('is-selected'); r.querySelector('input').checked = false; });
        const firstFree = [].slice.call(langRows).filter((r) => !r.classList.contains('is-busy'))[0];
        if (firstFree) { firstFree.classList.add('is-selected'); firstFree.querySelector('input').checked = true; }
      }
      updateLangButton();
    };
    const openLang = (row) => {
      current = { row, key: row.dataset.report, name: row.querySelector('.report-name').textContent.trim(), isRaw: row.dataset.raw === 'true' };
      document.getElementById('lang-sub').textContent = t('Download “{report}” in the language you select below').replace('{report}', current.name);
      refreshLangDialog();
      langScrim.hidden = false;
    };
    const closeLang = () => { langScrim.hidden = true; };
    const closeGen = () => { genScrim.hidden = true; if (longerTimer) { clearTimeout(longerTimer); longerTimer = null; } genLonger.classList.remove('is-shown'); };
    const showLonger = () => { longerTimer = null; if (genScrim.hidden || genPanel.classList.contains('is-done')) return; genLonger.classList.add('is-shown'); };
    const openGenDialog = (ready, lang) => {
      genSub.textContent = lang ? t(lang) : t('In your selected language');
      genLonger.classList.remove('is-shown');
      genTitle.textContent = ready ? COPY.doneTitle : COPY.genTitle;
      genSubtitle.textContent = ready ? COPY.doneBody : COPY.genBody;
      genPanel.classList.toggle('is-done', !!ready);
      genScrim.hidden = false;
    };
    const showToast = (name, lang, file) => {
      readyTitle.textContent = t('{report} is ready to download in {lang}').replace('{report}', name).replace('{lang}', t(lang));
      toastFile = file;
      toast.hidden = false;
    };
    const scheduleGeneration = (row, name, lang, isRaw) => {
      const key = row.dataset.report, file = fileFor(key, lang);
      setTimeout(() => {
        const s = rowState(row), i = s.generating.indexOf(lang);
        if (i !== -1) s.generating.splice(i, 1);
        if (s.ready.indexOf(lang) === -1) s.ready.push(lang);
        if (s.generating.length === 0) row.classList.remove('is-generating'); else updateRowLabel(row);
        if (!genScrim.hidden && current && current.row === row) {
          genPanel.classList.add('is-done');
          genTitle.textContent = COPY.doneTitle; genSubtitle.textContent = COPY.doneBody;
          if (longerTimer) { clearTimeout(longerTimer); longerTimer = null; }
          genLonger.classList.remove('is-shown');
          genFile = file; triggerDownload(file);   /* "your file will be downloaded once finished" */
        } else { showToast(name, lang, file); }
      }, isRaw ? RAW_GEN_MS : QUICK_GEN_MS);
    };
    document.querySelectorAll('#view-reports .report-row').forEach((row) => {
      if (!row.querySelector('.report-gen')) {
        const gen = document.createElement('span'); gen.className = 'report-gen';
        gen.innerHTML = '<span class="report-gen-label">' + t('Generating…') + '</span><span class="report-gen-icon"><span class="gen-spinner gen-spinner-sm"></span></span>';
        row.appendChild(gen);
      }
      row.addEventListener('click', () => openLang(row));
    });
    langBtn.addEventListener('click', () => {
      if (!current) return;
      const row = current.row, name = current.name, isRaw = current.isRaw, lang = selectedLanguage(), s = rowState(row);
      closeLang();
      if (s.ready.indexOf(lang) !== -1) { openGenDialog(true, lang); genFile = fileFor(current.key, lang); triggerDownload(genFile); return; }
      if (s.generating.indexOf(lang) === -1) { s.generating.push(lang); row.classList.add('is-generating'); updateRowLabel(row); scheduleGeneration(row, name, lang, isRaw); }
      openGenDialog(false, lang);
      if (longerTimer) { clearTimeout(longerTimer); longerTimer = null; }
      if (isRaw) longerTimer = setTimeout(showLonger, LONGER_HINT_MS);
    });
    document.getElementById('lang-close').addEventListener('click', closeLang);
    document.getElementById('lang-cancel').addEventListener('click', closeLang);
    langScrim.addEventListener('click', (e) => { if (e.target === langScrim) closeLang(); });
    document.getElementById('gen-close').addEventListener('click', closeGen);
    document.getElementById('gen-close-btn').addEventListener('click', closeGen);
    genScrim.addEventListener('click', (e) => { if (e.target === genScrim) closeGen(); });
    document.addEventListener('keydown', (e) => { if (e.key !== 'Escape') return; if (!genScrim.hidden) closeGen(); else if (!langScrim.hidden) closeLang(); });
    langRows.forEach((row) => { row.addEventListener('change', () => { langRows.forEach((r) => r.classList.remove('is-selected')); row.classList.add('is-selected'); updateLangButton(); }); });
    document.getElementById('ready-close').addEventListener('click', () => { toast.hidden = true; });
    document.getElementById('ready-download').addEventListener('click', () => { triggerDownload(toastFile); toast.hidden = true; });
    document.querySelector('.gen-fallback')?.addEventListener('click', (e) => { e.preventDefault(); triggerDownload(genFile); });
  })();

  /* Scores view: collapsible groups + live search filter */
  (function wireScores() {
    const table = document.getElementById('view-scores');
    if (!table) return;
    /* one continuous frozen-column divider — CSS sticky pins it natively (no scroll lag);
       its height tracks the full table content via a negative margin so it adds no flow space */
    const scTable = table.querySelector('.sc-table');
    if (scTable) {
      const line = document.createElement('div');
      line.className = 'sc-frozen-line';
      scTable.insertBefore(line, scTable.firstChild);
      const fit = () => { const h = scTable.scrollHeight; line.style.height = h + 'px'; line.style.marginBottom = (-h) + 'px'; };
      fit();
      if (window.ResizeObserver) new ResizeObserver(fit).observe(scTable);
      scTable.addEventListener('scroll', () => { scTable.classList.toggle('is-scrolled', scTable.scrollLeft > 0); });
    }
    table.querySelectorAll('.sc-head-title').forEach(btn => {
      btn.addEventListener('click', () => {
        const g = btn.closest('.sc-group');
        g.dataset.open = g.dataset.open === 'true' ? 'false' : 'true';
      });
    });
    /* Legend numbers reflect the scale of the row you hover: 0–100 (%) by default,
       0–10 score thresholds (±1.5 / ±0.7) while hovering a 0–10 question. */
    const legend = table.querySelector('.sc-legend');
    if (legend) {
      const PCT = { 'is-vpos': '+20%', 'is-pos': '+10%', 'is-neg': '-10%', 'is-vneg': '-20%' };
      const TEN = { 'is-vpos': '+1.5', 'is-pos': '+0.7', 'is-neg': '-0.7', 'is-vneg': '-1.5' };
      const setLegend = (map) => Object.keys(map).forEach(k => { const e = legend.querySelector('.sc-legend-sw.' + k); if (e) e.textContent = map[k]; });
      /* Animate the swap: drop the bar below the fold, swap the numbers, slide it back up. */
      let swapTimer = null;
      legend.dataset.lscale = 'pct';
      const swapLegend = (key, map) => {
        if (legend.dataset.lscale === key) return;   // already showing this scale — no animation
        legend.dataset.lscale = key;
        legend.classList.add('is-swapping');
        clearTimeout(swapTimer);
        swapTimer = setTimeout(() => { setLegend(map); legend.classList.remove('is-swapping'); }, 160);
      };
      /* The legend reflects the scale of the question you hover, and only changes when you
         hover a question of a different scale — it stays put when you leave a row. A short
         hover-intent delay avoids swapping while you just scroll/skim past rows. */
      let hoverTimer = null;
      table.querySelectorAll('.sc-row').forEach(row => {
        const ten = row.dataset.scale === '10';
        row.addEventListener('mouseenter', () => {
          clearTimeout(hoverTimer);
          hoverTimer = setTimeout(() => swapLegend(ten ? 'ten' : 'pct', ten ? TEN : PCT), 250);
        });
        row.addEventListener('mouseleave', () => clearTimeout(hoverTimer));
      });
    }

    const search = table.querySelector('.sc-search-input');
    if (search) {
      search.addEventListener('input', () => {
        const term = search.value.trim().toLowerCase();
        table.querySelectorAll('.sc-group').forEach(g => {
          let any = false;
          g.querySelectorAll('.sc-row').forEach(row => {
            const match = row.querySelector('.sc-q').textContent.toLowerCase().includes(term);
            row.hidden = !match;
            if (match) any = true;
          });
          g.hidden = !any;
        });
      });
    }

    /* Comparisons popover: open it, drill into Segments, apply the Age segment */
    const cmpBtn = document.getElementById('sc-cmp-btn');
    const pop = document.getElementById('sc-cmp-pop');
    if (cmpBtn && pop) {
      const showView = (v) => pop.querySelectorAll('.sc-pop-view').forEach(pv => { pv.hidden = pv.dataset.cmpview !== v; });
      cmpBtn.addEventListener('click', (e) => { e.stopPropagation(); pop.hidden = !pop.hidden; if (!pop.hidden) showView('main'); });
      pop.addEventListener('click', (e) => e.stopPropagation());
      document.addEventListener('click', () => { pop.hidden = true; });
      pop.querySelector('[data-cmpgoto="segments"]')?.addEventListener('click', () => showView('segments'));
      pop.querySelector('#sc-cmp-back')?.addEventListener('click', () => showView('main'));
      /* applying the Age segment adds the age columns to the table */
      const ageCb = document.getElementById('sc-seg-age-cb');
      const ageSeg = pop.querySelector('.sc-seg[data-seg="age"]');
      const ageCats = ageSeg ? ageSeg.querySelectorAll('.sc-seg-cat .cb') : [];
      const cmpCount = document.getElementById('sc-cmp-count');
      const segApplied = document.getElementById('sc-seg-applied');
      const T3 = (s) => window.tr ? tr(s) : s;
      const quickChips = pop.querySelectorAll('.sc-quick-chip');
      const resetBtn = document.querySelector('.sc-reset');
      const defaultQuick = [...quickChips].map(c => c.classList.contains('is-active'));   /* default comparison state */
      const updateReset = () => { if (resetBtn) resetBtn.disabled = !((ageCb && ageCb.checked) || [...quickChips].some((c, i) => c.classList.contains('is-active') !== defaultQuick[i])); };
      /* "X selected" = active quick comparisons + the Age segment when applied */
      const recomputeCount = () => {
        const active = pop.querySelectorAll('.sc-quick-chip.is-active').length + (ageCb && ageCb.checked ? 1 : 0);
        cmpCount.textContent = T3('{n} selected').replace('{n}', String(active));
        updateReset();
      };
      const hideAgeCol = (key, hidden) => {
        table.querySelectorAll(`[data-age="${key}"]`).forEach(el => { el.style.display = hidden ? 'none' : ''; });
      };
      const applyAge = () => {
        const on = ageCb.checked;
        table.classList.toggle('seg-age', on);
        ageSeg.classList.toggle('is-selected', on);
        if (on) ageSeg.classList.add('is-open');
        ageCats.forEach(c => { c.checked = on; if (c.dataset.cat) hideAgeCol(c.dataset.cat, !on); });   /* sub-categories follow the crossing */
        segApplied.textContent = T3('{n} applied').replace('{n}', on ? '1' : '0');
        recomputeCount();
      };
      ageCb?.addEventListener('change', applyAge);
      /* quick comparisons toggle their column in the table on/off */
      const setColVisible = (col, vis) => { table.querySelectorAll(`[data-col="${col}"]`).forEach(el => { el.style.display = vis ? 'flex' : 'none'; }); };
      quickChips.forEach(chip => {
        if (chip.dataset.qcol) setColVisible(chip.dataset.qcol, chip.classList.contains('is-active'));   /* initial state */
        chip.addEventListener('click', () => {
          chip.classList.toggle('is-active');
          if (chip.dataset.qcol) setColVisible(chip.dataset.qcol, chip.classList.contains('is-active'));
          recomputeCount();
        });
      });
      /* a single sub-category toggles just its own column in the scores table */
      ageCats.forEach(c => c.addEventListener('change', () => {
        if (c.dataset.cat) hideAgeCol(c.dataset.cat, !c.checked);
      }));
      /* expand/collapse a segment by clicking its title; opening Age auto-selects it + all categories */
      pop.querySelectorAll('.sc-seg-title').forEach(t => t.addEventListener('click', () => {
        const seg = t.closest('.sc-seg');
        const opening = !seg.classList.contains('is-open');
        seg.classList.toggle('is-open');
        if (opening && seg.dataset.seg === 'age' && ageCb && !ageCb.checked) { ageCb.checked = true; applyAge(); }
      }));
      /* Reset → restore the default comparisons (drop segments, restore default quick comparisons) */
      resetBtn?.addEventListener('click', () => {
        if (resetBtn.disabled) return;
        quickChips.forEach((c, i) => { const want = defaultQuick[i]; if (c.classList.contains('is-active') !== want) { c.classList.toggle('is-active', want); if (c.dataset.qcol) setColVisible(c.dataset.qcol, want); } });
        if (ageCb && ageCb.checked) { ageCb.checked = false; applyAge(); ageSeg.classList.remove('is-open'); }
        recomputeCount();
      });
      updateReset();   /* initial disabled state */
    }
  })();

  /* Per-question side panel: open from a Scores row, populate, draw the chart */
  (function wireScorePanel() {
    const scp = document.getElementById('scp-overlay');
    if (!scp) return;
    const T2 = (s) => window.tr ? tr(s) : s;
    let scpChart = null;
    const clamp = (v, max) => Math.max(0, Math.min(max, v));
    const open = (row) => {
      /* The eNPS question has its own dedicated side panel */
      if (row.dataset.enps) { const np = document.getElementById('npsp-overlay'); if (np) np.hidden = false; return; }
      const q = row.dataset.q;
      const scale = row.dataset.scale === '10' ? '10' : '%';
      const max = scale === '10' ? 10 : 100;
      const group = parseFloat(row.dataset.group);
      const bench = parseFloat(row.dataset.bench);
      const org = row.dataset.org !== '' ? parseFloat(row.dataset.org) : group;
      const fmtv = (v) => scale === '10' ? Number(v).toFixed(1) : Math.round(v) + '%';
      document.getElementById('scp-title').textContent = T2(q);
      loadActions(scp, q, fmtv(group));   /* Actions tab: per-question goal/description/actions + score */
      /* distribution — always a 5-point scale; the two "agree" buckets sum to the score */
      const agreeTotal = Math.round(scale === '10' ? group * 10 : group);
      const sAgree = Math.round(agreeTotal * 0.65);
      const agree = agreeTotal - sAgree;
      const rest = 100 - agreeTotal;
      const sDis = Math.round(rest * 0.25);
      const disagree = Math.round(rest * 0.40);
      const neutral = rest - sDis - disagree;
      const segs = [
        { cls: 'is-sdis', v: sDis }, { cls: 'is-disagree', v: disagree }, { cls: 'is-neutral', v: neutral },
        { cls: 'is-agree', v: agree }, { cls: 'is-sagree', v: sAgree }
      ];
      document.getElementById('scp-dist-bar').innerHTML = segs.map(s => `<div class="dist-seg ${s.cls}" style="width:${s.v}%">${s.v >= 12 ? s.v + '%' : ''}</div>`).join('');
      const br = document.getElementById('scp-agree-bracket');
      br.style.width = agreeTotal + '%';
      document.getElementById('scp-agree-lbl').textContent = T2('{n}% agree with this statement').replace('{n}', agreeTotal);
      /* comparison cards — show the organization by name (Novanta B.V.); skip it when the group already IS the organization */
      const cards = [{ lbl: d.groupName, val: fmtv(group) }];
      if (groupKey(d) !== 'novanta') cards.push({ lbl: ORG_LABEL, val: fmtv(org) });
      cards.push({ lbl: T2('Effectory Index'), val: fmtv(bench) });
      document.getElementById('scp-cards').innerHTML = cards.map(c => `<div class="engp-card-item"><div class="engp-card-lbl">${c.lbl}</div><div class="engp-card-val">${c.val}</div></div>`).join('');
      document.getElementById('scp-chart-grp').textContent = d.groupName;
      /* theme section (only if the question belongs to a theme) */
      const theme = QUESTION_THEME[q];
      const sec = document.getElementById('scp-theme-section');
      if (theme) {
        sec.hidden = false;
        const g = groupKey(d), p = periodKey(d);
        document.getElementById('scp-theme-tag').textContent = T2(theme);
        document.getElementById('scp-theme-rows').innerHTML = PANEL_THEMES[theme].map(x =>
          `<div class="engp-q-row"><span class="engp-q-text">${T2(x.q)}</span><span class="engp-q-score">${x.v[g][p]}%</span></div>`).join('');
      } else { sec.hidden = true; }
      /* Tips & Best practices tab content */
      const tip = TIPS[q];
      const tipsUl = document.getElementById('scp-tips'), bpEl = document.getElementById('scp-bp');
      if (tip) {
        const L = window.LANG || 'en';
        const tArr = (tip.tips && (tip.tips[L] || tip.tips.en)) || [];
        const bpText = (tip.bp && (tip.bp[L] || tip.bp.en)) || '';
        tipsUl.innerHTML = tArr.map(t => `<li>${t}</li>`).join('');
        bpEl.textContent = bpText;
      } else {
        tipsUl.innerHTML = `<li>${T2('No tips available for this question yet.')}</li>`;
        bpEl.textContent = '';
      }
      /* always open on the Insights tab */
      scp.querySelectorAll('.sp-tab').forEach(t => t.classList.toggle('is-active', t.dataset.scptab === 'insights'));
      scp.querySelectorAll('.scp-tabpanel').forEach(pn => { pn.hidden = pn.dataset.scptab !== 'insights'; });
      scp.hidden = false;
      /* align the agree bracket to the real left edge of the "agree" segment (gaps make the %-width imprecise) */
      (() => {
        const bar = document.getElementById('scp-dist-bar');
        const ag = bar.querySelector('.is-agree') || bar.querySelector('.is-sagree');
        if (ag) { const bR = bar.getBoundingClientRect(), aR = ag.getBoundingClientRect(); br.style.width = Math.max(0, Math.round(bR.right - aR.left)) + 'px'; }
      })();
      /* score-over-time chart */
      if (scpChart) { scpChart.destroy(); scpChart = null; }
      /* Only the current survey and (if present) the previous survey, labelled by end date */
      const hasPrev = row.dataset.prev != null;
      const trd = trendSeries(group, hasPrev ? parseFloat(row.dataset.prev) : null, max);
      scpChart = makeLineChart(document.getElementById('scp-chart'), trd.labels, trd.data, { max, unit: scale === '10' ? '' : '%' });
    };
    document.querySelectorAll('#view-scores .sc-row').forEach(row => {
      row.querySelector('.sc-q')?.addEventListener('click', () => open(row));
      row.querySelector('.sc-insights')?.addEventListener('click', (e) => { e.stopPropagation(); open(row); });
    });
    /* pin → goal popovers are wired generically by wirePins() (scores, themes, overview cards) */
    /* Tab switching inside the panel (Insights / Tips & Best practices / Actions) */
    scp.querySelectorAll('.sp-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const t = tab.dataset.scptab;
        scp.querySelectorAll('.sp-tab').forEach(x => x.classList.toggle('is-active', x === tab));
        scp.querySelectorAll('.scp-tabpanel').forEach(pn => { pn.hidden = pn.dataset.scptab !== t; });
      });
    });
    const closeScp = () => { scp.hidden = true; };
    document.getElementById('scp-close').addEventListener('click', closeScp);
    scp.addEventListener('click', (e) => { if (e.target === scp) closeScp(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !scp.hidden) closeScp(); });
    wireActions(scp);
  })();

  /* AI summary show more / less */
  const aiSummary = document.getElementById('ai-summary');
  const aiToggle = document.getElementById('ai-toggle');
  aiToggle.addEventListener('click', () => {
    const open = aiSummary.classList.toggle('is-open');
    aiToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  /* Translate the fixed UI text (nav, tabs, headings, buttons …) */
  if (window.translateDOM) translateDOM(document.getElementById('root'));

  /* Language popover (click the user's name in the sidebar) */
  const userBtn = document.getElementById('mn-user-btn');
  const langPop = document.getElementById('lang-pop');
  if (userBtn && langPop) {
    /* Selected state (is-selected + check) is rendered in the markup; re-render on change. */
    const rerender = () => { const av = document.querySelector('.tab.is-active[data-view]'); renderOverview(variant, av ? av.dataset.view : 'overview'); };
    langPop.querySelectorAll('[data-lang]').forEach(b => {
      b.addEventListener('click', (e) => { e.stopPropagation(); if (window.setLang) setLang(b.dataset.lang); rerender(); });
    });
    /* Theme toggle (light / dark), persisted; re-render so canvas charts recolor. */
    langPop.querySelectorAll('[data-theme-opt]').forEach(b => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        try { localStorage.setItem('effx-theme', b.dataset.themeOpt); } catch (err) {}
        document.documentElement.setAttribute('data-theme', b.dataset.themeOpt);
        rerender();
      });
    });
    userBtn.addEventListener('click', (e) => { e.stopPropagation(); langPop.hidden = !langPop.hidden; });
    document.addEventListener('click', () => { langPop.hidden = true; });
  }

  /* Icons */
  if (window.Icons) Icons.render(document);
}

/* ---------- Tooltip auto-position ----------
   Render the bubble in a fixed layer so no overflow:hidden ancestor (cards,
   scroll containers) can clip it. Delegated on document so it survives the
   in-place re-renders of #root. On hover/focus: measure the trigger, pick the
   first direction that fits (preferred side first, then above > below > right
   > left), and place the bubble with position:fixed, clamped to the viewport.
   See design-system-reference.md → Tooltip. */
(function () {
  const GAP = 10, PAD = 8;
  const place = (demo) => {
    const tip = demo.querySelector('.tooltip');
    if (!tip) return;
    tip.style.position = 'fixed';
    tip.style.margin = '0';
    tip.style.transform = 'none';
    tip.style.left = '0';
    tip.style.top = '0';
    tip.style.right = 'auto';
    tip.style.bottom = 'auto';
    tip.style.height = 'auto';
    const t = demo.getBoundingClientRect();
    const tw = tip.offsetWidth, th = tip.offsetHeight;
    const vw = window.innerWidth, vh = window.innerHeight;
    const pref = tip.classList.contains('is-below') ? 'below'
      : tip.classList.contains('is-left') ? 'left'
      : tip.classList.contains('is-right') ? 'right' : 'above';
    const fits = {
      above: t.top - th - GAP >= PAD,
      below: t.bottom + th + GAP <= vh - PAD,
      left:  t.left - tw - GAP >= PAD,
      right: t.right + tw + GAP <= vw - PAD
    };
    const dir = [pref, 'above', 'below', 'right', 'left'].find(d => fits[d]) || pref;
    let x, y;
    if (dir === 'above')      { x = t.left + t.width / 2 - tw / 2; y = t.top - th - GAP; }
    else if (dir === 'below') { x = t.left + t.width / 2 - tw / 2; y = t.bottom + GAP; }
    else if (dir === 'left')  { x = t.left - tw - GAP; y = t.top + t.height / 2 - th / 2; }
    else                      { x = t.right + GAP; y = t.top + t.height / 2 - th / 2; }
    tip.style.left = Math.max(PAD, Math.min(x, vw - tw - PAD)) + 'px';
    tip.style.top = Math.max(PAD, Math.min(y, vh - th - PAD)) + 'px';
    tip.classList.remove('is-above', 'is-below', 'is-left', 'is-right');
    tip.classList.add('is-' + dir);
  };
  const onEnter = (e) => {
    const demo = e.target.closest && e.target.closest('.tt-demo');
    if (demo) place(demo);
  };
  document.addEventListener('mouseover', onEnter);
  document.addEventListener('focusin', onEnter);
})();

  