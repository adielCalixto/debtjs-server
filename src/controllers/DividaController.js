const Divida = require("../models/Divida")

module.exports = {
    async index(req, res) {
        const result = await Divida.findAll()
        return result;
    },

    async byPk(req, res) {
        const id = req.params.divida_id;
        const result = await Divida.findByPk(id);
        return result;
    },

    async create(req, res) {
        const { valor, usuario_id, pessoa_id, status } = req.body;
        const result = await Divida.create({ valor, usuario_id, pessoa_id, status });
        return result;
    },

    async update(req, res) {
        const { valor, usuario_id, pessoa_id, status } = req.body;
        const result = await Divida.update({ valor, usuario_id, pessoa_id, status });
        return result;
    },

    async delete(req, res) {
        const id = req.params.divida_id;
        const result = await Divida.destroy({ where: {
            divida_id: id,
        }});
        return result;
    },
}