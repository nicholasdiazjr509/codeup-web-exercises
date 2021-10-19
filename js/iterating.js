(function() {
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ["Nick", "James", "Jonathan", "Andrew"];


    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log( names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (var j = 0; names.length; j++){
        console.log(names[j]);
         }

         /**
          * TODO:
          * Refactor your above code to use a `forEach` loop
          */
      function first( arr ){
      return arr[1];
      }
    function last (arr){
      return arr[arr.length-1];
      }
      console.log(first(names));
        console.log(second(names));
            console.log(last(names));
})();
         // var forEach = numbers.forEach(function (number, index) {
         //     if (index % 2 === 0) {
         //
         //         console.log(number * 2);


