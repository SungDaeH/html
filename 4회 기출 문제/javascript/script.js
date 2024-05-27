$(".navi>li").mouseover(function(){
    $(this).find('.sub').stop().slideDown();
});

$(".navi>li").mouseout(function(){
    $(this).find('.sub').stop().slideUp();
});