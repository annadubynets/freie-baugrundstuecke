$(function() {
    if ($('select').length > 0) {
        $('select').selectpicker();
    }
})

$('.products .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        768: {
            items: 2,
            nav: true
        },
        992: {
            items: 3,
            nav: true,
            loop: false
        }
    }
})

$('.partners .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2,
            nav: true
        },
        768: {
            items: 3,
            nav: true
        },
        992: {
            items: 5,
            nav: true,
            loop: false
        }
    }
})