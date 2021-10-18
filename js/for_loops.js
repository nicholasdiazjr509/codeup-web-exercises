"use strict"


//accepts a number and console.logs the multiplication table for that number

//function showMultiplicationTable {

function showMultiplicationTable(num) {

    for (var i = 1; i <= 7; i++){
         var answer = i * num;
         console.log(`${num} x ${i} = ${answer}` );


       }
}

showMultiplicationTable(7);

for (var i = 20; i<=200; i++);

    var i = Math.floor(Math.random() * 200 ) ; // 200 - 20 + 1

        if (i % 2 === 0) {

            console.log(i +" is an even number")

        }else{
            console.log( i + " is an odd, so never mind dude");
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



for (  i = 1; i <=9; i++){
     console.log(i.toString().repeat(i));
    }


//#5
//Create a for loop that uses console.log to create the output shown below.
//100..
// 5
for (var i = 100; i >= 5; i = i - 5){
    console.log(i);
}