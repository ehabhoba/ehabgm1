import { FaCheck, FaStar } from 'react-icons/fa'

export default function Features() {
  const features = [
    "خدمات متكاملة تغطي جميع احتياجاتك الرقمية",
    "فهم عميق للسوق المصري ومتطلباته",
    "سرعة استجابة وتنفيذ المشاريع",
    "تصاميم احترافية وعصرية",
    "دعم فني متواصل",
    "أسعار تنافسية ومناسبة"
  ]

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex items-center mb-3">
            <span className="inline-block w-2 h-10 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-full mx-2 animate-pulse"></span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-yellow-600 tracking-tight drop-shadow-lg flex items-center gap-3">
              <FaStar className="text-yellow-400 animate-spin-slow" />
              لماذا تختار EhabGM؟
            </h2>
            <span className="inline-block w-2 h-10 bg-gradient-to-t from-yellow-300 to-yellow-500 rounded-full mx-2 animate-pulse"></span>
          </div>
          <div className="text-[#374151] text-center mb-6 max-w-2xl">
            خدمات متنوعة، فهم عميق للسوق المصري، سرعة استجابة، تصاميم احترافية، دعم فني 24/7، وأسعار تنافسية.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4 rtl:space-x-reverse">
              <FaCheck className="text-green-500 flex-shrink-0" />
              <p className="text-lg">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
