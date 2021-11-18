const { Router } = require("express")

const routes = Router()

const Pessoa = require('../controllers/PessoaController')
const Usuario = require('../controllers/UsuarioController')
const Divida = require('../controllers/DividaController')

routes.get("/users", Usuario.index);
routes.get("/users/:user_id", Usuario.byPk);
routes.get("/users/:user_id/dividas", Usuario.getDividas);
routes.post("/users/create", Usuario.create);
routes.put("/users/:user_id/update", Usuario.update);
routes.delete("/users/:user_id/delete", Usuario.delete);

routes.get("/pessoas", Pessoa.index);
routes.get("/pessoas/:pessoa_id/hasdividas", Pessoa.hasDividas);
routes.get("/pessoas/:pessoa_id", Pessoa.byPk);
routes.get("/pessoas/:pessoa_id/dividas", Pessoa.getDividas);
routes.post("/pessoas/create", Pessoa.create);
routes.put("/pessoas/:pessoa_id/update", Pessoa.update);
routes.delete("/pessoas/:pessoa_id/delete", Pessoa.delete);

routes.get("/dividas", Divida.index);
routes.get("/dividas/:divida_id", Divida.byPk);
routes.post("/dividas/create", Divida.create);
routes.put("/dividas/:divida_id/update", Divida.update);
routes.delete("/dividas/:divida_id/delete", Divida.delete);

module.exports = routes;