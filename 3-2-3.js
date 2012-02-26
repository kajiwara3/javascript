$(function(){
    $("#navi a").click(function(){
        $("#main img").before("<img src='"+$(this).attr("href")+"' alt=''>");
        $("#main img:last").fadeOut("fast",function(){
            $(this).remove();
        });
        return false;
    })
    $("img.next").click(function(){
        $("#navi .pageWrap").animate({
            marginLeft : parseInt($("#navi .pageWrap")
            .css("margin-left")) - 300 + "px"}, "fast");
    });

    $("img.prev").click(function(){
        $("#navi .pageWrap").animate({
            marginLeft : parseInt($("#navi .pageWrap").css("margin-left")) + 300 + "px"
        }, "fast");
    });
});

