import { FaBullhorn, FaPalette, FaStore, FaShoppingCart, FaUsers } from 'react-icons/fa'
import ServiceCard from './ServiceCard'
import Link from 'next/link'

const getWhatsappLink = (title) => {
  const phoneNumber = "201022679250";
  const message = `مرحباً، أرغب في الاستفسار عن خدمة: "${title}"`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export default function Services() {
  const services = [
    {
      icon: <FaBullhorn className="text-3xl text-blue-600 mb-4" />,
      title: "التسويق الإلكتروني والإعلانات الممولة",
      price: "350+",
      description: "إدارة حملات إعلانية ممولة على فيسبوك، إنستجرام، تيك توك، جوجل، وتحليل الأداء لتحقيق أفضل النتائج.",
      features: [
        "استهداف الجمهور المناسب",
        "تحليل الأداء والتقارير",
        "إعلانات سوشيال وجوجل",
        "زيادة التفاعل والمبيعات"
      ],
      link: '/marketing'
    },
    {
      icon: <FaPalette className="text-3xl text-blue-600 mb-4" />,
      title: "التصميم الجرافيكي والهوية البصرية",
      price: "150+",
      description: "تصميم شعارات، هويات بصرية، بوستات، بروشورات، موشن جرافيك، تصميم واجهات وتجربة مستخدم (UI/UX).",
      features: [
        "شعارات احترافية",
        "هوية بصرية متكاملة",
        "بوستات سوشيال ميديا",
        "موشن جرافيك"
      ],
      link: '/design'
    },
    {
      icon: <FaStore className="text-3xl text-blue-600 mb-4" />,
      title: "تصميم المواقع والمتاجر الإلكترونية",
      price: "1500+",
      description: "تصميم مواقع تعريفية ومتاجر إلكترونية متكاملة مع دعم فني ولوحة تحكم سهلة.",
      features: [
        "مواقع متوافقة مع جميع الأجهزة",
        "متاجر إلكترونية متكاملة",
        "بوابات دفع وشحن",
        "دعم فني مستمر"
      ],
      link: '/#pricing' // Assuming pricing page has details
    },
    {
      icon: <FaShoppingCart className="text-3xl text-blue-600 mb-4" />,
      title: "حلول التجارة الإلكترونية",
      price: "2500+",
      description: "إنشاء وربط المتجر ببوابات الدفع والتوصيل، إدارة المنتجات والمخزون، دعم تقني شامل.",
      features: [
        "إدارة المنتجات والمخزون",
        "ربط بوابات الدفع",
        "تكامل مع خدمات الشحن",
        "تقارير ومتابعة المبيعات"
      ],
      link: '/#pricing'
    },
    {
      icon: <FaUsers className="text-3xl text-blue-600 mb-4" />,
      title: "إدارة وتطوير صفحات التواصل الاجتماعي",
      price: "1000+",
      description: "بناء حضور رقمي قوي، صناعة محتوى، تنظيم الحملات وتحليل الأداء لنمو مستمر.",
      features: [
        "إدارة الحسابات",
        "صناعة محتوى احترافي",
        "تحليل الأداء",
        "زيادة المتابعين والتفاعل"
      ]
    }
  ]

  return (
    <section id="services" className="py-20 bg-transparent">
      <div className="container mx-auto px-2 sm:px-6">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex items-center mb-3">
            <span className="inline-block w-2 h-10 bg-gradient-to-b from-[#00c6fb] to-[#1976d2] rounded-full mx-2 animate-pulse"></span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#1a237e] tracking-tight drop-shadow-lg flex items-center gap-3">
              <FaBullhorn className="text-[#00c6fb] animate-bounce" />
              خدماتنا الرقمية المتكاملة
            </h2>
            <span className="inline-block w-2 h-10 bg-gradient-to-t from-[#00c6fb] to-[#1976d2] rounded-full mx-2 animate-pulse"></span>
          </div>
          <div className="text-[#374151] text-center mb-6 max-w-2xl">
            نقدم حلول التصميم الجرافيكي، التسويق الرقمي، تطوير المواقع والمتاجر الإلكترونية، إدارة الهوية الرقمية، وخدمات إضافية للشركات والأفراد في مصر والعالم العربي.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/90 p-6 rounded-2xl shadow-lg border border-[#e3eafc] flex flex-col items-center hover:shadow-2xl transition"
            >
              {service.icon}
              <ServiceCard
                title={service.title}
                price={service.price}
                description={service.description}
                features={service.features}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
