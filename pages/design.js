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

export default function Design() {
  return (
    <>
      <Head>
        <title>التصميم الجرافيكي | إيهاب جي إم أونلاين</title>
        <meta name="description" content="خدمات التصميم الجرافيكي: تصميم شعارات، هوية بصرية، بوستات سوشيال ميديا، موشن جرافيك، تصميم واجهات وتجربة مستخدم، تصميمات إبداعية وتجارية." />
        <meta name="keywords" content="تصميم جرافيك, تصميم شعار, هوية بصرية, بوستات سوشيال, موشن جرافيك, تصميم واجهات, UI UX, تصميمات إبداعية, Graphic Design, Cairo, Egypt" />
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
          <h2 className="text-2xl font-bold mb-4 text-blue-800">خدمات التصميم الجرافيكي</h2>
          <div className="flex flex-wrap gap-4 mb-4">
            <a href="#logo" className="text-accent underline">تصميم الشعارات</a>
            <a href="#identity" className="text-accent underline">الهوية البصرية</a>
            <a href="#social" className="text-accent underline">بوستات سوشيال ميديا</a>
            <a href="#motion" className="text-accent underline">موشن جرافيك</a>
            <a href="#uiux" className="text-accent underline">تصميم واجهات وتجربة مستخدم</a>
          </div>
          <motion.div initial="hidden" animate="visible" variants={sectionVariant} custom={1}>
            <h3 id="logo" className="text-xl font-bold mt-6 mb-2 text-blue-700">تصميم الشعارات</h3>
            <p className="mb-4">تصميم شعارات احترافية تعكس هوية علامتك التجارية وتناسب جميع الاستخدامات الرقمية والمطبوعة.</p>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={sectionVariant} custom={2}>
            <h3 id="identity" className="text-xl font-bold mt-6 mb-2 text-blue-700">الهوية البصرية</h3>
            <p className="mb-4">بناء هوية بصرية متكاملة (ألوان، خطوط، أنماط، كروت، أوراق رسمية) لتعزيز حضورك الرقمي والتجاري.</p>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={sectionVariant} custom={3}>
            <h3 id="social" className="text-xl font-bold mt-6 mb-2 text-blue-700">بوستات سوشيال ميديا</h3>
            <p className="mb-4">تصميم منشورات وبوستات إبداعية للسوشيال ميديا لزيادة التفاعل وجذب العملاء.</p>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={sectionVariant} custom={4}>
            <h3 id="motion" className="text-xl font-bold mt-6 mb-2 text-blue-700">موشن جرافيك</h3>
            <p className="mb-4">فيديوهات موشن جرافيك احترافية لعرض خدماتك أو منتجاتك بشكل جذاب وسريع الانتشار.</p>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={sectionVariant} custom={5}>
            <h3 id="uiux" className="text-xl font-bold mt-6 mb-2 text-blue-700">تصميم واجهات وتجربة مستخدم (UI/UX)</h3>
            <p>تصميم واجهات مواقع وتطبيقات عصرية وسهلة الاستخدام تضمن أفضل تجربة للمستخدم.</p>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}