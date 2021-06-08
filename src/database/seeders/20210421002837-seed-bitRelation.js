'use strict'

const { QueryTypes } = require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bits = await queryInterface.sequelize.query('SELECT * FROM "Bits"', { type: QueryTypes.SELECT })
    await queryInterface.bulkInsert('BitsRelations', [
      {
        FirstBitId: bits[0].id,
        SecondBitId: null,
        side: '0',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        FirstBitId: bits[0].id,
        SecondBitId: bits[1].id,
        side: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('BitsRelations', null, {})
  }
}
