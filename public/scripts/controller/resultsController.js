'use strict';

(function(module) {

const resultsController = {};

resultsController.init = function() {
  $('.tab-content').hide();
  $('#form-home').show();
  $('#results').show();
}

resultsController.setZipCode = function() {
  let userZip = $('#zipInput').val();
  // return userZip;
  results.getEvents(userZip, initMap);
}

module.resultsController = resultsController;
})(window);
