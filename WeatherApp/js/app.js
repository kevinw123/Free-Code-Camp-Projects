  var output = document.getElementById("out");

  if (!navigator.geolocation){
    console.log("Geolocation is not supported by your browser");

  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log("latitude " + latitude);
    console.log("longitude " + longitude);
  };

  function error() {
    console.log("error");
  };

  navigator.geolocation.getCurrentPosition(success, error);