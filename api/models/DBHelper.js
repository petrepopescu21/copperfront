var insertDocuments = function (pDb, pCollection, pDocument, pCallback) {
    // Get the documents collection
    var collection = pDb.collection(pCollection);
    // Insert some documents
    console.log("insertin " + JSON.stringify(pDocument));
    collection.insert(pDocument, function (err, result) {
        console.log("Inserted  document into the " + pCollection + " collection");
        console.log("error " + err);
        pCallback(result);
    });
}
var findDocuments = function (pDb, pCollection, pFilter, callback) {
    // Get the documents collection
    var collection = pDb.collection(pCollection);
    // Find some documents
    collection.find(pFilter).toArray(function (err, docs) {
        console.log("Found the following records");
        console.log(docs);
        callback(docs);
    });
}
module.exports.insertDocuments = insertDocuments;
module.exports.findDocuments = findDocuments;