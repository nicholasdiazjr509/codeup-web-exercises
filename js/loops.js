"use strict"

var areWeThereYet;

while(!areWeThereYet){
    areWeThereYet = confirm("Are we there yet?")
}

var haveToy = confirm("Can I have the toy, please?!");

while (!haveToy){
    haveToy = confirm("Please?!");

}
if(haveToy){
    alert("thanks, mom! You're the best");
}


var haveEmail = confirm("Hey, wanna sign up for discounts?");
   var userEmail;

   while(!haveEmail){
       haveEmail = confirm("Please?!");
   }
   if(haveEmail){
       userEmail = prompt("Please input email: ")
   }

   console.log("Sucker..." + userEmail);
{}

function incrementUntilTen(num){
var iterations = 0;
while (num <10){
    num++;
    iterations++;
}
return iterations;
}
console.log(incrementUntilTen(7), "expected 3"); //3
console.log(incrementUntilTen(27), "expected 0"); //0

    do {

}
    while (condition)

//Consider:
    while (false) {
        console.log("will you ever see?");
}

    do {
        console.log("But what about me?");

    }
        while (false);

    function counIterationsMultiplyByTwoUntilGreaterThan100(num) {
        var iterations = 0;
        do {
            num *=2;
            iterations++;

            }
            while (num <= 100);
                return iterations;
            }
    console.log(counIterationsMultiplyByTwoUntilGreaterThan100(25), "expect 3 ");
    console.log(counIterationsMultiplyByTwoUntilGreaterThan100(250), "expect run 1 time");
{}

for (var incrementer = 1; incrementer <10; incrementer){
    console.log("This loop has run " + incrementer + " time(s).")
}
// function sayHelloXTimes(num){
//     for (var j = 1; j <= num; j++){
//         console.log(j+": Hello!!")
//     }
// }
// sayHelloXTimes(20)



function sayHelloXTimes(num) {
    for (var j = num; j >= 1; j--){
        console.log("Hello!");
    }
}
function sayHelloXTimes (num){
    for (var k = 1; k <= num; k++)
        console.log("Hello again!" + k + " time(s)")
}
sayHelloXTimes(18);
