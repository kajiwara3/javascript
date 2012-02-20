$(function(){
    $("img").toggle(function(){
        $("img").attr("src", "soreiyu_jk.gif").attr("alt", "うみ");
    },function(){
        $("img").attr("src", "kuroi_jk.gif").attr("alt", "やま");
    });
});