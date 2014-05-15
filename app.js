//Load Modules
var express = require('express'),
    http = require('http'),
    path = require('path'),
    routes = require('./app/routes'),
    mongoose = require('mongoose'),
    app = express();

// Initialize Database
var configDB = require('./config/database');
mongoose.connect(configDB.url);

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');


app.listen(process.env.PORT || 3000);