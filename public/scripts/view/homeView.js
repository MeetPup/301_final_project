'use strict'

console.log('homeView');

(function(module){
  const homeView = {};

  $('#form-home').submit(function(e) {
    e.preventDefault();
  })

  results.localStorage = function() {
    let userZip = $('#zipInput').val();
    console.log('localStorage userZip', userZip);
    if (localStorage.userZip) {
      console.log('first part of if statement for localStorage');
    } else {
      console.log('storing data');
        localStorage.setItem('userZip', JSON.stringify(userZip));
    };
  };

  $('#form-home > button').on('click', function() {
    console.log($('#zipInput').val());
    resultsController.setZipCode();
    results.localStorage();
  })

module.homeView = homeView;
})(window);
