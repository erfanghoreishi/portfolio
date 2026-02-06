/* =============================================
   PORTFOLIO — main.js
   Erfan Ghoreishi · Minimal vanilla JS
   ============================================= */

(function () {
    'use strict';

    // ----- DOM REFERENCES -----
    const navbar    = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu   = document.getElementById('navMenu');
    const navLinks  = document.querySelectorAll('.navbar__link');
    const sections  = document.querySelectorAll('.section');

    // ----- MOBILE MENU TOGGLE -----
    navToggle.addEventListener('click', function () {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navMenu.classList.remove('open');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!navbar.contains(e.target) && navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // ----- NAVBAR SHADOW ON SCROLL -----
    function handleNavbarScroll() {
        if (window.scrollY > 10) {
            navbar.classList.add('navbar--scrolled');
        } else {
            navbar.classList.remove('navbar--scrolled');
        }
    }

    // ----- ACTIVE SECTION HIGHLIGHTING -----
    function highlightActiveSection() {
        var scrollY = window.scrollY + 120;

        sections.forEach(function (section) {
            var top    = section.offsetTop;
            var height = section.offsetHeight;
            var id     = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(function (link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ----- SCROLL EVENT (throttled) -----
    var ticking = false;

    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                handleNavbarScroll();
                highlightActiveSection();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Run once on load
    handleNavbarScroll();
    highlightActiveSection();

})();
