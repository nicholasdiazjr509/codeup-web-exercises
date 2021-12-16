"use strict"

// function geocode(search, token){
//     var baseUrl = 'https://api.mapbox.com';
//     var endPoint = '/geocoding/v5/mapbox.places/';
//         return fetch(baseUrl )
// }



    mapboxgl.accessToken = MAPBOX_KEY;
    const coordinates = document.getElementById('coordinates');
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-98.501556, 29.427002], // starting position [lng, lat]
        zoom: 10 // starting zoom
    });
    // Add the control to the map. Used map geocoder.api for user search box.
    // This is so neat!!!!
    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,

        })
    );
    //
    var marker = new mapboxgl.Marker({
        draggable: true,
        color: "blue",
    })
        .setLngLat([-98.5015, 29.42702])
        .setDraggable(true)
        marker.addTo(map)
        marker.on('dragend', function(){
            $('#coordinates').html('Current Location ' + marker.getLngLat())
        })

geocode("San Antonio", MAPBOX_KEY).then(function(data){
$('.current').html(geocode)
})


    function onDragEnd() {
        const lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML = `Longitude: ${lngLat.lng}<br/>Latitude: ${lngLat.lat}`;
    }

    marker.on('dragend', onDragEnd);

    // const  coordinates = [marker.getLngLat().lat, marker.getLngLat().lng]
    //    console.log(coordinates)
    // write();

    //when the user double clicks on the map, move the cursor and post that information.
    map.on("dblclick", listener => {
        marker.setLngLat(listener.lngLat);
        map.flyTo({
            center: [listener.lngLat.lng, listener.lngLat.lat],
            speed: 1,
            zoom: 8,
        });
        // coordinates = [listener.lngLat.lat, listener.lngLat.lng]
        // write();
    });

    //Button calls the "moveMarker" function and uses geocode to turn text input into Longitude and Latitudinal coordinates.
    $("#search").click(function () {
        userInput = $("#user-input").val();
        console.log(userInput);
        moveMarkerToInput()
    })

    $("#mapStyle").change(function () {
        map.setStyle($("#mapStyle").val())
    })






    //---------------------------------------------------------//


            function write() {
                //api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=<MY API KEY>
                $.ajax("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + coordinates[0]
                    + "&lon=" + coordinates[1] + "&exclude=minutely,hourly&appid=" + OPEN_WEATHER_KEY)

                $.get("https://api.openweathermap.org/data/2.5/onecall", {
                        lat: 29.423017,
                        lon: -95.48527,
                        exclude: "minutely, hourly",
                        units: "imperial",
                        APPID: OPEN_WEATHER_KEY,
                    }
                ).done(function (data) {
                    console.log(data)
                    {
                        // $("#weather_icon").attr("src", "https://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png");
                        // $("#weather_icon").append(data);
                        //console.log(data.daily[0].dt);      //it's times 1000   //for conversion of UTC date  (unviversal time conversion?)
                        // console.log(new Date(data.daily[0].dt * 1000));

                        $("#insertInfo").html(" ");


                        for (var i = 0; i < data.daily.length; i++) {

                            var today = data.daily[i];
                            var todaysDate = new Date(today.dt * 1000);
                            todaysDate = todaysDate.toDateString()

                            //Create cards:
                            var html = ""
                            html = "<div class='container grow col-sm weather-" + (i + 1) + "'>";
                            html += "<div class='headerContainer'><h4>" + todaysDate + "</h4></div>"

                            //Current weather
                            if (i === 0) {
                                html += "<h1 style='background-image: url(https://openweathermap.org/img/w/" + today.weather[0].icon
                                    + ".png); background-repeat: no-repeat; background-position: top;'>" + Math.round(data.current.temp) + "°</h1>";
                            } else {
                                html += "<h1 style='background-image: url(https://openweathermap.org/img/w/" + today.weather[0].icon
                                    + ".png); background-repeat: no-repeat; background-position: top;'>" + Math.round(today.temp.day) + "°</h1>";
                            }
                            html += "<p>Real Feel: " + Math.round(today.feels_like.day) + "°</p>";
                            html += "<div> low: " + Math.round(today.temp.min) + "° / High: " + Math.round(today.temp.max) + "°</div>";
                            html += "<div> Humidity: " + today.humidity + "%</div>";
                            html += "<div class='onBottom'> Chance of rain: " + Math.round(today.pop * 100) + "%</div>";
                            html += "<div class='hiddenTillClick hiddenTest'>";

                            /**wind speed/*/    html += "<div style='border-bottom: 1px solid black; width: 100%;'><p style='margin: 0 35%;'>Wind</p></div>";
                            /**direction */     html += "<div style='text-align: center'>";
                            /** -gusts  */      html += "<div>" + displayWindDirection(today.wind_deg) + " " + Math.round(today.wind_speed) + "MPH</div>";
                            html += "<div>Gusts: " + Math.round(today.wind_gust) + "MPH</div></div>";

                            /**sunrise*/    html += "<div class='riseSet'><i class=\"fas fa-sun\"></i></div>";
                            html += "<div class='row'>";
                            html += "<div class='col'>Rise:<p>" + riseSet(today.sunrise) + "am</p></div>";
                            html += "<div class='col'>Set:<p>" + riseSet(today.sunset) + "pm</p></div></div>";

                            /**moonrise*/  html += "<div class='riseSet'><i id='moon' class=\"fas fa-moon\"></i></div>";
                            html += "<div class='row'>";
                            html += "<div class='col'>Rise:<p>" + riseSet(today.moonset) + "pm</p></div>";
                            html += "<div class='col'>Set:<p>" + riseSet(today.moonrise) + "am</p></div></div></div>";
                            html += "</div>";

                            $("#insertInfo").append(html);

                            //hide the second half of the card till clicked
                            $(".weather-" + (i + 1) + "").click(function () {
                                $(".hiddenTillClick").slideToggle(1000);
                            })

                            //set 5-8 to hide
                            $(".weather-5, .weather-6, .weather-7, .weather-8").addClass("hiddenTest");
                        }
                        console.log(data);

                        write();
                        // });
                        //click to enable/disable cards
                        $("#toggleCards").click(toggle);

                        //Find the cardinal direction of the wind using the angle given by API
                        function displayWindDirection(windDirection) {
                            var cardinalDirection = "";
                            if (windDirection >= 349 || windDirection <= 11) {
                                cardinalDirection = "N";
                            } else if (windDirection >= 12 && windDirection <= 34) {
                                cardinalDirection = "NNE";
                            } else if (windDirection >= 35 && windDirection <= 56) {
                                cardinalDirection = "NE";
                            } else if (windDirection >= 57 && windDirection <= 79) {
                                cardinalDirection = "ENE";
                            } else if (windDirection >= 80 && windDirection <= 101) {
                                cardinalDirection = "E";
                            } else if (windDirection >= 102 && windDirection <= 124) {
                                cardinalDirection = "ESE";
                            } else if (windDirection >= 125 && windDirection <= 146) {
                                cardinalDirection = "SE";
                            } else if (windDirection >= 147 && windDirection <= 169) {
                                cardinalDirection = "SSE";
                            } else if (windDirection >= 170 && windDirection <= 191) {
                                cardinalDirection = "S";
                            } else if (windDirection >= 192 && windDirection <= 214) {
                                cardinalDirection = "SSW";
                            } else if (windDirection >= 215 && windDirection <= 236) {
                                cardinalDirection = "SW";
                            } else if (windDirection >= 237 && windDirection <= 258) {
                                cardinalDirection = "WSW";
                            } else if (windDirection >= 259 && windDirection <= 281) {
                                cardinalDirection = "W";
                            } else if (windDirection >= 282 && windDirection <= 303) {
                                cardinalDirection = "WNW";
                            } else if (windDirection >= 304 && windDirection <= 326) {
                                cardinalDirection = "NW";
                            } else if (windDirection >= 327 && windDirection <= 348) {
                                cardinalDirection = "NNW";
                            } else {
                                cardinalDirection = "Error";
                            }
                            return cardinalDirection;
                        }

                        function moveMarkerToInput() {
                            var mapCity = geocode(search, userInput, MAPBOX_KEY)
                            mapCity.then(function (data) {
                                console.log(data);
                                var data = data[0];
                                var data = data[1];
                                var coordinates = {
                                    "lng": dataLong,
                                    "lat": dataLat,
                                };
                                marker.setLngLat([coordinates.lng, coordinates.lat]);
                                //coordinates = [marker.getLngLat().lat, marker.getLngLat().lng];

                                map.flyTo({
                                    center: data,
                                    zoom: 10,
                                    speed: 1
                                });
                                write();
                            })


                            //toggle the last 4 to show
                            function toggle() {
                                $(".weather-5, .weather-6, .weather-7, .weather-8").toggleClass("hiddenTest");
                            }

                            //get the sun(moon)rise and sun(moon)set as readable variables
                            function riseSet(item) {
                                var readableItem = new Date(item * 1000);
                                readableItem = readableItem.getHours() + ":" + readableItem.getMinutes();
                                return readableItem;

                            }
                        }
                    }
                    ;
                })
            }

// })();

            const {main, name, sys, weather} = data;
            const icon = `https://openweathermap.org/img/wn/${
                weather[0]["icon"]
            }#2x.png`;

            const li = document.createElement("li");
            li.classList.add("city");
            const markup = `
  <h2 class="city-name" data-name="${name},${sys.country}">
    <span>${name}</span>
    <sup>${sys.country}</sup>
  </h2>
  <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup>
  </div>
  <figure>
    <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
    <figcaption>${weather[0]["description"]}</figcaption>
  </figure>
`;
            li.innerHTML = markup;
            list.appendChild(li);
