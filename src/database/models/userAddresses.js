
module.exports = (sequelize, DataType) => {
  const UserBitInformation = sequelize.define('UserBitInformation', {

    UserId: {
      type: DataType.UUID,
      allowNull: true
    },

    city: {
      type: DataType.STRING,
      allowNull: false
    },

    postalCode: {
      type: DataType.NUMBER(8),
      allowNull: false
    }
  })

  UserBitInformation.associate = (models) => {
    UserBitInformation.belongsTo(models.User)
  }

  return UserBitInformation
}
