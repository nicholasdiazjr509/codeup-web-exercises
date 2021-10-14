"use strict";

//A function is a block of re-usable code that performs a specific task.
//Function typically take in an input, and produce an output.
//Dont neccasserily "need" one.
//
// Functions we have used so far:
//- prompt()**execute the "function" and then **argument is ()**;
//- alert();
//- parseFloat();
//- parseInt();
//- .toFixed();
//- .toUpperCase();

//When executing a function, we call the name of the function, following any input
// inside of parenthesis known as arguments.

prompt("What is your name dude?"); // returns a string;

//Function structure

// function todaysDate(parameter1, parameter2, ect...){
//     ...Do something..
//       .. return something
 //}

(function(){

    // warm-ups
    // The following code will set the variable hadBreakfast to a random boolean value.
    // Copy and paste the following code into your warmups JS file:
    //     var hadBreakfast = Boolean(Math.round(Math.random()));
    // Write a ternary expression to set a variable of hadBreakfastMessage to a string
    // expressing whether or not you have had breakfast.
    // You will use the variable hadBreakfast as your condition.




        var hadBreakfast = Boolean(Math.round(Math.random()));
        var hadBreakfastMessage = (hadBreakfast) ? "Yes, I had breakfast" : "No, I didn't eat any breakfast";

        console.log(hadBreakfast);
        console.log(hadBreakfastMessage);

/**_____________________________________________________________________________________*/

    function printSeven(){
        return 7;
    }
    console.log(printSeven());

    if(false) { //(34 < 24 === false)
        console.log("See this?");
    }else{
        console.log("What about this?");
    }


function  todaysDate(greeting){
    return greeting + Date();

}
// Execute function *function expression and declarations*****

var date = todaysDate("Today's date is: ");
console.log(date);

// Function declaration




// Example:

//Create a function which takes in two number parameters
// to find the Hypotenuse angle.

// Parameters are the placeholders stated in the function definition.
function findHypotenuse(a, b){
    var result;
    result = Math.sqrt((a * a) + (b * b))
    return result;
}
// Have a triangle with the sides of 4 and 5.
// Execute our function to find the hypotenuse.
// Function expression / anonymous function
var sayBye = function (name) {
    var localVar = 'I be a local one.'
    console.log(localVar);
    return 'Goodbye ' + name;
}


console.log(sayBye('Nick'));
// console.log(localVar);
// Example:

// Create a function which takes in two
// number parameters to find the Hypotenuse angle.

// Parameters are the placeholders stated in the function definition.
//Arguements are the values that are put into the function  when executed.
console.log(findHypotenuse(4, 5))


// Functions do not REQUIRE parameters, here we just want to print the word
function printFour(){
    return 'four';
}
console.log(printFour());

// FUNCTION SCOPE

// Scope is a term to describe where a variable can be accessed.
//Its more about variables.
//
// With my global variable that exists in the HTML document,
// console.log(global);


 function greeting(){
     var firstName = 'David';
     var lastName = 'Stephens';
     return 'Hello, ' + firstName + lastName;

 }
 console.log(greeting());
 console.log(firstName, lastName);

 // Immediately Invoked Function Expression (IIFE)

    {
        var ifyVar = 'I am local to the IIFE'

        function myFunction() {
            return info;
            //var of info can still be accessed here because it was defined
            //"globally" (inside the IIFE).
            //kind of like containers of a function
        }

    }
console.log(ifyVar);
    })();