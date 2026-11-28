/* wortel.js — eenvoudige invoer van n-demachtswortels in alle wiskunde-apps (© T. Gaerdelen)
   Leerlingen typen een wortel zoals ze hem schrijven:  ³√(x+1)   ⁵√(x²)   ∛8   ∜(16)
   - knop "ⁿ√" opent een keuzelijstje (3, 4, 5, …) en zet bv. ³√() in het vak, cursor tussen de haakjes
   - ook typen kan: ∛ en ∜, of de wortelexponent als klein cijfertje vóór √
   - oud formaat root(3, x) blijft werken in de apps die het al kenden
   WORTEL.omzetten(tekst, maak) vervangt elke n-demachtswortel door maak(n, argument);
   elke app kiest zelf hoe ze dat intern noteert. */
(function () {
  const SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  const naarSup = n => String(n).split('').map(d => SUP[+d]).join('');
  const OPEN = '([{', DICHT = ')]}';

  function omzetten(s, maak) {
    s = String(s);
    let uit = '', i = 0;
    while (i < s.length) {
      const c = s[i];
      let n = 0, j = i;
      if (c === '∛') { n = 3; j = i + 1; }
      else if (c === '∜') { n = 4; j = i + 1; }
      else if (SUP.includes(c)) {
        let k = i; while (k < s.length && SUP.includes(s[k])) k++;
        let k2 = k; while (s[k2] === ' ') k2++;
        // klein cijfer vóór √ = wortelexponent, behalve na een letter of haakje (x²√x = x² · √x)
        const voor = uit.replace(/\s+$/, '').slice(-1);
        if (s[k2] === '√' && !/[A-Za-z)\]}²³]/.test(voor)) { n = +[...s.slice(i, k)].map(d => SUP.indexOf(d)).join(''); j = k2 + 1; }
      }
      if (!n) { uit += c; i++; continue; }
      while (s[j] === ' ') j++;
      let arg;
      if (j < s.length && OPEN.includes(s[j])) {
        let diep = 0, e = j;
        for (; e < s.length; e++) {
          if (OPEN.includes(s[e])) diep++;
          else if (DICHT.includes(s[e]) && --diep === 0) break;
        }
        arg = s.slice(j + 1, e);           // ontbreekt het sluithaakje: alles tot het einde
        j = e + 1;
      } else {
        const m = s.slice(j).match(/^(\d+(?:[.,]\d+)?|π|pi|[A-Za-z])/);
        if (!m) { uit += maak(n, ''); i = j; continue; }   // de app meldt zelf dat er iets ontbreekt
        arg = m[0]; j += m[0].length;
      }
      uit += maak(n, omzetten(arg, maak));
      i = j;
    }
    return uit;
  }

  // keuzelijstje naast een knop; kies(n) wordt opgeroepen met de gekozen wortelexponent
  function kiesIndex(knop, kies) {
    document.querySelectorAll('.wortel-keuze').forEach(e => e.remove());
    const doos = document.createElement('div');
    doos.className = 'wortel-keuze';
    doos.setAttribute('role', 'menu');
    doos.innerHTML = '<div class="wk-titel">Welke wortel?</div>' +
      [3, 4, 5, 6, 7, 8, 9].map(n => `<button type="button" data-n="${n}">${naarSup(n)}√</button>`).join('') +
      '<button type="button" data-n="?" title="andere wortelexponent">ⁿ√ …</button>';
    Object.assign(doos.style, { position: 'absolute', zIndex: 9999, background: '#fff', border: '1px solid #cbd5e1', borderRadius: '10px',
      boxShadow: '0 6px 20px rgba(15,23,42,.18)', padding: '8px', display: 'flex', flexWrap: 'wrap', gap: '6px', maxWidth: '260px', font: 'inherit' });
    const st = doos.querySelector('.wk-titel').style;
    Object.assign(st, { width: '100%', fontSize: '.85em', color: '#64748b', margin: '0 2px 2px' });
    doos.querySelectorAll('button').forEach(b => Object.assign(b.style, { minWidth: '46px', padding: '8px 10px', fontSize: '1.05em',
      border: '1px solid #cbd5e1', borderRadius: '8px', background: '#f8fafc', cursor: 'pointer', fontFamily: 'inherit' }));
    document.body.appendChild(doos);
    const r = knop.getBoundingClientRect();
    let x = r.left + window.scrollX, y = r.bottom + window.scrollY + 4;
    x = Math.max(8, Math.min(x, window.scrollX + document.documentElement.clientWidth - doos.offsetWidth - 8));
    doos.style.left = x + 'px'; doos.style.top = y + 'px';
    const weg = () => { doos.remove(); document.removeEventListener('mousedown', buiten, true); document.removeEventListener('keydown', esc, true); };
    const buiten = e => { if (!doos.contains(e.target) && e.target !== knop) weg(); };
    const esc = e => { if (e.key === 'Escape') weg(); };
    setTimeout(() => { document.addEventListener('mousedown', buiten, true); document.addEventListener('keydown', esc, true); }, 0);
    doos.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      e.preventDefault(); e.stopPropagation();
      let n = b.dataset.n;
      if (n === '?') { n = prompt('Welke wortelexponent n? (een natuurlijk getal groter dan 1)', '10'); if (n == null) return weg(); }
      n = parseInt(n, 10);
      weg();
      if (n >= 2 && n <= 99) kies(n);
    });
  }

  // tekst die een knop invoegt voor de n-demachtswortel + positie van de cursor (tussen de haakjes)
  function invoegTekst(n) { const t = (n === 2 ? '' : naarSup(n)) + '√()'; return { tekst: t, cursor: t.length - 1 }; }

  // in een invoervak zetten (op de cursor), daarna een input-event zodat het voorbeeld meteen bijwerkt
  function voegIn(inp, n) {
    const { tekst, cursor } = invoegTekst(n);
    const a = inp.selectionStart ?? inp.value.length, z = inp.selectionEnd ?? inp.value.length;
    const sel = inp.value.slice(a, z);
    inp.value = inp.value.slice(0, a) + tekst.replace('()', '(' + sel + ')') + inp.value.slice(z);
    inp.focus();
    const pos = a + cursor + sel.length; inp.setSelectionRange(pos, pos);
    inp.dispatchEvent(new Event('input', { bubbles: true }));
  }

  // echte waarde van de n-demachtswortel (ook oneven wortels van negatieve getallen)
  function waarde(n, a) {
    if (a < 0) return n % 2 ? -Math.pow(-a, 1 / n) : NaN;
    const r = Math.pow(a, 1 / n), g = Math.round(r);
    return Math.abs(Math.pow(g, n) - a) < 1e-9 * Math.max(1, a) ? g : r;
  }

  window.WORTEL = { omzetten, kiesIndex, invoegTekst, voegIn, waarde, naarSup, KNOP: 'ⁿ√' };
})();
