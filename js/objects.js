(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = [{
        fName: "Nick ",
        lName: "Diaz"
    }];
    console.log("My name is " + person[0].fName + person[0].lName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


    person.sayHello = function () {
        console.log("Hello from " + person[0].fName + person[0].lName + "!");
    };

    person.sayHello();
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
//NOTES:
        // using conditionals,   logs to the
        // browser, how much Ryan, Cameron and George need to pay
        // display a line with the name of the person, the amount before the
        // discount, the discount, if any, and the amount after the discount.
    var shoppers = [
            {name: 'Cameron', amount: 180},
            {name: 'Ryan', amount: 250},
            {name: 'George', amount: 320}
        ];

    var amountSpent = (cart) => {
        cart.forEach(spent => {
            // console.log(spent)
        })
    }
    amountSpent(shoppers)

    var amountTotalSpent = (cart) => {
        var totalAmount = 0

        cart.forEach(spent => {
            if (spent.amount >= 200) {
                var amount = spent.amount * .12
                totalAmount += amount
            } else if (spent.amount <= 200) {
                amount = spent.amount
                totalAmount += amount
                console.log(" Total amount: " + totalAmount + "." + " Discount is applied at $200 or more. Thx though.")
            }
        })
        console.log("Total spent " + totalAmount)
        return totalAmount
    }
    amountTotalSpent(shoppers)
    // var totalPrice = 0;
    // cart.forEach( item => {
    //     var
    // })

//Trying to learn this for loop conversion...
// Converting for loop to forEach
// Converting for loop to forEach
    /**

     var items = ['item1', 'item2', 'item3']
     var copyItems = []

     items.forEach(function(item){
        copyItems.push(item)
    })
     console.log(items);
     **/

    // var i;
    // for (i = 0; i > shoppers.valueOf(i); i++)
    //     console.log(shoppers[i]);
    // var amount;
    // {
    //  shoppers.forEach(myFunction())
    //     // console.log(amount);
    // }


    // amount {[shoppers.totalBill]} = function () {
    //    if (this.amount > 200) {
    //
    //        return "Price before discount: " + this.amount + "." + "Price after discount";
    //    } else if{
    //
    //        totalBill = ("The total amount did not qualify for discount. Total amount is: " + totalBill);
    //        return totalBill;


    //>200 - .12 discountApplied;


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
        //Dune by Frank Herbert
        //The Salmon of Doubt by Douglas Adams
        //1984 by George Orwell
        //Fahrenheit 451 by Ray Bradbury
        //The Stand by Stephen King

    var books = [{
            title: '1984',
            author: {
                firstName: 'George',
                lastName: 'Orwell'
            }
        },
            {
                title: 'Dune',
                author: {
                    firstName: 'Frank',
                    lastName: 'Herbert'
                }
            },
            {
                title: 'The Salmon of Doubt',
                author: {
                    firstName: 'Douglas',
                    lastName: 'Adams'
                }
            },
            {
                title: 'Fahrenheit 451',
                author: {
                    firstName: 'Ray',
                    lastName: 'Bradbury'
                }
            },
            {
                title: 'The Stand',
                author: {
                    firstName: 'Stephen',
                    lastName: 'King'
                }
            }];
    books.forEach(book => {
    })
    console.log("The novel " + books[0].title + " by " + books[0].author.firstName + " " + books[0].author.lastName);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
var book;
    books.forEach(function(book){
        console.log(book);
        });
 console.log( books.title + " book" )
    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    //
    // var amountSpent = (cart) => {
    //     cart.forEach(spent => {
    //         // console.log(spent)
    //     })
    // }
    // amountSpent( shoppers )



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */











})();
