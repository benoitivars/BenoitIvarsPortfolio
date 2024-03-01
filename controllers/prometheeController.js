const ExampleModel = require('../models/model'); // Remplacer par le modèle approprié

exports.getPromethee = (req, res) => {
    res.render('promethee', { title: 'Prométhée Page' });
};