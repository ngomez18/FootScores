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
var processResponse = function(req, res, user) {

};

// login function
router.post('/login', function(req, res, next) {
  console.log("Entró al método");
  var user = req.body.username;
  var pass = req.body.password;
  User.getUser(user, function(err, response) {
    if(err) {
      throw err;
    } else {
      console.log("response:");
      console.log(response);
      var userFound = response[0];
      console.log("user");
      console.log(userFound);
      if(response.length < 1 || !response[0] || !userFound) {
        console.log("No such username " + user);
        res.status(403).send('No such username');
        return;
      } else {
        console.log('Comparing ' + user + ' to ');
        if(!userFound.correctPassword(pass)) {
          res.status(403).send('Wrong password');
        } else {
          var token = jwt.sign({
            username: userFound.username,
            admin: userFound.admin
          }, secretKey, {
            expiresIn: 60*60*12 //12 hours
          });
          res.status(200).json({
            success: true,
            token: token
          });
        }
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
