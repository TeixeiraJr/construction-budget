
module.exports = (sequelize, DataType) => {
  const Comment = sequelize.define('Comment', {

    UserId: {
      type: DataType.UUID,
      allowNull: true
    },

    BitId: {
      type: DataType.UUID,
      allowNull: false
    },

    comment: {
      type: DataType.TEXT,
      allowNull: false
    }
  })

  Comment.associate = (models) => {
    Comment.belongsTo(models.User)
    Comment.belongsTo(models.Bits)
  }

  return Comment
}
