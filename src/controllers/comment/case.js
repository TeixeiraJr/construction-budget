const { body, param } = require('express-validator')
const { findOneBitById } = require('../../database/repository/bit')
const { findOneCommentById } = require('../../database/repository/comment')

exports.validateBodyCreate = [
  body('comment').notEmpty().trim(),
  body('BitId').isUUID(4).notEmpty()
]

exports.validateBodyUpdate = [
  body('comment').notEmpty().trim()
]

exports.validateParamsCommentId = [
  param('id').isUUID().notEmpty()
]

exports.validateExistentBitById = async (req, res, next) => {
  const bit = await findOneBitById({ id: req.body.BitId })
  if (!bit) return res.status(400).json({ errors: [{ title: 'Error', message: 'Bit não encontrado.' }] })
  if (bit.type !== 'comment') return res.status(400).json({ errors: [{ title: 'Error', message: 'Bit não é do tipo comentário.' }] })
  return next()
}

exports.validateExistentParamBitById = async (req, res, next) => {
  const bit = await findOneBitById({ id: req.params.id })
  if (!bit) return res.status(400).json({ errors: [{ title: 'Error', message: 'Bit não encontrado.' }] })
  return next()
}

exports.validateExistentCommentById = async (req, res, next) => {
  const bit = await findOneCommentById({ id: req.params.id })
  if (!bit) return res.status(400).json({ errors: [{ title: 'Error', message: 'Comentário não encontrado.' }] })
  return next()
}
