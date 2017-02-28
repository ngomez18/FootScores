var express = require('express');
var router = express.Router();
var request = require('request');
var ligas = require('../public/data/competitions.json'); //Solo para pruebas y evitar usar el api constantemente.
var partidos428 = require('../public/data/partidosLiga.json'); //Solo para pruebas y evitar usar el api constantemente.


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/ligas', function(req, res, next) {
  res.json(ligas);
});

router.get('/ligas/:id', function(req, res, next) {
  var id = req.params.id;
  console.log(id);
  res.json(partidos428);
});

/*
El codigo siguiente se comento para no consumir los request diarios.
Con efecto de realizar pruebas.
---------------------------------------------------------------
router.get('/ligas', function(req, res, next) {
  request(optionsLigas, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var json = JSON.parse(body);
      console.log(body);
    }
    else {
      console.log(error);
    }
  });
});

var optionsLigas = {
  url: 'http://api.football-data.org/v1/competitions',
  headers: {
    'User-Agent': 'request',
    'X-Auth-Token': '346f924d956f48d5a82309e2e7eb72e6'//API KEy
  }
};

router.get('/ligas/:id', function(req, res, next) {
  request({url: 'http://api.football-data.org//v1/competitions/'+req.params.id+'/fixtures',
  headers: {'User-Agent': 'request','X-Auth-Token': '346f924d956f48d5a82309e2e7eb72e6'//API KEy}
}}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var json = JSON.parse(body);
      console.log(body);
    }
    else {
      console.log(error);
    }
  });
});
*/
module.exports = router;
