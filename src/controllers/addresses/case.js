const { body, param } = require('express-validator')
const { findTemplateBitById } = require('../../database/repository/templateBit')

exports.validateBodyCreate = [
  body('name').trim().notEmpty(),
  body('type').trim().isString().isIn(['activity', 'contents', 'comment']),
  body('integration').optional(),
  body('contents').optional()
]

exports.validateTemplateParams = [
  param('id').notEmpty().isUUID(4)
]

exports.validateExistentTemplateBitById = async (req, res, next) => {
  const templateBit = await findTemplateBitById(req.params.id)
  if (!templateBit) return res.status(400).json({ errors: [{ title: 'Error', message: 'Template bit não encontrado.' }] })
  return next()
}
