const Sequelize = require("sequelize")
const config = require("../config/database")

const sequelize = new Sequelize(config);

(async function() {
    try {
        await sequelize.authenticate()
        console.log("it works :)")
    } catch(error) {
        console.log("it doesn't work :(")
        console.log(error)
    }
})()

const Pessoa = require("../models/Pessoa");
const Usuario = require("../models/Usuario");
const Divida = require("../models/Divida");

Pessoa.init(sequelize)
Usuario.init(sequelize)
Divida.init(sequelize)

Pessoa.associate(sequelize.models)
Usuario.associate(sequelize.models)
Divida.associate(sequelize.models)

module.exports = sequelize;