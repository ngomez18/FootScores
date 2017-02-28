var express = require('express');
var request = require('request');
var http = require('http');
var router = express.Router();

var exports = {};

const hostname = 'https://api.football-data.org/v1/competitions/';

var options = {
  'method': 'GET',
  'headers': {
    'dataType': 'json',
    'X-Auth-Token': '58be930f357641e8a4cb1fecad504306',
    'X-Response-Control': 'minified'
  }
};

function getMatches(id, callback) {
  options.url = hostname + id + '/fixtures?timeFrame=n1';
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

exports.getMatches = getMatches;

module.exports = exports;
