(function () {
    "use strict"


    /**
     Doing the assessment exercises here. :)
     */

    //----------------------------------------------------------------------//


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

    function multiply(x, y){
    x = parseNumber(x);
    y = parseNumber(y);

    if(x * y){
        return true;
    }else{
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










    })();