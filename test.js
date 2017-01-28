var schema = require('./schema.json');
var Validator = require('./validator.js');

console.dir(Validator(schema).fields.images.schema.imageUrl);