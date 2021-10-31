(function () {
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
     * Code    Output
     \'    single quote
     \"    double quote
     \\    backslash
     \n    newline
     \r    carriage return
     \t    tab
     \b    word boundary
     \f    form feed

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
     cannot change the value of myStr to Job, because the contents of myStr cannot be altered.
     Note that this does not mean that myStr cannot be changed,
     just that the individual characters of a string literal cannot be changed.
     The only way to change myStr would be to assign it with a new string, like this:
     ---
     let myStr = "Bob";
     myStr = "Job";
     Correct the assignment to myStr so it contains the string value of Hello World
     using the approach shown in the example above.
     */
    let myStr1 = "Jello World";
    myStr1 = "Hello World";
    console.log(myStr1)

    /**
     * Manipulate Arrays With pop()
     Another way to change the data in an array is with the .pop() function.
     .pop() is used to pop a value off of the end of an array.
     We can store this popped off value by assigning it to a variable.
     In other words, .pop() removes the last element from an array and returns that element.

     Any type of entry can be popped off of an array - numbers, strings, even nested arrays.
     const threeArr = [1, 4, 6];
     const oneDown = threeArr.pop();
     console.log(oneDown);
     console.log(threeArr);

     The first console.log will display the value 6, and the second will display the value [1, 4].

     ** Use the .pop() function to remove the last item from myArray and assign the popped
     ** off value to a new variable, removedFromMyArray.
     */

        //Setup
    const myArray = [["John, 23"], ["cat", 2]];

    //only change code below this line.
    const removedFromMyArray = myArray.pop();
    console.log(removedFromMyArray);
    console.log(myArray);
    /**
     * Manipulate Arrays With shift()
     pop() always removes the last element of an array. What if you want to remove the first?

     That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

     Example:

     const ourArray = ["Stimpson", "J", ["cat"]];
     const removedFromOurArray = ourArray.shift();
     removedFromOurArray would have a value of the string Stimpson, and ourArray would have ["J", ["cat"]].

     Use the .shift() function to remove the first item from myArray and
     assign the "shifted off" value to a new variable,
     removedFromMyArray.
     */
//Setup

    const myArray1 = [["John, 23"], ["dog", 3]];

    //Only change the line below
    var removedFromMyArray1 = myArray.shift();


console.log(myArray1)
/*****************************************************************************************/
 /* Write Reusable JavaScript with Functions
    In JavaScript, we can divide up our code into reusable parts called functions.

     Here's an example of a function:
             function functionName() {
                  console.log("Hello World");
            }
 //---------------------------------------------

 You can call or invoke this function by using its name followed by parentheses,
    like this: functionName();
    Each time the function is called it will print out the message Hello World on the dev console.
    All of the code between the curly braces will be executed every time the function is called.

 ** *
 *  1. Create a function called reusableFunction which prints the string Hi World to the dev console.
 *      2. Call the function.
 *
 *
 *  ReusableFunction should be a function.
 *   If reusableFunction is called, it should output the string Hi World to the console.
 *   You should call reusableFunction once it is defined.
 **/
function  reusableFunction(){
    console.log("Hi World");
}
        reusableFunction();//CALLS the function "reusableFunction"
/********************************************************************/

/**
 Passing Values to Functions with Arguments
 Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.

 Here is a function with two parameters, param1 and param2:
                 function testFun(param1, param2) {
                  console.log(param1, param2);
                }
Exercise instructions:
 1. Then we can call testFun like this: testFun("Hello", "World");. We have passed two string arguments,
 Hello and World. Inside the function, param1 will equal the string Hello and param2 will equal the string World.
 Note that you could call testFun again with different arguments and the parameters
 would take on the value of the new arguments.

 2. Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
 Call the function with two numbers as arguments.

 */
    function functionWithArgs(a, b){   //  (a, b)parameters are as placeholders
        console.log(a + b);
}
    functionWithArgs(10, 5);// calls the function and passed input into the function
/**
 *  Return a Value from a Function with Return
 We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

 Example:
         function plusThree(num) {
          return num + 3;
        }
         const answer = plusThree(5);
 The answer has the value 8.
    plusThree takes an argument for num and returns a value equal to num + 3.

 1. Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
 *  */
function timesFive(num){
    return num * 5;
}
const answer = timesFive(5);
/**
 * Global Scope and Functions
 In JavaScript, scope refers to the visibility of variables.
 Variables which are defined outside of a function block have Global scope.
 This means, they can be seen everywhere in your JavaScript code.
 Variables which are declared without the let or const keywords are automatically
 created in the global scope. This can create unintended consequences elsewhere
 in your code or when running a function again. You should always declare your variables with let or const.

 1. Using let or const, declare a global variable named myGlobal outside of any function.
 Initialize it with a value of 10.
 2. Inside function fun1, assign 5 to oopsGlobal without using the let or const keywords.

 **/
})();