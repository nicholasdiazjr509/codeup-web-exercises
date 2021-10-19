"use strict";

// #2. Create a while loop that uses console.log()
( function (){



var multipliedNum = 2;
while (multipliedNum <= 65536) {

    multipliedNum *= 2;
    console.log(multipliedNum);
}
  //  console.log(i.toString().repeat(i));
 //   for (  i = 1; i <=9; i++) {
//         break;
//     }  ** infinite loop**

//Random number between 50 and 100

var allCones = Math.floor(Math.random() * 50) + 50;
    console.log("Opening up shop! I've got " + allCones + " cones to sell!");

    do {
        var conesToBuy = Math.floor(Math.random() * 5) + 1;

        if (conesToBuy <= allCones) {
            allCones -= conesToBuy;
            console.log("Customer want " + conesToBuy + " cones. I have " + allCones + " cones left.");
        } else {
            console.log("We are out of stock " + conesToBuy + " cones. The store only has " + allCones + " comnes left in store")

        }
    }
    while (allCones !== 0)
            console.log("Close the store.");
    })();