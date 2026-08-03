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

