'use strict';

(function(module) {

  const resultsController = {};

  resultsController.init = function() {
    $('.tab-content').hide();
    $('#form-home').show();
    $('#results').show();
    $('#results-title').show();
  }

  resultsController.setZipCode = function() {
    let userZip = $('#zipInput').val();
    // Validate ZIP code entered
    let regZip = /^\d{5}$/;
    zipTest(userZip)
    function zipTest(zip) {
      let testValue = regZip.test(zip);
      console.log(testValue);
      if (testValue) {
        // Check if ZIP entered is in US, center map
        $.ajax({
          url: `https://maps.googleapis.com/maps/api/geocode/json?&address=${userZip}`,
          method: 'GET'
        })
        .then(
          data => {
            let zipAddress = data.results[0].formatted_address;
            let zipLat = data.results[0].geometry.location.lat;
            let zipLng = data.results[0].geometry.location.lng;
            let shortName = data.results[0].address_components[4].short_name;
            console.log('shortName is ', shortName);
            if (shortName !== 'US') {
              // center map
              // feedback message
              console.log(`Not a US ZIP code; the closest match we found was ${zipAddress}.`);
              return 'not found';
            }
          },
          err => {console.error(err)
          }
        )

        // If valid ZIP, request events & load results view
        results.setLocalStorage();
        results.getEvents(userZip, renderMapResults);
        page('/results');
      } else {
        //TODO: make a more user friendly response
        results.handleInvalidInput();
      }
    }
  }

  module.resultsController = resultsController;
})(window);
