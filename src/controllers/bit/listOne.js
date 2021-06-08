const { findOneBitById } = require('../../database/repository/bit')
const { validateErrorBody } = require('../../presenters/handle')
const { validateParamsUserId, validateExistentBitById } = require('./case')

exports.path = '/bit/:id'
exports.method = 'GET'
exports.middleware = [
  validateParamsUserId, validateErrorBody, validateExistentBitById
]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    const bit = await findOneBitById({ id: req.params.id })
    return res.status(200).json({ data: bit })
  } catch (error) {
    next(error)
  }
}
