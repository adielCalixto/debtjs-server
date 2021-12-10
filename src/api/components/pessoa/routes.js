const schemas = require('./schemas')

module.exports = (routes) => {
    const Pessoa = require("./controller");

    routes.get("/pessoas", schemas.findPersonSchema, Pessoa.index);
    routes.get("/pessoas/:pessoa_id", Pessoa.byPk);
    routes.get("/pessoas/:pessoa_id/dividas", Pessoa.getDividas);
    routes.post("/pessoas/create", schemas.createPersonSchema, Pessoa.create);
    routes.put("/pessoas/:pessoa_id/update", schemas.updatePersonSchema, Pessoa.update);
    routes.delete("/pessoas/:pessoa_id/delete", Pessoa.delete);
};