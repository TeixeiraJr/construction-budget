
module.exports = (sequelize, DataType) => {
  const Bit = sequelize.define('Bits', {

    name: {
      type: DataType.STRING,
      allowNull: true,
      validate: {
        notEmpty: false
      },
      set (field) {
        return this.setDataValue('name', field.trim())
      }
    },

    status: {
      type: DataType.ENUM(['active', 'inactive']),
      defaultValue: 'active',
      allowNull: false
    },

    type: {
      type: DataType.ENUM(['activity', 'contents', 'comment']),
      allowNull: false
    },

    integration: {
      type: DataType.JSON,
      allowNull: true
    },

    contents: {
      type: DataType.JSON,
      allowNull: true
    },

    axisX: {
      type: DataType.STRING,
      allowNull: true
    },

    axisY: {
      type: DataType.STRING,
      allowNull: true
    },

    axisD: {
      type: DataType.STRING,
      allowNull: true
    },

    ClassId: {
      type: DataType.UUID,
      allowNull: false
    },

    UserId: {
      type: DataType.UUID,
      allowNull: false
    }
  })

  Bit.associate = (models) => {
    Bit.belongsTo(models.User)
    Bit.belongsTo(models.Class)
    Bit.hasMany(models.BitsRelations, { foreignKey: 'FirstBitId' })
    Bit.hasMany(models.UserBitInformation)
  }

  return Bit
}
