'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Classes', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        primaryKey: true,
        type: Sequelize.UUID
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      status: {
        type: Sequelize.ENUM(['active', 'inactive']),
        defaultValue: 'active',
        allowNull: false
      },

      dateStart: {
        type: Sequelize.DATE,
        allowNull: true
      },

      dateEnd: {
        type: Sequelize.DATE,
        allowNull: true
      },

      time: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },

      ModuleId: {
        type: Sequelize.UUID,
        references: {
          model: 'Modules',
          key: 'id'
        },
        onDelete: 'cascade',
        allowNull: true
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Classes')
  }
}
