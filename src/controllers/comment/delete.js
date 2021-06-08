const { validateErrorBody } = require('../../presenters/handle')
const { removeComment } = require('../../database/repository/comment')
const {
  validateParamsCommentId,
  validateExistentCommentById
} = require('./case')

exports.path = '/comment/:id'
exports.method = 'DELETE'
exports.middleware = [
  validateParamsCommentId,
  validateErrorBody,
  validateExistentCommentById
]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    await removeComment({ id: req.params.id })
    return res.status(200).json({ data: 'Comentário deletado com sucesso.' })
  } catch (error) {
    next(error)
  }
}
