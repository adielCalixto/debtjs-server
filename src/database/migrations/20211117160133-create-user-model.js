'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable(
      'usuarios', {
        usuario_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nome: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        email: {
          type: Sequelize.STRING(200),
          allowNull: false
        },
        password: {
          type: Sequelize.STRING(40),
          allowNull: false
        },
        role: {
          type: Sequelize.ENUM('admin', 'gestor', 'usuario'),
          allowNull: false,
          defaultValue: 'usuario'
        },
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('usuarios');
  }
};
