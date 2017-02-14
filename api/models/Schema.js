var DBHelper = require("./DBHelper.js");
// var MongoClient = require('mongodb').MongoClient

// var connURL = "mongodb://admin:test1234@ds056789.mlab.com:56789/copperfront";

// in the connection URL there should be some sort of customer ID/TOKEN
// ASSUMING "SCHEMAS" and "OBJECTS" are the collection names

var MongoClient = require("../../config/mongo.js");



function InsertSchema(pSchema) {
    MongoClient.then( function(db) {
        DBHelper.insertDocuments(db, "SCHEMAS", pSchema, function () {
        });
    });
}

function GetSchema(pFilter, pCallback)
{
     MongoClient.then( function(db) {
        DBHelper.findDocuments(db, "SCHEMAS", pFilter, function (data) {
            pCallback(data);
        });
    });
}



module.exports.InsertSchema=InsertSchema;
module.exports.GetSchema = GetSchema;