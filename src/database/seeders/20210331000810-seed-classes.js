'use strict'

const { QueryTypes } = require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const modules = await queryInterface.sequelize.query('SELECT * FROM "Modules"', { type: QueryTypes.SELECT })
    for (let index = 0; index < modules.length; index++) {
      const ModuleId = modules[index].id
      await queryInterface.bulkInsert('Classes', [
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: `Aula A1${index}`,
          dateStart: '2021-06-18 05:00:00',
          dateEnd: '2021-06-18 08:00:00',
          time: 10,
          ModuleId,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: `Aula B1${index}`,
          dateStart: '2021-06-18 05:00:00',
          dateEnd: '2021-06-18 08:00:00',
          time: 10,
          ModuleId,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: `Aula C1${index}`,
          dateStart: '2021-06-18 05:00:00',
          dateEnd: '2021-06-18 08:00:00',
          time: 10,
          ModuleId,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: Sequelize.literal('uuid_generate_v4()'),
          name: `Aula D1${index}`,
          dateStart: '2021-06-18 05:00:00',
          dateEnd: '2021-06-18 08:00:00',
          time: 10,
          ModuleId,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {})
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Classes', {})
  }
}
