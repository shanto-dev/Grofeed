(function ($) {
    'use strict';

    $(window).on("load", function () {
        $(".sidebar_menuToggle").on("click", function () {
            $(this).toggleClass('active');
            const $sidebar = $(".sidebar-menu");
            if ($sidebar.length) {
                $sidebar.slideToggle(300);
            }
        });
    });

    function updateDateTime() {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = now.getFullYear();
        const hours = now.getHours() % 12 || 12; // Convert to 12-hour format
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
        const formattedDateTime = `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;
        document.getElementById('datetime').textContent = formattedDateTime;
    }

    updateDateTime(); // Set initial time
    setInterval(updateDateTime, 1000); 


    var pdSlider = new Swiper(".card_swiper1", {
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
                slidesPerView: 2,
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 18
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 18
            },
            1366: {
                slidesPerView: 3,
                spaceBetween: 18
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 18
            },
            1600: {
                slidesPerView: 4,
                spaceBetween: 24
            },
            1920: {
                slidesPerView: 5,
                spaceBetween: 20
            },
            2300: {
                slidesPerView: 6,
                spaceBetween: 24
            },
        }
    });

    var pdSlider2 = new Swiper(".card_swiper2", {
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
            1024: {
                slidesPerView: 2,
                spaceBetween: 18
            },
            1366: {
                slidesPerView: 3,
                spaceBetween: 18
            },
            1920: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            2300: {
                slidesPerView: 5,
                spaceBetween: 24
            },
        }
    });

})(jQuery);