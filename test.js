var schema = require('./api/helpers/validator/test_data/transschema.json');
var data = require('./api/helpers/validator/test_data/data.json');
var Validator = require('./api/helpers/validator/validator.js');

//should cache compiled schema
var userValidator = Validator("User").compile(schema);
var result = userValidator.validate(data);

//console.log(JSON.stringify(userValidator.compiled_schema.schema));
//console.log(result);