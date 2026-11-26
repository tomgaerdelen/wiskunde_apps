REM_REGISTREER({
  klas: '5doSW', id: 'SO4', titel: 'SO 4 Rationale functies',
  leerstof: 'H3: domein en nulwaarden, de functies $\\frac{1}{x^n}$, mengvraagstukken, homografische functies (asymptoten en voorschrift opstellen), transformaties en grafieken koppelen.',
  vragen: [
    {
      id: 'q1', onderwerp: 'Domein en nulwaarden',
      opgave: 'Gegeven: $f(x)=\\dfrac{x^2-9}{x^2+2x}$.',
      velden: [
        { type: 'interval', label: '$\\text{dom } f=$', ok: 'IR\\{-2;0}' },
        { type: 'verz', label: 'Nulwaarden:', ok: ['-3', '3'], check: { vgl: '(x^2-9)/(x^2+2x)=0', bereik: [-10, 10] } }
      ],
      tip: 'Domein: de noemer mag niet 0 zijn. Nulwaarden: de teller is 0 (en de $x$ hoort bij het domein).',
      hulp: null,
      uitwerking: 'Noemer: $x^2+2x=x(x+2)=0 \\iff x=0$ of $x=-2$\n$\\text{dom } f=\\mathbb{R}\\setminus\\{-2,0\\}$\nTeller: $x^2-9=0 \\iff x=-3$ of $x=3$ (beide in het domein)\nNulwaarden: $-3$ en $3$'
    },
    {
      id: 'q2', onderwerp: 'Nulwaarden met Horner',
      opgave: 'Bepaal het domein en de nulwaarden van $f(x)=\\dfrac{x^3-7x+6}{x+4}$.',
      velden: [
        { type: 'interval', label: '$\\text{dom } f=$', ok: 'IR\\{-4}' },
        { type: 'verz', label: 'Nulwaarden:', ok: ['1', '2', '-3'], check: { vgl: 'x^3-7x+6=0', bereik: [-10, 10] } }
      ],
      uitwerking: '$\\text{dom } f=\\mathbb{R}\\setminus\\{-4\\}$\nTeller: $1-7+6=0$, Horner met 1: $(x-1)(x^2+x-6)=(x-1)(x+3)(x-2)$\nNulwaarden: $1$, $-3$ en $2$'
    },
    {
      id: 'q3', onderwerp: 'De functies $\\frac{a}{x^n}$',
      opgave: 'Bekijk $f(x)=\\dfrac{2}{x^n}$. Is $n$ even (E) of oneven (O) als …',
      velden: [
        { type: 'kies', label: '… $f(-2)=-f(2)$?', opties: ['E', 'O'], ok: 'O' },
        { type: 'kies', label: '… de grafiek volledig boven de $x$-as ligt?', opties: ['E', 'O'], ok: 'E' },
        { type: 'kies', label: '… de grafiek symmetrisch is t.o.v. de oorsprong?', opties: ['E', 'O'], ok: 'O' },
        { type: 'kies', label: '… $\\displaystyle\\lim_{x\\to 0^-} f(x)=+\\infty$?', opties: ['E', 'O'], ok: 'E' }
      ],
      tip: 'Teken voor jezelf $\\frac{2}{x^2}$ (n even) en $\\frac{2}{x^3}$ (n oneven).',
      uitwerking: 'n even: $x^n>0$ voor $x\\neq 0$, dus $f(x)>0$ overal: grafiek boven de $x$-as, symmetrisch t.o.v. de $y$-as, links en rechts van 0 naar $+\\infty$.\nn oneven: $f(-x)=-f(x)$: symmetrisch t.o.v. de oorsprong, links van 0 naar $-\\infty$.'
    },
    {
      id: 'q4', onderwerp: 'Mengvraagstuk',
      opgave: 'Je hebt 6 liter drank met 15 % alcohol. Hoeveel liter drank met 40 % alcohol moet je toevoegen om een mengsel met 25 % alcohol te krijgen?',
      velden: [{ type: 'getal', label: 'Aantal liter:', ok: '4', check: { waarde: '(1.5-0.9)/0.15' } }],
      tip: 'Stel $x$ = aantal liter van 40 %. Hoeveel liter zuivere alcohol zit er in het mengsel, en hoeveel liter is het mengsel in totaal?',
      uitwerking: 'Stel $x$ = aantal liter drank van 40 %.\n$\\dfrac{0{,}40x+0{,}15\\cdot 6}{6+x}=0{,}25$\n$\\iff 0{,}40x+0{,}9=1{,}5+0{,}25x$\n$\\iff 0{,}15x=0{,}6$\n$\\iff x=4$\nOpl: 4 liter.'
    },
    {
      id: 'q5', onderwerp: 'Homografische functie opstellen (1)',
      opgave: 'Een homografische functie heeft de asymptoten $x=2$ en $y=-3$ en de nulwaarde 1. Geef het voorschrift.',
      velden: [{ type: 'expr', label: '$f(x)=$', ok: '(-3x+3)/(x-2)' }],
      tip: 'Start met $f(x)=\\dfrac{a(x-\\text{nulwaarde})}{x-\\ldots}$. Welke $a$ geeft de H.A. $y=-3$?',
      uitwerking: 'V.A. $x=2$ → noemer $x-2$. Nulwaarde 1 → teller $a(x-1)$.\nH.A. $y=\\dfrac{a}{1}=-3$, dus $a=-3$.\n$f(x)=\\dfrac{-3(x-1)}{x-2}=\\dfrac{-3x+3}{x-2}$'
    },
    {
      id: 'q6', onderwerp: 'Homografische functie opstellen (2)',
      opgave: 'Een homografische functie heeft de $y$-as als verticale asymptoot, de horizontale asymptoot $y=2$ en gaat door $P(1,5)$. Geef het voorschrift.',
      velden: [{ type: 'expr', label: '$f(x)=$', ok: '(2x+3)/x' }],
      uitwerking: 'V.A. $x=0$ → noemer $x$. H.A. $y=2$ → $f(x)=\\dfrac{2x+b}{x}$.\n$f(1)=5 \\iff \\dfrac{2+b}{1}=5 \\iff b=3$\n$f(x)=\\dfrac{2x+3}{x}$'
    },
    {
      id: 'q7', onderwerp: 'Asymptoten van een homografische functie',
      opgave: 'Geef de asymptoten van $f(x)=\\dfrac{4x-1}{2x+6}$.',
      velden: [
        { type: 'getal', label: 'V.A.: $x=$', ok: '-3' },
        { type: 'getal', label: 'H.A.: $y=$', ok: '2', check: { lim: { f: '(4x-1)/(2x+6)', a: 'inf' } } }
      ],
      uitwerking: 'V.A.: $2x+6=0 \\iff x=-3$\nH.A.: $y=\\dfrac{a}{c}=\\dfrac{4}{2}=2$'
    },
    {
      id: 'q8', onderwerp: 'Transformaties (1)',
      opgave: 'Schrijf $g(x)=\\dfrac{2x+5}{x+2}$ als $\\dfrac{1}{x+2}+2$ (controleer dit op papier). Hoe ontstaat de grafiek van $g$ uit die van $f(x)=\\dfrac{1}{x}$?',
      velden: [{ type: 'mc', ok: 1, opties: ['verschuiving volgens $\\vec{v}(2,2)$', 'verschuiving volgens $\\vec{v}(-2,2)$', 'verschuiving volgens $\\vec{v}(2,-2)$', 'spiegeling om de $x$-as en verschuiving volgens $\\vec{v}(-2,2)$'],
        waarom: ['$x+2$ in de noemer betekent 2 naar **links**.', '', 'Twee tekens fout.', 'Er staat geen minteken vóór de breuk, dus geen spiegeling.'] }],
      uitwerking: '$\\dfrac{1}{x+2}+2=\\dfrac{1+2(x+2)}{x+2}=\\dfrac{2x+5}{x+2}$ ✓\n$x+2$: 2 naar links; $+2$: 2 naar boven. Verschuiving volgens $\\vec{v}(-2,2)$.'
    },
    {
      id: 'q9', onderwerp: 'Transformaties (2)',
      opgave: 'Hoe ontstaat de grafiek van $g(x)=\\dfrac{3}{(x-1)^2}+4$ uit die van $f(x)=\\dfrac{1}{x^2}$?',
      velden: [{ type: 'mc', ok: 2, opties: ['verticale uitrekking met factor $\\frac{1}{3}$ en verschuiving volgens $\\vec{v}(1,4)$', 'verticale uitrekking met factor 3 en verschuiving volgens $\\vec{v}(-1,4)$', 'verticale uitrekking met factor 3 en verschuiving volgens $\\vec{v}(1,4)$', 'horizontale uitrekking met factor 3 en verschuiving volgens $\\vec{v}(1,4)$'],
        waarom: ['De teller 3 vermenigvuldigt alle functiewaarden met 3: factor 3.', '$(x-1)^2$ betekent 1 naar **rechts**.', '', 'Een factor vóór de functie is een **verticale** uitrekking.'] }],
      uitwerking: '$3\\cdot\\dfrac{1}{x^2}$: verticale uitrekking met factor 3.\n$(x-1)^2$ en $+4$: verschuiving volgens $\\vec{v}(1,4)$.'
    },
    {
      id: 'q10', onderwerp: 'Grafiek en voorschrift koppelen',
      opgave: 'Welk voorschrift hoort bij deze grafiek?',
      fig: { x: [-4, 6], y: [-4, 4], krommen: [{ f: '(x-1)/((x+1)(x-3))' }], stippel: [{ x: -1 }, { x: 3 }] },
      velden: [{ type: 'mc', ok: 0, opties: ['$f(x)=\\dfrac{x-1}{(x+1)(x-3)}$', '$f(x)=\\dfrac{x+1}{(x-1)(x-3)}$', '$f(x)=\\dfrac{(x-1)^2}{(x+1)(x-3)}$', '$f(x)=\\dfrac{x+3}{(x+1)(x-3)}$'],
        waarom: ['', 'Dan lagen de V.A. bij $x=1$ en $x=3$ en de nulwaarde bij $-1$.', 'Dan was de H.A. $y=1$ en raakte de grafiek de $x$-as in $x=1$.', 'Dan was de nulwaarde $-3$.'] }],
      tip: 'Zoek de V.A. (stippellijnen), de nulwaarde en de H.A. op de grafiek.',
      uitwerking: 'V.A.: $x=-1$ en $x=3$ → noemer $(x+1)(x-3)$.\nNulwaarde: $x=1$ (de grafiek gaat door de $x$-as) → teller $x-1$.\nH.A. $y=0$: graad teller < graad noemer ✓'
    }
  ]
});
