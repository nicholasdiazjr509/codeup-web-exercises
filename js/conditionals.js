
"use strict";
(function() {
    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined below, if the color passed is not
     * one of the ones defined below, return a message that says so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

    function analyzeColor(colors) {
        if (colors === 'red') {
            return "Strawberries are red";
        } else if (colors === 'blue') {
            console.log("Blue is the color of the sky");
        } else {
            console.log("I dont know that color.");

        }

    }

    console.log(analyzeColor("blue"));
    console.log(analyzeColor("red"));
    console.log(analyzeColor("cyan"));

    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];


    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message every time you refresh the page
     */

    console.log(analyzeColor(randomColor));


    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */

    function analyzeSwitchColor(color) {

        switch (color) {
            case "red":
                return "Strawberries are red.";
                break;

            case "blue":
                return "The sky is blue.";
                break;

            default:
                return " I dont know that color.";
                break;
        }
    }

    console.log(analyzeSwitchColor("blue"))
    console.log(analyzeSwitchColor("red"))
    console.log(analyzeSwitchColor("cyan"))
    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */
    var favoriteColor = prompt("Please enter a color: "); //.toLowerCase
    alert(analyzeColor(favoriteColor))


    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */
    function calculateTotal(luckyNumber, totalAmount) {
        if (luckyNumber === 1) {
            return totalAmount - (totalAmount * .1);

        } else if (luckyNumber === 2) {
            return totalAmount = (totalAmount * .25);

        } else if (luckyNumber === 3) {
            return totalAmount = (totalAmount * .35);

        } else if (luckyNumber === 4) {
            return totalAmount = (totalAmount * .50);

        } else if (luckyNumber === 5) {
            return totalAmount = (totalAmount * .100);

        } else (luckyNumber === 0)
        {
            return totalAmount;

            console.log(calculateTotal(5, 100))
                console.log(calculateTotal(4, 100))
            console.log(calculateTotal(0, 100))
        }
    }

    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
    var luckyNumber = Math.floor(Math.random() * 6);
    var totalAmount = parseFloat(prompt("What is total amount?"));
    alert("Your lucky number is: " + luckyNumber + "Your total amount: " + totalAmount + "Your total with discount: "
        + calculateTotal(luckyNumber, totalAmount).toFixed(2));

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */


    function number(num) {
        var userNum = parseFloat(num);

        if (!isNaN(userNum)) {
            if (userNum % 2 === 0) {
                alert(userNum + " is an even number.")
        } else {
            alert(userNum + " is an even number.")
        }
                alert(userNum + " plus 100 is " + (userNum = 100));

        if (userNum < 0) {
            alert(userNum + " is a negative.");
        }else if (userNum > 0){
            alert(userNum + " is a positive.") ;
        }else{
            alert("you entered zero dude!");
        }
        }else {
        alert("You didnt give me a number dude.")
    }
}
   if (confirm("Do you want to continue?")) {
       var userInput = prompt("Give me a number?");
       userResponse(userInput);
   }else{
       alert("Nevermind");
   }


/**-----------------------------------------------------------------------------*/
/**----------------------------Class instruction NOTES below------------------- */
/**-----------------------------------------------------------------------------*/

// if, if/else, if/else if /else statements, ternary expressions and switch statements

//IF STATEMENTS - Code that runs when a condition is met.

// if (condition) {
//   this code will run if our condition is true;
//}


/** Consider the sentence: "When I run out of milk: I go to the store to get more." */
// Condition:  When I run out of milk.
// Action: I go to the store to get more milk.

// if (milk === 0) {
//      goToStore();
//}

/** TO-DO: I want to make a block of code that logs a message to the console when a variable is set to the number 5.
 *
 */

    var five = 55;

    if (five === 5) {
        console.log("Hey, that five.");
    }

//We can also use our conditional logic in functions.
    /** TO-DO: I want to build a function that returns a string when I pass a number as an argument.*/

    function isItANumber(parameter) {
        var str = "Oi, that ain't a number."
        if (typeof parameter === "number") {
            str = "Hey. That's a number.";
        }
        return str;
    }

    console.log(isItANumber(72));
    console.log(isItANumber("Doug"));
// IF/ELSE IF/ELSE = A chain of if/else statements to give different results for different conditions.

// if (condition1) {
//     run this code;
// } else if (condition2) {
//     since the first condition wasn't met, and the second was, I run;
// } else {
//     since neither the first or second conditions were met, I run by default.
// }

    /** Consider the following sentence: "If I owned a cow, I'd get milk from it when I ran out. If I owned a goat,
     * I could get my milk from it, but since I don't own either of those: I'll go to the store instead." */

// How would we write this as a if/else if/else code block?

    var hasCow = true;
    var hasGoat = true;

    if (hasCow) {
        console.log("Milking Bessie");
    } else if (hasGoat) {
        console.log("Milking Gertrude");
    } else {
        console.log("Hey, I'm headed to Randall's for milk. You need anything?");
    }

    /** TO-DO: Let's make a function that takes in a number and will return three different strings for an
     * argument lesser than, greater than, or equal to 35. */
    function isThisThirtyFive(parameter) {
        if(parameter >= 35) {
            return "No." + parameter + "That number is greater than 35"
        }else if(parameter === 35){
            return "No. " + parameter + " is less than 35."
         }else {
            return "Yep, that sure is 35."
    }
}
    console.log(isThisThirtyFive(34));
    console.log(isThisThirtyFive(35));
    console.log(isThisThirtyFive(36));
//console.log(isThisThirtyFive(-35));

// function isThisThirtyFive(parameter) {
//
// }


/**______________________________________________________________________________*/
// TERNARY OPERATOR: A operation to set a value based on boolean evaluation.
// TERNARY EXPRESSION: An expression to set a value based on boolean evaluation.

// var message = (booleanValue) ? "Expression was true." : "Expression was false.";

    /** Consider the following statement: "Are we out of milk? If we are out of milk: I'll head to the store, but if we
     * do: I want to make a bowl of cereal." */

// How would we write this as a ternary expression?

    var doWeHaveMilk = true;

    var action = (doWeHaveMilk) ? "Time to eat some cereal." : "Head to the store for some milk. Need anything?";

    console.log(action);

    /** TO-DO: Let's look back at the if/else version of our isItANumber function. Let's refactor our if/else as a ternary operator. */



/** SWITCH STATEMENT: A statement with multiple conditions that will trigger based on the value of a variable.
*/


 var color = prompt("What is your favorite color?");

switch(color) {
    case "green":
        alert("What a coincidence, that's my favorite!");
        break;
    case "orange":
        alert("That's my brother's favorite color!");
        break;
    default:
        alert(color + " is a weird color, my dude.");
        break;
}

    /** Consider the following sentence: "I don't have a cow, goat, or camel. I guess I'll have to go to the
     * store for milk." */

// How would we write this as a switch statement?

var animal = "skink";
switch (animal) {
    case "cow":
        console.log("Milking Bessie.");
        break;
    case "goat":
        console.log("Milking Gertrude.");
        break;
    case "camel":
        console.log("Milking Camille.");
        break;
    default:
        console.log("Head to HEB for some milk now.");
        break;
}

    /** TO-DO: Let's make a switch statement with a prompt for the user to input their favorite sandwich meat.
     *  If they like 'olive loaf' we should return an alert to congratulate them on their bold choice,
     *  and if they choose 'brisket' we should return a different alert:
     *  this one for congratulating them on the 'right' answer.
     *  All other responses should trigger an alert stating apathy.
     *  */

// Let's work on the exercise!
var favLunchMeat = prompt("What's your favorite lunch meat?");

switch (favLunchMeat){
    case "olive loaf":
        alert("You have a bolt palette; good for you. ");
        break;
    case "brisket":
        alert("Ah, perfect choice.");
        break;
    default:
        alert("That's fine. Nothing wrong with a little " + favLunchMeat);
        break;
}
})();