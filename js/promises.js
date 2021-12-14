// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.//

//**           fetch(url, {headers: {'Authorization': 'GITHUB_KEY'}})    *////
//
// fetch('https://api.github.com/users')
//     .then(response => console.log(response))
//     .catch(error => console.error(error));

const GITHUB_API_URL = 'https://api.github.com';

function getLastCommit(username){
    const ENDPOINT = `/users/${username}/events/public`;
    const CONFIG ={
        headers: {'Authorization': `token${GITHUB_KEY}`
        }
    }
    return fetch(GITHUB_API_URL + ENDPOINT, CONFIG)
        .then(response  => response.json())
        .then(events => {

        let mostRecentDate = events.find((event => event.type === 'PushEvent'));
        let dateLastPush = new Date(mostRecentDate['created_at']).toDateString();
            return dateLastPush;
    });
}
        getLastCommit('nicholasdiazjr509')
            .then(console.log)
            .catch(console.error);



// Write a function named wait that accepts a number as a parameter,
// and returns a promise that resolves after the passed number of milliseconds.
function wait (ms) {
    return new Promise(function(resolve){
        setTimeout(function () {
            resolve();
        }, ms)
    });
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));

wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));