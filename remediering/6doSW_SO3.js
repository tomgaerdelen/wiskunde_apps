REM_REGISTREER({
  klas: '6doSW', id: 'SO3', titel: 'SO 3 Kettingregel',
  leerstof: '9.3 en 9.4.1: kettingregel ($D f^n=n\\cdot f^{n-1}\\cdot Df$), machten van breuken, wortels als machten, raaklijn, snelheid en versnelling.',
  vragen: [
    { id: 'q1', onderwerp: 'Kettingregel met een macht', opgave: 'Bereken: $D(3x^2-5)^4$',
      velden: [{ type: 'expr', label: '$f\'(x)=$', ok: '24x(3x^2-5)^3', check: { afgVan: '(3x^2-5)^4' } }],
      tip: 'Vergeet de afgeleide van wat binnen de haakjes staat niet.',
      uitwerking: '$4(3x^2-5)^3\\cdot D(3x^2-5)=4(3x^2-5)^3\\cdot 6x=24x(3x^2-5)^3$',
      les: 'Zonder $\\cdot 6x$ is de kettingregel niet toegepast.' },
    { id: 'q2', onderwerp: 'Macht van een breuk', opgave: 'Bereken: $D\\left(\\dfrac{x+1}{x-1}\\right)^3$',
      velden: [{ type: 'expr', label: '$f\'(x)=$', ok: '-6(x+1)^2/(x-1)^4', dom: [1.5, 5], check: { afgVan: '((x+1)/(x-1))^3' } }],
      uitwerking: '$3\\left(\\dfrac{x+1}{x-1}\\right)^2\\cdot\\dfrac{(x-1)-(x+1)}{(x-1)^2}=3\\cdot\\dfrac{(x+1)^2}{(x-1)^2}\\cdot\\dfrac{-2}{(x-1)^2}=\\dfrac{-6(x+1)^2}{(x-1)^4}$' },
    { id: 'q3', onderwerp: 'Wortel', opgave: 'Bereken: $D\\sqrt{4x^2+1}$',
      velden: [{ type: 'expr', label: '$f\'(x)=$', ok: '4x/sqrt(4x^2+1)', check: { afgVan: 'sqrt(4x^2+1)' } }],
      tip: '$\\sqrt{f}=f^{\\frac{1}{2}}$, dus $D\\sqrt{f}=\\dfrac{Df}{2\\sqrt{f}}$.',
      uitwerking: '$\\dfrac{1}{2\\sqrt{4x^2+1}}\\cdot 8x=\\dfrac{4x}{\\sqrt{4x^2+1}}$' },
    { id: 'q4', onderwerp: 'Macht in de noemer', opgave: 'Bereken: $D\\dfrac{1}{(x^2-3x)^2}$',
      velden: [{ type: 'expr', label: '$f\'(x)=$', ok: '-2(2x-3)/(x^2-3x)^3', dom: [3.5, 6], check: { afgVan: '1/(x^2-3x)^2' } }],
      tip: 'Schrijf als $(x^2-3x)^{-2}$ en gebruik de kettingregel.',
      uitwerking: '$D(x^2-3x)^{-2}=-2(x^2-3x)^{-3}\\cdot(2x-3)=\\dfrac{-2(2x-3)}{(x^2-3x)^3}$' },
    { id: 'q5', onderwerp: 'Derdemachtswortel', opgave: 'Bereken: $D\\sqrt[3]{x^3+2}$',
      velden: [{ type: 'expr', label: '$f\'(x)=$', ok: 'x^2/(x^3+2)^(2/3)', dom: [0, 3], check: { afgVan: '(x^3+2)^(1/3)' } }],
      uitwerking: '$D(x^3+2)^{\\frac{1}{3}}=\\frac{1}{3}(x^3+2)^{-\\frac{2}{3}}\\cdot 3x^2=\\dfrac{x^2}{\\sqrt[3]{(x^3+2)^2}}$' },
    { id: 'q6', onderwerp: 'Product en kettingregel', opgave: 'Bereken en zet zoveel mogelijk voorop: $D\\big[x\\cdot(2x-1)^3\\big]$',
      velden: [{ type: 'expr', label: '$f\'(x)=$', ok: '(2x-1)^2(8x-1)', check: { afgVan: 'x(2x-1)^3' } }],
      uitwerking: '$(2x-1)^3\\cdot 1+x\\cdot 3(2x-1)^2\\cdot 2$\n$=(2x-1)^2\\big[(2x-1)+6x\\big]=(2x-1)^2(8x-1)$' },
    { id: 'q7', onderwerp: 'Quotiënt met een wortel', opgave: 'Bereken: $D\\left(\\dfrac{\\sqrt{x}}{x+1}\\right)$',
      velden: [{ type: 'expr', label: '$f\'(x)=$', ok: '(1-x)/(2sqrt(x)(x+1)^2)', dom: [0.3, 4], check: { afgVan: 'sqrt(x)/(x+1)' } }],
      uitwerking: '$\\dfrac{(x+1)\\cdot\\frac{1}{2\\sqrt{x}}-\\sqrt{x}}{(x+1)^2}$ (teller en noemer maal $2\\sqrt{x}$)\n$=\\dfrac{x+1-2x}{2\\sqrt{x}(x+1)^2}=\\dfrac{1-x}{2\\sqrt{x}(x+1)^2}$' },
    { id: 'q8', onderwerp: 'Snelheid en versnelling', opgave: 'Een bal wordt omhoog geschoten. De hoogte (in m) na $t$ seconden is $h(t)=-5t^2+30t+2$.',
      velden: [
        { type: 'getal', label: 'Snelheid op $t=2$ (m/s):', ok: '10' },
        { type: 'getal', label: 'Diezelfde snelheid in km/h:', ok: '36' },
        { type: 'getal', label: 'Versnelling (m/s²):', ok: '-10' }
      ],
      tip: 'Snelheid $v(t)=h\'(t)$, versnelling $a(t)=v\'(t)=h\'\'(t)$. Van m/s naar km/h: maal 3,6.',
      uitwerking: '$v(t)=h\'(t)=-10t+30$, $v(2)=10$ m/s $=10\\cdot 3{,}6=36$ km/h\n$a(t)=v\'(t)=-10$ m/s²' },
    { id: 'q9', onderwerp: 'Hoogste punt en gemiddelde snelheid', opgave: 'Dezelfde bal: $h(t)=-5t^2+30t+2$.',
      velden: [
        { type: 'getal', label: 'Na hoeveel seconden is de bal het hoogst?', ok: '3' },
        { type: 'getal', label: 'Maximale hoogte (m):', ok: '47' },
        { type: 'getal', label: 'Gemiddelde snelheid tussen $t=0$ en dat moment (m/s):', ok: '15' }
      ],
      uitwerking: 'Hoogste punt: $v(t)=0 \\iff -10t+30=0 \\iff t=3$ s\n$h(3)=-45+90+2=47$ m\n$v_{gem}=\\dfrac{h(3)-h(0)}{3-0}=\\dfrac{47-2}{3}=15$ m/s' },
    { id: 'q10', onderwerp: 'Raaklijn (kettingregel)', opgave: 'Stel de vergelijking op van de raaklijn aan de grafiek van $f(x)=(x^2-3)^3$ in $x=2$.',
      velden: [{ type: 'expr', label: '$t: y=$', ok: '12x-23' }],
      uitwerking: '$f(2)=1^3=1$\n$f\'(x)=3(x^2-3)^2\\cdot 2x=6x(x^2-3)^2$, $f\'(2)=12\\cdot 1=12$\n$y-1=12(x-2) \\iff y=12x-23$' }
  ]
});
