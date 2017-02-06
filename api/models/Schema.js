var DBHelper = require("./DBHelper.js");
var MongoClient = require('mongodb').MongoClient

var connURL = "mongodb://admin:test1234@ds056789.mlab.com:56789/copperfront";

// in the connection URL there should be some sort of customer ID/TOKEN
// ASSUMING "SCHEMAS" and "OBJECTS" are the collection names

function InsertSchema(pSchema) {
    MongoClient.connect(connURL, function (err, db) {
        console.log("Connected correctly to server");
        console.log("error " + err);
        DBHelper.insertDocuments(db, "SCHEMAS", pSchema, function () {
            db.close();
        });
    });
}

function GetSchema(pFilter, pCallback)
{
     MongoClient.connect(connURL, function (err, db) {
        console.log("Connected correctly to server");
        console.log("error " + err);
        DBHelper.findDocuments(db, "SCHEMAS", pFilter, function (data) {
            db.close();
            pCallback(data);
        });
    });
}



module.exports.InsertSchema=InsertSchema;
module.exports.GetSchema = GetSchema;