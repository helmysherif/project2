
$(".menu-toggle").click(function () {
    $("nav").toggleClass("active")
});
$("ul li").click(function () {
    $("this").siblings().removeClass("active");
    $("this").toggleClass("active");
});
new WOW().init();
/*$("body").niceScroll({
  cursorcolor:"#0f0",
  cursorwidth:"10px",
  background:"rgba(20,20,20,0.3)",
});*/
$("ul .sub-menu").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});
function changeColor(){
    document.body.style.background = document.getElementById(id).innerHTML
}
$(window).load(function () {
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: true,
        slideshow: true,
        itemWidth: 180,
        itemMargin: 5,
        asNavFor: '#slider'
    });

    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: true,
        sync: "#carousel"
    });
});
$(".nav1").click(function(){
    $(".p1").fadeIn(1000);
    $(".p2").hide();
    $(".p3").hide();
    $(".p4").hide();
    $(".p5").hide();
  });
  $(".nav2").click(function(){
    $(".p1").hide();
    $(".p2").fadeIn(1000);
    $(".p3").hide();
    $(".p4").hide();
    $(".p5").hide();
  });
  $(".nav3").click(function(){
    $(".p1").hide();
    $(".p3").fadeIn(1000);
    $(".p2").hide();
    $(".p4").hide();
    $(".p5").hide();
  });
  $(".nav4").click(function(){
    $(".p1").hide();
    $(".p4").fadeIn(1000);
    $(".p2").hide();
    $(".p3").hide();
    $(".p5").hide();
  });
  $(".nav5").click(function(){
    $(".p1").hide();
    $(".p5").fadeIn(1000);
    $(".p2").hide();
    $(".p4").hide();
    $(".p3").hide();
  });
// start popup
$(".show-popup").click(function(){
    $($(this).data("popup")).fadeIn();
})
$(".popup").click(function(){
    $(this).fadeOut()
})
$(".popup .inner").click(function(ev){
    ev.stopPropagation();
})
$(".popup .close").click(function(eve){
    eve.preventDefault();
    $(this).parentsUntil(".popup").parent().fadeOut()
})
$(document).keydown(function(e){
    if(e.keyCode == 27)
    {
        $(".popup").fadeOut();
    }
})
// end popup