
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

    shopName: {
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

    cpfCnpj: {
      type: DataType.STRING(20),
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },

    phone: {
      type: DataType.STRING(20),
      allowNull: false,
      validate: {
        notEmpty: true
      },
      set (field) {
        return this.setDataValue('phone', field.replace(/\D+/g, ''))
      }
    },

    address: {
      type: DataType.STRING,
      allowNull: true,
      validate: {
        notEmpty: true
      },
    },

    addressNumber: {
      type: DataType.STRING,
      allowNull: true
    },

    postalCode: {
      type: DataType.STRING,
      allowNull: true,
      validate: {
        notEmpty: true
      },
    },

    logo: {
      type: DataType.TEXT,
      allowNull: true
    },

    type: {
      type: DataType.ENUM(['admin', 'support', 'user']),
      allowNull: false
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
