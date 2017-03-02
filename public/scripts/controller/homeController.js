'use strict';

(function(module) {

const homeController = {};

homeController.init = function() {
  $('.tab-content').hide();
  $('#results').hide();
  $('#results-title').hide();
  $('#home').show();
  $('#form-home').show();
}

module.homeController = homeController;
})(window);
