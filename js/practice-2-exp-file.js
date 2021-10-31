(function (){
    "use strict"

    /** Finding a Remainder in JavaScript

     The remainder operator % gives the remainder of the division of two numbers.
     Example:
     5 % 2 = 1 because
     Math.floor(5 / 2) = 2 (Quotient)
     2 * 2 = 4
     5 - 4 = 1 (Remainder)

     Usage
     In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2.
     17 % 2 = 1 (17 is Odd)
     48 % 2 = 0 (48 is Even)
     Note: The remainder operator is sometimes incorrectly referred to as the modulus operator. It is very similar to modulus, but does not work properly with negative numbers.
     */
    //var remainder = 0;
    //  remainder = 11 % 3; ** the remainder is 2; this is even.


/**
 *  it is common to use assignments to modify the contents of a variable.
 *  Remember that everything to the right of the equals sign is evaluated first, so we can say:

 myVar = myVar + 5;

     to add 5 to myVar. Since this is such a common pattern,
     there are operators which do both a mathematical operation and assignment in one step.

     One such operator is the += operator.
            let myVar = 1;
            myVar += 5;
                console.log(myVar);
     6 would be displayed in the console.
     Convert the assignments for a, b, and c to use the += operator.
 */

/**   //////////more notes////////
 * Code	Output
 \'	single quote
 \"	double quote
 \\	backslash
 \n	newline
 \r	carriage return
 \t	tab
 \b	word boundary
 \f	form feed

 Note that the backslash itself must be escaped in order to display as a backslash.*/
const someAdjective = "awesome!";
    let myStr = "Learning to code is ";
    myStr += someAdjective;
    console.log(myStr)
 /**
  *  Use Bracket Notation to Find the First Character in a String
  * Bracket notation is a way to get a character at a specific index within a string.
  * Most modern programming languages, like JavaScript, don't start counting at 1 like humans do.
  * They start at 0. This is referred to as Zero-based indexing.
  * For example, the character at index 0 in the word Charles is C.
  * So if const firstName = "Charles", you can get the value of the first letter of the string by using firstName[0].

  Example:
          const firstName = "Charles";
          const firstLetter = firstName[0];
  firstLetter would have a value of the string C.
  Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.
  Hint: Try looking at the example above if you get stuck.
  */
let firstLetterOfLastName = "";
const lastName = "Lovelace";

firstLetterOfLastName = lastName[0];

/**

 In JavaScript, String values are immutable, which means that they cannot be altered once created.
 For example, the following code:
     let myStr = "Bob";
        myStr[0] = "J";
 cannot change the value of myStr to Job, because the contents of myStr cannot be altered. Note that this does not mean that myStr cannot be changed, just that the individual characters of a string literal cannot be changed. The only way to change myStr would be to assign it with a new string, like this:
---
    let myStr = "Bob";
        myStr = "Job";
 Correct the assignment to myStr so it contains the string value of Hello World
 using the approach shown in the example above.
 */
let myStr = "Jello World";

    myStr[0] = "H";
})();