
module.exports = (sequelize, DataType) => {
  const UserBitInformation = sequelize.define('UserBitInformation', {

    UserId: {
      type: DataType.UUID,
      allowNull: true
    },

    BitId: {
      type: DataType.UUID,
      allowNull: false
    },

    statusAction: {
      type: DataType.ENUM(['interacted', 'no_interacted']),
      allowNull: false
    }
  })

  UserBitInformation.associate = (models) => {
    UserBitInformation.belongsTo(models.User)
    UserBitInformation.belongsTo(models.Bits)
  }

  return UserBitInformation
}
