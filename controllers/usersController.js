const db = require('../db'); // Assurez-vous que vous avez correctement configuré db.js pour la connexion à PostgreSQL

const getAllUsers = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (error) {
        res.status(500).send('Erreur lors de la récupération des utilisateurs');
    }
};

module.exports = { getAllUsers };
