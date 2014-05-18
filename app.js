//Load Modules
var express = require('express'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    methodOverride = require('method-override'),
    routes = require('./config/routes'),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    configDB = require('./config/database'),
    seeder = require('./config/seed'),
    app = express();

// Initialize Database
mongoose.connect(configDB.url);
mongoose.connection.on('open', function() {
  console.log("Connected to Mongoose...");
  seeder.check();
});

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(methodOverride());
app.use('/', express.static(path.join(__dirname, 'public')));

routes.initialize(app)

app.listen(process.env.PORT || 3000);