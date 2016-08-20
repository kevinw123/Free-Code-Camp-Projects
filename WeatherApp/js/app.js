var location;
location.deg = "F";
location.tempC = 0.0;
location.tempF = 0.0;
$(document).ready(function() {
    $.getJSON("http://ip-api.com/json", function(data) {
        location.latitude = getLatitude(data);
        location.longitude = getLongitude(data);
        location.regionName = getRegionName(data);
        location.city = getCity(data);
        $("#city").text(location.city);
        $("#region").text(location.regionName);
        var webAddress = "http://api.openweathermap.org/data/2.5/forecast/daily?lat=" + location.latitude + "&lon=" + location.longitude + "&cnt=4&APPID=b20df3281dd211ad4c1254577573e180";
        $.getJSON(webAddress, function(data) {
            console.log(data);
            location.tempF = data.list[0].deg;
            $("#weather").text(data.list[0].weather[0].main);
            $("#temperature").text(Math.floor(location.tempF));
            $("#degree").text('\u00B0' + location.deg);
            $("#icon").attr("src", getIcon(data));
        });;
    });

    function getLongitude(data) {
        return data.lon;
    }

    function getLatitude(data) {
        return data.lat;
    }

    function getRegionName(data) {
        return data.regionName;
    }

    function getCity(data) {
        return data.city;
    }

    function getIcon(data) {
        var path = "";
        if (200 < data.list[0].weather[0].id && data.list[0].weather[0].id < 300) {
            path = "img/thunder.png";
            return path;
        } else if (300 <= data.list[0].weather[0].id && data.list[0].weather[0].id < 400) {
            path = "img/drizzle.png";
            return path;
        } else if (500 <= data.list[0].weather[0].id && data.list[0].weather[0].id < 600) {
            path = "img/rain.png";
            return path;
        } else if (600 <= data.list[0].weather[0].id && data.list[0].weather[0].id < 700) {
            path = "img/snow.png";
            return path;
        } else if (700 <= data.list[0].weather[0].id && data.list[0].weather[0].id < 800) {
            path = "img/atmosphere.png";
            return path;
        } else if (data.list[0].weather[0].id == 800) {
            path = "img/clear.png";
            return path;
        } else if (801 <= data.list[0].weather[0].id && data.list[0].weather[0].id <= 804) {
            path = "img/cloud.png";
            return path;
        } else if (900 <= data.list[0].weather[0].id && data.list[0].weather[0].id <= 906) {
            path = "img/extreme.png";
            return path;
        } else if (951 <= data.list[0].weather[0].id && data.list[0].weather[0].id <= 962) {
            path = "img/additional.png";
            return path;
        }
    }

    $("#degree").click(function() {
        console.log("Handler for .click() called.");

        if (location.deg == "C") {
            location.deg = "F";
            location.tempC = Math.floor((location.tempF -32) * (5/9));
            $("#temperature").text(location.tempC);
        } else {
            location.deg = "C";
            $("#temperature").text(location.tempF);
        }
        $("#degree").text('\u00B0' + location.deg);
    });
});