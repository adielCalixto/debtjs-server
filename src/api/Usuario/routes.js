module.exports = (routes) => {
    const Usuario = require("./controller");

    routes.get("/users", Usuario.index);
    routes.get("/users/:user_id", Usuario.byPk);
    routes.get("/users/:user_id/dividas", Usuario.getDividas);
    routes.post("/users/create", Usuario.create);
    routes.put("/users/:user_id/update", Usuario.update);
    routes.delete("/users/:user_id/delete", Usuario.delete);
};