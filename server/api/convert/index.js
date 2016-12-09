'use strict';

var express = require('express');
var controller = require('./convert.controller');

var router = express.Router();

router.post('/png', controller.png);
router.post('/html', controller.html);

module.exports = router;
