(function () {
  "use strict";
  var content = window.SITE_CONTENT;
  if (!content) {
    console.error("Place content.js in the same folder as these HTML files.");
    return;
  }

  document.querySelectorAll("[data-navigation]").forEach(function (nav) {
    var items = content.navigation[nav.dataset.navigation] || [];
    var current = document.body.dataset.page;
    nav.replaceChildren();
    items.forEach(function (item) {
      var anchor = document.createElement("a");
      anchor.setAttribute("href", item.href);
      if (item.href === current) { anchor.classList.add("active"); anchor.setAttribute("aria-current", "page"); }
      if (nav.dataset.navigation === "sidebar") {
        var dot = document.createElement("span"); dot.className = "nav-dot"; anchor.appendChild(dot);
      }
      anchor.appendChild(document.createTextNode(item.label)); nav.appendChild(anchor);
    });
  });

  function read(path) {
    return path.split(".").reduce(function (value, key) {
      return value == null ? undefined : value[key];
    }, content);
  }
  document.querySelectorAll("[data-content-text]").forEach(function (element) {
    var value = read(element.getAttribute("data-content-text"));
    if (typeof value !== "string") return;
    var nodes = Array.from(element.childNodes).filter(function (node) {
      return node.nodeType === 3 && node.textContent.trim();
    });
    if (nodes.length) {
      nodes[0].textContent = value;
      nodes.slice(1).forEach(function (node) { node.textContent = ""; });
    } else element.insertBefore(document.createTextNode(value), element.firstChild);
  });
  document.querySelectorAll("[data-content-attrs]").forEach(function (element) {
    var bindings = JSON.parse(element.getAttribute("data-content-attrs"));
    Object.keys(bindings).forEach(function (attribute) {
      var value = read(bindings[attribute]);
      if (typeof value === "string") element.setAttribute(attribute, value);
    });
  });
  document.querySelectorAll(".faq-item").forEach(function (item, index) {
    var faq = content.systemsPage.faqs[index];
    if (faq) item.classList.toggle("open", faq.initiallyOpen);
  });
})();
/* NBK-E Onboarding Console — shared behavior */

(function () {
  "use strict";

  if (!window.SITE_CONTENT) return;
  var memory = {};
  var storage = {
    getItem: function (key) { try { return localStorage.getItem(key); } catch (_) { return memory[key] || null; } },
    setItem: function (key, value) { try { localStorage.setItem(key, value); } catch (_) { memory[key] = value; } },
    removeItem: function (key) { try { localStorage.removeItem(key); } catch (_) { delete memory[key]; } }
  };
  var settings = window.SITE_CONTENT.progress;
  var STORE_PREFIX = settings.storagePrefix;
  var THEME_KEY = settings.themeStorageKey;
  var SEED_KEY = settings.seedStorageKey;

  /* One flat, de-duplicated list of everything a new hire needs to complete.
     This is the single source of truth for progress — every ring, dashboard
     stat and checkbox on the site reads from it. Add or remove an item here
     and give its checklist row the matching data-track-id. */
  var TRACKED_ITEMS = settings.trackedItemIds;

  var SEED_DONE = settings.initialCompletedItemIds;

  function seedIfNeeded() {
    if (storage.getItem(SEED_KEY)) return;
    SEED_DONE.forEach(function (id) {
      storage.setItem(STORE_PREFIX + id, "1");
    });
    storage.setItem(SEED_KEY, "1");
  }

  function isChecked(id) {
    return storage.getItem(STORE_PREFIX + id) === "1";
  }

  function setChecked(id, val) {
    if (val) storage.setItem(STORE_PREFIX + id, "1");
    else storage.removeItem(STORE_PREFIX + id);
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
    var saved = storage.getItem(THEME_KEY) || settings.defaultTheme;
    applyTheme(saved);
    document.querySelectorAll("[data-theme-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var t = btn.getAttribute("data-theme-btn");
        storage.setItem(THEME_KEY, t);
        applyTheme(t);
      });
    });
  }

  /* ---------- progress ring(s) ---------- */
  function paintRings() {
    var total = TRACKED_ITEMS.length;
    var done = countDone();
    var pct = (total ? Math.round((done / total) * 100) : 0);

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
        var text = (row.getAttribute("data-search-row") + " " + row.textContent).toLowerCase();
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

  /* ---------- content-driven pages (ATM, Infrastructure) ----------
     These render from the collections in js/content.js. Pages that don't
     include that file, or don't have the target containers, are skipped —
     so the original three pages are unaffected. */

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function el(id) { return document.getElementById(id); }

  /* A "not supplied yet" / informational callout. */
  function noteHtml(note) {
    if (!note || !note.text) return "";
    return '<div class="note' + (note.pending ? " note-pending" : "") + '">' +
      '<span class="note-tag">' + (note.pending ? window.SITE_CONTENT.ui.pendingNote : window.SITE_CONTENT.ui.note) + "</span>" +
      "<p>" + esc(note.text) + "</p></div>";
  }

  function externalArrow() {
    return '<svg viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M9 7h8v8" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }

  function renderAtmOverview(o) {
    var host = el("atmOverview");
    if (!host || !o) return;
    var html = '<div class="panel"><p class="panel-lede">' + esc(o.body) + "</p>";

    if (o.types && o.types.length) {
      html += '<div class="type-row">';
      o.types.forEach(function (t) {
        html += '<div class="type-card"><div class="type-name">' + esc(t.name) + "</div>" +
          '<p class="type-note">' + esc(t.note) + "</p></div>";
      });
      html += "</div>";
    }

    if (o.responsibilities && o.responsibilities.length) {
      html += '<div class="sub-label">' + esc(o.responsibilitiesLabel) + "</div>" +
        '<ul class="resp-list resp-list-tight">';
      o.responsibilities.forEach(function (r) { html += "<li>" + esc(r) + "</li>"; });
      html += "</ul>";
    }

    html += "</div>" + noteHtml(o.note);
    host.innerHTML = html;
  }

  function issueRowsHtml(items) {
    var html = "";
    items.forEach(function (it) {
      var stopping = it.impact === "stopping";
      html += '<tr data-search-row="' + esc((it.name + " " + it.what + " " + (it.search || "")).toLowerCase()) + '">' +
        '<th scope="row">' + esc(it.name) + "</th>" +
        "<td>" + esc(it.what) + "</td>" +
        '<td><span class="pill ' + (stopping ? "pending" : "auth") + '">' +
        esc(window.SITE_CONTENT.ui[it.impact] || window.SITE_CONTENT.ui.verify) + "</span>" +
        '<span class="impact-text">' + esc(it.impactText) + "</span></td></tr>";
    });
    return html;
  }

  function renderAtmIssues(s) {
    var host = el("atmIssues");
    if (!host || !s || !s.items) return;
    var html = '<div class="table-wrap"><table class="ref-table"><thead><tr>' +
      window.SITE_CONTENT.ui.issueColumns.map(function (label) { return "<th>" + esc(label) + "</th>"; }).join("") +
      "</tr></thead><tbody>" + issueRowsHtml(s.items) + "</tbody></table></div>";

    if (s.legend) {
      html += '<div class="legend">' +
        '<div class="legend-item"><span class="pill pending">' + esc(window.SITE_CONTENT.ui.stopping) + '</span><span>' +
        esc(s.legend.stopping) + "</span></div>" +
        '<div class="legend-item"><span class="pill auth">' + esc(window.SITE_CONTENT.ui.verify) + '</span><span>' +
        esc(s.legend.verify) + "</span></div>" +
        '<div class="legend-item"><span class="pill auth">' + esc(window.SITE_CONTENT.ui.partial) + '</span><span>' +
        esc(s.legend.partial) + "</span></div></div>";
    }

    host.innerHTML = html + noteHtml(s.note);
  }

  function renderAtmConditions(s) {
    var host = el("atmConditions");
    if (!host || !s || !s.items) return;
    var html = '<div class="sys-grid">';
    s.items.forEach(function (c) {
      html += '<div class="sys-card" data-search-row="' +
        esc((c.name + " " + c.what + " " + (c.search || "")).toLowerCase()) + '">' +
        "<h4>" + esc(c.name) + "</h4>" +
        '<div class="team">' + esc(c.what) + "</div></div>";
    });
    host.innerHTML = html + "</div>" + noteHtml(s.note);
  }

  function renderAtmVendors(s) {
    var host = el("atmVendors");
    if (!host || !s || !s.groups) return;
    var html = "";
    s.groups.forEach(function (g) {
      html += '<div class="vendor-group">' +
        '<div class="vendor-head"><span class="vendor-code">' + esc(g.code) + "</span>" +
        '<span class="vendor-name">' + esc(g.name) + "</span></div>" +
        '<div class="vendor-list">';
      g.members.forEach(function (m) {
        html += '<div class="vendor-chip" data-search-row="' +
          esc((m + " " + g.code + " " + g.name).toLowerCase()) + '">' + esc(m) + "</div>";
      });
      html += "</div></div>";
    });
    host.innerHTML = html + noteHtml(s.note);
  }

  function renderAtmComms(s) {
    var host = el("atmComms");
    if (!host || !s || !s.contacts) return;
    var html = '<div class="sys-grid">';
    s.contacts.forEach(function (c) {
      html += '<div class="sys-card contact-card" data-search-row="' +
        esc((c.name + " " + c.kind + " " + c.when).toLowerCase()) + '">' +
        '<div class="contact-top"><h4>' + esc(c.name) + "</h4>" +
        '<span class="pill auth">' + esc(c.kind) + "</span></div>" +
        '<p class="contact-when">' + esc(c.when) + "</p>" +
        (c.highlight ? '<div class="contact-flag">' + esc(c.highlight) + "</div>" : "") +
        "</div>";
    });
    host.innerHTML = html + "</div>" + noteHtml(s.note);
  }

  function renderAtmApps(s) {
    var host = el("atmApps");
    if (!host || !s || !s.items) return;
    var html = "";
    s.items.forEach(function (item) {
      var a = Object.assign({}, item);
      var system = window.SITE_CONTENT.systems[a.systemKey];
      if (system) {
        a.url = system.link.href;
        a.linkLabel = system.link.label;
      }
      html += '<div class="app-card" data-search-row="' +
        esc((a.name + " " + a.tagline + " " + (a.search || "")).toLowerCase()) + '">' +
        '<div class="app-head"><div><h4>' + esc(a.name) + "</h4>" +
        '<div class="app-tagline">' + esc(a.tagline) + "</div></div>" +
        (a.team ? '<span class="pill auth">' + esc(a.team) + "</span>" : "") + "</div>" +
        "<p>" + esc(a.purpose) + "</p>";

      if (a.uses && a.uses.length) {
        html += '<div class="sub-label">' + esc(window.SITE_CONTENT.ui.uses) + '</div><ul class="app-uses">';
        a.uses.forEach(function (u) { html += "<li>" + esc(u) + "</li>"; });
        html += "</ul>";
      }

      if (a.capabilities && a.capabilities.items) {
        html += '<div class="cap-block"><div class="sub-label">' + esc(a.capabilities.label) + "</div>" +
          '<div class="cap-row">';
        a.capabilities.items.forEach(function (c) {
          html += '<span class="cap-chip">' + esc(c) + "</span>";
        });
        html += "</div>" + (a.capabilities.note ?
          '<p class="cap-note">' + esc(a.capabilities.note) + "</p>" : "") + "</div>";
      }

      if (a.whenToUse) {
        html += '<div class="when-row"><span class="when-tag">' + esc(window.SITE_CONTENT.ui.when) + '</span>' +
          "<span>" + esc(a.whenToUse) + "</span></div>";
      }

      /* Launch link only when a URL is on record. */
      if (a.url && /^https?:\/\//i.test(a.url)) {
        html += '<a class="sys-link" href="' + esc(a.url) + '" target="_blank" rel="noopener noreferrer">' +
          esc(a.linkLabel || (window.SITE_CONTENT.ui.open + " " + a.name)) + externalArrow() + "</a>";
      } else if (a.urlNote) {
        html += '<div class="no-link">' + esc(a.urlNote) + "</div>";
      }

      html += "</div>";
    });
    host.innerHTML = html;
  }

  function renderInfrastructure(c) {
    var host = el("infraPlaceholder");
    if (!host || !c || !c.teams) return;

    var teams = c.teams;
    var ui = c.ui || {};
    var selectedId = teams[0] ? teams[0].id : "";

    host.innerHTML =
      '<div class="infra-controls">' +
        '<div class="infra-search">' +
          '<label for="infraSearch">' + esc(ui.searchLabel || "Search teams & responsibilities") + '</label>' +
          '<div class="search-box">' +
            '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.8"/><path d="m16.5 16.5 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>' +
            '<input id="infraSearch" type="search" autocomplete="off" placeholder="' + esc(c.searchPlaceholder || "Search teams — e.g. RPA, firewall, ATM, T24, IPN…") + '" aria-label="' + esc(ui.searchLabel || "Search teams & responsibilities") + '">' +
          '</div>' +
        '</div>' +
        '<div class="infra-select">' +
          '<label for="teamSelect">' + esc(ui.selectLabel || "Select a team") + '</label>' +
          '<select id="teamSelect" aria-label="' + esc(ui.selectLabel || "Select a team") + '">' +
            teams.map(function (t) { return '<option value="' + esc(t.id) + '">' + esc(t.name) + '</option>'; }).join("") +
          '</select>' +
        '</div>' +
      '</div>' +
      '<p class="infra-hint" id="infraHint">' + esc(c.hint || "Select a team to see its responsibilities.") + '</p>' +
      '<div class="infra-results" id="infraResults"></div>';

    var searchInput = el("infraSearch");
    var select = el("teamSelect");
    var results = el("infraResults");

    function teamMatches(team, q) {
      if (!q) return true;
      var haystack = [
        team.name, team.description, team.keywords,
        (team.responsibilities || []).join(" ")
      ].join(" ").toLowerCase();
      return haystack.indexOf(q) !== -1;
    }

    function cardHtml(team, isSelected) {
      return '<article class="infra-team-card' + (isSelected ? ' selected' : '') + '" id="team-' + esc(team.id) + '" data-team-id="' + esc(team.id) + '">' +
        '<div class="infra-team-head">' +
          '<div><div class="infra-team-index">' + esc(String(teams.indexOf(team) + 1).padStart(2, "0")) + '</div><h3>' + esc(team.name) + '</h3></div>' +
          '<button type="button" class="team-view-btn" data-view-team="' + esc(team.id) + '">' + esc(ui.viewLabel || "View details") + '</button>' +
        '</div>' +
        '<p class="infra-team-description">' + esc(team.description) + '</p>' +
        '<div class="sub-label">' + esc(ui.responsibilitiesLabel || "Responsibilities") + '</div>' +
        '<ul class="resp-list infra-resp-list">' +
          (team.responsibilities || []).map(function (r) { return '<li>' + esc(r) + '</li>'; }).join("") +
        '</ul>' +
      '</article>';
    }

    function renderResults(query, forceSelected) {
      var q = (query || "").trim().toLowerCase();
      var matches = teams.filter(function (t) { return teamMatches(t, q); });

      if (forceSelected && !q) {
        var chosen = teams.find(function (t) { return t.id === selectedId; });
        matches = chosen ? [chosen] : matches;
      }

      if (!matches.length) {
        results.innerHTML = '<div class="panel infra-empty"><strong>' + esc(ui.noResults || "No matching teams.") + '</strong><p>' + esc(ui.noResultsHint || "Try a team name, system, or keyword such as RPA, IPN, firewall, or ATM.") + '</p></div>';
        return;
      }

      results.innerHTML = matches.map(function (team) {
        return cardHtml(team, team.id === selectedId);
      }).join("");

      results.querySelectorAll("[data-view-team]").forEach(function (button) {
        button.addEventListener("click", function () {
          selectedId = button.getAttribute("data-view-team");
          select.value = selectedId;
          renderResults("", true);
          var card = el("team-" + selectedId);
          if (card) card.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });

      if (q && matches.length) {
        selectedId = matches[0].id;
        select.value = selectedId;
        var first = el("team-" + selectedId);
        if (first) {
          first.classList.add("search-hit");
          first.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }

    select.addEventListener("change", function () {
      selectedId = select.value;
      searchInput.value = "";
      renderResults("", true);
      var card = el("team-" + selectedId);
      if (card) card.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    searchInput.addEventListener("input", function () {
      renderResults(searchInput.value, false);
    });

    renderResults("", true);
  }

  function renderFaqDirectory(c) {
    var host = el("faqDirectory");
    var input = el("faqSearch");
    if (!host || !input || !c || !c.items) return;

    function cardHtml(item) {
      return '<article class="faq-directory-card">' +
        '<h2>' + esc(item.question) + '</h2>' +
        '<div class="faq-answer-label">' + esc(c.answerLabel || "Answer") + '</div>' +
        '<p>' + esc(item.answer) + '</p>' +
      '</article>';
    }

    function render(query) {
      var q = (query || "").trim().toLowerCase();
      var matches = c.items.filter(function (item) {
        var text = [item.question, item.answer, item.keywords].join(" ").toLowerCase();
        return !q || text.indexOf(q) !== -1;
      });

      if (!matches.length) {
        host.innerHTML = '<div class="faq-empty"><strong>' + esc(c.emptyHeading || "No matching questions") +
          '</strong><p>' + esc(c.emptyDescription || "Try another word.") + '</p></div>';
        return;
      }

      host.innerHTML = matches.map(cardHtml).join("");
    }

    input.addEventListener("input", function () { render(input.value); });
    render("");
  }

  function renderContentPages() {
    var C = window.SITE_CONTENT;
    if (!C) return;
    if (C.atm) {
      renderAtmOverview(C.atm.overview);
      renderAtmIssues(C.atm.issues);
      renderAtmConditions(C.atm.conditions);
      renderAtmVendors(C.atm.vendors);
      renderAtmComms(C.atm.comms);
      renderAtmApps(C.atm.apps);
    }
    if (C.infrastructure) renderInfrastructure(C.infrastructure);
    if (C.faqPage) renderFaqDirectory(C.faqPage);
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderContentPages();
    seedIfNeeded();
    initTheme();
    initChecklists();
    paintRings();
    initSearch();
    initFaq();
  });
})();
