const { findOneAuthenticateUserWithFacebook, createUserWithFacebook } = require('../../database/repository/authenticate')
const { validateBodyAuthenticateSocialLogin, validateExistentDefaultAccount, validateExistentEmailSocialLoginGoogle } = require('./case')
const { validateErrorBody } = require('../../presenters/handle')
const { generateToken } = require('../../presenters/jwt')

exports.path = '/authenticate/facebook'
exports.method = 'POST'
exports.middleware = [validateBodyAuthenticateSocialLogin, validateErrorBody, validateExistentDefaultAccount, validateExistentEmailSocialLoginGoogle]
exports.authenticate = false

exports.handler = async (req, res, next) => {
  try {
    const { _profile: { email, name, profilePicURL: avatar }, _token: { accessToken: tokenFacebook } } = req.body
    let user = await findOneAuthenticateUserWithFacebook({
      email: email.toLowerCase().trim(),
      tokenFacebook
    })
    if (!user) {
      user = await createUserWithFacebook({
        name,
        email,
        tokenFacebook,
        avatar,
        type: 'student'
      })
    }
    return res.status(200).json({ data: { token: generateToken(user.toJSON()), user } })
  } catch (error) {
    next(error)
  }
}
