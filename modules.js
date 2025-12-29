function animateProgressBars() {
  document.querySelectorAll("[data-progress]").forEach(el => {
    const p = Number(el.getAttribute("data-progress") || "0");
    requestAnimationFrame(() => {
      const bar = el.querySelector(".progress > div");
      if (bar) bar.style.width = `${p}%`;
    });
  });
}

function filterModules(level) {
  document.querySelectorAll("#modulesGrid .card").forEach(c => {
    const lv = c.getAttribute("data-level");
    c.style.display = (level === "Semua" || lv === level) ? "" : "none";
  });
}

function searchModules(q) {
  const term = (q || "").trim().toLowerCase();
  document.querySelectorAll("#modulesGrid .card").forEach(c => {
    const hay = (c.getAttribute("data-title") || "").toLowerCase();
    c.style.display = hay.includes(term) ? "" : "none";
  });
}

function openModule(title, desc) {
  alert(`${title}\n\n${desc}\n\n(Placeholder. Kalau mau gue bikin detail page per modul.)`);
}

document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("modulesGrid")) return;
  animateProgressBars();

  window.filterModules = filterModules;
  window.searchModules = searchModules;
  window.openModule = openModule;
});
