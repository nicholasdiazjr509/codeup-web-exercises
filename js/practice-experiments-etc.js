(function () {
    "use strict"


    /**
     Doing the assessment exercises here. :)
     */




    /**
     * 1.
     * Define a function named isANumber that takes in a value and returns
     * true if the input is numeric or not. Numeric strings are not considered
     * as numbers and should return false.
     */
    function isANumber(input) {
        return typeof input === 'number';
    }

// is so simple and I still complicate it.

    /**
     * 2.
     *  Define a function named increment that takes in an input and adds 1 to it if the
     *  input is numeric. If the input is not numeric, then return false.
     */
    function increment(input) {
        if (!isNaN(parseFloat(input))) {
            return input + 1;
        } else {
            return false;
        }
    }

        /**
         * 3.
         *  Define a function named decrement. If the provided input is numeric,
         *  the function should subtract 1 and return the result. If the input is not numeric, decrement should return false.
         */
        function decrement(input) {
            if (!isNaN(parseFloat(input))) {
                return input - 1;
            } else {
                return false;
            }
        }
            /**
             * 4.
             *Write a function named getHighestNumber that takes in 3 arguments.
             * If all 3 inputs are numbers or numeric strings, then return the highest number.
             * If any of the 3 inputs is missing or non-numeric, then return false.
             */
            function getHighestNumber(a, b, c) {
                a = parseFloat(a);
                b = parseFloat(b);
                c = parseFloat(c);

                if (a >= b && a >= c) {
                    return a;
                } else if
                (b >= a && b >= c) {
                    return b;
                } else if
                (c >= a && c >= b) {
                    return b;
                } else {
                    return false;
                }

             }




    /**
     * 5.
     *Define a function named parseNumber that parses (converts) a numeric String
     * and returns it's value as a number, the function should be able to decide
     * if it should be parsing an Integer or a Float value.
     */
    function parseNumber(input) {
        return parseFloat(input);
    }


    /**
     * 6.
     *Write a function named add that takes in two inputs.
     *  If both inputs provided are numeric, add will return the sum of both inputs.
     *  If one or both inputs is not numeric, add should return false.
     */
    function add(a, b) {
        if (!NaN(parseNumber(a)) && !isNaN(parseNumber(b))) {
            return parseNumber(a) + parseNumber(b);

        } else {
            return false;
        }
    }

    /**
     * 7.
     *Write a function named multiply that takes in two inputs. If both inputs provided are numeric,
     * multiply returns the product of the first input multiplied by the second.
     * If either or both inputs are not numeric, multiply should return false.
     multiply(4, 2)              // 8
     multiply(0, 44)             // 0
     multiply(-5, 10)            // -50
     multiply(5, true)           // false
     multiply(true, false)       // false
     multiply("Monday")          // false
     */

    function multiply(x, y) {
        x = parseNumber(x);
        y = parseNumber(y);

        if (x * y) {
            return true;
        } else {
            return false;
        }
    }


    /**
     * 8.
     *Define a function named square. If the provided input is numeric, square should return the number multiplied by itself. If the input is not numeric, square, should return false.

     square(2)                   // 4
     square(3)                   // 9
     square(-4)                  // 16
     square("5")                 // 25
     square(0.5)                 // .25
     square("Bob")               // false
     square(true)                // false
     square(false)               // false
     square(null)                // false
     square([1, 2, 3])           // false
     square()                    // false
     */

    /**
     * 9.
     *Write a function named sumOfSquares that takes in two inputs. If both inputs are numeric, sumOfSquares should square each input and return the sum of them added together. For example, if we pass a and b then we should square a and add it to the square of b. If either or both inputs are not numeric, sumOfSquares should return false.

     sumOfSquares(2, 3)          // 13
     sumOfSquares(1, 0)          // 1
     sumOfSquares("4", 5)        // 41
     sumOfSquares(2, false)      // false
     sumOfSquares(null)          // false
     sumOfSquares()              // false
     */

    /**
     * 10.
     *Write a function named isPalindrome that takes in a single input. If the input is a numeric string, then return false. If the input is a string, then return true if the string is the same forwards as it is backwards. Return false if the string is different forwards from backwards. Ignore capitalization.

     isPalindrome("Bob")         // true
     isPalindrome("radar")       // true
     isPalindrome("ufotofu")     // true
     isPalindrome("Monday")      // false
     isPalindrome(232)           // false
     isPalindrome(null)          // false
     */
    /**
     * Instructions

     Carefully read all the instructions and problems before beginning your work.

     Clone this repository to your local projects directory.

     Write your solutions to the problems presented below inside solutions.js.

     */
//Create a function named calcAge that takes the age and return the age in days.
// If input is not numeric, calcAge should return false.


    function calcAge(age) {
        if (isNaN(age) || age !== "number") {
            return false;
        } else {
            return age * 365;
        }
    }

//    console.log(calcAge())

//
// Create a function named increment that takes a number as an argument,
// increments the number by +1 and returns the result. If input is not numeric
    function increment(input) {
        if (!isNan(parseFloat(input))) {
            return input + 1;
        } else {
            return false;
        }
    }

//
//     if(age !== Number) {
//     }else{
//         return age * 365;
//     }
// }

//Define a function named isOdd that takes in a number,
// return true is that number is odd. Return false if the number is either not a number or even.
//     if (typeof number !== "number" || isNaN(number)) {
//         return false;
//     } else if(number % 2 !== 0) {
//         return false;
//     }else{
//         return true;
//     }
/** solution above causing error without the truthy */
//number % 2 === 0



//Write a function named oddArr. Given the array of
// var arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] return the odd numbers.

    var arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    arry.forEach(function oddArr(number, index) {
        if (index % 2 !== 0) {
            return number;
        }
        console.log(number)
    })

//Define a function named creditCard that takes a credit card number
// and only displays the last four characters.
// The rest of the card number must be replaced by ************.

    function creditCard(cardNumber) {
        cardNumber = cardNumber.toString().split("");

        for (var i = 0; cardNumber.length - 4; i++) {
            cardNumber[i] = '*'
              return  cardNumber().join("")
        }
      //  return card.join('');

    console.log(cardNumber(132164))
}
//create a function named AlphabetSoup that takes a string
// and returns a string with its letters in alphabetical order.
// Return false if string is empty or null
    function AlphabetSoup(str) {
        if(str === "" || !str){
            return false;
        }else{
            return str.toString().split('').sort().join('');
        }
    }
//create a function named reverse that takes in and reverses an array.


function reverse(numbers){
        var arr = numbers.toString().split("");
    var reversed = arr.reverse().join("");
    return reversed;
    }

   // return (reverse(numbers));

console.log(reverse(12345))


function reverse(num){
        var last_digit, reversed = 0, number = num;
        while(number !=0) {
            last_digit = number % 10;
            reversed = reversed * 10 + last_digit;
            number = Math.floor( number / 10);
        }
        if(num<0){
            return -1 * reversed;
        }
        return reversed;
}
    console.log(reverse(123456789))


    })();