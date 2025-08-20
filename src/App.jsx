import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/hero'
import About from './sections/About'

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      < Navbar />
      <Hero/>
      <About/>
      <section className='min-h-screen'/>
      <section className='min-h-screen'/>
       
      {/*about*/}
      {/*projects*/}
      {/*testimonial*/}
      {/*footer*/}
    </div>
      
  )
}

export default App