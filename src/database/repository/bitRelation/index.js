const { Op } = require('sequelize')
const { create, findOne, findAll, remove, models } = require('../index')

exports.createBitRelation = (relation) => {
  return create('BitsRelations', relation)
}

exports.findOneExistentBitRelationById = (id) => {
  return findOne('BitsRelations', {
    where: { id }
  })
}

exports.findOneExistentBitRelationOnSide = ({ FirstBitId, side }) => {
  return findOne('BitsRelations', {
    where: { FirstBitId, side: side.toString() }
  })
}

exports.findOneExistentBitRelation = ({ FirstBitId, SecondBitId }) => {
  return findOne('BitsRelations', {
    where: { FirstBitId, SecondBitId }
  })
}

exports.findAllOrderBitRelation = ({ ClassId }) => {
  return findAll('BitsRelations', { where: { ClassId } })
}

exports.findOneFirstBitRelation = ({ ClassId }) => {
  return findOne('BitsRelations', {
    where: {
      ClassId,
      FirstBitId: { [Op.not]: null },
      [Op.and]: [
        { SecondBitId: { [Op.eq]: null } },
        { side: { [Op.eq]: null } },
        { married: { [Op.eq]: null } }
      ]
    }
  })
}

exports.findAllBitAssociationByClassId = ({ ClassId }) => {
  return findAll('BitsRelations', {
    order: [['order', 'ASC']],
    where: { ClassId },
    include: [
      {
        model: models.Bits,
        as: 'FirstBit'
      },
      {
        model: models.Bits,
        as: 'SecondBit'
      }
    ]
  })
}

exports.removeBitRelationById = (id) => {
  return remove('BitsRelations', { where: { id } })
}
