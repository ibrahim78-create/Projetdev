const db = require('../db'); // Assurez-vous que vous avez correctement configuré db.js pour la connexion à PostgreSQL

const getAllArticles = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM articles');
        res.json(result.rows);
    } catch (error) {
        res.status(500).send('Erreur lors de la récupération des articles');
    }
};

module.exports = { getAllArticles };
