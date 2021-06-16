const { body, param } = require('express-validator')
const { findOneBitById, findOneBitUserRelationById } = require('../../database/repository/bit')
const { findOneUserBitInformation } = require('../../database/repository/userBitInformation')
const { findTemplateBitById } = require('../../database/repository/templateBit')
const { findOneClassById } = require('../../database/repository/class')

exports.validateBodyCreate = [
  body('name').trim().notEmpty(),
  body('type').trim().isString().isIn(['activity', 'contents', 'comment']),
  body('ClassId').isUUID(4).notEmpty(),
  body('axisX').notEmpty(),
  body('axisY').notEmpty(),
  body('axisD').notEmpty()
]

exports.validateBodyUpdate = [
  body('name').trim().notEmpty(),
  body('type').trim().isString().isIn(['activity', 'contents', 'comment']),
  body('axisX').notEmpty(),
  body('axisY').notEmpty(),
  body('axisD').notEmpty()
]

exports.validateBodyDuplicateBit = [
  body('TemplateBitId').isUUID(4).notEmpty(),
  body('ClassId').isUUID(4).notEmpty(),
  body('axisX').notEmpty(),
  body('axisY').notEmpty(),
  body('axisD').notEmpty()
]

exports.validateParamsUserId = [
  param('id').isUUID(4).notEmpty()
]

exports.validateBodyBitId = [
  body('BitId').isUUID(4).notEmpty()
]

exports.validateParamsClassId = [
  param('ClassId').isUUID(4).notEmpty()
]

exports.validateIsStudent = async (req, res, next) => {
  if (req.user.type === 'user') {
    return res.status(400).json({
      errors: [{ title: 'Error', message: 'Você não tem permissão para está ação!' }]
    })
  }
  return next()
}

exports.validateExistentClassById = async (req, res, next) => {
  const classById = await findOneClassById({ id: req.body.ClassId || req.params.ClassId })
  if (!classById) {
    return res.status(400).json({
      errors: [{
        title: 'Error', message: 'Aula não encontrada.'
      }]
    })
  }
  return next()
}

exports.validateExistentTemplateBitById = async (req, res, next) => {
  const templateBit = await findTemplateBitById(req.body.TemplateBitId)
  if (!templateBit) return res.status(400).json({ errors: [{ title: 'Error', message: 'Template bit não encontrado.' }] })
  return next()
}

exports.validateExistentBitById = async (req, res, next) => {
  const bit = await findOneBitById({ id: req.params.id })
  if (!bit) return res.status(400).json({ errors: [{ title: 'Error', message: 'Bit não encontrado.' }] })
  return next()
}

exports.validateRelationBitWithUser = async (req, res, next) => {
  const bitUser = await findOneBitUserRelationById({ id: req.body.BitId, UserId: req.user.id })
  if (!bitUser) return res.status(400).json({ errors: [{ title: 'Error', message: 'Bit não encontrado.' }] })
  return next()
}

exports.validateExistentUserBit = async (req, res, next) => {
  const bitUser = await findOneUserBitInformation({ UserId: req.user.id, BitId: req.body.BitId })
  if (bitUser) return res.status(400).json({ errors: [{ title: 'Error', message: 'Já existe uma relação de bit com usuário.' }] })
  return next()
}
