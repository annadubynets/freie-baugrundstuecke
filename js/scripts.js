$(function() {
    if ($('select').length > 0) {
        $('select').selectpicker();
    }

    $('.navbar-collapse').on('show.bs.collapse', function () {
        $('.navbar-collapse').addClass('expanded');
        $('html').addClass('menu-expanded')
    });
   
    $('.navbar-collapse').on('hidden.bs.collapse', function () {
        $('.navbar-collapse').removeClass('expanded');
        $('html').removeClass('menu-expanded')
    });

    $('.expanded-navbar-toggler').on('click', function(e) {
        e.preventDefault();
        $('.navbar-toggler').trigger('click')
    })
})

if ($('.products .owl-carousel').length > 0) {
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
}

if ($('.partners .owl-carousel').length > 0) {
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
    });
}