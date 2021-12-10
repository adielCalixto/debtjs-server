const schemas = require("./schemas")

module.exports = (routes) => {
    const Divida = require("./controller");

    routes.get("/dividas", schemas.findDebtSchema, Divida.index);
    routes.get("/dividas/:divida_id", Divida.byPk);
    routes.post("/dividas/create", schemas.createDebtSchema, Divida.create);
    routes.put("/dividas/:divida_id/update", schemas.updateDebtSchema, Divida.update);
    routes.delete("/dividas/:divida_id/delete", Divida.delete);
};