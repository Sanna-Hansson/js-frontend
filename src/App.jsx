import { useState } from 'react'
import './App.css'

import Showcase from './components/Showcase/Showcase'
import Header from './components/Header/Header'
import Companys from './components/Companys/Companys'
import Features from './components/Features/Features'
import About from './components/About/About'
import Services from './components/Services/Services'
import WhyUs from './components/WhyUs/WhyUs'
import Projects from './components/Projects/Projects'
import OurTeam from './components/OurTeam/OurTeam'
import Articles from './components/Articles/Articles'
import Signup from './components/Signup/Signup'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    
      <Header />

      <Showcase />

      <Companys />

      <Features/>
     
      <About/>
      
      <Services/>
      
      <WhyUs/>

      <Projects/>

      <OurTeam/>

      <Articles/>
      
      <Signup/>

      <Footer/>

      

      

     

      {/* här ska du in med browserrouter etc från react-router-dom - finns i inspelningen navigering med react
       */}
    </>
  )
}

export default App
