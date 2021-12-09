

"use strict";

// $.ajax("https://api.openweathermap.org/data/2.5/onecall?lat=29.427002&lon=-98.501556&appid=" + "OPEN_WEATHER_KEY")
    // .done(function(data){


    mapboxgl.accessToken = MAPBOX_KEY;
    var coordinates = document.getElementById('coordinates');
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
        draggable: true,
    })
        .setLngLat([-98.501556, 29.427002])
        .addTo(map);
// var coordinates = [marker.getLngLat().lat, marker.getLngLat().lng];

    //LonLat box for coordinates to show from placement of the marker.
    function onDragEnd(){
        const lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML = 'Longitude: ${lngLat.lng}<br/>Latitude: ${lngLat.lat}';
        // Had "/" slash in Long and Lat typed here for some odd reason.
    }
   function onDragEnd(){
        var lngLat = marker.getLngLat();
        var weather = "https://api.openweathermap.org/data/2.5/onccall?lat=29.427002&lon=-98.501556&appid="
            + "OPEN_WEATHER_KEY" + "/" + lngLat.lat + "," + lngLat.lng;

        var coordinates = [marker.getLngLat().lat, marker.getLngLat().lng]
      //  console.log(coordinates)
        write()
    }
                //found the api for the search
                    // $("#search").click(function(){
                    //     userInput = $("#user-input").val();
                    //     moveMarkerToInput()
                    // })
    $("#mapStyle").change(function(){
        map.setStyle($("#mapStyle").val())
     })
// $(document).ready(() => {
//     function write() {

$(document).ready(function() {


$.get("https://api.openweathermap.org/data/2.5/onecall", {
    lat: 29.423017,
    lon: -95.48527,
    exclude: "minutely, hourly",
    units: "imperial",
    APPID: OPEN_WEATHER_KEY
}).done(function(data) {
    console.log(data)
    $("#weather_icon").attr("src", "https://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png");
    //console.log(data.daily[0].dt);      //it's times 1000   //for conversion of UTC date  (unviversal time conversion?)
    console.log(new Date(data.daily[0].dt * 1000));
});
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
