$(".navi>li").mouseover(function(){
    $(this).find('.sub').stop().slideDown();
});
$(".navi>li").mouseout(function(){
    $(this).find('.sub').stop().slideUp();
});

setInterval(function(){
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginLeft:-1200});
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginLeft:-2400});
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginLeft:0});
    $(".slidelist").delay(2000);
})

$('.tabmenu>li>a').click(function(){
    $(this).parent().addClass("active").siblings().removeClass("active");
    return false;
})

$(".notice li:first").click(function(){
    $("#modal").addClass('active');
});

$(".btn").click(function(){
    $("#modal").removeClass('active');
});