const schemas = require("./schemas")
const Divida = require("./controller");

const init = function(router) {
    router.get("/dividas", schemas.findDebtSchema, Divida.index);
    router.get("/dividas/:divida_id", Divida.byPk);
    router.post("/dividas/create", schemas.createDebtSchema, Divida.create);
    router.put("/dividas/:divida_id/update", schemas.updateDebtSchema, Divida.update);
    router.delete("/dividas/:divida_id/delete", Divida.delete);
}

module.exports = init