const { Router } = require("express")
const routes = Router()

const { join } = require("path")
const path = join(__dirname, "../api/components");

require("fs").readdirSync(path).forEach(function(folder) {
  require(join(path, folder, "routes"))(routes);
});

module.exports = routes;