const { validateErrorBody } = require('../../presenters/handle')
const { removeBitRelationById } = require('../../database/repository/bitRelation')
const { validateParamsBitRelation, validateExistentBitRelationById } = require('./case')

exports.path = '/bit/relation/:id'
exports.method = 'DELETE'
exports.middleware = [validateParamsBitRelation, validateExistentBitRelationById, validateErrorBody]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    await removeBitRelationById(req.params.id)
    return res.status(200).json({ data: 'Bit relation deletado com sucesso.' })
  } catch (error) {
    next(error)
  }
}
