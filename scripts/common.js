console.log('Hello! I m Dipos 😊.')

function getScreenName() {
    var screenSize = window.getComputedStyle(document.getElementsByClassName('page')[0], ':after').content.split('"')[1];
    return screenSize;
}

var $header = $('.header');
var $page = $('.page');
var $footer = $('.footer');
var $window = $(window);
var windowTop;
var windowTopOld = windowTop;
var windowBottom;
var clearZone = 70;

function getActualSizes() {
    windowHeight = $window.outerHeight();
    windowTop = $window.scrollTop();
    windowBottom = windowTop + windowHeight;
    footerTop = $footer.position().top;
}

$window.scroll(function(){
    windowTopOld = windowTop;
    getActualSizes();

    if (windowTopOld < windowTop && windowTop > clearZone) {
        $header.removeClass('is-visible').addClass('is-hidden');
        $('.js-header-city').removeClass('is-active')
    } else {
        $header.removeClass('is-hidden').addClass('is-visible');
    }

    /*if(!$header.data('hidden') && windowTop > 0) {
        $header.addClass('is-hidden');
    }

    if(!$header.data('hidden') && windowTop == 0) {
        $header.removeClass('is-hidden');
    }*/
}).trigger("scroll");


if( $(".js-nav-list").length) { 

    $(".js-nav-list").find(".nav__link--has-submenu").click(function() {

        $(this).next(".nav__subnav").find(".nav__sublist").toggleClass("is-active");
        $(this).next(".nav__subnav").toggleClass("is-active");
        $(this).toggleClass("is-active");
    })
}

if( $(".js-header-city").length) { 

    var $city = $('.js-header-city');
    var $cityCover = $('.city__cover');
    var $cityMobileClose = $('.city__mobile-close');
    var $citySelect = $('.city__select');

    $(".js-city-actual").click(function() {
        $city.toggleClass('is-active');
    })

    $(".js-close-city-select").click(function() {
        $city.removeClass('is-active');
    })

    $cityCover.click(function() {
        $city.removeClass('is-active');
    })

    $cityMobileClose.click(function() {
        $city.removeClass('is-active');
    })
}

if ($(".js-faq-item-question").length) {

    var questionItem = $('.js-faq-item-question');

    questionItem.each(function () {
        $(this).on('click', function () {
            if ($(this).hasClass('is-active')) {
                $(this).removeClass('is-active');

            } else {
                $(this).addClass('is-active');
            }
        });
    });
}

if( $('.js-intro-slider').length ) {
    const swiper = new Swiper('.js-intro-slider .swiper', {
        spaceBetween: 20,
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });
}

if( $('.js-news-slider ').length ) {
    const swiper = new Swiper('.js-news-slider .swiper', {
        spaceBetween: 20,
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });
}

/*if( $('.js-slider-gallery').length ) {
    const swiper = new Swiper('.js-slider-gallery .swiper', {
        spaceBetween: 0,
        slidesPerView: 3,
        grabCursor: true,
        loop: true,
        breakpoints: {
            767: {
                slidesPerView: 5,
            },
            1400: {
              slidesPerView: 7,
            },
        }
    });
}*/

if( $('.js-gallery-thumbs').length ) {

    var swiper = new Swiper(".js-gallery-thumbs .swiper", {
        spaceBetween: 0,
        slidesPerView: 3,
        grabCursor: true,
        loop: true,
        breakpoints: {
            767: {
                slidesPerView: 5,
            },
            1400: {
              slidesPerView: 7,
            },
        },
        watchSlidesProgress: true
    });
    var swiper2 = new Swiper(".js-gallery-fullscreen .swiper", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        effect: "fade",
        loop: true,
        thumbs: {
            swiper: swiper,
        },
    });

    $('.js-gallery-thumbs').click(function() {
        $('.gallery__fullscreen').addClass('is-active');
        $('.page').addClass('popup-is-open');
    })

    $('.js-gallery-close').click(function() {
        $('.gallery__fullscreen').removeClass('is-active');
        $('.page').removeClass('popup-is-open');
    })
}


if( $('.js-slider-cards').length ) {    

    var sliders = document.querySelectorAll('.js-slider-cards .swiper');

    sliders.forEach((slider) => {

        let swiper = new Swiper(slider, {
            slidesPerView: "1",
            spaceBetween: 16,
            breakpoints: {
                767: {
                    slidesPerView: "2",                
                },
                1023: {
                    //spaceBetween: 0,
                }
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            }
        });    

    })
}

if( $('.js-slider-cards-segments').length ) {    

    const swiper = new Swiper('.js-slider-cards-segments .swiper', {
        slidesPerView: "2",
        slidesPerGroup: "2",
        spaceBetween: 8,
        freeMode: true,
        //touchRatio: 1,
        breakpoints: {
            767: {
                slidesPerView: "3", 
                slidesPerGroup: "3",
                spaceBetween: 8              
            },
            1023: {
              spaceBetween: 0,
            }
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    }); 
}

if( $('.js-tabs').length ) {

    $('.js-tabs').each(function() {
        let ths = $(this);
        ths.find('.tabs__content-item').not(':first').hide().removeClass('is-active');
        ths.find('.tabs__nav-item').click(function() {
            ths.find('.tabs__nav-item').removeClass('is-active').eq($(this).index()).addClass('is-active');
            ths.find('.tabs__content-item').hide().removeClass('is-active').eq($(this).index()).fadeIn().addClass('is-active')
        }).eq(0).addClass('is-active');
    });

    var nameItem = $('.tabs__content-nav');

    nameItem.each(function () {

        var nameItemParent = $(this).closest('.tabs__content-item')

        $(this).on('click', function () {
            nameItemParent.toggleClass('is-active')
        });
    });
}

if( $('.js-button-burger').length ) {

    $('.js-button-burger').click(function() {
        $(this).toggleClass('is-active');
    })
}

if( $('.js-popup-open-link').length ) {

    $('.js-popup-open-link').click(function(){
        let popupID = $(this).attr('data-popup');

        $('body').find('#' + popupID).addClass('popup--open').removeClass('is-hidden');
        $('.page').addClass('popup-is-open');

        if ($('.popup__video').length) {
            $('body').find('#' + popupID).find('.popup__video').get(0).play();
        }
    })  

    $('body').on('click','.js-popup-close', function(){
        $(this).closest('.popup').removeClass('popup--open').addClass('is-hidden');
        $('.page').removeClass('popup-is-open');    

        if ($('.popup__video').length) {
            $(this).closest('.popup').removeClass('popup--open').find('.popup__video').get(0).pause();
        }
    })
}

if( $('.js-parallax').length ) {  

    var parallaxLine = $('.js-parallax');

    $(window).on("load scroll", function() {
        var parallaxElement = $(".values__line--first"),
            parallaxQuantity = parallaxElement.length;

        window.requestAnimationFrame(function() {
            for (var i = 0; i < parallaxQuantity; i++) {
                var currentElement = parallaxElement.eq(i),
                windowTop = $(window).scrollTop(),
                elementTop = currentElement.offset().top,
                elementHeight = currentElement.height(),
                viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
                scrolled = windowTop - elementTop + viewPortHeight;

                currentElement.css({
                    transform: "translateX(" + scrolled * -0.15 + "px)"
                });
            }
        });
    });

    $(window).on("load scroll", function() {
        var parallaxElement = $(".values__line--second"),
            parallaxQuantity = parallaxElement.length;

        window.requestAnimationFrame(function() {
            for (var i = 0; i < parallaxQuantity; i++) {
                var currentElement = parallaxElement.eq(i),
                windowTop = $(window).scrollTop(),
                elementTop = currentElement.offset().top,
                elementHeight = currentElement.height(),
                viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
                scrolled = windowTop - elementTop + viewPortHeight;

                currentElement.css({
                    transform: "translateX(" + scrolled * 0.15 + "px)"
                });
            }
        });
    });
}

if( $('.js-gallery').length ) {  

    var galleryLine = $('.js-gallery');

    $(window).on("load scroll", function() {
        var parallaxElement = $(".gallery__line"),
            parallaxQuantity = parallaxElement.length;

        window.requestAnimationFrame(function() {
            for (var i = 0; i < parallaxQuantity; i++) {
                var currentElement = parallaxElement.eq(i),
                windowTop = $(window).scrollTop(),
                elementTop = currentElement.offset().top,
                elementHeight = currentElement.height(),
                viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
                scrolled = windowTop - elementTop + viewPortHeight;

                currentElement.css({
                    transform: "translateX(" + scrolled * -0.5 + "px)"
                });
            }
        });
    });
}

if( $('.js-filter-button').length ) {

    $('.js-filter-button').click(function() {
        $('.vacancies__filter').addClass('is-active');
    })

    $('.js-filters-close').click(function() {
        $('.vacancies__filter').removeClass('is-active');
    })
}

if( $('.js-audio').length ) {  

    $('.js-audio audio').audioPlayer();
    $('.audioplayer-playpause').click(function() {
        $('.audio').addClass('is-active');
    })
}

if( $('.js-textarea').length ) {  
    autosize($('.js-textarea'));
}

/*if ($('.js-start-video').length) {

    //var $videoBox = $('.js-product-video');
    var $videoButton = $videoBox.find('.js-start-video');
    //var $videoPlaceholder = $videoBox.find('.product-video__placeholder');
    var $videoPlayer = $videoBox.find('.product-video__player');

    $videoButton.on('click', function(){
        $videoPlaceholder.addClass('product-video__is-hidden');
        $('.product-video__player').addClass('is-play');
        $('.product-video__player')[0].play();
    })

    $videoPlayer.on('click', function(){
        $videoPlaceholder.removeClass('product-video__is-hidden');
        $(this).get(0).pause();
        $(this).removeClass('is-play');
    })
}*/

// (window).resize
$(window).resize(function(){ 
});
