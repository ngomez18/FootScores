var express = require('express');
var request = require('request');
var http = require('http');
var router = express.Router();

var exports = {};

const hostname = 'https://api.football-data.org/v1/';

var options = {
  'method': 'GET',
  'headers': {
    'dataType': 'json',
    'X-Auth-Token': '58be930f357641e8a4cb1fecad504306',
    'X-Response-Control': 'minified'
  }
};

function getMatches(id, callback) {
  options.url = hostname +'competitions/' + id + '/fixtures?timeFrame=n1';
  console.log(options.url)
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body).fixtures);
    }
    else {
      console.log(error);
    }
  });
};

function getMatchesDayBeforeAllLeagues(callback) {
  options.url = hostname +'/fixtures?timeFrame=p1';
  console.log(options.url)
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body).fixtures);
    }
    else {
      console.log(error);
    }
  });
};

function getMatchesAllLeagues(callback) {
  options.url = hostname +'/fixtures?timeFrame=n1';
  console.log(options.url)
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body).fixtures);
    }
    else {
      console.log(error);
    }
  });
};


exports.getMatchesAllLeagues = getMatchesAllLeagues;
exports.getMatchesDayBeforeAllLeagues = getMatchesDayBeforeAllLeagues;
exports.getMatches = getMatches;

module.exports = exports;
