# Définir les informations de connexion
$username = "Groupe7"
$database = "projet_composant_services_web"
$password = "Masterm1"

# Définir le contenu du fichier db.js avec les informations de connexion
$dbContent = @"
const { Pool } = require('pg');

const pool = new Pool({
    user: '$username',  // Nom d'utilisateur PostgreSQL
    host: 'localhost',
    database: '$database',  // Nom de votre base de données
    password: '$password',  // Mot de passe PostgreSQL
    port: 5432,
});

module.exports = pool;
"@

# Définir le chemin du fichier
$filePath = ".\db.js"

# Mettre à jour le fichier db.js
Set-Content -Path $filePath -Value $dbContent

# Afficher le contenu du fichier mis à jour pour vérification
Get-Content -Path $filePath
