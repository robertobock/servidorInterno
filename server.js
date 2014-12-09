//server.js
//libraries
var express = require('express');
var bodyParser = require('body-parser');
var kiwitienda = require('./models/kiwitienda');

//init app
var app = express();
app.all('/*', function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "X-Requested-With");
 res.header("Access-Control-Allow-Methods",'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 next();
});
//Middleware
app.use(bodyParser.json()); //parse request Bodies
app.use(bodyParser.urlencoded());
app.use('/api', kiwitienda); 
//Start the server
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Server listening in the port: ' + port);