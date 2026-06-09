import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight, HiAcademicCap, HiPlay } from 'react-icons/hi'
import heroImg from '../assets/images/hero/hero-students.jpg'

const stats = [
  { value: '8+', label: 'Courses' },
  { value: '500+', label: 'Students' },
  { value: '10+', label: 'Trainers' },
  { value: '95%', label: 'Success Rate' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #052e16 0%, #14532d 30%, #166534 60%, #15803d 100%)' }}
    >
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-green-400 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.22, 0.1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-emerald-300 blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-green-500 blur-[100px] pointer-events-none"
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)', backgroundSize: '30px 30px' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-32 lg:py-24">

          {/* Left — Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-8"
            >
              <HiAcademicCap size={15} />
              <span>Egypt's Leading Tech & Creative Academy</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-black text-white leading-[1.03] mb-6"
              style={{ fontSize: 'clamp(3rem, 7.5vw, 5.5rem)' }}
            >
              Build Skills.<br />
              <span className="text-gradient-light">Build Your</span><br />
              Future.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="text-green-100/75 text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
            >
              Learn from industry experts, build real projects, and launch your career with Egypt's most practical educational academy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-white text-green-900 font-bold px-8 py-4 rounded-2xl shadow-2xl shadow-black/30 text-base hover:bg-green-50 transition-colors"
              >
                Register Now <HiArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#courses"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/20 transition-all text-base"
              >
                <HiPlay size={16} /> Browse Courses
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="grid grid-cols-4 gap-6"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.07, duration: 0.4 }}
                  className="text-center"
                >
                  <div className="font-black text-white text-2xl md:text-3xl leading-none tracking-tight">{stat.value}</div>
                  <div className="text-green-300/60 text-xs mt-1.5 font-medium tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — Hero image with floating badges */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative"
          >
            {/* Glow behind image */}
            <div className="absolute -inset-6 bg-green-400/15 rounded-[40px] blur-3xl" />

            <img
              src={heroImg}
              alt="Students at To Grow Academy"
              className="relative w-full h-[540px] object-cover rounded-3xl shadow-2xl shadow-black/40"
            />

            {/* Floating badge — bottom left */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-5 py-4 shadow-2xl shadow-black/20"
            >
              <p className="text-xs text-gray-400 font-medium mb-0.5">Proud Graduates</p>
              <p className="font-black text-gray-900 text-lg leading-none">500+ Students</p>
            </motion.div>

            {/* Floating badge — top right */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              className="absolute -top-5 -right-5 bg-green-600 text-white rounded-2xl px-5 py-4 shadow-xl shadow-green-900/40"
            >
              <p className="text-xs font-medium opacity-75 mb-0.5">Success Rate</p>
              <p className="font-black text-2xl leading-none">95%</p>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 64L1440 64L1440 32C1200 64 900 0 720 18C540 36 240 64 0 32L0 64Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
