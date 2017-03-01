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
      mapTypeId: 'roadmap',
      styles:
      [
          {
              "elementType": "geometry",
              "stylers": [
                  {
                      "hue": "#ff4400"
                  },
                  {
                      "saturation": -68
                  },
                  {
                      "lightness": -4
                  },
                  {
                      "gamma": 0.72
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels.icon"
          },
          {
              "featureType": "landscape.man_made",
              "elementType": "geometry",
              "stylers": [
                  {
                      "hue": "#0077ff"
                  },
                  {
                      "gamma": 3.1
                  }
              ]
          },
          {
              "featureType": "water",
              "stylers": [
                  {
                      "hue": "#00ccff"
                  },
                  {
                      "gamma": 0.44
                  },
                  {
                      "saturation": -33
                  }
              ]
          },
          {
              "featureType": "poi.park",
              "stylers": [
                  {
                      "hue": "#44ff00"
                  },
                  {
                      "saturation": -23
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "hue": "#007fff"
                  },
                  {
                      "gamma": 0.77
                  },
                  {
                      "saturation": 65
                  },
                  {
                      "lightness": 99
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "gamma": 0.11
                  },
                  {
                      "weight": 5.6
                  },
                  {
                      "saturation": 99
                  },
                  {
                      "hue": "#0091ff"
                  },
                  {
                      "lightness": -86
                  }
              ]
          },
          {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                  {
                      "lightness": -48
                  },
                  {
                      "hue": "#ff5e00"
                  },
                  {
                      "gamma": 1.2
                  },
                  {
                      "saturation": -23
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "saturation": -64
                  },
                  {
                      "hue": "#ff9100"
                  },
                  {
                      "lightness": 16
                  },
                  {
                      "gamma": 0.47
                  },
                  {
                      "weight": 2.7
                  }
              ]
          }
      ]
    };

    let mapElement = document.getElementById('map');
    let map = new google.maps.Map(mapElement, mapOptions);

    let infoWindow = new google.maps.InfoWindow(), marker;

    results.locations.forEach(function(location) {
      let icon = {
        url: "images/paw.png", // url
        scaledSize: new google.maps.Size(25, 25), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      };

      let position = new google.maps.LatLng(location[0], location[1]);

      bounds.extend(position);

      marker = new google.maps.Marker({
        position: position,
        map: map,
        icon: icon
        // title: `${location[0]}, ${location[1]}`
      });

      google.maps.event.addListener(marker, 'click', function() {
        console.log('inside addlistener', marker);
      });

      // let boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        // this.setZoom(10);
      //   google.maps.event.removeListener(boundsListener);
      // });
    });

    map.fitBounds(bounds);
  }

module.resultsView = resultsView;
module.initMap = initMap;

})(window);
