const authService = require("./auth.service")

module.exports = (routes) => {
    routes.post("/usuarios/login", authService.loginUser);
}