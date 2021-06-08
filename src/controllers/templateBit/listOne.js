const { validateErrorBody } = require('../../presenters/handle')
const { findTemplateBitById } = require('../../database/repository/templateBit')
const { validateTemplateParams, validateExistentTemplateBitById } = require('./case')

exports.path = '/template-bit/:id'
exports.method = 'GET'
exports.middleware = [validateTemplateParams, validateErrorBody, validateExistentTemplateBitById]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    const templateBit = await findTemplateBitById(req.params.id)
    return res.status(200).json(templateBit)
  } catch (error) {
    next(error)
  }
}
