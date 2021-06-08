const { validateErrorBody } = require('../../presenters/handle')
const { removeTemplateBitById } = require('../../database/repository/templateBit')
const { validateTemplateParams, validateExistentTemplateBitById } = require('./case')

exports.path = '/template-bit/:id'
exports.method = 'DELETE'
exports.middleware = [validateTemplateParams, validateErrorBody, validateExistentTemplateBitById]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    await removeTemplateBitById(req.params.id)
    return res.status(200).json()
  } catch (error) {
    next(error)
  }
}
