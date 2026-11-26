REM_REGISTREER({
  klas: '5duHT', id: 'SO1', titel: 'SO 1 Begrippen i.v.m. functies',
  leerstof: 'H1 Kenmerken van functies: functie of niet, formule uit een context, functiewaarden en tabel, tekentabel, domein en bereik, verloopschema, symmetrie en periodiciteit.',
  vragen: [
    {
      id: 'q1', onderwerp: 'Functie of niet',
      opgave: 'Welke tabel stelt **geen** functie voor?',
      velden: [{ type: 'mc', ok: 1, opties: [
        '$\\begin{array}{c|ccc} x & 1 & 2 & 3 \\\\ \\hline y & 4 & 4 & 4 \\end{array}$',
        '$\\begin{array}{c|ccc} x & 1 & 1 & 2 \\\\ \\hline y & 3 & 5 & 6 \\end{array}$',
        '$\\begin{array}{c|ccc} x & -1 & 0 & 1 \\\\ \\hline y & 1 & 0 & 1 \\end{array}$',
        '$\\begin{array}{c|ccc} x & 0 & 2 & 4 \\\\ \\hline y & 7 & 3 & -1 \\end{array}$'],
        waarom: ['Elke $x$ heeft precies één $y$ (dat die $y$ telkens 4 is, mag): wel een functie.', '', 'Elke $x$ heeft precies één $y$: wel een functie.', 'Elke $x$ heeft precies één $y$: wel een functie.'] }],
      uitwerking: 'In tabel B hoort bij $x=1$ zowel $y=3$ als $y=5$.\nNee, meerdere $y$-waarden voor 1 $x$-waarde: geen functie.'
    },
    {
      id: 'q2', onderwerp: 'Formule uit een context',
      opgave: 'Een schrijnwerker rekent € 45 voor de verplaatsing en € 38 per gewerkt uur.\nStel $u$ = het aantal uren en $k(u)$ = de prijs in euro.',
      velden: [
        { type: 'expr', label: '$k(u)=$', ok: '38u+45', vars: ['u'], dom: [0, 10] },
        { type: 'getal', label: 'Prijs voor 4 uur werk (in euro):', ok: '197' }
      ],
      uitwerking: '$k(u)=38u+45$\n$k(4)=38\\cdot 4+45=152+45=197$\nOpl: € 197'
    },
    {
      id: 'q3', onderwerp: 'Functiewaarden',
      opgave: 'Gegeven: $f(x)=x^2-2x$. Vul aan.',
      velden: [
        { type: 'getal', label: '$f(-1)=$', ok: '3', check: { waarde: '(-1)^2-2*(-1)' } },
        { type: 'getal', label: '$f(4)=$', ok: '8' },
        { type: 'verz', label: 'Voor welke $x$ is $f(x)=0$?', ok: ['0', '2'], check: { vgl: 'x^2-2x=0', bereik: [-10, 10] } }
      ],
      tip: 'Vul een negatief getal altijd in **tussen haakjes**: $(-1)^2-2\\cdot(-1)$.',
      uitwerking: '$f(-1)=(-1)^2-2\\cdot(-1)=1+2=3$\n$f(4)=4^2-2\\cdot 4=16-8=8$\n$x^2-2x=0 \\iff x(x-2)=0 \\iff x=0$ of $x=2$\n$V=\\{0\\,;\\,2\\}$'
    },
    {
      id: 'q4', onderwerp: 'Tekentabel uit een grafiek',
      opgave: 'Stel de tekentabel op van $f$.',
      fig: { x: [-5, 3], y: [-3, 5], krommen: [{ f: '-0.5(x+3)(x-1)' }] },
      velden: [{ type: 'teken', x: ['-3', '1'], ok: '-0+0-', check: { tekenVan: '-0.5(x+3)(x-1)' } }],
      uitwerking: 'Nulwaarden: $-3$ en $1$.\nLinks van $-3$ en rechts van $1$ ligt de grafiek onder de $x$-as, daartussen erboven.\n$x \\,|\\, -3 \\quad 1$\n$f(x) \\,|\\, - \\;0\\; + \\;0\\; -$'
    },
    {
      id: 'q5', onderwerp: 'Domein en bereik',
      opgave: 'De grafiek van $f$ loopt van het punt $(-2,3)$ tot het punt $(4,3)$. Het laagste punt is $(1\\,;\\,-1{,}5)$.',
      fig: { x: [-3, 5], y: [-2, 4], krommen: [{ f: '0.5x^2-x-1', van: -2, tot: 4 }], punten: [{ x: -2, y: 3 }, { x: 4, y: 3 }] },
      velden: [
        { type: 'interval', label: '$\\text{dom } f=$', ok: '[-2;4]' },
        { type: 'interval', label: '$\\text{ber } f=$', ok: '[-1,5;3]' }
      ],
      tip: 'Domein: van links naar rechts kijken ($x$-waarden). Bereik: van onder naar boven ($y$-waarden). Gebruik ; tussen de grenzen.',
      uitwerking: '$\\text{dom } f=[-2,4]$\n$\\text{ber } f=[-1{,}5\\,;\\,3]$ (laagste $y$-waarde $-1{,}5$, hoogste 3)'
    },
    {
      id: 'q6', onderwerp: 'Verloopschema',
      opgave: 'Bekijk de grafiek van $f$ en vul aan.',
      fig: { x: [-4, 4], y: [-3, 3], krommen: [{ f: '-x^3/8+1.5x' }] },
      velden: [
        { type: 'getal', label: 'Het minimum ligt bij $x=$', ok: '-2' },
        { type: 'getal', label: 'Het maximum is $y=$', ok: '2' },
        { type: 'kies', label: 'Op $]-2, 2[$ is $f$', opties: ['stijgend', 'dalend'], ok: 'stijgend' }
      ],
      uitwerking: '$x \\,|\\, \\quad -2 \\quad\\quad 2$\n$f(x) \\,|\\, \\searrow \\; -2 \\; \\nearrow \\; 2 \\; \\searrow$\n$\\phantom{f(x)|}\\quad\\;$ MIN $\\quad$ MAX'
    },
    {
      id: 'q7', onderwerp: 'Symmetrieas',
      opgave: 'De grafiek van $f$ is symmetrisch t.o.v. een verticale rechte. Geef de vergelijking van die symmetrieas.',
      fig: { x: [-1, 7], y: [-2, 5], krommen: [{ f: '(x-3)^2-1' }] },
      velden: [{ type: 'getal', label: 'Symmetrieas: $x=$', ok: '3' }],
      uitwerking: 'De verticale rechte door het laagste punt $(3,-1)$: $x=3$.'
    },
    {
      id: 'q8', onderwerp: 'Symmetriemiddelpunt',
      opgave: 'De grafiek van $f$ is symmetrisch t.o.v. een punt. Geef de coördinaten van dat symmetriemiddelpunt.',
      fig: { x: [-2, 4], y: [-2, 6], krommen: [{ f: '(x-1)^3+2' }] },
      velden: [
        { type: 'getal', label: '$x$-coördinaat:', ok: '1' },
        { type: 'getal', label: '$y$-coördinaat:', ok: '2' }
      ],
      tip: 'Zoek het punt waar de grafiek "draait": als je de grafiek 180° rond dat punt draait, valt ze op zichzelf.',
      uitwerking: 'Symmetriemiddelpunt $M(1,2)$.'
    },
    {
      id: 'q9', onderwerp: 'Periodiciteit',
      opgave: 'De grafiek van $f$ is periodiek.',
      fig: { x: [-4, 8], y: [-3, 3], krommen: [{ f: '(4/pi)*asin(sin(pi*x/2))' }] },
      velden: [
        { type: 'getal', label: 'Periode: $p=$', ok: '4' },
        { type: 'getal', label: '$f(13)=$', ok: '2', check: { waarde: '(4/pi)*asin(sin(pi*13/2))' } },
        { type: 'getal', label: '$f(-6)=$', ok: '0', check: { waarde: '(4/pi)*asin(sin(pi*(-6)/2))' } }
      ],
      tip: 'Trek de periode af (of tel ze op) tot je een $x$ krijgt die je op de grafiek kan aflezen.',
      uitwerking: '$p=4$\n$f(13)=f(9)=f(5)=f(1)=2$\n$f(-6)=f(-2)=f(2)=0$'
    },
    {
      id: 'q10', onderwerp: 'Praktisch domein en bereik',
      opgave: 'Een houten balk droogt in een droogkamer. Het vochtgehalte (in %) na $t$ weken is $V(t)=30-2t$. De balk mag eruit als het vochtgehalte 12 % is.',
      velden: [
        { type: 'getal', label: 'Na hoeveel weken mag de balk eruit?', ok: '9' },
        { type: 'interval', label: 'Praktisch domein: $\\text{dom } V=$', ok: '[0;9]' },
        { type: 'interval', label: 'Praktisch bereik: $\\text{ber } V=$', ok: '[12;30]' }
      ],
      uitwerking: '$30-2t=12 \\iff -2t=-18 \\iff t=9$ weken\n$\\text{dom } V=[0,9]$ (van het begin tot de balk eruit mag)\n$\\text{ber } V=[12,30]$ (het vochtgehalte daalt van 30 % naar 12 %)'
    }
  ]
});
