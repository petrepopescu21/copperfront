'use strict';

const Validator = require('../helpers/validator/validator.js');

module.export.test = function(obj) {
    var userValidator = Validator("User").compile(schema);
}
