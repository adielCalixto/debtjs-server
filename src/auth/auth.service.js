const Usuario = require("../api/Usuario/model");
const jwt = require("jsonwebtoken")
const permissions = require("../config/permissions")
const { createHash } = require("crypto")

const auth = {
    loginUser: (req, res) => {
        const { email, password } = req.body;
        Usuario.findOne({
            where: {
                email
            }
        })
        .then(result => {
            if(!result) { return res.status(400).json("User not found") };

            const payload = {
                nome: result.nome,
                role: result.role,
                id: result.usuario_id
            }

            const hash = createHash('sha1') 
            hash.update(password)

            if(result.password === hash.digest('hex')) {
                res.json(jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: permissions[result.role].expires }))
            } else {
                res.status(400).json(false)
            }
        })
        .catch(err => {
            res.status(500)
            res.json(err)
        })
    },
};

module.exports = auth;