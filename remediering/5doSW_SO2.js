REM_REGISTREER({
  klas: '5doSW', id: 'SO2', titel: 'SO 2 Functies en transformaties',
  leerstof: 'Rest van H1: asymptoten en de limietdefinitie, periodiciteit, grafisch oplossen (ook met GeoGebra), vraagstukken en transformaties van grafieken.',
  vragen: [
    {
      id: 'q1', onderwerp: 'Asymptoten aflezen',
      opgave: 'Hieronder zie je de grafiek van $f(x)=\\dfrac{x+2}{x-1}$. Lees de vergelijking van de verticale en de horizontale asymptoot af.',
      fig: { x: [-5, 6], y: [-5, 6], krommen: [{ f: '(x+2)/(x-1)' }] },
      velden: [
        { type: 'getal', label: 'V.A.: $x=$', ok: '1' },
        { type: 'getal', label: 'H.A.: $y=$', ok: '1', check: { lim: { f: '(x+2)/(x-1)', a: 'inf' } } }
      ],
      uitwerking: 'De grafiek schiet naar $\\pm\\infty$ als $x$ naar 1 gaat: V.A. $x=1$.\nVoor $x\\to\\pm\\infty$ nadert de grafiek de waarde 1: H.A. $y=1$.'
    },
    {
      id: 'q2', onderwerp: 'Limietdefinitie van een asymptoot',
      opgave: 'Welke uitspraak is de definitie van: "$y=3$ is een horizontale asymptoot van de grafiek van $f$"?',
      velden: [{ type: 'mc', ok: 1,
        opties: ['$\\displaystyle\\lim_{x\\to 3} f(x)=\\pm\\infty$', '$\\displaystyle\\lim_{x\\to \\pm\\infty} f(x)=3$', '$\\displaystyle\\lim_{x\\to 0} f(x)=3$', '$f(3)=0$'],
        waarom: ['Dit is de definitie van een verticale asymptoot $x=3$.', '', 'Dit zegt enkel iets over wat er gebeurt in de buurt van $x=0$.', 'Dit zegt dat 3 een nulwaarde is.'] }],
      uitwerking: '$y=3$ is H.A. $\\iff \\displaystyle\\lim_{x\\to\\pm\\infty} f(x)=3$\n(ter vergelijking: $x=3$ is V.A. $\\iff \\displaystyle\\lim_{x\\to 3} f(x)=\\pm\\infty$)'
    },
    {
      id: 'q3', onderwerp: 'Periode uit een grafiek',
      opgave: 'Hieronder zie je de grafiek van een periodieke functie $f$.',
      fig: { x: [-4, 8], y: [-2, 4], krommen: [{ f: '2sin(pi*x/2)+1' }] },
      velden: [
        { type: 'getal', label: 'De periode is $p=$', ok: '4' },
        { type: 'getal', label: 'Bereken met de periode: $f(25)=$', ok: '3', check: { waarde: '2sin(pi*25/2)+1' } }
      ],
      tip: 'Zoek hoe ver je naar rechts moet schuiven tot de grafiek zich herhaalt. Trek dan zoveel keer de periode af van 25 tot je in het getekende stuk zit.',
      uitwerking: 'De grafiek herhaalt zich na 4 eenheden: $p=4$.\n$f(25)=f(1+6\\cdot 4)=f(1)=3$'
    },
    {
      id: 'q4', onderwerp: 'Functiewaarden via de periode',
      opgave: '$f$ is periodiek met periode $p=5$. Je weet dat $f(2)=-1$ en $f(3)=4$.',
      velden: [
        { type: 'getal', label: '$f(47)=$', ok: '-1' },
        { type: 'getal', label: '$f(-7)=$', ok: '4' }
      ],
      uitwerking: '$f(47)=f(2+9\\cdot 5)=f(2)=-1$\n$f(-7)=f(3-2\\cdot 5)=f(3)=4$',
      les: 'Bij een negatieve $x$ tel je de periode erbij op tot je bij een gekende waarde uitkomt.'
    },
    {
      id: 'q5', onderwerp: 'Vraagstuk met GeoGebra', gg: 'grafisch',
      opgave: 'De temperatuur (in °C) in een serre $t$ uur na middernacht is $T(t)=0{,}05t^3-0{,}9t^2+3{,}6t+12$ voor $0\\leq t\\leq 12$.\nBepaal met GeoGebra wanneer de temperatuur ’s nachts het hoogst is en hoe hoog. Rond af op 0,01.',
      velden: [
        { type: 'getal', label: 'Tijdstip van het maximum: $t\\approx$ (uur)', ok: '2.54', tol: 0.011 },
        { type: 'getal', label: 'Maximale temperatuur: $T\\approx$ (°C)', ok: '16.16', tol: 0.011 }
      ],
      tip: 'Teken de functie in GeoGebra en gebruik Extremum(T, 0, 12) of klik op de top van de grafiek.',
      uitwerking: 'GeoGebra: relatief maximum in $(2{,}54\\,;\\,16{,}16)$.\nOpl: ongeveer 2,54 uur na middernacht (rond 2.32 u) is het 16,16 °C.'
    },
    {
      id: 'q6', onderwerp: 'Ongelijkheid grafisch oplossen',
      opgave: 'Je ziet de grafieken van $f(x)=x^2-2$ (blauw) en $g(x)=x$ (oranje). Los grafisch op: $f(x)\\geq g(x)$.',
      fig: { x: [-4, 4], y: [-3, 5], krommen: [{ f: 'x^2-2', naam: 'f', naamX: 2.4 }, { f: 'x', naam: 'g', naamX: 3.2 }] },
      velden: [{ type: 'interval', label: '$x\\in$', ok: ']-inf;-1]U[2;+inf[', check: { teken: { f: 'x^2-2-x', rel: '>=0' } } }],
      tip: 'Zoek eerst de snijpunten. Waar ligt de blauwe grafiek boven (of op) de oranje?',
      uitwerking: 'Snijpunten: $x=-1$ en $x=2$ (controle: $f(-1)=-1=g(-1)$ en $f(2)=2=g(2)$).\nDe grafiek van $f$ ligt boven die van $g$ links van $-1$ en rechts van $2$. Omdat er "$\\geq$" staat, horen de snijpunten erbij.\n$x\\in\\,]-\\infty,-1]\\cup[2,+\\infty[$'
    },
    {
      id: 'q7', onderwerp: 'Transformatie herkennen',
      opgave: 'Hoe ontstaat de grafiek van $g(x)=(x+3)^2-1$ uit die van $f(x)=x^2$?',
      velden: [{ type: 'mc', ok: 0,
        opties: ['verschuiving volgens de vector $\\vec{v}(-3,-1)$', 'verschuiving volgens de vector $\\vec{v}(3,-1)$', 'verschuiving volgens de vector $\\vec{v}(-3,1)$', 'verschuiving volgens de vector $\\vec{v}(3,1)$'],
        waarom: ['', '$x+3$ binnen de haakjes betekent 3 naar **links**, niet naar rechts.', 'De $-1$ buiten de haakjes betekent 1 naar **beneden**.', 'Twee tekens fout: $x+3$ is naar links en $-1$ is naar beneden.'] }],
      uitwerking: '$f(x+3)$: horizontale verschuiving 3 naar links.\n$\\ldots-1$: verticale verschuiving 1 naar beneden.\nSamen: verschuiving volgens $\\vec{v}(-3,-1)$.'
    },
    {
      id: 'q8', onderwerp: 'Transformaties in woorden',
      opgave: 'Hoe ontstaat de grafiek van $h(x)=-2|x-1|+3$ uit die van $f(x)=|x|$?',
      velden: [{ type: 'mc', ok: 2,
        opties: ['spiegeling om de $y$-as, verticale uitrekking met factor 2, verschuiving volgens $\\vec{v}(1,3)$', 'spiegeling om de $x$-as, verticale uitrekking met factor 2, verschuiving volgens $\\vec{v}(-1,3)$', 'spiegeling om de $x$-as, verticale uitrekking met factor 2, verschuiving volgens $\\vec{v}(1,3)$', 'verticale uitrekking met factor $-2$ en verschuiving volgens $\\vec{v}(3,1)$'],
        waarom: ['Een minteken vóór de functie spiegelt om de $x$-as, niet om de $y$-as.', '$x-1$ betekent 1 naar rechts: $\\vec{v}(1,3)$.', '', 'Een factor is altijd positief: het minteken is een aparte spiegeling. En de vector is $\\vec{v}(1,3)$.'] }],
      uitwerking: '$-$ vóór de functie: spiegeling om de $x$-as.\n$2\\cdot$: verticale uitrekking met factor 2.\n$|x-1|$ en $+3$: verschuiving volgens $\\vec{v}(1,3)$.'
    },
    {
      id: 'q9', onderwerp: 'Voorschrift na transformaties (1)',
      opgave: 'Start met $f(x)=x^2$ en voer **in deze volgorde** uit:\n1) verschuiving volgens $\\vec{v}(1,-2)$\n2) spiegeling om de $x$-as\n3) verticale uitrekking met factor 2.\nGeef het voorschrift van de laatste functie.',
      velden: [{ type: 'expr', label: '$f_3(x)=$', ok: '-2(x-1)^2+4' }],
      tip: 'Werk stap voor stap: schrijf $f_1$, dan $f_2$, dan $f_3$. Een spiegeling of uitrekking werkt op het **volledige** voorschrift van de vorige stap.',
      uitwerking: '$f_1(x)=(x-1)^2-2$\n$f_2(x)=-\\left[(x-1)^2-2\\right]=-(x-1)^2+2$\n$f_3(x)=2\\left[-(x-1)^2+2\\right]=-2(x-1)^2+4$',
      les: 'Na de verschuiving wordt ook de $-2$ mee gespiegeld en mee uitgerekt.'
    },
    {
      id: 'q10', onderwerp: 'Voorschrift na transformaties (2)',
      opgave: 'Start opnieuw met $f(x)=x^2$, maar nu **in deze volgorde**:\n1) spiegeling om de $x$-as\n2) verticale uitrekking met factor 2\n3) verschuiving volgens $\\vec{v}(1,-2)$.\nGeef het voorschrift van de laatste functie.',
      velden: [{ type: 'expr', label: '$f_3(x)=$', ok: '-2(x-1)^2-2' }],
      uitwerking: '$f_1(x)=-x^2$\n$f_2(x)=-2x^2$\n$f_3(x)=-2(x-1)^2-2$\nVergelijk met de vorige oefening: een andere volgorde geeft een ander voorschrift.'
    }
  ]
});
