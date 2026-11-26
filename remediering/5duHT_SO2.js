REM_REGISTREER({
  klas: '5duHT', id: 'SO2', titel: 'SO 2 Tweedegraads- en veeltermfuncties',
  leerstof: 'H2: soort parabool, symmetrieas en top (p-k-vorm en standaardvorm), omzetten naar de standaardvorm, voorschrift opstellen, grafieken koppelen, veeltermfuncties en een vraagstuk met GeoGebra.',
  vragen: [
    {
      id: 'q1', onderwerp: 'Parabool in p-k-vorm',
      opgave: 'Gegeven: $f(x)=-3(x+2)^2+5$.',
      velden: [
        { type: 'kies', label: 'Soort parabool:', opties: ['dalparabool', 'bergparabool'], ok: 'bergparabool' },
        { type: 'getal', label: 'Top: $x$-coördinaat', ok: '-2' },
        { type: 'getal', label: 'Top: $y$-coördinaat', ok: '5' }
      ],
      tip: 'In $a(x-p)^2+k$ is de top $T(p,k)$. Let op: $x+2=x-(-2)$.',
      uitwerking: '$a=-3$ dus bergparabool.\n$p=-2$ en $k=5$\nOpl: $T(-2,5)$'
    },
    {
      id: 'q2', onderwerp: 'Van p-k-vorm naar standaardvorm',
      opgave: 'Schrijf $f(x)=2(x-3)^2-7$ in de standaardvorm $ax^2+bx+c$ en geef $a$, $b$ en $c$.',
      velden: [
        { type: 'getal', label: '$a=$', ok: '2' },
        { type: 'getal', label: '$b=$', ok: '-12' },
        { type: 'getal', label: '$c=$', ok: '11' }
      ],
      tip: 'Werk eerst het merkwaardig product uit: $(A-B)^2=A^2-2AB+B^2$. Vermenigvuldig daarna met 2.',
      uitwerking: '$f(x)=2(x^2-2\\cdot x\\cdot 3+3^2)-7$\n$f(x)=2(x^2-6x+9)-7$\n$f(x)=2x^2-12x+18-7$\n$f(x)=2x^2-12x+11$\n$\\boxed{a=2,\\; b=-12,\\; c=11}$',
      les: 'Vergeet niet de $+9$ ook met 2 te vermenigvuldigen.'
    },
    {
      id: 'q3', onderwerp: 'Top uit de standaardvorm (1)',
      opgave: 'Bereken de symmetrieas en de top van $f(x)=x^2-6x+4$.',
      velden: [
        { type: 'getal', label: 'Symmetrieas $s$: $x=$', ok: '3', check: { waarde: '6/2' } },
        { type: 'getal', label: 'Top: $y$-coördinaat', ok: '-5', check: { waarde: '9-18+4' } }
      ],
      uitwerking: '$s: x=\\dfrac{-b}{2a}=\\dfrac{-(-6)}{2\\cdot 1}=3$\n$f(3)=3^2-6\\cdot 3+4=9-18+4=-5$\nOpl: $T(3,-5)$'
    },
    {
      id: 'q4', onderwerp: 'Top uit de standaardvorm (2)',
      opgave: 'Gegeven: $f(x)=-2x^2-8x+1$.',
      velden: [
        { type: 'getal', label: 'Top: $x$-coördinaat', ok: '-2' },
        { type: 'getal', label: 'Top: $y$-coördinaat', ok: '9', check: { waarde: '-2*4+16+1' } },
        { type: 'interval', label: '$\\text{ber } f=$', ok: ']-inf;9]' }
      ],
      tip: 'Vul in met haakjes: $x=\\dfrac{-(-8)}{2\\cdot(-2)}$. Deel door $2a$, niet door $a$.',
      uitwerking: '$s: x=\\dfrac{-(-8)}{2\\cdot(-2)}=\\dfrac{8}{-4}=-2$\n$f(-2)=-2\\cdot(-2)^2-8\\cdot(-2)+1=-8+16+1=9$\nOpl: $T(-2,9)$\n$a=-2$ dus bergparabool: $\\text{ber } f=]-\\infty,9]$'
    },
    {
      id: 'q5', onderwerp: 'Voorschrift opstellen (top en punt)',
      opgave: 'Een parabool heeft top $T(1,-4)$ en gaat door $P(3,4)$. Geef het voorschrift in p-k-vorm.',
      velden: [{ type: 'expr', label: '$f(x)=$', ok: '2(x-1)^2-4' }],
      uitwerking: '$* \\; T(1,-4)$: $f(x)=a(x-1)^2-4$\n$* \\; P(3,4)$: $f(3)=4$\n$\\iff a\\cdot(3-1)^2-4=4$\n$\\iff 4a-4=4$\n$\\iff 4a=8$\n$\\iff a=2$\nOpl: $f(x)=2(x-1)^2-4$'
    },
    {
      id: 'q6', onderwerp: 'Voorschrift $ax^2$',
      opgave: 'De parabool $f(x)=ax^2$ gaat door het punt $(-2,6)$. Bereken $a$.',
      velden: [{ type: 'getal', label: '$a=$', ok: '1.5' }],
      uitwerking: '$f(-2)=6 \\iff a\\cdot(-2)^2=6 \\iff 4a=6 \\iff a=1{,}5$\nOpl: $f(x)=1{,}5x^2$'
    },
    {
      id: 'q7', onderwerp: 'Grafiek en voorschrift koppelen',
      opgave: 'Welk voorschrift hoort bij deze parabool?',
      fig: { x: [-2, 6], y: [-4, 5], krommen: [{ f: '-(x-2)^2+3' }] },
      velden: [{ type: 'mc', ok: 0, opties: ['$f(x)=-(x-2)^2+3$', '$f(x)=-(x+2)^2+3$', '$f(x)=(x-2)^2+3$', '$f(x)=-(x-3)^2+2$'],
        waarom: ['', 'Dan lag de top bij $x=-2$.', 'Dat is een dalparabool.', 'Dan was de top $(3,2)$.'] }],
      uitwerking: 'Bergparabool: $a<0$. Top $T(2,3)$: $p=2$, $k=3$.\nOpl: $f(x)=-(x-2)^2+3$'
    },
    {
      id: 'q8', onderwerp: 'Tekens van $a$, $p$ en $k$',
      opgave: 'De parabool hieronder heeft voorschrift $f(x)=a(x-p)^2+k$. Bepaal het teken van $a$, $p$ en $k$.',
      fig: { x: [-6, 2], y: [-3, 4], krommen: [{ f: '0.5(x+3)^2-2' }] },
      velden: [
        { type: 'kies', label: '$a$ is', opties: ['positief', 'negatief'], ok: 'positief' },
        { type: 'kies', label: '$p$ is', opties: ['positief', 'negatief'], ok: 'negatief' },
        { type: 'kies', label: '$k$ is', opties: ['positief', 'negatief'], ok: 'negatief' }
      ],
      uitwerking: 'Dalparabool: $a>0$.\nDe top ligt links van de $y$-as: $p<0$; onder de $x$-as: $k<0$.'
    },
    {
      id: 'q9', onderwerp: 'Veeltermfuncties',
      opgave: 'Gegeven: $f(x)=4x-x^3+2x^5-1$.',
      velden: [
        { type: 'getal', label: 'Graad:', ok: '5' },
        { type: 'kies', label: 'Benaming:', opties: ['derdegraadsfunctie', 'vierdegraadsfunctie', 'vijfdegraadsfunctie'], ok: 'vijfdegraadsfunctie' }
      ],
      uitwerking: 'De hoogste macht van $x$ is $x^5$: graad 5, een vijfdegraadsfunctie.\n(De volgorde van de termen speelt geen rol.)'
    },
    {
      id: 'q10', onderwerp: 'Vraagstuk met GeoGebra', gg: 'grafisch',
      opgave: 'Een doelman trapt de bal uit. De hoogte van de bal (in m) is $h(x)=-0{,}15x^2+1{,}2x+0{,}5$, met $x$ de horizontale afstand (in m) tot de doelman.\nGebruik GeoGebra en rond af op 0,01 m.',
      velden: [
        { type: 'getal', label: 'Maximale hoogte van de bal (m):', ok: '2.9', tol: 0.011 },
        { type: 'getal', label: 'Op welke afstand komt de bal op de grond (m)?', ok: '8.40', tol: 0.011 }
      ],
      tip: 'Maximale hoogte = $y$-coördinaat van de top. Op de grond = nulwaarde (de positieve).',
      uitwerking: 'Top met GeoGebra: $(4\\,;\\,2{,}9)$: maximale hoogte 2,9 m.\nNulwaarden met GeoGebra: $x\\approx -0{,}40$ en $x\\approx 8{,}40$. Enkel de positieve past in de context.\nOpl: de bal komt op ongeveer 8,40 m op de grond.'
    }
  ]
});
