import { FaBriefcase } from 'react-icons/fa'

export default function Portfolio() {
  const portfolioItems = [
    {
      title: 'تصميمات الهوية البصرية',
      description: 'مجموعة من أفضل تصميمات الشعارات والهويات البصرية',
      image: '/images/portfolio/branding.jpg',
      link: 'https://ehabgm.mystrikingly.com/branding'
    },
    {
      title: 'تصميمات السوشيال ميديا',
      description: 'نماذج من تصميمات منصات التواصل الاجتماعي',
      image: '/images/portfolio/social.jpg',
      link: 'https://ehabgm.mystrikingly.com/social'
    },
    {
      title: 'المتاجر الإلكترونية',
      description: 'نماذج من المتاجر الإلكترونية التي تم تصميمها',
      image: '/images/portfolio/ecommerce.jpg',
      link: 'https://ehabgm.mystrikingly.com/ecommerce'
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-4">
          <span className="inline-block w-2 h-10 bg-gradient-to-b from-purple-300 to-purple-500 rounded-full mx-2 animate-pulse"></span>
          <h2 className="text-3xl font-extrabold text-center text-purple-700 tracking-tight drop-shadow-lg flex items-center gap-3">
            <FaBriefcase className="text-purple-400 animate-bounce" />
            أعمالنا السابقة
          </h2>
          <span className="inline-block w-2 h-10 bg-gradient-to-t from-purple-300 to-purple-500 rounded-full mx-2 animate-pulse"></span>
        </div>
        <p className="text-gray-600 text-center mb-12">نماذج من مشاريعنا المنفذة بنجاح</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <a href={item.link} 
               key={index}
               target="_blank" 
               rel="noopener noreferrer" 
               className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="relative pt-[75%]">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="absolute top-0 left-0 w-full h-full object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
