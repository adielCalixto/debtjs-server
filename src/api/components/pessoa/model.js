const { Model, DataTypes } = require("sequelize")

class Pessoa extends Model {
    static init(sequelize) {
        super.init({
            pessoa_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
              },
              nome: {
                type: DataTypes.STRING(100),
                allowNull: false
              },
              email: {
                type: DataTypes.STRING(200),
                allowNull: true
              },
              cpf: {
                type: DataTypes.STRING(11),
                allowNull: false
              },
              telefone: {
                type: DataTypes.STRING(11),
                allowNull: true
              },
        }, {
            sequelize,
            modelName: 'Pessoa'
        })
    }

    static associate(models) {
      this.hasMany(models.Divida, { foreignKey: 'pessoa_id', as: 'dividas' })
    }
}

module.exports = Pessoa;