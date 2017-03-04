/************************************************
  REQUIRE NPM PACKAGES
************************************************/
var express = require('express');
var router = express.Router();
var request = require('request');


/************************************************
  REQUIRE LOCAL MODULES
************************************************/
var Team = require('../models/team');


/************************************************
  FUNCTIONS
************************************************/
//GET teams
router.get('/', function(req, res, next) {
  Team.getTeams(function(err, data) {
    if(err) {
      throw err;
    }
    res.json(data);
  });
});

//GET specific team
router.get('/:id', function(req, res, next) {
  Team.getTeam(req.params.id, function(err, data) {
    if(err) {
      throw err;
    }
    res.json(data);
  });
});

//POST a new team
router.post('/', function(req, res, next) {
  var team = req.body;
  Team.saveTeam(team, function(err, response) {
    if(err) {
      throw err;
    }
    res.json(response);
  });
});

// UPDATE a teams information
router.put('/:id', function(req, res, next) {
  var id = req.params.id;
  var team = req.body;
  Team.updateTeam(id, team, {}, function(err, response) {
    if(err) {
      throw err;
    }
    res.json('Update succesful!');
  });
});

module.exports = router;
