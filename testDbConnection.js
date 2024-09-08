const pool = require('./config/db/db');

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Erreur lors de la connexion à la base de données:', err);
  } else {
    console.log('Connexion réussie, heure actuelle:', res.rows[0]);
  }
  pool.end();
});
