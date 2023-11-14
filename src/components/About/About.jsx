import React from 'react'
import './About.css'
import founderImg from '../../assets/images/daria-pimkina-tYaccl19A3Q-unsplash.jpg'
import backroundWavyLines from '../../assets/images/backround-white-wavy-lines.svg'

const About = () => {
  return (
    <section className="about">

    <div className="container">
                        <div className="content">

                            <div className="box-1 ">

                                <img className="img-about" src={founderImg}
                                    alt=" Founder wandering the halls with a computer on her left arm"/>
                                <div> <img className="img-back-about" src={backroundWavyLines} alt=""/>
                                </div>
                                <div className="text-block">
                                    
                                    <p>
                                        <strong>Samantha Brown</strong>,
                                        <span>Founder</span> <br/><br/>
                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                    </p>
                                </div>
                            </div>
                            <div className="box-2 ">
                                <p className="p3-about">About Company</p>
                                <h2 className="h2-about">We Are Business Consulting & Credit Repair Experts</h2>
                                <p className="p4-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                                    officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.
                                    <br/><br/>

                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt
                                    adipisci accusantium libero provident voluptate amet.
                                </p>
                                <div className="btn-play">

                                    <button className="btn-yellow btn-about">
                                        Learn More
                                        <i className="fa-regular fa-arrow-up-right"></i>
                                    </button>

                                    <a href="http://intromovie.html" target="_blank">
                                        <button className="btn-circle btn-intro">
                                            <i className="fa-sharp fa-solid fa-play fa-xs"></i>
                                        </button>
                                    </a>
                                    <a className="alink-about" href="http://intromovie.html" target="_blank">
                                        <p className="p5-about">Intro Video</p>
                                    </a>
                                </div>

                               


                            </div>


                        </div>
                    </div>
                </section>
  )
}

export default About