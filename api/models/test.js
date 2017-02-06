var schema = require('./schema.js')

var filter={"title":"User"};

var result = schema.GetSchema(filter, function(result)
{
console.log(result);
});

