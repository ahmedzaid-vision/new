import React from 'react'
import Hero from './components/hero'
import Services from './components/services'
import Projects from './components/projects'
import Testimonials from './components/testimonials'
import Footer from './components/footer'


function page() {
  return (
    <div className=''>
       <Hero />
       <Services />
       <Projects />
       <Testimonials />
       <Footer />
    </div>
  )
}

export default page
