const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "078b281c3e97af",
    pass: "3eeea7a55333fe"
  }
  // tls: { rejectUnauthorized: false }
})

/**
 * @function
 * @param  {{html, text, subject, from}}
 * @return {{html, text, subject, from, to}}
 */
const createDataSend = ({ html, subject, to }) => ({
  from: process.env.SENDER_EMAIL,
  to,
  subject,
  html
})

/**
 * @function
 * @param  {{html: string, subject: string, from: string}} data
 * @return {Promise}
 */
exports.sendEmailIntegration = (data) =>
  transporter.sendMail(createDataSend(data))
