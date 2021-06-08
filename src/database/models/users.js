
module.exports = (sequelize, DataType) => {
  const User = sequelize.define('User', {

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

    email: {
      type: DataType.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },

    tokenGoogle: {
      type: DataType.TEXT,
      allowNull: true
    },

    tokenFacebook: {
      type: DataType.TEXT,
      allowNull: true
    },

    forgot: {
      type: DataType.TEXT,
      allowNull: true
    },

    password: {
      type: DataType.STRING,
      allowNull: true
    },

    phone: {
      type: DataType.STRING(20),
      allowNull: true,
      set (field) {
        return this.setDataValue('phone', field.replace(/\D+/g, ''))
      }
    },

    avatar: {
      type: DataType.TEXT,
      allowNull: true
    },

    birthday: {
      type: DataType.DATEONLY,
      allowNull: true
    },

    type: {
      type: DataType.ENUM(['admin', 'teacher', 'student']),
      allowNull: false
    }
  })

  User.associate = models => {
    User.hasMany(models.AccessPermission)
    User.hasMany(models.UserBitInformation)
    User.hasMany(models.TemplateBits)
  }

  return User
}
