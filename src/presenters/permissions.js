const {findOneUserById } = require('../database/repository/user')
exports.isAdmin = (req, res, next) => {
  if (req.user.type !== 'admin') return res.status(400).json({ errors: [{ title: 'Error', message: 'Você não tem permissão para está ação!' }] })
  return next()
}

exports.isSupport = (req, res, next) => {
  if (req.user.type !== 'support' && req.user.type !== 'admin') return res.status(400).json({ errors: [{ title: 'Error', message: 'Você não tem permissão para está ação!' }] })
  return next()
}

exports.isTheUser = async (req, res, next) => {
  const validate = await findOneUserById({ id })
  if (req.user.id == validate.id || req.user.type == 'support') return res.status(400).json({ errors: [{ title: 'Error', message: 'Você não tem permissão para está ação!' }] })
  return next()
}