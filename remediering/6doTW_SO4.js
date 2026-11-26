REM_REGISTREER({
  klas: '6doTW', id: 'SO4', titel: 'SO 4 Goniometrische functies',
  leerstof: 'Goniometrische functies: $\\lim\\frac{\\sin x}{x}=1$, afgeleiden, periode en onderzoeksinterval, extrema en verloop, optimalisatie.',
  vragen: [
    { id: 'q1', onderwerp: 'Standaardlimiet', opgave: 'Bereken: $\\displaystyle\\lim_{x\\to 0}\\frac{\\sin 4x}{2x}$',
      velden: [{ type: 'getal', label: 'Limiet $=$', ok: '2', check: { lim: { f: 'sin(4x)/(2x)', a: 0 } } }],
      uitwerking: '$\\displaystyle\\lim_{x\\to 0}\\frac{\\sin 4x}{4x}\\cdot\\frac{4x}{2x}=1\\cdot 2=2$' },
    { id: 'q2', onderwerp: 'Limiet met cos', opgave: 'Bereken: $\\displaystyle\\lim_{x\\to 0}\\frac{1-\\cos x}{x^2}$',
      velden: [{ type: 'getal', label: 'Limiet $=$', ok: '1/2', check: { lim: { f: '(1-cos(x))/x^2', a: 0.001 } } }],
      tip: 'Twee keer l\'Hôpital, of vermenigvuldig teller en noemer met $1+\\cos x$.',
      uitwerking: '$\\frac{0}{0}$, H: $\\displaystyle\\lim\\frac{\\sin x}{2x}=\\frac{1}{2}$' },
    { id: 'q3', onderwerp: 'Limiet met tan en sin', opgave: 'Bereken: $\\displaystyle\\lim_{x\\to 0}\\frac{\\tan 3x}{\\sin 5x}$',
      velden: [{ type: 'getal', label: 'Limiet $=$', ok: '3/5', check: { lim: { f: 'tan(3x)/sin(5x)', a: 0 } } }],
      uitwerking: '$\\frac{0}{0}$, H: $\\displaystyle\\lim\\frac{\\frac{3}{\\cos^2 3x}}{5\\cos 5x}=\\frac{3}{5}$' },
    { id: 'q4', onderwerp: 'Productregel', opgave: 'Bereken: $D\\left(x^2\\cos 2x\\right)$',
      velden: [{ type: 'expr', label: '$f\'(x)=$', ok: '2x*cos(2x)-2x^2*sin(2x)', check: { afgVan: 'x^2*cos(2x)' } }],
      uitwerking: '$2x\\cos 2x+x^2\\cdot(-\\sin 2x)\\cdot 2=2x\\cos 2x-2x^2\\sin 2x$' },
    { id: 'q5', onderwerp: 'Quotiëntregel', opgave: 'Bereken en vereenvoudig: $D\\left(\\dfrac{\\sin x}{1+\\cos x}\\right)$',
      velden: [{ type: 'expr', label: '$f\'(x)=$', ok: '1/(1+cos(x))', dom: [-2.5, 2.5], check: { afgVan: 'sin(x)/(1+cos(x))' } }],
      uitwerking: '$\\dfrac{\\cos x(1+\\cos x)-\\sin x\\cdot(-\\sin x)}{(1+\\cos x)^2}=\\dfrac{\\cos x+\\cos^2x+\\sin^2x}{(1+\\cos x)^2}=\\dfrac{1+\\cos x}{(1+\\cos x)^2}=\\dfrac{1}{1+\\cos x}$' },
    { id: 'q6', onderwerp: 'Periode (1)', opgave: 'Bepaal de periode van $f(x)=\\sin 2x+\\cos 3x$. Typ exact (bv. 2pi).',
      velden: [{ type: 'getal', label: '$p=$', ok: '2pi', check: { waarde: '2*pi' } }],
      tip: 'Periode van $\\sin 2x$ is $\\pi$, van $\\cos 3x$ is $\\frac{2\\pi}{3}$. Zoek het kleinste gemeenschappelijke veelvoud.',
      uitwerking: '$p_1=\\frac{2\\pi}{2}=\\pi$, $p_2=\\frac{2\\pi}{3}$\nkgv van $\\pi$ en $\\frac{2\\pi}{3}$: $2\\pi$ ($=2\\cdot\\pi=3\\cdot\\frac{2\\pi}{3}$)' },
    { id: 'q7', onderwerp: 'Periode (2)', opgave: 'Bepaal de periode van $f(x)=\\sin\\frac{x}{2}\\cdot\\cos^2x$. Typ exact.',
      velden: [{ type: 'getal', label: '$p=$', ok: '4pi', check: { waarde: '4*pi' } }],
      uitwerking: '$\\sin\\frac{x}{2}$: $p=4\\pi$. $\\cos^2x$: $p=\\pi$ (want $\\cos^2(x+\\pi)=(-\\cos x)^2$).\nkgv: $4\\pi$' },
    { id: 'q8', onderwerp: 'Extrema op een interval', opgave: 'Gegeven: $f(x)=2\\cos x+\\cos 2x$ op $[0,2\\pi]$.',
      velden: [
        { type: 'verz', label: 'Alle nulwaarden van $f\'$ in $[0,2\\pi]$ (exact, bv. 2pi/3):', ok: ['0', '2pi/3', 'pi', '4pi/3', '2pi'], check: { vgl: '-2sin(x)-2sin(2x)=0', bereik: [-0.01, 6.29] } },
        { type: 'getal', label: 'Absoluut minimum: $y=$', ok: '-3/2', check: { waarde: '2cos(2pi/3)+cos(4pi/3)' } }
      ],
      tip: '$f\'(x)=-2\\sin x-2\\sin 2x=-2\\sin x(1+2\\cos x)$.',
      uitwerking: '$f\'(x)=-2\\sin x-4\\sin x\\cos x=-2\\sin x(1+2\\cos x)$\n$\\sin x=0$: $x=0,\\pi,2\\pi$; $\\;\\cos x=-\\frac{1}{2}$: $x=\\frac{2\\pi}{3},\\frac{4\\pi}{3}$\n$f(0)=3$, $f(\\pi)=-1$, $f\\left(\\frac{2\\pi}{3}\\right)=f\\left(\\frac{4\\pi}{3}\\right)=-1-\\frac{1}{2}=-\\frac{3}{2}$\nAbsoluut minimum $-\\frac{3}{2}$' },
    { id: 'q9', onderwerp: 'Verloop', opgave: 'Wat geldt voor $f(x)=x+\\sin x$?',
      velden: [{ type: 'mc', ok: 1, opties: ['$f$ heeft een maximum in elke $x=\\pi+2k\\pi$', '$f$ is overal stijgend (met horizontale raaklijnen in $x=\\pi+2k\\pi$)', '$f$ is periodiek met periode $2\\pi$', '$f$ is overal dalend'],
        waarom: ['$f\'$ wisselt daar niet van teken: geen extremum, wel een horizontale raaklijn.', '', '$f(x+2\\pi)=f(x)+2\\pi\\neq f(x)$.', '$f\'(x)=1+\\cos x\\geq 0$.'] }],
      uitwerking: '$f\'(x)=1+\\cos x\\geq 0$, en $=0$ enkel in $x=\\pi+2k\\pi$ zonder tekenwissel.\nDus overal stijgend, met horizontale raaklijnen (buigpunten) in $x=\\pi+2k\\pi$.' },
    { id: 'q10', onderwerp: 'Optimalisatie', opgave: 'Een goot heeft een bodem en twee zijwanden, elk 10 cm breed. De zijwanden maken een hoek $\\theta$ met de horizontale. De oppervlakte van de dwarsdoorsnede is $A(\\theta)=100\\sin\\theta\\,(1+\\cos\\theta)$ met $\\theta\\in\\left]0,\\frac{\\pi}{2}\\right]$.',
      velden: [
        { type: 'getal', label: 'Optimale hoek $\\theta=$ (exact of op 0,01 rad)', ok: 'pi/3', tol: 0.006 },
        { type: 'getal', label: 'Maximale oppervlakte (exact of op 0,1 cm²)', ok: '75sqrt(3)', tol: 0.06, check: { waarde: '100*sin(pi/3)*(1+cos(pi/3))' } }
      ],
      uitwerking: '$A\'(\\theta)=100\\left[\\cos\\theta(1+\\cos\\theta)-\\sin^2\\theta\\right]=100(2\\cos^2\\theta+\\cos\\theta-1)=100(2\\cos\\theta-1)(\\cos\\theta+1)$\n$A\'=0 \\iff \\cos\\theta=\\frac{1}{2} \\iff \\theta=\\frac{\\pi}{3}$ ($+$ ervoor, $-$ erna: MAX)\n$A\\left(\\frac{\\pi}{3}\\right)=100\\cdot\\frac{\\sqrt{3}}{2}\\cdot\\frac{3}{2}=75\\sqrt{3}\\approx 129{,}9$ cm²' }
  ]
});
