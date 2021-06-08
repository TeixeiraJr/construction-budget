const { create, findOne } = require('../index')

exports.createUserBitInformation = ({ UserId, BitId }) => {
  return create('UserBitInformation', { UserId, BitId, statusAction: 'interacted' })
}

exports.findOneUserBitInformation = ({ UserId, BitId }) => {
  return findOne('UserBitInformation', { where: { UserId, BitId, statusAction: 'interacted' } })
}
