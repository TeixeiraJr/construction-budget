const { validateErrorBody } = require('../../presenters/handle')
const { findOneModuleById } = require('../../database/repository/module')
const { validateParamsModule, validateExistentModuleById } = require('./case')

exports.path = '/module/:id'
exports.method = 'GET'
exports.middleware = [validateParamsModule, validateErrorBody, validateExistentModuleById]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    const module = await findOneModuleById({ id: req.params.id })
    return res.status(200).json(module)
  } catch (error) {
    return next(error)
  }
}
