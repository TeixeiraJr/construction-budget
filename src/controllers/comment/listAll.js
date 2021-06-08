const { validateErrorBody } = require('../../presenters/handle')
const { findAllPaginateByBit } = require('../../database/repository/comment')
const { validateParamsUserId, validateExistentBitById } = require('../bit/case')

exports.path = '/comment/bit/:id'
exports.method = 'GET'
exports.middleware = [validateParamsUserId, validateErrorBody, validateExistentBitById]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    const classes = await findAllPaginateByBit({
      page: req.query.page || 1,
      BitId: req.params.id
    })
    return res.status(200).json(classes)
  } catch (error) {
    next(error)
  }
}
