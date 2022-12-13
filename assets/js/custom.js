(function ($) {

    "use strict";

    $(document).ready(function () {


        // menu area start
        
        $(function() {
            $(".menu-icon-des").click(function () {
                $(this).toggleClass("off-canvas");
                $(".main-menu ").toggleClass("show-menu");
                $(".over-lay ").toggleClass("fix-lay");
            });


            
        });


        // menu area start
        
        $(function() {
            $(".search-click").click(function () {
                $(".search-area-tex ").toggleClass("text-click");
            });
        });


        // Add menu class
        $(function() {
            var header = $(".header-r");
            $(document).scroll(function() {    
                var scroll = $(window).scrollTop();
                if (scroll >= 300) {
                    header.addClass("header-fixed");
                } else {
                    header.removeClass("header-fixed");
                }
            });
        });
        

        // menu are end


        // amin sider start

        
        $('.r-heder-slider').owlCarousel({
            loop: true,
            autoplay: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    dots: true,
                    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>']
                },

                575: {
                    items: 1,
                    nav: true,
                    dots: true,
                    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>']
                },

                768: {
                    items: 1,
                    nav: true,
                    dots: true,
                    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>']
                },

                1000: {
                    items: 1,
                    nav: true,
                    dots: true,
                    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>']
                }
            }
        })
        



        // main slider end


        // Question number area start


        
        $('.news-text').owlCarousel({
            loop: true,
            autoplay: true,
            responsiveClass: true,
            margin:30,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    dots: false,
                },

                575: {
                    items: 1,
                    nav: true,
                    dots: false,
                },

                768: {
                    items: 2,
                    nav: true,
                    dots: false,
                },

                1000: {
                    items: 3,
                    nav: false,
                    dots: false,
                }
            }
        })





        // home 2
        // home 2
        // home 2
        // home 2

        // Add menu class
        $(function() {
            var header = $(".home-12");
            $(document).scroll(function() {    
                var scroll = $(window).scrollTop();
                if (scroll >= 300) {
                    header.addClass("header-fixed-home-2");
                    header.removeClass("header-fixed");
                } else {
                    header.removeClass("header-fixed-home-2");
                }
            });
        });
        
    // home 2 best offer


    $('.r-all-car-area').owlCarousel({
        loop: true,
        autoplay: true,
        responsiveClass: true,
        margin:30,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
            },

            575: {
                items: 1,
                nav: false,
                dots: true,
            },

            768: {
                items: 2,
                nav: false,
                dots: true,
            },

            1000: {
                items: 3,
                nav: false,
                dots: true,
            }
        }
    })



// Best Vehicles


$('.r-car-product-carousel').owlCarousel({
    loop:true,
    margin: 0,
    items: 1,
    auto: false,
    dots: false,
    autoplay: true,
    nav: false,
    mouseDrag: false,
    touchDrag: false,
    thumbs: true,
    thumbsPrerendered: true
    
})


// home 4

$('.tab-slider-all').owlCarousel({
    loop: true,
    autoplay: true,
    responsiveClass: true,
    margin:30,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true,
        },

        575: {
            items: 1,
            nav: false,
            dots: true,
        },

        768: {
            items: 2,
            nav: false,
            dots: true,
        },

        1000: {
            items: 3,
            nav: false,
            dots: true,
        }
    }
})

// driver slider


$('.all-silder-driver').owlCarousel({
    loop: true,
    autoplay: true,
    responsiveClass: true,
    margin:30,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true,
        },

        575: {
            items: 1,
            nav: false,
            dots: true,
        },

        768: {
            items: 2,
            nav: false,
            dots: true,
        },

        1000: {
            items: 3,
            nav: false,
            dots: true,
        }
    }
})


// driver slider


$('.driver-slider-r_all').owlCarousel({
    loop: true,
    autoplay: true,
    responsiveClass: true,
    margin:30,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true,
        },

        575: {
            items: 1,
            nav: false,
            dots: true,
        },

        768: {
            items: 2,
            nav: false,
            dots: true,
        },

        1000: {
            items: 3,
            nav: false,
            dots: true,
        }
    }
})


// testmonily slider


$('.test-silsw').owlCarousel({
    loop: true,
    autoplay: true,
    responsiveClass: true,
    margin:30,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true,
        },

        575: {
            items: 1,
            nav: false,
            dots: true,
        },

        768: {
            items: 1,
            nav: false,
            dots: true,
        },

        1000: {
            items: 1,
            nav: false,
            dots: true,
        }
    }
})










  


        // Add menu class
        $(function() {
            var header = $(".menu-area");
            $(document).scroll(function() {    
                var scroll = $(window).scrollTop();
                if (scroll >= 30) {
                    header.addClass("header-fixed");
                } else {
                    header.removeClass("header-fixed");
                }
            });
        });

        



        // Add menu class
        $(function() {
            var header = $(".main-navbar");
            $(window).scroll(function() {    
                var scroll = $(window).scrollTop();
                if (scroll >= 300) {
                    header.addClass("navbar-fixed");
                } else {
                    header.removeClass("navbar-fixed");
                }
            });
        });

        // Add menu class
        $(function() {
            var header = $(".navbar-logo");
            $(window).scroll(function() {    
                var scroll = $(window).scrollTop();
                if (scroll >= 300) {
                    header.addClass("logo-fixed");
                } else {
                    header.removeClass("logo-fixed");
                }
            });
        });

    });

    // Scroll Top Icon Show & Hide
    $(function () {
        var myWindowScroll = 200;
        $(window).scroll(function () {
            if ($(window).scrollTop() > myWindowScroll) {
                $(".back-to-top a ").fadeIn("slow");
            } else {
                $(".back-to-top a").fadeOut("slow");
            }
        });
    });

    // Back To Top
    $(".back-to-top a").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 2000);
        return false;
    });

    // Menu Smooth-scroll
    $(document).ready(function () {
        $('.navbar-nav li a[href^="#"]').on('click', function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').animate({
                'scrollTop': $target.offset().top - 85
            }, 1000, 'swing');
        });
    });

    

    //Begin Loading Animation
    $(window).load(function() {
        $(".spinner-area").delay(1000).fadeOut("slow");
    });

    

    $('.clearfix li').magnificPopup({
        type: 'image',
        delegate: 'a',

        gallery: {
            enabled: true
        },
    });
    



})(jQuery);

























