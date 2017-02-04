'use strict';

module.exports.get = getRoot;

function getRoot(req,res) {
    res.json({"hello":req.mid});
}