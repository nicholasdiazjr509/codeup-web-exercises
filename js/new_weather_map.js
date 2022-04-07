const timeEl = document.getElementById('time');
const datEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('timezone');
const countEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTemEl = document.getElementById('current-temp');

// now update all of the data

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
'Sep', 'Oct', 'Nov', 'Dec'];



setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hours = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour;
    const minutes = time.getMinutes();
    const ampm = hours >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = hoursIn12HrFormat + ':' + minutes + ' ' + `<span id="am-pm">${ampm}</span>`

    DataTransferItemList.innerHTML = days[day] + ', ' + date + ' ' + months[month]
}, 1000);


getWeatherData()
function getWeatherData (){
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success);
    })
}