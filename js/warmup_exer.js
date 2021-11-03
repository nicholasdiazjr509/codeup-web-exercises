(function() {
    "use strict"



    var products = [
        {
            name: 'Playstation 5',
            price: 599.99
        }, {
            name: 'Logitech Wireless Mouse',
            price: 23.99
        }, {
            name: 'Macbook Pro',
            price: 1099.99
        }, {
            name: 'GoPro HERO10',
            price: 399.99
        }, {
            name: '12" & 6" Metal Ruler Set',
            price: 5.99
        }]

function sortByName(arr){
      return arr.sort(function(a, b){
          var aLower = a.name.toLowerCase();
          var bLower = b.name.toLowerCase();

         if( aLower < bLower) {
             return -1;
         }else if(aLower > bLower) {
             return 1;
         }else{
             return 0;

         }
      });

    }
   console.log(sortByName(products))
    /**
//Suppose you have an array users. You may use "users.sort" and pass a
// function that takes two arguments and compare them (comparator)
//
// It should return
// something negative if first argument is less than second (should be placed before the second in resulting array)
// something positive if first argument is greater (should be placed after second one)
// 0 if those two elements are equal.
// In our case if two elements are a and b we want to compare a.firstname and b.firstname
//
// Example:
//
// users.sort(function(a, b){
//     if(a.firstname < b.firstname) { return -1; }
//     if(a.firstname > b.firstname) { return 1; }
//     return 0;
// })
// This code is going to work with any type.
//
// Note that in "real life"™ you often want to ignore case, correctly sort diacritics, weird symbols like ß,
// etc when you compare strings, so you may want to use localeCompare. See other answers for clarity.
//
    ***/







    //
    // function getHighestQuantityObject(arr) {
    //     var obj = {
    //         name: "something",
    //         quantity: 0
    //     }
    //     arr.forEach(function (el) {
    //         if (el.quantity > obj.quantity) {
    //             obj = el;
    //         }
    //         console.log(obj);
    //     });
    //     return obj;
    // }
    //
    // console.log(getHighestQuantityObject(groceries));
    //returns { name: "yams", quantity: 50};


//find area of the circle, and round it to the nearest whole number using Math object.
//     function cA(radius) {
//         var area = Math.PI * (radius * radius);
//         console.log(area);
//
//         var areaRounded = Math.round(area * 100) / 100;
//         console.log(areaRounded);
//         //radius: 36
// //     };
//     var circle = {
//         radius: 36
//     }
// //Area of a circle = PI * radius^2
//     var area = Math.round(Math.Pi * (Math.pow(circle.radius, 2)));
//     console.log(area);
//
//
// //loops, arrays, objects
//     var wrestlers = [
//         {
//             name: "Bret Hart",
//             nationality: "Canadian"
//         }, {
//             name: "Shawn Michaels",
//             nationality: "American"
//         }, {
//             name: "Christian Cage",
//             nationality: "Canadian"
//         }, {
//             name: "Keiji Mutoh",
//             nationality: "Japanese"
//         }, {
//             name: "Eddy Guerrero",
//             nationality: "American"
//         }, {
//             name: "Owen Hart",
//             nationality: "Canadian"
//         }
//     ];

//Loop is already created. I derped, again.
//
//     function filterForCanadians(arr) {
//         var bucket = []; //fill bucket with canadians
//         arr.forEach(function (element) {
//             if (element.nationality === "Canadian") {
//                 bucket.push(element);
//             }
//         });
        /**

         Psyduck is constantly beset by headaches. If the Pokémon lets its strange power erupt,
         apparently the pain subsides for a while.

         2' 7", Duck category, 43.2 lbs,
         Abilities-Damp,Cloud Nine
         Type-Water
         Weaknesses-Grass, Electric
         Hp-3, Atk-4, Def-3, Spec. Atk-4, Spec. Def-3, Speed-4
         Evolution from psyduck #054  => Golduck #055
         */
        //
        // var Psyduck = {
        //     name: 'Psyduck',
        //     description: 'Psyduck is constantly beset by headaches. If the Pokémon lets its strange power erupt,\n' +
        //         '    apparently the pain subsides for a while.',
        //     height: {
        //         feet: 2,
        //         inches: 7
        //     },
        //     type: ['water']
        // }


//___________________________________________________________________________________________//
//         var dogs = [myDog];
//         var peridot = {
//             name: "Peridot",
//             breed: "Pit Bull Terrier Mix",
//             birthday: "08/30/2017",
//             sit: function (hasTreat) {
//                 if (hasTreat === true) {
//                     return "Peridot is now sitting";
//                 } else {
//                     return "Peridot is now ignoring you";
//                 }
//             }
//         }
        // dogs.push(peridot);
        // console.log(dogs);
        // console.log(dogs.indexOf([1]));
        // console.log(dogs[1].breed)

        // dogs.push(peridot);
        //
        // console.log(dogs);
        // // console.log(dogs.indexOf(dogs[1]));
        // console.log(dogs[0].breed)
        //
        // var numberOfAustralianCattleDogMixes = 0;
        // dogs.forEach(function (dog: { breed: string, name: string }) {
        //     if (dog.breed === 'Austrailian Cattle Dog mix') {
        //         numberOfAustralianCattleDogMixes += 1;
        //
        //     }
        // })
        // console.log(numberOfAustralianCattleDogsMixes)


// name       .compName
// location   .address
// industry   .softwareDev
// founder    .nameCeo

// company name
// Address
// number of employees,
// founder
// phone number
//**methods**
// .getSales()
// .open()
// .close()
// .getInventory
// .getCashOnHand()


/////////////////////////////////////////////////////////////////////
//         function moveToEnd(arr) {
//             var movElement = arr.shift();
//             arr.push(moveElement);
//
//             return arr;
//         }
//
//         console.log(moveToEnd(1, 2, 3, 4))
//         console.log(moveToEnd(['rock', 'roll', 'and']));
//
// // create a function that accepts an array argument that returns the second to last element
//         function secondToLast(arr) {
//             return arr[arr.length - 2];
//         }
//
//         console.log(secondToLast(["First", "Second", "not last dude", "Last"]));


//write a program that console.logs the numbers from 1 to 100.
// multiples of three console.log "FIZZ" instead of the number
//and for the multiples of five console.log " BUZZ". For numbers which
//are multiples of both three and five console.log "FIZZBUZZ" . USE A FOR LOOP
//
//         for (var i = 1; i <= 100; i++) {
//             if (i % 3 == 0 && i % 5 == 0){ //using the and && kind of threw me off, it works.
//                     console.log("FIZZBUZZ");
//
//             }else if (i % 3 === 0){
//                     console.log("FIZZ");
//
//             } else if (i % 5 === 0) {
//                     console.log("BUZZ");
//             } else {
//                     console.log(i);
//             }
//         }


//A function is a block of re-usable code that performs a specific task.
//Function typically take in an input, and produce an output.
//Dont necessarily "need" one.
//
// Functions we have used so far:
//- prompt()**execute the "function" and then **argument is ()**;
//- alert();
//- parseFloat();
//- parseInt();
//- .toFixed();
//- .toUpperCase();

//When executing a function, we call the name of the function, following any input
// inside of parenthesis known as arguments.


//Write a function called 'typeCheck' that takes an input and returns a string of the data type entered.
//If the data type is a string, return the string "Haha, it's a string of string!"
//Tests:
//     typeCheck('')
//     typeCheck(isNaN());
//     typeCheck(!false * 3);
//     typeCheck(4 + '4');
//---------------------15 October----------------------------------//
//isBoolean
//         function isBoolean(input) {
//             return typeof input == 'boolean';
//         }
//
// //Define a function named isString that takes in a value as an input and returns a boolean if the input provided is a string or not.
// // Numeric strings will count as strings sand should return true.
//         function isString(input) {
//             return typeof input === 'string';
//         }
//
// //Define a function named isNotString that accepts an input and returns true or false on whether an input is not a string
//         function isNotString(input) {
//             return typeof input !== 'string';
//         }

//we can reuse code and just add !
// function isNotString(input){
//     return !isString(input);
// }

//Define a function named isEmptyString that will return
//true when passed an argument with the value of "", i.e.
// an empty string. All other arguments should return false.

        function isEmptyString(input) {
            if (input === '') {//asking if its true
                return true;// not needed
            } else {
                return false;
                //return input ===''; JUST USE THIS!!
            }
        }

//define a function named isNOtANumber that accepts an input and returns true or false
//based on whether an input is a non-numeric value or not. Numbers as strings are not a number and should
//return true.
        function isNotANumber(input) {
            return typeof input !== 'number';
        }

//function isNotANumber(input){
//          return typeof input !== 'number';
// }


//define a function name isNegative that accepts a number and
//returns true or false based on whether the input is less than zero.
        function isNegative(num) {
            return (num < 0);
        }

//Define a function named isPositive that accepts an input
//and returns true or false based on whether the input is
//above zero. Any non-numberic input should return false.

        function isPositive(input) {
            return input > 0;
        }

//Define a functioni named isZero that will return TRUE
//when passed an argument of the numberic value 0, and return
// false for all other arguments.
        function isZero(input) {
            return input == 0;
        }

//Define a function named isArray that takes in an input and
// returns a boolean whether or not that input is an array
// or not.
        function isArray(input) {
            return Array.isArray(input);// capital Array returns diff

        }

// function isArray(input){
//     return typeof input === 'array';
// }

// function isArray(value) {
//     return (value instanceof Array);
// }


//Define a function named upperCase that takes in a single
//input. If the input is not a string, return false. If the input
//is a non-numeric string, then return it with all the
//letters capitalized.

        function upperCase(input) {
            if (typeof input !== 'string') {
                return false;
            } else {
                return input.toUpperCase();
            }
        }


//______________________________________________________________//
        function typeCheck(input) {
            if (typeof input === 'string') {
                return 'Haha, it\'s a string of a string'
            }
        }

        console.log('input is an empty string: ', typeCheck(''));
        console.log('input isNaN(): ', typeCheck(isNaN()));
        console.log('input is !false * 3: ', typeCheck(!false * 3));
        console.log('input is 4 + \'4\', ', typeCheck(4 + '4'));
//console.log(typeCheck(''));

//------------------------------------------------------------------------------------------------------//
        function isBoolean(input) {
            return input === true;
            console.log(input)
        }

        prompt("What is your name dude?"); // returns a string;

//Function structure

// function todaysDate(parameter1, parameter2, ect...){
//     ...Do something..
//       .. return something
        //}


        // warm-ups
        // The following code will set the variable hadBreakfast to a random boolean value.
        // Copy and paste the following code into your warmups JS file:
        //     var hadBreakfast = Boolean(Math.round(Math.random()));
        // Write a ternary expression to set a variable of hadBreakfastMessage to a string
        // expressing whether or not you have had breakfast.
        // You will use the variable hadBreakfast as your condition.


        var hadBreakfast = Boolean(Math.round(Math.random()));
        var hadBreakfastMessage = (hadBreakfast) ? "Yes, I had breakfast" : "No, I didn't eat any breakfast";

        console.log(hadBreakfast);
        console.log(hadBreakfastMessage);

        /**_____________________________________________________________________________________*/

        function printSeven() {
            return 7;
        }

        console.log(printSeven());

        if (false) { //(34 < 24 === false)
            console.log("See this?");
        } else {
            console.log("What about this?");
        }


        function todaysDate(greeting) {
            return greeting + Date();

        }

// Execute function *function expression and declarations*****

        var date = todaysDate("Today's date is: ");

        console.log(date);

// Function declaration


// Example:

//Create a function which takes in two number parameters
// to find the Hypotenuse angle.

// Parameters are the placeholders stated in the function definition.
        function findHypotenuse(a, b) {
            var result;
            result = Math.sqrt((a * a) + (b * b))
            return result;
        }

// Have a triangle with the sides of 4 and 5.
// Execute our function to find the hypotenuse.
// Function expression / anonymous function
        var sayBye = function (name) {
            var localVar = 'I be a local one.'
            console.log(localVar);
            return 'Goodbye ' + name;
        }


        console.log(sayBye('Nick'));
// console.log(localVar);
// Example:

// Create a function which takes in two
// number parameters to find the Hypotenuse angle.

// Parameters are the placeholders stated in the function definition.
//Arguements are the values that are put into the function  when executed.
        console.log(findHypotenuse(4, 5))


// Functions do not REQUIRE parameters, here we just want to print the word
        function printFour() {
            return 'four';
        }

        console.log(printFour());

// FUNCTION SCOPE

// Scope is a term to describe where a variable can be accessed.
//Its more about variables.
//
// With my global variable that exists in the HTML document,
// console.log(global);


        // function greeting() {
        //     var firstName = 'David';
        //     var lastName = 'Stephens';
        //     return 'Hello, ' + firstName + lastName;
        //
        // }
        //
        // console.log(greeting());
        // console.log(firstName, lastName);

        // Immediately Invoked Function Expression (IIFE)


        // var ifyVar = 'I am local to the IIFE'
        //
        // function myFunction() {
        //     return info;
            //var of info can still be accessed here because it was defined
            //"globally" (inside the IIFE).
            //kind of like containers of a function



//console.log(ifyVar);
})();