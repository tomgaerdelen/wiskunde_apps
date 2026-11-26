REM_REGISTREER({
  klas: '5doSW', id: 'SO3', titel: 'SO 3 Veeltermen',
  leerstof: 'H2: delen door $x-a$ (Horner) en door een veelterm van hogere graad (staartdeling), de reststelling, deelbaarheid, ontbinden in factoren, tekenverloop en ongelijkheden.',
  vragen: [
    {
      id: 'q1', onderwerp: 'Delen met Horner',
      opgave: 'Deel $f(x)=2x^3-3x^2-11x+6$ door $d(x)=x-3$.',
      velden: [
        { type: 'expr', label: 'Quotiënt: $q(x)=$', ok: '2x^2+3x-2', check: { gelijk: '(2x^3-3x^2-11x+6)/(x-3)' } },
        { type: 'getal', label: 'Rest: $r=$', ok: '0', check: { waarde: '2*27-3*9-33+6' } }
      ],
      tip: 'Horner met 3: schrijf de coëfficiënten 2, −3, −11, 6 op een rij.',
      uitwerking: 'Horner met 3:\n$\\begin{array}{c|cccc} & 2 & -3 & -11 & 6 \\\\ 3 & & 6 & 9 & -6 \\\\ \\hline & 2 & 3 & -2 & 0 \\end{array}$\n$q(x)=2x^2+3x-2$ en $r=0$, dus $f(x)$ is deelbaar door $x-3$.'
    },
    {
      id: 'q2', onderwerp: 'Horner met een rest',
      opgave: 'Deel $f(x)=x^4-2x^3+5x-1$ door $d(x)=x+2$. Let op de ontbrekende macht!',
      velden: [
        { type: 'expr', label: 'Quotiënt: $q(x)=$', ok: 'x^3-4x^2+8x-11', check: { gelijk: '(x^4-2x^3+5x-1-21)/(x+2)' } },
        { type: 'getal', label: 'Rest: $r=$', ok: '21', check: { waarde: '(-2)^4-2*(-2)^3+5*(-2)-1' } }
      ],
      tip: 'Delen door $x+2$ = Horner met $-2$. Vul de ontbrekende $x^2$-term aan met coëfficiënt 0.',
      uitwerking: 'Horner met $-2$ (coëfficiënten 1, −2, 0, 5, −1):\n$\\begin{array}{c|ccccc} & 1 & -2 & 0 & 5 & -1 \\\\ -2 & & -2 & 8 & -16 & 22 \\\\ \\hline & 1 & -4 & 8 & -11 & 21 \\end{array}$\n$q(x)=x^3-4x^2+8x-11$ en $r=21$\nControle met de reststelling: $f(-2)=16+16-10-1=21$ ✓',
      les: 'Vergeten nul voor een ontbrekende macht verschuift alle coëfficiënten.'
    },
    {
      id: 'q3', onderwerp: 'Staartdeling',
      opgave: 'Deel $f(x)=x^3+2x^2-x+3$ door $d(x)=x^2+1$.',
      velden: [
        { type: 'expr', label: 'Quotiënt: $q(x)=$', ok: 'x+2', check: { gelijk: '(x^3+2x^2-x+3-(-2x+1))/(x^2+1)' } },
        { type: 'expr', label: 'Rest: $r(x)=$', ok: '-2x+1' }
      ],
      uitwerking: '$x^3:x^2=x$; $\\;x\\cdot(x^2+1)=x^3+x$; aftrekken: $2x^2-2x+3$\n$2x^2:x^2=2$; $\\;2\\cdot(x^2+1)=2x^2+2$; aftrekken: $-2x+1$\n$q(x)=x+2$ en $r(x)=-2x+1$ (graad van de rest < graad van de deler)\n$f(x)=(x^2+1)(x+2)-2x+1$'
    },
    {
      id: 'q4', onderwerp: 'Reststelling',
      opgave: 'Bepaal $k$ zodat de rest bij deling van $f(x)=3x^3-kx+4$ door $x-2$ gelijk is aan 10.',
      velden: [{ type: 'getal', label: '$k=$', ok: '9', check: { waarde: '(3*8+4-10)/2' } }],
      tip: 'Reststelling: de rest bij deling door $x-a$ is $f(a)$.',
      uitwerking: '$f(2)=10$\n$\\iff 3\\cdot 2^3-k\\cdot 2+4=10$\n$\\iff 24-2k+4=10$\n$\\iff -2k=-18$\n$\\iff k=9$'
    },
    {
      id: 'q5', onderwerp: 'Deelbaarheid',
      opgave: 'Gebruik de reststelling (zonder te delen).',
      velden: [
        { type: 'kies', label: 'Is $x^3-3x+2$ deelbaar door $x-1$?', opties: ['ja', 'nee'], ok: 'ja' },
        { type: 'kies', label: 'Is $x^3-3x+2$ deelbaar door $x-2$?', opties: ['ja', 'nee'], ok: 'nee' },
        { type: 'kies', label: 'Is $x^5+1$ deelbaar door $x+1$?', opties: ['ja', 'nee'], ok: 'ja' }
      ],
      uitwerking: '$f(1)=1-3+2=0$ → deelbaar door $x-1$.\n$f(2)=8-6+2=4\\neq 0$ → niet deelbaar door $x-2$ (rest 4).\n$g(-1)=(-1)^5+1=0$ → deelbaar door $x+1$.'
    },
    {
      id: 'q6', onderwerp: 'Deeltal terugvinden',
      opgave: 'Bij deling van $f(x)$ door $x^2-x+2$ vind je het quotiënt $q(x)=2x-1$ en de rest $r(x)=3$. Schrijf $f(x)$ in de standaardvorm.',
      velden: [{ type: 'expr', label: '$f(x)=$', ok: '2x^3-3x^2+5x+1', check: { gelijk: '(x^2-x+2)*(2x-1)+3' } }],
      uitwerking: '$f(x)=d(x)\\cdot q(x)+r(x)$\n$=(x^2-x+2)(2x-1)+3$\n$=2x^3-x^2-2x^2+x+4x-2+3$\n$=2x^3-3x^2+5x+1$'
    },
    {
      id: 'q7', onderwerp: 'Ontbinden in factoren',
      opgave: 'Ontbind zoveel mogelijk: $f(x)=2x^3+x^2-8x-4$.',
      velden: [
        { type: 'mc', label: 'De volledige ontbinding is', ok: 0, opties: ['$(2x+1)(x-2)(x+2)$', '$(2x-1)(x-2)(x+2)$', '$(2x+1)(x-2)^2$', '$(x+1)(2x-4)(x+2)$'],
          waarom: ['', 'Controleer: $(2x-1)(x-2)(x+2)$ geeft als constante term $+4$, niet $-4$.', 'Dan zou $-2$ geen nulwaarde zijn, maar $f(-2)=-16+4+16-4=0$.', 'Bereken $f(-1)=-2+1+8-4=3\\neq 0$: $x+1$ is geen factor.'] },
        { type: 'verz', label: 'Alle nulwaarden:', ok: ['-1/2', '2', '-2'], check: { vgl: '2x^3+x^2-8x-4=0', bereik: [-10, 10] } }
      ],
      tip: 'Zoek een nulwaarde tussen de delers van de constante term (±1, ±2, ±4) en gebruik Horner. Of: groepeer per twee termen.',
      uitwerking: '$f(2)=16+4-16-4=0$, Horner met 2: $f(x)=(x-2)(2x^2+5x+2)$\n$2x^2+5x+2$: $D=25-16=9$, $x=\\dfrac{-5\\pm 3}{4}$, dus $x=-\\frac{1}{2}$ of $x=-2$\n$f(x)=(x-2)(2x+1)(x+2)$\nNulwaarden: $V=\\left\\{-\\frac{1}{2}\\,;\\,2\\,;\\,-2\\right\\}$'
    },
    {
      id: 'q8', onderwerp: 'Nulwaarden van een vierdegraadsfunctie',
      opgave: 'Bepaal alle nulwaarden van $f(x)=x^4-x^3+x-1$.',
      velden: [{ type: 'verz', label: 'Nulwaarden:', ok: ['1', '-1'], check: { vgl: 'x^4-x^3+x-1=0', bereik: [-10, 10] } }],
      tip: 'Probeer $f(1)$ en $f(-1)$. Blijft er een kwadratische factor over, bereken dan de discriminant.',
      uitwerking: '$f(1)=0$ en $f(-1)=0$. Horner met 1 en daarna met $-1$:\n$f(x)=(x-1)(x+1)(x^2-x+1)$\n$x^2-x+1$: $D=1-4=-3<0$, dus geen nulwaarden meer.\nNulwaarden: $V=\\{-1\\,;\\,1\\}$',
      les: 'Een factor met $D<0$ levert geen nulwaarden op: die laat je in de ontbinding gewoon staan.'
    },
    {
      id: 'q9', onderwerp: 'Tekentabel',
      opgave: 'Stel de tekentabel op van $f(x)=(x+2)(x-1)^2(3-x)$.',
      velden: [{ type: 'teken', x: ['-2', '1', '3'], ok: '-0+0+0-', check: { tekenVan: '(x+2)*(x-1)^2*(3-x)' } }],
      tip: 'Kijk naar de hoogstegraadsterm: $x\\cdot x^2\\cdot(-x)=-x^4$. Een dubbele nulwaarde geeft geen tekenwissel.',
      uitwerking: 'Nulwaarden: $-2$ (enkel), $1$ (dubbel), $3$ (enkel).\nHelemaal rechts: teken van $-x^4$ is $-$. Van rechts naar links wisselt het teken bij een enkele nulwaarde, niet bij de dubbele.\n$x \\,|\\, -2 \\quad 1 \\quad 3$\n$f(x) \\,|\\, - \\;0\\; + \\;0\\; + \\;0\\; -$'
    },
    {
      id: 'q10', onderwerp: 'Ongelijkheid oplossen',
      opgave: 'Los op met de tekentabel van de vorige oefening: $(x+2)(x-1)^2(3-x)>0$.',
      velden: [{ type: 'interval', label: '$x\\in$', ok: ']-2;1[U]1;3[', check: { teken: { f: '(x+2)*(x-1)^2*(3-x)', rel: '>0' } } }],
      uitwerking: 'Positief tussen $-2$ en $3$, maar in $x=1$ is $f(x)=0$ en dat voldoet niet aan "$>0$".\n$x\\in\\,]-2,1[\\,\\cup\\,]1,3[$',
      les: 'Bij een strikte ongelijkheid vallen alle nulwaarden weg, ook de dubbele.'
    }
  ]
});
