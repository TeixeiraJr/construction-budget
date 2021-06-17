const { Op } = require('sequelize')
const { findOne, update, create, findAllPaginate, remove } = require('../index')

exports.createUser = (user) => {
  return create('User', user)
}

exports.findOneUserEmail = ({ email }) => {
  return findOne('User', { where: { email }, attributes: { exclude: ['password', 'forgot'] }, raw: true })
}

exports.findOneUserEmailFacebook = ({ email }) => {
  return findOne('User', { where: { email, tokenFacebook: { [Op.not]: null } } })
}

exports.findOneUserEmailGoogle = ({ email }) => {
  return findOne('User', { where: { email, tokenGoogle: { [Op.not]: null } } })
}

exports.findOneUserEmailSocialAccount = ({ email }) => {
  return findOne('User', { where: { email, [Op.or]: { tokenGoogle: { [Op.not]: null }, tokenFacebook: { [Op.not]: null } } }, raw: true })
}

exports.findOneUserEmailDefaultAccount = ({ email }) => {
  return findOne('User', { where: { email, password: { [Op.not]: null } } })
}

exports.findOneUserForgotPassword = ({ forgot }) => {
  return findOne('User', {
    where: { forgot },
    attributes: { exclude: ['password', 'forgot'] },
    raw: true
  })
}

exports.findOneUserById = ({ id }) => {
  return findOne('User', {
    where: { id },
    attributes: { exclude: ['password', 'forgot'] },
    raw: true
  })
}

exports.findOneStudentUserById = ({ id }) => {
  return findOne('User', {
    where: { id, type: 'student' },
    attributes: { exclude: ['password', 'forgot'] },
    raw: true
  })
}

exports.updateUserSetCodeForgot = ({ forgot, id }) => {
  return update('User', { where: { id } }, { forgot })
}

exports.updateUserPasswordWhereForgot = ({ forgot, password }) => {
  return update('User', { where: { forgot } }, { password, forgot: '' })
}

exports.findAllPaginateUser = async ({ query = {}, page = 1 }) => {
  return findAllPaginate('User', {
    attributes: { exclude: ['password'] },
    order: [['updatedAt', 'DESC']],
    where: { ...query },
    raw: true
  },
  page)
}

exports.updateUserById = (id, { name, email, shopName, cpf, cnpj, phone, avatar, birthday }) => {
  return update('User', { where: { id } }, { name, email, shopName, cpf, cnpj, phone, avatar, birthday })
}

exports.deleteUserById = ({ id }) => {
  return remove('User', { where: { id } })
}
