$("#change-bg-color").click(function(){
    $("body").css("background-color", "blue");
});

$(".btn").click(function(){
    $(this).css("background-color", "#93f2e5");

    });


$("#reset-btn").click(function(){
    location.reload();
 });
//similar problem  .attr() method
$(".fa-star").mouseenter(function(){
    var value = (this).attr("data-value");
$("#review-result").html(value);
});

$("#go-to-btn").click(function(){
    //var go = $("#custom-url").val();
    //location = go;
    var go = " https: ".$("#custom-url").val();
     window.location = go   //or replace??
});
$("#append-to-ul").click(function(){
    $("append-to-me").append("<li>text</li>");
});
setTimeout(function(){
    $("#message").html("Hello, Everyone!")   // or text for html
}, 2000);

$("#hl-toggle li").click(function(){
    console.log($(this).toggleClass("star"));
    if($(this).css("background-color") === "rgba(0, 0, 0, 0)") {
        $(this).css("background-color", "yellow");
    }else{
        $(this).css("background-color", "transparent");
    }
});
/**another solution */
// $("<style> .yellowHighlight{ background-color:yellow;} </style>").appendTo("head");
// $('#hl-toggle > li').click(function(){
//     $(this).toggleClass('yellowHighlight');
// });
$("#upcase-name").click(function(){
    var name = $("#input").val().toUpperCase();
    $("#output").html("Your name uppercased is: " + name);
});

$("#font-grow li").dblclick(function(){
    var size = parseInt($(this).css("font-size"));// remove numbers with parseInt
    size *= 2;
   // size += "px"
    $(this).css("font-size", size + "px");


})