'use strict';

(function(module){
  const resultsView = {};
  const render = function() {
    let eventTemplate = Handlebars.compile($('#event-template').text());
    return eventTemplate();
  }

  $('#form-home').submit(function(e) {
    e.preventDefault();
  })

  $('#form-results > button').on('click', function() {
    $('#message').text(`We found ${results.all.length} results in your area.`);
    resultsController.setZipCode();
  })

module.resultsView = resultsView;
})(window);
