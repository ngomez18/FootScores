/************************************************
  REQUIRE NPM PACKAGES
************************************************/
var express = require('express');
var router = express.Router();
var request = require('request');
var jwt = require('jsonwebtoken');

/************************************************
  REQUIRE LOCAL MODULES
************************************************/
var User = require('../models/user');

const secretKey = 'ngomezfmartinez';


/************************************************
  FUNCTIONS
************************************************/
// login function
router.post('/login', function(req, res, next) {
  var user = req.body.user;
  var pass = req.body.password;
  User.getUser(user, function(err, response) {
    if(err) {
      throw err;
    }
    if(response.isEmpty) {
      res.status(403).send('No such username');
    } else {
      if(response[0].correctPassword(pass)) {
        var token = jwt.sign({
          username: response[0].username,
          admin: response[0].admin
        }, secretKey, {
          expiresIn: 60*60*12 //12 hours
        });
        res.status(200).json({
          success: true,
          token: token
        });
      } else {
        res.status(403).send('Wrong password');
      }
    }
  });
});

// GET info stored in the token
router.get('/me', function(req, res) {
  res.send(req.decoded);
});

module.exports.verify = function(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if(token) {
    jwt.verify(token, secretKey, function(err, decoded) {
      if(err) {
        return res.status(403).send('Invalid token');
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send('No token');
  }
};

module.exports = router;
