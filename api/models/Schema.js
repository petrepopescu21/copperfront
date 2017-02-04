var MongoClient = require('mongodb').MongoClient

var connURL = "mongodb://admin:test1234@ds056789.mlab.com:56789/copperfront";

// in the connection URL there should be some sort of customer ID/TOKEN
// ASSUMING "SCHEMAS" and "OBJECTS" are the collection names

function InsertSchema(pSchema) {
    MongoClient.connect(connURL, function (err, db) {
        console.log("Connected correctly to server");
        console.log("error " + err);
        insertDocuments(db, "SCHEMAS", pSchema, function () {
            db.close();
        });
    });
}

function InsertObject(pObject) {
    MongoClient.connect(connURL, function (err, db) {
        console.log("Connected correctly to server");
        console.log("error " + err);
        insertDocuments(db, "OBJECTS", pObject, function () {
            db.close();
        });
    });
}

var insertDocuments = function (pDb, pCollection, pDocument, pCallback) {
    // Get the documents collection
    var collection = pDb.collection(pCollection);
    // Insert some documents
    console.log ("insertin " + JSON.stringify(pDocument));
    collection.insert(pDocument, function (err, result) {
        console.log("Inserted  document into the "+ pCollection+" collection");
        console.log("error " + err);
        pCallback(result);
    });
}

module.exports.InsertSchema=InsertSchema;
module.exports.insertDocuments=insertDocuments;