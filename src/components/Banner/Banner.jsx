import React from 'react'
import './Banner.css'
import backround_lines from '../../assets/images/background-lines.svg'
const Banner = () => {
  return (
    <section className="banner">
      <img className="img-back-showcase" src={backround_lines} alt=""/>
        <div className="container">
                <div className="main-menu">
                    <nav>
                        <a className="alink-mainMenu " href="home.html">Home</a>
                        <a className="alink-mainMenu active" href="contacts.html">Contact</a>
                    </nav>
                </div>
                <h1 className="h1-banner"> Let's Connect</h1>
               
            </div>
       
    </section>
  )
}

export default Banner