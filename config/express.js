'use strict';
const bodyParser = require('body-parser');

module.exports.init = initExpress;
function initExpress(app) {
    const root = app.get('root');
    app.use(bodyParser.json());
    app.use(function(req,res,next){
        //add objects here
        next();
    })
}