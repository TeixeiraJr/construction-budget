const { validateErrorBody } = require('../../presenters/handle')
const { validateBodyBitId, validateRelationBitWithUser, validateExistentUserBit } = require('./case')
const { createUserBitInformation } = require('../../database/repository/userBitInformation')

exports.path = '/bit/interacted'
exports.method = 'POST'
exports.middleware = [validateBodyBitId, validateErrorBody, validateRelationBitWithUser, validateExistentUserBit]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    const { BitId } = req.body
    await createUserBitInformation({ UserId: req.user.id, BitId })
    return res.status(200).json()
  } catch (error) {
    next(error)
  }
}
