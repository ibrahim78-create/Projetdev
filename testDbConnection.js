const pool = require('./config/db/db');

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Erreur lors de la connexion � la base de donn�es:', err);
  } else {
    console.log('Connexion r�ussie, heure actuelle:', res.rows[0]);
  }
  pool.end();
});
