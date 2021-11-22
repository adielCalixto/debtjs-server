const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    const token = req.headers['authorization'];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) { return res.status(403).json(false) };

        req.payload = user;
        next();
    })
}