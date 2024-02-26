
    const express = require('express');
    const mongoose = require('mongoose');
    const path = require('path');
    const app = express();
    
    // Configuration du moteur de vues EJS
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));
    
    // Dossiers statiques
    app.use(express.static('public'));
    
    // Configuration de MongoDB
    
    // Attention, vous devez préciser les onnées recquises pour assurer la connexion
    
    const uri = "mongodb+srv://votreidentifiant:votremotdepasse@cluster0.nctiqxg.mongodb.net/?retryWrites=true&w=majority/yourDBName";
    const url = "mongodb://127.0.0.1:27017/yourDBName";
    
    
    //Choisissez ici manuellement si vous voulez travailler avec l'url en local ou l'uri sur Atlas
    mongoose.connect(url)
        .then(() => console.log('Connexion à MongoDB réussie'))
        .catch(err => console.error('Erreur de connexion à MongoDB', err));
    
    // Routes
    const indexRouter = require('./routes/indexRoutes');
    const beMoviesRouter = require('./routes/beMoviesRoutes');
    const accentureRouter = require('./routes/accentureRoutes');
    const prométhéeRouter = require('./routes/prometheeRoutes');
    const aboutMeRouter = require('./routes/aboutMeRoutes');
    const notFoundRouter = require('./routes/404Routes');
    
    app.use('/', indexRouter);
    app.use('/beMovies', beMoviesRouter);
    app.use('/accenture', accentureRouter);
    app.use('/promethee', prométhéeRouter);
    app.use('/aboutMe', aboutMeRouter);
    app.use('*', notFoundRouter);
    
    // Lancement du serveur
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Serveur lancé sur le port ${PORT}`);
    });
