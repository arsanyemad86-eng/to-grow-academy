import React from 'react'
import { motion } from 'framer-motion'
import imgFrontend from '../assets/images/courses/frontend.jpg'
import imgDesign from '../assets/images/courses/design.jpg'
import imgMarketing from '../assets/images/courses/marketing.jpg'
import imgEnglish from '../assets/images/courses/english.jpg'
import imgEnglishAdv from '../assets/images/courses/english-adv.jpg'
import imgReels from '../assets/images/courses/reels.jpg'
import imgAi from '../assets/images/courses/ai.jpg'
import imgProgramming from '../assets/images/courses/programming.jpg'

const courses = [
  { icon: '💻', title: 'Front-End Development', desc: 'Master HTML, CSS, JavaScript, and React to build modern websites.', duration: '3 Months', level: 'Beginner → Pro', color: 'from-blue-50 to-blue-100', accent: 'text-blue-600', badge: 'bg-blue-100 text-blue-700', image: imgFrontend },
  { icon: '🎨', title: 'Graphic Design', desc: 'Learn professional design tools and create stunning visual content.', duration: '2 Months', level: 'All Levels', color: 'from-purple-50 to-purple-100', accent: 'text-purple-600', badge: 'bg-purple-100 text-purple-700', image: imgDesign },
  { icon: '📈', title: 'Digital Marketing', desc: 'Master SEO, social media, and paid ads to grow any business online.', duration: '2 Months', level: 'All Levels', color: 'from-orange-50 to-orange-100', accent: 'text-orange-600', badge: 'bg-orange-100 text-orange-700', image: imgMarketing },
  { icon: '🗣️', title: 'English Language', desc: 'Build confidence in speaking, writing, and professional communication.', duration: '3 Months', level: 'All Levels', color: 'from-green-50 to-green-100', accent: 'text-green-600', badge: 'bg-green-100 text-green-700', image: imgEnglish },
  { icon: '🇬🇧', title: 'Advanced English', desc: 'Take your English to a professional and academic level.', duration: '2 Months', level: 'Intermediate+', color: 'from-teal-50 to-teal-100', accent: 'text-teal-600', badge: 'bg-teal-100 text-teal-700', image: imgEnglishAdv },
  { icon: '🎬', title: 'Reels Maker', desc: 'Create viral short-form video content for Instagram and TikTok.', duration: '6 Weeks', level: 'Beginner', color: 'from-pink-50 to-pink-100', accent: 'text-pink-600', badge: 'bg-pink-100 text-pink-700', image: imgReels },
  { icon: '🤖', title: 'Artificial Intelligence', desc: 'Understand and use AI tools to boost your productivity and career.', duration: '2 Months', level: 'All Levels', color: 'from-indigo-50 to-indigo-100', accent: 'text-indigo-600', badge: 'bg-indigo-100 text-indigo-700', image: imgAi },
  { icon: '⌨️', title: 'Programming', desc: 'Learn programming fundamentals and problem-solving from scratch.', duration: '3 Months', level: 'Beginner', color: 'from-gray-50 to-gray-100', accent: 'text-gray-700', badge: 'bg-gray-200 text-gray-700', image: imgProgramming },
]

export default function Courses() {
  return (
    <section id="courses" className="py-24 px-6 md:px-12 lg:px-20 bg-green-50">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-200 text-green-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Courses
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
            Learn Skills That <span className="text-green-600">Matter</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Practical, industry-focused courses designed to get you job-ready fast.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <img src={course.image} alt={course.title} className="w-full h-36 object-cover rounded-xl mb-4" />
              <div className={`w-14 h-14 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center text-2xl mb-4`}>
                {course.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{course.desc}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-gray-400 font-medium">⏱ {course.duration}</span>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${course.badge}`}>{course.level}</span>
              </div>
              <button className="w-full py-2.5 border-2 border-green-200 text-green-700 rounded-xl text-sm font-semibold hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300">
                View Details
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}