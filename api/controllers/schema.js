'use strict';

const Schema = require('../models/Schema.js');
const _ = require('lodash');
module.exports.put = putSchema;

function putSchema(req,res) {
    var data = _.cloneDeep(req.body);
    Schema.InsertSchema(data);
    res.json('Ok');
}