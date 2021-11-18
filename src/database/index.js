const Sequelize = require("sequelize")
const config = require("../config/database")
const { join } = require("path");

var sequelize = new Sequelize(config);

(async function() {
  try {
      await sequelize.authenticate()
      console.log("it works :)")
  } catch(error) {
      console.log("it doesn't work :(")
      console.log(error)
  }
})()

const path = join(__dirname, "../api");
let models = [];
require("fs").readdirSync(path).forEach((folder) => {
  const model = require(join(path, folder, "model"));
  model.init(sequelize)
  models.push(model);
});
models.forEach(model => {
  if(model.associate) {
    model.associate(sequelize.models)
  }
})
models = null;

module.exports = sequelize;