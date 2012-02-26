$(function(){
   $("button").click(function(){
       $("div").load("./sample2_load.html p");
   });

   $.ajax({
      url: 'sample3.xml',
      dataType: 'xml',
      success: function(data){
          $("item", data).each(function(){
              $("dl").append("<dt><a href='" + $("link", this).text() + "'>"
                      + $("title", this).text() + "</a></dt><dd>"
                      + $("description", this).text() + "</dd>");
          });
      }
   });
});