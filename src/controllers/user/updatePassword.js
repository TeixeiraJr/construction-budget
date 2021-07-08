const { validateErrorBody } = require('../../presenters/handle')
const { updateUserPasswordById } = require('../../database/repository/user')
const { validateBodyUpdate, validateExistentAccountExcludeUserUpdate, validateParamsUserId, validateExistentUserById } = require('./case')
const { generatePassword } = require('../../presenters/password')

exports.path = '/user/password/:id'
exports.method = 'PUT'
exports.middleware = [validateParamsUserId, validateErrorBody, validateExistentUserById, validateBodyUpdate, validateErrorBody, validateExistentAccountExcludeUserUpdate]
exports.authenticate = false

exports.handler = async (req, res, next) => {
  try {
    if (req.body.password) req.body.password = generatePassword(req.body.password)
    await updateUserPasswordById(req.params.id, { ...req.body })
    return res.status(200).json({ data: 'Senha atualizada com sucesso' })
  } catch (error) {
    next(error)
  }
}
