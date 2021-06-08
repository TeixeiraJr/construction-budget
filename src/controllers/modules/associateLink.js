const { validateErrorBody } = require('../../presenters/handle')
const { validateParamsLink, validateExistentLink, validateStudentUser } = require('./case')
const { findOneModuleByLink } = require('../../database/repository/module')
const { createAccessPermission, findOneAccessPermissionByUserAndModule } = require('../../database/repository/accessPermission')

exports.path = '/module/:link/associate'
exports.method = 'GET'
exports.middleware = [validateParamsLink, validateErrorBody, validateStudentUser, validateExistentLink]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    const { link } = req.params
    const module = await findOneModuleByLink({ link })
    const accessPermission = await findOneAccessPermissionByUserAndModule({ UserId: req.user.id, ModuleId: module.id })
    if (!accessPermission) await createAccessPermission({ UserId: req.user.id, ModuleId: module.id, active: true })
    return res.status(200).json(module)
  } catch (error) {
    next(error)
  }
}
