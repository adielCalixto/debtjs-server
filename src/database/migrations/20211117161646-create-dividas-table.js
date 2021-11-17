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
      'dividas', {
        divida_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        valor: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        usuario_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'usuarios',
            key: 'usuario_id'
          },
          onUpdate: 'cascade',
          onDelete: 'no action'
        },
        pessoa_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'pessoas',
            key: 'pessoa_id'
          },
          onUpdate: 'cascade',
          onDelete: 'no action'
        },
        status: {
          type: Sequelize.ENUM('valida', 'pendente', 'zerada'),
          allowNull: false,
          defaultValue: 'valida'
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
    return queryInterface.dropTable('dividas');
  }
};
