
const ExampleModel = require('../models/model'); // Remplacer par le modèle approprié

exports.getAboutMe = (req, res) => {
    res.render('aboutMe', { title: 'About Me Page' });
};
