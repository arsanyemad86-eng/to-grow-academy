import React from 'react'
import Navbar from './components/Navbar'
import WhatsApp from './components/WhatsApp'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import Trainers from './components/Trainers'
import Offers from './components/Offers'
import Projects from './components/Projects'
import Graduation from './components/Graduation'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Trainers />
        <Offers />
        <Projects />
        <Graduation />
        <Testimonials />
        <Contact />
      </main>
      <WhatsApp />
      <Footer />
    </div>
  )
}

export default App