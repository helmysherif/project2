$(document).ready(function(){
    $(".form").animate({
        top:'100px',
    },1000)
    $(".form").animate({
        width:'50%'
    },1000)
    $(".form").animate({
        height:'350px'
    },1000,function(){
        $(".input1").animate({
            left:'0px',
        },1000)
        $(".input2").animate({
            left:'0px',
        },1000)
        $(".form-check").animate({
            top:'0px',
        },1000)
        $(".btn").animate({
            top:'0px',
        },1000)
    })
    
})