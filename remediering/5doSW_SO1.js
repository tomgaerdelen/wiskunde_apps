REM_REGISTREER({
  klas: '5doSW', id: 'SO1', titel: 'SO 1 Begrippen i.v.m. functies',
  leerstof: 'H1 t.e.m. 1.2.4: functie of niet, voorschrift uit een context, functiewaarden, aflezen uit een grafiek, tekentabel, domein en bereik, verloopschema, symmetrie (even en oneven).',
  vragen: [
    {
      id: 'q1', onderwerp: 'Functie of niet',
      opgave: 'Welk verband is **geen** functie van $x$ naar $y$?',
      velden: [{ type: 'mc', opties: ['$y=\\sqrt{x}$', '$x=y^2$', '$y=|x|$', '$y=3$'], ok: 1,
        waarom: ['$y=\\sqrt{x}$ geeft voor elke $x \\geq 0$ precies één $y$: wel een functie.', '', '$y=|x|$ geeft voor elke $x$ precies één $y$: wel een functie.', '$y=3$ is een horizontale rechte: elke $x$ heeft precies één $y$, dus wel een functie.'] }],
      tip: 'Kies een $x$-waarde en kijk hoeveel $y$-waarden erbij horen. Bij een functie is dat er hoogstens één (verticale-lijntest).',
      uitwerking: '$x=y^2$: neem $x=4$, dan is $y=2$ of $y=-2$.\nNee, voor 1 $x$-waarde bestaan er meerdere $y$-waarden. Dus geen functie.\nDe andere drie geven voor elke $x$ hoogstens één $y$.'
    },
    {
      id: 'q2', onderwerp: 'Voorschrift uit een context',
      opgave: 'Een taxirit kost een vast instapbedrag van € 3,50 plus € 2,20 per gereden kilometer.\nStel $x$ = het aantal gereden km en $k(x)$ = de prijs in euro.',
      velden: [
        { type: 'expr', label: 'Voorschrift: $k(x)=$', ok: '2.2x+3.5', dom: [0, 50] },
        { type: 'getal', label: 'Hoeveel km rijd je voor € 25,50?', ok: '10' }
      ],
      uitwerking: '$k(x)=2{,}2x+3{,}5$\n$k(x)=25{,}5 \\iff 2{,}2x+3{,}5=25{,}5 \\iff 2{,}2x=22 \\iff x=10$\nOpl: je rijdt 10 km.'
    },
    {
      id: 'q3', onderwerp: 'Functiewaarden berekenen',
      opgave: 'Gegeven: $f(x)=2x^2-3x$.',
      velden: [
        { type: 'getal', label: '$f(-2)=$', ok: '14', check: { waarde: '2*(-2)^2-3*(-2)' } },
        { type: 'verz', label: 'Voor welke $x$ is $f(x)=0$?', ok: ['0', '3/2'], check: { vgl: '2x^2-3x=0', bereik: [-10, 10] } }
      ],
      tip: 'Vul $-2$ in **tussen haakjes**: $2\\cdot(-2)^2-3\\cdot(-2)$. Voor $f(x)=0$: zet $x$ buiten haakjes.',
      uitwerking: '$f(-2)=2\\cdot(-2)^2-3\\cdot(-2)=2\\cdot 4+6=14$\n$f(x)=0 \\iff 2x^2-3x=0 \\iff x(2x-3)=0 \\iff x=0$ of $x=\\frac{3}{2}$\n$V=\\left\\{0\\,;\\,\\frac{3}{2}\\right\\}$'
    },
    {
      id: 'q4', onderwerp: 'Aflezen uit een grafiek',
      opgave: 'Hieronder zie je de grafiek van een functie $f$.',
      fig: { x: [-3, 5], y: [-4, 5], krommen: [{ f: '-(x-1)^2+4' }] },
      velden: [
        { type: 'getal', label: '$f(2)=$', ok: '3' },
        { type: 'verz', label: 'Voor welke $x$ is $f(x)=0$? (de nulwaarden)', ok: ['-1', '3'], check: { vgl: '-(x-1)^2+4=0', bereik: [-10, 10] } }
      ],
      uitwerking: 'Bij $x=2$ lees je op de grafiek $y=3$, dus $f(2)=3$.\nDe grafiek snijdt de $x$-as in $x=-1$ en $x=3$.\n$V=\\{-1\\,;\\,3\\}$'
    },
    {
      id: 'q5', onderwerp: 'Tekentabel uit een grafiek',
      opgave: 'Stel de tekentabel op van de functie $f$ waarvan je de grafiek ziet.',
      fig: { x: [-4, 3], y: [-4, 4], krommen: [{ f: '(x+2)*(x-1)^2/2' }] },
      velden: [{ type: 'teken', x: ['-2', '1'], ok: '-0+0+', check: { tekenVan: '(x+2)*(x-1)^2/2' } }],
      tip: 'Zet in de $x$-rij enkel de nulwaarden. Let op: in $x=1$ raakt de grafiek de $x$-as maar gaat ze er niet door.',
      uitwerking: 'Nulwaarden: $x=-2$ en $x=1$.\nLinks van $-2$ ligt de grafiek onder de $x$-as: $-$. Tussen $-2$ en $1$ erboven: $+$. In $x=1$ raakt ze de $x$-as en blijft erboven: $+$.\n$x \\,|\\, -2 \\quad 1$\n$f(x) \\,|\\, - \\;\\; 0 \\;\\; + \\;\\; 0 \\;\\; +$',
      les: 'Een raakpunt met de $x$-as is een nulwaarde zonder tekenwissel.'
    },
    {
      id: 'q6', onderwerp: 'Domein en bereik aflezen',
      opgave: 'Lees het domein en het bereik af van de functie $f$ (de grafiek begint in het punt $(-3, -1)$ en loopt verder naar rechts).',
      fig: { x: [-4, 6], y: [-2, 3], krommen: [{ f: 'sqrt(x+3)-1', van: -3 }], punten: [{ x: -3, y: -1 }] },
      velden: [
        { type: 'interval', label: '$\\text{dom } f=$', ok: '[-3;+inf[' },
        { type: 'interval', label: '$\\text{ber } f=$', ok: '[-1;+inf[' }
      ],
      uitwerking: 'Domein: alle $x$-waarden waar de grafiek boven of onder ligt: vanaf $-3$ (inbegrepen) tot oneindig.\n$\\text{dom } f=[-3,+\\infty[$\nBereik: alle $y$-waarden: vanaf $-1$ (inbegrepen).\n$\\text{ber } f=[-1,+\\infty[$'
    },
    {
      id: 'q7', onderwerp: 'Verloopschema',
      opgave: 'Bekijk de grafiek van $f$ en vul aan.',
      fig: { x: [-3, 3], y: [-4, 4], krommen: [{ f: 'x^3-3x' }] },
      velden: [
        { type: 'getal', label: 'Het relatief maximum ligt bij $x=$', ok: '-1' },
        { type: 'getal', label: 'Het relatief maximum is $y=$', ok: '2', check: { waarde: '(-1)^3-3*(-1)' } },
        { type: 'kies', label: 'Op het interval $]-1, 1[$ is $f$', opties: ['stijgend', 'dalend', 'constant'], ok: 'dalend' }
      ],
      uitwerking: 'Verloopschema:\n$x \\,|\\, \\quad -1 \\quad\\quad 1$\n$f(x) \\,|\\, \\nearrow \\;\\; 2 \\;\\; \\searrow \\;\\; -2 \\;\\; \\nearrow$\n$\\phantom{f(x) |}\\quad\\;\\;$ MAX $\\quad$ MIN\nTussen $-1$ en $1$ daalt de grafiek.'
    },
    {
      id: 'q8', onderwerp: 'Even of oneven (algebraïsch)',
      opgave: 'Onderzoek algebraïsch of de functie even, oneven of geen van beide is. Bereken telkens eerst $f(-x)$ op papier.',
      velden: [
        { type: 'kies', label: '$f(x)=x^4-2x^2+3$ is', opties: ['even', 'oneven', 'geen van beide'], ok: 'even' },
        { type: 'kies', label: '$g(x)=x^3-x+1$ is', opties: ['even', 'oneven', 'geen van beide'], ok: 'geen van beide' }
      ],
      tip: 'Even: $f(-x)=f(x)$ (symmetrisch t.o.v. de $y$-as). Oneven: $f(-x)=-f(x)$ (symmetrisch t.o.v. de oorsprong).',
      uitwerking: '$f(-x)=(-x)^4-2(-x)^2+3=x^4-2x^2+3=f(x)$ dus $f$ is even (symmetrisch t.o.v. de $y$-as).\n$g(-x)=(-x)^3-(-x)+1=-x^3+x+1$\n$\\neq g(x)$ en $-g(x)=-x^3+x-1 \\neq g(-x)$, dus geen van beide.',
      les: 'Let op met de constante term: $+1$ verandert niet van teken in $g(-x)$, maar wel in $-g(x)$.'
    },
    {
      id: 'q9', onderwerp: 'Praktisch domein in een context',
      opgave: 'Een kaars is 24 cm hoog en brandt 1,5 cm per uur op. De hoogte na $t$ uur is $h(t)=24-1{,}5t$.',
      velden: [
        { type: 'getal', label: 'Na hoeveel uur is de kaars helemaal opgebrand?', ok: '16' },
        { type: 'interval', label: 'Praktisch domein: $\\text{dom } h=$', ok: '[0;16]' },
        { type: 'interval', label: 'Praktisch bereik: $\\text{ber } h=$', ok: '[0;24]' }
      ],
      uitwerking: '$h(t)=0 \\iff 24-1{,}5t=0 \\iff 1{,}5t=24 \\iff t=16$ uur.\nDe tijd loopt van 0 tot 16 uur: $\\text{dom } h=[0,16]$.\nDe hoogte gaat van 24 cm naar 0 cm: $\\text{ber } h=[0,24]$.'
    },
    {
      id: 'q10', onderwerp: 'Tekentabel uit het voorschrift',
      opgave: 'Gegeven: $f(x)=-2x+6$. Bereken de nulwaarde en stel de tekentabel op.',
      velden: [
        { type: 'getal', label: 'Nulwaarde: $x=$', ok: '3' },
        { type: 'teken', x: ['3'], ok: '+0-', check: { tekenVan: '-2x+6' } }
      ],
      uitwerking: '$-2x+6=0 \\iff -2x=-6 \\iff x=3$\nDe rico is $-2<0$: de rechte daalt, dus eerst positief, dan negatief.\n$x \\,|\\, \\;\\; 3$\n$f(x) \\,|\\, + \\;\\; 0 \\;\\; -$'
    }
  ]
});
