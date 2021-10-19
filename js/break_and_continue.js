"use strict";
( function (){


//#2
// Prompt the user for an odd number between 1 and 50.
// Use a loop and a break statement to continue prompting the user if they enter invalid input.
while(true)
{
    oddNumber = parseInt(prompt("enter an odd number up to 50: "));//remember it returns a string

    if(oddNumber >= 1 && <= 50 && oddNumber % 2 !== 0)
    {
        break;
    }
}
 //instantiate your for loop
    for (var i = 1; i <= 50; i++) {
        if (i % 2 == 0) {
            continue;
        }
        if (j === oddNumber) {
            console.log("we dont need" + oddNumber + " this!");
            continue;
        }
        console.log("This is an odd number " + j);

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


})();
