const { body, param } = require('express-validator')
const { isValidDate, isValidDateLowestCurrent } = require('../../presenters/validations')
const { findOneUserEmail, findOneUserById } = require('../../database/repository/user')

exports.validateBodyCreate = [
  body('name').notEmpty().trim(),
  body('email').isEmail(),
  body('password').isLength({ min: 6 }).trim(),
  body('phone').notEmpty().trim(),
  body('birthday').notEmpty().custom((value) => {
    if (!isValidDate(value) && isValidDateLowestCurrent(value)) throw new Error('Data inválida.')
    return true
  }),
  body('type').default('user')
]

exports.validateBodyUpdate = [
  body('name').notEmpty().trim(),
  body('email').isEmail(),
  body('shopName').notEmpty().trim(),
  body('cpf').notEmpty().trim(),
  body('phone').notEmpty().trim(),
  body('avatar').isString(),
  body('password').optional().isLength({ min: 6 }).trim(),
  body('birthday').notEmpty().custom((value) => {
    if (!isValidDate(value) && isValidDateLowestCurrent(value)) throw new Error('Data inválida.')
    return true
  })
]

exports.validateExistentAccount = async (req, res, next) => {
  const { email } = req.body
  const validate = await findOneUserEmail({ email })
  if (validate) return res.status(400).json({ errors: [{ title: 'Error', message: 'Esse endereço de email já está em uso.' }] })
  return next()
}

exports.validateExistentAccountExcludeUserUpdate = async (req, res, next) => {
  const { email } = req.body
  const validate = await findOneUserEmail({ email })
  if (validate && req.body.email !== validate.email) return res.status(400).json({ errors: [{ title: 'Error', message: 'Esse endereço de email já está em uso.' }] })
  return next()
}

exports.validateParamsUserId = [
  param('id').isUUID(4).notEmpty()
]

exports.validateExistentUserById = async (req, res, next) => {
  const user = await findOneUserById({ id: req.params.id })
  if (!user) return res.status(400).json({ errors: [{ title: 'Error', message: 'Esse usuário não existe.' }] })
  return next()
}
