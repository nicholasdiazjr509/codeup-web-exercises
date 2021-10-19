"use strict";
( function ())
{


//#2
// Prompt the user for an odd number between 1 and 50.
// Use a loop and a break statement to continue prompting the user if they enter invalid input.

    oddNumber = prompt("enter an odd number: ");

    for (var i = 1; i <= 10; i++) {
        if (oddNumber % 2 == 0) {
            var evenNumber;
            evenNumber = prompt("That's even yo!" + " Enter an odd number: ");
            break;
            oddNumber = prompt("Enter an odd number please: ");

        }
//#3
// Use a loop and the continue statement to output all the odd numbers between 1 and 50,
// except for the number the user entered.
        for (var i = 1; i <= 10; i++) {
            if ((i % 2) == 0) {
                continue;

                console.log(i);

                var oddNumber = prompt(oddNumber + "Yikes, not that one!")
                console.log(oddNumber + "yikes, not that one!");
            }
            oddNumber = prompt(oddNumber + " is an odd number")
            console.log(oddNumber + " is an odd number!");
        }
    }

})()
