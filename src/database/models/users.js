
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
      allowNull: true,
      validate: {
        notEmpty: true
      },
      set (field) {
        return this.setDataValue('email', field.trim())
      }
    },

    shopName: {
      type: DataType.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      },
      set (field) {
        return this.setDataValue('shopName', field.trim())
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

    cnpj: {
      type: DataType.STRING(14),
      allowNull: true,
    },
    
    phone: {
      type: DataType.STRING(11),
      allowNull: false,
      validate: {
        notEmpty: true
      },
      set (field) {
        return this.setDataValue('phone', field.replace(/\D+/g, ''))
      }
    },

    avatar: {
      type: DataType.TEXT,
      allowNull: true
    },

    type: {
      type: DataType.ENUM('admin', 'support', 'user'),
      defaultValue: 'user'
    },

    bounty: {
      type: DataType.FLOAT,
      allowNull: false,
      defaultValue: '0.85'
    },

    birthday: {
      type: DataType.DATEONLY,
      allowNull: true,
      validate: {
        notEmpty: true
      },
    },

    lasttry: {
      type: DataType.DATE,
      allowNull: true,
    },
  })

  User.associate = models => {
    User.hasMany(models.AccessPermission)
    User.hasMany(models.UserBitInformation)
    User.hasMany(models.TemplateBits)
  }

  return User
}
