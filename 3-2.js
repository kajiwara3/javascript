$(function(){
   $("#navi a").click(function() {
       $("#main img").before("<img src='" + $(this).attr("href") + "' alt=''>");
       $("#main img:last").fadeOut("fast", function(){
           $(this).remove();
       });
       return false;
   });
});