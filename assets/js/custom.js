/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 * 
 */

"use strict";

$(window).on("load", function () {
    $(".sidebar_menuToggle").on("click", function () {
        $(this).toggleClass('active');
        const $sidebar = $(".sidebar-menu");
        if ($sidebar.length) {
            $sidebar.slideToggle(300);
        }
    });


    var blogSlider = new Swiper(".card_swiper1", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3100,
            disableOnInteraction: false,
        },
        breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 18
            },
        }
    });
});
