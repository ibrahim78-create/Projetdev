const express = require('express');
const app = express();
const port = 3000;

// Importation des contr�leurs
const { getUsers, addUser } = require('./controllers/usersController');
const { getArticles, addArticle } = require('./controllers/articlesController');

// Importation des middlewares
const authenticate = require('./middlewares/authMiddleware');

// Middleware pour le parsing des donn�es JSON
app.use(express.json());

// Middleware d'authentification (appliqu� uniquement sur les routes prot�g�es)
app.use('/users', authenticate);
app.use('/articles', authenticate);

// Routes des utilisateurs
app.get('/users', getUsers);
app.post('/users', addUser);

// Routes des articles
app.get('/articles', getArticles);
app.post('/articles', addArticle);

// D�marrage du serveur
app.listen(port, () => {
    console.log(Server is running at http://localhost:);
});
