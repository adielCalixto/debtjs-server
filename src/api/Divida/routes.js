module.exports = (routes) => {
    const Divida = require("./controller");

    routes.get("/dividas", Divida.index);
    routes.get("/dividas/:divida_id", Divida.byPk);
    routes.post("/dividas/create", Divida.create);
    routes.put("/dividas/:divida_id/update", Divida.update);
    routes.delete("/dividas/:divida_id/delete", Divida.delete);
};