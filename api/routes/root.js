'use strict';

const express = require('express');
const router = express.Router();

const root = require('../controllers/root.js');
const schema = require('../controllers/schema.js');
const rootMid = require('../middleware/root.js');

//router.get('/',rootMid.ex,schema.put);
router.put('/schema',schema.put);
module.exports = router;