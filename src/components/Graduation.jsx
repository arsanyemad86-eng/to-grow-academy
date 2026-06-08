import React, { useState } from 'react'
import { motion } from 'framer-motion'

// Graduate images
import grad1 from '../assets/images/graduates/grad-1.jpg'
import grad2 from '../assets/images/graduates/grad-2.jpg'
import grad3 from '../assets/images/graduates/grad-3.jpg'
import grad4 from '../assets/images/graduates/grad-4.jpg'
import grad5 from '../assets/images/graduates/grad-5.jpg'
import grad6 from '../assets/images/graduates/grad-6.jpg'
import grad7 from '../assets/images/graduates/grad-7.jpg'
import grad8 from '../assets/images/graduates/grad-8.jpg'
import grad9 from '../assets/images/graduates/grad-9.jpg'
import grad10 from '../assets/images/graduates/grad-10.jpg'
import grad11 from '../assets/images/graduates/grad-11.jpg'
import grad12 from '../assets/images/graduates/grad-12.jpg'

const batches = [
  { id: 1, name: 'Batch 01 — 2024', count: 45, emoji: '🎓', highlights: ['Front-End', 'Design', 'Marketing'] },
  { id: 2, name: 'Batch 02 — 2024', count: 60, emoji: '🏆', highlights: ['English', 'AI', 'Programming'] },
  { id: 3, name: 'Batch 03 — 2025', count: 78, emoji: '🌟', highlights: ['All Courses'] },
]

const graduates = [
  { img: grad1,  name: 'Sara Ahmed',     course: 'Front-End' },
  { img: grad2,  name: 'Mohamed Ali',    course: 'Design' },
  { img: grad3,  name: 'Nour Hassan',    course: 'Marketing' },
  { img: grad4,  name: 'Omar Khaled',    course: 'Front-End' },
  { img: grad5,  name: 'Lina Youssef',   course: 'AI' },
  { img: grad6,  name: 'Ahmed Sami',     course: 'English' },
  { img: grad7,  name: 'Yasmin Tarek',   course: 'Design' },
  { img: grad8,  name: 'Karim Nasser',   course: 'Programming' },
  { img: grad9,  name: 'Dina Ramzy',     course: 'Marketing' },
  { img: grad10, name: 'Tamer Ashraf',   course: 'Front-End' },
  { img: grad11, name: 'Rania Fathy',    course: 'English' },
  { img: grad12, name: 'Youssef Magdy',  course: 'AI' },
]

export default function Graduation() {
  const [activeBatch, setActiveBatch] = useState(0)

  return (
    <section id="graduation" className="py-24 px-6 md:px-12 lg:px-20 bg-green-50">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-200 text-green-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Graduation Ceremonies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
            Celebrating Our <span className="text-green-600">Graduates</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Every graduation is a milestone. Here we celebrate the journey of our students.
          </p>
        </motion.div>

        {/* Batch Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {batches.map((batch, i) => (
            <button
              key={batch.id}
              onClick={() => setActiveBatch(i)}
              className={`px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 ${activeBatch === i ? 'bg-green-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-green-100'}`}
            >
              {batch.emoji} {batch.name}
              <span className="ml-2 text-xs opacity-70">{batch.count} graduates</span>
            </button>
          ))}
        </div>

        {/* Gallery */}
        <motion.div
          key={activeBatch}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* Stats Banner */}
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 mb-8 text-white text-center">
            <div className="text-6xl mb-4">{batches[activeBatch].emoji}</div>
            <h3 className="text-2xl font-bold mb-2">{batches[activeBatch].name}</h3>
            <p className="text-green-200 mb-4">{batches[activeBatch].count} proud graduates</p>
            <div className="flex flex-wrap justify-center gap-3">
              {batches[activeBatch].highlights.map((h) => (
                <span key={h} className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium">
                  {h}
                </span>
              ))}
            </div>
          </div>

          {/* Graduates Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {graduates.map((grad, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={grad.img}
                    alt={grad.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="font-semibold text-gray-800 text-sm truncate">{grad.name}</p>
                  <p className="text-green-600 text-xs font-medium mt-0.5">{grad.course}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}