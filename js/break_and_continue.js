"use strict"

//#2
// Prompt the user for an odd number between 1 and 50.
// Use a loop and a break statement to continue prompting the user if they enter invalid input.

var oddNumber = prompt("enter an odd number: ");

while(!oddNumber % 2 == 0){
    var evenNumber;
    evenNumber = prompt("That's even yo!" + " Enter an odd number: ");
      break;
    oddNumber = prompt("Enter an odd number please: ");

}
//#3
// Use a loop and the continue statement to output all the odd numbers between 1 and 50,
// except for the number the user entered.
for (var i = 1; i <= 50; i++){
    if (i % 2 !==0){

      i =prompt( oddNumber + "Yikes, not that one");

       i = prompt(oddNumber + " is an odd number");

    }
}