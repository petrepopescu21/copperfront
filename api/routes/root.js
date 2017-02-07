'use strict';

const express = require('express');
const router = express.Router();

const root = require('../controllers/root.js');
const schema = require('../controllers/schema.js');
const rootMid = require('../middleware/root.js');

//router.get('/',rootMid.ex,schema.put);
router.post('/schema',schema.put);
router.get('/schema',function(req,res){
    res.send('ok');
});
module.exports = router;