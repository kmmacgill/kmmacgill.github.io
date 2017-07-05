// Current Location Scripts
(function () {

    var status = document.getElementById('status');

    (function getGeoLocation() {
        status.innerHTML = 'Getting Location...';
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                // Call the getData function, send the lat and long
                getData(lat, long);

            });
        } else {
            status.text("Your browser doesn't support Geolocation or it is not enabled!");
        }

    }());

    function getJSON(url) {
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // Get the data from the wunderground API
    function getData(lat, long) {
        var url = "http://api.wunderground.com/api/c94c7dbede5a17ce/geolookup/conditions/q/" + lat + "," +long + ".json"; //change this to the correct URL for wunderground""
        getJSON(url).then(function (data) {
            console.log(data);
            //add the code necessary here to update the page with all of the correct data points.

            document.getElementById("cityDisplay").innerHTML = data.location.city + ", " + data.location.state;
            document.title = document.getElementById("cityDisplay").innerHTML + "- " + document.title;
            document.getElementById("currentTemp").innerHTML = data.current_observation.temp_f.toFixed(0) +'&degF';
            document.getElementById("summary").innerHTML = data.current_observation.weather;
            document.getElementById("add1").innerHTML = "Wind Speed: " + data.current_observation.wind_mph + "mph";
            document.getElementById("add2").innerHTML = "Visibility: " + data.current_observation.visibility_mi + " miles";
            document.getElementById("add3").innerHTML = "Humidity: " + data.current_observation.relative_humidity;

            document.getElementById("cover").classList.add('fadeout');
        });


    }

    // A function for changing a string to TitleCase
    function toTitleCase(str) {
        return str.replace(/\w+/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}());
