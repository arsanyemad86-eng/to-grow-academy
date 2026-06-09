import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import imgP1 from '../assets/images/projects/project-1.jpg'
import imgP2 from '../assets/images/projects/project-2.jpg'
import imgP3 from '../assets/images/projects/project-3.jpg'
import imgP4 from '../assets/images/projects/project-4.jpg'
import imgP5 from '../assets/images/projects/project-5.jpg'
import imgP6 from '../assets/images/projects/project-6.jpg'
import imgP7 from '../assets/images/projects/project-7.jpg'
import imgP8 from '../assets/images/projects/project-8.jpg'
import imgP9 from '../assets/images/projects/project-9.jpg'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'programming', label: 'Programming' },
  { id: 'design', label: 'Design' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'english', label: 'English' },
  { id: 'ai', label: 'AI' },
]

const projects = [
  { id: 1, category: 'programming', title: 'E-Commerce Website', student: 'Ahmed Hassan', type: 'link', image: imgP1, description: 'Full React e-commerce site with cart and payment.' },
  { id: 2, category: 'programming', title: 'Task Manager App', student: 'Omar Samir', type: 'link', image: imgP2, description: 'React app with authentication and real-time updates.' },
  { id: 3, category: 'design', title: 'Brand Identity', student: 'Sara Mohamed', type: 'image', image: imgP3, description: 'Complete brand identity for a local restaurant.' },
  { id: 4, category: 'design', title: 'Social Media Kit', student: 'Lina Khaled', type: 'image', image: imgP4, description: 'Full social media template kit for a fashion brand.' },
  { id: 5, category: 'marketing', title: 'Facebook Ad Campaign', student: 'Youssef Ali', type: 'image', image: imgP9, description: 'Paid campaign that achieved 300% ROAS.' },
  { id: 6, category: 'marketing', title: 'SEO Case Study', student: 'Nour Ahmed', type: 'video', image: imgP6, description: 'Ranking a local business from page 5 to page 1.' },
  { id: 7, category: 'english', title: 'Public Speech', student: 'Rana Hossam', type: 'video', image: imgP7, description: '5-minute presentation on climate change.' },
  { id: 8, category: 'english', title: 'Business Email Writing', student: 'Karim Tarek', type: 'link', image: imgP8, description: 'Professional business correspondence portfolio.' },
  { id: 9, category: 'ai', title: 'AI Content System', student: 'Mariam Saad', type: 'video', image: imgP5, description: 'Automated content creation pipeline using AI tools.' },
]

const typeStyles = {
  video: { label: '▶ Video', cls: 'bg-red-500 text-white' },
  image: { label: '🖼 Image', cls: 'bg-blue-500 text-white' },
  link: { label: '🔗 Live', cls: 'bg-violet-500 text-white' },
}

export default function Projects() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-28 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <motion.div
          
          className="text-center mb-12"
        >
          <span className="badge-green mb-5">Student Work</span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mt-5 mb-5 leading-tight">
            Real Projects by <span className="text-gradient">Real Students</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            See what our graduates built during and after their courses.
          </p>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === cat.id
                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const t = typeStyles[project.type]
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ delay: i * 0.06, duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="bg-white border border-gray-100 hover:border-green-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-green-50 hover:-translate-y-1.5 transition-all duration-200 group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${t.cls}`}>
                          {t.label}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-gray-400 font-medium mb-2 uppercase tracking-wider">{project.student}</p>
                      <h3 className="text-base font-bold text-gray-900 mb-1.5 tracking-tight">{project.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}


