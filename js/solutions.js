//1. A farmer is asking you to tell him how many legs can be counted among all his animals.
//the farmer breeds three species:
//The farmer has counted his animals, and he gives you a subtotal for each species.
//you have to implement a function named animal that returns the total number of legs.
//chickens = 2 legs
//cows = 4 legs
//pigs = 4 legs

function animals(chicken, cow, pigs){
    return ((chicken * 2) *(cow * 4) * (pigs * 4));

console.log(animals(3, 4,2));// call your functioni "animals"

function findPerimeter(length, width){
    return (length * 2 ) + (width * 2);

}
console.log(findPerimeter(2,2))

//Define a function named concatName.
// Given two strings, firstName and lastName, return a single string in the format " last and first".

function concatName(firstName, lastName){
    return lastName + " " + firstName;
}
console.log(concatName("Nicko", "Diaz"))


function triArea(base, height){
    return (base*height)/2;
}

//Define a function named lessThan100.
// Given two numbers, return true if the sum of both numbers is less than 100.
// Otherwise return false.

function lessThan100(x, y){
    if ((x + y) < 100){
        return true;
    }else{
        return false;
    }
}
console.log(lessThan100(1,  1))}

//

// A farmer is asking you to tell him how many legs can be counted among all his animals.
// The farmer breeds three species:
//
//     chickens = 2 legs
//
// cows = 4 legs
//
// pigs = 4 legs
//
// The farmer has counted his animals, and he gives you a subtotal for each species.
// You have to implement a function named animal that returns the total number of legs of all the animals.
//
//     Define a function named findPerimeter that takes in length and width and
//     finds the perimeter of a rectangle.
//
//     Define a function named concatName.
//     Given two strings, firstName and lastName, return a single string in the format
//     "last, first".
//
//     Write a function named triArea that takes in 2 inputs,
//     the base and height of a triangle and return its area.
//
//     Define a function named lessThan100. Given two numbers,
//     return true if the sum of both numbers is less than 100. Otherwise return false.
//
//     Write a function named makesTen that takes two inputs.
//     Both arguments are integers, a and b.
//     Return true if one of them is 10 or if their sum is 10.
//
// You are counting points for a basketball game,
// given the amount of 2-pointers scored and 3-pointers scored,
// create a function named points that will find the final points for the team
// and return that value.
//
//     Define a function named Convert that takes in minutes as an input
//     and will converts those minutes into seconds.
//
//     Write a function named remained that takes two numbers as inputs.
//     The first parameter divided by the second parameter will have a remainder,
//     possibly zero. Return that value.
//
//     Write a function named getFirstValue that takes an array
//     containing only numbers and return the first element.
