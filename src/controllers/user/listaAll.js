const { Op } = require('sequelize')
const { findAllPaginateUser } = require('../../database/repository/user')
const { isAdmin } = require('../../presenters/permissions')

exports.path = '/user'
exports.method = 'GET'
exports.middleware = [isAdmin]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    const { name } = req.query
    let query = {}
    if (name) query = { name: { [Op.iLike]: `%${name}%` } }
    const users = await findAllPaginateUser({ query, page: req.query.page || 1 })
    return res.status(200).json(users)
  } catch (error) {
    next(error)
  }
}
