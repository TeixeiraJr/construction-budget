const { validateErrorBody } = require('../../presenters/handle')
const { updateBitById } = require('../../database/repository/bit')
const {
  validateBodyUpdate,
  validateIsStudent,
  validateParamsUserId,
  validateExistentBitById
} = require('./case')

exports.path = '/bit/:id'
exports.method = 'PUT'
exports.middleware = [
  validateBodyUpdate,
  validateErrorBody,
  validateParamsUserId,
  validateIsStudent,
  validateExistentBitById
]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    await updateBitById(req.params.id, req.body)
    return res.status(200).json({ data: 'Bit atualizado com sucesso.' })
  } catch (error) {
    next(error)
  }
}
