$(function(){
    $("div.tooltip").css("opacity", '0.9').hide();
    $("a").mouseover(function(){
        $("div.tooltip").fadeIn().css({
            "top":$(this).offset().top-20+"px",
            "left":$(this).offset().left+$(this).width()+"px"
        });
    }).mouseout(function(){
        $("div.tooltip").fadeOut();
    });
});