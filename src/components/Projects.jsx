import React, { useState } from 'react'
import { motion } from 'framer-motion'
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
  { id: 'all', label: 'All Projects' },
  { id: 'programming', label: '💻 Programming' },
  { id: 'design', label: '🎨 Design' },
  { id: 'marketing', label: '📈 Marketing' },
  { id: 'english', label: '🗣️ English' },
  { id: 'ai', label: '🤖 AI' },
]

const projects = [
  { id: 1, category: 'programming', title: 'E-Commerce Website', student: 'Ahmed Hassan', type: 'link', image: imgP1, description: 'Full React e-commerce site with cart and payment.' },
  { id: 2, category: 'programming', title: 'Task Manager App', student: 'Omar Samir', type: 'link', image: imgP2, description: 'React app with authentication and real-time updates.' },
  { id: 3, category: 'design', title: 'Brand Identity', student: 'Sara Mohamed', type: 'image', image: imgP3, description: 'Complete brand identity for a local restaurant.' },
  { id: 4, category: 'design', title: 'Social Media Kit', student: 'Lina Khaled', type: 'image', image: imgP4, description: 'Full social media template kit for a fashion brand.' },
  { id: 5, category: 'marketing', title: 'Facebook Ad Campaign', student: 'Youssef Ali', type: 'image', image: imgP5, description: 'Paid campaign that achieved 300% ROAS.' },
  { id: 6, category: 'marketing', title: 'SEO Case Study', student: 'Nour Ahmed', type: 'video', image: imgP6, description: 'Ranking a local business from page 5 to page 1.' },
  { id: 7, category: 'english', title: 'Public Speech', student: 'Rana Hossam', type: 'video', image: imgP7, description: '5-minute presentation on climate change.' },
  { id: 8, category: 'english', title: 'Business Email Writing', student: 'Karim Tarek', type: 'link', image: imgP8, description: 'Professional business correspondence portfolio.' },
  { id: 9, category: 'ai', title: 'AI Content System', student: 'Mariam Saad', type: 'video', image: imgP9, description: 'Automated content creation pipeline using AI tools.' },
]

export default function Projects() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Student Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
            Real Projects by <span className="text-green-600">Real Students</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            See what our graduates built during and after their courses.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${active === cat.id ? 'bg-green-600 text-white shadow-md' : 'bg-green-50 text-gray-600 hover:bg-green-100'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    project.type === 'video' ? 'bg-red-500 text-white' :
                    project.type === 'image' ? 'bg-blue-500 text-white' :
                    'bg-purple-500 text-white'
                  }`}>
                    {project.type === 'video' ? '▶ Video' : project.type === 'image' ? '🖼 Image' : '🔗 Live'}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400 font-medium">{project.student}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{project.title}</h3>
                <p className="text-gray-500 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}