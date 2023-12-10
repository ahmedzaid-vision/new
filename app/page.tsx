'use client'
import React from 'react'
import Hero from './components/hero'
import Services from './components/services'
import Projects from './components/projects'
import Testimonials from './components/testimonials'
import Footer from './components/footer'
import ClientSlider from './components/clients'



function page() {
  return (
    <div className=''>
       <Hero />
       <Services />
       <Projects />
       {/* <Testimonials /> */}
       <ClientSlider />
       <Footer />
    </div>
  )
}

export default page
