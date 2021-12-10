const { Op } = require("sequelize");
const Pessoa = require("./model")

module.exports = {
    async index(req, res) {
        const { cpf, nome, email, limit, offset, groupby, orderby } = req.query
        const order = []
        const where = {}
        where[Op.and] = []

        if(groupby) {
            order.push([groupby, orderby])
        }
        if(nome) {
            where[Op.and].push({
                nome: {
                    [Op.like]: `%${nome}%`
                }
            })
        }
        if(email) {
            where[Op.and].push({ email })
        }
        if(cpf) {
            where[Op.and].push({ cpf })
        }

        const result = await Pessoa.findAll({ where, limit, offset, order })
        res.json(result);
    },

    async byPk(req, res) {
        const id = req.params.pessoa_id;
        const result = await Pessoa.findByPk(id);
        res.json(result);
    },

    async create(req, res) {
        const { nome, cpf, telefone, email } = req.body;
        const result = await Pessoa.create({ nome, cpf, telefone, email });
        res.json(result);
    },

    async update(req, res) {
        const { nome, cpf, telefone, email } = req.body;
        const id = req.params.pessoa_id;
        const result = await Pessoa.update({ nome, cpf, telefone, email }, {
            where: {
                pessoa_id: id,
            }
        });
        res.json(result);
    },

    async delete(req, res) {
        const id = req.params.pessoa_id;
        const result = await Pessoa.destroy({ where: {
            pessoa_id: id,
        }});
        res.json(result);
    },

    async getDividas(req, res) {
        const id = req.params.pessoa_id;
        const result = await Pessoa.findByPk(id, { include: 'dividas' });
        res.json(result);
    },
}