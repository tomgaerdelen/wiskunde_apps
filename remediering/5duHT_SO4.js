REM_REGISTREER({
  klas: '5duHT', id: 'SO4', titel: 'SO 4 Tweedegraadsvergelijkingen oplossen',
  leerstof: '3.1.3 t.e.m. 3.1.5: onvolledige en volledige tweedegraadsvergelijkingen door elkaar, telkens met de meest aangewezen methode (discriminant enkel bij een volledige vergelijking).',
  vragen: [
    { id: 'q1', onderwerp: 'Volledig, $D>0$', opgave: 'Los op met de meest aangewezen methode: $x^2-5x+6=0$',
      velden: [{ type: 'verz', label: '$V=$', ok: ['2', '3'], check: { vgl: 'x^2-5x+6=0', bereik: [-10, 10] } }],
      tip: 'Volledige vergelijking: noteer eerst $a$, $b$ en $c$ en bereken $D=b^2-4ac$.',
      uitwerking: '$\\boxed{a=1,\\; b=-5,\\; c=6}$\n$D=(-5)^2-4\\cdot 1\\cdot 6=25-24=1>0$: twee oplossingen\n$x=\\dfrac{5+1}{2}=3$ of $x=\\dfrac{5-1}{2}=2$\n$V=\\{2\\,;\\,3\\}$' },
    { id: 'q2', onderwerp: 'Volledig, met een breuk', opgave: 'Los op met de meest aangewezen methode: $2x^2+3x-2=0$',
      velden: [
        { type: 'getal', label: '$D=$', ok: '25', check: { waarde: '3^2-4*2*(-2)' } },
        { type: 'verz', label: '$V=$', ok: ['1/2', '-2'], pt: 2, check: { vgl: '2x^2+3x-2=0', bereik: [-10, 10] } }
      ],
      uitwerking: '$\\boxed{a=2,\\; b=3,\\; c=-2}$\n$D=3^2-4\\cdot 2\\cdot(-2)=9+16=25$\n$x=\\dfrac{-3+5}{2\\cdot 2}=\\dfrac{2}{4}=\\dfrac{1}{2}$ of $x=\\dfrac{-3-5}{4}=-2$\n$V=\\left\\{-2\\,;\\,\\frac{1}{2}\\right\\}$',
      les: 'Deel door $2a=4$, niet door $a=2$.' },
    { id: 'q3', onderwerp: 'Volledig, $D=0$', opgave: 'Los op met de meest aangewezen methode: $x^2+4x+4=0$',
      velden: [{ type: 'verz', label: '$V=$', ok: ['-2'], check: { vgl: 'x^2+4x+4=0', bereik: [-10, 10] } }],
      uitwerking: '$D=4^2-4\\cdot 1\\cdot 4=0$: één oplossing\n$x=\\dfrac{-b}{2a}=\\dfrac{-4}{2}=-2$\n$V=\\{-2\\}$' },
    { id: 'q4', onderwerp: 'Volledig, $D<0$', opgave: 'Los op met de meest aangewezen methode: $3x^2-x+2=0$',
      velden: [{ type: 'verz', label: '$V=$', ok: [], check: { vgl: '3x^2-x+2=0', bereik: [-10, 10] } }],
      uitwerking: '$D=(-1)^2-4\\cdot 3\\cdot 2=1-24=-23<0$\nGeen oplossingen: $V=\\varnothing$' },
    { id: 'q5', onderwerp: 'Volledig met negatieve $a$', opgave: 'Los op met de meest aangewezen methode: $-x^2+2x+8=0$',
      velden: [
        { type: 'getal', label: '$D=$', ok: '36', check: { waarde: '2^2-4*(-1)*8' } },
        { type: 'verz', label: '$V=$', ok: ['-2', '4'], pt: 2, check: { vgl: '-x^2+2x+8=0', bereik: [-10, 10] } }
      ],
      tip: 'Let op de tekens: $-4ac=-4\\cdot(-1)\\cdot 8=+32$.',
      uitwerking: '$\\boxed{a=-1,\\; b=2,\\; c=8}$\n$D=2^2-4\\cdot(-1)\\cdot 8=4+32=36$\n$x=\\dfrac{-2+6}{2\\cdot(-1)}=-2$ of $x=\\dfrac{-2-6}{-2}=4$\n$V=\\{-2\\,;\\,4\\}$' },
    { id: 'q6', onderwerp: 'Volledig, dubbele oplossing', opgave: 'Los op met de meest aangewezen methode: $4x^2-12x+9=0$',
      velden: [{ type: 'verz', label: '$V=$', ok: ['3/2'], check: { vgl: '4x^2-12x+9=0', bereik: [-10, 10] } }],
      uitwerking: '$D=(-12)^2-4\\cdot 4\\cdot 9=144-144=0$\n$x=\\dfrac{-(-12)}{2\\cdot 4}=\\dfrac{12}{8}=\\dfrac{3}{2}$\n$V=\\left\\{\\frac{3}{2}\\right\\}$' },
    { id: 'q7', onderwerp: 'Onvolledig (type 3)', opgave: 'Los op met de meest aangewezen methode: $x^2-7x=0$',
      velden: [{ type: 'verz', label: '$V=$', ok: ['0', '7'], check: { vgl: 'x^2-7x=0', bereik: [-10, 10] } }],
      uitwerking: 'Onvolledig ($c=0$): $x$ buiten haakjes, geen discriminant nodig.\n$x(x-7)=0 \\iff x=0$ of $x=7$\n$V=\\{0\\,;\\,7\\}$' },
    { id: 'q8', onderwerp: 'Onvolledig (type 2)', opgave: 'Los op met de meest aangewezen methode: $2x^2-50=0$',
      velden: [{ type: 'verz', label: '$V=$', ok: ['-5', '5'], check: { vgl: '2x^2-50=0', bereik: [-10, 10] } }],
      uitwerking: '$2x^2=50$\n$x^2=25$\n$x=\\pm 5$\n$V=\\{-5\\,;\\,5\\}$' },
    { id: 'q9', onderwerp: 'Eerst herleiden (1)', opgave: 'Los op met de meest aangewezen methode: $x(x+2)=15$',
      velden: [{ type: 'verz', label: '$V=$', ok: ['3', '-5'], check: { vgl: 'x(x+2)=15', bereik: [-10, 10] } }],
      tip: 'Werk de haakjes uit en breng alles naar links. Pas dan zie je welk type het is.',
      uitwerking: '$x^2+2x-15=0$\n$\\boxed{a=1,\\; b=2,\\; c=-15}$\n$D=4+60=64$\n$x=\\dfrac{-2+8}{2}=3$ of $x=\\dfrac{-2-8}{2}=-5$\n$V=\\{-5\\,;\\,3\\}$',
      les: '$x(x+2)=15$ is geen product dat nul is: je mag niet $x=15$ of $x+2=15$ stellen.' },
    { id: 'q10', onderwerp: 'Eerst herleiden (2)', opgave: 'Los op met de meest aangewezen methode: $(2x-1)(x+1)=5$',
      velden: [{ type: 'verz', label: '$V=$', ok: ['3/2', '-2'], check: { vgl: '(2x-1)(x+1)=5', bereik: [-10, 10] } }],
      uitwerking: '$2x^2+2x-x-1=5$\n$2x^2+x-6=0$\n$\\boxed{a=2,\\; b=1,\\; c=-6}$\n$D=1+48=49$\n$x=\\dfrac{-1+7}{4}=\\dfrac{3}{2}$ of $x=\\dfrac{-1-7}{4}=-2$\n$V=\\left\\{-2\\,;\\,\\frac{3}{2}\\right\\}$' }
  ]
});
