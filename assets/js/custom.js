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


    var pdSlider = new Swiper(".card_swiper1", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        // autoplay: {
        //     delay: 3100,
        //     disableOnInteraction: false,
        // },
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
        // autoplay: {
        //     delay: 3100,
        //     disableOnInteraction: false,
        // },
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
    /**==========================
     *02. FunFact 
    ===========================*/
    $(".countfact").appear();
    $(document.body).on("appear", ".countfact", function (e, $affected) {
        $affected.each(function () {
            var $this = $(this);
            if (!$this.hasClass("appeared")) {
                jQuery({
                    Counter: 0
                }).animate({
                    Counter: $this.attr("data-count")
                }, {
                    duration: 3000,
                    easing: "swing",
                    step: function () {
                        var num = Math.ceil(this.Counter).toString();
                        if (Number(num) > 999) {
                            while (/(\d+)(\d{3})/.test(num)) {
                                num = num.replace(/(\d+)(\d{3})/, '<span class="count-span">' + "$1" + "</span>" + "$2");
                            }
                        }
                        if ($this.hasClass("hasFraction")) {
                            var num = Math.abs(this.Counter);
                            num = num.toFixed(1).toString();
                        }
                        $(".counter", $this).html(num);
                    },
                });
                $this.addClass("appeared");
            }
        });
    });

})(jQuery);