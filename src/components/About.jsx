import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import certImg from '../assets/images/certificate.jpeg'

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0
        const step = target / 60
        const timer = setInterval(() => {
          start += step
          if (start >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(start))
        }, 28)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])
  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { target: 8, suffix: '+', label: 'Courses', desc: 'Industry-focused tracks' },
  { target: 10, suffix: '+', label: 'Trainers', desc: 'Working professionals' },
  { target: 500, suffix: '+', label: 'Students', desc: 'Graduates & counting' },
  { target: 95, suffix: '%', label: 'Success Rate', desc: 'Career placement' },
]

const pillars = [
  { icon: '🎯', title: 'Our Vision', body: 'To become the leading academy in Egypt and the Arab world, empowering every student with the tools to build a successful career.' },
  { icon: '🚀', title: 'Our Mission', body: 'Delivering high-quality, practical education that bridges the gap between learning and the real job market.' },
  { icon: '💡', title: 'Why Choose Us', body: 'Expert trainers, real projects, flexible schedules, and a community that supports you every step of the way.' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="badge-green mb-5">About Us</span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mt-5 mb-6 leading-tight">
            Building the Next<br />Generation of{' '}
            <span className="text-gradient">Professionals</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            To Grow Academy is Egypt's leading educational platform, offering practical courses in technology, design, marketing, and language — taught by real industry experts.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-green-100 group-hover:bg-green-200 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl transition-colors duration-300">
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100">
              <img src={certImg} alt="To Grow Academy Certificate" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl pointer-events-none" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-green-600 text-white rounded-2xl px-5 py-3.5 shadow-xl shadow-green-900/25">
              <p className="text-xs font-medium opacity-75">Accredited</p>
              <p className="font-black text-base leading-tight">Certificate</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white border border-gray-100 hover:border-green-200 rounded-2xl p-7 text-center group hover:shadow-lg hover:shadow-green-50 transition-all duration-300"
            >
              <div className="text-4xl font-black text-green-600 mb-2 leading-none tracking-tight">
                <Counter target={stat.target} suffix={stat.suffix} />
              </div>
              <div className="font-bold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-gray-400 text-xs">{stat.desc}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}