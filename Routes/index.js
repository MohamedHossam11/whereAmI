const express = require('express');
const router = express.Router();
const { whereAmI } = require('../Controller/index');

router.use('/', whereAmI);

module.exports = router;
