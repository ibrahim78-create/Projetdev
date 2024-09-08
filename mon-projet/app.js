const express = require('express');
const app = express();
const port = 3000;

// Importation des contrôleurs
const { getUsers, addUser } = require('./controllers/usersController');
const { getArticles, addArticle } = require('./controllers/articlesController');

// Importation des middlewares
const authenticate = require('./middlewares/authMiddleware');

// Middleware pour le parsing des données JSON
app.use(express.json());

// Middleware d'authentification (appliqué uniquement sur les routes protégées)
app.use('/users', authenticate);
app.use('/articles', authenticate);

// Routes des utilisateurs
app.get('/users', getUsers);
app.post('/users', addUser);

// Routes des articles
app.get('/articles', getArticles);
app.post('/articles', addArticle);

// Démarrage du serveur
app.listen(port, () => {
    console.log(Server is running at http://localhost:);
});
