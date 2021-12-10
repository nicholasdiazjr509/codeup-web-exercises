"use strict"


// $(document).ready(function() {


    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];
    let moreThanThree = users.filter(user => user.languages.length >= 3) //or >2
    console.log(moreThanThree);

    let emailOnly = users.map(user => user.email)
    console.log(emailOnly);

    let totalYears = users.reduce((total, person, index, array) => {
        return total + person.yearsOfExperience / array.length;
    }, 0);
    console.log(totalYears);

    let longEmail = users.reduce((total, person, index, array) => {
        if (index === array.length - 1) {
            total.push(person.email)
            total.sort((a, b) => b.length - a.length)
            return total[0]
        } else {
            total.push(person.email)
            return total
        }
    }, []);
    console.log(longEmail);


    //Use .reduce to get the list of user's names in a single string.
    // Example: Your instructors are: ryan, luis, zach, fernando, justin.
    // let instructorList = users.reduce((total, personindex, array) =>{
    //    return list + person.name + ", ";
    // }, []);
    //
    // console.log(instructorList);
const instructorList = users.map(function (user) {
    return user.name;
}).join(", ");
    console.log(instructorList);


// const instructorList = users.reduce((a, b) => {
//         return `${a} ${b.name},` },
//     "Your instructors are:");
//////////////////////////////////////////////

// });
//let sentenceArray = ['Row,', ' row', ' row', ' your', ' boat'];
// let combineSentence = sentenceArray.reduce((previousValue, currentValue) => previousValue + currentValue);
//     console.log(combineSentence)
//
// })

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var evens = [];
// for (var i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//         evens.push(numbers[i]);
//     }
// }
// console.log(evens); // [2, 4, 6, 8, 10]

    //     if(index === array.length -1) {
    //         total.push(person.name)
    //         total.sort((a, b) => b.length - a.length)
    //         return "Your instructors are: " + total.join(',')
    //
    //     }else{
    //         total.push(person.name)
    //         return total
    //
    //     }
    // }, [])

//     Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
//     Use .map to create an array of strings where each element is a user's email address
//     Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
//     Use .reduce to get the longest email from the list of users.
//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.


