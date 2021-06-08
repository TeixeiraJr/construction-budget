const { findOneAuthenticateUserWithGoogle, createUserWithGoogle } = require('../../database/repository/authenticate')
const { validateBodyAuthenticateSocialLogin, validateExistentDefaultAccount, validateExistentEmailSocialLoginFacebook } = require('./case')
const { validateErrorBody } = require('../../presenters/handle')
const { generateToken } = require('../../presenters/jwt')

exports.path = '/authenticate/google'
exports.method = 'POST'
exports.middleware = [validateBodyAuthenticateSocialLogin, validateErrorBody, validateExistentDefaultAccount, validateExistentEmailSocialLoginFacebook]
exports.authenticate = false

exports.handler = async (req, res, next) => {
  try {
    const { _profile: { email, name, profilePicURL: avatar }, _token: { accessToken: tokenGoogle } } = req.body
    let user = await findOneAuthenticateUserWithGoogle({
      email: email.toLowerCase().trim(),
      tokenGoogle
    })
    if (!user) {
      user = await createUserWithGoogle({
        name,
        email,
        tokenGoogle,
        avatar,
        type: 'student'
      })
    }
    return res.status(200).json({ data: { token: generateToken(user.toJSON()), user } })
  } catch (error) {
    next(error)
  }
}
