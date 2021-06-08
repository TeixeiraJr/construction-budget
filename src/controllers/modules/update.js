const { validateErrorBody } = require('../../presenters/handle')
const { updateModule } = require('../../database/repository/module')
const { validateParamsModule, validateBodyModule, validateExistentModuleById } = require('./case')

exports.path = '/module/:id'
exports.method = 'PUT'
exports.middleware = [validateParamsModule, validateBodyModule, validateErrorBody, validateExistentModuleById]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    await updateModule(req.body, { id: req.params.id })
    return res.status(200).json({ data: 'O módulo foi alterado com sucesso.' })
  } catch (error) {
    next(error)
  }
}
