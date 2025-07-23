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

export default function Policy() {
  return (
    <>
      <Head>
        <title>سياسة الاستخدام | إيهاب جي إم أونلاين</title>
        <meta name="description" content="سياسة الاستخدام لمنصة إيهاب جي إم أونلاين: شروط الاستخدام، حماية البيانات، حقوق الملكية الفكرية، التزامات المستخدمين، سياسة الخصوصية." />
        <meta name="keywords" content="سياسة الاستخدام, شروط الاستخدام, سياسة الخصوصية, إيهاب جي إم أونلاين, حماية البيانات, حقوق الملكية, Cairo, Egypt, Digital Policy" />
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
          <h2 className="text-2xl font-bold mb-4 text-red-700">شروط الاستخدام</h2>
          <ul className="list-disc pr-6 mb-4">
            <li>يجب احترام حقوق الملكية الفكرية لجميع المحتويات والخدمات المقدمة عبر المنصة.</li>
            <li>يمنع استخدام المنصة لأي أغراض غير قانونية أو مخالفة للأخلاق العامة.</li>
            <li>تحتفظ المنصة بحق تعديل أو تحديث الشروط في أي وقت.</li>
          </ul>
          <motion.div initial="hidden" animate="visible" variants={sectionVariant} custom={1}>
            <h2 className="text-2xl font-bold mb-4 text-red-700">سياسة الخصوصية وحماية البيانات</h2>
            <ul className="list-disc pr-6 mb-4">
              <li>نلتزم بحماية بيانات العملاء وعدم مشاركتها مع أي طرف ثالث دون إذن مسبق.</li>
              <li>يتم استخدام البيانات فقط لتحسين الخدمات والتواصل مع العملاء.</li>
            </ul>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={sectionVariant} custom={2}>
            <h2 className="text-2xl font-bold mb-4 text-red-700">التزامات المستخدمين</h2>
            <ul className="list-disc pr-6 mb-4">
              <li>تقديم معلومات صحيحة ودقيقة عند طلب الخدمات.</li>
              <li>الالتزام بعدم إساءة استخدام أي من خدمات المنصة.</li>
            </ul>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={sectionVariant} custom={3}>
            <h2 className="text-2xl font-bold mb-4 text-red-700">مميزات المنصة</h2>
            <ul className="list-disc pr-6 mb-4">
              <li>واجهة ذكية وسهلة الاستخدام</li>
              <li>دعم فني متواصل</li>
              <li>تكامل مع أحدث التقنيات</li>
              <li>حماية بيانات متقدمة</li>
            </ul>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}