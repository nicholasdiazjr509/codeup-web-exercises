

"use strict";

$.ajax("https://api.openweathermap.org/data/2.5/onecall?lat=29.427002&lon=-98.501556&appid=" + OPEN_WEATHER_KEY)
    .done(function(data){


    mapboxgl.accessToken = MAPBOX_KEY;
    //var coordinates = document.getElementById('coordinates');
      const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [-98.501556, 29.427002], // starting position [lng, lat]
            zoom: 5, // starting zoom
            dragRotate: true,
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
        draggable: true,
    })
        .setLngLat([-98.501556, 29.427002])
        .addTo(map);
        marker.on('dragend', function() {
            $('#coordinates').html('Current Location ' + marker.getLngLat())
        })

    map.on('click', function(e) {
        e.preventDefault();
        console.log(e)
    })

        geocode("San Antonio", MAPBOX_KEY).then(function(data){
            $('.current').html(geocode)
        })
        //LonLat box for coordinates to show from placement of the marker.
        function onDragEnd(){
            const lngLat = marker.getLngLat();
            coordinates.style.display = 'block';
            coordinates.innerHTML = 'Longitude: ${lngLat.lng}<br/>Latitude: ${lngLat.lat}';
            // Had "/" slash in Long and Lat typed here for some odd reason.

        }
        marker.on('dragend', onDragEnd);

    var fiveDayWeather
      $.get("https://api.openweathermap.org/data/2.5/onecall", {
            lat: 29.423017,
            lon: -95.48527,
            exclude: "minutely, hourly",
            units: "imperial",
            APPID: OPEN_WEATHER_KEY
        }).done(function(data) {
            console.log(data)
         fiveDayWeather = data.daily;
            for(var i = 0; i <= 5; i++){
                var html = renderWeather(fiveDayWeather[i]);
                $(".weatherInfo").eq(i).append(html);
            }
            $("#weather_icon").attr("src", "https://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png");
            //console.log(data.daily[0].dt);      //it's times 1000   //for conversion of UTC date  (unviversal time conversion?)
            console.log(new Date(data.daily[0].dt * 1000));
        });
        function renderWeather(weather){
            var html = "";
            html += "<div >";
            html += "<p>" + convertDateTime(weather.dt) + "</p>";
            html += "img class='img-fluid' src=' " + "https://openweather.org/img/w/" + weather.weather[0].icon + ".png" + "'>"
            html += "<p> Weather: " + weather.weather[0].main + "</p>";
            html +="<p> Temp: " + weather.temp.day + "</p>>";
            html +="<p> Wind: " + weather.wind_speed + "</p>";
            html += "<p> Humidity: " + weather.humidity + "</p>";
            html += "<p> Pressure: " + weather.pressure + "</p>";
            html += "</div>";
                return html;
        }

        // marker.on('dragend', function(){
        //     let lnglat = marker.getLnglat()
        //             console.log(lgnlat)
        //     map.setZoom(10);
        //     map.setCenter(marker.getLngLat())
        // })
        map.on("dblclick", listener => {
            marker.setLngLat(listener.lngLat);
            map.flyTo({
                center: [listener.lngLat.lng, listener.lngLat.lat],
                speed: 1,
                zoom: 8,
            })

        })
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            lat: lnglat.lat,
            lon: lnglat.lng,
            exclude: "hourly",
            units: "imperial",
            APPID: OPEN_WEATHER_KEY,
        })
            .done(function(weather){
                console.log(weather);
            });
        $.get("https://api.openweathermap.org/data/2.5/oncecall", {
            lat: lnglat.lat,
            lon: lnglat.lng,
            exclude: "hourly, minutely, alerts",
            units: "imperial",
            APPID: OPEN_WEATHER_KEY,
        })
            .done(function(data){
                console.log(data);
                fiveDayWeather = data.daily;
        $(".weatherInfo").html('')
                for(var i = 0; i <= 5; i++){
                    var html =renderWeather(fiveDayWeather[i]);
                }
            })

    $("#mapStyle").change(function(){
        map.setStyle($("#mapStyle").val())
     })
// $(document).ready(() => {
//     function write() {

$(document).ready(function() {



} )
    })

// });})




//         $.get("https://api.openweathermap.org/data/2.5/onecall",{
//             lat: 29.423017,
//             lon: -95.48527,
//             exclude: "minutely, hourly",
//             units: "imperial",
//             APPID: OPEN_WEATHER_KEY
//     }).done(function(data){
//         console.log(data)
//         $("#weather_icon").attr("src", "https://openweathermap.org/img/w/"+ data.daily[0].weather[0].icon + ".png");
//         //console.log(data.daily[0].dt);      //it's times 1000   //for conversion of UTC date  (unviversal time conversion?)
//         console.log(new Date(data.daily[0].dt * 1000));
//
