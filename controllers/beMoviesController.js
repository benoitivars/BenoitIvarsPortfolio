const ExampleModel = require('../models/model'); // Remplacer par le modèle approprié

exports.getBeMovies = (req, res) => {
    res.render('beMovies', { title: 'Be Movies' });
};