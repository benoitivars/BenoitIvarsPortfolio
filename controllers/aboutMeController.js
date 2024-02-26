
const ExampleModel = require('../models/model'); // Remplacer par le modèle approprié

exports.getAboutMe = (req, res) => {
    res.render('aboutme', { title: 'About Me Page' });
};
