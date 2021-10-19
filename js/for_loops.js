"use strict";


//accepts a number and console.logs the multiplication table for that number
(function (){



    function showMultiplicationTable(num) {

    for (var i = 1; i <= 10; i++){
        console.log(num + " x " + i + " = " + (num * i));
         var answer = i * num;

         //console.log(`${num} x ${i} = ${answer}` ); // need to research this!!!!!


       }
}

showMultiplicationTable(7);

for (var j = 1; j<=10; j++) { //will run 10 times

    var randomNum = Math.floor((Math.random() * 180) + 20); // 200 - 20 + 1
    // Math.floor(math.random() * (max - min) + min );
    if (randomNum % 2 === 0) {

        console.log(randomNum + " is an even number");

    } else {
        console.log(randomNum + " is an odd, so never mind dude");
    }
}
// for (var multiplier = 1; multiplier <= 7; multiplier++) for (var i = 1; i <= 7; i++) {
//     var result = multiplier * i;
//     console.log(multiplier + ' x' + ' = ' + result);
//

//#4
//Create a for loop that uses console.log to create the output shown below.
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999



for ( var k = 1; k <=9; k++){
     console.log(k.toString().repeat(k));
    }
//for ( var k = 1; k <=9; k++){
//     var str = "";
//     for (var l = 1;  l <= k; k +=1)
//         str += "\n";
//          }
//         console.log(str);  }

//#5
//Create a for loop that uses console.log to create the output shown below.
//100..
// 5
for (var i = 100; i >= 5; i = i - 5) {
    console.log(i);
}
})();