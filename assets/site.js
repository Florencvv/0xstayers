/* Stayers. One page, no dependencies.
   Every number shown is computed from the visible controls. Anything the
   whitepaper does not publish is printed as "not published", never guessed. */
(function () {
  "use strict";

  var $ = function (s) { return document.querySelector(s); };
  var $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };

  var FEE_DEFAULT = { low: 4, medium: 8, high: 14, crowded: 22 };

  var s = {
    tab: "2026",
    b: 3, all: 1000, flow: "out", exits: "crowded", bal: 10000, fee: 22, a26: "cash1",
    eth: 10, days: 90, apy: 4, bonds: 12, a23: "cashout"
  };

  function n(v, d) {
    return v.toLocaleString("en-US", { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 });
  }
  function eth(v) {
    var d = v >= 10 ? 2 : v >= 1 ? 3 : 4;
    return v.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
  }
  function pct(v) {
    return v.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 }) + "%";
  }
  function pc(v) {
    return (Math.round(v * 10) / 10) + "%";
  }
  function cell(k, v, cls) {
    return '<div class="num"><div class="nk">' + k + '</div><div class="nv ' + (cls || "") + '">' + v + "</div></div>";
  }
  function lines(arr) {
    return arr.filter(Boolean).map(function (t) { return "<p>" + t + "</p>"; }).join("");
  }
  // honest proportions: a sliver stays a sliver, and a caption that cannot fit is dropped
  function bars(segs) {
    var total = segs.reduce(function (a, s) { return a + s.v; }, 0);
    if (total <= 0) { return ""; }
    return segs.map(function (s) {
      var p = Math.max(1.5, (s.v / total) * 100);
      var txt = p >= 17 ? s.label : p >= 6 ? (s.short || "") : "";
      return '<div class="' + s.cls + '" style="width:' + p.toFixed(2) + '%" title="' +
             s.label + '">' + txt + "</div>";
    }).join("");
  }

  /* ---------- 2026 ---------- */
  function render26() {
    var share = (s.b / s.all) * 100;
    var f = s.fee / 100;
    var title, nums, bar = "", ls;

    // describe the fee actually on the slider, never the button that seeded it
    var exitLine = s.fee >= 26 ? "This is close to a full run, so the fee is steep."
      : s.fee >= 14 ? "A lot of people left this week, so the fee climbs."
      : s.fee >= 7 ? "Some people left this week."
      : "Not many people left this week, so the fee stays small.";
    var flowLine = s.flow === "in"
      ? "ETH is coming in. Issuance can rise. The exact rate is not published."
      : s.flow === "out"
        ? "ETH is leaving. Issuance drops and the system buys tokens back. The exact rate is not published."
        : "Flat flow does not count as growth. Issuance does not rise.";

    if (s.a26 === "stay") {
      title = "Stay";
      nums = cell("Fee paid", "0", "") +
             cell("Your share", pct(share), "stay") +
             cell("Your branches", n(s.b)) +
             cell("Balance left alone", n(s.b * s.bal) + " <small>$STANDARD</small>");
      ls = lines([
        "No fee.",
        "You keep your share: your branches / all branches = " + n(s.b) + " / " + n(s.all) + " = " + pct(share) + ".",
        flowLine,
        "Other people cashing out pay a fee. Half of it goes to people who stayed."
      ]);
    } else if (s.a26 === "add") {
      title = "Add a branch";
      if (s.b >= 10) {
        nums = cell("Branches after", "10") +
               cell("Your share", pct(share)) +
               cell("You spend", "0") +
               cell("Burned", "0");
        ls = lines([
          "Ten branches is the cap, so there is nothing to buy here.",
          "Nothing is spent and nothing is burned.",
          "From here the only way your share grows is if other branches close."
        ]);
      } else {
        var ns = ((s.b + 1) / (s.all + 1)) * 100;
        nums = cell("Branches after", n(s.b + 1)) +
               cell("Share before", pct(share)) +
               cell("Share after", pct(ns), "stay") +
               cell("License price", "not published", "np");
        ls = lines([
          "You spend $STANDARD. That $STANDARD is burned.",
          "You get one more branch. Ten is the cap.",
          "The price comes from a daily auction. The exact start price is not published.",
          "Share after assumes the model grows by one branch too."
        ]);
      }
    } else {
      var units = s.a26 === "cashall" ? s.b : 1;
      var base = s.bal * units;
      var fee = base * f;
      var got = base - fee;
      var half = fee / 2;
      var last = s.a26 === "cashall" || s.b === 1;

      title = s.a26 === "cashall" ? "Cash out everything" : "Cash out 1 branch";
      nums = cell("You receive", n(got) + " <small>$STANDARD</small>") +
             cell("Fee paid", n(fee)) +
             cell("Burned, 50% of fee", n(half), "exit") +
             cell("To people who stayed", n(half), "stay");
      // percentages are taken from the real amounts, so the three captions add to 100
      var tp = pc((got / base) * 100), hp = pc((half / base) * 100);
      bar = bars([
        { v: got, cls: "b1", label: "YOU TAKE " + tp, short: tp },
        { v: half, cls: "bburn", label: "BURNED " + hp, short: hp },
        { v: half, cls: "bstay", label: "TO STAYERS " + hp, short: hp }
      ]);
      ls = lines([
        "Your share = your branches / all branches = " + n(s.b) + " / " + n(s.all) + " = " + pct(share) + ".",
        exitLine + " The exact curve is not published. Their site says it starts near zero on a quiet day and climbs steeply in a full run.",
        "Half the fee is burned. Half goes to people who did not cash out. The paper calls it a resolution fee.",
        "What the fee actually counts is how much left in the last 7 days, not how many wallets left.",
        last
          ? (s.a26 === "cashall"
              ? "All branches close. The charter burns. You cannot keep the license after a full cash out."
              : "This is the last branch. The charter burns.")
          : "This was not your last branch. The charter stays, with " + n(s.b - 1) + " branch" + (s.b - 1 === 1 ? "" : "es") + " left.",
        "Withdrawals are never paused or queued."
      ]);
    }

    $("#t26").textContent = title;
    $("#chip26").textContent = "EXITS: " + s.exits.toUpperCase();
    $("#n26").innerHTML = nums;
    $("#bar26").innerHTML = bar;
    $("#bar26").style.display = bar ? "flex" : "none";
    $("#l26").innerHTML = ls;
  }

  /* ---------- 2023 ---------- */
  function render23() {
    var y = s.eth * (s.apy / 100) * (s.days / 365);
    var title, nums, bar = "", ls;

    if (s.a23 === "stay") {
      title = "Stay";
      nums = cell("ETH still in", eth(s.eth) + " <small>ETH</small>") +
             cell("Yield still in", eth(y) + " <small>ETH</small>", "stay") +
             cell("Fee", "none") +
             cell("Burned", "0");
      ls = lines([
        "Your ETH is still in. Your yield is still in.",
        "You get paid if ETH hits its all time high.",
        "Other people leaving early add their yield to the bonds still open, including yours.",
        "Nothing is burned in 2023. Your deposit is never touched."
      ]);
    } else {
      title = "Cash out";
      nums = cell("You get back", eth(s.eth) + " <small>ETH</small>") +
             cell("Yield you lose", eth(y) + " <small>ETH</small>", "exit") +
             cell("Goes to bonds still open", eth(y) + " <small>ETH</small>", "stay") +
             cell("Burned", "0");
      bar = bars([
        { v: s.eth, cls: "b1", label: "PRINCIPAL RETURNED IN FULL" },
        { v: y, cls: "bstay", label: "YIELD LEAVES" }
      ]);
      ls = lines([
        "You get your full ETH principal back. The deposit is never at risk.",
        "You lose the yield earned so far: " + eth(y) + " ETH.",
        "It goes back into the vault and accrues to the " + n(s.bonds) + " bond" + (s.bonds === 1 ? "" : "s") + " still open, in proportion to how big each one is.",
        "If those were all the same size as yours, that is about " + eth(y / s.bonds) + " ETH each.",
        "An early exit also mints a soulbound token that marks the exit."
      ]);
    }

    $("#t23").textContent = title;
    $("#n23").innerHTML = nums;
    $("#bar23").innerHTML = bar;
    $("#bar23").style.display = bar ? "flex" : "none";
    $("#l23").innerHTML = ls;
  }

  /* ---------- wiring ---------- */
  function labels() {
    $("#bv").textContent = n(s.b);
    $("#allv").textContent = n(s.all);
    $("#balv").textContent = n(s.bal) + " $STANDARD";
    $("#feev").textContent = s.fee + "%";
    $("#ethv").textContent = n(s.eth);
    $("#daysv").textContent = n(s.days);
    $("#apyv").textContent = s.apy.toFixed(1) + "%";
    $("#bondsv").textContent = n(s.bonds);
  }

  function syncInputs() {
    $("#b").value = s.b; $("#all").value = s.all; $("#bal").value = s.bal; $("#fee").value = s.fee;
    $("#eth").value = s.eth; $("#days").value = s.days; $("#apy").value = s.apy; $("#bonds").value = s.bonds;
    $$("#flow button").forEach(function (el) { el.classList.toggle("on", el.dataset.v === s.flow); });
    $$("#exits button").forEach(function (el) { el.classList.toggle("on", el.dataset.v === s.exits); });
    $$("#acts26 button").forEach(function (el) { el.classList.toggle("on", el.dataset.a === s.a26); });
    $$("#acts23 button").forEach(function (el) { el.classList.toggle("on", el.dataset.a === s.a23); });
    $$(".tab").forEach(function (el) {
      var on = el.dataset.tab === s.tab;
      el.classList.toggle("on", on);
      el.setAttribute("aria-selected", on ? "true" : "false");
    });
    $("#panel26").hidden = s.tab !== "2026";
    $("#panel23").hidden = s.tab !== "2023";
  }

  function render() { labels(); syncInputs(); render26(); render23(); }

  function bindRange(id, key, parse) {
    $(id).addEventListener("input", function (e) {
      s[key] = (parse || parseInt)(e.target.value, 10);
      render();
    });
  }

  bindRange("#b", "b"); bindRange("#all", "all"); bindRange("#bal", "bal"); bindRange("#fee", "fee");
  bindRange("#eth", "eth"); bindRange("#days", "days"); bindRange("#bonds", "bonds");
  $("#apy").addEventListener("input", function (e) { s.apy = parseFloat(e.target.value); render(); });

  $("#flow").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) { return; }
    s.flow = b.dataset.v; render();
  });
  $("#exits").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) { return; }
    s.exits = b.dataset.v;
    // the level sets a starting fee, the reader can still move the slider
    s.fee = FEE_DEFAULT[s.exits];
    render();
  });
  $("#acts26").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) { return; }
    s.a26 = b.dataset.a; render();
  });
  $("#acts23").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) { return; }
    s.a23 = b.dataset.a; render();
  });
  $$(".tab").forEach(function (el) {
    el.addEventListener("click", function () { s.tab = el.dataset.tab; render(); });
  });

  var PRESETS = {
    e23: { tab: "2023", eth: 10, days: 30, apy: 4, bonds: 12, a23: "cashout" },
    h23: { tab: "2023", eth: 10, days: 365, apy: 4, bonds: 12, a23: "stay" },
    a26: { tab: "2026", b: 3, all: 1000, flow: "in", exits: "low", bal: 10000, fee: 4, a26: "add" },
    c26: { tab: "2026", b: 3, all: 1000, flow: "out", exits: "crowded", bal: 10000, fee: 22, a26: "cashall" }
  };
  $$(".pset").forEach(function (el) {
    el.addEventListener("click", function () {
      var p = PRESETS[el.dataset.preset];
      Object.keys(p).forEach(function (k) { s[k] = p[k]; });
      render();
      $$(".pset").forEach(function (o) { o.classList.toggle("on", o === el); });
    });
  });

  render();
})();
