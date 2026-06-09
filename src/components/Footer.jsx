import React from 'react'
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'

const links = {
  'Quick Links': [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Offers', href: '#offers' },
    { label: 'Contact', href: '#contact' },
  ],
  'Courses': [
    { label: 'Front-End Dev', href: '#courses' },
    { label: 'Graphic Design', href: '#courses' },
    { label: 'Digital Marketing', href: '#courses' },
    { label: 'English', href: '#courses' },
    { label: 'AI Tools', href: '#courses' },
    { label: 'Reels Maker', href: '#courses' },
  ],
}

const socials = [
  { label: 'Facebook', icon: FaFacebookF, hover: 'hover:bg-blue-600', href: '#' },
  { label: 'Instagram', icon: FaInstagram, hover: 'hover:bg-pink-500', href: '#' },
  { label: 'TikTok', icon: FaTiktok, hover: 'hover:bg-gray-700', href: '#' },
  { label: 'WhatsApp', icon: FaWhatsapp, hover: 'hover:bg-green-400', href: '#' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(135deg, #052e16 0%, #14532d 50%, #166534 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center border border-white/20">
                <span className="text-white font-black text-base">TG</span>
              </div>
              <div>
                <p className="text-white font-black text-xl tracking-tight">To Grow Academy</p>
                <p className="text-green-300/70 text-xs font-medium mt-0.5">Grow Your Skills. Build Your Future.</p>
              </div>
            </div>
            <p className="text-green-200/60 leading-relaxed mb-7 max-w-sm text-sm">
              Egypt's leading educational academy offering practical courses in technology, design, marketing, and language — powered by industry experts.
            </p>
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className={`w-10 h-10 bg-white/10 ${s.hover} rounded-xl flex items-center justify-center text-white transition-all duration-200 border border-white/10`}
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white font-black text-sm uppercase tracking-widest mb-5 opacity-90">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-green-300/60 hover:text-white text-sm transition-colors duration-200 font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid sm:grid-cols-3 gap-5 text-center">
            {[
              { icon: '📞', value: '+20 100 000 0000' },
              { icon: '📧', value: 'info@twogrow.academy' },
              { icon: '📍', value: 'Alexandria, Egypt' },
            ].map((item) => (
              <div key={item.value} className="flex items-center justify-center gap-2 text-green-300/60">
                <span>{item.icon}</span>
                <span className="text-sm font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-green-300/50 text-sm">
            © 2026 To Grow Academy. All Rights Reserved.
          </p>
          <p className="text-green-300/40 text-sm">
            Built with ❤️ in Egypt
          </p>
        </div>

      </div>
    </footer>
  )
}
