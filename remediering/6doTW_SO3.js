REM_REGISTREER({
  klas: '6doTW', id: 'SO3', titel: 'SO 3 Verloop van exp- en log-functies',
  leerstof: 'Verloop van exp- en log-functies: domein, nulwaarden, asymptoten (via limieten), extrema, buigpunten, parameters bepalen en vraagstukken met $f\'=k\\cdot f$.',
  vragen: [
    { id: 'q1', onderwerp: 'Domein en nulwaarde', opgave: 'Gegeven: $f(x)=\\dfrac{2-\\ln x}{x}$.',
      velden: [
        { type: 'interval', label: '$\\text{dom } f=$', ok: ']0;+inf[' },
        { type: 'getal', label: 'Nulwaarde (exact): $x=$', ok: 'e^2', check: { waarde: 'e^2' } }
      ],
      uitwerking: '$\\ln x$ bestaat voor $x>0$: $\\text{dom } f=]0,+\\infty[$\n$2-\\ln x=0 \\iff \\ln x=2 \\iff x=e^2$' },
    { id: 'q2', onderwerp: 'Asymptoten via limieten', opgave: 'Nog steeds $f(x)=\\dfrac{2-\\ln x}{x}$.',
      velden: [
        { type: 'getal', label: '$\\displaystyle\\lim_{x\\to 0^+} f(x)=$', ok: 'inf', symbolen: ['∞', '-∞'], hulp: 'Typ ∞ of -∞ (of een getal).', check: { lim: { f: '(2-ln(x))/x', a: 0, kant: '+' } } },
        { type: 'getal', label: '$\\displaystyle\\lim_{x\\to +\\infty} f(x)=$', ok: '0', check: { lim: { f: '(2-ln(x))/x', a: 'inf' } } }
      ],
      tip: 'Voor $x\\to 0^+$: schrijf als product $(2-\\ln x)\\cdot\\frac{1}{x}$. Voor $x\\to+\\infty$: l\'Hôpital.',
      uitwerking: '$\\displaystyle\\lim_{x\\to 0^+}(2-\\ln x)\\cdot\\frac{1}{x}=(+\\infty)\\cdot(+\\infty)=+\\infty$: V.A. $x=0$\n$\\displaystyle\\lim_{x\\to+\\infty}\\frac{2-\\ln x}{x}$ ($\\frac{-\\infty}{\\infty}$), H: $\\displaystyle\\lim\\frac{-1/x}{1}=0$: H.A. $y=0$' },
    { id: 'q3', onderwerp: 'Extremum', opgave: 'Nog steeds $f(x)=\\dfrac{2-\\ln x}{x}$. Bepaal het extremum (exact).',
      velden: [
        { type: 'getal', label: '$x=$', ok: 'e^3', check: { waarde: 'e^3' } },
        { type: 'getal', label: '$y=$', ok: '-e^(-3)', check: { waarde: '(2-3)/e^3' } },
        { type: 'kies', label: 'Soort:', opties: ['maximum', 'minimum'], ok: 'minimum' }
      ],
      uitwerking: '$f\'(x)=\\dfrac{-\\frac{1}{x}\\cdot x-(2-\\ln x)}{x^2}=\\dfrac{\\ln x-3}{x^2}$\n$f\'(x)=0 \\iff x=e^3$; $f\'$: $-$ ervoor, $+$ erna: MIN\n$f(e^3)=\\dfrac{2-3}{e^3}=-\\dfrac{1}{e^3}$' },
    { id: 'q4', onderwerp: 'Schuine asymptoot', opgave: 'Geef de schuine asymptoot van $f(x)=x+e^{-x}$ voor $x\\to+\\infty$.',
      velden: [{ type: 'expr', label: 'S.A.: $y=$', ok: 'x' }],
      uitwerking: '$\\displaystyle\\lim_{x\\to+\\infty}\\big(f(x)-x\\big)=\\lim e^{-x}=0$\nS.A. $y=x$ (voor $x\\to+\\infty$)' },
    { id: 'q5', onderwerp: 'Parameters bepalen', opgave: 'De functie $f(x)=a\\,x\\,e^{bx}$ heeft een maximum in het punt $(1,2)$. Bepaal $a$ en $b$ (exact).',
      velden: [
        { type: 'getal', label: '$b=$', ok: '-1' },
        { type: 'getal', label: '$a=$', ok: '2e', check: { waarde: '2*e' } }
      ],
      tip: 'Gebruik twee voorwaarden: $f\'(1)=0$ en $f(1)=2$.',
      uitwerking: '$f\'(x)=a\\,e^{bx}(1+bx)$\n$f\'(1)=0 \\iff 1+b=0 \\iff b=-1$\n$f(1)=2 \\iff a\\,e^{-1}=2 \\iff a=2e$' },
    { id: 'q6', onderwerp: 'Tekenverloop', opgave: 'Stel de tekentabel op van $f(x)=(x^2-4)e^x$.',
      velden: [{ type: 'teken', x: ['-2', '2'], ok: '+0-0+', check: { tekenVan: '(x^2-4)e^x' } }],
      uitwerking: '$e^x>0$, dus het teken is dat van $x^2-4=(x-2)(x+2)$.\n$x \\,|\\, -2 \\quad 2$\n$f(x) \\,|\\, + \\;0\\; - \\;0\\; +$' },
    { id: 'q7', onderwerp: 'Groeiconstante', opgave: 'Een bacteriecultuur groeit volgens $N\'(t)=k\\cdot N(t)$ en verdubbelt elke 3 uur. Bepaal $k$ (exact of op 0,001).',
      velden: [{ type: 'getal', label: '$k=$', ok: 'ln(2)/3', tol: 0.0006 }],
      uitwerking: '$N(t)=N_0e^{kt}$\n$N(3)=2N_0 \\iff e^{3k}=2 \\iff k=\\dfrac{\\ln 2}{3}\\approx 0{,}231$' },
    { id: 'q8', onderwerp: 'Continu kapitaal', gg: 'rekenwerk', opgave: 'Een kapitaal groeit volgens $K\'(t)=0{,}03\\,K(t)$ met $K(0)=5000$ euro ($t$ in jaren). Hoeveel is het kapitaal na 10 jaar? Rond af op 0,01.',
      velden: [{ type: 'getal', label: '$K(10)\\approx$', ok: '6749.29', tol: 0.011, check: { waarde: '5000e^(0.3)' } }],
      uitwerking: '$K(t)=5000\\,e^{0{,}03t}$\n$K(10)=5000\\,e^{0{,}3}\\approx 6749{,}29$ euro' },
    { id: 'q9', onderwerp: 'Buigpunt', opgave: 'Bepaal het buigpunt van $f(x)=x\\,e^{-x}$ (exact).',
      velden: [
        { type: 'getal', label: '$x=$', ok: '2' },
        { type: 'getal', label: '$y=$', ok: '2e^(-2)', check: { waarde: '2/e^2' } }
      ],
      uitwerking: '$f\'(x)=(1-x)e^{-x}$, $f\'\'(x)=-e^{-x}-(1-x)e^{-x}=(x-2)e^{-x}$\n$f\'\'$ wisselt van teken in $x=2$: B.P. $\\left(2,\\frac{2}{e^2}\\right)$' },
    { id: 'q10', onderwerp: 'Domein van een log-functie', opgave: 'Bepaal het domein van $f(x)=\\ln(x^2-4x+3)$.',
      velden: [{ type: 'interval', label: '$\\text{dom } f=$', ok: ']-inf;1[U]3;+inf[', check: { teken: { f: 'x^2-4x+3', rel: '>0' } } }],
      uitwerking: '$x^2-4x+3>0 \\iff (x-1)(x-3)>0$\n$\\text{dom } f=]-\\infty,1[\\cup]3,+\\infty[$' }
  ]
});
