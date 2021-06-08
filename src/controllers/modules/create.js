const { validateErrorBody } = require('../../presenters/handle')
const { createModule } = require('../../database/repository/module')
const { validateBodyModule } = require('./case')

exports.path = '/module'
exports.method = 'POST'
exports.middleware = [validateBodyModule, validateErrorBody]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    delete req.body.link
    await createModule(req.body)
    return res.status(201).json({ data: 'O módulo foi cadastrado com sucesso.' })
  } catch (error) {
    next(error)
  }
}
