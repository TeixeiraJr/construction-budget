const { body, param } = require('express-validator')
const { findOneModuleById, findOneModuleByLink } = require('../../database/repository/module')
const { findOneStudentUserById, findOneUserById } = require('../../database/repository/user')
const { modulePermissions } = require('../../presenters/constants')

const validatePermissions = (value) => {
  const permissions = [...new Set(value)]
  return permissions.every(elem => modulePermissions.includes(elem))
}

exports.validateBodyModule = [
  body('name').isString().notEmpty(),
  body('status').isString()
]

exports.validateBodyModulePermission = [
  body('UserId').isUUID().notEmpty(),
  body('permissions').isArray().custom(validatePermissions)
]

exports.validateParamsModulePermission = [
  param('moduleId').isUUID().notEmpty()
]

exports.validateParamsModule = [
  param('id').isUUID().notEmpty()
]

exports.validateParamsLink = [
  param('link').isString().notEmpty()
]

exports.validateExistentModuleById = async (req, res, next) => {
  const id = req.params.id || req.params.moduleId
  const module = await findOneModuleById({ id })
  if (!module) return res.status(400).json({ errors: [{ title: 'Error', message: 'O módulo não existe.' }] })
  return next()
}

exports.validateExistentLink = async (req, res, next) => {
  const { link } = req.params
  const module = await findOneModuleByLink({ link })
  if (!module) return res.status(400).json({ errors: [{ title: 'Error', message: 'O link não existe.' }] })
  return next()
}

exports.validateStudentUser = async (req, res, next) => {
  const userId = req.user.id
  const studentUser = await findOneStudentUserById({ id: userId })
  if (!studentUser) return res.status(400).json({ errors: [{ title: 'Error', message: 'O usuário não é estudante.' }] })
  return next()
}

exports.validateUserPermission = async (req, res, next) => {
  const userId = req.user.id
  const studentUser = await findOneStudentUserById({ id: userId })
  if (studentUser) return res.status(400).json({ errors: [{ title: 'Error', message: 'O usuário não possui permissão.' }] })
  return next()
}

exports.validateExistentUser = async (req, res, next) => {
  const userId = req.body.UserId
  const user = await findOneUserById({ id: userId })
  if (!user) return res.status(400).json({ errors: [{ title: 'Error', message: 'O usuário não existe.' }] })
  return next()
}
