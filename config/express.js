'use strict';

module.exports.init = initExpress;
function initExpress(app) {
    const root = app.get('root');
    app.use(function(req,res,next){
        //add objects here
        next();
    })
}