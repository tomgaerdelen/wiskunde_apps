REM_REGISTREER({
  klas: '6doSW', id: 'SO6', titel: 'SO 6 Verloop exp en log, goniometrische functies',
  leerstof: '11.1 en 11.2: verloop van exp- en log-functies (extrema, tweede-afgeleidetest, buigpunten), afgeleiden van goniometrische functies, raaklijn en een exponentiële afname.',
  vragen: [
    { id: 'q1', onderwerp: 'Extremum van $x\\,e^{-x}$', opgave: 'Gegeven: $f(x)=x\\,e^{-x}$. Bepaal het extremum.',
      velden: [
        { type: 'getal', label: '$x=$', ok: '1' },
        { type: 'getal', label: '$y=$', ok: '1/e', check: { waarde: 'e^(-1)' } },
        { type: 'kies', label: 'Soort:', opties: ['maximum', 'minimum'], ok: 'maximum' }
      ],
      tip: '$f\'(x)=e^{-x}-xe^{-x}=(1-x)e^{-x}$. Het teken hangt enkel af van $1-x$, want $e^{-x}>0$.',
      uitwerking: '$f\'(x)=(1-x)e^{-x}=0 \\iff x=1$\n$f\'$: $+$ voor $x<1$, $-$ na 1: MAX\n$f(1)=e^{-1}=\\dfrac{1}{e}$: MAX $\\left(1,\\frac{1}{e}\\right)$' },
    { id: 'q2', onderwerp: 'Extremum van $x\\ln x$', opgave: 'Gegeven: $f(x)=x\\ln x$ (met $x>0$). Bepaal het extremum.',
      velden: [
        { type: 'getal', label: '$x=$', ok: '1/e', check: { waarde: 'e^(-1)' } },
        { type: 'getal', label: '$y=$', ok: '-1/e' }
      ],
      uitwerking: '$f\'(x)=\\ln x+x\\cdot\\dfrac{1}{x}=\\ln x+1$\n$\\ln x+1=0 \\iff \\ln x=-1 \\iff x=e^{-1}=\\dfrac{1}{e}$\n$f\\left(\\frac{1}{e}\\right)=\\frac{1}{e}\\cdot(-1)=-\\frac{1}{e}$: MIN $\\left(\\frac{1}{e},-\\frac{1}{e}\\right)$' },
    { id: 'q3', onderwerp: 'Tweede-afgeleidetest', opgave: 'Gegeven: $f(x)=x^2e^x$. Dan is $f\'(x)=e^x(x^2+2x)$ en $f\'\'(x)=e^x(x^2+4x+2)$.',
      velden: [
        { type: 'kies', label: 'In $x=0$ heeft $f$ een', opties: ['relatief minimum', 'relatief maximum'], ok: 'relatief minimum' },
        { type: 'kies', label: 'In $x=-2$ heeft $f$ een', opties: ['relatief minimum', 'relatief maximum'], ok: 'relatief maximum' }
      ],
      uitwerking: '$f\'(x)=0 \\iff x=0$ of $x=-2$\n$f\'\'(0)=e^0\\cdot 2=2>0$: hol, MIN in $x=0$\n$f\'\'(-2)=e^{-2}(4-8+2)=-2e^{-2}<0$: bol, MAX in $x=-2$' },
    { id: 'q4', onderwerp: 'Buigpunten', opgave: 'Gegeven: $f(x)=(x+1)^2e^x$. Bepaal de $x$-coördinaten van de buigpunten. Typ ze exact (bv. -3+sqrt(2)).',
      velden: [{ type: 'verz', label: 'B.P. bij $x=$', ok: ['-3-sqrt(2)', '-3+sqrt(2)'], check: { vgl: 'x^2+6x+7=0', bereik: [-10, 10] } }],
      tip: '$f\'(x)=e^x(x+1)(x+3)=e^x(x^2+4x+3)$. Leid nog eens af met de productregel.',
      uitwerking: '$f\'(x)=e^x(x^2+4x+3)$\n$f\'\'(x)=e^x(x^2+4x+3)+e^x(2x+4)=e^x(x^2+6x+7)$\n$x^2+6x+7=0$: $D=36-28=8$, $x=\\dfrac{-6\\pm 2\\sqrt{2}}{2}=-3\\pm\\sqrt{2}$' },
    { id: 'q5', onderwerp: 'Afgeleide van cos', opgave: 'Bereken: $D\\cos(3x^2-x)$',
      velden: [{ type: 'expr', label: '$f\'(x)=$', ok: '-(6x-1)sin(3x^2-x)', check: { afgVan: 'cos(3x^2-x)' } }],
      uitwerking: '$-\\sin(3x^2-x)\\cdot(6x-1)$' },
    { id: 'q6', onderwerp: 'Macht van sin', opgave: 'Bereken: $D\\sin^2(2x)$',
      velden: [{ type: 'expr', label: '$f\'(x)=$', ok: '4sin(2x)cos(2x)', check: { afgVan: 'sin(2x)^2' } }],
      tip: 'Drie lagen: het kwadraat, de sinus en $2x$.',
      uitwerking: '$2\\sin(2x)\\cdot\\cos(2x)\\cdot 2=4\\sin(2x)\\cos(2x)$ $(=2\\sin 4x)$' },
    { id: 'q7', onderwerp: 'Afgeleide van tan', opgave: 'Bereken: $D\\tan(e^x)$',
      velden: [{ type: 'expr', label: '$f\'(x)=$', ok: 'e^x/cos(e^x)^2', dom: [-2, 0.3], check: { afgVan: 'tan(e^x)' } }],
      uitwerking: '$\\dfrac{1}{\\cos^2(e^x)}\\cdot e^x=\\dfrac{e^x}{\\cos^2(e^x)}$' },
    { id: 'q8', onderwerp: 'Logaritme van sin', opgave: 'Bereken: $D\\ln(\\sin x)$',
      velden: [{ type: 'expr', label: '$f\'(x)=$', ok: 'cos(x)/sin(x)', dom: [0.3, 2.8], check: { afgVan: 'ln(sin(x))' } }],
      uitwerking: '$\\dfrac{\\cos x}{\\sin x}=\\cot x$' },
    { id: 'q9', onderwerp: 'Raaklijn (goniometrisch)', opgave: 'Stel de vergelijking op van de raaklijn aan de grafiek van $f(x)=\\sin x+\\cos 2x$ in $x=\\pi$.',
      velden: [{ type: 'expr', label: '$t: y=$', ok: '-x+pi+1' }],
      uitwerking: '$f(\\pi)=0+\\cos 2\\pi=1$\n$f\'(x)=\\cos x-2\\sin 2x$, $f\'(\\pi)=-1-0=-1$\n$y-1=-(x-\\pi) \\iff y=-x+\\pi+1$' },
    { id: 'q10', onderwerp: 'Exponentiële afname', gg: 'rekenwerk', opgave: 'Het aantal bacteriën na $t$ uur is $N(t)=2400\\,e^{-0{,}2t}$.',
      velden: [
        { type: 'getal', label: 'Halveringstijd (uur, exact of op 0,01):', ok: '5ln(2)', tol: 0.006 },
        { type: 'getal', label: '$N\'(5)$ op 0,1 nauwkeurig:', ok: '-176.6', tol: 0.051, check: { waarde: '-0.2*2400*e^(-1)' } }
      ],
      uitwerking: '$e^{-0{,}2t}=\\frac{1}{2} \\iff -0{,}2t=\\ln\\frac{1}{2} \\iff t=\\dfrac{\\ln 2}{0{,}2}=5\\ln 2\\approx 3{,}47$ uur\n$N\'(t)=2400\\cdot e^{-0{,}2t}\\cdot(-0{,}2)=-480\\,e^{-0{,}2t}$\n$N\'(5)=-480\\,e^{-1}\\approx -176{,}6$: na 5 uur verdwijnen er ongeveer 177 bacteriën per uur.' }
  ]
});
