
module.exports = (sequelize, DataType) => {
  const userAddresses = sequelize.define('userAddresses', {

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

  userAddresses.associate = (models) => {
    userAddresses.belongsTo(models.User)
  }

  return userAddresses
}
