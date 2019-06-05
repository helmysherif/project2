$(".navbar li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});
$(".num").counterUp({delay:10,time:1000})
