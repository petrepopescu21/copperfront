var MongoClient = require('mongodb').MongoClient

var connURL = "mongodb://admin:test1234@ds056789.mlab.com:56789/copperfront";
module.exports = MongoClient.connect(connURL)



