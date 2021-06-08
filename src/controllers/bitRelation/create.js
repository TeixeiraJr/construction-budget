const { validateErrorBody } = require('../../presenters/handle')
const { createBitRelation } = require('../../database/repository/bitRelation')
const {
  validateBitRelationCreate, validateExistentFirstBit, validateExistentSecondBit,
  validateEqualBitRelation, validateExistentBitRelation, validateBitRelationSide
} = require('./case')

exports.path = '/bit/relation'
exports.method = 'POST'
exports.middleware = [
  validateBitRelationCreate, validateErrorBody, validateExistentFirstBit,
  validateExistentSecondBit, validateEqualBitRelation,
  validateExistentBitRelation, validateBitRelationSide
]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    if (!req.body.SecondBitId) req.body.SecondBitId = null
    await createBitRelation(req.body)
    return res.status(201).json()
  } catch (error) {
    next(error)
  }
}
