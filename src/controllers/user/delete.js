const { deleteUserById } = require('../../database/repository/user')
const { isAdmin } = require('../../presenters/permissions')
const { validateErrorBody } = require('../../presenters/handle')
const { validateParamsUserId, validateExistentUserById } = require('./case')

exports.path = '/user/:id'
exports.method = 'DELETE'
exports.middleware = [isAdmin, validateParamsUserId, validateErrorBody, validateExistentUserById]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    await deleteUserById({ id: req.params.id })
    return res.status(200).json({ data: 'Usuário deletado com sucesso' })
  } catch (error) {
    next(error)
  }
}
