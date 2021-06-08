
module.exports = (sequelize, DataType) => {
  const Class = sequelize.define('Class', {
    name: {
      type: DataType.STRING,
      allowNull: false
    },

    status: {
      type: DataType.ENUM(['active', 'inactive']),
      defaultValue: 'active',
      allowNull: false
    },

    dateStart: {
      type: DataType.DATE,
      allowNull: true
    },

    dateEnd: {
      type: DataType.DATE,
      allowNull: true
    },

    time: {
      type: DataType.DECIMAL,
      allowNull: true
    },

    ModuleId: {
      type: DataType.UUID,
      onDelete: 'cascade',
      allowNull: false
    }
  })

  Class.associate = models => {
    Class.belongsTo(models.Module)
    Class.hasMany(models.Bits)
  }

  return Class
}
