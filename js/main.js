/* global $, google */
/* global $, Swiper */
/* global jQuery$*/
$(window).on('load', function(){
    $('body.fadeout').removeClass('fadeout');
  });

var posi_top, wih_half, current_view;
$(window).scroll(function () {
    var wih = window.innerHeight;
    var wih_half = wih / 3;
    current_view = $(this).scrollTop() + wih_half;
    set_posi();
});

function set_posi() {

    $(".about-title h2").each(function () {
        var posi = $(this).offset();
        posi_top = posi.top;
        if (current_view+500 > posi_top) {
            $(".about-title h2").addClass("active");
        }
    });
    $(".service-title h2").each(function () {
        var posi = $(this).offset();
        posi_top = posi.top;
        if (current_view+500  > posi_top) {
            $(".service-title h2").addClass("active");
        }
    });
    $(".works-title h2").each(function () {
        var posi = $(this).offset();
        posi_top = posi.top;
        if (current_view+500  > posi_top) {
            $(".works-title h2").addClass("active");
        }
    });
    $(".contact-title h2").each(function () {
        var posi = $(this).offset();
        posi_top = posi.top;
        if (current_view+500  > posi_top) {
            $(".contact-title h2").addClass("active");
        }
    });
 //thank you for watching   
}