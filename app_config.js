var express = require('express');

var app = module.exports = express();

var bodyParser = require('body-parser');
var path = require('path');
var allowCors = function(req, res, next) {

    res.header('Access-Control-Allow-Origin', '127.0.0.1:5000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credential', 'true');

    next();
}

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/controllers'));
app.use(express.static(__dirname + '/directives'));
app.use(express.static(__dirname + '/factories'));
app.use(express.static(__dirname + '/info'));
app.use(express.static(__dirname + '/services'));
app.use(express.static(__dirname + '/views'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/scripts'));

app.listen(5000);

app.use(allowCors);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));
