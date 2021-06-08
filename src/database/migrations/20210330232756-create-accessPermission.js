'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AccessPermissions', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        primaryKey: true,
        type: Sequelize.UUID
      },

      UserId: {
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id'
        },
        allowNull: true
      },

      ModuleId: {
        type: Sequelize.UUID,
        references: {
          model: 'Modules',
          key: 'id'
        },
        allowNull: false
      },

      active: {
        type: Sequelize.BOOLEAN,
        default: false,
        allowNull: false
      },

      permissions: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: ['read'],
        allowNull: false
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
    await queryInterface.dropTable('AccessPermissions')
  }
}
