const { validateErrorBody } = require('../../presenters/handle')
const { removeModule } = require('../../database/repository/module')
const { validateParamsModule, validateExistentModuleById } = require('./case')

exports.path = '/module/:id'
exports.method = 'DELETE'
exports.middleware = [validateParamsModule, validateErrorBody, validateExistentModuleById]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    await removeModule({ id: req.params.id })
    return res.status(200).json({ data: 'O módulo foi excluído com sucesso.' })
  } catch (error) {
    next(error)
  }
}
