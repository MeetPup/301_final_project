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

  $('#homeSubmitButton').on('click', function() {
    console.log($('#homeInput').val());
    resultsController.setZipCode();
  })

module.resultsView = resultsView;
})(window);
