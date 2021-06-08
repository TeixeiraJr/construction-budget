const { validateErrorBody } = require('../../presenters/handle')
const { removeClass } = require('../../database/repository/class')
const { validateExistentClassById, validateParamsClassId } = require('./case')

exports.path = '/class/:id'
exports.method = 'DELETE'
exports.middleware = [validateParamsClassId, validateErrorBody, validateExistentClassById]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    await removeClass({ id: req.params.id })
    return res.status(200).json({ data: 'Aula deletado com sucesso.' })
  } catch (error) {
    next(error)
  }
}
