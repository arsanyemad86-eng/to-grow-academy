import React from 'react'
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'

const links = {
  'Quick Links': ['Home', 'About', 'Courses', 'Trainers', 'Offers', 'Contact'],
  'Courses': ['Front-End', 'Graphic Design', 'Digital Marketing', 'English', 'AI', 'Reels Maker'],
}

const socials = [
  { label: 'Facebook', icon: FaFacebookF, color: 'hover:bg-blue-600', href: '#' },
  { label: 'Instagram', icon: FaInstagram, color: 'hover:bg-pink-500', href: '#' },
  { label: 'TikTok', icon: FaTiktok, color: 'hover:bg-gray-800', href: '#' },
  { label: 'WhatsApp', icon: FaWhatsapp, color: 'hover:bg-green-400', href: '#' },
]

export default function Footer() {
  return (
    <footer style={{background: 'linear-gradient(135deg, #166534 0%, #15803d 100%)'}}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">TG</span>
              </div>
              <div>
                <p className="text-white font-bold text-xl">To Grow Academy</p>
                <p className="text-green-300 text-sm">Grow Your Skills. Build Your Future.</p>
              </div>
            </div>
            <p className="text-green-200 leading-relaxed mb-6 max-w-sm">
              Egypt's leading educational academy offering practical courses in technology, design, marketing, and language.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className={`w-10 h-10 bg-white/10 ${s.color} rounded-xl flex items-center justify-center text-white transition-all duration-200`}>
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white font-bold text-lg mb-5">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-green-300 hover:text-white text-sm transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: '📞', value: '+20 100 000 0000' },
              { icon: '📧', value: 'info@twogrow.academy' },
              { icon: '📍', value: 'Alexandria, Egypt' },
            ].map((item) => (
              <div key={item.value} className="flex items-center justify-center gap-2 text-green-200">
                <span>{item.icon}</span>
                <span className="text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-green-300 text-sm">
            © 2026 To Grow Academy. All Rights Reserved. Built with ❤️ in Egypt.
          </p>
        </div>
      </div>
    </footer>
  )
}