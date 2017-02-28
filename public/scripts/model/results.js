'use strict';
var getEvents = function(userZip)  {
  let urlZip = `https://api.meetup.com/2/open_events?zip=${userZip}&and_text=False&offset=0&format=json&limited_events=False&photo-host=public&page=20&radius=25.0&category=26&desc=False&status=upcoming&sig_id=221605170&sig=b3752e7f98d287ac973bb792f81d9b46d0f0f97f`;
  $.ajax({
    dataType: 'jsonp',
    url: urlZip,
    method: 'GET',
    success: function(result) {
      console.log('results', result);
    }
  });
}
