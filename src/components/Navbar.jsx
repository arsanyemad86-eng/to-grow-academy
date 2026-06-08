import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { HiMenu, HiX, HiArrowUp } from 'react-icons/hi'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Offers', href: '#offers' },
  { label: 'Projects', href: '#projects' },
  { label: 'Graduation', href: '#graduation' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      setShowTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="fixed top-0 left-0 right-0 h-1 bg-green-500 z-[60]"
      />
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-green-100' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-20">
            <motion.a href="#home" whileHover={{ scale: 1.03 }} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md" style={{background: 'linear-gradient(135deg, #166534 0%, #16a34a 100%)'}}>
                <span className="text-white font-bold text-lg">TG</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className={`font-bold text-lg transition-colors duration-300 ${scrolled ? 'text-green-800' : 'text-white'}`}>To Grow</span>
                <span className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${scrolled ? 'text-green-600' : 'text-green-200'}`}>Academy</span>
              </div>
            </motion.a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.a key={link.href} href={link.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i, duration: 0.4 }} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${scrolled ? 'text-gray-700 hover:bg-green-50 hover:text-green-700' : 'text-white hover:bg-white/10'}`}>
                  {link.label}
                </motion.a>
              ))}
              <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="ml-3 px-5 py-2.5 bg-green-600 text-white rounded-xl text-sm font-semibold shadow-md hover:bg-green-700 transition-all duration-300">
                Register Now
              </motion.a>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-700 hover:bg-green-50' : 'text-white hover:bg-white/10'}`}>
              {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.3 }} className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-black/40" onClick={() => setMenuOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl flex flex-col">
              <div className="flex items-center justify-between p-6 border-b border-green-100">
                <span className="font-bold text-green-800 text-lg">To Grow Academy</span>
                <button onClick={() => setMenuOpen(false)} className="p-2 rounded-lg hover:bg-green-50 text-gray-500"><HiX size={22} /></button>
              </div>
              <div className="flex flex-col p-4 gap-1 flex-1">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-green-50 hover:text-green-700 transition-all duration-200">
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="p-6 border-t border-green-100">
                <a href="#contact" onClick={() => setMenuOpen(false)} className="block w-full text-center py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors">Register Now</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-700 transition-colors duration-300"
          >
            <HiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}