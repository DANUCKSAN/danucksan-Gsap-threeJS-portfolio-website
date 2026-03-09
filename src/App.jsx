import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Footer from './sections/Foooter'
import Contact from './sections/Contact'



const App = () => {
  return (
    <main className='max-w-12xl mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    
    </main>
  )
}

export default App
