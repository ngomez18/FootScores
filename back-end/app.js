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


/************************************************
  REQUIRE LOCAL MODULES
************************************************/
var database = require('./database/mongo');
var dbConfig = require('./database/mongo-config');
var index = require('./routes/index');
var users = require('./routes/users');
var fixtures = require('./api/football-api');


/************************************************
  SETUP
************************************************/
var app = express();

mongoose.connect(dbConfig.url);

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
  FUNCTIONS
************************************************/


/************************************************
  SERVE STATIC FILES
************************************************/
app.use('/bootstrap', express.static(path.join(__dirname, '/public/bootstrap/')));
app.use('/static', express.static(path.join(__dirname, '/public')));



module.exports = app;

/*
insertDocuments(db, data, function() {
  db.close();
});
});
});
}

var insertDocuments = function(db, for_insert, callback) {
// Get the documents collection
var collection = db.collection('partidos');
// Insert some documents
console.log('OK..');
collection.insertMany(for_insert, function(err, result) {
assert.equal(err, null);
console.log("Inserted into the collection");
callback(result);
});
}

var updateDocument = function(db, for_update, callback) {
// Get the documents collection
var collection = db.collection('partidos');
// Update document
console.log('OK..');
//console.log(collection);
for_update.forEach(function (u) {
collection.updateMany({},{'$set': u}, function(err, result) {
assert.equal(err, null);
console.log("Updated the document");
callback(result);
});
});
}
*/
