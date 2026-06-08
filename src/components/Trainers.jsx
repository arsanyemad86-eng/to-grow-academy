import React from 'react'
import { motion } from 'framer-motion'
import trainer1 from '../assets/images/trainers/trainer-1.jpg'
import trainer2 from '../assets/images/trainers/trainer-2.jpg'
import trainer3 from '../assets/images/trainers/trainer-3.jpg'
import trainer4 from '../assets/images/trainers/trainer-4.jpg'
import trainer5 from '../assets/images/trainers/trainer-5.jpg'
import trainer6 from '../assets/images/trainers/trainer-6.jpg'

const trainers = [
  { name: 'Ahmed Hassan', role: 'Front-End Developer', specialty: 'React & JavaScript', photo: trainer1, courses: 2 },
  { name: 'Sara Mohamed', role: 'Graphic Designer', specialty: 'Adobe Suite & Branding', photo: trainer2, courses: 1 },
  { name: 'Omar Khaled', role: 'Digital Marketer', specialty: 'SEO & Paid Ads', photo: trainer3, courses: 1 },
  { name: 'Nour Ahmed', role: 'English Instructor', specialty: 'IELTS & Business English', photo: trainer4, courses: 2 },
  { name: 'Karim Samir', role: 'AI Specialist', specialty: 'Machine Learning & Tools', photo: trainer5, courses: 1 },
  { name: 'Hana Tarek', role: 'Content Creator', specialty: 'Reels & Video Editing', photo: trainer6, courses: 1 },
]

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Trainers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
            Learn from <span className="text-green-600">Industry Experts</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Our trainers are working professionals with real-world experience in their fields.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-green-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <img src={trainer.photo} alt={trainer.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-5 shadow-md" />
              <h3 className="text-xl font-bold text-gray-900 mb-1">{trainer.name}</h3>
              <p className="text-green-600 font-semibold text-sm mb-2">{trainer.role}</p>
              <p className="text-gray-500 text-sm mb-4">{trainer.specialty}</p>
              <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
                {trainer.courses} Course{trainer.courses > 1 ? 's' : ''}
              </div>
              <div className="flex justify-center gap-3">
                {['facebook', 'instagram', 'linkedin'].map((platform) => (
                  <a key={platform} href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-green-600 hover:shadow-md transition-all duration-200 text-sm font-bold">
                    {platform === 'facebook' ? 'f' : platform === 'instagram' ? 'in' : 'li'}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}