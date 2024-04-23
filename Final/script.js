// COUNTRIES/COORDS DATA
const geoData = [  
    {country:"Qatar", cont: "Asia", lat:25.272234, lng: 51.421210},
    {country:"United States of America", cont: "North America", lat: 40.668083, lng: -73.978557 },
    {country:"Canada", cont: "North America", lat:49.166786, lng: -122.801385},  
  ]

function testing() {
  const geoLength = geoData.length
  var randInd = Math.floor(Math.random() * geoLength)
  console.log(geoData[randInd].country)
  console.log(geoData[randInd].lat)
  console.log(geoData[randInd].lng)
}
// testing()

async function initialize() {
    // generate random coords with function
    // var coords = randomCoord()
    var coords = { lat:  40.676738, lng: -74.005930 }
    console.log(coords)

    const map = new google.maps.Map(document.getElementById("map"), {
        center: coords,
        zoom: 14,
    });
    // create new street view and adjust the coords, pov
    const panorama = new google.maps.StreetViewPanorama(
      document.getElementById("pano"),
      {
        position: coords,
        pov: {
          heading: 34,
          pitch: 10,
        },
      },
    );
  
    // set the map to the street view
    map.setStreetView(panorama);    
  }
  
window.initialize = initialize;

// generate random number in a range with fixed deximals
// function getRandomInRange(from, to, fixed) {
//     return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
// }

// generate and return random latitude and longitude
async function randomCoord() {
    // FAKE RANDOM

    // GENERATE RANDOM COORDS WITH ALG METHOD
    // const latitude = getRandomInRange(-90,90,6)
    // const longitude = getRandomInRange(-180,180,6)
    // return {lat: latitude, lng: longitude}

    // GET RANDOM COORDS FROM API METHOD
    // const response = await fetch(
    //     'https://api.3geonames.org/?randomland=DE'
    // )
    // const result = await response.json()
}
randomCoord()

/*
NOTES/HARDSHIPS:
address pops up with street view via api so i went into inspect to find the element displaying it and set it to none
.gm-iv-address {
    display: none;
}

generating random coordinates, have to fake randomness
*/

/* 
MORE FUNCTIONALITY IF TIME:
- Easier mode with just continent!
*/