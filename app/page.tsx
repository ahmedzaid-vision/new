import React from 'react'
import Hero from './components/hero'
import Services from './components/services'
import Projects from './components/projects'


function page() {
  return (
    <div className='h-[400vh]'>
       <Hero />
       <Services />
       <Projects />
    </div>
  )
}

export default page
