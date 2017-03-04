/************************************************
  REQUIRE NPM PACKAGES
************************************************/
var request = require('request');
var http = require('http');


/************************************************
  REQUIRE LOCAL MODULES
************************************************/
var config = require('./football-api-config');


/************************************************
  API METADATA
************************************************/
var competitions = ['CL', 'EL', 'EC', 'PPL', 'DED', 'FL1', 'CDR', 'PD', 'SA', 'FAC', 'DFB', 'BL1'];
var competitionsNames = ['Champions League', 'UEFA Cup', 'European Cup of Nations', 'Primeira Liga', 'Eredivise', 'Ligue 1', 'Copa del Rey', 'Primera División (Liga BBVA)', 'Serie A', 'FA Cup', 'English Premiere League', 'DFB Pokal', 'Bundesliga 1'];
var getCompetitionName = function(id) {
  return competitionsNames[competitions.indexOf(id)];
}

module.exports.competitions = competitions;
module.exports.competitionsNames = competitionsNames;
module.exports.getCompetitionName = getCompetitionName;


/************************************************
  API REQUESTS (football-data.org)
************************************************/
// Get all matches happening in the upcoming week from a certain competition
module.exports.getMatchesByCompetition = function(id, callback) {
  var options = config.options;
  options.url = config.hostname + '/fixtures?timeFrame=n7&league=' + id;
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body).fixtures);
    }
    else {
      console.log(error);
    }
  });
};

// Get all the matches that took place the previous week
module.exports.getMatchesWeekBefore = function(callback) {
  var options = config.options;
  options.url = config.hostname + '/fixtures?timeFrame=n7';
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body).fixtures);
    }
    else {
      console.log(error);
    }
  });
};

// Get all the matches happening in the upcoming week, all competitions
module.exports.getMatchesNextWeek = function(callback) {
  var options = config.options;
  options.url = config.hostname + '/fixtures?timeFrame=n7&league=' + competitions.join(',');
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body).fixtures);
    }
    else {
      console.log(error);
    }
  });
};
