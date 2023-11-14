import React from 'react'
import './WrapperGrid.css'
import Header from './Header'
import Showcase from './Showcase'
import Companys from './Companys'
import Features from './Features'
import About from './About'
import Services from './Services'
import WhyUs from './WhyUs'
import Projects from './Projects'
import OurTeam from './OurTeam'
import Articles from './Articles'
import Signup from './Signup'

const WrapperGrid = () => {
  return (
    <div className='wrapper-grid'>
        <Header/>
        <Showcase/>
        <Companys/>
        <Features/>
        <About/>
        <Services/>
        <WhyUs/>
        <Projects/>
        <OurTeam/>
        <Articles/>
        <Signup/>

    </div>
  )
}

export default WrapperGrid