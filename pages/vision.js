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

export default function Vision() {
  return (
    <>
      <Head>
        <title>الرؤية والرسالة | إيهاب جي إم أونلاين</title>
        <meta name="description" content="تعرف على رؤية ورسالة منصة إيهاب جي إم أونلاين: الريادة في تقديم حلول رقمية متكاملة، دعم التحول الرقمي، وتمكين العلامات التجارية في مصر والعالم العربي." />
        <meta name="keywords" content="الرؤية, الرسالة, إيهاب جي إم أونلاين, منصة رقمية, حلول رقمية, التحول الرقمي, مصر, Cairo, Digital Vision, Digital Mission" />
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
          <h2 className="text-2xl font-bold mb-4 text-blue-800">رؤيتنا</h2>
          <p className="mb-4">أن نكون المنصة الرقمية الأولى في مصر والعالم العربي في تقديم حلول رقمية متكاملة تدعم التحول الرقمي وتُمكن العلامات التجارية من تحقيق النجاح والنمو المستدام.</p>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">رسالتنا</h2>
          <p className="mb-4">تقديم خدمات رقمية مبتكرة واحترافية في مجالات التصميم الجرافيكي، التسويق الإلكتروني، تطوير المواقع والمتاجر الإلكترونية، مع التركيز على الجودة، الإبداع، ودعم العملاء لتحقيق أهدافهم.</p>
          <div className="flex flex-wrap gap-4 mb-4">
            <a href="#values" className="text-accent underline">قيمنا</a>
            <a href="#goals" className="text-accent underline">أهدافنا</a>
          </div>
          <motion.div initial="hidden" animate="visible" variants={sectionVariant} custom={1}>
            <h3 id="values" className="text-xl font-bold mt-6 mb-2 text-blue-700">قيمنا الأساسية</h3>
            <ul className="list-disc pr-6 mb-4">
              <li>الابتكار في الحلول الرقمية</li>
              <li>الشفافية والاحترافية</li>
              <li>الالتزام بالجودة والمواعيد</li>
              <li>دعم العملاء المستمر</li>
            </ul>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={sectionVariant} custom={2}>
            <h3 id="goals" className="text-xl font-bold mt-6 mb-2 text-blue-700">أهداف المنصة</h3>
            <ul className="list-disc pr-6">
              <li>تمكين الشركات والأفراد من بناء حضور رقمي قوي</li>
              <li>تقديم حلول متكاملة تلبي احتياجات السوق المحلي والعالمي</li>
              <li>نشر ثقافة التحول الرقمي في مصر والوطن العربي</li>
            </ul>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
