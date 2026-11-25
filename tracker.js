// ============================================================================
// CONFIGURATIE — VUL HIER JOUW SUPABASE GEGEVENS IN
// ============================================================================
const SUPABASE_URL = "https://jscqyywfvjipgodhfvuv.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_O_SPCiTTcGwRXzkXROZrlg_yFz4O_5O";
const HUIDIG_SCHOOLJAAR = "2026-2027";
const BESCHIKBARE_KLASSEN = ["5duHT", "5doSW", "6doSW", "6doTW"]; // Reservelijst; normaal komen de klassen uit index.html
const PORTAAL_URL = "./index.html"; // Het portaal staat naast de apps; daar staat de lijst met geldige codes
const VERZEND_TIJD_ELKE = 300; // Oefentijd wordt per 5 minuten actieve tijd in één rij bewaard (zuinig met de database)
// ============================================================================

window.WiskundeTracker = (function () {
  let config = {
    appId: "onbekende-app",
    moduleId: null,
    schooljaar: HUIDIG_SCHOOLJAAR
  };

  let laatsteActiviteit = Date.now();
  let opgaveStartTijd = Date.now();

  // --- 0. Hulpfuncties ---
  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  async function sha256Hex(tekst) {
    const data = new TextEncoder().encode(tekst);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("");
  }

  // --- 1. LocalStorage beheer ---
  function getLeerling() {
    return {
      code: localStorage.getItem("wisk_leerling_code") || "",
      klas: localStorage.getItem("wisk_leerling_klas") || ""
    };
  }

  function setLeerling(code, klas) {
    localStorage.setItem("wisk_leerling_code", code.trim().toUpperCase());
    localStorage.setItem("wisk_leerling_klas", klas.trim());
    updateStatusBadge();
  }

  // --- 2. Code controleren met dezelfde lijst als het portaal (index.html) ---
  // Het portaal bewaart enkel SHA-256-hashes van de codes. De tracker leest die lijst
  // uit index.html, zodat een app die rechtstreeks geopend wordt geen verzonnen codes
  // of een verkeerde klas naar Supabase stuurt.
  let codeLijstPromise = null;

  function laadCodeLijst() {
    if (!codeLijstPromise) {
      codeLijstPromise = fetch(PORTAAL_URL, { cache: "no-cache" })
        .then(res => (res.ok ? res.text() : null))
        .then(html => {
          if (!html) return null;
          const blokStart = html.indexOf("/* START_CONFIG_DATA */");
          const blokEind = html.indexOf("/* END_CONFIG_DATA */");
          if (blokStart === -1 || blokEind === -1) return null;
          const blok = html.slice(blokStart, blokEind);
          const c = blok.match(/const GELDIGE_CODES\s*=\s*(\[[\s\S]*?\]);/);
          const k = blok.match(/const KLASSEN\s*=\s*(\[[\s\S]*?\]);/);
          if (!c || !k) return null;
          const codes = JSON.parse(c[1]);
          const klassen = JSON.parse(k[1]).map(x => x.id);
          return { codes: Array.isArray(codes) ? codes : [], klassen };
        })
        .catch(() => null);
      // Mislukt het laden (bv. offline), probeer het bij een volgende keer opnieuw
      codeLijstPromise.then(lijst => { if (!lijst) codeLijstPromise = null; });
    }
    return codeLijstPromise;
  }

  // Resultaat: { status: "ok", klas } | { status: "onbekend" } | { status: "open" } | { status: "onbereikbaar" }
  async function controleerCode(code) {
    try {
      const lijst = await laadCodeLijst();
      if (!lijst) return { status: "onbereikbaar" };
      if (lijst.codes.length === 0) return { status: "open", klassen: lijst.klassen };

      const codeHash = await sha256Hex(code);
      const gevonden = lijst.codes.find(item => item.h === codeHash);
      if (!gevonden) return { status: "onbekend" };

      if (gevonden.k) {
        if ((await sha256Hex(`${code}|alle klassen`)) === gevonden.k) {
          return { status: "ok", klas: "alle klassen", klassen: lijst.klassen };
        }
        for (const id of lijst.klassen) {
          if ((await sha256Hex(`${code}|${id}`)) === gevonden.k) {
            return { status: "ok", klas: id, klassen: lijst.klassen };
          }
        }
      }
      return { status: "ok", klas: "", klassen: lijst.klassen };
    } catch (err) {
      return { status: "onbereikbaar" };
    }
  }

  // Welke klas wordt er gelogd? Een gewone code bepaalt zelf de klas;
  // een code voor "alle klassen" (testaccount) houdt de gekozen klas.
  function bepaalKlas(resultaat, gekozenKlas) {
    if (resultaat.klas && resultaat.klas !== "alle klassen") return resultaat.klas;
    const geldig = resultaat.klassen || BESCHIKBARE_KLASSEN;
    if (gekozenKlas && (gekozenKlas === "alle klassen" || geldig.includes(gekozenKlas))) return gekozenKlas;
    return resultaat.klas === "alle klassen" ? "alle klassen" : (gekozenKlas || "");
  }

  // Er wordt enkel gelogd als de opgeslagen code gecontroleerd is.
  let validatie = null; // Promise<boolean>

  function valideerOpgeslagenCode() {
    if (!validatie) {
      let opnieuwProberen = false;
      validatie = (async () => {
        const { code, klas } = getLeerling();
        if (!code) return false;
        const r = await controleerCode(code.trim().toUpperCase());
        if (r.status === "onbekend") {
          localStorage.removeItem("wisk_leerling_code");
          updateStatusBadge();
          return false;
        }
        if (r.status === "ok") {
          const nieuweKlas = bepaalKlas(r, klas);
          if (nieuweKlas && nieuweKlas !== klas) {
            localStorage.setItem("wisk_leerling_klas", nieuweKlas);
            updateStatusBadge();
          }
        }
        // "onbereikbaar" (bv. offline): de code is eerder via het portaal of de tracker
        // gecontroleerd, dus die blijft voorlopig geldig. Bij de volgende log wordt
        // opnieuw gecontroleerd.
        if (r.status === "onbereikbaar") opnieuwProberen = true;
        return true;
      })();
      validatie.then(ok => { if (!ok || opnieuwProberen) validatie = null; });
    }
    return validatie;
  }

  // --- 3. Login-venster voor leerling (indien nog geen geldige code bekend) ---
  function toonCodeModal(kanSluiten = false) {
    const bestaand = document.getElementById("wisk-auth-overlay");
    if (bestaand) bestaand.remove();

    const huidig = getLeerling();
    const klasOpties = ["alle klassen", ...BESCHIKBARE_KLASSEN]
      .filter(k => k !== "alle klassen" || huidig.klas === "alle klassen")
      .map(k => `<option value="${escapeHtml(k)}" ${huidig.klas === k ? "selected" : ""}>${escapeHtml(k === "alle klassen" ? "Alle klassen" : k)}</option>`)
      .join("");

    const overlay = document.createElement("div");
    overlay.id = "wisk-auth-overlay";
    overlay.style.cssText = `
      position: fixed; inset: 0; background: rgba(15, 23, 42, 0.75);
      display: flex; align-items: center; justify-content: center;
      z-index: 99999; font-family: system-ui, -apple-system, sans-serif;
    `;

    overlay.innerHTML = `
      <div style="background: white; padding: 28px; border-radius: 12px; max-width: 380px; width: 90%; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2);">
        <h2 style="margin: 0 0 8px 0; font-size: 1.25rem; color: #0f172a;">Aanmelden wiskunde-app</h2>
        <p style="margin: 0 0 18px 0; font-size: 0.9rem; color: #475569;">
          Vul je persoonlijke leerlingcode in. Je klas wordt automatisch herkend en je browser onthoudt dit voor de volgende keer.
        </p>
        <label style="display:block; font-weight:600; font-size:0.85rem; margin-bottom:4px; color:#334155;">Klas</label>
        <select id="wisk-input-klas" style="width:100%; padding:10px; border:1px solid #cbd5e1; border-radius:8px; margin-bottom:14px; font-size:1rem;">
          ${klasOpties}
        </select>
        <label style="display:block; font-weight:600; font-size:0.85rem; margin-bottom:4px; color:#334155;">Persoonlijke code</label>
        <input id="wisk-input-code" type="text" value="${escapeHtml(huidig.code)}" placeholder="bv. WOORD123"
          style="width:100%; box-sizing:border-box; padding:10px; border:1px solid #cbd5e1; border-radius:8px; margin-bottom:14px; font-size:1rem; text-transform:uppercase;" />
        <div id="wisk-modal-fout" style="display:none; background:#fee2e2; color:#b91c1c; padding:10px 12px; border-radius:8px; font-size:0.86rem; font-weight:600; margin-bottom:14px;"></div>
        <div style="display:flex; flex-wrap:wrap; gap:10px; justify-content:flex-end;">
          <button id="wisk-btn-zonder" style="display:none; padding:10px 16px; border:1px solid #cbd5e1; background:white; border-radius:8px; cursor:pointer;">Verder zonder resultaten op te slaan</button>
          ${kanSluiten ? `<button id="wisk-btn-annuleer" style="padding:10px 16px; border:1px solid #cbd5e1; background:white; border-radius:8px; cursor:pointer;">Annuleren</button>` : ""}
          <button id="wisk-btn-opslaan" style="padding:10px 18px; border:none; background:#2563eb; color:white; font-weight:600; border-radius:8px; cursor:pointer;">Starten</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    // Vul de klassenlijst aan met de klassen uit het portaal (indien bereikbaar)
    laadCodeLijst().then(lijst => {
      if (!lijst || !Array.isArray(lijst.klassen) || lijst.klassen.length === 0) return;
      const sel = document.getElementById("wisk-input-klas");
      if (!sel) return;
      const gekozen = sel.value;
      const opties = (gekozen === "alle klassen" ? ["alle klassen"] : []).concat(lijst.klassen);
      sel.innerHTML = opties
        .map(k => `<option value="${escapeHtml(k)}" ${k === gekozen ? "selected" : ""}>${escapeHtml(k === "alle klassen" ? "Alle klassen" : k)}</option>`)
        .join("");
    });

    const foutEl = document.getElementById("wisk-modal-fout");
    const toonFout = (tekst) => {
      foutEl.textContent = tekst;
      foutEl.style.display = "block";
    };

    const opslaanKnop = document.getElementById("wisk-btn-opslaan");
    const opslaan = async () => {
      const code = document.getElementById("wisk-input-code").value.trim().toUpperCase();
      const gekozenKlas = document.getElementById("wisk-input-klas").value;
      foutEl.style.display = "none";
      if (code.length < 4) {
        toonFout("Vul een geldige code van minstens 4 tekens in.");
        return;
      }

      opslaanKnop.disabled = true;
      opslaanKnop.textContent = "Controleren...";
      const r = await controleerCode(code);
      opslaanKnop.disabled = false;
      opslaanKnop.textContent = "Starten";

      if (r.status === "onbekend") {
        toonFout("❌ Onbekende leerlingcode. Controleer op typfouten of vraag je code aan je leerkracht.");
        return;
      }
      if (r.status === "onbereikbaar") {
        toonFout("De lijst met codes kon niet geladen worden. Controleer je internetverbinding of open de app via het leerlingenportaal. Je kunt ook verder oefenen zonder dat je resultaten bewaard worden.");
        document.getElementById("wisk-btn-zonder").style.display = "inline-block";
        return;
      }

      const klas = r.status === "ok" ? bepaalKlas(r, gekozenKlas) : gekozenKlas;
      setLeerling(code, klas);
      validatie = Promise.resolve(true);
      overlay.remove();
      opgaveStartTijd = Date.now();
    };

    opslaanKnop.onclick = opslaan;
    // Zonder (gecontroleerde) code wordt er niets gelogd: verstuurLog stopt dan zelf.
    document.getElementById("wisk-btn-zonder").onclick = () => overlay.remove();
    document.getElementById("wisk-input-code").addEventListener("keydown", (e) => {
      if (e.key === "Enter") opslaan();
    });

    if (kanSluiten) {
      document.getElementById("wisk-btn-annuleer").onclick = () => overlay.remove();
    }
  }

  // De code staat klein en onopvallend linksonder (geen naam, enkel de anonieme code).
  // Van code wisselen doet de leerling in het portaal.
  function updateStatusBadge() {
    if (!document.body) return;
    let badge = document.getElementById("wisk-status-badge");
    const { code } = getLeerling();
    if (!code) { if (badge) badge.remove(); return; }
    if (!badge) {
      badge = document.createElement("div");
      badge.id = "wisk-status-badge";
      badge.setAttribute("data-html2canvas-ignore", "");
      badge.style.cssText = `
        position: fixed; left: 14px; bottom: 10px; font: 11px system-ui, -apple-system, 'Segoe UI', sans-serif;
        color: #94a3b8; background: rgba(255,255,255,.85); padding: 2px 8px; border-radius: 6px;
        pointer-events: none; z-index: 50;
      `;
      document.body.appendChild(badge);
    }
    badge.textContent = code;
  }

  // --- 4. Data veilig versturen naar Supabase ---
  // Korte, veilige tekst voor de database (geen lange of vreemde waarden)
  function kort(waarde, max = 60) {
    if (waarde === null || waarde === undefined || waarde === "") return null;
    return String(waarde).slice(0, max);
  }

  // Details blijven klein: enkel wat nodig is voor de foutenanalyse. Bij een fout gaan ook mee:
  // de opgave (opg), het eerste foute antwoord (ant, enkel het wiskundige antwoord in het antwoordvak),
  // de feedback die de leerling kreeg (fb) en het juiste antwoord (jst). Geen namen, geen vrije tekst.
  const TEKST_VELDEN = { opg: 260, fb: 320, ant: 90, jst: 140, fs: 90 };

  function maakTekst(waarde, max) {
    if (waarde === null || waarde === undefined) return undefined;
    let t = String(waarde);
    // Al opgemaakte formules (KaTeX) terug omzetten naar hun formule-code: $...$
    if (/[<&]/.test(t) && typeof document !== "undefined") {
      try {
        const sjabloon = document.createElement("template"); // inert: niets wordt uitgevoerd of geladen
        sjabloon.innerHTML = t;
        sjabloon.content.querySelectorAll(".katex").forEach(k => {
          const a = k.querySelector('annotation[encoding="application/x-tex"]');
          k.replaceWith(a ? " $" + a.textContent.trim() + "$ " : k.textContent);
        });
        sjabloon.content.querySelectorAll("br").forEach(b => b.replaceWith(" "));
        sjabloon.content.querySelectorAll("script, style").forEach(x => x.remove());
        t = sjabloon.content.textContent.replace(/\s+/g, " ").trim();
        if (!t) return undefined;
        return t.length > max ? t.slice(0, max - 1) + "…" : t;
      } catch (err) { /* dan gewoon de tags weghalen hieronder */ }
    }
    t = t
      .replace(/<(script|style)[\s\S]*?<\/\1>/gi, " ")
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&")
      .replace(/\s+/g, " ").trim();
    if (!t) return undefined;
    return t.length > max ? t.slice(0, max - 1) + "…" : t;
  }

  function kleineDetails(details) {
    try {
      const d = JSON.parse(JSON.stringify(details || {}));
      for (const [veld, max] of Object.entries(TEKST_VELDEN)) {
        if (veld in d) {
          const t = maakTekst(d[veld], max);
          if (t === undefined) delete d[veld]; else d[veld] = t;
        }
      }
      // Te groot? Eerst de langste tekstvelden laten vallen, de rest blijft bewaard.
      for (const veld of ["fb", "opg", "jst", "ant"]) {
        if (JSON.stringify(d).length <= 1200) break;
        delete d[veld];
      }
      return JSON.stringify(d).length <= 1200 ? d : {};
    } catch (err) {
      return {};
    }
  }

  async function verstuurLog(payload, bijAfsluiten = false) {
    const gecontroleerd = await valideerOpgeslagenCode();
    if (!gecontroleerd) return;

    const { code, klas } = getLeerling();
    if (!code || !klas) return;

    const veiligeDuur = Math.min(7200, Math.max(0, Math.round(Number(payload.duur_seconden) || 0)));
    const score = payload.score_procent === null || payload.score_procent === undefined ? null
      : Math.min(100, Math.max(0, Math.round(Number(payload.score_procent) || 0)));

    const rij = {
      schooljaar: config.schooljaar,
      klas: klas,
      leerling_code: code,
      app_id: config.appId,
      module_id: kort(payload.module_id || config.moduleId),
      event_type: payload.event_type,
      duur_seconden: veiligeDuur,
      is_correct: payload.is_correct ?? null,
      score_procent: score,
      fout_categorie: kort(payload.fout_categorie),
      details: kleineDetails(payload.details)
    };

    try {
      await fetch(`${SUPABASE_URL}/rest/v1/leerling_logs`, {
        method: "POST",
        headers: {
          "apikey": SUPABASE_ANON_KEY,
          "Content-Type": "application/json",
          "Prefer": "return=minimal"
        },
        body: JSON.stringify(rij),
        keepalive: bijAfsluiten // laat het verzoek afwerken als de pagina net gesloten wordt
      });
    } catch (err) {
      console.warn("Log kon niet worden verstuurd (offline?):", err);
    }
  }

  // --- 5. Actieve oefentijd meten ---
  // Elke 30 seconden wordt gekeken of de leerling actief is. De actieve tijd wordt opgespaard en
  // pas per 5 minuten (of bij het verlaten van de app) als één rij verstuurd.
  let onverzondenTijd = 0;

  function stuurTijd(bijAfsluiten = false) {
    if (onverzondenTijd < 30) return;
    const duur = onverzondenTijd;
    onverzondenTijd = 0;
    verstuurLog({ event_type: "sessie_tijd", duur_seconden: duur }, bijAfsluiten);
  }

  function startTijdMeting() {
    ["mousemove", "keydown", "click", "touchstart", "wheel", "scroll"].forEach((evt) => {
      window.addEventListener(evt, () => { laatsteActiviteit = Date.now(); }, { passive: true });
    });

    setInterval(() => {
      const tabZichtbaar = document.visibilityState === "visible";
      const recentActief = (Date.now() - laatsteActiviteit) < 45000; // max 45s inactief
      const { code } = getLeerling();

      if (tabZichtbaar && recentActief && code) {
        onverzondenTijd += 30;
        if (onverzondenTijd >= VERZEND_TIJD_ELKE) stuurTijd();
      }
    }, 30000);

    // Bij het verlaten of verbergen van de app: de resterende tijd nog doorsturen
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") { stuurTijd(true); stuurTheorie(true); }
    });
    window.addEventListener("pagehide", () => { stuurTijd(true); stuurTheorie(true); });
  }

  // --- 6. Theorie bekeken ---
  // De app geeft een functie die zegt welk theorie-onderdeel nu open staat (of null).
  // Elke 5 seconden wordt gekeken; de leestijd telt alleen als de app zichtbaar is en de leerling
  // de laatste 90 seconden nog iets deed (scrollen, klikken, ...). Eén rij per keer dat een
  // onderdeel open stond (minstens 10 seconden), bij lang lezen per 10 minuten.
  let theorieFunctie = null;
  let theorieHuidig = null;
  let theorieSeconden = 0;

  function stuurTheorie(bijAfsluiten = false) {
    if (theorieHuidig && theorieSeconden >= 10) {
      verstuurLog({ event_type: "theorie_bekeken", module_id: theorieHuidig, duur_seconden: theorieSeconden }, bijAfsluiten);
    }
    theorieSeconden = 0;
  }

  function theorieTik() {
    let nu = null;
    try { nu = theorieFunctie ? theorieFunctie() : null; } catch (err) { nu = null; }
    nu = nu ? String(nu) : null;
    if (nu !== theorieHuidig) {
      stuurTheorie();
      theorieHuidig = nu;
    }
    const { code } = getLeerling();
    if (nu && code && document.visibilityState === "visible" && (Date.now() - laatsteActiviteit) < 90000) {
      theorieSeconden += 5;
      if (theorieSeconden >= 600) stuurTheorie();
    }
  }

  // --- Publieke functies voor jouw wiskunde-apps ---
  return {
    init(opties = {}) {
      config = { ...config, ...opties };
      const start = () => {
        updateStatusBadge();
        valideerOpgeslagenCode().then(ok => {
          if (!ok && !document.getElementById("wisk-auth-overlay")) {
            toonCodeModal(false);
          }
        });
        startTijdMeting();
      };
      if (document.readyState === "loading") {
        window.addEventListener("DOMContentLoaded", start);
      } else {
        start();
      }
    },

    volgTheorie(functie) {
      if (typeof functie !== "function" || theorieFunctie) return;
      theorieFunctie = functie;
      setInterval(theorieTik, 5000);
    },

    setModule(moduleId) {
      config.moduleId = moduleId;
    },

    resetOpgaveTimer() {
      opgaveStartTijd = Date.now();
    },

    logOpgave({ isCorrect, foutCategorie = null, duurSeconden = null, moduleId = null, details = {} }) {
      const berekendeDuur = duurSeconden !== null
        ? duurSeconden
        : Math.round((Date.now() - opgaveStartTijd) / 1000);
      opgaveStartTijd = Date.now();

      return verstuurLog({
        event_type: "opgave_poging",
        module_id: moduleId,
        duur_seconden: berekendeDuur,
        is_correct: Boolean(isCorrect),
        fout_categorie: isCorrect ? null : foutCategorie,
        details
      });
    },

    logToets({ scoreProcent, duurSeconden = 0, moduleId = null, details = {} }) {
      return verstuurLog({
        event_type: "toets_einde",
        module_id: moduleId,
        duur_seconden: duurSeconden,
        score_procent: scoreProcent,
        details
      });
    },

    logModuleVoltooid(moduleId, details = {}) {
      return verstuurLog({
        event_type: "module_voltooid",
        module_id: moduleId || config.moduleId,
        is_correct: true,
        details
      });
    }
  };
})();
