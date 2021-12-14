// $(document).ready(function(){
// var output = $("#heading").html();

$("ul").each(function(){
    $(this).children().first().css("font-weight", "bold")
});
// $("li").last().html("Remember me!");
//
// $("#start-here").parent().parent().first().next().css("border", "solid 5px rebeccapurple");


$("#state-parks-toggle").click(function(){
    $('#state-parks-texas').slideToggle();
})

$('#national-parks-toggle').click(function(){
    $('#national-parks').fadeToggle("slow", "linear");
});
$("dt").each(function() {
    $("dt").on("click", function () {
        $(this).next().slideToggle();
    })
});

$("li").click(function(){
    $("ul").each(function(){
        $(this).children().first().css("color", "blue")

    })
});
$("h3").click(function(){
    $("ul").each(function(){
        $(this).children().css("font-weight", "bold")
    })
});
$("dd").addClass("invisible");

$("button").click(function(){
    $("dd").toggleClass("invisible")
});
$("btn-1").click(function() {
    $("ul").each(function(){
        $(this).children().last().css({"background-color": "yellow", "width": "10%"})
    } )
});



