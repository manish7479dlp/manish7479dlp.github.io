import React from 'react'

import Certification from 'components/Certification'
import HeroSection from 'components/HeroSection'
import Navbar from 'components/Navbar'
import Skills from 'components/Skills'
import Education from 'components/Education'
import Projects from 'components/Projects'

const App = () => {
  return (
    <div className='container-fluid'>
      <Navbar />
      <HeroSection />
      <Education />
      <Certification />
      <Projects />
      <Skills />

    </div>

  )
}

export default App