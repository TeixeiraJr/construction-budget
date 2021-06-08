const { create, findOne, update } = require('../index')

exports.createAccessPermission = ({ UserId, ModuleId, active }) => {
  return create('AccessPermission', { UserId, ModuleId, active })
}

exports.findOneAccessPermissionByUserAndModule = ({ UserId, ModuleId }) => {
  return findOne('AccessPermission', { where: { UserId, ModuleId } })
}

exports.updateAccessPermission = ({ UserId, permissions }) => {
  return update('AccessPermission', { where: { UserId } }, { permissions: [...new Set(permissions)] })
}
