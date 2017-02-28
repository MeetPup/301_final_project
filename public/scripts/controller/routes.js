'use strict'

console.log('routes controller');

page('/', homeController.init);
page('/about', aboutController.init);
page('/results', resultsController.init);

page();
