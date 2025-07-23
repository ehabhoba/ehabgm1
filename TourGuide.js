import { FaRobot } from 'react-icons/fa';

const TourGuide = () => {
  const startTour = async () => {
    // استيراد المكتبة ديناميكياً عند الحاجة فقط لتحسين الأداء
    const introJs = (await import('intro.js')).default;
    introJs().setOptions({
      steps: [
        {
          element: '#hero-section',
          title: 'أهلاً بك في EhabGM Online!',
          intro: 'هنا تبدأ رحلتك معنا. هذه هي بطاقتنا التعريفية التي تلخص من نحن وماذا نقدم.'
        },
        {
          element: '#services',
          title: 'خدماتنا الرقمية',
          intro: 'تصفح جميع خدماتنا المتكاملة. كل خدمة مصممة لمساعدتك على النمو والنجاح.'
        },
        {
          element: '#portfolio',
          title: 'أعمالنا السابقة',
          intro: 'شاهد بنفسك جودة أعمالنا من خلال نماذج لمشاريع قمنا بتنفيذها بنجاح.'
        },
        {
          element: '#features',
          title: 'لماذا تختارنا؟',
          intro: 'هنا نوضح لك الميزات التنافسية التي تجعلنا الخيار الأفضل لمشروعك.'
        },
        {
          element: '#contact',
          title: 'تواصل معنا',
          intro: 'هل أنت جاهز للبدء؟ تواصل معنا مباشرة من خلال هذا النموذج أو عبر وسائل التواصل الأخرى.'
        }
      ],
      nextLabel: 'التالي &rarr;',
      prevLabel: '&larr; السابق',
      doneLabel: 'فهمت، شكراً!',
      tooltipClass: 'custom-intro-tooltip', // يمكنك تخصيص الستايل
      showBullets: false,
    }).start();
  };

  return (
    <button onClick={startTour} className="bg-white text-[#1976d2] px-6 py-2 rounded-full font-bold shadow-md hover:bg-gray-100 transition inline-flex items-center gap-2 text-md">
      <FaRobot />
      خذ جولة في الموقع
    </button>
  );
};

export default TourGuide;