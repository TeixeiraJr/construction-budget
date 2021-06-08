const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: process.env.SENDER_HOST,
  port: process.env.SENDER_PORT,
  secure: true,
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PASSWORD
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
