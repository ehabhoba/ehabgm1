const { sendEmailNotification } = require('./utils/email')
const axios = require('axios')

const verifyRecaptcha = async (token) => {
  const response = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
  )
  return response.data.success
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  try {
    const data = JSON.parse(event.body)
    const { recaptchaToken, ...formData } = data

    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken)
    if (!isValidRecaptcha) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid reCAPTCHA' })
      }
    }

    // Send email notification
    await sendEmailNotification({
      to: 'info@ehabgm.online',
      subject: 'رسالة جديدة من الموقع',
      data: formData
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'تم إرسال الرسالة بنجاح' })
    }
  } catch (error) {
    console.error('Error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'حدث خطأ في إرسال الرسالة' })
    }
  }
}
