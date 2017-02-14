var conn = require('./config/mongo.js');
var dbx = {};
var Timer = new Date();
conn.then(function (db) {
    console.log(Timer.getTime())

},
function(err){
    console.log(err);
});

conn.then(x=>console.log(x));

conn.then(x=>console.log(x));


conn.then(x=>console.log(x));


conn.then(x=>console.log(x));






