
const { findOne, create } = require('../index')

exports.findOneAuthenticate = ({ email, password }) => {
  return findOne('User', {
    attributes: { exclude: ['password', 'forgot'] },
    where: { email, password },
    raw: true
  })
}

exports.createUserWithGoogle = ({ name, email, tokenGoogle, avatar, type }) => {
  return create('User', {
    name, email, tokenGoogle, avatar, type
  })
}

exports.findOneAuthenticateUserWithGoogle = ({ email, tokenGoogle }) => {
  return findOne('User', {
    where: {
      email, tokenGoogle
    }
  })
}

exports.createUserWithFacebook = ({ name, email, tokenFacebook, avatar, type }) => {
  return create('User', {
    name, email, tokenFacebook, avatar, type
  })
}

exports.findOneAuthenticateUserWithFacebook = ({ email, tokenFacebook }) => {
  return findOne('User', {
    where: {
      email, tokenFacebook
    }
  })
}
