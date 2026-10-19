/* Select translated content before the shared renderer runs. */
(function () {
  "use strict";
  var storageKey = "nbke:language";
  var requested = new URLSearchParams(window.location.search).get("lang");
  var saved;
  try { saved = localStorage.getItem(storageKey); } catch (_) {}
  var language = /^(en|ar)$/.test(requested || "") ? requested : (saved === "ar" ? "ar" : "en");
  window.SITE_CONTENT_EN = window.SITE_CONTENT;
  if (language === "ar" && window.SITE_CONTENT_AR) window.SITE_CONTENT = window.SITE_CONTENT_AR;
  window.SITE_LANGUAGE = language;
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  try { localStorage.setItem(storageKey, language); } catch (_) {}

  document.querySelectorAll("[data-language]").forEach(function (button) {
    var active = button.dataset.language === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
    button.addEventListener("click", function () {
      var next = button.dataset.language;
      if (next === language) return;
      try { localStorage.setItem(storageKey, next); } catch (_) {}
      var url = new URL(window.location.href);
      url.searchParams.set("lang", next);
      window.location.assign(url.href);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    // The URL also carries the language when device storage is unavailable.
    document.querySelectorAll('a[href]').forEach(function (anchor) {
      var href = anchor.getAttribute("href");
      if (!/^(index|access|systems|atm|infrastructure|medical-care|faq)\.html(?:[?#]|$)/.test(href || "")) return;
      var url = new URL(href, window.location.href);
      url.searchParams.set("lang", language);
      anchor.setAttribute("href", url.href);
    });
  });
})();
