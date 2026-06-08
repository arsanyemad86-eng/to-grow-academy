import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

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
        }, 30)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])
  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { icon: '🎓', target: 8, suffix: '+', label: 'Courses' },
  { icon: '👨‍🏫', target: 10, suffix: '+', label: 'Trainers' },
  { icon: '👥', target: 500, suffix: '+', label: 'Students' },
  { icon: '🏆', target: 95, suffix: '%', label: 'Success Rate' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } })
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Building the Next Generation<br />of <span className="text-green-600">Professionals</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            To Grow Academy is Egypt's leading educational platform, offering practical courses in technology, design, marketing, and language — taught by real industry experts.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl">🎯</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-500 leading-relaxed">To become the leading academy in Egypt and the Arab world, empowering every student with the tools to build a successful career.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl">🚀</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-500 leading-relaxed">Delivering high-quality, practical education that bridges the gap between learning and the real job market.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl">💡</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Why Choose Us</h3>
                  <p className="text-gray-500 leading-relaxed">Expert trainers, real projects, flexible schedules, and a community that supports you every step of the way.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-300 rounded-full translate-y-1/2 -translate-x-1/2 opacity-40" />
              <div className="relative z-10 text-center">
                <div className="text-8xl mb-6">🎓</div>
                <h3 className="text-2xl font-bold text-green-800 mb-3" style={{fontFamily: 'Playfair Display, serif'}}>To Grow Academy</h3>
                <p className="text-green-700 font-medium">Grow Your Skills. Build Your Future.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-green-50 rounded-2xl p-6 text-center hover:bg-green-100 transition-colors duration-300"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-green-700 mb-1">
                <Counter target={stat.target} suffix={stat.suffix} />
              </div>
              <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}