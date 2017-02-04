'use strict';

const express = require('express');
const router = express.Router();

const root = require('../controllers/root.js');
const rootMid = require('../middleware/root.js');

router.get('/',rootMid.ex,root.get);

module.exports = router;