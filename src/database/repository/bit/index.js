const { create, findAll, update, findOne, remove, models } = require('../index')

exports.createBit = (bit) => {
  return create('Bits', bit)
}

exports.findAllBitsByClass = async ({ query = {}, page = 1 }) => {
  return findAll('Bits', {
    order: [['updatedAt', 'DESC']],
    where: { ...query },
    include: [
      {
        attributes: ['statusAction'],
        model: models.UserBitInformation
      },
      {
        model: models.BitsRelations
      },
      {
        model: models.User
      }
    ]
  },
  page)
}

exports.findOneBitUserRelationById = ({ id, UserId }) => {
  return findOne('Bits', { where: { id, UserId } })
}

exports.findOneBitById = ({ id }) => {
  return findOne('Bits', {
    where: { id },
    include: [
      {
        attributes: ['statusAction'],
        model: models.UserBitInformation
      },
      {
        model: models.BitsRelations
      },
      {
        model: models.User
      }
    ]
  })
}

exports.updateBitById = (id, { name, type, contents, axisX, axisY, axisD }) => {
  return update('Bits', { where: { id } }, { name, type, contents, axisX, axisY, axisD })
}

exports.deleteBitById = (id) => {
  return remove('Bits', { where: { id } })
}
