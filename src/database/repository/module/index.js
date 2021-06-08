const { Op } = require('sequelize')
const { findOne, update, remove, create, findAllPaginate, models } = require('../index')

exports.createModule = (module) => {
  return create('Module', module)
}

exports.findOneModuleById = ({ id }) => {
  return findOne('Module', {
    where: { id },
    include: [
      {
        model: models.AccessPermission,
        include: [
          {
            model: models.User,
            attributes: ['id', 'email', 'name']
          }
        ]
      },
      {
        model: models.Class
      }
    ]
  })
}

exports.findOneModuleWhereLinkExists = ({ id }) => {
  return findOne('Module', { where: { id, [Op.not]: { link: null } } })
}

exports.findOneModuleByLink = ({ link }) => {
  return findOne('Module', {
    where: { link },
    include: [
      {
        model: models.Class
      }
    ]
  })
}

exports.findAllPaginate = ({ page }) => {
  return findAllPaginate('Module', {}, page)
}

exports.updateModule = (data, { id }) => {
  return update('Module', { where: { id } }, { ...data })
}

exports.removeModule = ({ id }) => {
  return remove('Module', { where: { id } })
}
