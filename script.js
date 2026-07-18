/* =========================================================
   AYANSH OVERSEAS LLP
   Premium Website Script
========================================================= */

"use strict";

/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initLoader();
    initStickyNavbar();
    initMobileMenu();
    initSmoothScroll();
    initRevealAnimation();
    initCounterAnimation();
    initFaq();
    initBackToTop();

});

/* =========================================================
   LOADER
========================================================= */

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

/* =========================================================
   STICKY HEADER
========================================================= */

function initStickyNavbar() {

    const header = document.querySelector("header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

}

/* =========================================================
   MOBILE MENU
========================================================= */

function initMobileMenu() {

    const menuButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-links");

    if (!menuButton || !nav) return;

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("active");
        menuButton.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");
            menuButton.classList.remove("active");

        });

    });

}

/* =========================================================
   SMOOTH SCROLL
========================================================= */

function initSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

}

/* =========================================================
   SCROLL REVEAL
========================================================= */

function initRevealAnimation() {

    const items = document.querySelectorAll(

        ".card,.section-title,.timeline-item,.about-image,.about-content"

    );

    items.forEach(item => item.classList.add("reveal"));

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {

        threshold: .15

    });

    items.forEach(item => observer.observe(item));

}

/* =========================================================
   COUNTER ANIMATION
========================================================= */

function initCounterAnimation() {

    const counters = document.querySelectorAll(".stat-number");

    if (!counters.length) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            const duration = 1800;

            const start = performance.now();

            function animate(time) {

                const progress = Math.min((time - start) / duration, 1);

                const value = Math.floor(progress * target);

                counter.textContent = value.toLocaleString() + "+";

                if (progress < 1) {

                    requestAnimationFrame(animate);

                }

            }

            requestAnimationFrame(animate);

            observer.unobserve(counter);

        });

    });

    counters.forEach(counter => observer.observe(counter));

}

/* =========================================================
   FAQ ACCORDION
========================================================= */

function initFaq() {

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const button = item.querySelector(".faq-question");

        button.addEventListener("click", () => {

            faqItems.forEach(faq => {

                if (faq !== item) {

                    faq.classList.remove("active");

                }

            });

            item.classList.toggle("active");

        });

    });

}

/* =========================================================
   BACK TO TOP
========================================================= */

function initBackToTop() {

    const button = document.querySelector(".back-top");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 600) {

            button.classList.add("show");

        } else {

            button.classList.remove("show");

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
