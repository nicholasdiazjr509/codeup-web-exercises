(function() {
    "use strict";

    var dogs = [myDog];
    var peridot = {
        name: "Peridot",
        breed: "Pit Bull Terrier Mix",
        birthday: "08/30/2017",
        sit: function (hasTreat) {
            if (hasTreat === true) {
                return "Peridot is now sitting";
            } else {
                return "Peridot is now ignoring you";
            }
        }
    }
    // dogs.push(peridot);
    // console.log(dogs);
    // console.log(dogs.indexOf([1]));
    // console.log(dogs[1].breed)

    dogs.push(peridot);

    console.log(dogs);
    // console.log(dogs.indexOf(dogs[1]));
    console.log(dogs[0].breed)

    var numberOfAustralianCattleDogMixes = 0;
    dogs.forEach(function (dog: { breed: string, name: string }) {
        if (dog.breed === 'Austrailian Cattle Dog mix') {
            numberOfAustralianCattleDogMixes += 1;

        }
    })
    console.log(numberOfAustralianCattleDogsMixes)









})();