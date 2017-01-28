
//step 1: check meta 
// var hasMetaName = new Promise(function(resolve, reject) {
//     if (schema.meta.name == undefined || typeof schema.meta.name !== "string" )
//         reject('Schema name invalid');
//     else 
//         resolve();
// });

var reqSchema = {
    "meta" : {},
    "fields": {}
};


var reqMeta = {
    "name" : "",
    "id" : 0
};

var reqFieldMeta = {
    "data_type" : "",
    "required" : false
};

var reqFieldSchema = {
    "string" : {"meta":{}},
    "object" : {"meta":{},"schema":{}},
    "collection" : {"meta":{},"schema":{}},
    "array" : {"meta":{}}
}

/*

meta - name, id

*/

function meta (obj, res) {
    for (var index in obj) {
        if (obj.hasOwnProperty(index)) {
            //console.log(index);
            if (typeof res[index] !== typeof obj[index])
                delete res[index];
            if (res[index]!==undefined)
                res[index] = obj[index];

        }
    }
    return res;
}

function fieldsValidation (obj,req) {
    for (var index in obj) {
        var field;
        if (obj.hasOwnProperty(index)) {
            if (obj[index].meta.data_type === undefined)
                throw "Nu ai data type, boss";
            else if(req[obj[index].meta.data_type] === undefined)
                throw "data type nu e permis";
            else {
                obj[index] = meta(obj[index],req[obj[index].meta.data_type]);
            }
            obj[index].meta = meta(obj[index].meta,reqFieldMeta);
        }
        if (obj[index].schema !== undefined)
            obj[index].schema = fieldsValidation(obj[index].schema,req);
    }
    return obj;
}

module.exports = function (schema) {
    schema = meta(schema,reqSchema);
    schema.meta = meta(schema.meta,reqMeta);
    schema.fields = fieldsValidation(schema.fields,reqFieldSchema);
    return schema;
}