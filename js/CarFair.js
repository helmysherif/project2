$(".down").click(function () {
    $(".menu1").toggle();
});
$(".down1").click(function () {
    $(".menu2").toggle();
});
$(".menu-toggle").click(function () {
    $("nav").toggleClass("active")
});
$(".nav-item").click(function () {
    $(this).siblings().removeClass("active");
    $(this).toggleClass("active");
});
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
// dfgrbhgfbgfb

// Params
var sliderSelector = '.swiper-container',
    options = {
      init: false,
      speed:800,
      slidesPerView: 3, // or 'auto'
      slidesPerColumn: 2,
      slidesPerGroup:3,
      spaceBetween: 5,
      grabCursor: true,
      autoplay: {
        delay:3000
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1023: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      },
      // Events
      on: {
        init: function(){
          this.autoplay.stop();
        },
        imagesReady: function(){
          this.autoplay.start();
          this.el.classList.remove('loading');
        }
      }
    };
var mySwiper = new Swiper(sliderSelector, options);

// Initialize slider
mySwiper.init();
//fdgdfgbdfbfb
$(function () {
    $(".colors li").on('click', function () {
        $(":root").css("--maincolor", $(this).data("color"));
        $(":root").css("--maincolor2", $(this).data("color"));
        $(":root").css("--maincolor4", $(this).data("color"));
    });
});
$(".nav1").click(function () {
    $(".p1").fadeIn(1000);
    $(".p2").hide();
    $(".p3").hide();
});
$(".nav2").click(function () {
    $(".p1").hide();
    $(".p2").fadeIn(1000);
    $(".p3").hide();
});
$(".nav3").click(function () {
    $(".p1").hide();
    $(".p3").fadeIn(1000);
    $(".p2").hide();
});
$(".drop5").click(function () {
    $(".drop6").slideToggle();
    $(".drop8").hide();
    $(".drop10").hide();
    $(".drop12").hide();
});
$(".drop7").click(function () {
    $(".drop8").slideToggle();
    $(".drop6").hide();
    $(".drop10").hide();
    $(".drop12").hide();
});
$(".drop9").click(function () {
    $(".drop10").slideToggle();
    $(".drop8").hide();
    $(".drop6").hide();
    $(".drop12").hide();
});
$(".drop11").click(function () {
    $(".drop12").slideToggle();
    $(".drop8").hide();
    $(".drop10").hide();
    $(".drop6").hide();
});
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        }
    }
});
new WOW().init();
/*$("body").niceScroll({
  cursorcolor:"#0f0",
  cursorwidth:"10px",
  background:"rgba(20,20,20,0.3)",
  zindex:"100000"
});*/
$("ul .sub-menu").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
});

function changeColor() {
    document.body.style.background = document.getElementById(id).innerHTML
}
// scroll to top button
$(window).scroll(function () {
    // scroll to top button
    var scrolltotop = $(".scroll-to-top");
    if ($(window).scrollTop() >= 200) {
        if (scrolltotop.is(':hidden')) {
            scrolltotop.fadeIn(400);
        }
    } else {
        scrolltotop.fadeOut(400);
    }
});
$(".scroll-to-top").click(function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: 0
    }, 1000)
})
// start popup
$(".show-popup").click(function () {
    $($(this).data("popup")).fadeIn();
})
$(".popup").click(function () {
    $(this).fadeOut()
})
$(".popup .inner").click(function (ev) {
    ev.stopPropagation();
})
$(".popup .close").click(function (eve) {
    eve.preventDefault();
    $(this).parentsUntil(".popup").parent().fadeOut()
})
$(document).keydown(function (e) {
    if (e.keyCode == 27) {
        $(".popup").fadeOut();
    }
})
// end popup