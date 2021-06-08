const { validateErrorBody } = require('../../presenters/handle')
const { deleteBitById } = require('../../database/repository/bit')
const { validateParamsUserId, validateExistentBitById } = require('./case')

exports.path = '/bit/:id'
exports.method = 'DELETE'
exports.middleware = [validateParamsUserId, validateExistentBitById, validateErrorBody]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    await deleteBitById(req.params.id)
    return res.status(200).json({ data: 'Bit deletado com sucesso.' })
  } catch (error) {
    next(error)
  }
}
