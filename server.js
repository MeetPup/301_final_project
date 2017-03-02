'use strict';

const express = require('express');
const requestProxy = require('express-request-proxy');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

//Routes for requesting HTML resources
app.get('/', (request, response) => response.sendFile('/index.html', {root: './public'}));
app.get('/about', (request, response) => response.sendFile('/index.html', {root: './public'}));
app.get('/results', (request, response) => response.sendFile('/index.html', {root: './public'}));

function proxyMeetup(request, response) {
  console.log('Routing Meetup request for ', request.params[0]);
  (requestProxy({
    dataType: 'jsonp',
    url: `https://api.meetup.com/${request.params[0]}`,
    query: {key: process.env.MEETUP_TOKEN}
  }))(request, response);
}

//Route to utilize our middleman proxy
app.get('/meetup/*', proxyMeetup)
app.get('*', (request, response) => response.sendFile('/404.html', {root: './public'}));

app.listen(PORT, function() {
  console.log(`Listening on PORT ${PORT}`);
});
