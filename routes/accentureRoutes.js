const express = require('express');
const router = express.Router();
const { getAccenture } = require('../controllers/accentureController');

router.get('/', getAccenture);

module.exports = router;