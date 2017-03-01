'use strict'

console.log('homeView');

(function(module){
  const homeView = {};
  const render = function() {
    let eventTemplate = Handlebars.compile($('#event-template').text());
    return eventTemplate();
  }

  $('#form-home').submit(function(e) {
    e.preventDefault();
  })

  $('#form-home > button').on('click', function() {
    console.log($('#homeInput').val());
    resultsController.setZipCode();
  })

module.homeView = homeView;
})(window);
