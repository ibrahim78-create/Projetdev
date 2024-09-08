const { Pool } = require('pg');
const pool = new Pool({
    user: 'Groupe7',    // Remplacez par votre utilisateur PostgreSQL
    host: 'localhost',
    database: 'projet_composant_services_web',
    password: 'Masterm1',  // Remplacez par votre mot de passe PostgreSQL
    port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
