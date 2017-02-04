var traverse = require('traverse');
var Ajv = require('ajv');
var ajv = new Ajv({v5:true,removeAdditional:'all'});
var fs = require('fs');

var validator = module.exports = function (obj) {
    return new Validator(obj);
};

function Validator(obj) {
    this.obj = obj;
    //this.schema = obj;
}

Validator.prototype.compile = function(schema) {
    schema = convert_translatable(schema);
    this.compiled_schema = ajv.compile(schema);
    return this;
}

Validator.prototype.validate = function(data) {
    if (this.compiled_schema === undefined) console.error("Please compile your schema first"); 
    var valid = this.compiled_schema(data);
    if (!valid) 
        return this.compiled_schema.errors;
    else 
        return data;
}

//var start = require('./transschema.json');
//var data = require('./data.json');

var convert_translatable = function(obj) {
    var result = traverse(obj).map(function(item) {
    if (this.key == "translatable" && (this.node === true || this.node == "true")) {
        this.delete();
        var group = JSON.stringify(this.parent.node);
        var output = {"patternProperties":{"^[a-z]{2}-[A-Z]{2}$":JSON.parse(group)}};
        this.parent.update(output);
    }
    });
    //console.log(result);
    return result;
}

