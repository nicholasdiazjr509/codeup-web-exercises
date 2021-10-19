"use strict";
(function (){
// Our testArray variable has now been declared, but it is an empty array.
// To declare an array with information inside of it, we would do the following.

var instructors = ["David", "Jay", "Javier", "Codey The Duck"];

// Our instructors variable has been assigned to an array with 4 elements inside of it. All four of our elements are strings, but not all elements have to be of the same type.

var falsyValues = [false, null, "", 0, undefined, NaN, true];

// Our falsyValues array has been declared with many different types of values.

    // console.log([].length);
    // console.log([1,1,1,1,1,1,1,1,9,9,9,9,0,0,0,10000000,11,22,23,24,34,45].length);

    // Here we're console logging the length of some arrays. Note that we can use this property off of variables with a value of an array, or an array literal.

    // We can also access the individual values held in an array. It's important to note: the elements of an array are zero indexed, meaning
    // the first element is at index point 0, the second at index point 1, etc.

    //     console.log("One of your instructors is named: " + instructors[i]);
    // }

    // Note that we wanted i to increment only when it was less than the length of our instructor array, but not until it was equal to it.
    // Remember that an array is zero indexed, meaning our arrays start at the index of zero, and continue until an index point one number
    // lower than the length of the array. This saves us from accessing an undefined index, and performing an undesired behavior, as seen
    // below.

    // We can also use a for loop to create something a bit more complicated...

    function testAllForFalsy(array) {
        var finalVal = -1;
        for (var j = 0; j < array.length; j++) {
            if (array[j]) { // equivalent to Boolean(array[j]) === true
                alert("Truthy value detected at index: " + j);


                // testAllForFalsy(falsyValues);

                function makeMagnificent(arr) {
                    for (var p = 0; p < arr.length; p++) {
                        arr[p] = arr[p] + " the Magnificent";
                    }
                    return arr;
                }

                // makeMagnificent(instructors);
                // console.log(instructors);

                // The above function iterates through an array to determine if all the values in it are false. When it detects a truthy value, it will
                // return the index of the first instance of a truthy value, and send an alert stating the index, If no truthy values are found, it will
                // return -1, indicating all the values are falsy, and send an alert confirming this conclusion.


                // indexOf() method

                console.log(instructors.indexOf("Geoff"));
                console.log(instructors.indexOf("Jay"));


                // We can also access every value of an array by using a forEach loop. These can be done like so:


                // Below are the examples of iteration with for loops rewritten with a forEach loop.

                instructors.forEach(function (instructor, index, array) {
                    console.log("Instructor #" + (index + 1) + " of " + array.length + " is named: " + instructor);
                });

                instructors.forEach(function (instructor, index) {
                    console.log("Instructor #" + (index + 1) + " is named: " + instructor);
                });

                instructors.forEach(function (instructor) {
                    console.log("One of your instructors is named: " + instructor);
                });

                function introduction(name) {
                    console.log("Hi, my name is " + name + "!");
                }

                instructors.forEach(introduction);

                var otherSAInstructors = ["Justin", "Kenneth", "Samuel", "Laura", "Cody the Human"];

                otherSAInstructors.forEach(introduction);

                console.log(instructors);
                console.log(otherSAInstructors);

                var numbers = [17, 22, 34, 52, 6];

                numbers.forEach(function(number,index) {
                    if (index % 2 === 0) {
                        console.log(number * 2);
                    }
                 })();

// Any Questions???