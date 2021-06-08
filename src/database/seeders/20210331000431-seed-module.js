'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Modules', [
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        name: 'Modulo A1',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        name: 'Modulo A12',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        name: 'Modulo A13',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        name: 'Modulo A14',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        name: 'Modulo A15',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        name: 'Modulo A16',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        name: 'Modulo A17',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        name: 'Modulo A18',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Classes', {})
  }
}
