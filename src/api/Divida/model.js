const { Model, DataTypes } = require("sequelize")

class Divida extends Model {
    static init(sequelize) {
        super.init({
            divida_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
              },
              valor: {
                type: DataTypes.INTEGER,
                allowNull: false
              },
              status: {
                type: DataTypes.ENUM('valida', 'pendente', 'zerada'),
                allowNull: false,
                defaultValue: 'valida'
              },
        }, {
            sequelize,
            modelName: 'Divida'
        })
    }

    static associate(models) {
      this.belongsTo(models.Usuario, { foreignKey: 'usuario_id' })
      this.belongsTo(models.Pessoa, { foreignKey: 'pessoa_id' })
    }
}

module.exports = Divida;