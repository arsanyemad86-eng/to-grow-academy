import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import vid1 from '../assets/images/graduation/IMG_0607.mp4'
import vid2 from '../assets/images/graduation/IMG_3702.mp4'
import vid3 from '../assets/images/graduation/IMG_4073.mp4'
import vid4 from '../assets/images/graduation/IMG_4085.mp4'
import vid5 from '../assets/images/graduation/IMG_4301.mp4'
import vid6 from '../assets/images/graduation/IMG_4422.mp4'
import vid7 from '../assets/images/graduation/IMG_4543.mp4'
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
  {
    id: 1, name: 'Batch 01', year: '2024', count: 45, emoji: '🎓',
    highlights: ['Front-End', 'Design', 'Marketing'],
    videos: [vid1, vid2, vid3],
    photos: [grad1, grad2, grad3, grad4],
  },
  {
    id: 2, name: 'Batch 02', year: '2025', count: 60, emoji: '🏆',
    highlights: ['English', 'AI', 'Programming'],
    videos: [vid4, vid5],
    photos: [grad5, grad6, grad7, grad8],
  },
  {
    id: 3, name: 'Batch 03', year: '2026', count: 78, emoji: '🌟',
    highlights: ['All Courses'],
    videos: [vid6, vid7],
    photos: [grad9, grad10, grad11, grad12],
  },
]

export default function Graduation() {
  const [activeBatch, setActiveBatch] = useState(0)
  const [activeTab, setActiveTab] = useState('photos')
  const batch = batches[activeBatch]

  return (
    <section id="graduation" className="py-28 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="badge-green mb-5">Graduation Ceremonies</span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mt-5 mb-5 leading-tight">
            Celebrating Our <span className="text-gradient">Graduates</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Every graduation is a milestone. Here we celebrate the journey of our students.
          </p>
        </motion.div>

        {/* Batch selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {batches.map((b, i) => (
            <button
              key={b.id}
              onClick={() => { setActiveBatch(i); setActiveTab('photos') }}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-250 ${
                activeBatch === i
                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                  : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700'
              }`}
            >
              {b.emoji} {b.name} — {b.year}
              <span className="ml-2 text-xs opacity-60">{b.count} grads</span>
            </button>
          ))}
        </div>

        {/* Stats banner */}
        <div
          className="rounded-2xl p-8 mb-8 text-white text-center"
          style={{ background: 'linear-gradient(135deg, #166534 0%, #15803d 50%, #16a34a 100%)' }}
        >
          <div className="text-5xl mb-3">{batch.emoji}</div>
          <h3 className="text-2xl font-black mb-1 tracking-tight">{batch.name} — {batch.year}</h3>
          <p className="text-green-200 text-sm mb-5">{batch.count} proud graduates</p>
          <div className="flex flex-wrap justify-center gap-2">
            {batch.highlights.map((h) => (
              <span key={h} className="bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-sm font-semibold">
                {h}
              </span>
            ))}
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center gap-3 mb-8">
          {[
            { key: 'photos', label: `📸 Photos (${batch.photos.length})` },
            { key: 'videos', label: `🎬 Videos (${batch.videos.length})` },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeTab === key
                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                  : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'photos' ? (
            <motion.div
              key="photos"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              {batch.photos.map((photo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                  className="rounded-2xl overflow-hidden aspect-square border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <img
                    src={photo}
                    alt={`Graduation photo ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="videos"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {batch.videos.map((vid, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08, duration: 0.38 }}
                  className="bg-white border border-gray-100 hover:border-green-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <video
                    src={vid}
                    controls
                    className="w-full h-52 object-cover bg-gray-900"
                    preload="metadata"
                  />
                  <div className="p-4">
                    <p className="text-gray-900 font-bold text-sm">Ceremony Highlight {i + 1}</p>
                    <p className="text-green-600 text-xs font-medium mt-0.5">{batch.name} — {batch.year}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
