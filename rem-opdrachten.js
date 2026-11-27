/* rem-opdrachten.js — remediëringen die de leerkracht toewees (via de klasapp).
   Gebruikt door het portaal (melding) en remediering.html (indienen).
   Anoniem: enkel de leerlingcode en de klas gaan naar Supabase, nooit een naam.
   Leerlingen kunnen enkel hun eigen open opdrachten opvragen en één rapport per opdracht opladen. */
(function () {
  'use strict';
  const SUPABASE_URL = 'https://jscqyywfvjipgodhfvuv.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_O_SPCiTTcGwRXzkXROZrlg_yFz4O_5O';
  const BUCKET = 'rem-rapporten';
  // tijdslimieten: een verbinding die blijft hangen (proxy, firewall) mag de pagina nooit blokkeren
  const tijdslimiet = { rpc: 8000, upload: 60000 };
  async function metLimiet(url, opt, ms) {
    const c = new AbortController(), t = setTimeout(() => c.abort(), ms);
    try { return await fetch(url, { ...opt, signal: c.signal }); } finally { clearTimeout(t); }
  }
  const DAGEN = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];

  const schoneCode = c => String(c || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 40);

  // Zichtbaarheid van een remediëring (zelfde regel als lijst.js / remediering.html, Tom 27/11/2026):
  // semester 1 verdwijnt vanaf 1 januari na de datum van openzetten, semester 2 vanaf 1 september.
  function vervaldatum(it) {
    if (!it || !(it.sem === 1 || it.sem === 2) || !it.open) return null;
    const d = new Date(it.open + 'T12:00:00'); if (isNaN(d)) return null;
    const naSept = d.getMonth() >= 8, j = d.getFullYear();
    if (it.sem === 1) return naSept ? new Date(j + 1, 0, 1) : new Date(j, 8, 1);
    return naSept ? new Date(j + 1, 8, 1) : new Date(j, 8, 1);
  }
  function isZichtbaar(it, nu) {
    const v = vervaldatum(it);
    const n = nu || (window.REM_NU ? new Date(window.REM_NU + 'T12:00:00') : new Date());
    return !v || n < v;
  }

  function fmtDeadline(iso) {
    const d = new Date(iso); if (isNaN(d)) return '';
    return `${DAGEN[d.getDay()]} ${d.getDate()}/${d.getMonth() + 1}`;
  }

  async function rpc(naam, body) {
    const res = await metLimiet(`${SUPABASE_URL}/rest/v1/rpc/${naam}`, {
      method: 'POST',
      headers: { apikey: SUPABASE_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }, tijdslimiet.rpc);
    if (!res.ok) throw new Error(`${naam}: HTTP ${res.status}`);
    return res.json();
  }

  // Open opdrachten van deze code + klas. Geen code of testaccount "alle klassen": [].
  // Bij een fout (offline, server): [] — of null met { strikt: true }, zodat de pagina weet dat ze het niet weet.
  async function mijn(code, klas, opties) {
    const c = schoneCode(code), k = String(klas || '').trim();
    if (c.length < 4 || !k || k === 'alle klassen') return [];
    try {
      const rijen = await rpc('rem_mijn_opdrachten', { p_code: c, p_klas: k });
      return Array.isArray(rijen) ? rijen : [];
    } catch (e) { return opties && opties.strikt ? null : []; }
  }

  // Enkel opdrachten waarvan de remediëring in lijst.js staat en nog zichtbaar is.
  async function zichtbareOpen(code, klas, lijst, nu) {
    const items = ((lijst || window.REM_LIJST || {})[klas]) || [];
    const rijen = await mijn(code, klas);
    return rijen.map(r => ({ ...r, item: items.find(it => it.id === r.rem_id) }))
      .filter(r => r.item && isZichtbaar(r.item, nu));
  }

  // Rapport opladen en de opdracht als ingediend markeren. Geeft { ok, fout }.
  async function indienen({ id, code, klas, score, poging, vraag, pdfBlob }) {
    const c = schoneCode(code);
    if (!id || c.length < 4 || !klas || !pdfBlob) return { ok: false, fout: 'onvolledig' };
    const pad = `${id}/${c}_${Date.now()}.pdf`;
    try {
      const up = await metLimiet(`${SUPABASE_URL}/storage/v1/object/${BUCKET}/${pad}`, {
        method: 'POST',
        headers: { apikey: SUPABASE_KEY, 'Content-Type': 'application/pdf', 'x-upsert': 'false' },
        body: pdfBlob
      }, tijdslimiet.upload);
      if (!up.ok) return { ok: false, fout: `upload HTTP ${up.status}` };
      const ok = await rpc('rem_indienen', {
        p_id: id, p_code: c, p_klas: klas, p_score: score, p_poging: poging || 1,
        p_pdf_pad: pad, p_vraag: String(vraag || '').slice(0, 500)
      });
      return ok === true ? { ok: true } : { ok: false, fout: 'niet aanvaard' };
    } catch (e) {
      return { ok: false, fout: String(e && e.message || e) };
    }
  }

  window.RemOpdrachten = { vervaldatum, isZichtbaar, fmtDeadline, mijn, zichtbareOpen, indienen, tijdslimiet };
})();
