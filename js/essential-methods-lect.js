$(document).ready(function(){//no arguements with no methods in it
    var heading = $("#heading").html();
    //alert(heading);
    var cardContents = $('.card').html();
    //alert(cardContents);
     //$("p").addClass("highlighted");//highlights only 1st paragraph


    $('.card').html("<h2> Howdy from Javscript</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odit rem unde. Blanditiis corporis dolore dolorem dolorum exercitationem facilis fugiat illum maiores mollitia omnis possimus saepe similique unde veniam, voluptatibus!</p>");

   // alert($("#box").css("width"));
    // alert($("#box").css(""));

    $("#box").css("background", "cadetblue");
    $("#box").css("background", "orangered").css("border-color", "darkslateblue");
    $("#box").css({
        'background': 'papayawhip',
        'border-color': 'saddlebrown',
        'width': '150px'

    });
    $("p").addClass("highlighted").addClass("underline"); //affects all paragraphs// do not work retroactively  .add class etc.

    $("highlighted").click(function (){
        $(this).removeClass("highlighted");
    });

    $('p').click(function (){
       $(this).toggleClass("underline");
    });
});