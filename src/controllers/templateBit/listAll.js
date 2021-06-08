const { findTemplateBitPaginate } = require('../../database/repository/templateBit')

exports.path = '/template-bit'
exports.method = 'GET'
exports.middleware = []
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    const templateBit = await findTemplateBitPaginate(req.query.page || 1)
    return res.status(200).json(templateBit)
  } catch (error) {
    next(error)
  }
}
