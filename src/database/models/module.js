
module.exports = (sequelize, DataType) => {
  const Module = sequelize.define('Module', {

    name: {
      type: DataType.STRING,
      allowNull: false
    },

    link: {
      type: DataType.TEXT,
      allowNull: true
    },

    status: {
      type: DataType.ENUM(['active', 'inactive']),
      allowNull: false
    }
  })

  Module.associate = models => {
    Module.hasMany(models.AccessPermission)
    Module.hasMany(models.Class)
  }

  return Module
}
