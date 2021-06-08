'use strict'

const { QueryTypes } = require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.sequelize.query('SELECT * FROM "Users"', { type: QueryTypes.SELECT })
    const classes = await queryInterface.sequelize.query('SELECT * FROM "Classes" WHERE name=\'Aula A10\'', { type: QueryTypes.SELECT })
    await queryInterface.bulkInsert('Bits', [
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        name: 'Bit 1',
        status: 'active',
        type: 'activity',
        contents: JSON.stringify({}),
        integration: null,
        UserId: users[0].id,
        ClassId: classes[0].id,
        axisX: '12',
        axisY: '13',
        axisD: '14',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        name: 'Bit 2',
        status: 'active',
        type: 'activity',
        contents: JSON.stringify({}),
        integration: null,
        UserId: users[0].id,
        ClassId: classes[0].id,
        axisX: '32',
        axisY: '33',
        axisD: '34',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Bits', null, {})
  }
}
