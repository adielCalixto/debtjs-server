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
      'pessoas', {
        pessoa_id: {
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
          allowNull: true
        },
        cpf: {
          type: Sequelize.STRING(11),
          allowNull: false
        },
        telefone: {
          type: Sequelize.STRING(11),
          allowNull: true
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
    return queryInterface.dropTable('pessoas');
  }
};
