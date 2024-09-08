const db = require('../db'); // Assurez-vous que le fichier db.js est configuré correctement

const getUsers = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erreur lors de la récupération des utilisateurs');
    }
};

const addUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const result = await db.query('INSERT INTO users (name, email) VALUES (, ) RETURNING *', [name, email]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erreur lors de l\'ajout d\'un utilisateur');
    }
};

module.exports = { getUsers, addUser };
