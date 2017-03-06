var express = require('express');
var app = express();
var dogs = require('./dogs');

app.get('/ab', function(req, res) {
  var dog = dogs[Math.floor(Math.random() * dogs.length)];
  res.send(dog);
});

app.use(express.static(__dirname + '/public'));

var server = app.listen(8686, function() {
  var port = server.address().port;
  console.log('Server running at http://localhost:%s', port);
});
