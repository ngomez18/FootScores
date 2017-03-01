var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var Config = require('./mongo-config');


module.exports.getConnection = function(callback) {
  MongoClient.connect(Config.url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    callback(db, function() {
      console.log('Closed connection');
      db.close();
    });
  });
};

module.exports.insert = function(db, data, callback) {
  // Get the documents collection
  var collection = db.collection('partidos');
  // Insert some documents
  console.log('OK..');
  collection.insertMany(for_insert, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted into the collection");
    callback(result);
  });
};

module.exports.update = function(db, data, callback) {
  // Get the documents collection
  var collection = db.collection('partidos');
  // Update document
  console.log('OK..');
  //console.log(collection);
  for_update.forEach(function (u) {
    collection.updateMany({},{'$set': u}, function(err, result) {
      assert.equal(err, null);
      console.log("Updated the document");
      callback(result);
    });
  });
};
