/************************************************
  REQUIRE NPM PACKAGES
************************************************/
var express = require('express');
var router = express.Router();
var request = require('request');


/************************************************
  REQUIRE LOCAL MODULES
************************************************/
var User = require('../models/user');


/************************************************
  FUNCTIONS
************************************************/
//GET users
router.get('/', function(req, res, next) {
  User.getUsers(function(err, data) {
    if(err) {
      throw err;
    }
    res.json(data);
  });
});

//GET specific user
router.get('/:user', function(req, res, next) {
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


module.exports = router;
