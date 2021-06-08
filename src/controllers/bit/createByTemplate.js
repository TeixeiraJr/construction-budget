const { validateErrorBody } = require('../../presenters/handle')
const { createBit } = require('../../database/repository/bit')
const { validateBodyDuplicateBit, validateExistentClassById, validateExistentTemplateBitById } = require('./case')
const { findTemplateBitById } = require('../../database/repository/templateBit')

exports.path = '/bit/create'
exports.method = 'POST'
exports.middleware = [validateBodyDuplicateBit, validateErrorBody, validateExistentClassById, validateExistentTemplateBitById]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    const { ClassId, axisX, axisY, axisD } = req.body
    const templateBit = await findTemplateBitById(req.body.TemplateBitId)
    delete templateBit.id
    const bit = await createBit({ ...templateBit, ClassId, axisX, axisY, axisD, UserId: req.user.id })
    return res.status(201).json(bit.id)
  } catch (error) {
    next(error)
  }
}
