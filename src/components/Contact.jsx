import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'

const contactInfo = [
  { icon: '📞', label: 'Phone', value: '+20 100 000 0000' },
  { icon: '📧', label: 'Email', value: 'info@twogrow.academy' },
  { icon: '📍', label: 'Address', value: 'Alexandria, Egypt' },
  { icon: '⏰', label: 'Working Hours', value: 'Sat – Thu, 9 AM – 9 PM' },
]

const socials = [
  { label: 'Facebook', icon: FaFacebookF, bg: 'bg-blue-600', href: '#' },
  { label: 'Instagram', icon: FaInstagram, bg: 'bg-gradient-to-br from-purple-600 to-pink-500', href: '#' },
  { label: 'TikTok', icon: FaTiktok, bg: 'bg-gray-900', href: '#' },
  { label: 'WhatsApp', icon: FaWhatsapp, bg: 'bg-green-500', href: '#' },
]

const reasons = [
  { icon: '🎓', text: 'Certified instructors with real industry experience' },
  { icon: '🚀', text: 'Practical projects you can add to your portfolio' },
  { icon: '🤝', text: 'Lifetime access to our graduate community' },
  { icon: '📜', text: 'Accredited certificate upon completion' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">

        <motion.div
          
          className="text-center mb-16"
        >
          <span className="badge-green mb-5">Contact Us</span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mt-5 mb-5 leading-tight">
            Start Your Journey <span className="text-gradient">Today</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Have questions? We are here to help you choose the right course.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — Contact details */}
          <motion.div
            
            className="space-y-4"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                
                className="flex gap-4 items-center bg-gray-50 hover:bg-green-50 border border-gray-100 hover:border-green-200 rounded-2xl px-6 py-5 transition-all duration-250"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-xl flex-shrink-0 shadow-sm border border-gray-100">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">{item.label}</p>
                  <p className="text-gray-800 font-bold">{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl px-6 py-5">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-4">Follow us</p>
              <div className="flex gap-3">
                {socials.map((s) => {
                  const Icon = s.icon
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      className={`flex-1 py-3 rounded-xl ${s.bg} flex flex-col items-center justify-center gap-1 text-white hover:opacity-80 transition-opacity duration-200`}
                    >
                      <Icon size={18} />
                      <span className="text-[10px] font-semibold">{s.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right — Why Choose Us */}
          <motion.div
            
            className="space-y-4"
          >
            <div
              className="rounded-2xl p-8 text-white mb-2"
              style={{ background: 'linear-gradient(135deg, #166534 0%, #15803d 50%, #16a34a 100%)' }}
            >
              <h3 className="text-2xl font-black mb-2 tracking-tight">Why Choose To Grow?</h3>
              <p className="text-green-200 text-sm leading-relaxed">Join 500+ students who already transformed their careers.</p>
              <a
                href="#courses"
                className="inline-flex items-center gap-2 mt-5 bg-white/15 hover:bg-white/25 border border-white/25 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200"
              >
                View All Courses <HiArrowRight size={14} />
              </a>
            </div>

            {reasons.map((r, i) => (
              <motion.div
                key={i}
                
                className="flex gap-4 items-center bg-gray-50 hover:bg-green-50 border border-gray-100 hover:border-green-200 rounded-2xl px-6 py-4 transition-all duration-250"
              >
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xl flex-shrink-0 shadow-sm border border-gray-100">
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


