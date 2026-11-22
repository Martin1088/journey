// Journey pages: tip filter, expand/collapse all, copy buttons.
// Progressive enhancement: without this script every tip card is still a
// working native <details> element.
(function () {
  "use strict";

  var de = document.documentElement.lang === "de";
  var t = de
    ? {
        copy: "Kopieren",
        copyLabel: "Befehl kopieren",
        copied: "Kopiert",
        copiedMsg: "Befehl in die Zwischenablage kopiert.",
        copyFail: "Kopieren nicht möglich. Bitte den Text manuell markieren.",
        open: "Alle aufklappen",
        close: "Alle zuklappen",
        shown: function (n, total) { return n + " von " + total + " Tipps angezeigt."; },
        tips: function (n) { return n === 1 ? "1 Tipp" : n + " Tipps"; }
      }
    : {
        copy: "Copy",
        copyLabel: "Copy command",
        copied: "Copied",
        copiedMsg: "Command copied to the clipboard.",
        copyFail: "Copying failed. Please select the text manually.",
        open: "Expand all",
        close: "Collapse all",
        shown: function (n, total) { return n + " of " + total + " tips shown."; },
        tips: function (n) { return n === 1 ? "1 tip" : n + " tips"; }
      };

  var live = document.getElementById("tip-live");
  function announce(msg) {
    if (!live) return;
    live.textContent = "";
    // A short delay makes screen readers re-announce identical messages.
    setTimeout(function () { live.textContent = msg; }, 50);
  }

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) { return null; }
  }

  var items = Array.prototype.slice.call(document.querySelectorAll(".tips > li"));
  var details = items.map(function (li) { return li.querySelector("details"); });

  // ---------- Toolbar ----------
  var toolbar = document.querySelector(".tip-toolbar");
  if (toolbar) toolbar.hidden = false;

  var status = document.getElementById("tip-status");
  var toggle = document.getElementById("tip-toggle");

  function updateCounts() {
    var visible = items.filter(function (li) { return !li.hidden; }).length;
    if (status) status.textContent = t.shown(visible, items.length);

    // Per-station counts in the overview tiles.
    document.querySelectorAll(".station").forEach(function (station) {
      var n = station.querySelectorAll(".tips > li:not([hidden])").length;
      var tile = document.querySelector('.station-nav a[href="#' + station.id + '"] .count');
      if (tile) tile.textContent = n ? t.tips(n) : "";
    });
    return visible;
  }

  function applyFilter(platform, speak) {
    items.forEach(function (li) {
      var p = li.getAttribute("data-platform");
      li.hidden = !(platform === "all" || p === "both" || p === platform);
    });
    var visible = updateCounts();
    if (speak) announce(t.shown(visible, items.length));
  }

  var radios = document.querySelectorAll('input[name="platform"]');
  var saved = store("journey-platform");
  radios.forEach(function (r) {
    if (saved && r.value === saved) r.checked = true;
    r.addEventListener("change", function () {
      if (!r.checked) return;
      store("journey-platform", r.value);
      applyFilter(r.value, true);
    });
  });
  var checked = document.querySelector('input[name="platform"]:checked');
  applyFilter(checked ? checked.value : "all", false);

  function syncToggle() {
    if (!toggle) return;
    var visibleDetails = details.filter(function (d, i) { return !items[i].hidden; });
    var allOpen = visibleDetails.length > 0 && visibleDetails.every(function (d) { return d.open; });
    toggle.textContent = allOpen ? t.close : t.open;
    toggle.setAttribute("aria-expanded", allOpen ? "true" : "false");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") !== "true";
      details.forEach(function (d, i) { if (!items[i].hidden) d.open = open; });
      syncToggle();
    });
  }
  details.forEach(function (d) { d.addEventListener("toggle", syncToggle); });
  syncToggle();

  // ---------- Copy buttons ----------
  document.querySelectorAll(".cmd").forEach(function (box) {
    var code = box.querySelector("code");
    if (!code) return;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "copy-btn";
    btn.textContent = t.copy;
    btn.setAttribute("aria-label", t.copyLabel);
    btn.addEventListener("click", function () {
      var text = code.textContent;
      var done = function () {
        btn.textContent = t.copied;
        btn.classList.add("done");
        announce(t.copiedMsg);
        setTimeout(function () {
          btn.textContent = t.copy;
          btn.classList.remove("done");
        }, 2000);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { announce(t.copyFail); });
      } else {
        announce(t.copyFail);
      }
    });
    box.appendChild(btn);
  });

  // ---------- Deep links: open a tip when its id is in the URL ----------
  function openFromHash() {
    var id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    var el = document.getElementById(id);
    if (el && el.tagName === "DETAILS") {
      el.open = true;
      var li = el.closest("li");
      if (li && li.hidden) {
        var all = document.querySelector('input[name="platform"][value="all"]');
        if (all) { all.checked = true; applyFilter("all", false); }
      }
      el.querySelector("summary").focus();
    }
  }
  window.addEventListener("hashchange", openFromHash);
  openFromHash();
})();
