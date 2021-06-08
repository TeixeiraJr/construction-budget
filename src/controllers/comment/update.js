const { validateErrorBody } = require('../../presenters/handle')
const { updateComment } = require('../../database/repository/comment')
const {
  validateBodyUpdate,
  validateParamsCommentId,
  validateExistentCommentById
} = require('./case')

exports.path = '/comment/:id'
exports.method = 'PUT'
exports.middleware = [
  validateBodyUpdate,
  validateParamsCommentId,
  validateErrorBody,
  validateExistentCommentById
]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    await updateComment(req.body, { id: req.params.id })
    return res.status(201).json({ data: 'Comentário atualizada com sucesso.' })
  } catch (error) {
    next(error)
  }
}
