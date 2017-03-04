/************************************************
  REQUIRE NPM PACKAGES
************************************************/
var express = require('express');
var router = express.Router();
var request = require('request');


/************************************************
  REQUIRE LOCAL MODULES
************************************************/
var Competition = require('../models/competition');


/************************************************
  FUNCTIONS
************************************************/
//GET competitions
router.get('/', function(req, res, next) {
  Competition.getCompetitions(function(err, data) {
    if(err) {
      throw err;
    }
    res.json(data);
  });
});

//GET specific competition
router.get('/:league', function(req, res, next) {
  Competition.getCompetition(req.params.league, function(err, data) {
    if(err) {
      throw err;
    }
    res.json(data);
  });
});

//POST a new competition
router.post('/', function(req, res, next) {
  var comp = req.body;
  Competition.saveCompetition(comp, function(err, response) {
    if(err) {
      throw err;
    }
    res.json(response);
  });
});

// UPDATE a competitions information
router.put('/:league', function(req, res, next) {
  var league = req.params.league;
  var comp = req.body;
  Competition.updateCompetition(league, comp, {}, function(err, response) {
    if(err) {
      throw err;
    }
    res.json('Update succesful!');
  });
});


module.exports = router;
