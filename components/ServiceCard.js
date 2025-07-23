import { FaCheck } from 'react-icons/fa'

export default function ServiceCard({ title, price, description, features }) {
  return (
    <div className="w-full">
      <h3 className="text-xl font-bold mb-2 text-[#1a237e]">{title}</h3>
      <div className="text-[#1976d2] font-bold mb-2">
        يبدأ من {price} جنيه
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {features && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 rtl:space-x-reverse">
              <FaCheck className="text-[#00c6fb] flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
