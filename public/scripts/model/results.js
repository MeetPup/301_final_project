'use strict';
var getEvents = function(userZip)  {
  let urlZip = `meetup/2/open_events?zip=${userZip}&and_text=False&offset=0&format=json&limited_events=False&photo-host=public&page=20&radius=25.0&category=26&desc=False&status=upcoming`;
  $.get(urlZip)
  .then(data => console.log(data));
}

// (function(module){
//   const results = {};

  // results.all = [];
  //
  // results.requestResults = function(callback) {
  //   $.get('meetup/find/event')
  //   .then(data => results.all = data, err => console.error(err))
  //   .then(callback);
  // };

//   module.results = results;
// })(window);
