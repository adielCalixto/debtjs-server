const Usuario = require("./model")
const { createHash } = require("crypto")

module.exports = {
    async index(req, res) {
        const result = await Usuario.findAll()
        res.json(result);
    },

    async byPk(req, res) {
        const id = req.params.user_id;
        const result = await Usuario.findByPk(id);
        res.json(result);
    },

    async create(req, res) {
        const { nome, email, password, role } = req.body;

        const hash = createHash('sha1') 
        hash.update(password)

        const result = await Usuario.create({ nome, email, password: hash.digest('hex'), role })
        res.json(result);
    },

    async update(req, res) {
        const { nome, email, password, role } = req.body;
        const id = req.params.user_id;
        const result = await Usuario.update({ nome, email, password, role }, {
            where: {
                usuario_id: id,
            }
        });
        res.json(result);
    },

    async delete(req, res) {
        const id = req.params.user_id;
        const result = await Usuario.destroy({ where: {
            usuario_id: id,
        }});
        res.json(result);
    },

    async getDividas(req, res) {
        const id = req.params.user_id;
        const result = await Usuario.findByPk(id, { include: 'dividas' });
        res.json(result);
    },
}