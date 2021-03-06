'use strict';

(function(module){
  const results = {};

  results.all = [];
  results.locations = [];

  results.getEvents = function(userZip, callback) {
    let urlZip = `meetup/2/open_events?zip=${userZip}&and_text=False&offset=0&format=json&limited_events=False&photo-host=public&page=20&radius=20&category=26&desc=False&status=upcoming`;
    $.get(urlZip)
    .then(data => results.all = data.results, err => console.error(err))
    .then(function() {
      if (results.all.length > 0) {
        results.locations = results.all.map(getLocation);
        callback();
        results.setInfoContent(results.all);
      } else {
        $('#message').html(`Sorry! No public events are planned within 20 miles of ${userZip}.<br/>Maybe you should plan one yourself on <a href="https://www.meetup.com" target="_blank">Meetup.com</a>!`)
      }
    })
  };

  results.setInfoContent = function(events) {
    results.infoWindowContent = results.all.map(function(event) {
      let name = event.name;
      let event_url = event.event_url;
      let group = event.group.name;
      let groupUrl = `https://www.meetup.com/${event.group.urlname}/`;
      let time = `${moment(event.time).format("ddd, MMMM Do, YYYY, h:mm a")} (${moment(event.time).fromNow()})`;
      let distance = event.distance.toFixed(1);
      let address = '';
      let desc = event.description;
      if (event.venue) {
        let addressFields = ['address_1', 'city', 'state', 'zip'];
        let resultAddress = [];
        for (var i = 0; i < addressFields.length; i++) {
          let checkedField = addressFields[i];
          if (event.venue[checkedField]) {
            resultAddress[checkedField] = event.venue[checkedField];
          } else {
            resultAddress[checkedField] = '';
          }
        };
        address = `${resultAddress['address_1']}<br/>${resultAddress['city']}, ${resultAddress['state']} ${resultAddress['zip']}<br/>`;
      } else {
        address = '';
      }
    return `<div id="content"><strong><b><a href="${event_url}" target="_blank">${name}</a></b></strong><br/>Hosted by <a href="${groupUrl}" target="_blank">${group}</a><br/><br/>${time} - ${distance} miles away<br/><b>${address}</b></div>`;
  });
  }

  function getLocation(event) {
    if (event.venue && event.venue.lat != 0) {
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
