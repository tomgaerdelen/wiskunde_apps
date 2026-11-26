REM_REGISTREER({
  klas: '6doTW', id: 'SO7', titel: 'SO 7 Ruimtemeetkunde',
  leerstof: 'Vergelijkingen van rechten en vlakken: steunvector, richtingsvector en normaalvector, punt op een rechte, snijpunten, onderlinge ligging.',
  vragen: [
    { id: 'q1', onderwerp: 'Punt op een rechte', opgave: 'De rechte $r$ gaat door $A(1,-2,3)$ en $B(3,0,-1)$.',
      velden: [
        { type: 'mc', label: 'Een richtingsvector $\\vec{RV}$ van $r$ is', ok: 0, opties: ['$(1,1,-2)$', '$(4,-2,2)$', '$(2,-2,4)$', '$(1,-1,-2)$'],
          waarom: ['', 'Je telde de coördinaten op: neem $B-A$.', 'Tekenfout: $\\overrightarrow{AB}=B-A=(2,2,-4)$.', 'Tekenfout in de tweede coördinaat: $0-(-2)=2$.'] },
        { type: 'kies', label: 'Ligt $C(5,2,-5)$ op $r$?', opties: ['ja', 'nee'], ok: 'ja' }
      ],
      uitwerking: '$\\overrightarrow{AB}=(2,2,-4)$, dus ook $\\vec{RV}=(1,1,-2)$\n$C=A+2\\cdot\\overrightarrow{AB}=(1+4,\\,-2+4,\\,3-8)=(5,2,-5)$: ja' },
    { id: 'q2', onderwerp: 'Snijpunt met een coördinaatvlak', opgave: 'Gegeven: $r: (x,y,z)=(1,-1,3)+k(2,1,-1)$. Bepaal het snijpunt van $r$ met het $xy$-vlak.',
      velden: [
        { type: 'getal', label: '$x=$', ok: '7' }, { type: 'getal', label: '$y=$', ok: '2' }, { type: 'getal', label: '$z=$', ok: '0' }
      ],
      tip: 'In het $xy$-vlak is $z=0$.',
      uitwerking: '$z=3-k=0 \\iff k=3$\n$(1+6,\\,-1+3,\\,0)=(7,2,0)$' },
    { id: 'q3', onderwerp: 'Vergelijking van een vlak', opgave: 'Het vlak $\\alpha$ gaat door $A(1,0,2)$ en heeft normaalvector $\\vec{N}(2,-1,3)$. De vergelijking is $2x-y+3z=d$. Bereken $d$.',
      velden: [{ type: 'getal', label: '$d=$', ok: '8' }],
      uitwerking: '$A$ invullen: $2\\cdot 1-0+3\\cdot 2=8$\n$\\alpha: 2x-y+3z=8$' },
    { id: 'q4', onderwerp: 'Vlak door drie punten', opgave: 'Het vlak $\\beta$ gaat door $A(1,0,0)$, $B(0,2,0)$ en $C(0,0,3)$. Welke vector is een normaalvector van $\\beta$?',
      velden: [{ type: 'mc', ok: 0, opties: ['$\\vec{N}(6,3,2)$', '$\\vec{N}(1,2,3)$', '$\\vec{N}(3,2,1)$', '$\\vec{N}(2,3,6)$'],
        waarom: ['', 'Controleer: $\\vec{N}\\cdot\\overrightarrow{AB}=-1+4=3\\neq 0$.', 'Controleer: $\\vec{N}\\cdot\\overrightarrow{AB}=-3+4\\neq 0$.', 'Controleer: $\\vec{N}\\cdot\\overrightarrow{AB}=-2+6\\neq 0$.'] }],
      tip: 'Asafsnedenvergelijking: $\\dfrac{x}{1}+\\dfrac{y}{2}+\\dfrac{z}{3}=1$. Of: $\\vec{N}$ staat loodrecht op $\\overrightarrow{AB}$ en $\\overrightarrow{AC}$.',
      uitwerking: '$\\dfrac{x}{1}+\\dfrac{y}{2}+\\dfrac{z}{3}=1$, maal 6: $6x+3y+2z=6$\n$\\vec{N}(6,3,2)$; controle: $\\overrightarrow{AB}=(-1,2,0)$ en $\\vec{N}\\cdot\\overrightarrow{AB}=-6+6=0$ ✓' },
    { id: 'q5', onderwerp: 'Snijpunt van een rechte en een vlak', opgave: 'Bepaal het snijpunt van $r: (x,y,z)=(1,2,0)+k(1,-1,2)$ en $\\alpha: x+y+z=7$.',
      velden: [
        { type: 'getal', label: '$x=$', ok: '3' }, { type: 'getal', label: '$y=$', ok: '0' }, { type: 'getal', label: '$z=$', ok: '4' }
      ],
      uitwerking: 'Invullen: $(1+k)+(2-k)+2k=7 \\iff 3+2k=7 \\iff k=2$\nSnijpunt $(3,0,4)$' },
    { id: 'q6', onderwerp: 'Ligging van twee rechten', opgave: 'Gegeven: $r_1: (x,y,z)=(1,0,2)+k(2,1,-1)$ en $r_2: (x,y,z)=(3,1,1)+l(-4,-2,2)$.',
      velden: [{ type: 'kies', label: 'De onderlinge ligging is', opties: ['snijdend', 'evenwijdig (niet samenvallend)', 'samenvallend', 'kruisend'], ok: 'samenvallend' }],
      tip: 'Zijn de richtingsvectoren evenwijdig? Ligt het steunpunt van $r_2$ op $r_1$?',
      uitwerking: '$(-4,-2,2)=-2\\cdot(2,1,-1)$: evenwijdige richtingen.\n$(3,1,1)$ op $r_1$? $k=1$ geeft $(3,1,1)$ ✓\nDus samenvallend.' },
    { id: 'q7', onderwerp: 'Ligging van een rechte en een vlak', opgave: 'Gegeven: $r: (x,y,z)=(2,1,0)+k(1,1,1)$ en $\\alpha: x-2y+z=3$.',
      velden: [{ type: 'kies', label: 'De ligging is', opties: ['r snijdt α', 'r is evenwijdig met α (niet erin)', 'r ligt in α'], ok: 'r is evenwijdig met α (niet erin)' }],
      uitwerking: '$\\vec{RV}\\cdot\\vec{N}=(1,1,1)\\cdot(1,-2,1)=0$: $r$ is evenwijdig met $\\alpha$ of ligt erin.\nPunt $(2,1,0)$: $2-2+0=0\\neq 3$, dus niet in het vlak.' },
    { id: 'q8', onderwerp: 'Ligging van twee vlakken', opgave: 'Gegeven: $\\alpha: 2x-y+z=1$, $\\beta: 4x-2y+2z=5$ en $\\gamma: x+y-z=0$.',
      velden: [
        { type: 'kies', label: '$\\alpha$ en $\\beta$ zijn', opties: ['snijdend', 'evenwijdig (niet samenvallend)', 'samenvallend'], ok: 'evenwijdig (niet samenvallend)' },
        { type: 'kies', label: '$\\alpha$ en $\\gamma$ zijn', opties: ['snijdend', 'evenwijdig (niet samenvallend)', 'samenvallend'], ok: 'snijdend' }
      ],
      uitwerking: '$\\vec{N}_\\beta=(4,-2,2)=2\\vec{N}_\\alpha$, maar $5\\neq 2\\cdot 1$: evenwijdig, niet samenvallend.\n$\\vec{N}_\\gamma=(1,1,-1)$ is geen veelvoud van $(2,-1,1)$: snijdend.' },
    { id: 'q9', onderwerp: 'Cartesische vergelijkingen van een rechte', opgave: 'Gegeven: $r: \\dfrac{x-1}{2}=\\dfrac{y+3}{1}=\\dfrac{z}{-2}$. Bepaal het punt van $r$ met $x=5$.',
      velden: [
        { type: 'getal', label: '$y=$', ok: '-1' }, { type: 'getal', label: '$z=$', ok: '-4' }
      ],
      uitwerking: '$\\dfrac{5-1}{2}=2$, dus $y+3=2 \\iff y=-1$ en $\\dfrac{z}{-2}=2 \\iff z=-4$\nPunt $(5,-1,-4)$' },
    { id: 'q10', onderwerp: 'Evenwijdig vlak door een punt', opgave: 'Het vlak $\\delta$ gaat door $P(2,-1,3)$ en is evenwijdig met $3x+y-2z=4$. De vergelijking is $3x+y-2z=d$. Bereken $d$.',
      velden: [{ type: 'getal', label: '$d=$', ok: '-1' }],
      uitwerking: 'Zelfde normaalvector $\\vec{N}(3,1,-2)$.\n$P$ invullen: $6-1-6=-1$\n$\\delta: 3x+y-2z=-1$' }
  ]
});
