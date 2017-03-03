'use strict'

console.log('homeView');

(function(module){
  const homeView = {};

  $('#form-home').submit(function(e) {
    e.preventDefault();
  })

  results.setLocalStorage = function() {
    let userZip = $('#zipInput').val();
    console.log('localStorage userZip', userZip);
    localStorage.setItem('userZip', JSON.stringify(userZip));
  };

  results.checkLocalStorage = function() {
    let userZip = $('#zipInput').val();
    if (localStorage.userZip) {
      console.log('check localStorage');
    } else {
    };
  };

results.checkLocalStorage();

  $('#form-home > button').on('click', function() {
    resultsController.setZipCode();
  })

results.handleInvalidInput = function() {
  let userZip = $('#zipInput').val();
  $('#zipInput').val('');
  $('#zipInput').attr('placeholder', 'Not a zipcode...');
  $('#form-div').empty().append(`"${userZip}" is not a valid zip code. Please Try again.`);

}
module.homeView = homeView;
})(window);
