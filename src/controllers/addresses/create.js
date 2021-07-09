const { validateErrorBody } = require('../../presenters/handle')
const { createTemplateBit } = require('../../database/repository/templateBit')
const { validateBodyCreate } = require('./case')

exports.path = '/template-bit'
exports.method = 'POST'
exports.middleware = [validateBodyCreate, validateErrorBody]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    const created = await createTemplateBit({ ...req.body, UserId: req.user.id })
    return res.status(201).json(created.id)
  } catch (error) {
    next(error)
  }
}
