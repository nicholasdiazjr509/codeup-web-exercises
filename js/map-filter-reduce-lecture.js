$(document).ready(function(){
/** EXAMPLE from curriculum of standard patter
 * before filter is used*/
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var evens = numbers.filter(function(n) {
//     return n % 2 === 0;
// });
// console.log(evens); // [2, 4, 6, 8, 10]
//
// /** For .filter, if the callback returns true, the element will be in the new collection,
//  * if it returns false, the element will not be part of the new collection.
// */
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var evens = numbers.filter(function(n) {
//     return n % 2 === 0;
// });
// console.log(evens); // [2, 4, 6, 8, 10]
// /**For .map, the return value of the callback will be the new value of the element.*/
//     var incremented = numbers.map(function(n) {
//     return n + 1;
// });
// console.log(incremented); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
//
// /**Let's rewrite the above examples with es6 syntax:*/
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evens = numbers.filter(n => n % 2 === 0);
//         console.log(evens); // [2, 4, 6, 8, 10]
// const incremented = numbers.map(n => n + 1);
//         console.log(incremented); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
//
// /** Reduce
//     .reduce is used to reduce a collection to a single value.
//     Most commonly, we will use it to transform a collection into a primitive value:
// */
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulation, currentNumber) => {
//     return accumulation + currentNumber;
// }, 0);
// /**Notice here that we define the callback passed to .reduce
//  * with 2 parameters: one representing the accumulation that we are creating,
//  * and the other representing each item in the array.
//  * We also specify an initial value for the accumulation (the second argument to .reduce).
// */
//
// const salesPeople = [
//     {name: 'Jim Halpert', sales: 100},
//     {name: 'Dwight Schrute', sales: 50},
//     {name: 'Andy Bernard', sales: 150},
// ];
//
// const totalSales = salesPeople.reduce((total, person) => {
//     return total + person.sales;
// }, 0);
// /**In addition, we can use .reduce to transform the shape of a collection.
//  *  For example: let's say we have an array of words,
//  *  and we want to count the number of occurrences for each word.
//  *  We could transform our array of strings into an object whose property
//  *  names are each word, and whose values are the number of times each word appears.
// */
//
// function countWords(sentence) {
//     const words = sentence.split(' '); // transform a sentence into an array of words
//     const wordCountObject = words.reduce((wordCounts, word) => {
//         if (typeof wordCounts[word] === 'undefined') {
//             // if the word is not yet present in our object, set it's value to 1
//             wordCounts[word] = 1;
//         } else {
//             // otherwise increment the existing count
//             wordCounts[word] += 1;
//         }
//         return wordCounts;
//     }, {}); // start with an empty object
//     return wordCountObject;
// }
//
// countWords('Mary had a little lamb little lamb little lamb');
// // {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}

/*************************************LECTURE ******************************************/

let foodOptions = [
    {type: "drive-thru", name: "McDonald's", specialty: "burgers"},
    {type: "drive-thru", name: "Dairy Queen", specialty: "burgers"},
    {type: "drive-thru", name: "Wendy\'s", specialty: "burgers"},
    {type: "drive-thru", name: "Jack in the Box", specialty: "burgers"},
    {type: "drive-thru", name: "Raising Cane\'s", specialty: "chicken"},
    {type: "drive-thru", name: "Arby\'s", specialty: "sandwiches"},
    {type: "drive-thru", name: "Bill Miller\'s BBQ", specialty: "BBQ"},
    {type: "drive-thru", name: "Sonic", specialty: "burgers"},
    {type: "drive-thru", name: "Whataburger", specialty: "burgers"},
    {type: "drive-thru", name: "Taco Bell", specialty: "burritos"},
    {type: "drive-thru", name: "Panda Express", specialty: "asian cuisine"},
    {type: "drive-thru", name: "Busch\'s Chicken", specialty: "chicken"},
    {type: "drive-thru", name: "Taco Cabana", specialty: "mexican-food"},
    {type: "drive-thru", name: "Churches Chicken", specialty: "chicken"},
    {type: "drive-thru", name: "Popeye\'s", specialty: "chicken"},
    {type: "drive-thru", name: "KFC", specialty: "chicken"},
    {type: "drive-thru", name: "Freddy\'s Frozen Custard", specialty: "burgers"},
    {type: "drive-thru", name: "Arby\'s", specialty: "sandwiches"},
    {type: "drive-thru", name: "Schlotzsky\'s", specialty: "sandwiches"},
    {type: "drive-thru", name: "Chick-fil-a", specialty: "chicken"},
    {type: "drive-thru", name: "Laguna Madre", specialty: "fish"},
    {type: "drive-thru", name: "Little Caesar\'s", specialty: "pizza"},
    {type: "drive-thru", name: "In-N-Out", specialty: "burgers"},
    {type: "drive-thru", name: "Carl\'s Jr.", specialty: "burgers"},
    {type: "drive-thru", name: "Las Palapas", specialty: "mexican-food"},
    {type: "drive-thru", name: "Taco Palenque", specialty: "mexican-food"},
    {type: "drive-thru", name: "Mama Margie's", specialty: "mexican-food"},
    {type: "order-to-go", name: "La Madeleine", specialty: "sandwiches"},
    {type: "order-to-go", name: "Pizza Hut", specialty: "pizza"},
    {type: "order-to-go", name: "Domino\'s", specialty: "pizza"},
    {type: "order-to-go", name: "Papa John\'s", specialty: "pizza"},
    {type: "order-to-go", name: "Wing Stop", specialty: "wings"},
    {type: "order-to-go", name: "Plucker\'s", specialty: "wings"},
    {type: "order-to-go", name: "Wing Daddy\'s", specialty: "wings"},
    {type: "order-to-go", name: "Goomba\'s Pizzeria", specialty: "pizza"},
    {type: "order-to-go", name: "Oblate Cafe", specialty: "mexican-food"},
    {type: "order-to-go", name: "Panchito\'s", specialty: "mexican-food"},
    {type: "order-to-go", name: "Rusty Bucket\'s Jaw-Smacking BBQ", specialty: "BBQ"},
    {type: "order-to-go", name: "Rudy's BBQ", specialty: "BBQ"},
    {type: "order-to-go", name: "Freebird's", specialty: "burritos"},
    {type: "order-to-go", name: "Chipotle", specialty: "burritos"},
    {type: "order-to-go", name: "Blanco BBQ", specialty: "BBQ"},
    {type: "dine-in", name: "Chili's Grill & Bar", specialty: "bar-grill"},
    {type: "dine-in", name: "J. Alexander's Restaurant", specialty: "bar-grill"},
    {type: "dine-in", name: "Cheddar's Scratch Kitchen", specialty: "bar-grill"},
    {type: "dine-in", name: "Twin Peaks", specialty: "bar-grill"},
    {type: "dine-in", name: "Walk-Ons", specialty: "wings"},
    {type: "dine-in", name: "Guillermo's", specialty: "mexican-food"},
    {type: "dine-in", name: "Applebee's", specialty: "bar-grill"},
    {type: "dine-in", name: "T.G.I. Friday's", specialty: "bar-grill"},
    {type: "dine-in", name: "Kona Grill", specialty: "asian cuisine"},
    {type: "dine-in", name: "Republic of Texas", specialty: "bar-grill"},
    {type: "dine-in", name: "Iron Cactus Mexican Restaurant and Margarita Bar", specialty: "mexican-food"},
    {type: "dine-in", name: "Paesanos Rivervalk", specialty: "italian"},
    {type: "dine-in", name: "Olive Garden", specialty: "italian"},
    {type: "dine-in", name: "Macaroni Grill", specialty: "italian"},
    {type: "dine-in", name: "Luciano's Neighborhood Pizzeria", specialty: "italian"},
    {type: "dine-in", name: "Acenar Mexican Restaurant", specialty: "mexican-food"},
    {type: "dine-in", name: "Bourbon Streen Seafood Kitchen Downtown", specialty: "seafood"},
    {type: "dine-in", name: "Red Lobster", specialty: "seafood"},
    {type: "dine-in", name: "Sea Island", specialty: "seafood"},
    {type: "dine-in", name: "Ostra Restaurant", specialty: "seafood"},
    {type: "dine-in", name: "Tomatillo's", specialty: "mexican-food"},
    {type: "dine-in", name: "Rosario's", specialty: "mexican-food"},
    {type: "dine-in", name: "Dick's Last Resort", specialty: "bar-grill"},
    {type: "dine-in", name: "Jim's", specialty: "breakfast"},
    {type: "dine-in", name: "Denny's", specialty: "breakfast"},
    {type: "dine-in", name: "IHOP", specialty: "breakfast"},
    {type: "dine-in", name: "Waffle House", specialty: "breakfast"},
    {type: "dine-in", name: "Fogo de Chao Brazilian Steakhouse", specialty: "mexican-food"},
    {type: "dine-in", name: "Mi Tierra Cafe y Panaderia", specialty: "mexican-food"},
    {type: "dine-in", name: "Pico De Gallo", specialty: "mexican-food"},
    {type: "dine-in", name: "Margaritaville", specialty: "seafood"},
    {type: "dine-in", name: "Hooters", specialty: "wings"}
];

// MAP METHOD
                                      //old way
    // foodOptions.forEach(function(restaurant){
    //     $('#foodList').append('<li>' + restaurant.name + '</li>')
    // })

    let foodHTML = foodOptions.map(restaurant => `<li>${restaurant.name}</li>` )
    //console.log(foodHTML)

    $('#foodList').append(foodHTML);

    let numbers = [1, 2, 3, 4, 5];
    let numbersPlusFive = numbers.map(number => number + 5)
        console.log(numbers)
        console.log(numbersPlusFive)

    //FILTER METHOD
    //Creates a new array with all the elements that pass the test implemented by the
    //provided function.

    var bucket = [];

    foodOptions.forEach(function(restaurant){
        if(restaurant.specialty === 'seafood'){
            bucket.push(restaurant)
        }
    })
    console.log(bucket)


    //NEW AND IMPROVED WAY

    let seafoodOptions = foodOptions.filter(restaurant => restaurant.specialty === 'seafood' );
    console.log("new way results", seafoodOptions)

    let oddNumbers = numbers.filter(num => num % 2 === 1)
        console.log(oddNumbers)

    //REDUCE METHOD
                   //callback function                //not necessary
    //array.reduce(function(prevVal,  currentVal) {}, startingPoint)
        //reduces all to 1 value
    let grades = [92, 88, 69, 76, 100, 99]
    //2 parameters (prevValue, currentValue)
    // the sum of these numbers
    let total = grades.reduce((prevValue, currentValue) => prevValue +
        currentValue, 100 )

    console.log(total/grades.length);
//so if you use a different number from array as starting point, then it adds the rest in order

let specialties = foodOptions.reduce((uniqueSpecialty, restaurant) => {
    if (!uniqueSpecialty.includes(restaurant.specialty)) {
        uniqueSpecialty.push(restaurant.specialty);
    }
    return uniqueSpecialty
}, [])
    console.log(specialties)
//to reduce
let sentenceArray = ['Row,', ' row', ' row', ' your', ' boat'];
let combineSentence = sentenceArray.reduce((previousValue, currentValue) => previousValue + currentValue);
    console.log(combineSentence)

})



