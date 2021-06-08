const { validateErrorBody } = require('../../presenters/handle')
const { createBit } = require('../../database/repository/bit')
const { validateBodyCreate, validateIsStudent, validateExistentClassById } = require('./case')

exports.path = '/bit'
exports.method = 'POST'
exports.middleware = [validateBodyCreate, validateErrorBody, validateExistentClassById, validateIsStudent]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    const bit = await createBit({ ...req.body, UserId: req.user.id })
    return res.status(201).json(bit.id)
  } catch (error) {
    next(error)
  }
}
