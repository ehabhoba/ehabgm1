const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

exports.sendEmailNotification = async ({ to, subject, data }) => {
  const emailContent = `
    اسم المرسل: ${data.name}
    البريد الإلكتروني: ${data.email}
    الرسالة: ${data.message}
  `

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    subject,
    text: emailContent
  })
}
