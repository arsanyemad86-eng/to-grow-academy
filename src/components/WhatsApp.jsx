import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsApp() {
  return (
    <motion.a
      href="https://wa.me/201000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg"
      style={{ backgroundColor: '#25D366' }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
      whileHover={{ scale: 1.2 }}
    >
      <FaWhatsapp size={28} />
    </motion.a>
  )
}


