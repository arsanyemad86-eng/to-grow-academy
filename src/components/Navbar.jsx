import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiArrowUp } from 'react-icons/hi'

const links = [
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
  const [atTop, setAtTop] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setAtTop(y < 80)
      setScrolled(y > 80)
      setShowTop(y > 300)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = location.pathname === '/' || location.pathname === ''
  const onLight = !atTop

  return (
    <>
    <header
      className={
        'fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ' +
        (scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-sm'
          : atTop && isHome
          ? 'bg-transparent'
          : 'bg-white shadow-sm')
      }
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-green-600 rounded-xl flex items-center justify-center text-white font-black text-sm">
              TG
            </div>
            <div>
              <p className={'font-bold text-base leading-none ' + (onLight ? 'text-gray-900' : 'text-white')}>
                To Grow
              </p>
              <p className={'text-xs font-medium tracking-widest ' + (onLight ? 'text-gray-400' : 'text-white/60')}>
                ACADEMY
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={isHome ? link.href : '/' + link.href}
                className={
                  'px-3 py-2 rounded-lg text-sm font-medium transition-colors ' +
                  (onLight
                    ? 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10')
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={isHome ? '#contact' : '/#contact'}
              className="hidden md:inline-flex items-center gap-2 bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-green-700 transition-colors"
            >
              Register Now
            </a>
            <button
              onClick={() => setOpen(!open)}
              className={'md:hidden p-2 rounded-lg ' + (onLight ? 'text-gray-700' : 'text-white')}
            >
              {open ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={isHome ? link.href : '/' + link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-green-50 hover:text-green-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={isHome ? '#contact' : '/#contact'}
                onClick={() => setOpen(false)}
                className="mt-2 bg-green-600 text-white font-semibold px-4 py-3 rounded-xl text-center hover:bg-green-700 transition-colors"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-[998] w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg shadow-green-900/30 flex items-center justify-center transition-colors"
          >
            <HiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}