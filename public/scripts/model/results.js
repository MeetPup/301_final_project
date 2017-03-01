'use strict';

(function(module){
  const results = {};

  results.all = [];
  results.locations = [];

  results.getEvents = function(userZip, callback) {
    console.log('Requesting from Meetup.com...');
    let urlZip = `meetup/2/open_events?zip=${userZip}&and_text=False&offset=0&format=json&limited_events=False&photo-host=public&page=20&radius=25.0&category=26&desc=False&status=upcoming`;
    $.get(urlZip)
    .then(data => results.all = data.results, err => console.error(err))
    .then(function() {
      results.locations = results.all.map(getLocation);
    })
  };

  function getLocation(event) {
    if (event.venue) {
      let lat = event.venue.lat;
      let lon = event.venue.lon;
      let venue = true;
      return [lat, lon, venue];
    } else {
      let lat = event.group.group_lat;
      let lon = event.group.group_lon;
      let venue = false;
      return [lat, lon, venue];
    }
  }

  function initMap() {
    let codeFellows = {
      lat:  47.618217,
      lng: -122.3540207
    };
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: codeFellows
    });
    let marker = new google.maps.Marker({
      position: codeFellows,
      map: map
    });
    let marker2 = new google.maps.Marker({
      position: {
        lat: 47.6210848,
        lng: -122.352722
      },
      map: map
    });
  }

  module.results = results;
  module.initMap = initMap;
})(window);
