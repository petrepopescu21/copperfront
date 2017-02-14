var DBHelper = require(".\DBHelper.js");
var MongoClient = require('mongodb').MongoClient

var connURL = "mongodb://admin:test1234@ds056789.mlab.com:56789/copperfront";

// in the connection URL there should be some sort of customer ID/TOKEN
// ASSUMING "SCHEMAS" and "OBJECTS" are the collection names



function InsertObject(pObject, pObjectType) {
    MongoClient.connect(connURL, function (err, db) {
        console.log("Connected correctly to server");
        console.log("error " + err);
        DBHelper.insertDocuments(db, pObjectType, pObject, function () {
            db.close();
        });
    });
}
function GetSchema(pFilter,pObjectType, pCallback)
{
     MongoClient.connect(connURL, function (err, db) {
        console.log("Connected correctly to server");
        console.log("error " + err);
        DBHelper.findDocuments(db, pObjectType, pFilter, function (data) {
            db.close();
            pCallback(data);
        });
    });
}

module.exports.InsertObject=InsertObject;



// Kaelthor 10:52
// pls da-mi si mie pe discord sau undeva mock-ul ala de promise ce mi  l-ai aratat aseara
// ca pe ce m-ai ajutat foloseam alt promise nu native
// si inca o intrebare
// tu in obiect ai gen numele schemei?
// sfPetru 10:56
// nu am in obiect numele schemei, ala o sa fie doar in endpoint momentan
// cand ti-am dat ala de bnet, am facut initial cu bluebird
// dar as evita bluebird cat timp exista suport nativ
// Kaelthor 10:57
// am cautat !@# e cu native
// = new Promise(function(resolve, reject) {  // do a thing, possibly async, then…
// ceva de genu...
// sfPetru 10:57
// http://mono.software/2014/07/07/Creating-NodeJS-modules-with-both-promise-and-callback-API-support-using-Q/
// Kaelthor 10:57
// ms
// brb
// sfPetru 10:57
// asta foloseste Q
// Kaelthor 10:58
// ok si schema obiectului
// o determin dintr-un id? sau
// sfPetru 10:58
// iti trimit eu numele schemei
// din api endpoint
// Kaelthor 10:58
// aah perfect atunci
// sfPetru 10:58
// oricum initial trebuie sa cer schema ca sa validez obiectul
// deci sa faci si get-ul pe schema
// Kaelthor 10:58
// aia bruta?
// sfPetru 10:58
// inainte de put-ul pe obiect
// Kaelthor 10:58
// da...o sa fac si asta
// ok
// sfPetru 10:59
// uite aici inca o varianta
// http://stackoverflow.com/questions/32774491/is-providing-a-promise-as-a-modules-export-a-valid-pattern-for-asynch-initializ
// Kaelthor 11:00
// ms
// brb
// sfPetru 11:00
// dar din nou, incearca sa folosesti promisiuni native
// Kaelthor 11:00
// dap
// sfPetru 11:00
// #pocahontas
// Kaelthor