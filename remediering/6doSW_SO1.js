REM_REGISTREER({
  klas: '6doSW', id: 'SO1', titel: 'SO 1 Limieten en afgeleide',
  leerstof: 'H8 limieten (0/0, getal/0 met LL en RL, naar oneindig) en 9.1: gemiddelde verandering, afgeleide in een punt (definitie met $\\Delta x$), raaklijn.',
  vragen: [
    { id: 'q1', onderwerp: 'Limiet 0/0 (ontbinden)', opgave: 'Bereken: $\\displaystyle\\lim_{x\\to 2}\\frac{x^2-4}{x^2-5x+6}$',
      velden: [{ type: 'getal', label: 'Limiet $=$', ok: '-4', check: { lim: { f: '(x^2-4)/(x^2-5x+6)', a: 2 } } }],
      tip: 'Vul eerst in: je krijgt $\\frac{0}{0}$. Ontbind teller en noemer en vereenvoudig.',
      uitwerking: '$\\displaystyle\\lim_{x\\to 2}\\frac{(x-2)(x+2)}{(x-2)(x-3)}=\\lim_{x\\to 2}\\frac{x+2}{x-3}=\\frac{4}{-1}=-4$' },
    { id: 'q2', onderwerp: 'Limiet 0/0 (Horner)', opgave: 'Bereken: $\\displaystyle\\lim_{x\\to 1}\\frac{x^3-1}{x-1}$',
      velden: [{ type: 'getal', label: 'Limiet $=$', ok: '3', check: { lim: { f: '(x^3-1)/(x-1)', a: 1 } } }],
      uitwerking: 'Horner met 1: $x^3-1=(x-1)(x^2+x+1)$\n$\\displaystyle\\lim_{x\\to 1}(x^2+x+1)=3$' },
    { id: 'q3', onderwerp: 'Getal/0: linker- en rechterlimiet', opgave: 'Gegeven: $f(x)=\\dfrac{2x}{x-1}$.',
      velden: [
        { type: 'getal', label: '$\\displaystyle\\lim_{x\\to 1^-} f(x)=$', ok: '-inf', symbolen: ['∞', '-∞'], hulp: 'Typ ∞ of -∞ (of een getal).', check: { lim: { f: '2x/(x-1)', a: 1, kant: '-' } } },
        { type: 'getal', label: '$\\displaystyle\\lim_{x\\to 1^+} f(x)=$', ok: 'inf', symbolen: ['∞', '-∞'], hulp: 'Typ ∞ of -∞ (of een getal).', check: { lim: { f: '2x/(x-1)', a: 1, kant: '+' } } }
      ],
      tip: 'Invullen geeft $\\frac{2}{0}$. Bepaal het teken van de noemer net links en net rechts van 1.',
      uitwerking: '$\\displaystyle\\lim_{x\\to 1^-}\\frac{2x}{x-1}=\\frac{2}{0^-}=-\\infty$ en $\\displaystyle\\lim_{x\\to 1^+}\\frac{2x}{x-1}=\\frac{2}{0^+}=+\\infty$\nDus $x=1$ is een V.A.' },
    { id: 'q4', onderwerp: 'Limiet naar oneindig', opgave: 'Bereken: $\\displaystyle\\lim_{x\\to +\\infty}\\frac{3x^2-x}{1-2x^2}$',
      velden: [{ type: 'getal', label: 'Limiet $=$', ok: '-3/2', check: { lim: { f: '(3x^2-x)/(1-2x^2)', a: 'inf' } } }],
      uitwerking: 'Enkel de hoogstegraadstermen tellen:\n$\\displaystyle\\lim_{x\\to+\\infty}\\frac{3x^2}{-2x^2}=-\\frac{3}{2}$\nDus $y=-\\frac{3}{2}$ is een H.A.' },
    { id: 'q5', onderwerp: 'Perforatie of asymptoot?', opgave: 'Gegeven: $f(x)=\\dfrac{x^2-1}{x^2+x}$.',
      velden: [
        { type: 'mc', label: 'Wat gebeurt er in $x=-1$?', ok: 1, opties: ['een verticale asymptoot $x=-1$', 'een perforatie $(-1,2)$', 'een nulwaarde', 'een perforatie $(-1,0)$'],
          waarom: ['Na vereenvoudigen blijft er geen factor $x+1$ in de noemer: geen V.A.', '', '$-1$ hoort niet bij het domein, dus het kan geen nulwaarde zijn.', 'De limiet in $-1$ is $\\frac{-2}{-1}=2$, niet 0.'] },
        { type: 'getal', label: 'Vergelijking van de V.A.: $x=$', ok: '0' }
      ],
      uitwerking: '$f(x)=\\dfrac{(x-1)(x+1)}{x(x+1)}$, $\\text{dom } f=\\text{IR}\\setminus\\{-1,0\\}$\n$\\displaystyle\\lim_{x\\to -1}\\frac{x-1}{x}=\\frac{-2}{-1}=2$: perforatie $(-1,2)$\n$\\displaystyle\\lim_{x\\to 0}\\frac{x-1}{x}=\\frac{-1}{0}=\\pm\\infty$: V.A. $x=0$' },
    { id: 'q6', onderwerp: 'Gemiddelde verandering', opgave: 'Bereken de gemiddelde verandering van $f(x)=x^2-3x$ over het interval $[1,4]$.',
      velden: [{ type: 'getal', label: '$\\dfrac{\\Delta y}{\\Delta x}=$', ok: '2', check: { waarde: '((16-12)-(1-3))/3' } }],
      uitwerking: '$\\dfrac{\\Delta y}{\\Delta x}=\\dfrac{f(4)-f(1)}{4-1}=\\dfrac{4-(-2)}{3}=2$' },
    { id: 'q7', onderwerp: 'Afgeleide met de definitie', opgave: 'Gegeven: $f(x)=3x^2-x$.',
      velden: [
        { type: 'mc', label: 'Welke formule is de definitie van $f\'(2)$?', ok: 0, opties: ['$\\displaystyle\\lim_{\\Delta x\\to 0}\\frac{f(2+\\Delta x)-f(2)}{\\Delta x}$', '$\\displaystyle\\lim_{\\Delta x\\to 0}\\big(f(2+\\Delta x)-f(2)\\big)$', '$\\dfrac{f(2+\\Delta x)-f(2)}{\\Delta x}$', '$\\displaystyle\\lim_{\\Delta x\\to \\infty}\\frac{f(2+\\Delta x)-f(2)}{\\Delta x}$'],
          waarom: ['', 'Je moet nog delen door $\\Delta x$ (helling = $\\frac{\\Delta y}{\\Delta x}$).', 'Zonder limiet is dit enkel de gemiddelde verandering.', '$\\Delta x$ moet naar 0 gaan, niet naar oneindig.'] },
        { type: 'getal', label: '$f\'(2)=$', ok: '11' }
      ],
      tip: 'Werk $f(2+\\Delta x)=3(2+\\Delta x)^2-(2+\\Delta x)$ volledig uit, trek $f(2)=10$ af en deel door $\\Delta x$.',
      uitwerking: '$f(2+\\Delta x)-f(2)=3(4+4\\Delta x+\\Delta x^2)-2-\\Delta x-10=11\\Delta x+3\\Delta x^2$\n$f\'(2)=\\displaystyle\\lim_{\\Delta x\\to 0}\\frac{11\\Delta x+3\\Delta x^2}{\\Delta x}=\\lim_{\\Delta x\\to 0}(11+3\\Delta x)=11$' },
    { id: 'q8', onderwerp: 'Afgeleide aflezen', opgave: 'De rechte is de raaklijn aan de grafiek van $f$ in het punt met $x=1$. Lees $f\'(1)$ af.',
      fig: { x: [-2, 5], y: [-3, 7], krommen: [{ f: '-x^2+4x-1' }], lijnen: [[-1, -2, 4, 8, '#c2410c']] },
      velden: [{ type: 'getal', label: '$f\'(1)=$', ok: '2' }],
      uitwerking: '$f\'(1)$ = rico van de raaklijn. De raaklijn gaat door $(0,0)$ en $(1,2)$:\n$\\text{rico}=\\dfrac{2-0}{1-0}=2$' },
    { id: 'q9', onderwerp: 'Vergelijking van de raaklijn', opgave: 'Gegeven: $f(x)=x^3-2x$ en $f\'(2)=10$. Stel de vergelijking op van de raaklijn aan de grafiek van $f$ in $x=2$.',
      velden: [{ type: 'expr', label: '$t: y=$', ok: '10x-16' }],
      uitwerking: '$f(2)=8-4=4$, raakpunt $(2,4)$\n$t: y-f(a)=f\'(a)(x-a)$\n$y-4=10(x-2)$\n$y=10x-16$' },
    { id: 'q10', onderwerp: 'Gemiddelde snelheid', opgave: 'Een steen valt. De afgelegde weg (in m) na $t$ seconden is $s(t)=5t^2$. Bereken de gemiddelde snelheid tussen $t=1$ en $t=3$.',
      velden: [{ type: 'getal', label: '$v_{gem}=$ (m/s)', ok: '20' }],
      uitwerking: '$v_{gem}=\\dfrac{s(3)-s(1)}{3-1}=\\dfrac{45-5}{2}=20$ m/s' }
  ]
});
