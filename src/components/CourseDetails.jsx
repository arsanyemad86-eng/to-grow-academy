import React from 'react'
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiClock, FiBarChart2, FiCheckCircle } from 'react-icons/fi'
import imgFrontend from '../assets/images/courses/frontend.jpg'
import imgDesign from '../assets/images/courses/design.jpg'
import imgMarketing from '../assets/images/courses/marketing.jpg'
import imgEnglish from '../assets/images/courses/english.jpg'
import imgEnglishAdv from '../assets/images/courses/english-adv.jpg'
import imgReels from '../assets/images/courses/reels.jpg'
import imgAi from '../assets/images/courses/ai.jpg'
import imgProgramming from '../assets/images/courses/programming.jpg'

const courses = [
  {
    icon: '💻', title: 'Front-End Development', duration: '3 Months', level: 'Beginner → Pro',
    image: imgFrontend, color: 'from-blue-500 to-blue-700',
    desc: 'Master HTML, CSS, JavaScript, and React to build modern, responsive websites from scratch.',
    whatYouLearn: ['HTML5 & CSS3 fundamentals', 'JavaScript ES6+', 'React 18 & hooks', 'Responsive design', 'Git & GitHub', 'Deploying websites'],
    whoIsItFor: 'Anyone who wants to build websites professionally, with no prior experience needed.',
    certificate: true,
  },
  {
    icon: '🎨', title: 'Graphic Design', duration: '2 Months', level: 'All Levels',
    image: imgDesign, color: 'from-purple-500 to-purple-700',
    desc: 'Learn professional design tools and create stunning visual content for brands and social media.',
    whatYouLearn: ['Adobe Photoshop', 'Adobe Illustrator', 'Brand identity design', 'Social media design', 'Typography', 'Color theory'],
    whoIsItFor: 'Creative individuals who want to work as designers or create content for businesses.',
    certificate: true,
  },
  {
    icon: '📈', title: 'Digital Marketing', duration: '2 Months', level: 'All Levels',
    image: imgMarketing, color: 'from-orange-500 to-orange-700',
    desc: 'Master SEO, social media marketing, and paid ads to grow any business online effectively.',
    whatYouLearn: ['SEO fundamentals', 'Facebook & Instagram Ads', 'Google Ads', 'Content strategy', 'Analytics & reporting', 'Email marketing'],
    whoIsItFor: 'Business owners, marketers, and anyone who wants to grow an audience online.',
    certificate: true,
  },
  {
    icon: '🗣️', title: 'English Language', duration: '3 Months', level: 'All Levels',
    image: imgEnglish, color: 'from-green-500 to-green-700',
    desc: 'Build confidence in speaking, writing, and professional communication in English.',
    whatYouLearn: ['Grammar fundamentals', 'Conversational English', 'Writing skills', 'Listening comprehension', 'Vocabulary building', 'Business English basics'],
    whoIsItFor: 'Anyone who wants to improve their English for work, travel, or daily communication.',
    certificate: true,
  },
  {
    icon: '🇬🇧', title: 'Advanced English', duration: '2 Months', level: 'Intermediate+',
    image: imgEnglishAdv, color: 'from-teal-500 to-teal-700',
    desc: 'Take your English to a professional and academic level with advanced techniques.',
    whatYouLearn: ['Academic writing', 'Debate & presentation', 'Advanced grammar', 'IELTS preparation', 'Professional emails', 'Critical reading'],
    whoIsItFor: 'Students with intermediate English who want to reach a professional or academic level.',
    certificate: true,
  },
  {
    icon: '🎬', title: 'Reels Maker', duration: '6 Weeks', level: 'Beginner',
    image: imgReels, color: 'from-pink-500 to-pink-700',
    desc: 'Create viral short-form video content for Instagram and TikTok that grows your audience.',
    whatYouLearn: ['Video shooting techniques', 'CapCut & mobile editing', 'Trending content strategies', 'Hook writing', 'Audio & transitions', 'Growing followers'],
    whoIsItFor: 'Content creators, influencers, and business owners who want to grow on social media.',
    certificate: true,
  },
  {
    icon: '🤖', title: 'Artificial Intelligence', duration: '2 Months', level: 'All Levels',
    image: imgAi, color: 'from-indigo-500 to-indigo-700',
    desc: 'Understand and use AI tools to boost your productivity, creativity, and career.',
    whatYouLearn: ['ChatGPT & prompt engineering', 'AI image generation', 'AI for business', 'Automation tools', 'AI in design & marketing', 'Future of AI'],
    whoIsItFor: 'Anyone who wants to leverage AI tools to work smarter and stay ahead in their field.',
    certificate: true,
  },
  {
    icon: '⌨️', title: 'Programming', duration: '3 Months', level: 'Beginner',
    image: imgProgramming, color: 'from-gray-600 to-gray-800',
    desc: 'Learn programming fundamentals and problem-solving from scratch with Python.',
    whatYouLearn: ['Programming logic', 'Python basics', 'Functions & loops', 'Data structures', 'Problem solving', 'Mini projects'],
    whoIsItFor: 'Complete beginners who want to learn how to code and think like a developer.',
    certificate: true,
  },
]

export default function CourseDetails() {
    
    useEffect(() => {
        window.scrollTo(0, 0)
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

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className={`bg-gradient-to-br ${course.color} pt-28 pb-16 px-6 md:px-12 lg:px-20`}>
        <div className="max-w-5xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors text-sm font-medium"
          >
            <FiArrowLeft /> Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-10 items-center"
          >
            <div className="flex-1 text-white">
              <div className="text-6xl mb-4">{course.icon}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
              <p className="text-white/80 text-lg leading-relaxed mb-6">{course.desc}</p>
              <div className="flex flex-wrap gap-4">
                <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  <FiClock /> {course.duration}
                </span>
                <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  <FiBarChart2 /> {course.level}
                </span>
                {course.certificate && (
                  <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                    🎓 Certificate Included
                  </span>
                )}
              </div>
            </div>
            <div className="w-full md:w-80 flex-shrink-0">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-56 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-16 grid md:grid-cols-3 gap-8">

        {/* What You'll Learn */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="md:col-span-2 bg-white rounded-2xl p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {course.whatYouLearn.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <FiCheckCircle className="text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3">Who Is It For?</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{course.whoIsItFor}</p>
          </div>

          <div className="bg-green-600 rounded-2xl p-6 text-white text-center">
            <p className="font-bold text-lg mb-2">Ready to Start?</p>
            <p className="text-green-200 text-sm mb-4">Join hundreds of students already enrolled.</p>
            <Link
              to="/"
              className="block w-full bg-white text-green-700 font-bold py-3 rounded-xl hover:bg-green-50 transition-colors text-sm"
            >
              Register Now
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  )
}