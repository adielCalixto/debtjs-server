const { Router } = require("express")

const routes = Router()

const Pessoa = require('../controllers/PessoaController')

routes.get("/:pessoa_id", Pessoa.getDividas)

module.exports = routes;