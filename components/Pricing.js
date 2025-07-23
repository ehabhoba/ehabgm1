import Link from 'next/link'
import { FaMoneyBillWave } from 'react-icons/fa'

const whatsappNumber = '201022679250'
const encode = encodeURIComponent

const pricingData = [
  {
    category: "التصميم الجرافيكي",
    services: [
      {
        name: "تصميم لوجو بسيط",
        desc: "لوجو نصي أو رمزي بسيط يشمل نموذج واحد مع تعديلات بسيطة.",
        price: "150 - 300 جنيه"
      },
      {
        name: "تصميم لوجو احترافي",
        desc: "تصميم مميز يتضمن دراسة لهوية العلامة، عرض 2-3 نماذج، وتعديلات غير محدودة.",
        price: "400 - 700 جنيه"
      },
      {
        name: "كارت شخصي",
        desc: "تصميم كارت وجه واحد أو وجهين، التسليم PDF للطباعة ونسخة رقمية.",
        price: "150 - 300 جنيه"
      },
      {
        name: "باقة سوشيال ميديا (10 تصاميم)",
        desc: "10 منشورات احترافية تعتمد على الهوية البصرية.",
        price: "800 - 1200 جنيه"
      }
    ]
  },
  {
    category: "التسويق الإلكتروني والإعلانات الممولة",
    services: [
      {
        name: "إعلان ممول لبوست",
        desc: "ترويج منشور على فيسبوك أو إنستجرام مع استهداف الجمهور المناسب.",
        price: "350 جنيه"
      },
      {
        name: "إدارة حملة شهرية",
        desc: "إدارة كاملة لحملات ممولة مع تقارير وتحليل أداء.",
        price: "1000 جنيه"
      }
    ]
  },
  {
    category: "تصميم المواقع والمتاجر الإلكترونية",
    services: [
      {
        name: "موقع تعريفي",
        desc: "موقع بسيط عن الشركة أو المشروع متوافق مع جميع الأجهزة.",
        price: "1500 جنيه"
      },
      {
        name: "متجر إلكتروني",
        desc: "متجر متكامل للبيع أونلاين مع بوابات دفع وإدارة منتجات.",
        price: "2500 جنيه"
      }
    ]
  },
  {
    category: "خدمات إضافية",
    services: [
      {
        name: "تحليل SEO",
        desc: "تقرير SEO لموقعك مع توصيات للتحسين.",
        price: "400 جنيه"
      },
      {
        name: "كتابة محتوى SEO (لكل صفحة)",
        desc: "محتوى محسّن لمحركات البحث لكل صفحة.",
        price: "150 جنيه"
      },
      {
        name: "تصميم سيرة ذاتية PDF",
        desc: "سيرة ذاتية احترافية PDF قابلة للطباعة.",
        price: "150 جنيه"
      }
    ]
  }
]

function getWhatsappLink(service) {
  const msg = `مرحباً إيهاب، أود الاستفسار عن خدمة ${service.name} - ${service.price} من موقعكم. أرجو تزويدي بمزيد من التفاصيل.`
  return `https://wa.me/${whatsappNumber}?text=${encode(msg)}`
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mb-8 flex flex-wrap gap-3 justify-center">
        <Link href="/#services" className="bg-[#e3eafc] text-[#1976d2] px-4 py-2 rounded-full font-bold hover:bg-[#d1e3fa] transition">خدماتنا</Link>
        <Link href="/about" className="bg-[#e3eafc] text-[#1976d2] px-4 py-2 rounded-full font-bold hover:bg-[#d1e3fa] transition">عن المنصة</Link>
        <Link href="/vision" className="bg-[#e3eafc] text-[#1976d2] px-4 py-2 rounded-full font-bold hover:bg-[#d1e3fa] transition">الرؤية والرسالة</Link>
        <Link href="/policy" className="bg-[#e3eafc] text-[#1976d2] px-4 py-2 rounded-full font-bold hover:bg-[#d1e3fa] transition">سياسة الاستخدام</Link>
        <Link href="/portfolio" className="bg-[#e3eafc] text-[#1976d2] px-4 py-2 rounded-full font-bold hover:bg-[#d1e3fa] transition">أعمالنا</Link>
      </div>
      <div className="container mx-auto px-2 sm:px-6">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex items-center mb-3">
            <span className="inline-block w-2 h-10 bg-gradient-to-b from-green-300 to-green-500 rounded-full mx-2 animate-pulse"></span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-0 text-green-700 tracking-tight drop-shadow-lg flex items-center gap-3">
              <FaMoneyBillWave className="text-green-400 animate-bounce" />
              الأسعار والباقات
            </h1>
            <span className="inline-block w-2 h-10 bg-gradient-to-t from-green-300 to-green-500 rounded-full mx-2 animate-pulse"></span>
          </div>
          <div className="text-[#374151] text-center mb-6 max-w-2xl">
            اختر الخدمة المناسبة وتواصل معنا مباشرة عبر واتساب لأي استفسار أو طلب عرض سعر مخصص.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {pricingData.map((cat, idx) => (
            <div key={idx} className="bg-white/90 rounded-2xl shadow-lg border border-[#e3eafc] p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 text-[#1976d2]">{cat.category}</h2>
              <div className="space-y-6">
                {cat.services.map((service, i) => (
                  <div key={i} className="bg-[#f6f8fc] rounded-xl p-4 shadow flex flex-col md:flex-row md:items-center md:justify-between gap-4 border border-[#e3eafc]">
                    <div>
                      <div className="font-bold text-[#1a237e] text-lg mb-1">{service.name}</div>
                      <div className="text-[#374151] text-sm mb-1">{service.desc}</div>
                      <div className="text-[#1976d2] font-bold mb-1">يبدأ من {service.price}</div>
                    </div>
                    <a
                      href={getWhatsappLink(service)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-[#4f8cff] to-[#00c6fb] text-white px-6 py-2 rounded-full font-bold shadow hover:from-[#00c6fb] hover:to-[#4f8cff] transition text-base whitespace-nowrap"
                      aria-label={`تواصل واتساب بخصوص ${service.name}`}
                    >
                      اختر الخطة وتواصل واتساب
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center text-[#374151] text-sm mt-10">
          <div>الأسعار تقريبية وقد تختلف بحسب تفاصيل المشروع وعدد التعديلات المطلوبة.</div>
          <div>خصومات خاصة متاحة عند طلب عدة خدمات دفعة واحدة.</div>
        </div>
      </div>
    </section>
  )
}
