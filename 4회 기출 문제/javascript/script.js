$(".navi>li").mouseover(function(){
    $(this).find('.sub').stop().slideDown();
});

$(".navi>li").mouseout(function(){
    $(this).find('.sub').stop().slideUp();
});

setInterval(function(){
    $('.slidelist').delay(3000);
    $('.slidelist').animate({marginTop : -300});
    $('.slidelist').delay(3000);
    $('.slidelist').animate({marginTop : -600});
    $('.slidelist').delay(3000);
    $('.slidelist').animate({marginTop : 0});
    $('.slidelist').delay(3000);
})

$(".tabmenu>li>a").click(function(){
    $(this).parent().addClass('active').siblings().removeClass('active');
    return false;
});