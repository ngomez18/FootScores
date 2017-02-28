var express = require('express');
var request = require('request');
var http = require('http');
var router = express.Router();

const hostname = 'https://api.football-data.org/v1/competitions/';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FootScores' });
});

var options = {
  'method': 'GET',
  'headers': {
    'dataType': 'json',
    'X-Auth-Token': '58be930f357641e8a4cb1fecad504306',
    'X-Response-Control': 'minified'
  }
};

/* GET any leagues matches */
router.get('/fixtures/:id', function(req, res, next) {
  var matches = {};
  options.url = hostname + req.params.id + '/fixtures';
  console.log(options.url)
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      matches = JSON.parse(body).fixtures;
      res.render('matches', {matches: matches});
    }
    else {
      console.log(error);
      res.status(500).send('Something broke!');
    }
  });
});

module.exports = router;
