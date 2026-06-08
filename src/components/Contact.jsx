import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'

const contactInfo = [
  { icon: '📞', label: 'Phone', value: '+20 100 000 0000' },
  { icon: '📧', label: 'Email', value: 'info@twogrow.academy' },
  { icon: '📍', label: 'Address', value: 'Alexandria, Egypt' },
  { icon: '⏰', label: 'Working Hours', value: 'Sat – Thu, 9 AM – 9 PM' },
]

const socials = [
  { label: 'Facebook', icon: FaFacebookF, color: 'bg-blue-600', href: '#' },
  { label: 'Instagram', icon: FaInstagram, color: 'bg-pink-500', href: '#' },
  { label: 'TikTok', icon: FaTiktok, color: 'bg-black', href: '#' },
  { label: 'WhatsApp', icon: FaWhatsapp, color: 'bg-green-500', href: '#' },
]

const reasons = [
  { icon: '🎓', text: 'Certified instructors with real industry experience' },
  { icon: '🚀', text: 'Practical projects you can add to your portfolio' },
  { icon: '🤝', text: 'Lifetime access to our graduate community' },
  { icon: '📜', text: 'Accredited certificate upon completion' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
            Start Your Journey <span className="text-green-600">Today</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Have questions? We are here to help you choose the right course.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactInfo.map((item) => (
              <div key={item.label} className="flex gap-4 items-center bg-green-50 rounded-2xl px-6 py-5">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">{item.label}</p>
                  <p className="text-gray-800 font-semibold">{item.value}</p>
                </div>
              </div>
            ))}
            <div className="bg-green-50 rounded-2xl px-6 py-5">
              <p className="text-gray-500 text-sm font-medium mb-4">Follow us on social media</p>
              <div className="flex gap-3">
                {socials.map((s) => {
                  const Icon = s.icon
                  return (
                    <a key={s.label} href={s.href} className={s.color + ' flex-1 py-3 rounded-xl flex flex-col items-center justify-center gap-1 text-white hover:opacity-80 transition-opacity duration-300'}>
                      <Icon size={20} />
                      <span className="text-xs font-medium">{s.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-8 text-white mb-4">
              <h3 className="text-2xl font-bold mb-2">Why Choose To Grow?</h3>
              <p className="text-green-200 text-sm">Join 500+ students who already transformed their careers.</p>
            </div>
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex gap-4 items-center bg-green-50 rounded-2xl px-6 py-5"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-xl flex-shrink-0 shadow-sm">
                  {r.icon}
                </div>
                <p className="text-gray-700 font-medium text-sm leading-relaxed">{r.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
