import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const offers = [
  { title: 'Front-End + AI Bundle', original: 2400, discounted: 1500, discount: 38, duration: '5 Months', badge: '🔥 Best Seller', expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) },
  { title: 'Digital Marketing Pro', original: 1800, discounted: 990, discount: 45, duration: '2 Months', badge: '⚡ Limited', expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
  { title: 'English Full Package', original: 2000, discounted: 1200, discount: 40, duration: '5 Months', badge: '🌟 Popular', expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) },
]

function Countdown({ expires }) {
  const [time, setTime] = useState('')
  useEffect(() => {
    const update = () => {
      const diff = expires - Date.now()
      if (diff <= 0) { setTime('Expired'); return }
      const d = Math.floor(diff / 86400000)
      const h = Math.floor((diff % 86400000) / 3600000)
      const m = Math.floor((diff % 3600000) / 60000)
      const s = Math.floor((diff % 60000) / 1000)
      setTime(`${d}d ${h}h ${m}m ${s}s`)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [expires])
  return <span>{time}</span>
}

export default function Offers() {
  return (
    <section id="offers" className="py-24 px-6 md:px-12 lg:px-20 bg-green-50">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-200 text-green-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Special Offers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
            Limited Time <span className="text-green-600">Deals</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Grab these exclusive bundles before they expire.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-green-600 to-green-800 p-6 text-white relative">
                <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                  {offer.badge}
                </span>
                <div className="text-4xl font-black mb-1">{offer.discount}% OFF</div>
                <div className="text-green-200 text-sm">Limited offer</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{offer.title}</h3>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-black text-green-600">{offer.discounted} EGP</span>
                  <span className="text-lg text-gray-400 line-through">{offer.original} EGP</span>
                </div>
                <div className="bg-red-50 border border-red-100 rounded-xl p-3 mb-5 text-center">
                  <p className="text-xs text-red-500 font-medium mb-1">⏰ Offer expires in:</p>
                  <p className="text-red-600 font-bold text-sm"><Countdown expires={offer.expires} /></p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-5">
                  <span>📅</span>
                  <span>{offer.duration}</span>
                </div>
                <button className="w-full py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-colors duration-300">
                  Register Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}