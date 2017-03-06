/************************************************
  REQUIRE NPM PACKAGES
************************************************/
var express = require('express');
var request = require('request');
var http = require('http');
var router = express.Router();


/************************************************
  REQUIRE LOCAL MODULES
************************************************/
var fixtures = require('../api/football-api');
var database = require('../database/mongo');
var auth = require('../auth/authentication');


/************************************************
  ROUTES
************************************************/
// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FootScores' });
});

// GET any competitions matches
router.get('/fixtures/:leagues', function(req, res, next) {
  var leagues = req.params.leagues.split(',');
  var matches = fixtures.getMatchesByCompetition(leagues, function(data) {
    res.json(data);
  });
});

//GET upcoming fixtures from every relevant competition
router.get('/fixtures', function(req, res, next) {
  var matches = fixtures.getMatchesNextWeek(function(data) {
    res.json(data);
  });
});

//GET results from every relevant competition
router.get('/results', function(req, res, next) {
  var matches = fixtures.getMatchesWeekBefore(function(data) {
    res.json(data);
  });
});


module.exports = router;
