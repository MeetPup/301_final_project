'use strict';

(function(module) {

const homeController = {};

homeController.init = function() {
  $('.tab-content').hide();
  $('#home').show();
}

module.homeController = homeController;
})(window);
