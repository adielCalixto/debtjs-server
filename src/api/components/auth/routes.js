const authService = require("./controller")

module.exports = (routes) => {
    routes.post("/usuarios/login", authService.loginUser);
}