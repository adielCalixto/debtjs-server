const { Op } = require("sequelize");
const Pessoa = require("./model")

module.exports = {
    async index(req, res) {
        const result = await Pessoa.findAll()
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

    async bycpf(req, res) {
        const cpf = req.params.pessoa_cpf;
        const result = await Pessoa.findOne({ where: { cpf } });
        res.json(result);
    },

    async bynome(req, res) {
        const nome = req.params.pessoa_nome;
        const result = await Pessoa.findAll({ where: {
            nome: {
                [Op.like]: ('%'+nome+'%')
            }
        } });
        res.json(result);
    },

    hasDividas(req, res) {
        const id = req.params.pessoa_id;
        Pessoa.findByPk(id).then(async pessoa => {
            const result = await pessoa.countDividas();
            res.json((result > 0));
        })
        .catch(error => {
            res.status(500);
            res.json(error);
        });        
    },
}