'use strict';

(function(module) {

  const resultsController = {};

  resultsController.init = function() {
    $('.tab-content').hide();
    $('#form-home').show();
    $('#form-div').show();
    $('#results').show();
    $('#results-title').show();
  };

  resultsController.setZipCode = function() {
    let userZip = $('#zipInput').val();
    // Validate ZIP code entered
    zipTest(userZip);

    function zipTest(zip) {
      // Confirm a 5 digit number was entered
      let regZip = /^\d{5}$/;
      let regCheckOk = regZip.test(zip);
      if (regCheckOk) {
        // Check if ZIP entered is in US
        $.ajax({
          url: `https://maps.googleapis.com/maps/api/geocode/json?&address=${userZip}`,
          method: 'GET'})
          .then(
            data => {
              let shortName = data.results[0].address_components[4].short_name;
              // True if response is in the US, otherwise false
              if (shortName === 'US') {
                results.setLocalStorage();
                results.getEvents(userZip, renderMapResults);
                page('/results');
                $('#form-div').empty();
              } else {
                results.handleInvalidInput('badZip');
              }
            },
            err => console.error(err));
        } else results.handleInvalidInput('badZip');
      }
    };
  module.resultsController = resultsController;
})(window);
