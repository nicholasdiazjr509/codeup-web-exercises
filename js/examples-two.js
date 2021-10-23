(function () {
    "use strict"

// var We = function(e){
//  var t= typeof e
//  return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e
    //}
// var weekday
//     var vacation;
//
//     if (!weekday) {
//         console.log(weekday)
//         return true;
//
//     } else if (vacation) {
//         console.log('boolean')
//         return true;
//
//     }
//     return false;


    {
    function sleepIn(weekday, vacation) {
        if (!weekday || vacation) {
            return true;
        } else {
            return false;
         //   console.log(sleepIn())
        }
        //return !weekday || vacation;
        //console.log (Boolean('' ));

        //console.log (Boolean( ));
    }
            console.log('******************************************');

            console.log(Boolean()); // this is equal to false duh

            console.log(Boolean(''));
            console.log(Boolean('0'));
            console.log(Boolean(0));

            console.log(Boolean(1));
            console.log(Boolean([]));
            console.log(Boolean(undefined));

            console.log(!!undefined);
            console.log();

            var stringToBoolean = function (value) {
                return value === 'true';
            };
            console.log(Boolean('false'));
            console.log(stringToBoolean('false'));
        }

} ) ( ) ;