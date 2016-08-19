var location;
$(document).ready(function(){
  $.getJSON("http://ip-api.com/json", function(data){
      location.latitude = getLatitude(data); //Math.floor(getLatitude(data)); 
      location.longitude = getLongitude(data);//Math.floor(getLongitude(data));
      /*var myData = JSON.parse(city.list);
      console.log(myData);*/
      var webAddress = "http://api.openweathermap.org/data/2.5/weather?lat="+location.latitude +"&lon=" + location.longitude + "&APPID=b20df3281dd211ad4c1254577573e180";
        $.getJSON(webAddress, function(data){
          console.log(data);
        });
      console.log(location.latitude);
      console.log(location.longitude);
  });

    function getLongitude(data){
      return data.lon;
    }
    function getLatitude(data){
      return data.lat;
    }
});