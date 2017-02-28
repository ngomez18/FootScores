var express = require('express');
var request = require('request');
var http = require('http');
var router = express.Router();
var fixtures = require('./fixtures');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FootScores' });
});

/* GET any leagues matches */
router.get('/fixtures/:id', function(req, res, next) {
  var matches = fixtures.getMatches(req.params.id, function(data) {
    res.render('matches', {matches: data});
  });
});

module.exports = router;
