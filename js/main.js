// ------- Footer year -------
document.getElementById("year").textContent = new Date().getFullYear();

// ------- Years of experience -------
// Counted from the first role (Taibah Infotech, Oct 2017)
(function () {
    var START = new Date(2017, 9, 1); // months are 0-indexed: 9 = October
    var now = new Date();
    var years = now.getFullYear() - START.getFullYear();
    var monthDelta = now.getMonth() - START.getMonth();
    if (monthDelta < 0 || (monthDelta === 0 && now.getDate() < START.getDate())) {
        years -= 1;
    }
    var label = years + "+";
    document.querySelectorAll(".years-exp").forEach(function (el) {
        el.textContent = label;
    });
})();

// ------- Mobile menu -------
var toggle = document.getElementById("navToggle");
var links = document.getElementById("navLinks");
toggle.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
});
links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
    }
});

// ------- Theme toggle -------
(function () {
    var root = document.documentElement;
    var btn = document.getElementById("themeToggle");
    if (!btn) return;

    function currentTheme() {
        return root.getAttribute("data-theme") === "light" ? "light" : "dark";
    }
    function apply(theme, save) {
        root.setAttribute("data-theme", theme);
        btn.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
        btn.setAttribute("aria-label", theme === "light" ? "Switch to dark mode" : "Switch to light mode");
        if (save) {
            try { localStorage.setItem("theme", theme); } catch (e) {}
        }
    }

    // Sync the button label with whatever the inline head script set (don't persist yet).
    apply(currentTheme(), false);

    btn.addEventListener("click", function () {
        apply(currentTheme() === "light" ? "dark" : "light", true);
    });

    // Follow the OS setting until the user makes an explicit choice.
    var mq = window.matchMedia("(prefers-color-scheme: light)");
    var onSystemChange = function (e) {
        var stored = null;
        try { stored = localStorage.getItem("theme"); } catch (err) {}
        if (!stored) apply(e.matches ? "light" : "dark", false);
    };
    if (mq.addEventListener) { mq.addEventListener("change", onSystemChange); }
    else if (mq.addListener) { mq.addListener(onSystemChange); }
})();

// ------- Scroll reveal (respects reduced motion) -------
var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var items = document.querySelectorAll(".reveal");
if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
} else {
    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
            if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { io.observe(el); });
}

