const { validateErrorBody } = require('../../presenters/handle')
const { createUser } = require('../../database/repository/user')
const { validateBodyCreate, validateExistentAccount } = require('./case')
const { generateToken } = require('../../presenters/jwt')
const { generatePassword } = require('../../presenters/password')

exports.path = '/user'
exports.method = 'POST'
exports.middleware = [validateBodyCreate, validateErrorBody, validateExistentAccount]
exports.authenticate = false

exports.handler = async (req, res, next) => {
  try {
    const user = await createUser({ ...req.body, password: generatePassword(req.body.password) })
    delete user.dataValues.password
    return res.status(201).json({ data: { token: generateToken(user.dataValues), user: user.dataValues } })
  } catch (error) {
    next(error)
  }
}
