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
// login function
router.get('/login', function(req, res, next) {
  var user = req.headers.user;
  var pass = req.headers.password;
  User.getUser(user, function(err, response) {
    if(err) {
      throw err;
    } else {
      if(response[0].correctPassword(pass)) {
        res.status(200).send('authenticated');
      } else {
        res.status(500).send('Wrong password');
      }
    };
  });
});

module.exports = router;
