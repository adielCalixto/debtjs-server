const { Model, DataTypes } = require("sequelize")

class Usuario extends Model {
    static init(sequelize) {
        super.init(
            {
                usuario_id: {
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
                    allowNull: false
                },
                    password: {
                    type: DataTypes.STRING(40),
                    allowNull: false
                },
                role: {
                    type: DataTypes.ENUM('admin', 'gestor', 'usuario'),
                    allowNull: false,
                    defaultValue: 'usuario'
                },
            }, {
                sequelize,
                modelName: 'Usuario',
            }
        )
    }

    static associate(models) {
        this.hasMany(models.Divida, { foreignKey: 'usuario_id', as: 'dividas' })
    }
}

module.exports = Usuario;