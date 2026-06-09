import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight, HiAcademicCap } from 'react-icons/hi'
import imgFrontend from '../assets/images/courses/frontend.jpg'
import imgDesign from '../assets/images/courses/design.jpg'
import imgMarketing from '../assets/images/courses/marketing.jpg'
import imgEnglish from '../assets/images/courses/english.jpg'
import imgEnglishAdv from '../assets/images/courses/english-adv.jpg'
import imgReels from '../assets/images/courses/reels.jpg'
import imgAi from '../assets/images/courses/ai.jpg'
import imgProgramming from '../assets/images/courses/programming.jpg'

const courses = [
  { icon: '💻', title: 'Front-End Development', desc: 'Master HTML, CSS, JavaScript, and React to build modern responsive websites from scratch.', duration: '3 Months', level: 'Beginner → Pro', ribbon: 'Front-End', image: imgFrontend, price: 1500 },
  { icon: '🎨', title: 'Graphic Design', desc: 'Learn professional design tools and create stunning visual content for brands and social media.', duration: '2 Months', level: 'All Levels', ribbon: 'Design', image: imgDesign, price: 1200 },
  { icon: '📈', title: 'Digital Marketing', desc: 'Master SEO, social media, and paid ads to grow any business online effectively.', duration: '2 Months', level: 'All Levels', ribbon: 'Marketing', image: imgMarketing, price: 1000 },
  { icon: '🗣️', title: 'English Language', desc: 'Build confidence in speaking, writing, and professional communication in English.', duration: '3 Months', level: 'All Levels', ribbon: 'English', image: imgEnglish, price: 900 },
  { icon: '🇬🇧', title: 'Advanced English', desc: 'Take your English to a professional and academic level with advanced techniques.', duration: '2 Months', level: 'Intermediate+', ribbon: 'Adv. English', image: imgEnglishAdv, price: 1100 },
  { icon: '🎬', title: 'Reels Maker', desc: 'Create viral short-form video content for Instagram and TikTok that grows your audience.', duration: '6 Weeks', level: 'Beginner', ribbon: 'Reels', image: imgReels, price: 800 },
  { icon: '🤖', title: 'Artificial Intelligence', desc: 'Understand and use AI tools to boost your productivity, creativity, and career.', duration: '2 Months', level: 'All Levels', ribbon: 'AI', image: imgAi, price: 1300 },
  { icon: '⌨️', title: 'Programming', desc: 'Learn programming fundamentals and problem-solving from scratch with Python.', duration: '3 Months', level: 'Beginner', ribbon: 'Programming', image: imgProgramming, price: 1200 },
]

function CourseCard({ course, courseIndex }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: courseIndex * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer group"
    >
      {/* Background image with zoom on hover */}
      <img
        src={course.image}
        alt={course.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Green ribbon badge */}
      <div className="absolute top-4 left-0 z-20">
        <span className="bg-green-600 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-r-full shadow-lg shadow-green-900/40 pr-4">
          {course.ribbon}
        </span>
      </div>

      {/* Default: gradient overlay, title at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 flex items-end p-5 transition-opacity duration-300 group-hover:opacity-0">
        <div>
          <p className="text-white/50 text-[10px] font-semibold uppercase tracking-widest mb-1">{course.duration}</p>
          <h3 className="text-white font-bold text-sm leading-snug">{course.title}</h3>
        </div>
      </div>

      {/* Hover: centered dark overlay with info + price + CTA */}
      <div className="absolute inset-0 bg-black/88 z-10 flex flex-col justify-center items-center text-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white font-bold text-base leading-tight mb-2">{course.title}</h3>
        <p className="text-gray-300 text-xs leading-relaxed mb-4 line-clamp-3">{course.desc}</p>
        <div className="mb-5">
          <span className="text-green-400 font-black text-2xl">{course.price.toLocaleString()}</span>
          <span className="text-green-400/60 text-sm font-semibold ml-1">EGP</span>
        </div>
        <Link
          to={`/course/${courseIndex}`}
          className="inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-500 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors duration-200 shadow-xl shadow-green-900/50"
          onClick={(e) => e.stopPropagation()}
        >
          View Details <HiArrowRight size={11} />
        </Link>
      </div>
    </motion.div>
  )
}

export default function Courses() {
  return (
    <section id="courses" className="py-28 px-6 md:px-12 lg:px-20 bg-gray-950">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="badge-green-dark mb-6">
            <HiAcademicCap size={14} /> Our Courses
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mt-6 mb-5 leading-tight">
            Skills That <span className="text-green-500">Pay Off</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Practical, industry-focused courses designed to get you job-ready fast.
          </p>
        </motion.div>

        {/* Row 1: Featured large card (Front-End) left + 2 stacked cards right */}
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 lg:h-[520px] mb-4">
          {/* Featured large card — spans 2 cols & 2 rows on desktop */}
          <div className="col-span-2 h-64 lg:col-span-2 lg:row-span-2 lg:h-auto">
            <CourseCard course={courses[0]} courseIndex={0} />
          </div>

          {/* Stacked card 1 — Design */}
          <div className="h-44 lg:h-auto">
            <CourseCard course={courses[1]} courseIndex={1} />
          </div>

          {/* Stacked card 2 — Marketing */}
          <div className="h-44 lg:h-auto">
            <CourseCard course={courses[2]} courseIndex={2} />
          </div>
        </div>

        {/* Row 2: 5 equal cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {courses.slice(3).map((course, i) => (
            <div key={course.title} className="h-56">
              <CourseCard course={course} courseIndex={i + 3} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
