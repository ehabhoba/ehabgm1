import { useState, useEffect } from 'react'
import { FaWhatsapp, FaFacebook, FaLinkedin, FaTiktok, FaPhone, FaEnvelopeOpenText } from 'react-icons/fa'
import Spinner from './Spinner'
import ReCAPTCHA from 'react-google-recaptcha'
import { trackFormSubmission } from '../utils/analytics'
import { contactInfo } from '../utils/siteData'

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})
  const [recaptchaToken, setRecaptchaToken] = useState(null)

  const socialLinks = [
    {
      icon: <FaWhatsapp />,
      url: `https://wa.me/${contactInfo.phones.primary}`,
      label: "واتساب"
    },
    {
      icon: <FaFacebook />,
      url: contactInfo.social.facebook,
      label: "فيسبوك"
    },
    {
      icon: <FaLinkedin />,
      url: contactInfo.social.linkedin,
      label: "لينكد إن"
    },
    {
      icon: <FaTiktok />,
      url: `https://tiktok.com/${contactInfo.social.tiktok}`,
      label: "تيك توك"
    }
  ]

  const validatePhone = (phone) => {
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    return phoneRegex.test(phone)
  }

  const validateForm = (formData) => {
    const newErrors = {}
    if (!formData.get('name').trim()) {
      newErrors.name = 'الاسم مطلوب'
    }
    if (!formData.get('email').match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'البريد الإلكتروني غير صالح'
    }
    if (!formData.get('message').trim()) {
      newErrors.message = 'الرسالة مطلوبة'
    }

    const phone = formData.get('phone')
    if (phone && !validatePhone(phone)) {
      newErrors.phone = 'رقم الهاتف غير صالح'
    }

    if (!recaptchaToken) {
      newErrors.recaptcha = 'يرجى التحقق من أنك لست روبوتًا'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    
    if (!validateForm(formData)) {
      return
    }

    setIsLoading(true)
    
    try {
      const data = {
        ...Object.fromEntries(formData),
        recaptchaToken
      }
      
      const response = await fetch('/.netlify/functions/contact-form', {
        method: 'POST',
        body: JSON.stringify(data)
      })
      
      if (response.ok) {
        trackFormSubmission('contact')
        setMessage('تم إرسال رسالتك بنجاح!')
        e.target.reset()
        setRecaptchaToken(null)
      } else {
        throw new Error('فشل في إرسال الرسالة')
      }
    } catch (error) {
      setMessage('عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex items-center mb-3">
            <span className="inline-block w-2 h-10 bg-gradient-to-b from-[#00c6fb] to-[#1976d2] rounded-full mx-2 animate-pulse"></span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#1a237e] tracking-tight drop-shadow-lg flex items-center gap-3">
              <FaEnvelopeOpenText className="text-[#00c6fb] animate-bounce" />
              تواصل معنا الآن
            </h2>
            <span className="inline-block w-2 h-10 bg-gradient-to-t from-[#00c6fb] to-[#1976d2] rounded-full mx-2 animate-pulse"></span>
          </div>
          <div className="text-[#374151] text-center mb-6 max-w-2xl">
            يسعدنا تواصلك معنا لأي استفسار أو طلب خدمة. فريقنا متواجد 24/7 للرد على جميع استفساراتك بسرعة واحترافية.
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" className="space-y-6">
            <input type="hidden" name="form-name" value="contact" />
            
            <div>
              <label className="block text-gray-700">الاسم</label>
              <input type="text" name="name" required 
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500" />
              {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-gray-700">البريد الإلكتروني</label>
              <input type="email" name="email" required 
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500" />
              {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-700">الرسالة</label>
              <textarea name="message" rows="4" required 
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
              {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
            </div>

            <div>
              <label className="block text-gray-700">رقم الهاتف (اختياري)</label>
              <input type="tel" name="phone"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500" />
              {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
            </div>

            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={setRecaptchaToken}
              className="mx-auto"
            />
            {errors.recaptcha && <p className="text-red-600 text-sm text-center">{errors.recaptcha}</p>}

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center"
            >
              {isLoading ? <Spinner size="sm" /> : 'إرسال'}
            </button>

            {message && (
              <div className={`text-center p-3 rounded ${
                message.includes('نجاح') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {message}
              </div>
            )}
          </form>

          <div className="mt-8 text-center">
            <h3 className="text-xl font-bold mb-4">معلومات التواصل</h3>
            <p className="mb-2">
              الهاتف: {contactInfo.phones.primary} - {contactInfo.phones.secondary}
            </p>
            <p className="mb-4">
              فودافون كاش: {contactInfo.payments.vodafoneCash}
            </p>
            <p className="mb-4">
              إنستا باي: {contactInfo.payments.instaPay.username}
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold text-center mb-6">تابعنا على</h3>
            <div className="flex justify-center space-x-6 rtl:space-x-reverse">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer"
                  className="text-3xl text-gray-600 hover:text-blue-600 transition">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
