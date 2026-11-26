REM_REGISTREER({
  klas: '6doSW', id: 'SO4', titel: 'SO 4 Verloop van functies',
  leerstof: 'H10: stijgen en dalen, extrema, hol en bol, buigpunten, tweede-afgeleidetest, toepassingen (kosten, winst) en extremumproblemen.',
  vragen: [
    { id: 'q1', onderwerp: 'Tekentabel van $f\'$', opgave: 'Gegeven: $f(x)=x^3-6x^2+9x+1$. Stel de tekentabel van $f\'$ op.',
      velden: [{ type: 'teken', x: ['1', '3'], rij: "f'(x)", ok: '+0-0+', check: { tekenVan: '3x^2-12x+9' } }],
      tip: '$f\'(x)=3x^2-12x+9=3(x^2-4x+3)$. Zoek de nulwaarden.',
      uitwerking: '$f\'(x)=3x^2-12x+9=3(x-1)(x-3)$\n$x \\,|\\, 1 \\quad 3$\n$f\'(x) \\,|\\, + \\;0\\; - \\;0\\; +$' },
    { id: 'q2', onderwerp: 'Extrema', opgave: 'Gebruik de vorige oefening ($f(x)=x^3-6x^2+9x+1$) en geef de extrema.',
      velden: [
        { type: 'getal', label: 'MAX: $x=$', ok: '1' }, { type: 'getal', label: 'MAX: $y=$', ok: '5', check: { waarde: '1-6+9+1' } },
        { type: 'getal', label: 'MIN: $x=$', ok: '3' }, { type: 'getal', label: 'MIN: $y=$', ok: '1', check: { waarde: '27-54+27+1' } }
      ],
      uitwerking: '$f\'$ wisselt van $+$ naar $-$ in $x=1$: MAX $(1,f(1))=(1,5)$\n$f\'$ wisselt van $-$ naar $+$ in $x=3$: MIN $(3,f(3))=(3,1)$' },
    { id: 'q3', onderwerp: 'Hol, bol en buigpunt', opgave: 'Nog steeds $f(x)=x^3-6x^2+9x+1$.',
      velden: [
        { type: 'kies', label: 'Op $]-\\infty,2[$ is de grafiek', opties: ['hol (∪)', 'bol (∩)'], ok: 'bol (∩)' },
        { type: 'getal', label: 'Buigpunt: $x=$', ok: '2' }, { type: 'getal', label: 'Buigpunt: $y=$', ok: '3', check: { waarde: '8-24+18+1' } }
      ],
      uitwerking: '$f\'\'(x)=6x-12$: $-$ voor $x<2$, $+$ voor $x>2$.\n$f\'\'<0$: bol (∩) op $]-\\infty,2[$; $f\'\'>0$: hol (∪) op $]2,+\\infty[$.\nB.P. $(2,f(2))=(2,3)$' },
    { id: 'q4', onderwerp: 'Tweede-afgeleidetest', opgave: 'Gegeven: $f(x)=x+\\dfrac{4}{x}$. Je weet dat $f\'(2)=0$.',
      velden: [
        { type: 'getal', label: '$f\'\'(2)=$', ok: '1', check: { waarde: '8/2^3' } },
        { type: 'kies', label: 'In $x=2$ heeft $f$ een', opties: ['relatief minimum', 'relatief maximum', 'buigpunt'], ok: 'relatief minimum' }
      ],
      tip: '$f\'(x)=1-\\dfrac{4}{x^2}$, dus $f\'\'(x)=\\dfrac{8}{x^3}$. Is $f\'\'(2)$ positief (∪) of negatief (∩)?',
      uitwerking: '$f\'\'(x)=\\dfrac{8}{x^3}$, $f\'\'(2)=1>0$: hol, dus MIN in $x=2$: $(2,4)$.' },
    { id: 'q5', onderwerp: 'Buigpunten', opgave: 'Gegeven: $f(x)=x^4-6x^2$. Stel de tekentabel van $f\'\'$ op en geef de $y$-coördinaat van de buigpunten.',
      velden: [
        { type: 'teken', x: ['-1', '1'], rij: "f''(x)", ok: '+0-0+', check: { tekenVan: '12x^2-12' } },
        { type: 'getal', label: '$y$-coördinaat van de buigpunten:', ok: '-5' }
      ],
      uitwerking: '$f\'(x)=4x^3-12x$, $f\'\'(x)=12x^2-12=12(x-1)(x+1)$\n$f\'\'$: $+\\;0\\;-\\;0\\;+$ → B.P. in $x=-1$ en $x=1$\n$f(\\pm 1)=1-6=-5$: B.P. $(-1,-5)$ en $(1,-5)$' },
    { id: 'q6', onderwerp: 'Betekenis van de afgeleide', opgave: 'De totale kost (in euro) om $x$ stuks te maken is $K(x)=x^3-12x^2+60x+100$.',
      velden: [
        { type: 'getal', label: '$K\'(5)=$', ok: '15', check: { waarde: '3*25-24*5+60' } },
        { type: 'mc', label: 'Wat betekent dat?', ok: 0, opties: ['Als je van 5 naar 6 stuks gaat, stijgt de totale kost met ongeveer 15 euro.', '5 stuks kosten samen 15 euro.', 'Elk stuk kost gemiddeld 15 euro.', 'Bij 5 stuks is de kost minimaal.'],
          waarom: ['', 'Dat zou $K(5)=15$ zijn; $K(5)=225$.', 'De gemiddelde kost is $\\frac{K(5)}{5}=45$ euro.', 'Dan zou $K\'(5)=0$ moeten zijn.'] }
      ],
      uitwerking: '$K\'(x)=3x^2-24x+60$, $K\'(5)=75-120+60=15$\nDe afgeleide is de ogenblikkelijke verandering: één stuk meer kost ongeveer 15 euro extra.' },
    { id: 'q7', onderwerp: 'Maximale winst', opgave: 'Met dezelfde kost $K(x)=x^3-12x^2+60x+100$ verkoop je elk stuk aan 120 euro. Voor welk aantal is de winst maximaal en hoeveel is die winst?',
      velden: [
        { type: 'getal', label: 'Aantal stuks:', ok: '10' },
        { type: 'getal', label: 'Maximale winst (euro):', ok: '700', check: { waarde: '1200-(1000-1200+600+100)' } }
      ],
      tip: 'Winst = opbrengst − kost: $W(x)=120x-K(x)$. Stel $W\'(x)=0$.',
      uitwerking: '$W(x)=120x-(x^3-12x^2+60x+100)=-x^3+12x^2+60x-100$\n$W\'(x)=-3x^2+24x+60=-3(x^2-8x-20)=-3(x-10)(x+2)$\n$W\'$: $+$ voor $x<10$, $-$ voor $x>10$: MAX in $x=10$\n$W(10)=-1000+1200+600-100=700$ euro' },
    { id: 'q8', onderwerp: 'Extremumprobleem', opgave: 'Uit een vierkant stuk karton van 24 cm op 24 cm knip je in elke hoek een vierkantje met zijde $x$ weg en plooi je een open doos. Voor welke $x$ is de inhoud maximaal?',
      velden: [
        { type: 'getal', label: '$x=$ (cm)', ok: '4' },
        { type: 'getal', label: 'Maximale inhoud (cm³):', ok: '1024', check: { waarde: '4*16^2' } }
      ],
      tip: 'Stappenplan: 1) wat is de variabele, 2) functie opstellen: $V(x)=x(24-2x)^2$, 3) domein, 4) afleiden en nul stellen, 5) tekentabel, 6) antwoord.',
      uitwerking: '$V(x)=x(24-2x)^2$ met $x\\in\\,]0,12[$\n$V\'(x)=(24-2x)^2+x\\cdot 2(24-2x)\\cdot(-2)=(24-2x)(24-6x)$\n$V\'(x)=0 \\iff x=12$ (valt weg) of $x=4$\n$V\'$: $+$ voor $x<4$, $-$ na 4: MAX\n$V(4)=4\\cdot 16^2=1024$ cm³' },
    { id: 'q9', onderwerp: 'Parameter bepalen', opgave: 'Bepaal $a$ zodat $f(x)=x^3+ax^2+3$ een extremum heeft in $x=2$.',
      velden: [{ type: 'getal', label: '$a=$', ok: '-3' }],
      uitwerking: '$f\'(x)=3x^2+2ax$\n$f\'(2)=0 \\iff 12+4a=0 \\iff a=-3$\nControle: $f\'(x)=3x^2-6x=3x(x-2)$ wisselt van teken in 2 ✓' },
    { id: 'q10', onderwerp: 'Buigpunten van een vierdegraadsfunctie', opgave: 'Gegeven: $f(x)=x^4-4x^3$.',
      velden: [
        { type: 'verz', label: '$x$-coördinaten van de buigpunten:', ok: ['0', '2'], check: { vgl: '12x^2-24x=0', bereik: [-10, 10] } },
        { type: 'getal', label: '$f(2)=$', ok: '-16' }
      ],
      uitwerking: '$f\'(x)=4x^3-12x^2$, $f\'\'(x)=12x^2-24x=12x(x-2)$\n$f\'\'$ wisselt van teken in 0 en 2: B.P. $(0,0)$ en $(2,-16)$' }
  ]
});
