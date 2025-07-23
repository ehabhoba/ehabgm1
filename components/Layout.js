import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f6f8fc] via-[#e3eafc] to-[#f8fafc]">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-start pt-8 pb-8">
        <div className="w-full max-w-5xl px-2 sm:px-6">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
