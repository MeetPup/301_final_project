'use strict';

(function(module){
  const results = {};

  results.all = [];
  results.locations = [];

  results.getEvents = function(userZip, callback1, callback2) {
    console.log('Requesting from Meetup.com...');
    let urlZip = `meetup/2/open_events?zip=${userZip}&and_text=False&offset=0&format=json&limited_events=False&photo-host=public&page=20&radius=smart&category=26&desc=False&status=upcoming`;
    $.get(urlZip)
    .then(data => results.all = data.results, err => console.error(err))
    .then(function() {
      results.locations = results.all.map(getLocation);
      callback1();
      callback2();
      results.setInfoContent(results.all);
    })
  };

  results.setInfoContent = function(events) {
    results.infoWindowContent = results.all.map(function(event) {
      let address;
      let name = event.name;
      let desc = event.description;
      let distance = event.distance;
      let event_url = event.event_url;
      let time = new Date(event.time);
      if (event.venue) {
        if (event.venue.address_1) {
          address = `${event.venue.address_1}<br/>${event.venue.city}, ${event.venue.state} ${event.venue.zip}<br/>`;
          console.log(address);
        } else {
          address = '';
          console.log(address);
        }
      } else {
        address = '';
      }
    return `<strong><a href=${event_url} target="_blank">${name}</a></strong><br/>${time} - ${distance} miles away<br/>${address}${desc}`;
  });
  }

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

  module.results = results;
})(window);
