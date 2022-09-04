import { query } from "./_generated/server";
// import { }

export default query(async ({ }) => {

  /*function geoFindMe() {
  
      const status = document.querySelector('#status');
      const mapLink = document.querySelector('#map-link');
    
      mapLink.href = '';
      mapLink.textContent = '';
    
      function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
    
        status.textContent = '';
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
      }
    
      function error() {
        status.textContent = 'Unable to retrieve your location';
      }
    
      if (!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser';
        console.log("Hey");
      } else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
      }
    
    }
    return document.querySelector('#find-me').addEventListener('click', geoFindMe);
  });*/

  function getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      // x.innerHTML = "Geolocation is not supported by this browser.";
      console.log("Hey");
    }
  }

  function showPosition(position) {
    //x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    console.log("Hey2");
  }

  return getPosition();

})

/*
// The `Official` GeoLocation API
// -----------------------------

// Check if user's browser supports Geolocation API
function getLocation() {
  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(getPosition);

  } else { // if not, kill it.
    console.log("No Dice.")
    return;
  }
}

// Get the lat and long from the coordinates.
function getPosition(position) {
  var lat = position.coords.latitude;
  var long = position.coords.longitude
  console.log("Position: ", lat, ", ", long);
	
    // set a new request...
    var req = new XMLHttpRequest();
    // from this url
    var url = "https://nominatim.openstreetmap.org/reverse?format=json&lat=" + lat + "&lon=" + long + "&zoom=18&addressdetails=1";
    console.log(url);
  	
    req.onload = function(e) {

      // returns an string response
      var theResponse = req.response;	
      console.log(theResponse)

      // format the payload into an object...
      var formatted = JSON.parse(theResponse);
      console.log(formatted);
      // get the data you need
      var country = formatted.address.country;		
      var province = formatted.address.state;
      var city = formatted.address.city;

      document.getElementById("getLocation").addEventListener("click", function(e) {
        var outputCountry = document.getElementById("output").innerHTML = city + ", " + province + ", " + country;
      });
    }
  	
        // open connection, then send query	
    req.open("GET", url);
    req.send();
}

return getLocation();
}) */