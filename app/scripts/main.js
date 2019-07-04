$(document).ready(function () {

    new Swiper ('.about-slider .swiper-container', {
        navigation: {
            nextEl: '.about-slider .swiper-button-next',
            prevEl: '.about-slider .swiper-button-prev',
        },
        effect: 'fade'
    });

    new Swiper ('.reviews-slider .swiper-container', {
        navigation: {
            nextEl: '.reviews-slider .swiper-button-next',
            prevEl: '.reviews-slider .swiper-button-prev',
        },
        slidesPerView: 2,
        spaceBetween: 30,
        breakpoints: {
            // when window width is <= 575px
            575: {
                slidesPerView: 1,
                spaceBetweenSlides: 30
            }
        }
    });

    new Swiper ('.bike-slider .swiper-container', {
        navigation: {
            nextEl: '.bike-slider .swiper-button-next',
            prevEl: '.bike-slider .swiper-button-prev',
        },
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
            // when window width is <= 480px
            480: {
                slidesPerView: 1,
                spaceBetweenSlides: 30
            },
            // when window width is <= 575px
            575: {
                slidesPerView: 2,
                spaceBetweenSlides: 30
            },
            // when window width is <= 992px
            992: {
                slidesPerView: 3,
                spaceBetweenSlides: 30
            }
        }
    });

});
