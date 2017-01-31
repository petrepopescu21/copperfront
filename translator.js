var traverse = require('traverse');
var Ajv = require('ajv');
var ajv = new Ajv({v5:true});
var fs = require('fs');

var start = require('./transschema.json');
var data = require('./data.json');

var convert_translatable = function(obj) {
    var result = traverse(obj).map(function(item) {
    if (this.key == "translatable" && (this.node === true || this.node == "true")) {
        this.delete();
        var group = JSON.stringify(this.parent.node);
        var output = {"patternGroups":{"^[a-z]{2}-[A-Z]{2}$":{"minimum":1,"schema":JSON.parse(group)}}};
        this.parent.update(output);
    }
    });
    //console.log(result);
    return result;
}

var schema = convert_translatable(start);
fs.writeFile("./result.json", JSON.stringify(schema), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
var compiled_schema = ajv.compile(schema);
var valid = compiled_schema(data);
if (!valid) console.log(compiled_schema.errors);
else console.log("yeeey");

fs.writeFile("./output.json", JSON.stringify(data), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 