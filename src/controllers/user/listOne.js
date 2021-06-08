const { findOneUserById } = require('../../database/repository/user')
const { validateErrorBody } = require('../../presenters/handle')
const { validateParamsUserId, validateExistentUserById } = require('./case')

exports.path = '/user/:id'
exports.method = 'GET'
exports.middleware = [validateParamsUserId, validateErrorBody, validateExistentUserById]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    const user = await findOneUserById({ id: req.params.id })
    return res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}
