/* ==========================================================
   AYANSH OVERSEAS LLP
   Premium Website Script
   Version : 1.0
========================================================== */

"use strict";

/* ==========================================================
   DOM READY
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initLoader();
    initStickyNavbar();
    initMobileMenu();
    initSmoothScroll();

    /* Part 2 */
    initRevealAnimation();
    initCounterAnimation();
    initFaq();
    initBackToTop();
    initActiveNavigation();

    /* Part 3 */
    initScrollProgress();
    initHeroParallax();
    initButtonRipple();

});

/* ==========================================================
   LOADER
========================================================== */

function initLoader() {

    const loader = document.querySelector(".loader");

    if (!loader) return;

    window.addEventListener("load", () => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        setTimeout(() => {

            loader.remove();

        }, 500);

    });

}

/* ==========================================================
   STICKY NAVBAR
========================================================== */

function initStickyNavbar() {

    const header = document.querySelector("header");

    if (!header) return;

    function updateHeader() {

        if (window.scrollY > 80) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);

}

/* ==========================================================
   MOBILE MENU
========================================================== */

function initMobileMenu() {

    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-links");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {

        toggle.classList.toggle("active");
        nav.classList.toggle("active");

        document.body.classList.toggle("menu-open");

    });

    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            toggle.classList.remove("active");
            nav.classList.remove("active");
            document.body.classList.remove("menu-open");

        });

    });

    document.addEventListener("click", (event) => {

        if (
            !nav.contains(event.target) &&
            !toggle.contains(event.target)
        ) {

            toggle.classList.remove("active");
            nav.classList.remove("active");
            document.body.classList.remove("menu-open");

        }

    });

}

/* ==========================================================
   SMOOTH SCROLL
========================================================== */

function initSmoothScroll() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (!target) return;

            e.preventDefault();

            const headerHeight =
                document.querySelector("header")?.offsetHeight || 0;

            const offset =
                target.offsetTop - headerHeight;

            window.scrollTo({

                top: offset,
                behavior: "smooth"

            });

        });

    });

}

/* ==========================================================
   SCROLL REVEAL ANIMATION
========================================================== */

function initRevealAnimation() {

    const elements = document.querySelectorAll(
        ".card, .section-title, .timeline-item, .about-image, .about-content, .stat-card, .testimonial-card"
    );

    if (!elements.length) return;

    elements.forEach(element => {

        element.classList.add("reveal");

    });

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });

    elements.forEach(element => {

        observer.observe(element);

    });

}

/* ==========================================================
   COUNTER ANIMATION
========================================================== */

function initCounterAnimation() {

    const counters = document.querySelectorAll(".stat-number");

    if (!counters.length) return;

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let current = 0;

            const increment = Math.max(1, Math.ceil(target / 120));

            const timer = setInterval(() => {

                current += increment;

                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }

                counter.textContent = current.toLocaleString() + "+";

            }, 18);

            observer.unobserve(counter);

        });

    }, {

        threshold: 0.4

    });

    counters.forEach(counter => {

        observer.observe(counter);

    });

}

/* ==========================================================
   FAQ ACCORDION
========================================================== */

function initFaq() {

    const items = document.querySelectorAll(".faq-item");

    if (!items.length) return;

    items.forEach(item => {

        const button = item.querySelector(".faq-question");

        if (!button) return;

        button.addEventListener("click", () => {

            items.forEach(faq => {

                if (faq !== item) {

                    faq.classList.remove("active");

                }

            });

            item.classList.toggle("active");

        });

    });

}

/* ==========================================================
   BACK TO TOP
========================================================== */

function initBackToTop() {

    const button = document.querySelector(".back-top");

    if (!button) return;

    function updateButton() {

        button.classList.toggle(

            "show",

            window.scrollY > 600

        );

    }

    updateButton();

    window.addEventListener("scroll", updateButton);

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */

function initActiveNavigation() {

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-links a");

    if (!sections.length || !navLinks.length) return;

    function updateNavigation() {

        let current = "";

        sections.forEach(section => {

            const offset = section.offsetTop - 140;

            if (window.scrollY >= offset) {

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    updateNavigation();

    window.addEventListener("scroll", updateNavigation);

}

/* ==========================================================
   SCROLL PROGRESS BAR
========================================================== */

function initScrollProgress() {

    const progress = document.querySelector(".scroll-progress");

    if (!progress) return;

    function updateProgress() {

        const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        if (totalHeight <= 0) return;

        const percentage =
            (window.scrollY / totalHeight) * 100;

        progress.style.width = percentage + "%";

    }

    updateProgress();

    window.addEventListener("scroll", updateProgress);

}

/* ==========================================================
   HERO PARALLAX
========================================================== */

function initHeroParallax() {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    window.addEventListener("scroll", () => {

        const offset = window.scrollY * 0.3;

        hero.style.backgroundPosition = `center ${offset}px`;

    });

}

/* ==========================================================
   BUTTON RIPPLE EFFECT
========================================================== */

function initButtonRipple() {

    const buttons = document.querySelectorAll(
        ".btn,.btn-primary,.btn-secondary"
    );

    if (!buttons.length) return;

    buttons.forEach(button => {

        button.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            const rect = this.getBoundingClientRect();

            const size = Math.max(rect.width, rect.height);

            ripple.style.width = size + "px";
            ripple.style.height = size + "px";

            ripple.style.left =
                e.clientX - rect.left - size / 2 + "px";

            ripple.style.top =
                e.clientY - rect.top - size / 2 + "px";

            ripple.className = "ripple";

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        });

    });

}

/* ==========================================================
   LAZY IMAGE FADE-IN
========================================================== */

function initLazyImages() {

    const images = document.querySelectorAll("img[loading='lazy']");

    if (!images.length) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const image = entry.target;

            image.classList.add("loaded");

            observer.unobserve(image);

        });

    }, {

        threshold: 0.15

    });

    images.forEach(image => {

        observer.observe(image);

    });

}

/* ==========================================================
   THROTTLE
========================================================== */

function throttle(callback, delay) {

    let waiting = false;

    return function (...args) {

        if (waiting) return;

        callback.apply(this, args);

        waiting = true;

        setTimeout(() => {

            waiting = false;

        }, delay);

    };

}

/* ==========================================================
   DEBOUNCE
========================================================== */

function debounce(callback, delay) {

    let timer;

    return function (...args) {

        clearTimeout(timer);

        timer = setTimeout(() => {

            callback.apply(this, args);

        }, delay);

    };

}

/* ==========================================================
   WINDOW RESIZE
========================================================== */

window.addEventListener(

    "resize",

    debounce(() => {

        console.log("Layout updated.");

    }, 200)

);

/* ==========================================================
   INITIALIZE OPTIONAL FEATURES
========================================================== */

initLazyImages();

/* ==========================================================
   END OF FILE
========================================================== */
