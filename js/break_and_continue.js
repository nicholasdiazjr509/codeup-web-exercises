
(function () {

"use strict";

//#2
// Prompt the user for an odd number between 1 and 50.
// Use a loop and a break statement to continue prompting the user if they enter invalid input.
var oddNumber;

    while(true)
{
    oddNumber = parseInt(prompt("enter an odd number up to 50 "));
    //remember PROMPT it returns a string
    if(oddNumber >= 1 && oddNumber <= 50 && oddNumber % 2 !== 0)
    {
        break;
    }
}
 //instantiate your for loop
 //    for (var i = 1; i <= 50; i++) {
 //        if (i % 2 == 0) {
 //            continue;
 //        }
 //        if (j === oddNumber) {
 //            console.log("we dont need" + oddNumber + " this!");
 //            continue;
 //        }
 //        console.log("This is an odd number " + j);
 //
 //        }
//#3
// Use a loop and the continue statement to output all the odd numbers between 1 and 50,
// except for the number the user entered.
        for (var i = 1; i <= 50; i++) {
            if (i % 2 === 0) {
                continue;
            }
            if (b === oddNumber){
                console.log(oddNumber + "yikes, not that one!");
            continue;
        }

            console.log(oddNumber + " is an odd number!");
        }


})();
