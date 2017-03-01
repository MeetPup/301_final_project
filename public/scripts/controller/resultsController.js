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
      // Valid ZIP, request events & load results view
      results.getEvents(userZip, listResults, initMap);
      resultsController.init();
    } else {
      //TODO: make a more user friendly response
      alert('Please enter a valid 5 digit ZIP code.');
      $('#zipInput').val('');
    }
}

}

module.resultsController = resultsController;
})(window);
