$(document).ready(function () {
    // Smooth Section Switching
    $(".nav-links li, .cta").click(function () {
        const sectionId = $(this).data("section");
        if (sectionId) { // Only switch sections if data-section exists
            $(".section").removeClass("active");
            $(`#${sectionId}`).addClass("active");
        }
    });

    // Dark Mode Toggle
    $(".mode-toggle").click(function () {
        $("body").toggleClass("dark-mode");
        $(this).text($("body").hasClass("dark-mode") ? "🌙" : "🌞");
    });

    // GSAP Animations
    gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero p", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
    gsap.from(".hero-buttons", { opacity: 0, y: 30, duration: 1, delay: 0.8 });
    gsap.from(".social-links", { opacity: 0, y: 30, duration: 1, delay: 1.1 });

    // Smooth scroll to sections
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        const target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });
});