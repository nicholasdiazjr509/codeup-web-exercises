"use strict";


 $(document).ready(function() {


    mapboxgl.accessToken = MAPBOX_KEY;
      const coordinates = document.getElementById('coordinates');
      const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [-98.501556, 29.427002], // starting position [lng, lat]
            zoom: 5 // starting zoom
    });
    // Add the control to the map. Used map geocoder.api for user search box.
    // This is so neat!!!!
    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
    );
    const marker = new mapboxgl.Marker({

        draggable: true
    })
        .setLngLat([-98.501556, 29.427002])
        .addTo(map);

    //LonLat box for coordinates to show from placement of the marker.
    function onDragEnd(){
        const lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML = `Longitude: ${lngLat.lng}<br/>Latitude: ${lngLat.lat}`;
        // Had "/" slash in Long and Lat typed here for some odd reason.
    }
    marker.on('dragend', onDragEnd);


                //found the api for the search
                    // $("#search").click(function(){
                    //     userInput = $("#user-input").val();
                    //     moveMarkerToInput()
                    // })
    $("#mapStyle").change(function(){
        map.setStyle($("#mapStyle").val())
    })
$(document).ready(() => {
    function write() {
        $.ajax("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + coordinates[0] + "&lon="
            + coordinates[1] + "&exclude=minutely,hourly&appid=" + OPEN_WEATHER_KEY)
            .done(function (response) {
                $("#insertInfo").html(" ");
                for (var i = 0; i < response.daily.length; i++) {
                    var today = response.daily[i];
                    var todaysDate = new Date(today.dt * 1000);
                    todaysDate = todaysDate.toDateString()
                    var html = ""
                    html = "<div class='container grow col-sm weather-" + (i + 1) + "'>";
                    html += "<div class='headerContainer'><h3>" + todaysDate + "</h4></div>"

                    //current weather
                    if (i === 0) {
                        html += "<h1 style='background-image: url(https://openweathermap.org/img/w/" +
                            todays.weather[0].icon + ".png);background-repeat:no-repeat; background-position: top;'>" +
                            Math.round(response.current.temp) + "°</h1>";
                    } else {
                        html += "<h1 style='background-image: url(https://openweathermap.org/img/w/" +
                            todays.weather[0].icon + ".png);background-repeat: no-repeat; background-position: top;'>" +
                            Math.round(todays.temp.day) + "°</h1>";    //HexCode???	"\u00B0" degree sign
                    }

                    html += "<p> Real Feel: " + Math.round(today.feels - like.day) + "\u00B0°</p>";   // / ° /
                    html += "<div>low: " + Math.round(today.temp.min) + "° / High: " + Math.round(today.temp.max) + "°</div>";
                    html += "<div>Humidity: " + today.humidity + "%</div>";
                    html += "<div class='onBottom'>Chance of rain: " + Math.round(today.pop * 100) + "%</div";
                    html += "<div class='hideTillClick hidden'> ";

                    html += "<div style='border-bottom: 2px solid black; width: 100%;'><p style='margin: 0 35%;'>Wind</p></div>"
                    html += "<div style='text-align: center'>";
                    html += "<div>" + windDirection(today.wind_deg) + " " + Math.round(today.wind_speed) + "MPH</div>";
                    html += "<div>Gusts: " + Math.round(today.wind_gust) + "MPH</div></div>";

                    html += "<div class='riseSet'><i class=\"fas fa-sun\"></i></div>";
                    html += "<div class='row'>";
                    html += "<div class='col'>Rise:<p>" + riseSet(today.sunrise) + "am</p></div>";
                    html += "<div class='col'>Set:<p>" + riseSet(today.sunset) + "pm</p></div></div>";

                    html += "<div class='riseSet'><i id='moon' class=\"fas fa-moon\"></i></div>";
                    html += "<div class='row'>";
                    html += "<div class='col'>Rise: <p>" + riseSet(today.moonset) + "pm</p></div>";
                    html += "<div class='col'>Set:<p>" + riseSet(today.moonset) + "am</p></div></div>";
                    html += "</div>";
                    $("#insertInfo").append(html);


                    $(".weather-" + (i + 1) + "").click(function () {
                        $(".hideTillClick").slideToggle(1000);
                    })
                    $(".weather-5, .weather-6, .weather-7, .weather-8").addClass("hideTill");
                }
            });
    }

    write();


    $("#toggleCards").click(toggle);//used for card enable-disable

    function windDirection(windDirection) {
        var cardinalDirection = "";
        //used 360 degree direction
        if (windDirection >= 349 || windDirection <= 11) {
            cardinalDirection = "N";
        } else if
        (windDirection >= 12 && windDirection <= 34) {
            cardinalDirection = "NNE"
        } else if
        (windDirection >= 35 && windDirection <= 56) {
            cardinalDirection = "NE";
        } else if
        (windDirection >= 57 && windDirection <= 79) {
            cardinalDirection = "ENE";
        } else if
        (windDirection >= 80 && windDirection <= 101) {
            cardinalDirection = "NNE"
        } else if
        (windDirection >= 102 && windDirection <= 124) {
            cardinalDirection = "ESE";
        } else if
        (windDirection >= 125 && windDirection <= 146) {
            cardinalDirection = "SSE";
        } else if
        (windDirection >= 147 && windDirection <= 169) {
            cardinalDirection = "NNE"
        } else if
        (windDirection >= 170 && windDirection <= 191) {
            cardinalDirection = "ESE";
        } else if
        (windDirection >= 192 && windDirection <= 214) {
            cardinalDirection = "SSW";
        } else if
        (windDirection >= 215 && windDirection <= 236) {
            cardinalDirection = "SW"
        } else if
        (windDirection >= 237 && windDirection <= 258) {
            cardinalDirection = "WSW";
        } else if
        (windDirection >= 259 && windDirection <= 281) {
            cardinalDirection = "W";
        } else if
        (windDirection >= 282 && windDirection <= 303) {
            cardinalDirection = "WNW"
        } else if
        (windDirection >= 304 && windDirection <= 326) {
            cardinalDirection = "NW";
        } else if
        (windDirection >= 327 && windDirection <= 348) {
            cardinalDirection = "NNW";
        } else {
            cardinalDirection = "ERROR";
        }
        return windDirection;
    }

    function riseSet(item) {//sun/moon rise and set
        var readableItem = new Date(item * 1000);
        readableItem = readableItem.getHours() + ":" + readableItem.getMinutes();
        return readableItem;
    }

 })();
 })