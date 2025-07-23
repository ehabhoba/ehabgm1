import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

export default function Home() {
  return (
    <>
      <Head>
        <title>إيهاب جي إم أونلاين | الرئيسية - حلول رقمية متكاملة في مصر</title>
        <meta name="description" content="الصفحة الرئيسية لمنصة إيهاب جي إم أونلاين: خدمات تصميم جرافيك، تسويق إلكتروني، إعلانات ممولة، تطوير مواقع ومتاجر إلكترونية، إدارة سوشيال ميديا في مصر." />
        <meta name="keywords" content="مصمم جرافيك, تسويق الكتروني, تصميم مواقع, متجر إلكتروني, خدمات رقمية, تصميم شعار, إعلانات ممولة, سيو, جرافيك ديزاينر, Egypt, Graphic Designer, Digital Marketing, Online Shop, Cairo, منصة رقمية, حلول رقمية" />
      </Head>
      <Navbar />
      <main className="max-w-4xl mx-auto p-4 mt-8">
        {/* Hero Section */}
        <motion.section
          className="bg-white rounded-3xl shadow-lg p-8 mb-8 text-center border border-[#e3eafc]"
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
          custom={0}
        >
          <motion.img
            src="/logo.png"
            alt="EhabGM Logo"
            className="mx-auto mb-4 rounded-2xl w-28 h-28 border-4 border-[#e3eafc] bg-white shadow"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, type: 'spring' }}
          />
          <motion.h1
            className="text-3xl font-bold text-blue-900 mb-2"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            إيهاب جي إم أونلاين
          </motion.h1>
          <motion.div
            className="text-lg text-gray-700 mb-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            حلول رقمية متكاملة في مكان واحد – لأن نجاحك يبدأ من وجودك الرقمي!
          </motion.div>
          <motion.div
            className="flex flex-wrap gap-3 justify-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <a href="https://wa.me/201022679250" target="_blank" rel="noopener" className="btn btn-primary">تواصل واتساب</a>
            <a href="#services" className="btn">خدماتنا</a>
            <a href="#links" className="btn">روابطنا</a>
            <a href="#about" className="btn">عن المنصة</a>
          </motion.div>
        </motion.section>
        {/* Services Section */}
        <motion.section
          className="bg-white rounded-2xl shadow-md p-6 mb-8"
          id="services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
          custom={1}
        >
          <h2 className="text-xl font-bold mb-4 text-blue-800">خدمات إيهاب جي إم أونلاين</h2>
          <ul className="list-disc pr-6 mb-3 text-gray-800">
            <li className="mb-2"><strong>التسويق الإلكتروني والإعلانات الممولة:</strong> حملات إعلانات على جوجل، فيسبوك، إنستجرام، تيك توك وغيرها لتحقيق أعلى عائد وتوسيع قاعدة العملاء.</li>
            <li className="mb-2"><strong>التصميم الجرافيكي والهوية البصرية:</strong> تصميم شعارات، هويات، بوستات، بروشورات، موشن جرافيك، تصميم واجهات وتجربة مستخدم (UI/UX).</li>
            <li className="mb-2"><strong>تصميم المواقع والمتاجر الإلكترونية:</strong> من مواقع تعريفية إلى متاجر متكاملة، تصميم جذاب ومتوافق مع جميع الأجهزة ولوحة تحكم سهلة.</li>
            <li className="mb-2"><strong>حلول التجارة الإلكترونية:</strong> إنشاء وربط المتجر ببوابات الدفع والتوصيل، إدارة المنتجات والمخزون، دعم تقني شامل.</li>
            <li className="mb-2"><strong>إدارة وتطوير صفحات التواصل الاجتماعي:</strong> بناء حضور رقمي قوي، صناعة محتوى، تنظيم الحملات وتحليل الأداء لنمو مستمر.</li>
          </ul>
        </motion.section>
        {/* Features Section */}
        <motion.section
          className="bg-white rounded-2xl shadow-md p-6 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
          custom={2}
        >
          <h2 className="text-xl font-bold mb-4 text-blue-800">مميزاتنا</h2>
          <ul className="list-disc pr-6 mb-3 text-gray-800">
            <li>خدمات متنوعة متكاملة في منصة واحدة</li>
            <li>فهم عميق لطبيعة السوق المصري</li>
            <li>سرعة استجابة، التزام بالمواعيد، ودعم فني مستمر</li>
            <li>تصاميم احترافية ومرنة</li>
            <li>أسعار مناسبة وجودة ممتازة</li>
          </ul>
        </motion.section>
        {/* About Section */}
        <motion.section
          className="bg-white rounded-2xl shadow-md p-6 mb-8"
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
          custom={3}
        >
          <h2 className="text-xl font-bold mb-4 text-blue-800">عن إيهاب جي إم أونلاين</h2>
          <p className="mb-2">منصة مصرية شاملة تقدم خدمات التصميم والتسويق الإلكتروني، تطوير المواقع والمتاجر، إدارة الحسابات الاجتماعية، وتقديم الاستشارات والدعم الفني. نحن شُركاء نجاحك، سواء كنت شركة ناشئة، مشروع صغير أو حتى فرد بفكرة طموحة – هدفنا هو مساعدتك للظهور بأفضل صورة وتحقيق النمو بأقل تكلفة.</p>
          <p className="mb-2" lang="en" dir="ltr"><strong>EhabGM | Online Services</strong><br />Professional Graphic Design, Website Development, Digital Marketing and E-Commerce in Egypt. Creative, affordable, and available 24/7.</p>
        </motion.section>
        {/* Links Section */}
        <motion.section
          className="bg-white rounded-2xl shadow-md p-6 mb-8"
          id="links"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
          custom={4}
        >
          <h2 className="text-xl font-bold mb-4 text-blue-800">روابط مهمة وطرق التواصل</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <a href="https://ehabgm.online" target="_blank" rel="noopener" className="text-blue-700 underline">الموقع الرسمي</a>
            <a href="https://ehabgm.mystrikingly.com" target="_blank" rel="noopener" className="text-blue-700 underline">أعمال التصميمات</a>
            <a href="https://www.ehabgm.shop" target="_blank" rel="noopener" className="text-blue-700 underline">متجر إلكتروني مصر</a>
            <a href="https://wa.me/201022679250" target="_blank" rel="noopener" className="text-blue-700 underline">واتساب مباشر</a>
            <a href="https://www.tiktok.com/@ehab.gm1" target="_blank" rel="noopener" className="text-blue-700 underline">تيك توك</a>
            <a href="https://www.facebook.com/graphicdesiner1" target="_blank" rel="noopener" className="text-blue-700 underline">فيسبوك الخدمات</a>
            <a href="https://www.facebook.com/ehabonlineshopp" target="_blank" rel="noopener" className="text-blue-700 underline">فيسبوك المتجر</a>
            <a href="https://www.facebook.com/ehab.gm1" target="_blank" rel="noopener" className="text-blue-700 underline">فيسبوك الشخصي</a>
            <a href="https://x.com/ehabgm" target="_blank" rel="noopener" className="text-blue-700 underline">X (تويتر)</a>
            <a href="https://www.linkedin.com/in/ehabgm-online-services-487a82331" target="_blank" rel="noopener" className="text-blue-700 underline">LinkedIn</a>
            <a href="https://www.youtube.com/@ehabgm" target="_blank" rel="noopener" className="text-blue-700 underline">YouTube</a>
            <a href="https://ehabgm.wordpress.com" target="_blank" rel="noopener" className="text-blue-700 underline">المدونة ووردبريس</a>
          </div>
          <div className="mt-3">
            <strong>الهاتف:</strong>
            <a href="tel:+201022679250" className="text-blue-700 underline">+201022679250</a> /
            <a href="tel:01140057253" className="text-blue-700 underline">01140057253</a>
            <br />
            <strong>مصر، القاهرة، حلوان</strong>
          </div>
        </motion.section>
        {/* Contact Form Section */}
        <motion.section
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
          custom={5}
        >
          <ContactForm />
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
