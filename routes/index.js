const express = require('express');
const app = express();
const port = 3000;

// Middleware pour le parsing des données JSON
app.use(express.json());

// Route de base
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Route pour les utilisateurs
app.use('/users', require('./backend/routes/users'));

// Route pour les articles
app.use('/articles', require('./backend/routes/articles'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
