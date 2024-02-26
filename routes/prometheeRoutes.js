
const express = require('express');
const router = express.Router();
const { getPromethee } = require('../controllers/prometheeController');

router.get('/', getPromethee);

module.exports = router;
