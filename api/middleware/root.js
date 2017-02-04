'use strict';

module.exports.ex = exampleMiddleware;

function exampleMiddleware(req,res,next) {
    req.mid = "middleware works";
    next();
}