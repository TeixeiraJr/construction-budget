const { validateErrorBody } = require('../../presenters/handle')
const { findOneClassById } = require('../../database/repository/class')
const { validateParamsClassId } = require('./case')

exports.path = '/class/:id'
exports.method = 'GET'
exports.middleware = [validateParamsClassId, validateErrorBody]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    const classObj = await findOneClassById({ id: req.params.id })
    return res.status(200).json({ data: classObj })
  } catch (error) {
    next(error)
  }
}
