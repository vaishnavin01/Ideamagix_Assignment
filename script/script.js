document.getElementById("menu-btn").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("show");
})
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 }
        }
    });
});
window.addEventListener("load", function () {
    const loader = document.getElementById("page-loader");

    // Delay hide so loader is visible
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "opacity 0.6s ease";
    }, 800);

    setTimeout(() => {
        loader.style.display = "none";
    }, 1500);
});

