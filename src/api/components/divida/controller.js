const { Op } = require("sequelize");
const Divida = require("./model")

module.exports = {
    async index(req, res) {
        const where = {}
        const order = []
        const { valor, status, limit, offset, data, groupby, orderby } = req.query

        if(groupby) {
            order.push([groupby, orderby])
        }

        where[Op.and] = []
        if(status) {
            where[Op.and].push({
                status
            })
        }
        if(valor) {
            where[Op.and].push({
                valor: {
                    [Op.lte]: valor
                }
            })
        }
        if(data) {
            where[Op.and].push({
                created_at: {
                    [Op.lte]: data
                }
            })
        }

        const result = await Divida.findAll({ where, limit, offset, order })
        res.json(result);
    },

    async byPk(req, res) {
        const id = req.params.divida_id;
        const result = await Divida.findByPk(id);
        res.json(result);
    },

    async create(req, res) {
        const { valor, pessoa_id, status } = req.body;
        const usuario_id = req.payload.id
        const result = await Divida.create({ valor, usuario_id, pessoa_id, status });
        res.json(result);
    },

    async update(req, res) {
        const { valor, status } = req.body;
        const id = req.params.divida_id;
        const result = await Divida.update({ valor, status }, {
            where: {
                divida_id: id,
            }
        });
        res.json(result);
    },

    async delete(req, res) {
        const id = req.params.divida_id;
        const result = await Divida.destroy({ where: {
            divida_id: id,
        }});
        res.json(result);
    },
}