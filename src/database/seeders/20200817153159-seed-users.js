'use strict'

const { generatePassword } = require('../../presenters/password')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        name: 'Admin',
        email: 'admin@gmail.com',
        shopName: "admin shop",
        password: generatePassword('12345678'),
        type: 'admin',
        cpf: "12345678987",
        phone: "81999999876",
        birthday: "1998-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        name: 'support',
        email: 'support@gmail.com',
        shopName: "admin shop",
        password: generatePassword('12345678'),
        type: 'support',
        cpf: "12345678987",
        phone: "81999999876",
        birthday: "1998-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        name: 'user',
        email: 'user@gmail.com',
        shopName: "admin shop",
        password: generatePassword('12345678'),
        type: 'user',
        cpf: "12345678987",
        phone: "81999999876",
        birthday: "1998-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', {})
  }
}
