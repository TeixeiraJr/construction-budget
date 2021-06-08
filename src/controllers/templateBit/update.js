const { validateErrorBody } = require('../../presenters/handle')
const { updateTemplateBit } = require('../../database/repository/templateBit')
const { validateBodyCreate, validateTemplateParams, validateExistentTemplateBitById } = require('./case')

exports.path = '/template-bit/:id'
exports.method = 'PUT'
exports.middleware = [validateBodyCreate, validateErrorBody, validateTemplateParams, validateErrorBody, validateExistentTemplateBitById]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    await updateTemplateBit(req.params.id, { ...req.body, UserId: req.user.id })
    return res.status(200).json({ data: 'Template bit atualizado com sucesso.' })
  } catch (error) {
    next(error)
  }
}
