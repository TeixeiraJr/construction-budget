'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    await queryInterface.createTable('Users', {

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

      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },

      shopName: {
        type: Sequelize.STRING,
        allowNull: false
      },

      tokenGoogle: {
        type: Sequelize.TEXT,
        unique: true,
        allowNull: true
      },

      tokenFacebook: {
        type: Sequelize.TEXT,
        unique: true,
        allowNull: true
      },

      forgot: {
        type: Sequelize.TEXT,
        allowNull: true
      },

      password: {
        type: Sequelize.STRING,
        allowNull: true
      },

      cpfCnpj: {
        type: Sequelize.STRING,
        allowNull: true
      },

      phone: {
        type: Sequelize.STRING,
        allowNull: true
      },

      address: {
        type: Sequelize.STRING,
        allowNull: true
      },

      addressNumber: {
        type: Sequelize.STRING,
        allowNull: true
      },

      postalCode: {
        type: Sequelize.STRING,
        allowNull: true
      },

      logo: {
        type: Sequelize.TEXT,
        allowNull: true
      },

      type: {
        type: Sequelize.ENUM(['admin', 'support', 'user']),
        allowNull: false
      },

      birthday: {
        type: Sequelize.DATEONLY,
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
    await queryInterface.dropTable('Users')
  }
}
