'use strict';

const Schema = require('../models/Schema.js');
const _ = require('lodash');
module.exports.put = putSchema;
module.exports.get = getSchema;
function putSchema(req,res) {
    var data = _.cloneDeep(req.body);
    Schema.InsertSchema(data);
    res.json('Ok');
}

function getSchema(req,res) {
    var filter = {"title":req.params.name};
    Schema.GetSchema(filter,function(data){
        res.json(data);
    });
}