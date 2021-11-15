var i = 0;
while(i <= 10) {
    console.log(i);
    i++;
}
var isColdOutside = true;

// var clothingToWear;
//
// if (isColdOutside) {
//     clothingToWear = 'sweater and a jacket';
// } else {
//     clothingToWear = 'shorts and a t-shirt';
// }
//ternary operator:
var clothingToWear = isColdOutside ? 'sweater and a jacket' : 'shorts and a t-shirt';




console.log(clothingToWear)
console.log(10 % 3);

//There is an array with some numbers. All numbers are equal except for one. Try to find it!
//
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// SAMPLE TESTS:
// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(findUniq([ 0, 1, 0 ]), 1);
// Test.assertEquals(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
// Test.assertEquals(findUniq([ 3, 10, 3, 3, 3 ]), 10);
//   });
// });

function findUniq(arr){
    return +arr.filter((value) => {
        return arr.indexOf(value) === arr.lastIndexOf(value) });
}
            /**  OR  */
 function findUniq(arr) {
  arr = arr.sort()
  if (arr[0] === arr[1]){
    return arr[arr.length -1]
  } else {
    return arr[0]
  }
}


//Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
// Examples
//
// lessThanOrEqualToZero(5) ➞ false
//
// lessThanOrEqualToZero(0) ➞ true
//
// lessThanOrEqualToZero(-2) ➞ true

function lessThanOrEqualToZero(num) {
    if(num <= 0){
        return true;
    }else{
        return false;
    }
}

// Write a function that returns the string "something" joined with a space " " and the given argument a.
//     Examples
//
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"
//
// giveMeSomething("Bob Jane") ➞ "something Bob Jane"
//
// giveMeSomething("something") ➞ "something something"
//
// Notes
//
// Assume an input is given.

    function giveMeSomething(a) {

    return "something" + " "  + a



}



/**
 * You are going to be given a word. Your job is to return the middle character of the word.
 * If the word's length is odd, return the middle character.
 * If the word's length is even, return the middle 2 characters.

 #Examples:
 Kata.getMiddle("test") should return "es"
 Kata.getMiddle("testing") should return "t"
 Kata.getMiddle("middle") should return "dd"
 Kata.getMiddle("A") should return "A"

 #Input
 A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
 #Output
 The middle character(s) of the word represented as a string.

 * */
function getMiddle(s)
{
    if (s.length < 3) {
        return s
    }
    if (s.length > 2) {
        if (s.length % 2 === 0) {
            var middleIndex1 = (s.length/2)-1
            var middleIndex2 = s.length/2
            return s[middleIndex1] + s[middleIndex2]
        } else {
            var middleIndex = Math.floor(s.length/2)
            return s[middleIndex]
        }
    }
}

/**
 *A collection of characters (letters, numbers, symbols) is known as a string.
 * Strings must begin and end with quotation marks.
 * Either single ' or double " will work, so long as you use the same at the beginning and end.

 "edabit.com"

 'edabit.com'

 The quotes are there to indicate the enclosed text is a value, not code.
 The word "variable" means "can change"; they're used to store values that can change.
 A variable is like a box with a sticky note stuck to it. Referencing the name on the sticky note will allow you to access whatever is inside the box (variable). Like the x and y variables used in mathematics, they're a simple name to represent the data we want to refer to.
 Let's use the keyword var to declare (i.e. create) a variable named animal:

 var animal = "Fox"
 var is shorthand for variable and = means store the value on the right-hand side in the variable on the left-hand side. You can name a variable anything you want, but it can't contain spaces.

 After the equals = sign, enter the string "edabit.com". Remember that strings must be wrapped in quotes " ".

 var website = "edabit.com"


 In modern JavaScript, var is rarely used to declare variables.
 Instead, we use const (shorthand for constant) and let.
 For this beginner tutorial, we'll be using const from now on.

 Let's create a variable from scratch.
 Declare the variable food and assign it the value "pizza". Use const instead of var.
*/
 // enter code below this line
 const food = "pizza";

 /**Like strings, numbers are values but they're not wrapped in quotes. They can be written with or without decimals and can be positive or negative.

 const temperature = -7.5

 If a number does not contain a decimal, it's referred to as an integer.

 Declare a variable named day and assign it the value 19.
*/
 // enter code below this line
 const day = 19;

/**
 Operators are the symbols between values that allow different operations like addition +, subtraction -, multiplication *, division /, etc. JavaScript has dozens of operators, but we'll just focus on arithmetic operators, since they're the ones you’ll use most as a beginner.
 Divide 100 by 2.
*/
 const division = 100/2;


/**
 Of course, there are other operators like modulus %, exponentiation **,
 increment ++, decrement --, and many more.
 Use the + operator to concatenate (combine) two strings together.

 Declare the variable name.
 Concatenate firstName with lastName (notice the N is capitalized).

 Your code should look exactly like what you've done in the above example, only you'll be adding (using the + operator) two strings together.
 const firstName = "Luke "
 const lastName = "Skywalker"
 */
 // enter code below this line
 name= firstName + lastName;
/**
 Functions are blocks of code that can be named and reused. They are given data, do something specific with the data, and return a result.

 This is what a basic function looks like:
*/
 function addTwoNumbers(num1, num2) {
     return num1 + num2

}
/**
 Can you guess what it does? Let's look at each part:

 addTwoNumbers is the name of the function.
 num1 and num2 are parameters (i.e. variables containing input data).
 return is the keyword that exits the function and returns a value (output).

 Using the return keyword is very important. When you encounter a function, you must return your answer, otherwise the code won't work.

 The below function takes two parameters, each containing a number.

 Multiply the first parameter num1 by the second parameter num2.
 Remember to use the return keyword, as shown in the above example.

 function multiplyTwoNumbers(num1, num2) {

  return num1 * num2

}


 Although functions usually take parameters, they don't necessarily have to.

 function hello() {

  return "Hello World!"

}

 When the above function hello() is called, it will output "Hello World!".

 Arrays are lists of items. They look like this:

 const fruit = ["apple", "banana", "orange", "mango", "tomato"]

 Each fruit in the above array is called an element. Although every element in the above example is a string, array elements can be any value:

 const stuff = [true, 1976, null, "hey"]

 Each element in an array has an index that starts at 0. Using the first fruit example, "apple" is at index 0, "banana" is at index 1, "orange" is at 2, and so on until the end of the array.

 To access a specific element within an array, we do this:

 fruit[2]

 That's the index for "orange".
 Return the element "Donatello".
 Remember the first element in an array is 0.
 Always return your answer!
*/
 const turtles = ["Raphael", "Michelangelo", "Leonardo", "Donatello"]
  function turtlePower(turtles) {
      return turtles[3]

}
/**
 Elements in arrays are mutable, which means they can be changed.
 For example, let's say we've got an array of numbers:
 const numbers = [14, 56, 78]
 To change the value of 14 (at index 0), we do this:
 numbers[0] = 35

 Given an array of numbers, set the value of the data stored at index 1 to 88.
*/
 const numbers = [1, 4, 6, 8, 0]

 // enter code below this line
 numbers[1] = 88

/**
 In most cases, you won't know the exact length of an array.
 In other words, you won't know how many elements it contains.
 That's where the .length property comes in.
 Let's say we have an array of movie names:

 const movies = ["The Matrix", "Se7en", "The Wizard of Oz", "Marry Poppins"]

 To get the exact length of the movies array, we would use the .length property.
 movies.length

 That would give you 4, as there are four elements in the movies array.
 Given an array arr of unknown length, return its length.
*/
 function getLength(arr) {
      return arr.length
}
/**
 Arrays are good for lists, but for other tasks they can be hard to work with. Consider an array of names:

 const firstNames = ["Tyrion", "Jon", "Jorah", "Arya", "Joffrey"]
 const lastNames = ["Lannister", "Snow", "Mormont", "Stark", "Baratheon"]

 What if you have a last name in mind (let's say it's Snow) and want to look up his first name.
 With arrays, it takes a lot of work because "Jon" is in one array,
 and "Snow" (his last name) is in a totally different array.
 This can get very messy because if we add a new person to the firstName array,
 we have to also update the lastName array.
 If we want to keep track of more than a person's first and last names, things get complicated.
 Objects are an easier way to store and maintain information, like this:

 const person1 = {
        firstName: "Joffery",
        lastName: "Baratheon",
        email: "joff@widowswail.com"
}
*/
 const person2 = {
      firstName: "Jon",
      lastName: "Snow",
      email: "brooding@thewall.com"
}

 const person3 = {
    firstName: "Tyrion",
    lastName: "Lannister",
    email: "tyrion@pourmeanother.com"
}
/**
 Now we have a variable for each person that can be used to get their values in a more maintainable and readable way.

 Objects are like keys on a keyring that open a specific door and behind each door is a room that can store many things. If each key is labeled, you can quickly open doors and access the stuff inside.
*/
//  const person2 = {
//     firstName: "Jon",
//     lastName: "Snow",
//     email: "brooding@thewall.com"
// }

/**
 The things on the left of the : are called keys and the things on the right are values. We refer to this as key-value pairs.

 Input the following key-value pairs for person4.

 Give firstName the value "Daenerys".
 Give lastName the value "Targaryen".
 Give email the value "dragonlady@gmail.com".
*/
 const person4 = {
    firstName: "Daenerys",
    lastName: "Targaryen",
    email: "dragonlady@gmail.com"
}
/**
 If you want to access the lastName of person3, you would return person3.lastName.
 This is called dot notation because it uses a . to specify the key you want to access.
 Use dot notation to access the email of person.
*/
 function getEmail(person) {
    return  person.email
    }

    /**
 Loops offer a quick and easy way to do something repeatedly.
 This section will cover the most common ways of doing loops in modern JavaScript.
 The .map() method applies a function to every element in an array.
 A new array is then returned. In other words, .map() takes an array,
 does something to every element in the array and returns a new array.

 Let's say we have an array of numbers:
     const numbers = [1, 4, 9, 16]

 To multiply every element in the numbers array by 2, we do this:
 numbers.map(x => x * 2)
     Which would return:
            [2, 8, 18, 32]
--
 Subtract 2 from every element in the numbers array.
*/
// const numbers = [1, 4, 9, 16]
//     function subtractTwo(numbers) {
//         return numbers.map(x => x - 2)
// }

/**
 * The .map() method applies a function to every element in an array.
 * A new array is then returned. In other words, .map() takes an array,
 * does something to every element in the array and returns a new array.

 Let's say we have an array of numbers:
 const numbers = [1, 4, 9, 16]

To multiply every element in the numbers array by 2, we do this:
 numbers.map(x => x * 2)
 Which would return:
     [2, 8, 18, 32]

 Subtract 2 from every element in the numbers array.
*/
// const numbers = [1, 4, 9, 16]
//
// function subtractTwo(numbers) {
//   return numbers.map(x => x - 2)
//
// }
/**  The .filter() method returns a new array containing all elements
 * that pass a test from a function you provide.
 * In other words, .filter() takes an array,
 * tests every element and returns a new array containing only elements that pass a test you provide.
 Let's say we have an array of strings:

 const words = ["thaw", "achievement", "gain", "outlet", "difference"]
 To return only elements in the words array less than 5 characters in length, we do this:

 words.filter(word => word.length < 5)

 Which returns the following output:
 ["thaw", "gain"]

 Return only numbers in the years array greater than 1950.*/
const years = [1763, 1972, 1925, 1916, 1984, 1124, 1950, 2020]

function getYears(years) {

     return years.filter(year => year > 1950)

}


/** It is not returning the right values. Can you help him fix it?
  a = 100
 b = 200
 a, b = swap(a, b)
 print(a, b) // Should print out "200, 100", but the function prints out "100, 100"

 Examples
 swap(100, 200) ➞ [200, 100]
 swap(44, 33) ➞ [33, 44]
 swap(21, 12) ➞ [12, 21] */
function swap(a, b) {

    return [b, a]
}

/**You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
 Examples
 points(1, 1) ➞ 5
 points(7, 5) ➞ 29
 points(38, 8) ➞ 100 */

function points(twoPointers, threePointers){
    return twoPointers * 2 + threePointers * 3;
}


/**Create a function that takes length and width and finds the perimeter of a rectangle. */
function findPerimeter(length,width){
    return (length + width) * 2;
}


/**Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
 Examples
 lessThanOrEqualToZero(5) ➞ false
 lessThanOrEqualToZero(0) ➞ true
 lessThanOrEqualToZero(-2) ➞ true
 */


function lessThanOrEqualToZero(num) {
    if (num <= 0){
        return true;
    }else{
        return false;
    }
}


/**Description:

 Given the triangle of consecutive odd numbers:

 1
 3     5
 7     9    11
 13    15    17    19
 21    23    25    27    29
 ...
 */

 function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

 function rowSumOddNumbers(n) {
  return n*n*n
}


/** if (a = true)  Then B, Else C, End if
 * Java If-ElseIn this challenge, we test your knowledge of using if-else
 * conditional statements to automate decision-making processes.
 An if-else statement has the following logical flow:
 Task
 Given an integer, n, perform the following conditional actions:
 If n  is odd, print  Weird
 If n is even and in the inclusive range of 2 to 5, print  Not Weird
 If n is even and in the inclusive range of 6 to 20, print  Weird
 If n is even and greater than 20, print  Not Weird

 Complete the stub code provided in your editor to print whether or not   is weird.
 Input Format:
 A single line containing a positive integer,n.
 Constraints
 1 <= n <= 100

 Output Format:
 Print  Weird  if the number is weird; otherwise, print  Not Weird .
 Sample Input 0
 3
 Sample Output 0
 Weird
 Sample Input 1
 Source: Wikipedia
 24
 Sample Output 1
 Not Weird

 Explanation
  Sample Case 0:
 n is odd and odd numbers are weird, so we print  Weird .

  Sample Case 1: n =24
 n > 20 and n is even, so it isn't weird. Thus, we print  Not Weird  */


//
// if ( n !== 0) {
//     return weird;
//}
/**Remember this?
 *  Scanner sc=new Scanner(System.in);
 for(int i=0; i<3; ++i) {
         int a=sc.nextInt();
      System.out.println(a);
      }
 }
 }
 */







//1. A farmer is asking you to tell him how many legs can be counted among all his animals.
//the farmer breeds three species:
//The farmer has counted his animals, and he gives you a subtotal for each species.
//you have to implement a function named animal that returns the total number of legs.
//chickens = 2 legs
//cows = 4 legs
//pigs = 4 legs

function animals(chicken, cow, pigs){
    return ((chicken * 2) *(cow * 4) * (pigs * 4));

console.log(animals(3, 4,2));// call your functioni "animals"

function findPerimeter(length, width){
    return (length * 2 ) + (width * 2);

}
console.log(findPerimeter(2,2))

//Define a function named concatName.
// Given two strings, firstName and lastName, return a single string in the format " last and first".

function concatName(firstName, lastName){
    return lastName + " " + firstName;
}
console.log(concatName("Nicko", "Diaz"))


function triArea(base, height){
    return (base*height)/2;
}

//Define a function named lessThan100.
// Given two numbers, return true if the sum of both numbers is less than 100.
// Otherwise return false.

function lessThan100(x, y){
    if ((x + y) < 100){
        return true;
    }else{
        return false;
    }
}
console.log(lessThan100(1,  1))}



/** Write a function that takes in a string of one or more words, and returns the same string,
 but with all five or more letter words reversed (like the name of this kata).
 Strings passed in will consist of only letters and spaces.
 Spaces will be included only when more than one word is present.

 Examples:
 spinWords("Hey fellow warriors") => "Hey wollef sroirraw"
 spinWords("This is a test") => "This is a test"
 spinWords("This is another test") => "This is rehtona test"
 */

function spinWords(sentence){
    var sentenceArray = sentence.split(' ');
    var result = '';

    sentenceArray.map((str, i) =>{
        if(str.length >= 5) {
            sentenceArray[i] = str.split('').reverse().join('');
        }else{
            sentenceArray[i] = str;
        }
        result = sentenceArray.join(' ');
        });
                return result;
}   console.log(spinWords('warriors'))


// REVERSE words
//---------------------//
function spinWords(string){
    //TODO Have fun :)
    var stringArray  =  string.split(' ');
    var result = '';

    stringArray.map((str, i ) => {
        if(str.length >= 5){
            stringArray[i] = str.split('').reverse().join('');
        }else{
            stringArray[i] = str;
        }
        result = stringArray.join(' ');
    });
    return result;
}

/*Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Example

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!
*/
function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";

    for(var i = 0; i < numbers.length; i++)
    {
        format = format.replace('x', numbers[i]);
    }

    return format;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
/*
* Given an integral number, determine if it's a square number:

    In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.
Examples

-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/

var isSquare = function(n){
    return Math.sqrt(n) % 1 == 0 ? true : false;
};

/**
 * Usually when you buy something, you're asked whether your credit card number,
 * phone number or answer to your most secret question is still correct.
 * However, since someone could look over your shoulder, you don't want that shown on your screen.
 * Instead, we mask it.

 Your task is to write a function maskify, which changes all but the last four characters into '#'.
 Examples

 maskify("4556364607935616") == "############5616"
 maskify(     "64607935616") ==      "#######5616"
 maskify(               "1") ==                "1"
 maskify(                "") ==                 ""

 // "What was the name of your first pet?"
 maskify("Skippy")                                   == "##ippy"
 maskify("Nananananananananananananananana Batman!") == "####################################man!"

 * */

//return a masked string
function maskify(creditCard){
    //If length is greater than 4, then we have things to mask
    if(creditCard.length > 4) {
        //reverse string dude
        // var reversed = reverse(creditCard);
        let newString = '';

        for (let i = 0; i < creditCard.length; i++) {
            //if i < 4, we want to reveal these numbers in our output
            if (i < 4) {
           //     newString += reversed[i];
            } else {
                //otherwise, just HIDE it.
                creditCard += "*";
            }
        }
        //return the REVERSAL of the string to revert it back to the original format
       // return reverse(newString);
    }else{
        return creditCard;
    }
}
    // function reverse(str){
    //      return str.split("").reverse().join("");
    // }
    console.log(maskify(99876224))
///////////////////////////////////////////////////////////////////////////
// function maskify(cc){
//     var maskedString = "";
//         for (var i = 0; i < cc.length; i++) {
//             if(i < cc.length - 4 )
//             maskedString = maskedString + "#";
//         }else
//     {
//         maskedString = maskedString + cc.charAt(i);
//     };
//         }
//         return maskedString;
// }



/**------------------------------------------------------------------ **/


// A farmer is asking you to tell him how many legs can be counted among all his animals.
// The farmer breeds three species:
//
//     chickens = 2 legs
//
// cows = 4 legs
//
// pigs = 4 legs
//
// The farmer has counted his animals, and he gives you a subtotal for each species.
// You have to implement a function named animal that returns the total number of legs of all the animals.
//
//     Define a function named findPerimeter that takes in length and width and
//     finds the perimeter of a rectangle.
//
//     Define a function named concatName.
//     Given two strings, firstName and lastName, return a single string in the format
//     "last, first".
//
//     Write a function named triArea that takes in 2 inputs,
//     the base and height of a triangle and return its area.
//
//     Define a function named lessThan100. Given two numbers,
//     return true if the sum of both numbers is less than 100. Otherwise return false.
//
//     Write a function named makesTen that takes two inputs.
//     Both arguments are integers, a and b.
//     Return true if one of them is 10 or if their sum is 10.
//
// You are counting points for a basketball game,
// given the amount of 2-pointers scored and 3-pointers scored,
// create a function named points that will find the final points for the team
// and return that value.
//
//     Define a function named Convert that takes in minutes as an input
//     and will converts those minutes into seconds.
//
//     Write a function named remained that takes two numbers as inputs.
//     The first parameter divided by the second parameter will have a remainder,
//     possibly zero. Return that value.
//
//     Write a function named getFirstValue that takes an array
//     containing only numbers and return the first element.
