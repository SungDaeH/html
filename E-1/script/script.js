$(".nav>li").mouseover(function(){
    $(this).find(".sub").stop().slideDown();
});

$(".nav>li").mouseout(function(){
    $(this).find(".sub").stop().slideUp();
});

var i = 0;

function slidelist(){
    if(i<2){
        i++;
    }else{
        i=0;
    }

    $(".slidelist ul li").fadeOut();
    $(".slidelist ul li").eq(i).fadeIn();
}

setInterval(slidelist, 3000)