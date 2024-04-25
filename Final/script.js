document.addEventListener('DOMContentLoaded', function() {  
  // populate the dropdown menu for country names section:

  // get the dropdown datalist element
  const dropdown = document.getElementById("dropdown")
  // for each country
  geoData.forEach((data) => {
    // create a new option element
    let option = document.createElement("option")
    // make the value attribute the country name
    option.value = data.country
    // add the option to the dropdown
    dropdown.appendChild(option)
  })

  // USER INPUT SECTION
  // listen for when submit button gets clicked and check if correct
  let submitBtn = document.getElementById('submitBtn')
  submitBtn.addEventListener('click', checkCorrect)

  // function that checks and displays correctness
  function checkCorrect() {
    // when they submit, get their answer
    let userInput = document.getElementById('guess')
    // ignore case basically
    let answer = userInput.value.toLowerCase()

    // prepare to display correct section:
    let correctSection = document.getElementById("correct")
    correctSection.style.display = 'block'

    // update points (increase total by 1)
    let pointsSection = document.getElementById("points")
    points.total += 1; 

    // check if their answer matches right answer
    if (answer == country.toLowerCase()) {
      // CORRECT
      // clear out any text from before
      correctSection.innerHTML = ''
      // add correct text
      correctSection.appendChild(document.createTextNode('Correct!'))

      // update points (increase the num of correct by 1)
      points.correct += 1;
    }
    else {
      // WRONG
      // clear out any text from before
      correctSection.innerHTML = ''  
      // add wrong text    
      correctSection.appendChild(document.createTextNode('Wrong!'))
    }
    
    // DISPLAY POINTS by populating the HTML
    pointsSection.innerHTML = "POINTS: " + points.correct + "/" + points.total
  }

  // REGENERATE BUTTON SECTION
  let regenBtn = document.getElementById('regenBtn')
  regenBtn.addEventListener('click', regen)

  // regenerate new map function
  function regen() {
        // clear out whatever was in input box (previous guess)
        document.getElementById('guess').value = ""

        // generate random coords with function
        var coordData = randomCoord()

        // store the answer in this variable
        country = coordData.country
        // store the lat and lng so street view can display
        var coords = { lat:  coordData.lat, lng: coordData.lng }
    
        // create map
        var map = new google.maps.Map(document.getElementById("map"), {
            center: coords,
            zoom: 14,
        });
        // create new street view and adjust the coords, pov
        var panorama = new google.maps.StreetViewPanorama(
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
})

// GLOBAL VARs:
// var that contains correct answer to be accessed and checked later
var country = ""
// boolean for if user is correct
var correct = false
// points!!!
var points = {
  correct: 0,
  total: 0
}
// COUNTRIES/COORDS DATA
const geoData = [  
    {country:"Qatar", cont: "Asia", lat: 25.272234, lng: 51.421210},
    {country:"United States of America", cont: "North America", lat: 40.668083, lng: -73.978557 },
    {country:"Canada", cont: "North America", lat: 49.166786, lng: -122.801385},  
    {country:"Russia", cont: "Asia", lat: 55.761226, lng: 37.594540},
    {country:"Kenya", cont: "Africa", lat: 0.552119, lng: 35.306452},

    // {country:"", cont: "", lat: , lng: },
    // {country:"", cont: "", lat: , lng: },
    // {country:"", cont: "", lat: , lng: },
    // {country:"", cont: "", lat: , lng: },
    // {country:"", cont: "", lat: , lng: },
    // {country:"", cont: "", lat: , lng: },
    // {country:"", cont: "", lat: , lng: },

]

// GETTING THE STREET VIEW SET UP AND WORKING, ASYNC
async function initialize() {
    // generate random coords with function
    var coordData = randomCoord()

    // store the answer in this variable
    country = coordData.country
    // store the lat and lng so street view can display
    var coords = { lat:  coordData.lat, lng: coordData.lng }

    // create map
    var map = new google.maps.Map(document.getElementById("map"), {
        center: coords,
        zoom: 14,
    });
    // create new street view and adjust the coords, pov
    var panorama = new google.maps.StreetViewPanorama(
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

// generate and return random coordinates + country
function randomCoord() {
    // RANDOM COORD FROM AN ARRAY OF DATA
    const geoLength = geoData.length
    var randInd = Math.floor(Math.random() * geoLength)
    // return country, latitude, longitude in array form to access in initialize()
    return {
      country: geoData[randInd].country, 
      lat: geoData[randInd].lat, 
      lng: geoData[randInd].lng
    }
}

/*
NOTES/HARDSHIPS:
address pops up with street view via api so i went into inspect to find the element displaying it and set it to none
.gm-iv-address {
    display: none;
}

generating random coordinates, have to fake randomness
*/

/*
NEXT STEPS AS I KEEP WORKING 
- make prettier
- add more coords
- hide api key
- MEDIA QUERY
- MAYBE a little more randomness.. by switching up the coords a bit
*/

/*
COOl FEATURES I FOUND DURING PROCESS, SHARE WITH CLASS
- goog maps api
- datalist and options: dropdown menu for user input
*/

/* 
MORE FUNCTIONALITY IF TIME:
- Easier mode with just continent!
*/