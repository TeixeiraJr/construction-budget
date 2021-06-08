
module.exports = (sequelize, DataType) => {
  const TemplateBits = sequelize.define('TemplateBits', {

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

    UserId: {
      type: DataType.UUID,
      allowNull: false
    }
  })

  TemplateBits.associate = (models) => {
    TemplateBits.belongsTo(models.User)
  }

  return TemplateBits
}
