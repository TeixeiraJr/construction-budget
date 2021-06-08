'use strict'

const { generatePassword } = require('../../presenters/password')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        name: 'Admin',
        email: 'admin@admin.com.br',
        type: 'admin',
        password: generatePassword('12345678'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        name: 'Junior',
        email: 'junior4g4@gmail.com',
        type: 'admin',
        password: generatePassword('12345678'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        name: 'Felipe',
        email: 'felipe1181jua@gmail.com',
        type: 'admin',
        password: generatePassword('12345678'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        name: 'Higor',
        email: 'higordiegoti@gmail.com',
        type: 'admin',
        password: generatePassword('12345678'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', {})
  }
}
