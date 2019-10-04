$(document).ready(function() {

    $( ".know-more" ).click(function() {
        $('html, body').animate({ scrollTop: $(".anclaKnowmore").offset().top-100 }, 1200);
    });

    $( ".flecha-bajar" ).click(function() {
        $('html, body').animate({ scrollTop: $(".anclaFlechabajar").offset().top-100 }, 1200);
    });

    $( ".btn-more2" ).click(function() {
        $('html, body').animate({ scrollTop: $(".anclaPremios").offset().top-100 }, 1200);
    });

    
    


    $( ".menu-mobile" ).click(function() {
        //$(".content-menu-mobile").animate({ top: '0%'}, 500);
        $('.content-menu-mobile').animate({ top: '0%' }, { duration: 1200, queue: false, easing: 'easeInOutQuart' })
        $(".content-menu-mobile").css("display", "flex");
        $(".content-menu-mobile nav a:nth-child(1)").delay(200).animate({opacity: 1}, 400);
        $(".content-menu-mobile nav a:nth-child(2)").delay(350).animate({opacity: 1}, 400);
        $(".content-menu-mobile nav a:nth-child(3)").delay(500).animate({opacity: 1}, 400);
        $(".content-menu-mobile nav a:nth-child(4)").delay(650).animate({opacity: 1}, 400);
        $(".content-menu-mobile nav a:nth-child(5)").delay(700).animate({opacity: 1}, 400);
        $(".content-menu-mobile nav a:nth-child(6)").delay(750).animate({opacity: 1}, 400);
        $(".content-menu-mobile nav a:nth-child(7)").delay(900).animate({opacity: 1}, 400);
    });

    $( ".content-menu-mobile .close" ).click(function() {
        $('.content-menu-mobile').animate({ top: '-100%'}, { duration: 1200, queue: false, easing: 'easeInOutQuart' })
        $(".content-menu-mobile nav a").animate({opacity: 0}, 500);
    });



});

