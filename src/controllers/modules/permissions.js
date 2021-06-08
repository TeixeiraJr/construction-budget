const { validateErrorBody } = require('../../presenters/handle')
const { updateAccessPermission } = require('../../database/repository/accessPermission')
const {
  validateBodyModulePermission, validateParamsModulePermission, validateExistentModuleById,
  validateExistentUser, validateUserPermission
} = require('./case')

exports.path = '/module/:moduleId/permissions'
exports.method = 'PATCH'
exports.middleware = [
  validateBodyModulePermission,
  validateParamsModulePermission,
  validateErrorBody,
  validateUserPermission,
  validateExistentModuleById,
  validateExistentUser
]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    await updateAccessPermission({ ...req.body })
    return res.status(200).json()
  } catch (error) {
    next(error)
  }
}
