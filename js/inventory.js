$(".menu-toggle").click(function () {
    $("nav").toggleClass("active")
});
$("ul li").click(function () {
    $(this).siblings().removeClass("active");
    $(this).toggleClass("active");
});
new WOW().init();
/*$("body").niceScroll({
  cursorcolor:"#0f0",
  cursorwidth:"10px",
  background:"rgba(20,20,20,0.3)",
});*/
$("ul .sub-menu").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
});
function changeColor() {
    document.body.style.background = document.getElementById(id).innerHTML
}
$(".one").click(function(event){
    event.preventDefault();
    $(".first-page").show();
    $(".second-page").hide();
})
$(".two").click(function(event2){
    event2.preventDefault();
    $(".second-page").show();
    $(".first-page").hide();
})