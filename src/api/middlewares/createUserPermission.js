const permissions = require("../../config/permissions")

module.exports = (req, res, next) => {
    if(!req.payload) { res.status(403).json(false); }
    
    const { role } = req.payload;
    const { role: bodyRole } = req.body;
    
    if(!permissions[role].canCreate.includes(bodyRole)) {
        return res.status(401).json(false);
    }

    next();
}