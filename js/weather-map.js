"use strict";


$(document).ready(function() {
    function popForecast(value) {
        var date = moment.date(value.dt).format("dddd. MMM-DD-YYYY");

        return "<div id='every-box'  class='col-md-4'>"
            + "<p id='date-time-group'>" + date + "</p>"
            + "<p id='temp'>" + Math.round(value.temp.max) + "&#176;"
            + Math.round(value.temp.min) + "#&176;" +  "< /p>"
            + "<img src='https://openweathermap.org/img/w/"
            + value.weather[0].icon + ".png'>"
            + "<p id='conditions'>" + "<strong>Conditions:</strong> " //+ "</p>"
            + value.weather[0].description + "</p>"
            + "<p>" + "<strong>Winds:</strong> " + value.speed + "</p>"
            + "<p>" + "<strong>Pressure:</strong> " + value.pressure + "</p>"
            + "</div>";


    }

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

    // var weatherSA = $.get("https://api.openweathermap.org/data/2.5/onecall", {
    //     lat: 29.423017,
    //     lon: -95.48527,
    //   //  q: "San Antonio, TX",
    //     exclude: "minutely, hourly",
    //     units: "imperial",
    //     APPID: OPEN_WEATHER_KEY,

    });
    // weatherSA.done(function (data) {
    //     // console.log(data)
    //     $("#sub-header").text(data.city.name);
    //     //attr("src", "https://openweathermap.org/img/w/"+ data.daily[0].weather[0].icon + ".png");
    //     //console.log(data.daily[0].dt);      //it's times 1000   //for conversion of UTC date  (unviversal time conversion?)
    //     //console.log(new Date(data.daily[0].dt * 1000));
    //     var userWeatherInfo = '';
    //     data.list.forEach(function (value) {
    //         userWeatherInfo += popForecast(value);
    //         $("#cover-div").html(userWeatherInfo);
    //
    //    var myLatLng = new google.maps.LatLng(29.426549, -98.490018);
    //     var mapOptions = {
    //         center: myLatLng
    //     };
    //
    //     $.get("https://api.openweathermap.org/data/2.5/onecall", {   //var userPick =
    //         lat: 29.423017,
    //         lon: -95.48527,
    //         APPID: OPEN_WEATHER_KEY,
    //         units: "imperial"
    //     });

    // map.setCenter(marker.position);
    // marker.addTo(map);
//**autocomplete?? DO NOT NEED. Used MapBox documentation find how to use GEOCODE and for search box for user.
//     var autocomplete = new google.maps.places.Autocomplete(
//         (document.getElementById("location")),
//         {types: ["geocode"]});
//


//
//
// });
//var openMenu = false;
// var navigation = document.getElementById("nav-website");
// var userDropdown = document.getElementById('user-dropdown-menu');
// var supportDropdown = document.getElementById('support-dropdown-menu');
//
// function unfoldMenu() {
//   navigation.classList.add('visible');
// }
//
// function foldMenu() {
//   navigation.classList.remove('visible')
// }
//
// function toggleDropdown(el) {
//   el.classList.contains('dropdown-visible') ? el.classList.remove('dropdown-visible') : el.classList.add('dropdown-visible')
// }
//
// function closePopUps() {
//     userDropdown && userDropdown.classList.remove('dropdown-visible')
//     supportDropdown.classList.remove('dropdown-visible')
// }
//
// function toggleMenu (e) {
//     e.stopImmediatePropagation();
//     if (e.target) {
//       if (e.target.id === 'hamburger' || e.target.parentNode.id === 'hamburger') {
//         openMenu = !openMenu;
//         openMenu ? unfoldMenu() : foldMenu();
//       } else if (!e.target.nodeName === 'input') {
//         openMenu = false;
//         foldMenu();
//       } else if (e.target.id === 'user-dropdown' || e.target.parentNode.id === 'user-dropdown') {
//         supportDropdown.classList.remove('dropdown-visible')
//         toggleDropdown(userDropdown)
//       } else if (e.target.id === 'support-dropdown') {
//         userDropdown && userDropdown.classList.remove('dropdown-visible')
//         toggleDropdown(supportDropdown)
//       } else {
//         closePopUps()
//       }
//     }
//   }