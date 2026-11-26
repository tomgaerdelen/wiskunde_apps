REM_REGISTREER({
  klas: '6doTW', id: 'SO6', titel: 'SO 6 Impliciet afleiden, parameterkrommen, DV',
  leerstof: 'Impliciet afleiden, parameterkrommen (raaklijnen, uiterste punten, dubbelpunt), kettinglijn, differentiaalvergelijkingen en verwante snelheden.',
  vragen: [
    { id: 'q1', onderwerp: 'Impliciet afleiden (1)', opgave: 'De kromme $x^2+xy+y^2=7$ gaat door $P(1,2)$.',
      velden: [
        { type: 'getal', label: 'Rico van de raaklijn in $P$:', ok: '-4/5' },
        { type: 'expr', label: 'Raaklijn: $y=$', ok: '-0.8x+2.8' }
      ],
      tip: 'Leid beide leden af naar $x$ en vergeet niet: $D(y^2)=2y\\cdot y\'$ en $D(xy)=y+x\\,y\'$.',
      uitwerking: '$2x+y+xy\'+2yy\'=0 \\iff y\'=-\\dfrac{2x+y}{x+2y}$\nIn $(1,2)$: $y\'=-\\dfrac{4}{5}$\n$y-2=-\\frac{4}{5}(x-1) \\iff y=-\\frac{4}{5}x+\\frac{14}{5}$' },
    { id: 'q2', onderwerp: 'Impliciet afleiden (2)', opgave: 'De kromme $e^y+xy=e$ gaat door $(0,1)$. Bereken $y\'$ in dat punt (exact).',
      velden: [{ type: 'getal', label: '$y\'=$', ok: '-1/e' }],
      uitwerking: '$e^y\\,y\'+y+x\\,y\'=0$\nIn $(0,1)$: $e\\cdot y\'+1+0=0 \\iff y\'=-\\dfrac{1}{e}$' },
    { id: 'q3', onderwerp: 'Parameterkromme: horizontale en verticale raaklijnen', opgave: 'Gegeven: de parameterkromme $x=t^2-1$, $y=t^3-3t$.',
      velden: [
        { type: 'verz', label: '$y$-coördinaten van de punten met een horizontale raaklijn:', ok: ['-2', '2'] },
        { type: 'getal', label: '$x$-coördinaat van het punt met een verticale raaklijn:', ok: '-1' }
      ],
      tip: 'Horizontaal: $\\dfrac{dy}{dt}=0$ (en $\\dfrac{dx}{dt}\\neq 0$). Verticaal: $\\dfrac{dx}{dt}=0$ (en $\\dfrac{dy}{dt}\\neq 0$).',
      uitwerking: '$\\dfrac{dx}{dt}=2t$, $\\dfrac{dy}{dt}=3t^2-3$\nH.R.: $t=\\pm 1$: $t=1 \\to (0,-2)$, $t=-1 \\to (0,2)$\nV.R.: $t=0 \\to (-1,0)$' },
    { id: 'q4', onderwerp: 'Parameterkromme: rico', opgave: 'Gegeven: $x=2\\cos t$, $y=3\\sin t$.',
      velden: [
        { type: 'getal', label: '$\\dfrac{dy}{dx}$ in $t=\\frac{\\pi}{4}$:', ok: '-3/2' },
        { type: 'mc', label: 'Een expliciete vergelijking van de kromme is', ok: 2, opties: ['$x^2+y^2=1$', '$\\dfrac{x^2}{9}+\\dfrac{y^2}{4}=1$', '$\\dfrac{x^2}{4}+\\dfrac{y^2}{9}=1$', '$2x^2+3y^2=1$'],
          waarom: ['Gebruik $\\cos^2t+\\sin^2t=1$ met $\\cos t=\\frac{x}{2}$ en $\\sin t=\\frac{y}{3}$.', '2 en 3 zijn verwisseld.', '', 'Gebruik $\\cos t=\\frac{x}{2}$ en $\\sin t=\\frac{y}{3}$ en kwadrateer.'] }
      ],
      uitwerking: '$\\dfrac{dy}{dx}=\\dfrac{3\\cos t}{-2\\sin t}$, in $t=\\frac{\\pi}{4}$: $-\\frac{3}{2}$\n$\\cos t=\\frac{x}{2}$, $\\sin t=\\frac{y}{3}$ en $\\cos^2t+\\sin^2t=1$: $\\dfrac{x^2}{4}+\\dfrac{y^2}{9}=1$ (ellips)' },
    { id: 'q5', onderwerp: 'Dubbelpunt', opgave: 'Gegeven: $x=t^2$, $y=t^3-t$. Bepaal het dubbelpunt (het punt dat je voor twee verschillende $t$ bereikt).',
      velden: [
        { type: 'getal', label: '$x=$', ok: '1' },
        { type: 'getal', label: '$y=$', ok: '0' }
      ],
      uitwerking: 'Zelfde $x$ voor $t_1\\neq t_2$: $t_2=-t_1$.\nZelfde $y$: $t^3-t=-(t^3-t) \\iff t^3-t=0 \\iff t=0$ of $t=\\pm 1$\n$t=\\pm 1$: dubbelpunt $(1,0)$' },
    { id: 'q6', onderwerp: 'Kettinglijn', gg: 'rekenwerk', opgave: 'Een kabel hangt tussen twee palen die 12 m uit elkaar staan, volgens $y=8\\cosh\\frac{x}{8}$ (palen in $x=-6$ en $x=6$, $y$ in m). Rond af op 0,01.',
      velden: [
        { type: 'getal', label: 'Hoogte van de kabel aan de palen (m):', ok: '10.36', tol: 0.011, check: { waarde: '8cosh(0.75)' } },
        { type: 'getal', label: 'Doorhanging (m):', ok: '2.36', tol: 0.011 }
      ],
      uitwerking: '$y(6)=8\\cosh 0{,}75\\approx 10{,}36$ m\nLaagste punt: $y(0)=8$ m\nDoorhanging $\\approx 10{,}36-8=2{,}36$ m' },
    { id: 'q7', onderwerp: 'Afkoelingswet van Newton', gg: 'rekenwerk', opgave: 'Thee koelt af volgens $\\dfrac{dT}{dt}=-k(T-20)$ ($T$ in °C, $t$ in min). Bij $t=0$ is $T=90$ en na 5 minuten is $T=60$.',
      velden: [
        { type: 'getal', label: '$k$ (op 0,001):', ok: '0.112', tol: 0.0006, check: { waarde: 'ln(7/4)/5' } },
        { type: 'getal', label: 'Na hoeveel minuten is de thee 30 °C? (op 0,1)', ok: '17.4', tol: 0.051 }
      ],
      tip: 'De oplossing is $T(t)=20+70\\,e^{-kt}$. Gebruik $T(5)=60$ om $k$ te vinden.',
      uitwerking: '$T(t)=20+70e^{-kt}$\n$T(5)=60 \\iff e^{-5k}=\\frac{4}{7} \\iff k=\\dfrac{\\ln\\frac{7}{4}}{5}\\approx 0{,}112$\n$T=30 \\iff e^{-kt}=\\frac{1}{7} \\iff t=\\dfrac{\\ln 7}{k}\\approx 17{,}4$ min' },
    { id: 'q8', onderwerp: 'Differentiaalvergelijking oplossen', opgave: 'Los op: $y\'=-3y$ met $y(0)=4$.',
      velden: [{ type: 'expr', label: '$y=$', ok: '4e^(-3x)' }],
      uitwerking: '$\\dfrac{dy}{y}=-3\\,dx \\iff \\ln|y|=-3x+C \\iff y=Ae^{-3x}$\n$y(0)=4 \\iff A=4$: $y=4e^{-3x}$' },
    { id: 'q9', onderwerp: 'Verwante snelheden (1)', opgave: 'Een bolvormige ballon wordt opgeblazen. De straal neemt toe met 2 cm/s. Hoe snel neemt het volume toe op het moment dat de straal 10 cm is? (exact, bv. 800pi)',
      velden: [{ type: 'getal', label: '$\\dfrac{dV}{dt}=$ (cm³/s)', ok: '800pi', tol: 1 }],
      uitwerking: '$V=\\frac{4}{3}\\pi r^3 \\Rightarrow \\dfrac{dV}{dt}=4\\pi r^2\\dfrac{dr}{dt}=4\\pi\\cdot 100\\cdot 2=800\\pi$ cm³/s' },
    { id: 'q10', onderwerp: 'Verwante snelheden (2)', opgave: 'Een ladder van 5 m staat tegen een muur. De voet schuift weg met 0,5 m/s. Hoe snel verandert de hoogte van de top als de voet 3 m van de muur staat?',
      velden: [{ type: 'getal', label: '$\\dfrac{dy}{dt}=$ (m/s)', ok: '-0.375' }],
      tip: '$x^2+y^2=25$. Leid af naar $t$. Bereken eerst $y$ als $x=3$.',
      uitwerking: '$x^2+y^2=25 \\Rightarrow 2x\\dfrac{dx}{dt}+2y\\dfrac{dy}{dt}=0$\n$x=3 \\Rightarrow y=4$\n$\\dfrac{dy}{dt}=-\\dfrac{x}{y}\\cdot\\dfrac{dx}{dt}=-\\dfrac{3}{4}\\cdot 0{,}5=-0{,}375$ m/s (de top zakt)' }
  ]
});
