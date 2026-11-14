// ============================================================================
// CONFIGURATIE — VUL HIER JOUW SUPABASE GEGEVENS IN
// ============================================================================
const SUPABASE_URL = "https://jscqyywfvjipgodhfvuv.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_O_SPCiTTcGwRXzkXROZrlg_yFz4O_5O";
const HUIDIG_SCHOOLJAAR = "2026-2027";
const BESCHIKBARE_KLASSEN = ["5duHT", "5doSW", "6doSW", "6doTW"]; // Pas aan naar jouw klassen
// ============================================================================

window.WiskundeTracker = (function () {
  let config = {
    appId: "onbekende-app",
    moduleId: null,
    schooljaar: HUIDIG_SCHOOLJAAR
  };

  let laatsteActiviteit = Date.now();
  let opgaveStartTijd = Date.now();

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

  // --- 2. Login-venster voor leerling (indien nog geen code bekend) ---
  function toonCodeModal(kanSluiten = false) {
    const bestaand = document.getElementById("wisk-auth-overlay");
    if (bestaand) bestaand.remove();

    const huidig = getLeerling();
    const klasOpties = BESCHIKBARE_KLASSEN.map(
      (k) => `<option value="${k}" ${huidig.klas === k ? "selected" : ""}>${k}</option>`
    ).join("");

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
          Vul je klas en persoonlijke leerlingcode in. Je browser onthoudt dit voor de volgende keer.
        </p>
        <label style="display:block; font-weight:600; font-size:0.85rem; margin-bottom:4px; color:#334155;">Klas</label>
        <select id="wisk-input-klas" style="width:100%; padding:10px; border:1px solid #cbd5e1; border-radius:8px; margin-bottom:14px; font-size:1rem;">
          ${klasOpties}
        </select>
        <label style="display:block; font-weight:600; font-size:0.85rem; margin-bottom:4px; color:#334155;">Persoonlijke code</label>
        <input id="wisk-input-code" type="text" value="${huidig.code}" placeholder="bv. WISK-4829"
          style="width:100%; box-sizing:border-box; padding:10px; border:1px solid #cbd5e1; border-radius:8px; margin-bottom:18px; font-size:1rem; text-transform:uppercase;" />
        <div style="display:flex; gap:10px; justify-content:flex-end;">
          ${kanSluiten ? `<button id="wisk-btn-annuleer" style="padding:10px 16px; border:1px solid #cbd5e1; background:white; border-radius:8px; cursor:pointer;">Annuleren</button>` : ""}
          <button id="wisk-btn-opslaan" style="padding:10px 18px; border:none; background:#2563eb; color:white; font-weight:600; border-radius:8px; cursor:pointer;">Starten</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    document.getElementById("wisk-btn-opslaan").onclick = () => {
      const code = document.getElementById("wisk-input-code").value.trim();
      const klas = document.getElementById("wisk-input-klas").value;
      if (code.length < 4) {
        alert("Vul een geldige code van minstens 4 tekens in.");
        return;
      }
      setLeerling(code, klas);
      overlay.remove();
      opgaveStartTijd = Date.now();
    };

    if (kanSluiten) {
      document.getElementById("wisk-btn-annuleer").onclick = () => overlay.remove();
    }
  }

  function updateStatusBadge() {
    let badge = document.getElementById("wisk-status-badge");
    if (!badge) {
      badge = document.createElement("div");
      badge.id = "wisk-status-badge";
      badge.style.cssText = `
        position: fixed; bottom: 12px; right: 12px; background: #f8fafc;
        border: 1px solid #cbd5e1; border-radius: 999px; padding: 6px 14px;
        font-family: system-ui, sans-serif; font-size: 0.8rem; color: #334155;
        box-shadow: 0 2px 6px rgba(0,0,0,0.08); z-index: 9999; display: flex; gap: 8px; align-items: center;
      `;
      document.body.appendChild(badge);
    }
    const { code, klas } = getLeerling();
    badge.innerHTML = `
      <span>👤 <strong>${code || "Niet aangemeld"}</strong> (${klas || "-"})</span>
      <button id="wisk-badge-edit" style="background:none; border:none; color:#2563eb; text-decoration:underline; cursor:pointer; font-size:0.8rem; padding:0;">Wijzigen</button>
    `;
    document.getElementById("wisk-badge-edit").onclick = () => toonCodeModal(true);
  }

  // --- 3. Data veilig versturen naar Supabase ---
  async function verstuurLog(payload) {
    const { code, klas } = getLeerling();
    if (!code || !klas) return;

    const veiligeDuur = Math.min(7200, Math.max(0, Math.round(payload.duur_seconden || 0)));

    const rij = {
      schooljaar: config.schooljaar,
      klas: klas,
      leerling_code: code,
      app_id: config.appId,
      module_id: payload.module_id || config.moduleId || null,
      event_type: payload.event_type,
      duur_seconden: veiligeDuur,
      is_correct: payload.is_correct ?? null,
      score_procent: payload.score_procent ?? null,
      fout_categorie: payload.fout_categorie || null,
      details: payload.details || {}
    };

    try {
      await fetch(`${SUPABASE_URL}/rest/v1/leerling_logs`, {
        method: "POST",
        headers: {
          "apikey": SUPABASE_ANON_KEY,
          "Content-Type": "application/json",
          "Prefer": "return=minimal"
        },
        body: JSON.stringify(rij)
      });
    } catch (err) {
      console.warn("Log kon niet worden verstuurd (offline?):", err);
    }
  }

  // --- 4. Actieve oefentijd meten (hartslag elke 30s) ---
  function startTijdMeting() {
    ["mousemove", "keydown", "click", "touchstart"].forEach((evt) => {
      window.addEventListener(evt, () => { laatsteActiviteit = Date.now(); }, { passive: true });
    });

    setInterval(() => {
      const tabZichtbaar = document.visibilityState === "visible";
      const recentActief = (Date.now() - laatsteActiviteit) < 45000; // max 45s inactief
      const { code } = getLeerling();

      if (tabZichtbaar && recentActief && code) {
        verstuurLog({
          event_type: "sessie_tijd",
          duur_seconden: 30
        });
      }
    }, 30000);
  }

  // --- Publieke functies voor jouw wiskunde-apps ---
  return {
    init(opties = {}) {
      config = { ...config, ...opties };
      window.addEventListener("DOMContentLoaded", () => {
        updateStatusBadge();
        const { code, klas } = getLeerling();
        if (!code || !klas) {
          toonCodeModal(false);
        }
        startTijdMeting();
      });
    },

    setModule(moduleId) {
      config.moduleId = moduleId;
    },

    resetOpgaveTimer() {
      opgaveStartTijd = Date.now();
    },

    logOpgave({ isCorrect, foutCategorie = null, duurSeconden = null, details = {} }) {
      const berekendeDuur = duurSeconden !== null
        ? duurSeconden
        : Math.round((Date.now() - opgaveStartTijd) / 1000);
      opgaveStartTijd = Date.now();

      return verstuurLog({
        event_type: "opgave_poging",
        duur_seconden: berekendeDuur,
        is_correct: Boolean(isCorrect),
        fout_categorie: isCorrect ? null : foutCategorie,
        details
      });
    },

    logToets({ scoreProcent, duurSeconden = 0, details = {} }) {
      return verstuurLog({
        event_type: "toets_einde",
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