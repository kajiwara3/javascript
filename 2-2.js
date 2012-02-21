$(function(){
    $("img").mouseover(function(){
        $(this).attr("src", "soreiyu_jk.gif").attr("alt", "うみ");
    }).mouseout(function(){
        $(this).attr("src", "kuroi_jk.gif").attr("alt", "やま");
    });
});