import TourGuide from './TourGuide';

export default function Hero() {
  return (
    <section id="hero-section" className="relative w-full flex justify-center" data-intro="هنا تبدأ رحلتك معنا. هذه هي بطاقتنا التعريفية التي تلخص من نحن وماذا نقدم.">
      <div className="w-full max-w-4xl bg-white/90 rounded-3xl shadow-xl mt-8 mb-12 px-6 py-12 flex flex-col items-center border border-[#e3eafc]">
        <img
          src="/logo.png"
          alt="EhabGM Logo"
          className="mb-6 w-24 h-24 rounded-2xl bg-white shadow-lg border-4 border-[#e3eafc]"
        />
        <h1 className="text-3xl md:text-5xl font-extrabold mb-3 text-[#1a237e] drop-shadow-lg tracking-tight">
          EhabGM | Online Services
        </h1>
        <div className="text-[#1976d2] font-bold mb-2 text-lg md:text-xl">
          Ehab Mohamed – مصمم جرافيك وأخصائي تسويق رقمي
        </div>
        <p className="text-lg md:text-2xl mb-8 font-medium text-[#374151]">
          منصة شاملة تقدم خدمات رقمية متكاملة تشمل: التصميم الجرافيكي للمطبوعات والإعلانات، الإعلانات الممولة، التسويق الإلكتروني والبيع أونلاين، إنشاء الهوية الرقمية ونشر العلامة التجارية على الإنترنت.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-gradient-to-r from-[#4f8cff] to-[#00c6fb] text-white px-10 py-3 rounded-full font-bold shadow-md hover:from-[#00c6fb] hover:to-[#4f8cff] transition inline-block text-lg"
          >
            اطلب خدمتك الآن
          </a>
          <TourGuide />
        </div>
      </div>
    </section>
  );
}
