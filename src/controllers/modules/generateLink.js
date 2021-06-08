const { validateErrorBody } = require('../../presenters/handle')
const { generateLink } = require('../../presenters/generate')
const { validateParamsModule, validateExistentModuleById } = require('./case')
const { findOneModuleWhereLinkExists, updateModule } = require('../../database/repository/module')

exports.path = '/module/:id/generate-link'
exports.method = 'GET'
exports.middleware = [validateParamsModule, validateErrorBody, validateExistentModuleById]
exports.authenticate = true

exports.handler = async (req, res, next) => {
  try {
    let generatedLink = null
    const findedModule = await findOneModuleWhereLinkExists({ id: req.params.id })
    if (!findedModule) {
      const voucher = generateLink()
      updateModule({ link: voucher }, { id: req.params.id })
      generatedLink = voucher
    } else {
      generatedLink = findedModule.link
    }
    return res.status(200).json({ moduleLink: `${process.env.FRONT_END_URL}access/module/${generatedLink}` })
  } catch (error) {
    next(error)
  }
}
