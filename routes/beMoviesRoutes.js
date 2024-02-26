
const express = require('express');
const router = express.Router();
const { getBeMovies } = require('../controllers/beMoviesController');

router.get('/', getBeMovies);

module.exports = router;
