const { findAllPaginate } = require('../../database/repository/module')

exports.path = '/module'
exports.method = 'GET'
exports.middleware = []
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    const modules = await findAllPaginate({ page: req.query.page || 1 })
    return res.status(200).json(modules)
  } catch (error) {
    next(error)
  }
}
