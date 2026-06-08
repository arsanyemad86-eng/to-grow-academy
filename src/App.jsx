import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
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
import CourseDetails from './components/CourseDetails'

function Home() {
  return (
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
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:id" element={<CourseDetails />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App