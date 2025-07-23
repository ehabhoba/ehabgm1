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

export default function Ads() {
  return (
    <>
      <Head>
        <title>الإعلانات | إيهاب جي إم أونلاين</title>
        <meta name="description" content="خدمات الإعلانات الممولة على فيسبوك، إنستجرام، جوجل، وتيك توك. إدارة الحملات الإعلانية وتحليل الأداء مع إيهاب جي إم أونلاين." />
        <meta name="keywords" content="إعلانات ممولة, إدارة الحملات, إعلانات فيسبوك, إعلانات إنستجرام, إعلانات جوجل, إعلانات تيك توك, تحليل الإعلانات, Digital Ads, Cairo, Egypt" />
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
          <h2 className="text-2xl font-bold mb-4 text-blue-800">خدمات الإعلانات الممولة</h2>
          <div className="flex flex-wrap gap-4 mb-4">
            <a href="#facebook" className="text-accent underline">إعلانات فيسبوك</a>
            <a href="#instagram" className="text-accent underline">إعلانات إنستجرام</a>
            <a href="#google" className="text-accent underline">إعلانات جوجل</a>
            <a href="#tiktok" className="text-accent underline">إعلانات تيك توك</a>
          </div>
          <motion.div initial="hidden" animate="visible" variants={sectionVariant} custom={1}>
            <h3 id="facebook" className="text-xl font-bold mt-6 mb-2 text-blue-700">إعلانات فيسبوك</h3>
            <p className="mb-4">إدارة وتصميم حملات إعلانية فعالة على فيسبوك لتحقيق أفضل استهداف وزيادة التفاعل والمبيعات.</p>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={sectionVariant} custom={2}>
            <h3 id="instagram" className="text-xl font-bold mt-6 mb-2 text-blue-700">إعلانات إنستجرام</h3>
            <p className="mb-4">تصميم وتنفيذ إعلانات ممولة على إنستجرام للوصول لجمهورك المستهدف بأفضل صورة بصرية.</p>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={sectionVariant} custom={3}>
            <h3 id="google" className="text-xl font-bold mt-6 mb-2 text-blue-700">إعلانات جوجل</h3>
            <p className="mb-4">حملات Google Ads (بحث - عرض - يوتيوب) لزيادة الظهور وتحقيق أعلى عائد على الاستثمار.</p>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={sectionVariant} custom={4}>
            <h3 id="tiktok" className="text-xl font-bold mt-6 mb-2 text-blue-700">إعلانات تيك توك</h3>
            <p>استغل قوة الفيديو القصير مع حملات تيك توك الممولة للوصول لجمهور الشباب وزيادة الانتشار.</p>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}