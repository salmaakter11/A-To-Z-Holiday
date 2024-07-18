(function ($) {
    "use strict";
    // topbar sticky
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 10) { $('.topbar-area').addClass("is-sticky"); }
        else { $('.topbar-area').removeClass("is-sticky"); }
    });
    // nav bar sticky
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 10) { $('.navbar-area').addClass("is-sticky"); }
        else { $('.navbar-area').removeClass("is-sticky"); }
    });

    // goto top scrool
    $(function () {
        $(window).on('scroll', function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $('.go-top').addClass('active'); if (scrolled < 600) $('.go-top').removeClass('active');
        });

        $('.go-top').on('click', function () { $("html, body").animate({ scrollTop: "0" }, 500); });
    });

   
    // mean-menu active

    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "1199"
    });

    $(".others-option-for-responsive .dot-menu").on("click", function () { $(".others-option-for-responsive .container .container").toggleClass("active"); });
    $(".others-options .search-box").on("click", function () { $(".search-travel").toggleClass("search-travel-active"); });
    $(".search-travel-close").on("click", function () { $(".search-travel").removeClass("search-travel-active"); });
    $(".language-option").each(function () {
        var each = $(this)
        each.find(".lang-name").html(each.find(".language-dropdown-menu a:nth-child(1)").text());
        var allOptions = $(".language-dropdown-menu").children('a');
        each.find(".language-dropdown-menu").on("click", "a", function () {
            allOptions.removeClass('selected'); $(this).addClass('selected');
            $(this).closest(".language-option").find(".lang-name").html($(this).text());
        });
    })
    // Banner Slider
    $('.home_banner_slider_wrapper').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        animateOut: 'slideOutLeft',
        dots: false,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class=' fas fa-arrow-right' ></i>"],
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // partner_slider_area Slider
    $('.partner_slider_area').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 4,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 6
            }
        }
    });
    // Popular Hotels Slider
    $('.realted-toure_slider').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 10,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class=' fas fa-arrow-right' ></i>"],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });

}(jQuery));

$(document).ready(function () {
    $('#dashboard_dropdowns').on('click', (function () {
        $('#show_dropdown_item').slideToggle("slow");
    })
    )
});

// OTP Input
document.querySelectorAll(".otSc").forEach(function (otpEl) {
    otpEl.addEventListener("keyup", backSp);
    otpEl.addEventListener("keypress", function () {
        var nexEl = this.nextElementSibling;
        nexEl.focus();
    });
})
function backSp(backKey) {
    if (backKey.keyCode == 8) {
        var prev = this.previousElementSibling.focus()
    }
}

jQuery(window).on('load', function () { jQuery(".preloader").fadeOut(500); });