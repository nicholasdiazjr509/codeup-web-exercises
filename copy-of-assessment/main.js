/**
 * Write your solutions here
 */
"use strict"
$('#add-borders').mouseover(function(e){
    var element
})
// document.getElementById("#blue-border").addEventListener("mouseover", function() {
//     document.getElementById("#add-borders").style.border= "#blue-border";
// });

//2.
// When an icon that belongs to the carrot class is clicked, change the font color of that icon to the color: orangered.

    $("#content-toggle").click(function () {
        console.log($(this).toggleClass("carrot"));
        if ($(this).css("background-color") === "rgba(0, 0, 0, 0)") {
            $(this).css("background-color", "orangered");
        } else {
            $(this).css("background-color", "transparent");
        }

    });
//.3
//When the button with the id of codeup-btn is clicked,
// the window location should change to any module within the Codeup curriculum,
// the Browser Object Model (BOM) might be a good test.

$('#codeup-btn').click(function () {
    var newUrl = $('codeup.com').val();
    window.open = newUrl;
});


//4.
// When a frog is being double-clicked by the mouse: get the selected data-value attribute value
// from the frog being double-clicked and display it in the element with the id of review-result.
$('.frog').dblclick(function(){
    var dataValue = $(this).attr('data-value');
    $('#review-result').html(dataValue);
});



