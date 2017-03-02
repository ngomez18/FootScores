var express = require('express');
var request = require('request');
var http = require('http');
var router = express.Router();
var config = require('./football-api-config');

module.exports.getMatchesByCompetition = function(id, callback) {
  var options = config.options;
  options.url = config.hostname + 'competitions/' + id + '/fixtures?timeFrame=n1';
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body).fixtures);
    }
    else {
      console.log(error);
    }
  });
};

module.exports.getMatchesDayBefore = function(callback) {
  var options = config.options;
  options.url = config.hostname + '/fixtures?timeFrame=n1';
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body).fixtures);
    }
    else {
      console.log(error);
    }
  });
};

module.exports.getMatches = function(callback) {
  var options = config.options;
  options.url = config.hostname + '/fixtures?timeFrame=n1';
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body).fixtures);
    }
    else {
      console.log(error);
    }
  });
};

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
      })
    }
  });
};
