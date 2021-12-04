"use strict";


$(document).ready(function(){
    function forecast(value){
        var date = moment.unix(value.dt).format("dddd. MMM-DD-YYYY");



    }

$.get("https://api.openweathermap.org/data/2.5/onecall", {
            lat: 29.423017,
            lon: -95.48527,
            exclude: "minutely, hourly",
            units: "imperial",
            APPID: OPEN_WEATHER_KEY
        }).done(function(data){
            console.log(data)
            $("#weather_icon").attr("src", "https://openweathermap.org/img/w/"+ data.daily[0].weather[0].icon + ".png");
            //console.log(data.daily[0].dt);      //it's times 1000   //for conversion of UTC date  (unviversal time conversion?)
            console.log(new Date(data.daily[0].dt * 1000));
        });
