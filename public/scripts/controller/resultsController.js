'use strict';

(function(module) {

const resultsController = {};

resultsController.init = function() {
  $('.tab-content').hide();
  $('#results').show();
}

resultsController.setZipCode = function() {
  let userZip = $('#homeInput').val();
  // return userZip;
  results.getEvents(userZip, initMap);
}

module.resultsController = resultsController;
})(window);
