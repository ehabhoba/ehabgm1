import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

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

export default function Marketing() {
  return (
    <>
      <Head>
        <title>التسويق الإلكتروني | إيهاب جي إم أونلاين</title>
        <meta name="description" content="خدمات التسويق الإلكتروني: سيو، تسويق عبر السوشيال ميديا، حملات إعلانات ممولة، تسويق عبر البريد الإلكتروني، تسويق المحتوى، إدارة الحملات الرقمية." />
        <meta name="keywords" content="تسويق إلكتروني, سيو, تسويق سوشيال ميديا, إعلانات ممولة, تسويق محتوى, تسويق عبر البريد, إدارة الحملات, Digital Marketing, SEO, Cairo, Egypt" />
      </Head>
      <Navbar />
      <main className="max-w-3xl mx-auto p-4 mt-8">
        <motion.section
          className="bg-white rounded-2xl shadow-md p-6 mb-8"
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
          custom={0}
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-800">خدمات التسويق الإلكتروني</h2>
          <div className="flex flex-wrap gap-4 mb-4">
            <a href="#seo" className="text-accent underline">تحسين محركات البحث (SEO)</a>
            <a href="#smm" className="text-accent underline">تسويق السوشيال ميديا</a>
            <a href="#email" className="text-accent underline">تسويق البريد الإلكتروني</a>
            <a href="#content" className="text-accent underline">تسويق المحتوى</a>
          </div>
          <motion.div initial="hidden" animate="visible" variants={sectionVariant} custom={1}>
            <h3 id="seo" className="text-xl font-bold mt-6 mb-2 text-blue-700">تحسين محركات البحث (SEO)</h3>
            <p className="mb-4">رفع ترتيب موقعك في نتائج البحث وجذب عملاء جدد عبر استراتيجيات سيو متقدمة وتحليل الكلمات المفتاحية.</p>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={sectionVariant} custom={2}>
            <h3 id="smm" className="text-xl font-bold mt-6 mb-2 text-blue-700">تسويق السوشيال ميديا</h3>
            <p className="mb-4">إدارة الحملات على فيسبوك، إنستجرام، تيك توك، لينكدإن، وتحليل الأداء لتحقيق أفضل النتائج.</p>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={sectionVariant} custom={3}>
            <h3 id="email" className="text-xl font-bold mt-6 mb-2 text-blue-700">تسويق البريد الإلكتروني</h3>
            <p className="mb-4">تصميم حملات بريدية احترافية لزيادة التفاعل والمبيعات وبناء علاقة قوية مع العملاء.</p>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={sectionVariant} custom={4}>
            <h3 id="content" className="text-xl font-bold mt-6 mb-2 text-blue-700">تسويق المحتوى</h3>
            <p>كتابة محتوى تسويقي جذاب، مقالات، منشورات، فيديوهات، وإنفوجرافيك لتعزيز العلامة التجارية.</p>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}