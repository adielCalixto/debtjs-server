const Usuario = require("../models/Usuario")

module.exports = {
    async index(req, res) {
        const result = await Usuario.findAll()
        return result;
    },

    async byPk(req, res) {
        const id = req.params.user_id;
        const result = await Usuario.findByPk(id);
        return result;
    },

    async create(req, res) {
        const { nome, email, password, role } = req.body;
        const result = await Usuario.create({ nome, email, password, role })
        return result;
    },

    async update(req, res) {
        const { nome, email, password, role } = req.body;
        const result = await Usuario.update({ nome, email, password, role });
        return result;
    },

    async delete(req, res) {
        const id = req.params.user_id;
        const result = await Usuario.destroy({ where: {
            usuario_id: id,
        }});
        return result;
    },

    async getDividas(req, res) {
        const id = req.params.user_id;
        const result = await Usuario.findByPk(id, { include: 'dividas' });
        return result;
    },

    hasDividas(req, res) {
        const id = req.params.usuario_id;
        Usuario.findByPk(id).then(async usuario => {
            const result = await usuario.countDividas();
            res.json((result > 0));
        })
        .catch(error => {
            res.status(500)
            res.json(error);
        });        
    },
}