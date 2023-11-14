import './Showcase.css'
import React from 'react'

import img_showcase from '../../assets/images/Image.png'
import backround_lines from '../../assets/images/background-lines.svg'

const Showcase = () => {
  return (
    <section className="showcase-section">
       <img className="img-back-showcase" src={backround_lines} alt=""/>
                    <div className="container">
                        <div className="content">
                            <h1 className="h1-showcase">We Provide The Best Business Solutions</h1>
                            <p className="p-showcase">Establish your vision and value proposition and turn them into
                                testable prototypes.</p>
                            <a href="http://consulting.html" className="btn-yellow btn-showcase">Get consulting <i
                                    className="fa-regular fa-arrow-up-right"></i> </a>
                            <a href="http://services.html" className="btn-transparent btn-showcase">Learn more <i
                                    className="fa-regular fa-arrow-up-right"></i> </a>
                        </div>
                        <img className="img-showcase" src={img_showcase} alt="showcase image of a corporate man"/>

                    </div>
        
    </section>
  )
}

export default Showcase
