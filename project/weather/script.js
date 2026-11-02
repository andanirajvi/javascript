function getWeather() {

    let city = document.getElementById("cityInput").value.trim();
    let result = document.getElementById("weatherResult");

    if (city === "") {
        result.innerText = "Please enter city name!";
        return;
    }

    result.innerText = "Searching...";

    // Search City

    let geoURL = "https://geocoding-api.open-meteo.com/v1/search?name="
        + encodeURIComponent(city)
        + "&count=1&language=en&format=json";

    fetch(geoURL)
        .then(response => response.json())
        .then(geoData => {

            if (!geoData.results || geoData.results.length === 0) {
                result.innerText = "City not found!";
                return;
            }

            let place = geoData.results[0];

            // Get Weather

            let weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,apparent_temperature`;

            fetch(weatherURL)
                .then(response => response.json())
                .then(data => {

                    let current = data.current;

                    // Display Data

                    document.getElementById("temperature").innerText =
                        current.temperature_2m + "°C";

                    document.getElementById("cityName").innerText =
                        place.name + ", " + place.country;

                    document.getElementById("description").innerText =
                        "Weather Code: " + current.weather_code;

                    document.getElementById("dateTime").innerText =
                        current.time;

                    document.getElementById("feelsLike").innerText =
                        current.apparent_temperature + " °C";

                    document.getElementById("humidity").innerText =
                        current.relative_humidity_2m + " %";

                    document.getElementById("wind").innerText =
                        current.wind_speed_10m + " km/h";

                    result.innerText = "";

                });

        });

}

function searchCity(city) {

    document.getElementById("cityInput").value = city;

    getWeather();

}

document.getElementById("cityInput").addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        getWeather();
    }

});