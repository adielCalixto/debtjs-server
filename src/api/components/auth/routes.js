const authService = require("./controller")
const schemas = require("./schemas")

const init = function(router) {
    router.post("/usuarios/login", schemas.authUserSchema, authService.loginUser);
}

module.exports = init