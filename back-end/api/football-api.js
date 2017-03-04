/************************************************
  REQUIRE NPM PACKAGES
************************************************/
var request = require('request');
var http = require('http');


/************************************************
  REQUIRE LOCAL MODULES
************************************************/
var config = require('./football-api-config');


/************************************************
  API REQUESTS (football-data.org)
************************************************/
// Get all matches happening in the upcoming week from a certain competition
module.exports.getMatchesByCompetition = function(id, callback) {
  var options = config.options;
  options.url = config.hostname + 'competitions/' + id + '/fixtures?timeFrame=n7';
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body).fixtures);
    }
    else {
      console.log(error);
    }
  });
};

// Get all the matches that took place the previous week
module.exports.getMatchesWeekBefore = function(callback) {
  var options = config.options;
  options.url = config.hostname + '/fixtures?timeFrame=n7';
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body).fixtures);
    }
    else {
      console.log(error);
    }
  });
};

// Get all the matches happening in the upcoming week, all competitions
module.exports.getMatchesNextWeek = function(callback) {
  var options = config.options;
  options.url = config.hostname + '/fixtures?timeFrame=n7';
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body).fixtures);
    }
    else {
      console.log(error);
    }
  });
};

/*
module.exports.serveMatches = function(db, callback) {
  var collection = db.collection('partidos');
  collection.find({}, function(err, document) {
    if(err) {
      console.log("ERROR:\n"+err);
    } else {
      console.log("SUCCESS:\n");
      document.each(function(err, thing) {
        if(err) {
          console.log(err);
          return;
        }
        console.log(thing);
        callback(db);
      });
    }
  });
};

module.exports.serveMatchesCompetition = function(db, id, callback) {
  var collection = db.collection('partidos');
  collection.find({
    'competitionId': id
  }, function(err, document) {
    if(err) {
      console.log("ERROR:\n"+err);
    } else {
      console.log("SUCCESS:\n");
      document.each(function(err, thing) {
        if(err) {
          console.log(err);
          return;
        }
        console.log(thing);
        callback(db);
      });
    }
  });
};
*/
