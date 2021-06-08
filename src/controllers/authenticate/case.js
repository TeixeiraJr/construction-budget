
const { findOneUserEmail, findOneUserForgotPassword, findOneUserEmailSocialAccount, findOneUserEmailDefaultAccount, findOneUserEmailGoogle, findOneUserEmailFacebook } = require('../../database/repository/user')

const { body } = require('express-validator')

exports.validateBodyAuthenticate = [
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
]

exports.validateBodyAuthenticateSocialLogin = [
  body('_profile.email').isEmail().notEmpty(),
  body('_profile.name').isString().notEmpty(),
  body('_profile.profilePicURL').isString().notEmpty(),
  body('_token.accessToken').isString().notEmpty()
]

exports.validateBodyReset = [
  body('email').isEmail()
]

exports.validateBodyDefinePassword = [
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
]

exports.validateBodyNewPassword = [
  body('password_one').isLength({ min: 6 }),
  body('password_two').isLength({ min: 6 }).custom((value, { req }) => {
    if (value !== req.body.password_one) throw new Error('As senhas não são iguais.')
    else return true
  })
]

exports.validateUserExist = async (req, res, next) => {
  const { email } = req.body
  const validate = await findOneUserEmail({ email })
  if (!validate) return res.status(400).json({ errors: [{ title: 'Error', message: 'Usuário não encontrado.' }] })
  return next()
}

exports.validateExistentSocialAccount = async (req, res, next) => {
  const email = req.body.email
  const validate = await findOneUserEmailSocialAccount({ email })
  if (validate) return res.status(400).json({ errors: [{ title: 'Error', message: 'Login inválido.' }] })
  return next()
}

exports.validateExistentDefaultAccount = async (req, res, next) => {
  const email = req.body._profile.email
  const validate = await findOneUserEmailDefaultAccount({ email })
  if (validate) return res.status(400).json({ errors: [{ title: 'Error', message: 'Login inválido.' }] })
  return next()
}

exports.validateExistentEmailSocialLoginFacebook = async (req, res, next) => {
  const email = req.body._profile.email
  const validate = await findOneUserEmailFacebook({ email })
  if (validate) return res.status(400).json({ errors: [{ title: 'Error', message: 'Esse email já existe.' }] })
  return next()
}

exports.validateExistentEmailSocialLoginGoogle = async (req, res, next) => {
  const email = req.body._profile.email
  const validate = await findOneUserEmailGoogle({ email })
  if (validate) return res.status(400).json({ errors: [{ title: 'Error', message: 'Esse email já existe.' }] })
  return next()
}

exports.validateFoundedUser = async (req, res, next) => {
  const { forgot } = req.params
  const validate = await findOneUserForgotPassword({ forgot })
  if (!validate) return res.status(400).json({ errors: [{ title: 'Error', message: 'O código informado não é valido.' }] })
  return next()
}
