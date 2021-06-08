
module.exports = (sequelize, DataType) => {
  const BitsRelation = sequelize.define('BitsRelations', {

    FirstBitId: {
      type: DataType.UUID,
      allowNull: false
    },

    SecondBitId: {
      type: DataType.UUID,
      allowNull: true
    },

    side: {
      type: DataType.ENUM(['0', '1', '2', '3', '4', '5']),
      allowNull: true
    }
  })

  BitsRelation.associate = (models) => {
    BitsRelation.belongsTo(models.Bits, {
      foreignKey: 'FirstBitId',
      as: 'FirstBit'
    })
  }

  return BitsRelation
}
