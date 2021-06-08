const { validateErrorBody } = require('../../presenters/handle')
const { createClass } = require('../../database/repository/class')
const { validateBodyClass, validateExistentModule } = require('./case')

exports.path = '/class'
exports.method = 'POST'
exports.middleware = [validateBodyClass, validateExistentModule, validateErrorBody]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    await createClass(req.body)
    return res.status(201).json({ data: 'Aula cadastrada com sucesso.' })
  } catch (error) {
    next(error)
  }
}
