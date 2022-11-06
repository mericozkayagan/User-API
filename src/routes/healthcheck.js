const express = require('express');
const router = express.Router();
const { healthcheck } = require('../controllers/user');

router.route('/').get(healthcheck);

module.exports = router;