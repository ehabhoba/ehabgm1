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

export default function About() {
  return (
    <>
      <Head>
        <title>من نحن | إيهاب جي إم أونلاين</title>
        <meta name="description" content="تعرف على إيهاب جي إم أونلاين: منصة مصرية متخصصة في تقديم خدمات التصميم الجرافيكي، التسويق الإلكتروني، تطوير المواقع والمتاجر الإلكترونية، إدارة السوشيال ميديا، حلول رقمية متكاملة للشركات والأفراد." />
        <meta name="keywords" content="من نحن, إيهاب جي إم أونلاين, منصة رقمية, خدمات رقمية, تصميم جرافيك, تسويق الكتروني, تطوير مواقع, متجر إلكتروني, Cairo, Egypt, Digital Agency" />
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
          <h2 className="text-2xl font-bold mb-4 text-blue-800">منصة إيهاب جي إم أونلاين</h2>
          <p className="mb-4">
            إيهاب جي إم أونلاين هي منصة رقمية مصرية متخصصة في تقديم حلول رقمية متكاملة للشركات والأفراد. تأسست المنصة على يد <strong>إيهاب محمد</strong>، مصمم جرافيك ومسوق إلكتروني محترف بخبرة واسعة في السوق المصري والعربي.
          </p>
          <div className="flex flex-wrap gap-4 mb-4">
            <a href="#team" className="text-accent underline">فريق العمل</a>
            <a href="#values" className="text-accent underline">قيمنا</a>
            <a href="#whyus" className="text-accent underline">لماذا نحن؟</a>
          </div>
          <motion.div initial="hidden" animate="visible" variants={sectionVariant} custom={1}>
            <h3 id="team" className="text-xl font-bold mt-6 mb-2 text-blue-700">فريق العمل</h3>
            <p className="mb-4">
              يضم فريقنا نخبة من المصممين والمسوقين والمطورين ذوي الخبرة، يعملون بروح الإبداع والالتزام لتقديم أفضل النتائج لعملائنا.
            </p>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={sectionVariant} custom={2}>
            <h3 id="values" className="text-xl font-bold mt-6 mb-2 text-blue-700">قيمنا</h3>
            <ul className="list-disc pr-6 mb-4">
              <li>الاحترافية والشفافية في التعامل</li>
              <li>الابتكار في الحلول الرقمية</li>
              <li>الالتزام بالجودة والمواعيد</li>
              <li>دعم مستمر واستشارات مجانية</li>
            </ul>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={sectionVariant} custom={3}>
            <h3 id="whyus" className="text-xl font-bold mt-6 mb-2 text-blue-700">لماذا إيهاب جي إم أونلاين؟</h3>
            <ul className="list-disc pr-6">
              <li>خبرة عميقة في السوق المصري والعربي</li>
              <li>خدمات متكاملة في منصة واحدة</li>
              <li>أسعار تنافسية وجودة عالمية</li>
              <li>دعم فني واستشاري على مدار الساعة</li>
            </ul>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}