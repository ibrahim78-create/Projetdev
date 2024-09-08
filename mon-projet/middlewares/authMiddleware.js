const authenticate = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token) {
        // Logique d'authentification simplifi�e (� remplacer par une vraie v�rification)
        if (token === 'Bearer YOUR_SECRET_TOKEN') {
            next();
        } else {
            res.status(403).send('Acc�s interdit');
        }
    } else {
        res.status(401).send('Token manquant');
    }
};

module.exports = authenticate;
