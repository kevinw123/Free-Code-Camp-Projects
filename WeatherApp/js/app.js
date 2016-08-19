var location;
$(document).ready(function(){
  $.getJSON("http://ip-api.com/json", function(data){
      location.latitude = data.lat;
      location.longitude = data.lon;

      console.log(location.latitude);
      console.log(location.longitude);
  });

var webAddress = "http://api.openweathermap.org/data/2.5/weather?lat=49&lon=-123&APPID=b20df3281dd211ad4c1254577573e180";

  $.ajax({
    url: webAddress,
    dataType: "jsonp",
    success: function(res) {
        console.log(res.name);
    },
    error: function(xhr, status, error) {
         console.log("Error");
  }
  });


});