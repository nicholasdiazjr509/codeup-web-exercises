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

var littleMermaid = prompt("How many days did you rent The Little Mermaid?");
var brotherBear = prompt("How many days did you rent Brother Bear?");
var hercules = prompt("How many days did you rent hercules?");
var costOfMovies = prompt("How much per day?")
//Could have used Parse

var littleMermaidCost = Number(littleMermaid) * Number(costOfMovies);
var brotherBearCost = Number(brotherBear) * Number(costOfMovies);
var herculesCost = Number(hercules) * Number(costOfMovies);
var totalRental = littleMermaidCost + brotherBearCost + herculesCost;
alert (" Your total rental is: " + totalRental);

//
//var priceForMovies = parseFloat(3.00);
//var movie = prompt("Which movie did you watch?")
//alert(movie);

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
//-----------------------------------------------------------------------//

// A student can be enrolled in a class only if the class is not full and the class
// schedule does not conflict with her current schedule.
//
// var classNotFull = true;
// var classConflict = true;
// var classFull = true;

// var enrolled = classNotFull && classConflict;
var classNotFull = confirm("Does the classroom have room? ");
console.log(classNotFull);

var scheduleNotConflict = confirm("Do you have availability at 8am")

var enroll = classNotFull && scheduleNotConflict;
alert("Yes, you can enroll " + enroll);

// var classAt8am = false;
// var classSize = 25;
// var currentClassSize = 18;
// var canRegister = (currentClassSize < classSize) && !classAt8am;

//_____________________________________________________________________//

// var hasPremium = true;
// var cartSize = 6;
// var offerValid = true;

// var canHaveDiscount = offerValid && (cartSize > 2 || hasPremium);
// premiumMember = true;
// offerValid = true;
// moreThanTwo => 2 && offerValid == true;

//A product offer can be applied only if a person buys more than 2 items,
// and the offer has not expired.
// Premium members do not need to buy a specific amount of products.

// var productOffer >2;
// var offerNotExpired;

var offerNotExpired = confirm("Is the offer not expired");
console.log(offerNotExpired);

var moreThanTwo = confirm("Bought 2 or more items?")
console.log(moreThanTwo);

var premiumMember = confirm("Premium member and bought 2 or more items?");
console.log(premiumMember);

var productOffer = (offerNotExpired && (moreThanTwo || premiumMember));

var discountApplied = alert("Discount may be applied" + productOffer);
console.log(discountApplied);



//______________________________________________________________________//
// password must be at least 5 characters
//the password must not include the username
// var username = 'codeup';
// var password = 'notastrongpassword';
// var atLeastFivePassword = password.length >= 5;
//
// var atLeastFivePassword =prompt("Enter password: " );
// //var usernameNotInPassword = password.indexOf(username) === -1;
// // var usernameNotInPassword = ! password.includes(username);
//
// // the username must be no more than 20 characters
//  var userNameNotaParagraph = username.length <= 20;
//  var username.length <= 20;
//
// // neither the username or password can start or end with whitespace
// var whitespace = username.trim() && password.trim();
// var noWhitespace = username.trim() === username && password.trim() === password;
//
// username.trim();
// password.trim();

// console.log(password);
// console.log(username);
// console.log(password.length);



