const express = require('express');
const router = express.Router();

// Exemple de données pour les articles
let articles = [
    { id: 1, title: 'Article 1' },
    { id: 2, title: 'Article 2' }
];

// Route pour obtenir tous les articles
router.get('/', (req, res) => {
    res.json(articles);
});

// Route pour ajouter un nouvel article
router.post('/', (req, res) => {
    const newArticle = req.body;
    articles.push(newArticle);
    res.status(201).json(newArticle);
});

module.exports = router;
