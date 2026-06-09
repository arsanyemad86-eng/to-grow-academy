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
      setScrolled(window.scrollY > 60)
      setShowTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-green-500 z-[60]"
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-2xl shadow-xl shadow-black/5 border-b border-white/40'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <motion.a href="#home" whileHover={{ scale: 1.03 }} className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md"
                style={{ background: 'linear-gradient(135deg, #166534 0%, #16a34a 100%)' }}
              >
                <span className="text-white font-black text-sm">TG</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className={`font-black text-base transition-colors duration-300 tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                  To Grow
                </span>
                <span className={`text-[10px] font-semibold tracking-[0.18em] uppercase transition-colors duration-300 ${scrolled ? 'text-green-600' : 'text-green-200/80'}`}>
                  Academy
                </span>
              </div>
            </motion.a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                  className={`px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                    scrolled
                      ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="ml-4 px-5 py-2.5 bg-green-600 text-white rounded-xl text-[13px] font-bold shadow-lg shadow-green-900/25 hover:bg-green-700 transition-all duration-200"
              >
                Register Now
              </motion.a>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 35 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <span className="font-black text-gray-900 tracking-tight">To Grow Academy</span>
                <button onClick={() => setMenuOpen(false)} className="p-2 rounded-lg hover:bg-gray-100 text-gray-500">
                  <HiX size={20} />
                </button>
              </div>
              <div className="flex flex-col px-4 py-4 gap-1 flex-1 overflow-y-auto">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-green-50 hover:text-green-700 transition-all duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="px-6 py-6 border-t border-gray-100">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center py-3.5 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-colors text-sm"
                >
                  Register Now
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 w-11 h-11 bg-green-600 text-white rounded-full shadow-xl shadow-green-900/30 flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
          >
            <HiArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
