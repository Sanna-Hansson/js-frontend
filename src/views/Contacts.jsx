import React from 'react'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Contactform from '../components/Contactform/Contactform.jsx'
import Banner from '../components/Banner/Banner.jsx'
import Contactbox from '../components/Contactbox/Contactbox.jsx'

const Contacts = () => {
  return (
    <div>
      <Header />
      <Banner />
     <Contactbox/>
      <Contactform />
      <Footer />

    </div>

  )
}

export default Contacts