async function initialize() {
    const fenway = { lat: 42.345573, lng: -71.098326 };

    const panorama = new google.maps.StreetViewPanorama(
      document.getElementById("pano"),
      {
        position: fenway,
        pov: {
          heading: 34,
          pitch: 10,
        },
      },
    );
  
    map.setStreetView(panorama);
  }
  
  window.initialize = initialize;