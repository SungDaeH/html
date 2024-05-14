$(function(){
    $(".tabmenu>li>a").click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
        return false;
    });
})

$('.notice li:first').click(function(){
    $("#modal").addClass('active');
});

$('.btn').click(function(){
    $("#modal").removeClass('active');
});