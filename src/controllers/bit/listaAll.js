const { findAllBitsByClass } = require('../../database/repository/bit')
const { validateErrorBody } = require('../../presenters/handle')
const { validateParamsClassId, validateExistentClassById } = require('./case')

exports.path = '/bit/class/:ClassId'
exports.method = 'GET'
exports.middleware = [validateParamsClassId, validateErrorBody, validateExistentClassById]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    const bits = await findAllBitsByClass({ query: { ClassId: req.params.ClassId }, page: req.params.page || 1 })
    return res.status(200).json(bits)
  } catch (error) {
    next(error)
  }
}
