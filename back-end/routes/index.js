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
var auth = require('../auth/auth');
var User = require('../models/user');
var Competition = require('../models/competition');
var Team = require('../models/team');

/************************************************
  ROUTES
************************************************/
// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FootScores' });
});

// Authenticate with JWT
router.get('/auth', auth.authenticate);

//GET users
router.get('/users', function(req, res, next) {
  User.getUsers(function(err, data) {
    if(err) {
      throw err;
    }
    res.json(data);
  });
});

//GET specific user
router.get('/users/:user', function(req, res, next) {
  User.getUser(req.params.user, function(err, data) {
    if(err) {
      throw err;
    }
    res.json(data);
  });
});

//POST a new user
router.post('/register', function(req, res, next) {
  var user = req.body;
  User.saveUser(user, function(err, response) {
    if(err) {
      throw err;
    }
    res.json(response);
  });
});

// UPDATE a users personal info
router.put('/update/:username', function(req, res, next) {
  var username = req.params.username;
  var user = req.body;
  User.udpateUser(username, user, {}, function(err, response) {
    if(err) {
      throw err;
    }
    res.json('Update succesful!');
  });
});

// UPDATE a users score
router.put('/score/:username', function(req, res, next) {
  var username = req.params.username;
  var scoreChange = req.body.scoreChange;
  if(scoreChange) {
    User.updateScore(username, scoreChange, {}, function(err, response) {
      if(err) {
        throw err;
      }
      res.send('Update succesful!');
    });
  }
});

// GET any competitions matches
router.get('/fixtures/:leagues', function(req, res, next) {
  var leagues = req.params.leagues.split(',');
  var matches = fixtures.getMatchesByCompetition(leagues, function(data) {
    res.json(data);
  });
});

//GET fixtures from every relevant competition
router.get('/fixtures', function(req, res, next) {
  var matches = fixtures.getMatchesNextWeek(function(data) {
    res.json(data);
  });
});


module.exports = router;
