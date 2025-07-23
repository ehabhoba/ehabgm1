import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:to-slate-800 transition-colors duration-500">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-start pt-8 pb-8">
          <div className="w-full max-w-5xl px-2 sm:px-6">
            <Component {...pageProps} />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
