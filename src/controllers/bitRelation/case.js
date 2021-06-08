const { body, param } = require('express-validator')
const { findOneBitById } = require('../../database/repository/bit')
const {
  findOneExistentBitRelation, findOneExistentBitRelationOnSide, findOneExistentBitRelationById
} = require('../../database/repository/bitRelation')

exports.validateBitRelationCreate = [
  body('FirstBitId').isUUID(4).notEmpty(),
  body('SecondBitId').isUUID(4).optional({ checkFalsy: true }),
  body('side').isInt().isIn([0, 1, 2, 3, 4, 5]).optional({ checkFalsy: true }),
  body('order').isInt().optional({ checkFalsy: true }),
  body('married').isBoolean().optional({ checkFalsy: true })
]

exports.validateParamsBitRelation = [
  param('id').isUUID(4).notEmpty()
]

exports.validateExistentBitRelationById = async (req, res, next) => {
  const bitRelation = await findOneExistentBitRelationById(req.params.id)
  if (!bitRelation) return res.status(400).json({ errors: [{ title: 'Error', message: 'Bit relation não encontrado.' }] })
  return next()
}

exports.validateExistentFirstBit = async (req, res, next) => {
  const bit = await findOneBitById({ id: req.body.FirstBitId })
  if (!bit) return res.status(400).json({ errors: [{ title: 'Error', message: 'Bit não encontrado.' }] })
  return next()
}

exports.validateExistentSecondBit = async (req, res, next) => {
  if (req.body.FirstBitId && !req.body.SecondBitId) return next()
  const bit = await findOneBitById({ id: req.body.SecondBitId })
  if (!bit) return res.status(400).json({ errors: [{ title: 'Error', message: 'Bit não encontrado.' }] })
  return next()
}

exports.validateEqualBitRelation = async (req, res, next) => {
  if (req.body.FirstBitId === req.body.SecondBitId) {
    return res.status(400).json({ errors: [{ title: 'Error', message: 'Um bit não pode ter relação com ele mesmo.' }] })
  }
  return next()
}

exports.validateExistentBitRelation = async (req, res, next) => {
  if (req.body.FirstBitId && !req.body.SecondBitId) return next()
  const bitRelation = await findOneExistentBitRelation(req.body)
  if (bitRelation) return res.status(400).json({ errors: [{ title: 'Error', message: 'Esses bits já estão associados.' }] })
  return next()
}

exports.validateBitRelationSide = async (req, res, next) => {
  if (req.body.FirstBitId && !req.body.SecondBitId) return next()
  const bitRelationSide = await findOneExistentBitRelationOnSide(req.body)
  if (bitRelationSide) return res.status(400).json({ errors: [{ title: 'Error', message: 'Esse lado do bit já está associado.' }] })
  return next()
}
