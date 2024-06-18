$(document).ready(function () {
    $(".nav>li").mouseover(function () {
        $(this).find('.sub').stop().slideDown();
    });
    $(".nav>li").mouseout(function () {
        $(this).find('.sub').stop().slideUp();
    });
})