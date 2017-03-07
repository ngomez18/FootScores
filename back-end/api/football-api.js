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
var competitions = ['WC', 'EC', 'CL', 'EL', 'PPL', 'DED', 'FL1', 'CDR', 'PD', 'SA', 'FAC', 'PL', 'DFB', 'BL1'];
var competitionsNames = ['World Cup', 'European Cup of Nations', 'Champions League', 'Europa League', 'UEFA Cup', 'Primeira Liga', 'Eredivise', 'Ligue 1', 'Copa del Rey', 'Primera División (Liga BBVA)', 'Serie A', 'FA Cup', 'English Premiere League', 'DFB Pokal', 'Bundesliga 1'];
var getCompetitionName = function(id) {
  return competitionsNames[competitions.indexOf(id)];
}
module.exports.competitions = competitions;
module.exports.competitionsNames = competitionsNames;
module.exports.getCompetitionName = getCompetitionName;


/************************************************
  API REQUESTS (football-data.org)
************************************************/
// Get all matches happening in the upcoming week from a certain competition(s)
module.exports.getMatchesByCompetition = function(id, callback) {
  var options = config.options;
  options.url = config.hostname + '/fixtures?timeFrame=n7&league=' + id;
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body).fixtures);
    } else {
      throw error;
    }
  });
};

// Get all the matches that took place the previous day
module.exports.getMatchesWeekBefore = function(callback) {
  var options = config.options;
  options.url = config.hostname + '/fixtures?timeFrame=p1&league=' + competitions.join(',');
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body).fixtures);
    } else {
      throw error;
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
    } else {
      throw error;
    }
  });
};

// Get a certain competition
module.exports.getCompetition = function(id, callback) {
  var options = config.options;
  options.url = config.hostname + '/competitions/' + id;
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body).fixtures);
    } else {
      throw error;
    }
  });
};

// Get a certain team
module.exports.getTeam = function(id, callback) {
  var options = config.options;
  options.url = config.hostname + '/teams/' + id;
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body).fixtures);
    } else {
      throw error;
    }
  });
};
