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