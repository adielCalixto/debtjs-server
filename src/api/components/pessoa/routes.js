const schemas = require('./schemas')
const Pessoa = require("./controller");

const init = function(router) {
    router.get("/pessoas", schemas.findPersonSchema, Pessoa.index);
    router.get("/pessoas/:pessoa_id", Pessoa.byPk);
    router.get("/pessoas/:pessoa_id/dividas", Pessoa.getDividas);
    router.post("/pessoas/create", schemas.createPersonSchema, Pessoa.create);
    router.put("/pessoas/:pessoa_id/update", schemas.updatePersonSchema, Pessoa.update);
    router.delete("/pessoas/:pessoa_id/delete", Pessoa.delete);
};

module.exports = init