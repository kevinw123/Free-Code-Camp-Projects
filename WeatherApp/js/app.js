var location;
$(document).ready(function(){
  $.getJSON("http://ip-api.com/json", function(data){
      location.latitude = Math.floor(data.lat);
      location.longitude = Math.floor(data.lon);
      var webAddress = "http://api.openweathermap.org/data/2.5/weather?lat="+location.latitude +"&lon=" + location.longitude + "&APPID=b20df3281dd211ad4c1254577573e180";
        $.getJSON(webAddress, function(data){
          console.log(data);
        });
      console.log(location.latitude);
      console.log(location.longitude);
  });

});