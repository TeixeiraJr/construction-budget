const { validateErrorBody } = require('../../presenters/handle')
const { updateUserById } = require('../../database/repository/user')
const { validateBodyUpdate, validateExistentAccountExcludeUserUpdate, validateParamsUserId, validateExistentUserById } = require('./case')
const { generatePassword } = require('../../presenters/password')

exports.path = '/user/:id'
exports.method = 'PUT'
exports.middleware = [validateParamsUserId, validateErrorBody, validateExistentUserById, validateBodyUpdate, validateErrorBody, validateExistentAccountExcludeUserUpdate]
exports.authenticate = false

exports.handler = async (req, res, next) => {
  try {
    if (req.body.password) req.body.password = generatePassword(req.body.password)
    await updateUserById(req.params.id, { ...req.body })
    return res.status(200).json({ data: 'Usuário atualizado com sucesso' })
  } catch (error) {
    next(error)
  }
}
