(function (){
    "use strict";


    // logTheCheeses();

    // console.log(cheeses);

    /**
     * Audience: "But David, just as you have showed us that we can create, can we not also
     * destroy? How can we remove an element from an array without reassigning the value."
    */
     // Pop will lop off the last element of an array.
     // Here's a trick, let's shift Ragstone from the array.

     var removedCheese = cheeses.shift();

     // console.log(removedCheese + " has been removed from cheeses array.");
     // logTheCheeses();

     // It's important to note that the return from the pop and shift methods is the item being removed from the array.
     // Let's add Ragstone back to the end of the array.
     // The slice method will work a lot like the substring method, in that it can return a value from either one or two arguments

     var myFavCheeses = cheeses.slice(cheeses.indexOf("Muenster"), cheeses.indexOf("Kraft American Singles")+1);
     var myFavCheeses = cheeses.slice(cheeses.indexOf("Muenster"), cheeses.indexOf("Kraft American Singles") + 1);

     // By passing one argument, we start at the specified index and return an array to the end.
     var otherCheeses = cheeses.slice(7);

     // console.log(myFavCheeses);
     //
     // console.log(otherCheeses);
     // console.log(removedCheese.substring(removedCheese.indexOf("stone")));
     // console.log(removedCheese);

     // Notice that using the slice method didn't remove the cheeses I liked from the cheeses array. By assigning the return from the slice method to a variable I was able to call on it's value.
     // Notice that using the slice method didn't remove the cheeses I liked from the cheeses array. By assigning the return from the slice method to a variable I was able to call on it as it's own value.

     function copyOfArray(array) {
        return array.slice();

    reversedCheeses.reverse();

    // logTheCheeses();

    //
    // console.log("//////////");

    //
    // reversedCheeses.forEach(function(cheese) {
    //     console.log(cheese);
    // });

    cheeses.sort();

    // logTheCheeses();

    //
    // console.log(myFavNumbers.sort().reverse());

    //
    // console.log([6, 19, 55, "Walter", "Jesse", "Mike"].sort());

    /**
     * "Hey David, now that I understand how arrays work a lot better, can we get a bit more wild with it?"
     */


    var csvNames = 'David,Javier,Jay,Codey The Duck';
    var names = csvNames.split(",");

        // Secret time: Let's talk about joining two arrays together...

    var alphaTeam = ["David", "Jay", "Javier", "Justin", "Dorian", "Douglas", "Fernando"];
     var goldTeam = ["Kenneth", "Sam", "Zach", "Casey", "Vivian", "Jason", "Codey The Duck"];
    var staff = alphaTeam.concat(goldTeam);


    // console.log(alphaTeam);
    // console.log(goldTeam);
    // console.log(staff);

return arr1.concat(arr2);
}

// console.log(removeAtIndex(cheeses, cheeses.indexOf("Kraft American Singles")));
console.log(removeAtIndex(cheeses, cheeses.indexOf("Kraft American Singles")));
//
// console.log(cheeses.splice(cheeses.indexOf("Kraft American Singles")));

// Splice is the slice method, but destructive. Meaning it will remove the sliced fragment from the original array.

logTheCheeses();

})();