/*global $, jQuery, alert*/
(function ($) {
    "use strict";

    function heroContentSlider() {
        var heroContSlider = $('.hero-content-slider'),
            autoplay = heroContSlider.data('autoplay'),
            autoplaySpeed = heroContSlider.data('speed');
        if ($(window).width() > 992) {
            heroContSlider.owlCarousel({
                animateOut: 'bounceOut',
                animateIn: 'bounceIn',
                autoplay: autoplay,
                autoplayTimeout: autoplaySpeed,
                items: 1,
                dots: false,
                mouseDrag: false,
                touchDrag: false,
                loop: true
            });
        } else {
            heroContSlider.owlCarousel({
                autoplay: false,
                items: 1,
                dots: false,
                mouseDrag: true,
                touchDrag: true,
                loop: true,
                autoHeight: true
            });
        }
    }
    function heroContentSliderFade() {
        $('.hero-content-slider').css({ 'opacity': '1' })
    }

    function heroSliderOwl() {
        var heroOwlSlider = $(".hero-slider"),
            autoplay = heroOwlSlider.data('autoplay'),
            autoplaySpeed = heroOwlSlider.data('speed'),
            touchSlide = heroOwlSlider.data('touch-drag');
        heroOwlSlider.owlCarousel({
            autoplay: autoplay,
            autoplayTimeout: autoplaySpeed,
            items: 1,
            mouseDrag: touchSlide,
            touchDrag: touchSlide,
            dots: false,
            nav: true,
            navSpeed: 500,
            loop: true,
            autoHeight : true,
            navText: ["<img src='img/assets/slider-left-thin-arrow.png'>", "<img src='img/assets/slider-right-thin-arrow.png'>"]
        });
        if ($('.hero-fullscreen>div').hasClass('hero-slider')) {
            $('.hero-fullscreen').css({'padding': '0'});
        }
    }

    function sliderOwl() {
        var owlSlider = $(".carousel"),
            autoplay = owlSlider.data('autoplay'),
            autoplaySpeed = owlSlider.data('speed'),
            touchSlide = owlSlider.data('touch-drag'),
            loopSlides = owlSlider.data('loop');
        owlSlider.owlCarousel({
            autoplay: autoplay,
            autoplayTimeout: autoplaySpeed,
            items: 1,
            mouseDrag: touchSlide,
            touchDrag: touchSlide,
            dots: true,
            nav: true,
            loop: loopSlides,
            autoHeight : true,
            navText: ["<img src='img/assets/slider-left-thin-arrow.png'>", "<img src='img/assets/slider-right-thin-arrow.png'>"],
            navRewind: true,
            slideBy : 'page'
        });
    }
    //
    // function progressBars() {
    //     function progressBar() {
    //         $('.progress').each(function () {
    //             $(this).find('.progress-bar').animate({
    //                 width: $(this).attr('data-percent')
    //             }, 800);
    //         });
    //     }
    //     if ($('.progress-bars').data('animate-on-scroll') === 'on') {
    //         $('.progress-bars').waypoint(function () {
    //             progressBar();
    //         }, { offset: '100%', triggerOnce: true });
    //     } else {
    //         progressBar();
    //     }
    // }
    //
    // function progressCircles() {
    //     function progressCircle() {
    //         var totalProgress, progress, circles;
    //         circles = document.querySelectorAll('.progress-svg');
    //         for(var i = 0; i < circles.length; i++) {
    //             totalProgress = circles[i].querySelector('circle').getAttribute('stroke-dasharray');
    //             progress = circles[i].parentElement.getAttribute('data-circle-percent');
    //             circles[i].querySelector('.bar').style['stroke-dashoffset'] = totalProgress * progress / 100;
    //         }
    //     };
    //     if ($('.progress-circles').data('animate-on-scroll') === 'on') {
    //         $('.progress-circle').waypoint(function () {
    //             progressCircle();
    //         }, {
    //             offset: '70%',
    //             triggerOnce: true
    //         });
    //     } else {
    //         progressCircle();
    //     };
    // }

    // function vossenIframes() {
    //     $('.video-container').click(function(){
    //         $(this).addClass('reveal');
    //         var videoImg = $(this).find('img'),
    //             videoIframe = $(this).find('iframe'),
    //             videoAttr = videoIframe.attr('data-video-embed'),
    //             videoPlay = videoAttr + "?autoplay=1&autoplay=true";
    //         videoImg.animate({'opacity': 0}, 300);
    //         videoIframe.css('visibility', 'visible').attr('src', videoPlay);
    //         videoIframe[0].setAttribute('allowFullScreen', '');
    //     });
    // }

    // function teamSlider() {
    //     $(".team-slider").owlCarousel({
    //         autoplay : false,
    //         items: 3,
    //         dots: true,
    //         responsiveRefreshRate: 200,
    //         responsive: {
    //             0: {
    //                 items: 1
    //             },
    //             600: {
    //                 items: 2
    //             },
    //             1200: {
    //                 items: 3
    //             }
    //         }
    //     });
    // }

    function quoteSlider() {
        var quoteOwl = $('.quote-slider');
        quoteOwl.owlCarousel({
            autoplay: false,
            autoplayTimeout: 3000,
            items: 1,
            dots: false,
            loop: true,
            nav: true,
            navText: ["<img src='img/assets/slider-left-thin-arrow.png'>", "<img src='img/assets/slider-right-thin-arrow.png'>"]
        });
    }

    // function vossenPortfolio() {
    //     var vosPortfolio = $('.vossen-portfolio'),
    //         initFilter = $('.vossen-portfolio-filters'),
    //         vossenFilters = $('.vossen-portfolio-filters li'),
    //         portfolioItems = $('.vossen-portfolio > div'),
    //         initialCat;
    //
    //     // Init Filter to class except *all
    //     initFilter.each(function () {
    //         var dataOption = $(this).attr('data-initial-filter');
    //         $(this).attr('data-initial-filter', '.' + dataOption);
    //         if ($(initFilter).data('initial-filter') === '.*') {
    //             $(this).attr('data-initial-filter', '*');
    //         }
    //     });
    //     // Filters data to class except first
    //     vossenFilters.not(':first').each(function () {
    //         var dataOption = $(this).attr('data-filter');
    //         $(this).attr('data-filter', "." + dataOption);
    //     });
    //     // Items data to class
    //     portfolioItems.each(function () {
    //         var dataOption = $(this).attr('data-filter');
    //         $(this).addClass(dataOption);
    //     });
    //     // Animate Items
    //     portfolioItems.waypoint(function () {
    //         portfolioItems.each(function (i) {
    //             var eachItem = $(this);
    //             setTimeout(function () { eachItem.addClass('reveal'); }, (i * 3) * 60);
    //         });
    //     }, { offset: '100%', triggerOnce: true });
    //     initialCat = $('.vossen-portfolio-filters').attr('data-initial-filter');
    //     // Add active class to filter
    //     $('.vossen-portfolio-filters li[data-filter="' + initialCat + '"]').addClass('active');
    //     // Init Isotope Filters
    //     vossenFilters.on('click', function () {
    //         $('.vossen-portfolio-filters li.active').removeClass('active');
    //         $(this).addClass('active');
    //         var filterValue = $(this).attr('data-filter');
    //         vosPortfolio.isotope({
    //             filter: filterValue
    //         });
    //     });
    //     // Init Isotope
    //     var $grid = vosPortfolio.isotope({
    //         itemSelector: '.vossen-portfolio > div',
    //         percentPosition: true,
    //         filter: initialCat,
    //         masonry: {
    //             columnWidth: '.vossen-portfolio > div'
    //         }
    //     });
    //     $grid.imagesLoaded().progress( function() {
    //         $grid.isotope('layout');
    //     });
    // }

    $(window).resize(function (){
        setTimeout(function(){
            $('.vossen-portfolio-filters .active').trigger('click');
        }, 600);
    });

    function testimonialSlider() {
        var testimonialsOwl = $('.testimonials'),
            autoplay = testimonialsOwl.data('autoplay'),
            autoplaySpeed = testimonialsOwl.data('speed');
        testimonialsOwl.owlCarousel({
            autoplay : autoplay,
            autoplayTimeout: autoplaySpeed,
            autoplaySpeed: 700,
            loop: true,
            items: 1,
            dots: true,
            dotsSpeed: 400
        });
    }

    // function clientsSlider() {
    //     var clientSlider = $(".clients-slider"),
    //         autoplay = clientSlider.data('autoplay'),
    //         autoplaySpeed = clientSlider.data('speed');
    //     clientSlider.owlCarousel({
    //         autoplay : autoplay,
    //         autoplayTimeout: autoplaySpeed,
    //         loop: false,
    //         dots: false,
    //         nav: false,
    //         responsiveRefreshRate: 200,
    //         responsive: {
    //             0: {
    //                 items: 2
    //             },
    //             600: {
    //                 items: 5
    //             },
    //             1200: {
    //                 items: 6
    //             }
    //         }
    //     });
    // }

    function contactForm() {
        $('#contactform').submit(function () {
            var action = 'php/contact-form.php';
            $("#message-info").slideUp(250, function () {
                $('#message-info').hide();
                $('#submit')
                    .after('<div class="loader"><div></div></div>')
                    .attr('disabled', 'disabled');
                $.post(action, {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    phone: $('#phone').val(),
                    message: $('#message').val()
                },
                    function (data) {
						data = JSON.parse(data);
						var userMsg = document.getElementById('message-info');
                        userMsg.innerHTML = data.message;
						userMsg.classList.add('alert', 'alert-success');
                        $('#message-info').slideDown(250);
                        $('#contactform .loader div').fadeOut('slow', function() {
                            $(this).remove();
                        });
                        $('#submit').removeAttr('disabled');
                        if (data.status.match('success') !== null) {
							goog_report_conversion ();
                            $('#contactform').slideUp(850, 'easeInOutExpo');
                        }
                    });
            });
            return false;
        });
    }

    function vosMap() {
        $('#vossen-map').waypoint(function () {
            initVossenMaps()
        }, { offset: '100%', triggerOnce: true });
    }

    function vossenHeader() {
        $('.nav li.dropdown>a, .dropdown-submenu>a').on('click', function () {
            $(this).closest('.dropdown').siblings().removeClass('open');
            $(this).closest('.dropdown').toggleClass('open');
            return false;
        });
        $('.nav li a, .btn-scroll').on('click', function () {
            var $anchor = $(this);
            function scrollToAnchor() {
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - offsetVar
                }, 1000, 'easeInOutExpo');
                event.preventDefault();
            }
            if ($(window).width() > 992) {
                var offsetVar = '59';
                scrollToAnchor();
            } else {
                var offsetVar = '0';
                scrollToAnchor();
            }
        });
        $('.scroll-top').on('click', function () {
            $('html, body').stop().animate({ scrollTop: 0 }, 2000, 'easeInOutExpo');
            return false;
        });
        function elementsAnchor() {
            var hash = window.location.hash;
            if (hash != '') {
                setTimeout(function() {
                    $('html, body').stop().animate({
                        scrollTop: $(hash).offset().top - 59
                    }, 1000, 'easeInOutExpo');
                    history.pushState('', document.title, window.location.pathname);
                }, 500);
            }
        } elementsAnchor();
    }



    // function lightbox() {
    //     $('.lightbox').magnificPopup({
    //         delegate: 'a',
    //         type: 'image',
    //         gallery:{
    //             enabled:true,
    //             arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><img src="img/assets/slider-left-thin-arrow.png"></button>',
    //         },
    //         mainClass: 'mfp-zoom-in',
    //         removalDelay: 500, //delay removal to allow out-animation
    //         callbacks: {
    //             beforeOpen: function() {
    //                 this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
    //             }
    //         },
    //         closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
    //         midClick: true
    //     });
    // }

    $(document).ready(function () {
        $.when(heroContentSlider()).then(heroContentSliderFade());
        //heroSliderOwl();
        //progressBars();
        //progressCircles();
        //teamSlider();
        //countUp();
        //vossenIframes();
        //quoteSlider();
        //parallaxVossen();
        //vossenPortfolio();
        testimonialSlider();
        //clientsSlider();
        contactForm();
        //subscribeForm();
        vosMap();
        sliderOwl();
        vossenHeader();
        //bootstrapTools();
        //twitterFeedSlider();
        //twitterFeedList();
        //countdown();
        //vossenBlogGrid();
        //lightbox();
    });



}(jQuery));
