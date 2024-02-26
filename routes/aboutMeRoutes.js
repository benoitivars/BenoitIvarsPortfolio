
const express = require('express');
const router = express.Router();
const { getAboutMe } = require('../controllers/aboutMeController');

router.get('/', getAboutMe);

module.exports = router;
