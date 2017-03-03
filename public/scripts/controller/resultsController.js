'use strict';

(function(module) {

  const resultsController = {};

  resultsController.init = function() {
    $('.tab-content').hide();
    $('#form-home').show();
    $('#form-div').show();
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
        $('#form-div').empty();
        results.setLocalStorage();
        results.getEvents(userZip, renderMapResults);
        page('/results');
      } else {
        //TODO: make a more user friendly response
        $('#form-div').empty().append(`"${userZip}" is not a valid zip code. Please Try again.`);
        $('#zipInput').val('');
      }
    }
  }

  module.resultsController = resultsController;
})(window);
