import React from 'react'

import Header from '../components/Header/Header.jsx'
import Showcase from '../components/Showcase/Showcase.jsx'
import Companys from '../components/Companys/Companys.jsx'
import About from '../components/About/About.jsx'
import Services from '../components/Services/Services.jsx'
import WhyUs from '../components/WhyUs/WhyUs.jsx'
import Projects from '../components/Projects/Projects.jsx'
import OurTeam from '../components/OurTeam/OurTeam.jsx'
import Articles from '../components/Articles/Articles.jsx'
import Signup from '../components/Signup/Signup.jsx'
import Footer from '../components/Footer/Footer.jsx'

const Home = () => {
  return (
    <div>
      <Header />
      <Showcase />
      <Companys />
      <About />
      <Services />
      <WhyUs />
      <Projects />
      <OurTeam/>
      <Articles />
      <Signup />
      <Footer />

    </div>
  )
}

export default Home