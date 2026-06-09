import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight, HiLightningBolt } from 'react-icons/hi'

const offers = [
  { title: 'Front-End + AI Bundle', original: 2400, discounted: 1500, discount: 38, duration: '5 Months', badge: 'Best Seller', badgeColor: 'bg-orange-500', expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) },
  { title: 'Digital Marketing Pro', original: 1800, discounted: 990, discount: 45, duration: '2 Months', badge: 'Limited', badgeColor: 'bg-red-500', expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
  { title: 'English Full Package', original: 2000, discounted: 1200, discount: 40, duration: '5 Months', badge: 'Popular', badgeColor: 'bg-blue-500', expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) },
]

function Countdown({ expires }) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 })
  useEffect(() => {
    const update = () => {
      const diff = expires - Date.now()
      if (diff <= 0) { setTime({ d: 0, h: 0, m: 0, s: 0 }); return }
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      })
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [expires])

  const units = [
    { v: time.d, l: 'days' },
    { v: time.h, l: 'hrs' },
    { v: time.m, l: 'min' },
    { v: time.s, l: 'sec' },
  ]

  return (
    <div className="flex items-center gap-2">
      {units.map(({ v, l }, i) => (
        <React.Fragment key={l}>
          <div className="flex flex-col items-center">
            <span className="text-white font-black text-lg w-8 text-center leading-none">{String(v).padStart(2, '0')}</span>
            <span className="text-white/50 text-[9px] font-medium uppercase tracking-widest mt-0.5">{l}</span>
          </div>
          {i < units.length - 1 && <span className="text-white/40 font-bold text-base mb-2">:</span>}
        </React.Fragment>
      ))}
    </div>
  )
}

export default function Offers() {
  return (
    <section id="offers" className="py-28 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="badge-green mb-5">
            <HiLightningBolt size={13} /> Special Offers
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mt-5 mb-5 leading-tight">
            Limited Time <span className="text-gradient">Deals</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Grab these exclusive bundles before they expire.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-7">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-100 hover:border-green-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-green-50 transition-all duration-300"
            >
              {/* Card header */}
              <div className="relative bg-gray-900 px-6 py-7">
                <span className={`absolute top-4 right-4 ${offer.badgeColor} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>
                  {offer.badge}
                </span>
                <div className="text-5xl font-black text-white mb-1">{offer.discount}%</div>
                <div className="text-white/40 text-sm font-medium">off original price</div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-white/50 text-[10px] font-semibold uppercase tracking-widest mb-2">Expires in</p>
                  <Countdown expires={offer.expires} />
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="text-xl font-black text-gray-900 mb-4 tracking-tight">{offer.title}</h3>
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="text-3xl font-black text-green-600 tracking-tight">{offer.discounted.toLocaleString()}</span>
                  <span className="text-sm font-bold text-gray-400">EGP</span>
                  <span className="text-sm text-gray-300 line-through">{offer.original.toLocaleString()} EGP</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                  {offer.duration} program
                </div>
                <button className="w-full py-3.5 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-colors duration-200 text-sm flex items-center justify-center gap-2">
                  Register Now <HiArrowRight size={15} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
