import { FaWhatsapp, FaFacebook, FaLinkedin, FaTiktok } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white/90 dark:bg-slate-800/90 shadow-inner border-t border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 pt-10 pb-4 mt-12 rounded-t-3xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-2 text-[#1a237e]">إيهاب جي إم أونلاين</h3>
            <p className="mb-2">
              حلول رقمية متكاملة في التصميم والتسويق والتجارة الإلكترونية.
            </p>
            <div className="flex gap-3 mt-2">
              <a href="https://wa.me/201022679250" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-2xl hover:text-green-500 transition-colors"><FaWhatsapp /></a>
              <a href="https://facebook.com/graphicdesiner1" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-2xl hover:text-blue-600 transition-colors"><FaFacebook /></a>
              <a href="https://linkedin.com/in/ehabgm-online-services" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-2xl hover:text-blue-500 transition-colors"><FaLinkedin /></a>
              <a href="https://tiktok.com/@ehab.gm1" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-2xl hover:text-black dark:hover:text-white transition-colors"><FaTiktok /></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-[#1a237e]">روابط سريعة</h4>
            <ul className="space-y-1">
              <li><Link href="/about" className="hover:text-blue-500 transition-colors">من نحن</Link></li>
              <li><Link href="/vision" className="hover:text-blue-500 transition-colors">الرؤية والرسالة</Link></li>
              <li><Link href="/policy" className="hover:text-blue-500 transition-colors">سياسة الاستخدام</Link></li>
              <li><Link href="/#contact" className="hover:text-blue-500 transition-colors">تواصل معنا</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-[#1a237e]">تواصل معنا</h4>
            <p className="mb-1">البريد: <a href="mailto:info@ehabgm.online" className="hover:text-blue-500 transition-colors">info@ehabgm.online</a></p>
            <p className="mb-1">الهاتف: <a href="tel:+201022679250" className="hover:text-blue-500 transition-colors ltr" dir="ltr">+20 102 267 9250</a></p>
            <p className="mb-1">مصر، القاهرة، حلوان</p>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-4 text-center text-gray-500 dark:text-gray-400 text-sm">
          جميع الحقوق محفوظة © {new Date().getFullYear()} إيهاب جي إم أونلاين
        </div>
      </div>
    </footer>
  )
}
