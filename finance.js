function rupiah(n){
  if (!Number.isFinite(n)) return "Rp0";
  return "Rp" + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function rawDigits(v){
  return String(v || "").replace(/[^\d]/g, "");
}

function numFromInput(id){
  const el = document.getElementById(id);
  if (!el) return 0;
  const d = rawDigits(el.value);
  const x = Number(d || "0");
  return Number.isFinite(x) ? x : 0;
}

function formatInputRupiah(el){
  const d = rawDigits(el.value);
  if (!d) { el.value = ""; return; }
  el.value = "Rp" + d.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function compute(){
  const income = numFromInput("inc");
  const rent = numFromInput("rent");
  const food = numFromInput("food");
  const transport = numFromInput("transport");
  const bills = numFromInput("bills");
  const other = numFromInput("other");

  const expenses = rent + food + transport + bills + other;
  const remaining = income - expenses;

  const suggestedSave = Math.max(0, income * 0.2);
  const saveGap = remaining - suggestedSave;

  setText("outIncome", rupiah(income));
  setText("outExpenses", rupiah(expenses));
  setText("outRemaining", rupiah(remaining));
  setText("outSuggest", rupiah(suggestedSave));

  const expRatio = income > 0 ? (expenses / income) * 100 : 0;
  const saveRatio = income > 0 ? (remaining / income) * 100 : 0;
  setText("kpiExpenseRatio", `${Math.max(0, Math.min(999, expRatio)).toFixed(0)}%`);
  setText("kpiSaveRatio", `${saveRatio.toFixed(0)}%`);
  const status = document.getElementById("kpiStatus");
  if (status){
    if (income <= 0) status.textContent = "Isi pemasukan";
    else if (remaining < 0) status.textContent = "Defisit";
    else if (saveRatio >= 20) status.textContent = "Sehat";
    else status.textContent = "Perlu optimasi";
  }

  const msg = document.getElementById("outMsg");
  if (msg){
    if (income <= 0){
      msg.textContent = "Isi pemasukan untuk mulai menghitung.";
    } else if (remaining < 0){
      msg.textContent = "Pengeluaran lebih besar dari pemasukan. Coba kurangi pos 'lainnya' atau evaluasi kebutuhan.";
    } else if (saveGap >= 0){
      msg.textContent = "Mantap! Sisa uang cukup untuk target tabungan 20% (rule of thumb).";
    } else {
      msg.textContent = "Sisa uang belum mencapai target tabungan 20% (rule of thumb). Coba optimasi pengeluaran.";
    }
  }
}

function setText(id,val){
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function setRangeFill(id){
  const el = document.getElementById(id);
  if (!el) return;
  const v = clampPct(Number(el.value || 0));
  el.style.setProperty("--value", `${v}%`);
}

let _syncingIncome = false;

function getBudgetIncome(){
  const b = numFromInput("budgetInc");
  if (b > 0) return b;
  return numFromInput("inc");
}

function syncIncome(fromId, toId){
  if (_syncingIncome) return;
  const from = document.getElementById(fromId);
  const to = document.getElementById(toId);
  if (!from || !to) return;
  const v = rawDigits(from.value);
  _syncingIncome = true;
  to.value = v ? ("Rp" + v.replace(/\B(?=(\d{3})+(?!\d))/g, ".")) : "";
  _syncingIncome = false;
}




let lastChanged = "rSave";
let budgetFocus = "needs";

function clampPct(x){ return Math.max(0, Math.min(100, x)); }

let budgetPct = { needs: 50, wants: 30, save: 20 };

function setBudgetPct(needs, wants, save){
  let n = clampPct(Math.round(Number(needs)||0));
  let w = clampPct(Math.round(Number(wants)||0));
  let s = clampPct(Math.round(Number(save)||0));
  const total = n + w + s;
  if (total !== 100){
    s = clampPct(s + (100 - total));
  }
  budgetPct = { needs: n, wants: w, save: s };
}

function setNumInput(id, val){
  const el = document.getElementById(id);
  if (!el) return;
  if (document.activeElement === el) return;
  el.value = String(clampPct(val));
}


function setSlider(id, val){
  const el = document.getElementById(id);
  if (el) el.value = String(clampPct(val));
}

function readPct(id){
  const el = document.getElementById(id);
  const v = Number(el?.value || "0");
  return Number.isFinite(v) ? clampPct(v) : 0;
}

function enforceSum100(changedId){

  const changed = changedId || lastChanged || "rSave";

  let n = clampPct(readPct("rNeeds"));
  let w = clampPct(readPct("rWants"));
  let s = clampPct(readPct("rSave"));

  const setWarn = (msg) => {
    lastAdjustMsg = msg;
    lastAdjustedAt = Date.now();
  };

  if (changed === "rNeeds"){
    s = 100 - n - w;
    if (s < 0){
      w = clampPct(100 - n);
      s = 0;
      setWarn("Total > 100% — kami kurangi Keinginan agar tetap 100%.");
    }
  } else if (changed === "rWants"){
    s = 100 - n - w;
    if (s < 0){
      n = clampPct(100 - w);
      s = 0;
      setWarn("Total > 100% — kami kurangi Kebutuhan agar tetap 100%.");
    }
  } else {
    w = 100 - n - s;
    if (w < 0){
      n = clampPct(100 - s);
      w = 0;
      setWarn("Total > 100% — kami kurangi Kebutuhan agar tetap 100%.");
    }
  }

  n = clampPct(Math.round(n));
  w = clampPct(Math.round(w));
  s = clampPct(Math.round(100 - n - w));
  const total = n + w + s;
  if (total !== 100){
    s = clampPct(s + (100 - total));
  }

  setSlider("rNeeds", n);
  setSlider("rWants", w);
  setSlider("rSave", s);

  if (!lastAdjustMsg) setWarn("Total harus 100% — kami sesuaikan otomatis.");
}

function setBar(id, pct){
  const el = document.getElementById(id);
  if (el) el.style.width = String(Math.max(0, Math.min(100, pct))) + "%";
}

function updateBudgetUI(){
  const n = readPct("rNeeds");
  const w = readPct("rWants");
  const s = readPct("rSave");

  if (lastAdjustMsg && Date.now() - lastAdjustedAt > 1200){
    lastAdjustMsg = "";
  }

  const iN = document.getElementById("iNeeds");
  const iW = document.getElementById("iWants");
  const iS = document.getElementById("iSave");
  if (iN && document.activeElement !== iN) iN.value = String(n);
  if (iW && document.activeElement !== iW) iW.value = String(w);
  if (iS && document.activeElement !== iS) iS.value = String(s);

  setRangeFill("rNeeds");
  setRangeFill("rWants");
  setRangeFill("rSave");
const sumHint = document.getElementById("sumHint");
  if (sumHint){
    const total = n+w+s;
    sumHint.textContent = lastAdjustMsg ? `${lastAdjustMsg} (Total: ${total}%)` : `Total: ${total}%`;
    sumHint.classList.toggle('warn', Boolean(lastAdjustMsg));
  }
  setBar("barNeeds", n);
  setBar("barWants", w);
  setBar("barSave", s);
}

function getFocusedPct(){
  const n = readPct("rNeeds");
  const w = readPct("rWants");
  const s = readPct("rSave");
  if (budgetFocus === "wants") return { key:"wants", label:"Keinginan", pct:w };
  if (budgetFocus === "save")  return { key:"save",  label:"Tabungan/Investasi", pct:s };
  return { key:"needs", label:"Kebutuhan", pct:n };
}




function updateBudgetAmounts(income){
  const planner = document.getElementById("budgetPlanner");
  if (!planner) return;
  const n = budgetPct.needs;
  const w = budgetPct.wants;
  const s = budgetPct.save;

  setText("aNeeds", rupiah(income * n/100));
  setText("aWants", rupiah(income * w/100));
  setText("aSave",  rupiah(income * s/100));
}

function bindBudgetPlanner(){
  const planner = document.getElementById("budgetPlanner");
  if (!planner) return;
  if (planner.dataset.bound === "1") return;
  planner.dataset.bound = "1";

  const incomeEl = document.getElementById("budgetInc");
  if (incomeEl) {
    incomeEl.setAttribute("inputmode", "numeric");
    incomeEl.addEventListener("input", () => {
      formatInputRupiah(incomeEl);
      syncIncome("budgetInc", "inc");
      compute();
      updateBudgetAmounts(getBudgetIncome());
    });
  }

  function setActivePreset(presetKey){
    planner.querySelectorAll("[data-preset]").forEach(b => {
      const key = String(b.getAttribute("data-preset")||"");
      b.classList.toggle("is-active", key === presetKey);
    });
  }

  planner.querySelectorAll("[data-preset]").forEach(btn => {
    btn.addEventListener("click", () => {
      const preset = String(btn.getAttribute("data-preset")||"50-30-20");
      if (preset === "reset"){
        setBudgetPct(50,30,20);
        setActivePreset("reset");
      } else {
        const parts = preset.split("-").map(Number);
        setBudgetPct(parts[0]||50, parts[1]||30, parts[2]||20);
        setActivePreset(preset);
      }
      updateBudgetAmounts(getBudgetIncome());
    });
  });

  setBudgetPct(50,30,20);
  setActivePreset("50-30-20");
  updateBudgetAmounts(getBudgetIncome());
}


function bind(){
  const root = document.getElementById("financeCalc");
  if (!root) return;

  const inputs = ["inc","rent","food","transport","bills","other"]
    .map(id => document.getElementById(id))
    .filter(Boolean);

  inputs.forEach(inp => {
    inp.setAttribute("inputmode", "numeric");
    inp.addEventListener("input", () => {
      formatInputRupiah(inp);
      compute();
      if (inp.id === "inc") {
        syncIncome("inc", "budgetInc");
        updateBudgetAmounts(getBudgetIncome());
      }
    });
    inp.addEventListener("blur", () => formatInputRupiah(inp));
  });

  const btn = document.getElementById("btnResetCalc");
  btn?.addEventListener("click", () => {
    ["inc","rent","food","transport","bills","other"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = "";
    });
    const b = document.getElementById("budgetInc");
    if (b) b.value = "";
    compute();
    updateBudgetAmounts(getBudgetIncome());
  });

  bindBudgetPlanner();
  compute();
}

document.addEventListener("DOMContentLoaded", bind);
