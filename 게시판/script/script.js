$(document).ready(function(){
    $(".nav>li").mouseover(function(){
        $(".sub, #menu_bg").stop().slideDown();
    }).mouseout(function(){
        $(".sub, #menu_bg").stop().slideUp();
    });

    $('.imgslide a:gt(0)').hide();
    setInterval(function(){
        $(".imgslide a:first-child")
        .fadeOut()
        .next('a')
        .fadeIn()
        .end()
        .appendTo(".imgslide");
    }, 3000);
})