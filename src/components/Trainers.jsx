import React from 'react'
import { motion } from 'framer-motion'
import trainer1 from '../assets/images/trainers/trainer-1.jpg'
import trainer2 from '../assets/images/trainers/trainer-2.jpg'
import trainer3 from '../assets/images/trainers/trainer-3.jpg'
import trainer4 from '../assets/images/trainers/trainer-4.jpg'
import trainer5 from '../assets/images/trainers/trainer-5.jpg'
import trainer6 from '../assets/images/trainers/trainer-6.jpg'

const trainers = [
  { name: 'Ahmed Hassan', role: 'Front-End Developer', specialty: 'React & JavaScript', photo: trainer1, courses: 2, tag: 'Web Dev' },
  { name: 'Sara Mohamed', role: 'Graphic Designer', specialty: 'Adobe Suite & Branding', photo: trainer2, courses: 1, tag: 'Design' },
  { name: 'Omar Khaled', role: 'Digital Marketer', specialty: 'SEO & Paid Ads', photo: trainer3, courses: 1, tag: 'Marketing' },
  { name: 'Nour Ahmed', role: 'English Instructor', specialty: 'IELTS & Business English', photo: trainer4, courses: 2, tag: 'English' },
  { name: 'Karim Samir', role: 'AI Specialist', specialty: 'Machine Learning & Tools', photo: trainer5, courses: 1, tag: 'AI' },
  { name: 'Hana Tarek', role: 'Content Creator', specialty: 'Reels & Video Editing', photo: trainer6, courses: 1, tag: 'Reels' },
]

export default function Trainers() {
  return (
    <section id="trainers" className="py-28 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="badge-green mb-5">Our Trainers</span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mt-5 mb-5 leading-tight">
            Learn from <span className="text-gradient">Industry Experts</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Our trainers are working professionals with real-world experience in their fields.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-100 hover:border-green-200 rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-green-50 transition-all duration-300 group"
            >
              <div className="relative inline-block mb-5">
                <img
                  src={trainer.photo}
                  alt={trainer.name}
                  className="w-20 h-20 rounded-full object-cover shadow-md ring-4 ring-white"
                />
                <span className="absolute -bottom-1 -right-1 bg-green-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-md">
                  {trainer.tag}
                </span>
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-1 tracking-tight">{trainer.name}</h3>
              <p className="text-green-600 font-semibold text-sm mb-2">{trainer.role}</p>
              <p className="text-gray-400 text-sm mb-5">{trainer.specialty}</p>
              <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full border border-green-100">
                {trainer.courses} Course{trainer.courses > 1 ? 's' : ''}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
