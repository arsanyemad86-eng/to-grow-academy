import React, { useState } from 'react'
import { motion } from 'framer-motion'

const batches = [
  { id: 1, name: 'Batch 01 — 2024', count: 45, emoji: '🎓', highlights: ['Front-End', 'Design', 'Marketing'] },
  { id: 2, name: 'Batch 02 — 2024', count: 60, emoji: '🏆', highlights: ['English', 'AI', 'Programming'] },
  { id: 3, name: 'Batch 03 — 2025', count: 78, emoji: '🌟', highlights: ['All Courses'] },
]

const photos = ['🎉', '📸', '🎓', '👨‍🎓', '👩‍🎓', '🏅', '🎊', '🥇', '📜']

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

          {/* Photo Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.08 }}
                className="bg-white rounded-2xl aspect-square flex items-center justify-center text-5xl cursor-pointer hover:shadow-lg transition-all duration-300"
              >
                {photo}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}