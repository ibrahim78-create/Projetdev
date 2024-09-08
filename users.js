const express = require('express');
const router = express.Router();

// Exemple de données pour les utilisateurs
let users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' }
];

// Route pour obtenir tous les utilisateurs
router.get('/', (req, res) => {
    res.json(users);
});

// Route pour ajouter un nouvel utilisateur
router.post('/', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
});

module.exports = router;
