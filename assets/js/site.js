/* Deep Jadav — portfolio interactions (no dependencies) */
(function () {
  "use strict";

  var doc = document.documentElement;
  doc.classList.remove("no-js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---------------------------------------------------------------- page in */
  function ready() {
    document.body.classList.add("is-ready");
  }
  if (document.readyState === "complete") ready();
  else window.addEventListener("load", ready);
  // Never keep the curtain down for long (slow assets).
  setTimeout(ready, 1200);
  // Restored from back/forward cache.
  window.addEventListener("pageshow", function (e) {
    if (e.persisted) {
      document.body.classList.remove("is-leaving");
      ready();
    }
  });

  /* ------------------------------------------------------- page transitions */
  document.addEventListener("click", function (e) {
    var a = e.target.closest("a");
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (a.target === "_blank" || a.hasAttribute("download")) return;
    var href = a.getAttribute("href");
    if (!href || href.charAt(0) === "#" || /^(mailto:|tel:|javascript:)/i.test(href)) return;
    var url;
    try {
      url = new URL(href, window.location.href);
    } catch (err) {
      return;
    }
    if (url.origin !== window.location.origin) return;
    // Same page with only a hash change: let the browser scroll.
    if (url.pathname === window.location.pathname && url.hash) return;
    if (reduceMotion) return;
    e.preventDefault();
    document.body.classList.add("is-leaving");
    setTimeout(function () {
      window.location.href = url.href;
    }, 420);
  });

  /* ------------------------------------------------------------- header */
  var header = document.querySelector(".site-header");
  var lastY = window.scrollY;
  function onScrollHeader() {
    var y = window.scrollY;
    if (!header) return;
    header.classList.toggle("is-scrolled", y > 24);
    var menuOpen = document.body.classList.contains("menu-open");
    header.classList.toggle("is-hidden", !menuOpen && y > 400 && y > lastY + 4);
    if (y < lastY - 4) header.classList.remove("is-hidden");
    lastY = y;
  }

  /* --------------------------------------------------------- mobile menu */
  var menu = document.getElementById("mobile-menu");
  var toggles = document.querySelectorAll("[data-menu-toggle]");
  function setMenu(open) {
    if (!menu) return;
    menu.classList.toggle("is-open", open);
    menu.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.classList.toggle("menu-open", open);
    document.body.style.overflow = open ? "hidden" : "";
    toggles.forEach(function (t) {
      t.setAttribute("aria-expanded", open ? "true" : "false");
    });
    if (open) {
      var first = menu.querySelector("a, button");
      if (first) first.focus();
    }
  }
  toggles.forEach(function (t) {
    t.addEventListener("click", function () {
      setMenu(!menu.classList.contains("is-open"));
    });
  });
  if (menu) {
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu && menu.classList.contains("is-open")) setMenu(false);
  });

  /* ------------------------------------------------------- cursor light */
  var lightRAF = null;
  var mx = window.innerWidth / 2;
  var my = window.innerHeight / 3;
  if (finePointer && !reduceMotion) {
    window.addEventListener(
      "pointermove",
      function (e) {
        mx = e.clientX;
        my = e.clientY;
        if (!lightRAF) {
          lightRAF = requestAnimationFrame(function () {
            doc.style.setProperty("--mx", mx + "px");
            doc.style.setProperty("--my", my + "px");
            lightRAF = null;
          });
        }
      },
      { passive: true }
    );
  }

  /* ------------------------------------------------- panel spotlight */
  if (finePointer) {
    document.addEventListener(
      "pointermove",
      function (e) {
        var p = e.target.closest && e.target.closest(".panel");
        if (!p) return;
        var r = p.getBoundingClientRect();
        p.style.setProperty("--px", e.clientX - r.left + "px");
        p.style.setProperty("--py", e.clientY - r.top + "px");
      },
      { passive: true }
    );
  }

  /* --------------------------------------------------------- split text */
  document.querySelectorAll("[data-split]").forEach(function (el) {
    var i = 0;
    function wrap(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (child) {
        if (child.nodeType === 3) {
          var parts = child.textContent.split(/(\s+)/);
          var frag = document.createDocumentFragment();
          parts.forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) {
              frag.appendChild(document.createTextNode(" "));
              return;
            }
            var w = document.createElement("span");
            w.className = "w";
            var inner = document.createElement("span");
            inner.style.setProperty("--i", i++);
            inner.textContent = part;
            w.appendChild(inner);
            frag.appendChild(w);
          });
          child.parentNode.replaceChild(frag, child);
        } else if (child.nodeType === 1 && child.tagName !== "BR") {
          // Wrap element children (e.g. <em class="serif">) as a single word.
          if (child.children.length === 0 && child.textContent.trim().indexOf(" ") === -1) {
            var w2 = document.createElement("span");
            w2.className = "w";
            var inner2 = document.createElement("span");
            inner2.style.setProperty("--i", i++);
            child.parentNode.replaceChild(w2, child);
            inner2.appendChild(child);
            w2.appendChild(inner2);
          } else {
            wrap(child);
          }
        }
      });
    }
    wrap(el);
    el.classList.add("split");
    if (!el.getAttribute("aria-label")) el.setAttribute("aria-label", el.textContent.replace(/\s+/g, " ").trim());
  });

  /* ------------------------------------------------------------ reveals */
  var revealEls = document.querySelectorAll("[data-reveal], .split, .tl-item");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("is-in");
    });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ------------------------------------------------- timeline progress */
  var timeline = document.querySelector(".timeline");
  function onScrollTimeline() {
    if (!timeline) return;
    var r = timeline.getBoundingClientRect();
    var vh = window.innerHeight;
    var p = (vh * 0.75 - r.top) / r.height;
    timeline.style.setProperty("--progress", Math.max(0, Math.min(1, p)).toFixed(3));
  }

  /* ----------------------------------------------------------- parallax */
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));
  function onScrollParallax() {
    if (reduceMotion) return;
    var vh = window.innerHeight;
    parallaxEls.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      var speed = parseFloat(el.getAttribute("data-parallax")) || 0.1;
      var offset = (r.top + r.height / 2 - vh / 2) * -speed;
      el.style.transform = "translate3d(0," + offset.toFixed(1) + "px,0)";
    });
  }

  var scrollRAF = null;
  function onScroll() {
    if (scrollRAF) return;
    scrollRAF = requestAnimationFrame(function () {
      onScrollHeader();
      onScrollTimeline();
      onScrollParallax();
      scrollRAF = null;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  /* --------------------------------------------------------- 3D tilt */
  if (finePointer && !reduceMotion) {
    document.querySelectorAll("[data-tilt]").forEach(function (card) {
      var inner = card.querySelector(".project-inner") || card;
      var max = parseFloat(card.getAttribute("data-tilt")) || 7;
      card.addEventListener("pointermove", function (e) {
        var r = inner.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width;
        var y = (e.clientY - r.top) / r.height;
        card.classList.add("is-tilting");
        card.style.setProperty("--ry", ((x - 0.5) * max * 2).toFixed(2) + "deg");
        card.style.setProperty("--rx", ((0.5 - y) * max * 2).toFixed(2) + "deg");
        card.style.setProperty("--gx", (x * 100).toFixed(1) + "%");
        card.style.setProperty("--gy", (y * 100).toFixed(1) + "%");
      });
      card.addEventListener("pointerleave", function () {
        card.classList.remove("is-tilting");
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
      });
    });
  }

  /* --------------------------------------------------- magnetic buttons */
  if (finePointer && !reduceMotion) {
    document.querySelectorAll("[data-magnetic]").forEach(function (btn) {
      btn.addEventListener("pointermove", function (e) {
        var r = btn.getBoundingClientRect();
        var x = e.clientX - (r.left + r.width / 2);
        var y = e.clientY - (r.top + r.height / 2);
        btn.style.setProperty("--bx", (x * 0.18).toFixed(1) + "px");
        btn.style.setProperty("--by", (y * 0.25).toFixed(1) + "px");
      });
      btn.addEventListener("pointerleave", function () {
        btn.style.setProperty("--bx", "0px");
        btn.style.setProperty("--by", "0px");
      });
    });
  }

  /* --------------------------------------------------- project filters */
  var filterBtns = document.querySelectorAll("[data-filter]");
  var cards = document.querySelectorAll("[data-category]");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var f = btn.getAttribute("data-filter");
      filterBtns.forEach(function (b) {
        b.setAttribute("aria-pressed", b === btn ? "true" : "false");
      });
      cards.forEach(function (c) {
        var cats = (c.getAttribute("data-category") || "").split(" ");
        var show = f === "all" || cats.indexOf(f) !== -1;
        c.classList.toggle("is-hidden", !show);
        if (show) c.querySelectorAll("[data-reveal]").forEach(function (el) { el.classList.add("is-in"); });
        if (show) c.classList.add("is-in");
      });
      var live = document.getElementById("filter-status");
      if (live) {
        var n = Array.prototype.filter.call(cards, function (c) {
          return !c.classList.contains("is-hidden");
        }).length;
        live.textContent = n + (n === 1 ? " project" : " projects") + " shown";
      }
    });
  });

  /* ------------------------------------------------------ project dialogs */
  document.querySelectorAll("[data-open]").forEach(function (trigger) {
    trigger.addEventListener("click", function (e) {
      var dlg = document.getElementById(trigger.getAttribute("data-open"));
      if (!dlg || typeof dlg.showModal !== "function") return;
      e.preventDefault();
      dlg.showModal();
      document.body.style.overflow = "hidden";
    });
  });
  document.querySelectorAll("dialog.project-dialog").forEach(function (dlg) {
    dlg.addEventListener("close", function () {
      document.body.style.overflow = "";
    });
    dlg.addEventListener("click", function (e) {
      if (e.target === dlg) dlg.close(); // click on backdrop
    });
    dlg.querySelectorAll("[data-close]").forEach(function (b) {
      b.addEventListener("click", function () {
        dlg.close();
      });
    });
  });
  // Deep link: projects.html#project-id opens its details.
  if (location.hash) {
    var target = document.getElementById(location.hash.slice(1));
    if (target && target.matches("[data-category]")) {
      setTimeout(function () {
        target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
      }, 500);
    }
  }

  /* ------------------------------------------------------- resume link */
  // Shows "Download Resume" only when the file exists; otherwise offers a
  // resume request by email (no broken links).
  document.querySelectorAll("[data-resume]").forEach(function (link) {
    var file = link.getAttribute("href");
    var fallback = function () {
      link.removeAttribute("download");
      link.setAttribute("href", "mailto:jadavdeep560@gmail.com?subject=" + encodeURIComponent("Resume request — Deep Jadav"));
      var label = link.querySelector("[data-label]");
      if (label) label.textContent = "Request Resume";
      link.setAttribute("title", "Request my resume by email");
    };
    if (location.protocol === "file:") return fallback();
    fetch(file, { method: "HEAD", cache: "no-store" })
      .then(function (res) {
        var type = res.headers.get("content-type") || "";
        if (!res.ok || /text\/html/i.test(type)) fallback();
      })
      .catch(fallback);
  });

  /* ------------------------------------------------------- copy to clipboard */
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      var label = btn.querySelector("[data-label]");
      var done = function () {
        if (!label) return;
        var prev = label.textContent;
        label.textContent = "Copied";
        setTimeout(function () {
          label.textContent = prev;
        }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () {});
      }
    });
  });

  /* ------------------------------------------------------- contact form */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      var subject = form.elements.subject.value.trim() || "Hello from your portfolio";
      var message = form.elements.message.value.trim();
      var body = message + "\n\n— " + name + (email ? " (" + email + ")" : "");
      window.location.href =
        "mailto:jadavdeep560@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }

  /* ---------------------------------------------------------------- year */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
