
module.exports = (sequelize, DataType) => {
  const AccessPermission = sequelize.define('AccessPermission', {

    UserId: {
      type: DataType.UUID,
      allowNull: true
    },

    ModuleId: {
      type: DataType.UUID,
      allowNull: false
    },

    active: {
      type: DataType.BOOLEAN,
      default: false,
      allowNull: false
    },

    permissions: {
      type: DataType.ARRAY(DataType.STRING),
      defaultValue: ['read'],
      allowNull: false
    }
  })

  AccessPermission.associate = models => {
    AccessPermission.belongsTo(models.User)
    AccessPermission.belongsTo(models.Module)
  }

  return AccessPermission
}
