const { Router } = require("express")
const router = Router()

const { join } = require("path")
const { existsSync, readdirSync } = require("fs")
const path = join(__dirname, "../api/components");

readdirSync(path).forEach(function(folder) {
  const routesPath = join(path, folder, "routes.js")
  if(existsSync(routesPath)) {
    require(routesPath)(router);
  }
});

module.exports = router;