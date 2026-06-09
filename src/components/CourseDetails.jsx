import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowLeft, FiClock, FiBarChart2, FiCheckCircle, FiX, FiPhone } from 'react-icons/fi'
import imgFrontend from '../assets/images/courses/frontend.jpg'
import imgDesign from '../assets/images/courses/design.jpg'
import imgMarketing from '../assets/images/courses/marketing.jpg'
import imgEnglish from '../assets/images/courses/english.jpg'
import imgEnglishAdv from '../assets/images/courses/english-adv.jpg'
import imgReels from '../assets/images/courses/reels.jpg'
import imgAi from '../assets/images/courses/ai.jpg'
import imgProgramming from '../assets/images/courses/programming.jpg'

const courses = [
  { icon: '??', title: 'Front-End Development', duration: '3 Months', level: 'Beginner to Pro', image: imgFrontend, color: 'from-blue-500 to-blue-700', price: 1500, originalPrice: 2000, desc: 'Master HTML, CSS, JavaScript, and React to build modern, responsive websites from scratch.', whatYouLearn: ['HTML5 and CSS3 fundamentals', 'JavaScript ES6+', 'React 18 and hooks', 'Responsive design', 'Git and GitHub', 'Deploying websites'], whoIsItFor: 'Anyone who wants to build websites professionally, with no prior experience needed.', certificate: true },
  { icon: '??', title: 'Graphic Design', duration: '2 Months', level: 'All Levels', image: imgDesign, color: 'from-purple-500 to-purple-700', price: 1200, originalPrice: null, desc: 'Learn professional design tools and create stunning visual content for brands and social media.', whatYouLearn: ['Adobe Photoshop', 'Adobe Illustrator', 'Brand identity design', 'Social media design', 'Typography', 'Color theory'], whoIsItFor: 'Creative individuals who want to work as designers or create content for businesses.', certificate: true },
  { icon: '??', title: 'Digital Marketing', duration: '2 Months', level: 'All Levels', image: imgMarketing, color: 'from-orange-500 to-orange-700', price: 1000, originalPrice: 1400, desc: 'Master SEO, social media marketing, and paid ads to grow any business online effectively.', whatYouLearn: ['SEO fundamentals', 'Facebook and Instagram Ads', 'Google Ads', 'Content strategy', 'Analytics and reporting', 'Email marketing'], whoIsItFor: 'Business owners, marketers, and anyone who wants to grow an audience online.', certificate: true },
  { icon: ' ???', title: 'English Language', duration: '3 Months', level: 'All Levels', image: imgEnglish, color: 'from-green-500 to-green-700', price: 900, originalPrice: null, desc: 'Build confidence in speaking, writing, and professional communication in English.', whatYouLearn: ['Grammar fundamentals', 'Conversational English', 'Writing skills', 'Listening comprehension', 'Vocabulary building', 'Business English basics'], whoIsItFor: 'Anyone who wants to improve their English for work, travel, or daily communication.', certificate: true },
  { icon: '????', title: 'Advanced English', duration: '2 Months', level: 'Intermediate+', image: imgEnglishAdv, color: 'from-teal-500 to-teal-700', price: 1100, originalPrice: null, desc: 'Take your English to a professional and academic level with advanced techniques.', whatYouLearn: ['Academic writing', 'Debate and presentation', 'Advanced grammar', 'IELTS preparation', 'Professional emails', 'Critical reading'], whoIsItFor: 'Students with intermediate English who want to reach a professional or academic level.', certificate: true },
  { icon: '??', title: 'Reels Maker', duration: '6 Weeks', level: 'Beginner', image: imgReels, color: 'from-pink-500 to-pink-700', price: 800, originalPrice: 1000, desc: 'Create viral short-form video content for Instagram and TikTok that grows your audience.', whatYouLearn: ['Video shooting techniques', 'CapCut and mobile editing', 'Trending content strategies', 'Hook writing', 'Audio and transitions', 'Growing followers'], whoIsItFor: 'Content creators, influencers, and business owners who want to grow on social media.', certificate: true },
  { icon: '??', title: 'Artificial Intelligence', duration: '2 Months', level: 'All Levels', image: imgAi, color: 'from-indigo-500 to-indigo-700', price: 1300, originalPrice: null, desc: 'Understand and use AI tools to boost your productivity, creativity, and career.', whatYouLearn: ['ChatGPT and prompt engineering', 'AI image generation', 'AI for business', 'Automation tools', 'AI in design and marketing', 'Future of AI'], whoIsItFor: 'Anyone who wants to leverage AI tools to work smarter and stay ahead in their field.', certificate: true },
  { icon: '??', title: 'Programming', duration: '3 Months', level: 'Beginner', image: imgProgramming, color: 'from-gray-600 to-gray-800', price: 1200, originalPrice: null, desc: 'Learn programming fundamentals and problem-solving from scratch with Python.', whatYouLearn: ['Programming logic', 'Python basics', 'Functions and loops', 'Data structures', 'Problem solving', 'Mini projects'], whoIsItFor: 'Complete beginners who want to learn how to code and think like a developer.', certificate: true },
]

const PHONE = '+20 100 000 0000'

const paymentMethods = [
  { name: 'Vodafone Cash', icon: '??', color: 'bg-red-50 text-red-700 border-red-200' },
  { name: 'InstaPay', icon: '?', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { name: 'Credit Card', icon: '??', color: 'bg-purple-50 text-purple-700 border-purple-200' },
  { name: 'Bank Transfer', icon: '??', color: 'bg-green-50 text-green-700 border-green-200' },
]

export default function CourseDetails() {
  const [showModal, setShowModal] = useState(false)
  useEffect(() => {
    if (!window.history.state?.fromBack) {
      window.scrollTo(0, 0)
    }
  }, [])
  const { id } = useParams()
  const course = courses[parseInt(id)]

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-500 text-xl mb-4">Course not found.</p>
        <Link to="/" className="text-green-600 font-semibold hover:underline">Back to Home</Link>
      </div>
    )
  }

  const discount = course.originalPrice ? Math.round((1 - course.price / course.originalPrice) * 100) : null

  return (
    <div className="min-h-screen bg-gray-50">
      <div className={"bg-gradient-to-br " + course.color + " pt-28 pb-16 px-6 md:px-12 lg:px-20"}>
        <div className="max-w-5xl mx-auto">
          <Link to="/#courses" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors text-sm font-medium">
            <FiArrowLeft /> Back to Courses
          </Link>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1 text-white">
              <div className="text-6xl mb-4">{course.icon}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
              <p className="text-white/80 text-lg leading-relaxed mb-6">{course.desc}</p>
              <div className="flex flex-wrap gap-4">
                <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium"><FiClock /> {course.duration}</span>
                <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium"><FiBarChart2 /> {course.level}</span>
                {course.certificate && <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">Certificate Included</span>}
              </div>
            </div>
            <div className="w-full md:w-80 flex-shrink-0">
              <img src={course.image} alt={course.title} className="w-full h-56 object-cover rounded-2xl shadow-2xl" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-16 grid md:grid-cols-3 gap-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="md:col-span-2 bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What You will Learn</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {course.whatYouLearn.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <FiCheckCircle className="text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-col gap-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3">Who Is It For?</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{course.whoIsItFor}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            {discount && <span className="inline-block bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-3">Sale {discount}% OFF</span>}
            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-3xl font-bold text-green-600">{course.price} EGP</span>
            </div>
            {course.originalPrice && <p className="text-gray-400 text-sm line-through mb-4">{course.originalPrice} EGP</p>}
            <button onClick={() => setShowModal(true)} className="w-full py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-colors duration-300 mt-2">
              Enroll Now
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4" onClick={() => setShowModal(false)}>
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} transition={{ duration: 0.3 }} className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Enroll in {course.title}</h3>
                <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600"><FiX size={22} /></button>
              </div>
              <div className="bg-green-50 rounded-2xl p-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">{course.title}</span>
                  <div className="text-right">
                    {course.originalPrice && <p className="text-gray-400 text-xs line-through">{course.originalPrice} EGP</p>}
                    <p className="text-green-600 font-bold text-lg">{course.price} EGP</p>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-700 mb-3">Contact us to complete enrollment:</p>
                <div className="flex items-center gap-3 bg-green-600 text-white rounded-2xl px-5 py-4">
                  <FiPhone size={20} />
                  <span className="font-bold text-lg">{PHONE}</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-3">Available payment methods:</p>
                <div className="grid grid-cols-2 gap-3">
                  {paymentMethods.map((method) => (
                    <div key={method.name} className={"flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium " + method.color}>
                      <span>{method.icon}</span>
                      <span>{method.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


