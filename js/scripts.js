//CAMBIA EL HEADER EN SCROLL
$(function() {
    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        if(scrollTop > 200) {
            $('header').addClass('menu-scroll');
        } else {
            $('header').removeClass('menu-scroll');
        }
    });
});

//OCULTA LAS REDES FIXED
$(window).scroll(function(){
var threshold = 200; // number of pixels before bottom of page that you want to start fading
var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
    if( op <= 0 ){
        $(".fixed-option").hide();
    } else {
        $(".fixed-option").show();
    }
    $(".fixed-option").css("opacity", op ); 
});

//PRELOAD
$(window).load(function(){
    //$('#page-loader').animate({ height: '0%' , opacity: 0 }, 1000);
    // $('#page-loader').slideUp(1500, "easeInOutQuart");
    // $('.document-opacity').animate({ marginTop: '0vw' , opacity: 1 }, 1200);
    $('#page-loader').animate({ height: '0%' }, { duration: 1600, queue: false, easing: 'easeInOutBack' })
    $('#page-loader .logo').fadeOut(800);
    $('.document-opacity').animate({ marginTop: '0vw', opacity: 1 }, { duration: 1500, queue: false, easing: 'easeInOutBack' })
    $('header').delay(400).animate({ top: '0px' , opacity: 1 }, 600);
    $('.fixed-option ').animate({ right: '0px'}, 500);
    $('.overlay-video').animate({ top: '0%'}, { duration: 1300, queue: false, easing: 'easeInOutBack' })
    $('.foto-fondo ').animate({ top: '0%' }, { duration: 1300, queue: false, easing: 'easeInOutBack' })
});
