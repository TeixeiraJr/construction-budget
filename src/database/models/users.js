
module.exports = (sequelize, DataType) => {
  const User = sequelize.define('User', {

    name: {
      type: DataType.STRING,
      allowNull: true,
      validate: {
        notEmpty: true
      },
      set (field) {
        return this.setDataValue('name', field.trim())
      }
    },

    email: {
      type: DataType.STRING,
      unique: true,
      allowNull: true,
      validate: {
        notEmpty: true
      },
      set (field) {
        return this.setDataValue('email', field.trim())
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

    cpf: {
      type: DataType.STRING(11),
      allowNull: true,
    },
    
    phone: {
      type: DataType.STRING(11),
      allowNull: false,
    
      set (field) {
        return this.setDataValue('phone', field.replace(/\D+/g, ''))
      }
    },

    type: {
      type: DataType.ENUM('admin', 'support', 'user'),
      defaultValue: 'user'
    },

    active: {
      type: DataType.BOOLEAN,
      defaultValue: 'false'
    },

    birthday: {
      type: DataType.DATEONLY,
      allowNull: true,
      validate: {
        notEmpty: true
      },
    },
  })

  User.associate = models => {
    User.hasMany(models.AccessPermission)
    User.hasMany(models.UserBitInformation)
    User.hasMany(models.TemplateBits)
  }

  return User
}
