import { FaCheck } from 'react-icons/fa'

export default function PricingCard({ title, price, features, isPopular }) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${isPopular ? 'ring-2 ring-blue-500' : ''}`}>
      {isPopular && (
        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
          الأكثر طلباً
        </span>
      )}
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="text-3xl font-bold text-blue-600 mb-6">
        {price} <span className="text-base font-normal text-gray-600">ج.م</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2 rtl:space-x-reverse">
            <FaCheck className="text-green-500 flex-shrink-0" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-2 rounded-lg transition ${
        isPopular 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
      }`}>
        اطلب الآن
      </button>
    </div>
  )
}
