(function () {
  "use strict";

  var ICONS = {
    window: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
    car: '<path d="M5 16l1.5-5a2 2 0 0 1 1.9-1.4h7.2a2 2 0 0 1 1.9 1.4L19 16"/><rect x="3" y="16" width="18" height="4" rx="1.5"/><path d="M7 18h.01M17 18h.01"/>',
    chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
    finance: '<path d="M3 17l5-5 4 4 8-9"/><path d="M15 7h5v5"/>',
    music: '<path d="M9 18V6l11-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',
    gamepad: '<rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 10v5M4.5 12.5h5M16 11.5h.01M18.5 14h.01"/>',
    factory: '<path d="M3 21V9l6 4V9l6 4V5h3v16z"/><path d="M3 21h18"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    bell: '<path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 21h4"/>',
    camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
    school: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5"/>',
    terminal: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 10l3 2-3 2M12 15h5"/>'
  };

  function svg(name) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || ICONS.window) + '</svg>';
  }

  var P = "projects/";
  var PROJECTS = [
    { name: "Troweld", cats: ["Industrial"], icon: "factory", thumb: P + "troweld/images/hero-bg.jpg",
      desc: "Bold construction and welding company template with services, portfolio and contact pages.",
      href: P + "troweld/index.html", btn: "Open Website" },
    { name: "Browny", cats: ["Portfolio"], icon: "user", thumb: P + "browny/assets/images/about/welcome-banner.jpg",
      desc: "Personal portfolio template with an about section, education timeline and a clean one-page layout.",
      href: P + "browny/index.html", btn: "Open Website" },
    { name: "Carvilla", cats: ["Automotive"], icon: "car", thumb: P + "carvilla/assets/images/welcome-hero/welcome-banner.jpg",
      desc: "Car dealership template with model and year search, featured cars and a full-width hero banner.",
      href: P + "carvilla/index.html", btn: "Open Website" },
    { name: "Finter", cats: ["Finance"], icon: "finance", thumb: P + "finter/images/hero-bg.jpg",
      desc: "Finance consulting template with services, about and contact pages in a crisp, trustworthy layout.",
      href: P + "finter/index.html", btn: "Open Website" },
    { name: "Fonicy", cats: ["Business"], icon: "briefcase", thumb: P + "fonicy/images/slider-bg.jpg",
      desc: "Multi-page business template with a hero slider, project showcase, about and contact pages.",
      href: P + "fonicy/index.html", btn: "Open Website" },
    { name: "GoodWEB", cats: ["Business"], icon: "briefcase", thumb: P + "goodweb/uploads/portfolio_05.jpg",
      desc: "Responsive landing-page template for web agencies with features, services and portfolio pages.",
      href: P + "goodweb/index.html", btn: "Open Website" },
    { name: "IT Next", cats: ["Technology"], icon: "chip", thumb: P + "it-next/images/it_service/slide1.jpg",
      desc: "IT services theme with service process blocks, a blog and ready-made light and dark layouts.",
      href: P + "it-next/index.html", btn: "Open Website" },
    { name: "Jackpiro", cats: ["Games"], icon: "gamepad", thumb: P + "jackpiro/images/banner2.jpg",
      desc: "Game studio template with a banner slider, games showcase and testimonials.",
      href: P + "jackpiro/index.html", btn: "Open Website" },
    { name: "John Doe", cats: ["Portfolio"], icon: "user", thumb: P + "john-doe/public_html/assets/imgs/header.jpg",
      desc: "Bootstrap 4 freelancer landing page with a filterable project gallery and a components page.",
      href: P + "john-doe/public_html/index.html", btn: "Open Website" },
    { name: "CipherX", cats: ["Games"], icon: "shield", thumb: null,
      desc: "Standalone esports tournament page for Cosmic Clash 2026, built as a single HTML file.",
      href: P + "cipherx/index.html", btn: "Open Project" },
    { name: "Mini Games", cats: ["Games"], icon: "gamepad", thumb: null,
      desc: "A browser mini-games collection. The button opens the first game, Snake, playable on desktop and mobile.",
      href: P + "mini-games/01-snake/index.html", btn: "Play First Game" },
    { name: "Dance Website", cats: ["Music", "Web App"], icon: "music", thumb: P + "dance-website/static/bg.jpg",
      desc: "Dance academy site built with Node.js, Express and Pug, with a contact form saved to MongoDB.",
      modal: "dance", btn: "Setup Instructions" },
    { name: "Notifies", cats: ["Web App"], icon: "bell", thumb: null,
      desc: "Chrome extension that sets timed reminders from the toolbar and shows them as desktop notifications.",
      modal: "notifies", btn: "Installation Instructions" },
    { name: "Pcoint", cats: ["Technology"], icon: "chip", thumb: P + "pcoint/images/mane_img.jpg",
      desc: "Computer and laptop store template with an about section and product highlights.",
      href: P + "pcoint/index.html", btn: "Open Website" },
    { name: "Picstudio", cats: ["Portfolio"], icon: "camera", thumb: P + "picstudio/images/gallery-1.jpg",
      desc: "Photography studio template with a gallery, blog and about pages.",
      href: P + "picstudio/index.html", btn: "Open Website" },
    { name: "Spering", cats: ["Business"], icon: "briefcase", thumb: P + "spering/images/about-img.jpg",
      desc: "Freelance services template with category pages, experience highlights and an about page.",
      href: P + "spering/index.html", btn: "Open Website" },
    { name: "Training Institute", cats: ["Business"], icon: "school", thumb: P + "training-institute/assets/images/abt/1.jpg",
      desc: "Education template for tutors and training centres with services, blog and contact pages.",
      href: P + "training-institute/index.html", btn: "Open Website" }
  ];

  var CATEGORIES = ["All", "Portfolio", "Business", "Automotive", "Technology", "Finance", "Music", "Games", "Industrial", "Web App"];

  var INSTRUCTIONS = {
    dance: {
      title: "Dance Website: setup instructions",
      intro: "This project is a Node.js app, so it can't run on a static host like Vercel. Run it on your own machine with these steps.",
      steps: [
        { t: "Install Node.js (version 14 or newer) and MongoDB Community Edition, then start MongoDB. The app connects to mongodb://localhost/contactDance." },
        { t: "Open a terminal in the project folder.", code: "cd projects/dance-website" },
        { t: "Install the dependencies (Express, Mongoose, Pug and body-parser).", code: "npm install" },
        { t: "Start the server.", code: "node app.js" },
        { t: "Open the site in your browser.", code: "http://localhost:8000" }
      ],
      note: "The contact form saves submissions to MongoDB, so MongoDB must be running before you submit it. Press Ctrl + C in the terminal to stop the server."
    },
    notifies: {
      title: "Notifies: installation instructions",
      intro: "Install the extension in Chrome through developer mode. It takes under a minute and needs no store account.",
      steps: [
        { t: "Open the extensions page in Chrome.", code: "chrome://extensions" },
        { t: "Turn on Developer mode with the toggle in the top-right corner." },
        { t: "Click Load unpacked." },
        { t: "Select the folder that contains manifest.json.", code: "projects/notifies" },
        { t: "Click the puzzle-piece icon in the toolbar and pin Notifies. Open it, type a reminder, choose the minutes and click Set reminder." }
      ],
      note: "Also works in Edge and Brave using edge://extensions or brave://extensions. If Chrome shows an error, check that you selected the folder that holds manifest.json, not its parent."
    }
  };

  var $ = function (id) { return document.getElementById(id); };
  var grid = $("grid"), input = $("q"), filtersEl = $("filters"), emptyEl = $("empty");
  var state = { q: "", cat: "All" };
  var io = null;

  function countFor(cat) {
    return PROJECTS.filter(function (p) { return cat === "All" || p.cats.indexOf(cat) > -1; }).length;
  }

  function buildFilters() {
    filtersEl.innerHTML = "";
    CATEGORIES.forEach(function (c) {
      var b = document.createElement("button");
      b.type = "button"; b.className = "chip"; b.textContent = c; b.dataset.cat = c;
      b.setAttribute("aria-pressed", c === state.cat ? "true" : "false");
      b.addEventListener("click", function () { setCat(c); });
      filtersEl.appendChild(b);
    });
  }

  function buildIndex() {
    var ul = $("catIndex");
    CATEGORIES.slice(1).forEach(function (c) {
      var li = document.createElement("li");
      var b = document.createElement("button");
      b.type = "button";
      b.innerHTML = "<span></span><b></b>";
      b.firstChild.textContent = c;
      b.lastChild.textContent = countFor(c);
      b.addEventListener("click", function () {
        setCat(c);
        $("collection").scrollIntoView({ behavior: "smooth" });
      });
      li.appendChild(b); ul.appendChild(li);
    });
  }

  function setCat(c) {
    state.cat = c;
    Array.prototype.forEach.call(filtersEl.children, function (b) {
      b.setAttribute("aria-pressed", b.dataset.cat === c ? "true" : "false");
    });
    render();
  }

  function matches(p) {
    if (state.cat !== "All" && p.cats.indexOf(state.cat) === -1) return false;
    var q = state.q.trim().toLowerCase();
    if (!q) return true;
    return (p.name + " " + p.desc + " " + p.cats.join(" ")).toLowerCase().indexOf(q) > -1;
  }

  function card(p, i) {
    var el = document.createElement("article");
    el.className = "card reveal";
    el.style.transitionDelay = Math.min(i, 6) * 40 + "ms";
    var thumb = p.thumb
      ? '<div class="thumb"><img src="' + p.thumb + '" alt="" loading="lazy" width="640" height="400"><span class="ico">' + svg(p.icon) + "</span></div>"
      : '<div class="thumb icon-only">' + svg(p.icon) + "</div>";
    var tags = p.cats.map(function (c, k) { return '<span class="tag' + (k ? " alt" : "") + '">' + c + "</span>"; }).join("");
    el.innerHTML = thumb + '<div class="body"><div class="meta">' + tags + "</div><h3></h3><p></p></div>";
    el.querySelector("h3").textContent = p.name;
    el.querySelector("p").textContent = p.desc;
    var action;
    if (p.modal) {
      action = document.createElement("button");
      action.type = "button";
      action.addEventListener("click", function () { openModal(p.modal); });
    } else {
      action = document.createElement("a");
      action.href = p.href; action.target = "_blank"; action.rel = "noopener";
    }
    action.className = "btn";
    action.textContent = p.btn + " ";
    action.insertAdjacentHTML("beforeend", p.modal
      ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
      : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>');
    action.setAttribute("aria-label", p.btn + ": " + p.name + (p.modal ? "" : " (opens in a new tab)"));
    el.querySelector(".body").appendChild(action);
    return el;
  }

  function render() {
    var list = PROJECTS.filter(matches);
    grid.innerHTML = "";
    list.forEach(function (p, i) { grid.appendChild(card(p, i)); });
    emptyEl.hidden = list.length > 0;
    grid.hidden = list.length === 0;
    $("emptyTerm").textContent = state.q.trim() ? "\u201C" + state.q.trim() + "\u201D" : "your filters";
    $("results").textContent = list.length + (list.length === 1 ? " project" : " projects") + " shown";
    observe();
  }

  function observe() {
    var cards = grid.querySelectorAll(".card.reveal");
    if (!("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(cards, function (c) { c.classList.add("in"); });
      return;
    }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    }
    Array.prototype.forEach.call(cards, function (c) { io.observe(c); });
  }

  /* modal */
  var modal = $("modal");
  function openModal(key) {
    var d = INSTRUCTIONS[key];
    $("modalTitle").textContent = d.title;
    $("modalIntro").textContent = d.intro;
    $("modalNote").textContent = d.note;
    var ol = $("modalSteps"); ol.innerHTML = "";
    d.steps.forEach(function (s) {
      var li = document.createElement("li");
      var p = document.createElement("p"); p.textContent = s.t; li.appendChild(p);
      if (s.code) {
        var box = document.createElement("div"); box.className = "code";
        var span = document.createElement("span"); span.textContent = s.code;
        var btn = document.createElement("button"); btn.type = "button"; btn.className = "copy"; btn.textContent = "Copy";
        btn.addEventListener("click", function () { copy(s.code, btn); });
        box.appendChild(span); box.appendChild(btn); li.appendChild(box);
      }
      ol.appendChild(li);
    });
    if (typeof modal.showModal === "function") modal.showModal(); else modal.setAttribute("open", "");
  }
  function copy(text, btn) {
    function done() { btn.textContent = "Copied"; setTimeout(function () { btn.textContent = "Copy"; }, 1400); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else fallback();
    function fallback() {
      var t = document.createElement("textarea"); t.value = text; document.body.appendChild(t); t.select();
      try { document.execCommand("copy"); done(); } catch (e) { btn.textContent = "Press Ctrl+C"; }
      document.body.removeChild(t);
    }
  }
  $("modalClose").addEventListener("click", function () { modal.close(); });
  modal.addEventListener("click", function (e) { if (e.target === modal) modal.close(); });

  /* wiring */
  input.addEventListener("input", function () { state.q = input.value; render(); });
  $("reset").addEventListener("click", function () { input.value = ""; state.q = ""; setCat("All"); input.focus(); });

  function countUp(el, to) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = to; return; }
    var start = null;
    function step(ts) {
      if (start === null) start = ts;
      var k = Math.min((ts - start) / 900, 1);
      el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  $("year").textContent = new Date().getFullYear();
  buildFilters(); buildIndex(); render();
  countUp($("totalCount"), PROJECTS.length);
})();
