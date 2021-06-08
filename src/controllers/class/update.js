const { validateErrorBody } = require('../../presenters/handle')
const { updateClass } = require('../../database/repository/class')
const { validateBodyClass, validateExistentClassById, validateParamsClassId } = require('./case')

exports.path = '/class/:id'
exports.method = 'PUT'
exports.middleware = [validateBodyClass, validateParamsClassId, validateErrorBody, validateExistentClassById]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    await updateClass(req.body, { id: req.params.id })
    return res.status(201).json({ data: 'Aula atualizada com sucesso.' })
  } catch (error) {
    next(error)
  }
}
