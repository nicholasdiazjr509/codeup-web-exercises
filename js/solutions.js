/**if (a = true)  Then B, Else C, End if
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



if ( n !== 0) {
    return weird;
}
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
