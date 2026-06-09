import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  { name: 'Mohamed Ali', course: 'Front-End Development', rating: 5, comment: 'To Grow Academy changed my life. I went from zero to landing my first freelance client in just 3 months. The trainer was incredibly supportive and the curriculum was very practical.', emoji: '👨‍💻' },
  { name: 'Nada Sherif', course: 'Graphic Design', rating: 5, comment: 'The best decision I ever made. I now work as a full-time designer at a marketing agency. The projects we did during the course built my entire portfolio.', emoji: '👩‍🎨' },
  { name: 'Youssef Magdy', course: 'Digital Marketing', rating: 5, comment: 'Within 2 months I understood SEO, paid ads, and social media strategy better than people who studied marketing for 4 years. Highly recommend!', emoji: '👨‍💼' },
  { name: 'Rana Hossam', course: 'English Language', rating: 5, comment: 'My confidence in speaking English improved dramatically. The instructor made every session engaging and helped me pass my IELTS exam on the first try.', emoji: '👩‍🎓' },
  { name: 'Khaled Mostafa', course: 'Artificial Intelligence', rating: 5, comment: 'I had no background in AI but the course explained everything from scratch. Now I use AI tools daily to boost my productivity and I even teach others.', emoji: '🧑‍🔬' },
  { name: 'Mariam Tarek', course: 'Reels Maker', rating: 5, comment: 'My Instagram went from 200 to 15,000 followers in 2 months after taking this course. The content strategy and video editing skills I learned were game-changers.', emoji: '👩‍🎬' },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const next = () => setActive((p) => (p + 1) % testimonials.length)
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-28 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <motion.div
          
          className="text-center mb-16"
        >
          <span className="badge-green mb-5">Student Reviews</span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mt-5 mb-5 leading-tight">
            What Our <span className="text-gradient">Students Say</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Real results from real students who transformed their careers.
          </p>
        </motion.div>

        {/* Main testimonial card */}
        <div className="max-w-3xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -22, scale: 0.98 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-gray-100 rounded-3xl p-10 text-center relative shadow-xl shadow-gray-100"
            >
              {/* Decorative quote mark */}
              <div className="text-[80px] leading-none text-green-100 font-black select-none absolute top-5 left-8 pointer-events-none">
                "
              </div>

              <div className="text-5xl mb-5 relative z-10">{testimonials[active].emoji}</div>

              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10">
                "{testimonials[active].comment}"
              </p>

              <div>
                <p className="font-black text-gray-900 text-xl tracking-tight">{testimonials[active].name}</p>
                <p className="text-green-600 font-semibold text-sm mt-1">{testimonials[active].course}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-200 font-bold shadow-sm"
            >
              ←
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'bg-green-600 w-8' : 'bg-gray-200 hover:bg-gray-300 w-2'}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-200 font-bold shadow-sm"
            >
              →
            </button>
          </div>
        </div>

        {/* Selector grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.name}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.05 }}
              className={`p-4 rounded-2xl text-center transition-all duration-200 ${
                i === active
                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                  : 'bg-white border border-gray-100 hover:border-green-200 text-gray-700'
              }`}
            >
              <div className="text-2xl mb-2">{t.emoji}</div>
              <p className={`text-[11px] font-bold leading-tight ${i === active ? 'text-white' : 'text-gray-700'}`}>
                {t.name.split(' ')[0]}
              </p>
            </motion.button>
          ))}
        </div>

      </div>
    </section>
  )
}


