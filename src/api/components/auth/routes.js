const authService = require("./controller")
const schemas = require("./schemas")

module.exports = (routes) => {
    routes.post("/usuarios/login", schemas.authUserSchema, authService.loginUser);
}