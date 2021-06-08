'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    await queryInterface.createTable('TemplateBits', {

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

      type: {
        type: Sequelize.ENUM(['activity', 'contents', 'comment']),
        allowNull: false
      },

      contents: {
        type: Sequelize.JSON,
        allowNull: true
      },

      integration: {
        type: Sequelize.JSON,
        allowNull: true
      },

      UserId: {
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id'
        },
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
    await queryInterface.dropTable('TemplateBits')
  }
}
