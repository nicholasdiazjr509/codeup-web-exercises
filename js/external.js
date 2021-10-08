"use strict"

console.log( "Hello from external JavaScript");

alert("Red alert dude!!");

var userInput = prompt("What is your favorite color?");
alert("That's my favorite color too!!");

// var jeff = "Jeff";
// console.log(jeff);
//
// console.log("Hello, im in a separate file!");


// var returnOfConfirm = confirm("Got any plans for the darn weekend?");
// console.log(returnOfConfirm);
//
// var favoriteNuMetalBand = prompt (message) ("What's your favorite nu-metal band?");
// console.log("Ha ha, you like " + favoriteNuMetalBand + "!");
//
// var leastFavoriteSoda = prompt(message)("what is your least favorite soda?");
// var favoriteSoda = prompt(message)("what is your favorite soda")

//     You have rented some movies for your kids: The little mermaid (for 3 days),
//     Brother Bear (for 5 days, they love it),
//     and Hercules (1 day, you don't know yet if they're going to like it).
//     If price for a movie per day is $3, how much will you have to pay?
// var littleMermaid = 3;
// var brotherBear = 5;
// var hercules = 1;
// (littleMermaid + brotherBear + hercules) *3;


// var numberOfDays = prompt ("How many days for movies?");
// console.log("How many days?" + numberOfDays );


//(littleMermaid + brotherBear + hercules) *3;

var littleMermaid ;
var brotherBear ;
var hercules ;

//var priceForMovies = parseFloat(3.00);
var movie = prompt("Which movie did you watch?")


var days = prompt("Enter days: ");
alert("Cost of movie rentals " + (days * 3));


// function priceForMovies(x, y, z);
// console.log(priceForMovies(littleMermaid, brotherBear, hercules));
//  var days = ["littleMermaid" + "brotherBear" + "hercules"];


//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
//     they pay you a different rate per hour.
//     Google pays $400,
//     Amazon $380,
//     and Facebook $350.
//     How much will you receive in payment for this week?
//     You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var google = 400;
var amazon = 380;
var facebook = 350;


var company =prompt("Which company worked at? ")
var perHour = prompt("Enter hours: ");
alert(perHour*(google || amazon || facebook));

// alert(perHour * (google || amazon || facebook));



