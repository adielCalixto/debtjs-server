module.exports = (routes) => {
    const Pessoa = require("./controller");

    routes.get("/pessoas", Pessoa.index);
    routes.get("/pessoas/:pessoa_id/hasdividas", Pessoa.hasDividas);
    routes.get("/pessoas/:pessoa_id", Pessoa.byPk);
    routes.get("/pessoas/:pessoa_id/dividas", Pessoa.getDividas);
    routes.post("/pessoas/create", Pessoa.create);
    routes.put("/pessoas/:pessoa_id/update", Pessoa.update);
    routes.delete("/pessoas/:pessoa_id/delete", Pessoa.delete);
};