const { validateErrorBody } = require('../../presenters/handle')
const { createComment } = require('../../database/repository/comment')
const { validateBodyCreate, validateExistentBitById } = require('./case')

exports.path = '/comment'
exports.method = 'POST'
exports.middleware = [
  validateBodyCreate,
  validateErrorBody,
  validateExistentBitById
]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    const comment = await createComment({ ...req.body, UserId: req.user.id })
    return res.status(201).json({ data: { comment } })
  } catch (error) {
    next(error)
  }
}
