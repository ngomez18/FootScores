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
var CronJob = require('cron').CronJob;
var cors = require('cors');


/************************************************
  REQUIRE LOCAL MODULES
************************************************/
var database = require('./database/mongo');
var dbConfig = require('./database/mongo-config');
var User = require('./models/user');
var index = require('./routes/index');
var auth = require('./routes/auth');
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

app.use(cors());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/auth', auth);
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
function checkResults() {
  console.log("PROCESSING RESULTS...");
  fixtures.getMatchesWeekBefore(processResults);
};

var processResults = function(data) {
  var matches = data;
  console.log("UPDATING SCORES FROM " + matches.length + " MATCHES");
  for (var i = 0; i < matches.length; i++) {
    if(matches[i].status == 'FINISHED') {
      console.log("--UPDATING RESULTS FOR "  + matches[i].homeTeamName + " - " + matches[i].awayTeamName);
      User.getUserByGuess(matches[i].homeTeamName, matches[i].awayTeamName, function(err, result) {
        if(err) {
          throw err;
        }
        if(!result.isEmpty) {
          console.log("----FOUND " + result.length + " USERS TO UPDATE");
          for (var i = 0; i < result.length; i++) {
            var currUser = result[i];
            var usrGuess = currUser.findGuess(matches[i].homeTeamName, matches[i].awayTeamName);
            if(checkGuess(usrGuess, matches[i].result.goalsHomeTeam, matches[i].result.goalsAwayTeam)) {
              User.updateScore(currUser.username, 10, {}, function(err, response) {
                if(err) {
                  throw err;
                }
                console.log("------Updated scores");
              });
              User.removeGuess(currUser.username, usrGuess, {}, function(err, response) {
                if(err) {
                  throw err;
                }
                console.log("------Removed guess");
              });
            }
          }
        }
      });
    }
  }
}

var checkGuess = function(guess, homeTeamScore, awayTeamScore) {
  return guess.homeTeamScore == homeTeamScore && guess.awayTeamScore == awayTeamScore;
}

var update = new CronJob('0 0 * * * *', checkResults);
update.start();

/************************************************
  SERVE STATIC FILES
************************************************/
app.use('/bootstrap', express.static(path.join(__dirname, '/public/bootstrap/')));
app.use('/static', express.static(path.join(__dirname, '/public')));


module.exports = app;
