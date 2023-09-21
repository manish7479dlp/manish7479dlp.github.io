import React from 'react'

import Certification from 'components/Certification'
import HeroSection from 'components/HeroSection'
import Navbar from 'components/Navbar'
import Skills from 'components/Skills'
import Education from 'components/Education'
import Projects from 'components/Projects'
import Footer from 'components/Footer'

const App = () => {
  return (
    < >
      <Navbar />
      <HeroSection />
      <Education />
      <Certification />
      <Projects />
      <Skills />
      <Footer />

    </>

  )
}

export default App