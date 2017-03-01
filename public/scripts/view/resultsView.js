'use strict';

(function(module){
  const resultsView = {};
  const render = function() {
    let eventTemplate = Handlebars.compile($('#event-template').text());
    return eventTemplate();
  }

  $('#form-home').submit(function(e) {
    e.preventDefault();
  })

  $('#form-results > button').on('click', function() {
    console.log($('#homeInput').val());
    resultsController.setZipCode();
  })

  function initMap() {
    let bounds = new google.maps.LatLngBounds();

    let mapOptions = {
      mapTypeId: 'roadmap'
    };

    let mapElement = document.getElementById('map');
    let map = new google.maps.Map(mapElement, mapOptions);

    let infoWindow = new google.maps.InfoWindow(), marker;
    results.locations.forEach(function(location) {
      let position = new google.maps.LatLng(location[0], location[1]);
      bounds.extend(position);
      marker = new google.maps.Marker({
        position: position,
        map: map,
        // title: `${location[0]}, ${location[1]}`
      });

      google.maps.event.addListener(marker, 'click', function() {
        console.log('inside addlistener', marker);
      }
      //   marker, 'click', function(marker) {
      //   // return function() {
      //   //   infoWindow.setContent(location[2]);
      //   //   infoWindow.open(map,marker);
      //   // };
      // }
    );

      map.fitBounds(bounds);

      let boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
      });
    });

    // let codeFellows = {
    //   lat:  47.618217,
    //   lng: -122.3540207
    // };
    // let map = new google.maps.Map(document.getElementById('map'), {
    //   zoom: 15,
    //   center: codeFellows
    // });
    // let marker = new google.maps.Marker({
    //   position: codeFellows,
    //   map: map
    // });
    // let marker2 = new google.maps.Marker({
    //   position: {
    //     lat: 47.6210848,
    //     lng: -122.352722
    //   },
    //   map: map
    // });
  }

module.resultsView = resultsView;
module.initMap = initMap;

})(window);
