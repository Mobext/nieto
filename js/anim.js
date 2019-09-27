$(document).ready(function() {

    $( ".know-more" ).click(function() {
        $('html, body').animate({ scrollTop: $(".anclaKnowmore").offset().top-100 }, 1200);
    });


    $( ".menu-mobile" ).click(function() {
        $(".content-menu-mobile").fadeIn(500);
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
        $(".content-menu-mobile").fadeOut(500);
        $(".content-menu-mobile nav a").animate({opacity: 0}, 100);
    });

    
    
    
    

});

