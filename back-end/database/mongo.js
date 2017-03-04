/************************************************
  REQUIRE NPM PACKAGES
************************************************/
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');


/************************************************
  REQUIRE LOCAL MODULES
************************************************/
var Config = require('./mongo-config');


/************************************************
  DATABASE METHODS
************************************************/
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

module.exports.close = function(db) {
  console.log("Closing connection");
  db.close();

}

module.exports.insert = function(db, collection, data, callback) {
  // Get the documents collection
  var collection = db.collection(collection);
  // Insert some documents
  console.log('OK..');
  collection.insertMany(for_insert, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted into the collection");
    callback(result, module.exports.close);
  });
};

module.exports.update = function(db, collection, data, callback) {
  // Get the documents collection
  var collection = db.collection(collection);
  // Update document
  console.log('OK..');
  //console.log(collection);
  for_update.forEach(function (u) {
    collection.updateMany({},{'$set': u}, function(err, result) {
      assert.equal(err, null);
      console.log("Updated the document");
      callback(result, module.exports.close);
    });
  });
};
