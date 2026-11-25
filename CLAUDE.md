# Wiskunde-apps: werkafspraken voor Claude

Webapps wiskunde voor leerlingen van 17-18 jaar (5de en 6de jaar). Elke app is één los
HTML-bestand zonder build-stap. `index.html` is het portaal en `tracker.js` stuurt de
resultaten door naar het dashboard (Supabase). Bibliotheken (KaTeX, MathJax, jsPDF,
html2canvas) staan lokaal in `lib/`, en `sw.js` maakt de apps offline bruikbaar.

## Plugins (projectniveau, zie `.claude/settings.json`)

- `frontend-design@claude-plugins-official`: vormgeving
- `superpowers@superpowers-marketplace`: plannings- en controleworkflow

## Vormgeving: wanneer en hoe `frontend-design`

Gebruik bij nieuwe webapps standaard de skill `frontend-design`, tenzij gevraagd wordt
de bestaande huisstijl te volgen.

### Leerlingenapps (alles wat via het portaal `index.html` bereikbaar is)

- **Bestaande apps nooit volledig herontwerpen.**
- Behoud strikt de bestaande huisstijl:
  - **Kleurencodes**: neem de kleuren over uit de app zelf. Kies bij een nieuwe
    leerlingenapp de kleuren van de meest verwante bestaande app. Geen nieuwe paletten
    of lettertypes.
  - **Header en schermopbouw**: startscherm met badge, titel en korte uitleg, net zoals
    in de bestaande apps.
  - **Terugknoppen**: het blok `PORTAAL-KOPPELING` (hetzelfde in elke app) met de link
    `← Alle apps` naar `index.html`, de leerlingcode, `portaalLogOpgave`/`portaalLogToets`
    en `<script src="tracker.js"></script>` onderaan. Daarnaast de `.terug-knop`
    `← Startscherm` binnen de app. Dit blok ongewijzigd overnemen.
  - **Print-CSS en PDF-export**: de bestaande `@media print`-regels en
    `data-html2canvas-ignore` op elementen die niet in de PDF of op papier horen.
- Gebruik `frontend-design` **uitsluitend** om de interne lay-out, de mobiele weergave
  (de leerlingen werken vaak op hun gsm) en de gebruiksvriendelijkheid te verfijnen.

### Volledig losstaande leraartools

- Gebruik `frontend-design` vrij om een moderne, passende interface te ontwerpen.

## Werkwijze: `superpowers`

- **Nieuwe apps en grotere wijzigingen**: doorloop eerst de plannings- en
  controleworkflow van superpowers: brainstorming (vragen stellen), dan een plan
  schrijven, dan uitvoeren en ten slotte controleren voor je klaar meldt
  (verification-before-completion).
- **Geen extra testframeworks**: voeg geen testbestanden, `package.json`, Jest,
  Vitest, ... toe aan de repo, en pas de skill test-driven-development niet toe.
  Controleer door de app echt in de browser te openen (bv. met de voorgeïnstalleerde
  Chromium in de cloudsessie), op desktopbreedte én op gsm-breedte, en kijk ook het
  afdrukvoorbeeld na.
- **Geen git worktrees**: werk gewoon op de toegewezen branch.
- Kleine fixes (tekst, één bug, een kleur) mogen rechtstreeks, zonder de volledige
  workflow.
