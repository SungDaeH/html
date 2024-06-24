$(".nav>li").mouseover(function(){
    $(".sub").stop().fadeIn();
});

$(".nav>li").mouseout(function(){
    $(".sub").stop().fadeOut();
});


var i = 0;

function slidelist(){
    if(i<2){
        i++;
    }else{
        i = 0;
    }

    $(".slidelist ul li").fadeOut();
    $(".slidelist ul li").eq(i).fadeIn();
}

setInterval(slidelist, 3000)

$(".tabmenu>ul>li>a").click(function(){
    $(this).parent().addClass("active").siblings().removeClass("active");
    return false;
});