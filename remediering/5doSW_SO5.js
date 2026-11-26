REM_REGISTREER({
  klas: '5doSW', id: 'SO5', titel: 'SO 5 Machten en wortelfuncties',
  leerstof: 'H4: rekenen met machten met rationale exponenten en wortels, vereenvoudigen, de functies $a\\cdot\\sqrt[n]{x}$ (grafiek, domein, bereik, tekentabel, voorschrift) en vraagstukken.',
  vragen: [
    {
      id: 'q1', onderwerp: 'Rekenen met machten (1)',
      opgave: 'Bereken zonder rekenmachine.',
      velden: [
        { type: 'getal', label: '$16^{-\\frac{3}{4}}=$', ok: '1/8', check: { waarde: '16^(-3/4)' } },
        { type: 'getal', label: '$\\dfrac{\\sqrt[3]{54}\\cdot\\sqrt[3]{4}}{\\sqrt[3]{27}}=$', ok: '2', check: { waarde: '(54*4)^(1/3)/3' } }
      ],
      tip: '$a^{-\\frac{m}{n}}=\\dfrac{1}{\\left(\\sqrt[n]{a}\\right)^m}$. Wortels met dezelfde wortelexponent mag je samennemen.',
      uitwerking: '$16^{-\\frac{3}{4}}=\\dfrac{1}{\\left(\\sqrt[4]{16}\\right)^3}=\\dfrac{1}{2^3}=\\dfrac{1}{8}$\n$\\dfrac{\\sqrt[3]{54\\cdot 4}}{3}=\\dfrac{\\sqrt[3]{216}}{3}=\\dfrac{6}{3}=2$'
    },
    {
      id: 'q2', onderwerp: 'Rekenen met machten (2)',
      opgave: 'Bereken zonder rekenmachine.',
      velden: [
        { type: 'getal', label: '$\\left(\\sqrt{8}\\right)^{\\frac{4}{3}}=$', ok: '4', check: { waarde: 'sqrt(8)^(4/3)' } },
        { type: 'getal', label: '$\\sqrt[5]{\\left(4^5\\right)^3}=$', ok: '64', check: { waarde: '(4^15)^(1/5)' } }
      ],
      uitwerking: '$\\left(8^{\\frac{1}{2}}\\right)^{\\frac{4}{3}}=8^{\\frac{2}{3}}=\\left(\\sqrt[3]{8}\\right)^2=4$\n$\\left(4^{15}\\right)^{\\frac{1}{5}}=4^3=64$'
    },
    {
      id: 'q3', onderwerp: 'Vereenvoudigen (met wortels)',
      opgave: 'Vereenvoudig ($a>0$): $\\dfrac{\\sqrt[4]{a}\\cdot\\sqrt{a^3}}{\\sqrt[3]{a}}$',
      velden: [{ type: 'mc', ok: 0, opties: ['$a\\sqrt[12]{a^5}$', '$\\sqrt[12]{a^5}$', '$a\\sqrt[4]{a}$', '$a^2\\sqrt[12]{a}$'],
        waarom: ['', 'Je vergat een factor $a$: $a^{\\frac{17}{12}}=a^{1}\\cdot a^{\\frac{5}{12}}$.', 'Reken de exponent opnieuw na: $\\frac{1}{4}+\\frac{3}{2}-\\frac{1}{3}=\\frac{17}{12}$.', 'Reken de exponent opnieuw na: $\\frac{1}{4}+\\frac{3}{2}-\\frac{1}{3}=\\frac{17}{12}$.'] }],
      tip: 'Schrijf alles als macht van $a$, tel de exponenten op (en trek af bij delen). Zet gelijknamig op 12.',
      uitwerking: '$a^{\\frac{1}{4}}\\cdot a^{\\frac{3}{2}}\\cdot a^{-\\frac{1}{3}}=a^{\\frac{3}{12}+\\frac{18}{12}-\\frac{4}{12}}=a^{\\frac{17}{12}}=a\\cdot a^{\\frac{5}{12}}=a\\sqrt[12]{a^5}$'
    },
    {
      id: 'q4', onderwerp: 'Vereenvoudigen (machten)',
      opgave: 'Vereenvoudig ($x>0$) en schrijf zonder wortels, als één macht van $x$: $\\dfrac{\\left(\\sqrt{x}\\right)^3\\cdot\\sqrt[3]{x}}{x^2}$',
      velden: [{ type: 'expr', label: 'Resultaat:', ok: 'x^(-1/6)', dom: [0.3, 5] }],
      uitwerking: '$\\dfrac{x^{\\frac{3}{2}}\\cdot x^{\\frac{1}{3}}}{x^2}=x^{\\frac{9}{6}+\\frac{2}{6}-\\frac{12}{6}}=x^{-\\frac{1}{6}}=\\dfrac{1}{\\sqrt[6]{x}}$'
    },
    {
      id: 'q5', onderwerp: 'Grafiek van $a\\cdot\\sqrt[n]{x}$',
      opgave: 'De grafiek hieronder hoort bij $f(x)=a\\cdot\\sqrt[n]{x}$. Wat weet je over $n$ en $a$?',
      fig: { x: [-8, 8], y: [-5, 5], krommen: [{ f: '-2*x^(1/3)' }] },
      velden: [{ type: 'mc', ok: 3, opties: ['$n$ even en $a>0$', '$n$ even en $a<0$', '$n$ oneven en $a>0$', '$n$ oneven en $a<0$'],
        waarom: ['Bij $n$ even bestaat de functie enkel voor $x\\geq 0$.', 'Bij $n$ even bestaat de functie enkel voor $x\\geq 0$.', 'Bij $a>0$ zou de grafiek stijgen.', ''] }],
      uitwerking: 'De grafiek bestaat ook voor $x<0$: $n$ is oneven.\nDe grafiek daalt (rechts van 0 onder de $x$-as): $a<0$.'
    },
    {
      id: 'q6', onderwerp: 'Domein en bereik',
      opgave: 'Gegeven: $f(x)=-\\sqrt[4]{x+5}+2$.',
      velden: [
        { type: 'interval', label: '$\\text{dom } f=$', ok: '[-5;+inf[' },
        { type: 'interval', label: '$\\text{ber } f=$', ok: ']-inf;2]' }
      ],
      uitwerking: 'Even wortel: $x+5\\geq 0 \\iff x\\geq -5$, dus $\\text{dom } f=[-5,+\\infty[$\n$\\sqrt[4]{x+5}\\geq 0$, dus $-\\sqrt[4]{x+5}\\leq 0$ en $f(x)\\leq 2$: $\\text{ber } f=]-\\infty,2]$'
    },
    {
      id: 'q7', onderwerp: 'Tekentabel',
      opgave: 'Stel de tekentabel op van $f(x)=-3\\sqrt{x-1}$.',
      velden: [{ type: 'teken', x: ['1'], ok: '/0-', check: { tekenVan: '-3sqrt(x-1)' } }],
      tip: 'Waar bestaat de functie niet? Duid dat aan met / (de streepjes uit de les).',
      uitwerking: 'Domein: $x\\geq 1$. Links van 1 bestaat $f$ niet.\n$f(1)=0$ en voor $x>1$ is $\\sqrt{x-1}>0$, dus $-3\\sqrt{x-1}<0$.\n$x \\,|\\, \\quad 1$\n$f(x) \\,|\\, /// \\;0\\; -$'
    },
    {
      id: 'q8', onderwerp: 'Voorschrift uit een grafiek',
      opgave: 'De grafiek is een transformatie van $y=\\sqrt{x}$ van de vorm $g(x)=a\\sqrt{x-c}+d$. Ze start in $(-1,-3)$ en gaat door $(3,1)$. Geef het voorschrift.',
      fig: { x: [-2, 8], y: [-4, 4], krommen: [{ f: '2sqrt(x+1)-3', van: -1 }], punten: [{ x: -1, y: -3 }, { x: 3, y: 1, t: '(3, 1)' }] },
      velden: [{ type: 'expr', label: '$g(x)=$', ok: '2sqrt(x+1)-3', dom: [0, 6] }],
      tip: 'Het startpunt geeft $c$ en $d$. Vul daarna het tweede punt in om $a$ te vinden.',
      uitwerking: 'Startpunt $(-1,-3)$: $g(x)=a\\sqrt{x+1}-3$\n$g(3)=1 \\iff a\\sqrt{4}-3=1 \\iff 2a=4 \\iff a=2$\n$g(x)=2\\sqrt{x+1}-3$'
    },
    {
      id: 'q9', onderwerp: 'Vraagstuk',
      opgave: 'De lengte (in cm) van een ijspegel na $t$ uur is $L(t)=5\\sqrt[3]{t}$.',
      velden: [
        { type: 'getal', label: '$L(8)=$ (cm)', ok: '10', check: { waarde: '5*8^(1/3)' } },
        { type: 'getal', label: 'Na hoeveel uur is de ijspegel 20 cm?', ok: '64' },
        { type: 'expr', label: 'Schrijf $t$ in functie van $L$ (zonder wortels): $t=$', ok: '(l/5)^3', vars: ['l'], dom: [1, 30] }
      ],
      uitwerking: '$L(8)=5\\sqrt[3]{8}=5\\cdot 2=10$ cm\n$5\\sqrt[3]{t}=20 \\iff \\sqrt[3]{t}=4 \\iff t=4^3=64$ uur\n$L=5\\sqrt[3]{t} \\iff \\sqrt[3]{t}=\\dfrac{L}{5} \\iff t=\\left(\\dfrac{L}{5}\\right)^3$'
    },
    {
      id: 'q10', onderwerp: 'Vergelijkingen met machten',
      opgave: 'Los op.',
      velden: [
        { type: 'getal', label: '$x^{\\frac{2}{3}}=9$ (met $x>0$): $x=$', ok: '27', check: { waarde: '9^(3/2)' } },
        { type: 'getal', label: '$2\\sqrt[3]{x}+5=-11$: $x=$', ok: '-512', check: { waarde: '(-8)^3' } }
      ],
      uitwerking: '$x^{\\frac{2}{3}}=9 \\iff x=9^{\\frac{3}{2}}=\\left(\\sqrt{9}\\right)^3=27$\n$2\\sqrt[3]{x}=-16 \\iff \\sqrt[3]{x}=-8 \\iff x=(-8)^3=-512$'
    }
  ]
});
