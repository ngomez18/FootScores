/************************************************
  REQUIRE NPM PACKAGES
************************************************/
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var mongoose = require('mongoose');
var cron = require('cron');


/************************************************
  REQUIRE LOCAL MODULES
************************************************/
var database = require('./database/mongo');
var dbConfig = require('./database/mongo-config');
var index = require('./routes/index');
var users = require('./routes/users');
var competitions = require('./routes/competitions');
var teams = require('./routes/teams');
var fixtures = require('./api/football-api');


/************************************************
  SERVER SETUP
************************************************/
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/competitions', competitions);
app.use('/teams', teams);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


/************************************************
  DATABASE SETUP
************************************************/
mongoose.connect(dbConfig.url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  //Databse is connected
});

/************************************************
  FUNCTIONS
************************************************/


/************************************************
  SERVE STATIC FILES
************************************************/
app.use('/bootstrap', express.static(path.join(__dirname, '/public/bootstrap/')));
app.use('/static', express.static(path.join(__dirname, '/public')));


module.exports = app;
