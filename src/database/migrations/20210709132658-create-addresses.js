'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    await queryInterface.createTable('UserAddresses', {

      userId: {
        allowNull: false,
        type: Sequelize.UUID
      },

      city: {
        type: Sequelize.STRING,
        allowNull: false
      },

      postalCode: {
        type: Sequelize.INTEGER(8),
        allowNull: true
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserAddresses')
  }
}
