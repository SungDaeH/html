$(function(){
    $(".navi>li").mouseover(function(){
        $(this).find('.sub').stop().slideDown();
    })
})

$(function(){
    $(".navi>li").mouseout(function(){
        $(this).find('.sub').stop().slideUp();
    })
})

$('.imgslide a:gt(0)').hide();
setInterval(function(){
    $('.imgslide a:first-child').fadeOut()
    .next('a').fadeIn()
    .end().appendTo('.imgslide');
}, 3000)