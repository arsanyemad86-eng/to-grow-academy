import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', phone: '', email: '', message: '' })
  }

  const socials = [
    { label: 'Facebook', icon: FaFacebookF, color: 'bg-blue-600' },
    { label: 'Instagram', icon: FaInstagram, color: 'bg-pink-500' },
    { label: 'TikTok', icon: FaTiktok, color: 'bg-black' },
    { label: 'WhatsApp', icon: FaWhatsapp, color: 'bg-green-500' },
  ]

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
            Have questions? We're here to help you choose the right course.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              { icon: '📞', label: 'Phone', value: '+20 100 000 0000' },
              { icon: '📧', label: 'Email', value: 'info@twogrow.academy' },
              { icon: '📍', label: 'Address', value: 'Alexandria, Egypt' },
              { icon: '⏰', label: 'Working Hours', value: 'Sat – Thu, 9 AM – 9 PM' },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 items-center">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">{item.label}</p>
                  <p className="text-gray-800 font-semibold">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <p className="text-gray-500 text-sm font-medium mb-4">Follow us on social media</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a key={s.label} href="#" className={`w-12 h-12 ${s.color} rounded-xl flex items-center justify-center text-white hover:opacity-80 transition-opacity`}>
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={submit} className="bg-green-50 rounded-3xl p-8 space-y-5">
              {sent && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-600 text-white rounded-xl p-4 text-center font-semibold"
                >
                  ✅ Message sent! We'll contact you soon.
                </motion.div>
              )}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Full Name</label>
                  <input name="name" value={form.name} onChange={handle} required placeholder="Your name" className="w-full px-4 py-3 bg-white border border-green-100 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Phone</label>
                  <input name="phone" value={form.phone} onChange={handle} required placeholder="01X XXXX XXXX" className="w-full px-4 py-3 bg-white border border-green-100 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Email</label>
                <input name="email" type="email" value={form.email} onChange={handle} required placeholder="your@email.com" className="w-full px-4 py-3 bg-white border border-green-100 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors" />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Message</label>
                <textarea name="message" value={form.message} onChange={handle} required rows={4} placeholder="Which course are you interested in?" className="w-full px-4 py-3 bg-white border border-green-100 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 transition-colors duration-300">
                Send Message →
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}