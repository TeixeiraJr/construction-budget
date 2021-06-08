const { create, findAllPaginate, update, findOne, remove } = require('../index')

exports.createComment = (comment) => {
  return create('Comment', comment)
}

exports.findAllPaginateByBit = ({ page, BitId }) => {
  return findAllPaginate('Comment', { where: { BitId } }, page)
}

exports.updateComment = (data, { id }) => {
  return update('Comment', { where: { id } }, { ...data })
}

exports.findOneCommentById = ({ id }) => {
  return findOne('Comment', { where: { id } })
}

exports.removeComment = ({ id }) => {
  return remove('Comment', { where: { id } })
}
