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
    $('#message').text(`We found ${results.all.length} results in your area.`);
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
    );

      map.fitBounds(bounds);

      let boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
      });
    });

  }

module.resultsView = resultsView;
module.initMap = initMap;

})(window);
