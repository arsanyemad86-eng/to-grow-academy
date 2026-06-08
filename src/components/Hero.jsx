import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight, HiAcademicCap } from 'react-icons/hi'
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
      style={{background: 'linear-gradient(135deg, #166534 0%, #15803d 40%, #16a34a 100%)'}}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      </div>

      <div className="container-custom mx-auto section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-8">
            <HiAcademicCap size={16} />
            <span>Your Path to Professional Growth</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-black text-white leading-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Start Your Future
            <br />
            <span className="text-green-300">with To Grow</span>
            <br />
            Academy
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-green-100 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Learn from industry experts, build real skills, and launch your professional career with Egypt's leading tech and creative academy.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap gap-4 mb-16">
            <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 bg-white text-green-800 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-base">
              Register Now <HiArrowRight size={18} />
            </motion.a>
            <motion.a href="#courses" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/20 transition-all duration-300 text-base">
              View Courses
            </motion.a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center">
                <div className="font-black text-white text-3xl">{stat.value}</div>
                <div className="text-green-200 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="hidden lg:block">
          <img src={heroImg} alt="Students" className="w-full h-[500px] object-cover rounded-3xl shadow-2xl opacity-90" />
        </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 900 0 720 20C540 40 240 80 0 40L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}