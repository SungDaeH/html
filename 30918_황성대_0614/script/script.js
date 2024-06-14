$(document).ready(function(){
    $('.navi>li').mouseover(function(){
        $(this).find('.sub').stop().slideDown();
    });
    $('.navi>li').mouseout(function(){
        $(this).find('.sub').stop().slideUp();
    });

    $(function(){
        let currentIndex = 0;
	$(".slider").hide().first().show();

	setInterval(function(){
    	let nextIndex = (currentIndex+1) % 3;

    	$(".slider").eq(currentIndex).fadeOut(1200);
    	$(".slider").eq(nextIndex).fadeIn(1200);

    	currentIndex = nextIndex;
	}, 3000);

    });

    $(".tabmenu>li>a").click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
        return false;
    })

    $(".notice li:first").click(function(){
        $("#modal").addClass('active');
    });
    $('.btn').click(function(){
        $('#modal').removeClass('active');
    });
});