const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');

// Lire le fichier de configuration
const configPath = path.join(__dirname, 'db', 'dbConfig.json');
const dbConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// Créer un pool de connexions PostgreSQL
const pool = new Pool({
  host: dbConfig.host,
  port: dbConfig.port,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
});

// Exporter le pool pour l'utiliser dans d'autres modules
module.exports = pool;
