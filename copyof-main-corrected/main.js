/**
 * Write your solutions here
 */



    //??
    // $('.change-bg-color').on('click', function () {
    //     $('body').css('background-color', '#00f')
    // })
    //
    // $('.btn').on('click', function () {
    //     $('body').css('background', '#ff0')
    //     $('body').css('color', '#00f')
    //
    // })
"use strict"

$("#change-bg-color").click(function () {
    $('body').css('background-color', 'blue');
});

$('.btn').click(function () {
    $(this).css('background-color', '#93f2e5')
});


$('#reset-btn').click(function () {
    location.reload();
});

$('.star').hover(function () {

    var dataValue = $(this).attr('data-value');
        $('#review-result').html(dataValue);
});
// $(function () {
//     $('#go-to-btn').click(function() {
//         var url = "http://www.google.com/search?q=";
//         url += $('#custom-url').val();
//         window.open('_blank');
//     });
// });


// $(function (){
//     $('#go-to-btn').click(function () {
//         var url = "custom-url";
//         url += $('#custom-url').val();
//         var win = window.open(url, '_blank');
//         win.focus()
//         // $("#custom-url").val();
//         // window.open('');
//         //window.open('#custom-url', ' input.value')
//         //   window.location = '#custom-url';
//     });

// $("#go-to-btn").on("click",function(){
//     var redirectWindow = window.open('http://#custom-url', '_blank')
//     window.open('google.com','_blank');
$('#go-to-btn').click(function(){
    var newUrl = $('#custom-url').val();
    window.open = newUrl;
});
// $("#go-to-btn").click(function() {
//     //var go = $("#custom-url").val();
//     //location = go;
//     var go = " https: ".$("#custom-url").val();
//     window.location = go
// });

// $('#go-to-btn').on('click', function(event) {
//
//     $(this).attr('href', "http://someurl.com");
//     $(this).trigger('click');
// });

    $("#append-to-ul").click(function () {
        var newLi = "<li>text</li>"
        $('#append-to-me').append("<li>text</li>");

    });
    $(document).ready(function () {
        setTimeout(function () {
            $("#message").text("Hello, Everyone!");
        }, 2000);
    });

    // var count = 0;
    // var li = $("#h1-toggle> li");
    //
    // $(li).click(function () {
    //     count++;
    //     console.log(count);
    //     if (count % 2 !== 0) {
    //         $(this).css("background-color", "yellow");
    //     } else {
    //         $(this).css("background-color", "transparent");
    //     }
    // });
$("#h1-toggle li").click(function(){
    console.log($(this).toggleClass("star"));
    if($(this).css("background-color") === "rgba(0, 0, 0, 0)") {
        $(this).css("background-color", "yellow");
    }else{
        $(this).css("background-color", "transparent");
    }
});

    $("#upcase-name").click(function () {
        var input = $("#input").val();
        var output = "Your name in upper case is: " + input.toUpperCase();
        $("#output").text(output);
    });

    // $('#font-grow li').dblclick(function (e) {
    //     var currentFontSize;
    //     currentFontSize = parseInt("currentFontSize");
    //      var doubleFontSize = currentFontSize * 2 + "px";
    //
    //  $(e.target).css("font-size", doubleFontSize);
    //
    // });

$('#font-grow li').dblclick(function () {
    var fontSize = parseInt($(this).css("font-size"));
    fontSize = (fontSize * 2) + "px";
    $(this).css('font-size', fontSize);

});

function changeBackground() {
    var color = document.getElementById("color").value; // cached

    // The working function for changing background color.
    document.backgroundColor = color;

    // The code I'd like to use for changing the text simultaneously - however it does not work.
    document.getElementById("coltext").style.color = color;
}

document.getElementById("submitColor").addEventListener("click", changeBackground, false);