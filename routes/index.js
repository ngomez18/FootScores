var express = require('express');
var request = require('request');
var http = require('http');
var router = express.Router();
var fixtures = require('../api/football-api');
var database = require('../database/mongo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FootScores' });
});

/* GET any leagues matches */
router.get('/fixtures/:id', function(req, res, next) {
  var matches = fixtures.getMatchesByCompetition(req.params.id, function(data) {
    res.render('matches', {matches: data});
  });
});

router.get('/matches', function(req, res, next) {
  database.getConnection(fixtures.serveMatches);
  res.render('matches', {matches: {}});
});

module.exports = router;
