var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/node_restful_test')

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use('/my_api', require('./config/routes'))


app.listen(3000);
console.log("server running on port 3000");