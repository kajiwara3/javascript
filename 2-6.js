$(function() {
    $("button#show").click(function(){
//        $("div").show("slow");
        $("div:not(:animated)").show("slow", function(){
            $(this).css("background", "blue");
        });
    });

    $("button#hide").click(function(){
        $("div:not(:animated)").hide("slow");
    });

    $("button#toggle").click(function(){
        $("div:not(:animated)").toggle("slow");
    });
/*
    $("dt").click(function(){
        if ($("dd").css("display") == "block") {
            $("dd:not(:animated)").slideUp("slow");
        } else {
            $("dd").slideDown("slow");
        }
    });
*/
    $("dt").click(function(){
        $("dd:not(:animated)").slideToggle("slow");
    });

});


