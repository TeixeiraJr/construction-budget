
const crypto = require('crypto')
const voucher_codes = require('voucher-code-generator')

/**
 * @function
 * @params null
 * @return {Promise}
 */
exports.generateCode = async () => {
  const code = crypto.randomBytes(48)
  return code.toString('hex')
}

exports.generateLink = () => voucher_codes.generate({
  pattern: '####-####-#####'
})[0]
