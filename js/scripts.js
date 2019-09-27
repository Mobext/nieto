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
    $('#page-loader').fadeOut(500);
});
