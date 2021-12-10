const schemas = require("./schemas")
const Usuario = require("./controller");
const createPermission = require("../../middlewares/createUserPermission")

const init = function(router) {
    router.get("/users", schemas.findUserSchema, Usuario.index);
    router.get("/users/:user_id", Usuario.byPk);
    router.get("/users/:user_id/dividas", Usuario.getDividas);
    router.post("/users/create", schemas.createUserSchema, createPermission, Usuario.create);
    router.put("/users/:user_id/update", schemas.updateUserSchema, Usuario.update);
    router.delete("/users/:user_id/delete", Usuario.delete);
};

module.exports = init