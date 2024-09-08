const db = require('../db'); // Assurez-vous que le fichier db.js est configuré correctement

const getArticles = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM articles');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erreur lors de la récupération des articles');
    }
};

const addArticle = async (req, res) => {
    const { title, content } = req.body;
    try {
        const result = await db.query('INSERT INTO articles (title, content) VALUES (, ) RETURNING *', [title, content]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erreur lors de l\'ajout d\'un article');
    }
};

module.exports = { getArticles, addArticle };
