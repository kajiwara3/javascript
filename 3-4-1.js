$(function(){
    $("ul.panel li:not(" + $("ul.tab li a.selected").attr("href")    + ")").hide();
    $("ul.tab li a").click(function(){
        // 全体のselectを削除
        $("ul.tab li a").removeClass("selected");
        // 指定のタブにselectedを設定
        $(this).addClass("selected");
        // 全体の表示を隠す
        $("ul.panel li").slideUp("fast");
        // 指定のパネルを表示
        $($(this).attr("href")).slideDown("fast");
        return false;
    });
});