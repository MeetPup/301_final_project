'use strict';

(function(module) {

const homeController = {};

homeController.init = function() {
  $('.tab-content').hide();
  $('#home').show();
  $('#form-home').show();
  $('#dog-image').show();
}

module.homeController = homeController;
})(window);
