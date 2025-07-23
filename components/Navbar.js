import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaHome, FaUser, FaEye, FaGavel, FaBullhorn, FaChartLine, FaPaintBrush } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuItems = [
    { href: '/', label: 'الرئيسية', icon: <FaHome /> },
    { href: '/about', label: 'من نحن', icon: <FaUser /> },
    { href: '/vision', label: 'الرؤية والرسالة', icon: <FaEye /> },
    { href: '/policy', label: 'سياسة الاستخدام', icon: <FaGavel /> },
    { href: '/ads', label: 'الإعلانات', icon: <FaBullhorn /> },
    { href: '/marketing', label: 'التسويق الإلكتروني', icon: <FaChartLine /> },
    { href: '/design', label: 'التصميم الجرافيكي', icon: <FaPaintBrush /> },
  ]

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-cyan-500 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl">
          <img src="/logo.png" alt="EhabGM Logo" className="w-10 h-10 rounded-lg bg-white" />
          إيهاب جي إم أونلاين
        </Link>
        <div className="hidden md:flex gap-2">
          {menuItems.map((item, idx) => (
            <Link key={idx} href={item.href} className="flex items-center gap-1 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition">
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {menuItems.map((item, idx) => (
            <Link key={idx} href={item.href} className="block px-6 py-3 border-b border-gray-100 text-blue-700 flex items-center gap-2">
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
