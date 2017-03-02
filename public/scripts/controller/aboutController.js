'use strict';

(function(module) {

const aboutController = {};

aboutController.init = function() {
  $('.tab-content').hide();
  $('#form-home').hide();
  $('#results-title').hide();
  $('#about').show();
}

module.aboutController = aboutController;
})(window);
