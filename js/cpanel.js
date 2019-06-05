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
$("ul .sub-menu").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
});

function changeColor() {
    document.body.style.background = document.getElementById(id).innerHTML
}
$(document).ready(function() {
    $('#example').DataTable();
} );
