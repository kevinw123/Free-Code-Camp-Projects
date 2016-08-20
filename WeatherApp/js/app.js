var location;
$(document).ready(function() {
    $.getJSON("http://ip-api.com/json", function(data) {
        location.latitude = getLatitude(data);
        location.longitude = getLongitude(data);
        location.regionName = getRegionName(data);
        location.city = getCity(data);
        var webAddress = "http://api.openweathermap.org/data/2.5/weather?lat=" + location.latitude + "&lon=" + location.longitude + "&APPID=b20df3281dd211ad4c1254577573e180";
        $.getJSON(webAddress, function(data) {
            console.log(data);
            var icon = data.weather[0].icon.replace(/"/g,"");
            $("#weather").text(data.weather[0].main);
            $("#description").text(data.weather[0].description);
            $("#temperature").text(data.main.temp + " F");
            console.log(icon);
            //$("icon").attr("src","http://openweathermap.org/img/w/"+icon+".png");
        });

        $("#city").text(location.city + ", " + location.regionName);
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

});
