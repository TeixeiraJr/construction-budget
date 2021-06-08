const { body, param } = require('express-validator')
const { findOneClassById } = require('../../database/repository/class')
const { findOneModuleById } = require('../../database/repository/module')

exports.validateBodyClass = [
  body('name').isString().notEmpty(),
  body('dateStart').isString().notEmpty(),
  body('dateEnd').isString().notEmpty(),
  body('time').isNumeric().notEmpty(),
  body('ModuleId').isUUID().notEmpty()
]

exports.validateParamsModule = [
  param('ModuleId').isUUID().notEmpty()
]

exports.validateParamsClassId = [
  param('id').isUUID().notEmpty()
]

exports.validateExistentClassById = async (req, res, next) => {
  const classById = await findOneClassById({ id: req.params.id })
  if (!classById) {
    return res.status(400).json({
      errors: [{
        title: 'Error', message: 'Aula não encontrada.'
      }]
    })
  }
  return next()
}

exports.validateExistentModule = async (req, res, next) => {
  const id = req.params.ModuleId || req.body.ModuleId
  const module = await findOneModuleById({ id })
  if (!module) return res.status(400).json({ errors: [{ title: 'Error', message: 'O módulo não existe.' }] })
  return next()
}
