const authenticate = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token) {
        // Logique d'authentification simplifiée (à remplacer par une vraie vérification)
        if (token === 'Bearer YOUR_SECRET_TOKEN') {
            next();
        } else {
            res.status(403).send('Accès interdit');
        }
    } else {
        res.status(401).send('Token manquant');
    }
};

module.exports = authenticate;
