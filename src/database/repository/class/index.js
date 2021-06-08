const { create, update, remove, findOne, findAllPaginate, models } = require('../index')

exports.createClass = (module) => {
  return create('Class', module)
}

exports.updateClass = (data, { id }) => {
  return update('Class', { where: { id } }, { ...data })
}

exports.findAllPaginateByModule = ({ page, ModuleId }) => {
  return findAllPaginate('Class', { where: { ModuleId } }, page)
}

exports.findOneClassById = ({ id }) => {
  return findOne('Class', { where: { id }, include: { model: models.Bits } })
}

exports.removeClass = ({ id }) => {
  return remove('Class', { where: { id } })
}
