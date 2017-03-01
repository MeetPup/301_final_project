'use strict';

(function(module) {

const homeController = {};

homeController.init = function() {
  $('.tab-content').hide();
  $('#home').show();
  $('#form-home').show();
}

module.homeController = homeController;
})(window);
