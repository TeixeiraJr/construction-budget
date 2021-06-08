const { validateErrorBody } = require('../../presenters/handle')
const { findAllPaginateByModule } = require('../../database/repository/class')
const { validateParamsModule, validateExistentModule } = require('./case')

exports.path = '/class/module/:ModuleId'
exports.method = 'GET'
exports.middleware = [validateParamsModule, validateErrorBody, validateExistentModule]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    const classes = await findAllPaginateByModule({
      page: req.query.page || 1,
      ModuleId: req.params.ModuleId
    })
    return res.status(200).json(classes)
  } catch (error) {
    next(error)
  }
}
