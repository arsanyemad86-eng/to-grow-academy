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

  const next = () => setActive((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Student Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
            What Our <span className="text-green-600">Students Say</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Real results from real students who transformed their careers.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="max-w-3xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-green-50 rounded-3xl p-10 text-center relative"
            >
              <div className="text-6xl mb-6">{testimonials[active].emoji}</div>
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[active].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                "{testimonials[active].comment}"
              </p>
              <div>
                <p className="font-bold text-gray-900 text-xl">{testimonials[active].name}</p>
                <p className="text-green-600 font-medium">{testimonials[active].course}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button onClick={prev} className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 hover:bg-green-600 hover:text-white transition-all duration-300 text-xl font-bold">
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} className={`w-3 h-3 rounded-full transition-all duration-300 ${i === active ? 'bg-green-600 w-8' : 'bg-green-200'}`} />
              ))}
            </div>
            <button onClick={next} className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 hover:bg-green-600 hover:text-white transition-all duration-300 text-xl font-bold">
              →
            </button>
          </div>
        </div>

        {/* Mini Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.name}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.05 }}
              className={`p-4 rounded-2xl text-center transition-all duration-300 ${i === active ? 'bg-green-600 text-white shadow-lg' : 'bg-green-50 hover:bg-green-100'}`}
            >
              <div className="text-2xl mb-2">{t.emoji}</div>
              <p className={`text-xs font-bold ${i === active ? 'text-white' : 'text-gray-700'}`}>{t.name}</p>
            </motion.button>
          ))}
        </div>

      </div>
    </section>
  )
}