/* NBK-E Onboarding Console — shared behavior */

(function () {
  "use strict";

  var STORE_PREFIX = "nbke:";
  var THEME_KEY = "nbke:theme";
  var SEED_KEY = "nbke:seeded";

  /* One flat, de-duplicated list of everything a new hire needs to complete.
     This is the single source of truth for progress — every ring, dashboard
     stat and checkbox on the site reads from it. Add or remove an item here
     and give its checklist row the matching data-track-id. */
  var TRACKED_ITEMS = [
    // core tasks
    "task-read-procedures", "task-atm-incidents-ca", "task-it-incidents", "task-outage-email",
    // access requests (forms + system access, one line per system)
    "access-powercard", "access-t24", "access-solidcore", "access-ca", "access-nexthink",
    "access-forex", "access-uim", "access-perfcenter", "access-spectrum", "access-externalmail",
    "access-aptra", "access-vynamic", "access-outlook", "access-ad", "access-webex",
    "access-teams", "access-dashboards", "access-ibanking", "access-obanking", "access-ivr",
    "access-ncrhde", "access-sap"
  ];

  var SEED_DONE = [
    "task-read-procedures", "task-it-incidents", "task-outage-email",
    "access-ca", "access-dashboards"
  ];

  function seedIfNeeded() {
    if (localStorage.getItem(SEED_KEY)) return;
    SEED_DONE.forEach(function (id) {
      localStorage.setItem(STORE_PREFIX + id, "1");
    });
    localStorage.setItem(SEED_KEY, "1");
  }

  function isChecked(id) {
    return localStorage.getItem(STORE_PREFIX + id) === "1";
  }

  function setChecked(id, val) {
    if (val) localStorage.setItem(STORE_PREFIX + id, "1");
    else localStorage.removeItem(STORE_PREFIX + id);
  }

  function countDone() {
    var n = 0;
    TRACKED_ITEMS.forEach(function (id) { if (isChecked(id)) n++; });
    return n;
  }

  /* ---------- theme ---------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var buttons = document.querySelectorAll("[data-theme-btn]");
    buttons.forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-theme-btn") === theme);
    });
  }

  function initTheme() {
    var saved = localStorage.getItem(THEME_KEY) || "light";
    applyTheme(saved);
    document.querySelectorAll("[data-theme-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var t = btn.getAttribute("data-theme-btn");
        localStorage.setItem(THEME_KEY, t);
        applyTheme(t);
      });
    });
  }

  /* ---------- progress ring(s) ---------- */
  function paintRings() {
    var total = TRACKED_ITEMS.length;
    var done = countDone();
    var pct = Math.round((done / total) * 100);

    document.querySelectorAll(".js-ring-fill").forEach(function (circle) {
      var r = circle.r.baseVal.value;
      var c = 2 * Math.PI * r;
      circle.style.strokeDasharray = c;
      circle.style.strokeDashoffset = c;
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          circle.style.strokeDashoffset = c - (pct / 100) * c;
        });
      });
    });
    document.querySelectorAll(".js-ring-value").forEach(function (el) {
      el.textContent = pct + "%";
    });
    document.querySelectorAll(".js-done-count").forEach(function (el) { el.textContent = done; });
    document.querySelectorAll(".js-pending-count").forEach(function (el) { el.textContent = total - done; });
    document.querySelectorAll(".js-total-count").forEach(function (el) { el.textContent = total; });
  }

  /* ---------- checklist rows ---------- */
  function initChecklists() {
    var boxes = document.querySelectorAll(".check-row input[type='checkbox']");
    boxes.forEach(function (box) {
      var id = box.getAttribute("data-track-id");
      if (!id) return;
      box.checked = isChecked(id);
      box.addEventListener("change", function () {
        setChecked(id, box.checked);
        paintRings();
      });
    });
  }

  /* ---------- search filter ---------- */
  function initSearch() {
    var input = document.getElementById("searchInput");
    if (!input) return;
    var rows = document.querySelectorAll("[data-search-row]");
    input.addEventListener("input", function () {
      var q = input.value.trim().toLowerCase();
      rows.forEach(function (row) {
        var text = row.getAttribute("data-search-row").toLowerCase();
        row.classList.toggle("hidden", q.length > 0 && text.indexOf(q) === -1);
      });
    });
  }

  /* ---------- FAQ accordion ---------- */
  function initFaq() {
    document.querySelectorAll(".faq-q").forEach(function (btn) {
      btn.addEventListener("click", function () {
        btn.parentElement.classList.toggle("open");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    seedIfNeeded();
    initTheme();
    initChecklists();
    paintRings();
    initSearch();
    initFaq();
  });
})();
