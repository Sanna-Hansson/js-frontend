import React from 'react'
import './OurTeam.css'
import img_ourTeam from '../../assets/images/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg'
import img2_ourTeam from '../../assets/images/itay-verchik-6ZKGBzrDd3I-unsplash.jpg'
import img3_ourTeam from '../../assets/images/christina-wocintechchat-com-Zpzf7TLj_gA-unsplash.jpg'
import img4_ourTeam from '../../assets/images/JustinWilloman.png'
import img5_ourTeam from '../../assets/images/dot.png'
import img6_ourTeam from '../../assets/images/Star.png'
import img7_ourTeam from '../../assets/images/cassandra-warren.png'
import img8_ourTeam from '../../assets/images/amanda-tulling.png'
import img9_ourTeam from '../../assets/images/jack-mcdogglas.png'

const OurTeam = () => {
  return (
    <section className="our-team">
    <div className="container">
        <article className="head-our-team">
            <p className="p1-our-team"> Meet Our Team</p>
            <div className="head-flex-our-team">
                <h2 className="h2-our-team"> Experience Team Members</h2>
                <button className="btn-yellow btn-our-team"> Browse Team <i
                        className="fa-regular fa-arrow-up-right"></i> </button>
            </div>

        </article>

        <article className="box-our-team">
            <div className="box">
                <img className="img-our-team" src={img_ourTeam}
                    alt="A buisnesswoman in a striped suitjacket standing confidently and smiling brightly."/>
                <h4>Kristine Palmer</h4>
                <p>Chef Operation Officer</p>
            </div>
            <div className="box">
                <img className="img-our-team" src={img2_ourTeam}
                    alt=" A man in a dark grey suit with a white shirt and gold chain necklace. Standing wuith hands resteing over stomach, smiling. "/>
                <h4>Mark Aubri</h4>
                <p>Senior Consultant</p>
            </div>
            <div className="box">
                <img className="img-our-team" src={img3_ourTeam}
                    alt="A woman wearing a black short-sleeved dress leaning by a window with a paper on her lap. Shes has dreadlocks and smiling big. "/>
                <h4>Kimberly Hansen</h4>
                <p>Senior Consultant</p>
            </div>
            <div className="box">
                <img className="img-our-team" src={img4_ourTeam}
                    alt="A blackhaired man in a black hoodie, smiling. "/>
                <h4>Justin Willoman</h4>
                <p>Senior Tech Consultant</p>
            </div>
        </article>
        <article className="dots-our-team">
            <img src={img5_ourTeam} alt="five dots, the second is bold"/>
        </article>
        <article className="testimonials">
            <div className="head-testimonials">
                <p className="p1-our-team">Testimonial</p>
                <h2 className="h2-our-team">What Our Client Says</h2>
            </div>
            <div className="grid-testimonials">

                <div className="box-2">
                    <img src={img6_ourTeam} alt=" five gold stars"/>
                    <p className="p1-testimonials">"Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe
                        nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="client-testimonials">
                        <div> <img src={img7_ourTeam}
                                alt="a circle image of the Business manager Cassandra Warren."/></div>
                        <div>
                            <h4 className="h4-testimonials">Cassandra Warren</h4>
                            <p className="p2-testimonials"> Business Manager, Dorfus</p>
                        </div>

                    </div>
                </div>

                <div className="box-2">
                    <img src={img6_ourTeam} alt="five gold stars"/>
                    <p className="p1-testimonials">"Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe
                        nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="client-testimonials">
                        <div>
                            <img src={img8_ourTeam}
                                alt="a circle image of the Senior Developer Amanda Tulling."/>
                        </div>
                        <div>
                            <h4 className="h4-testimonials">Amanda Tulling</h4>
                            <p className="p2-testimonials">Senior Developer, Square</p>
                        </div>

                    </div>
                </div>

                <div className="box-2">
                    <img src={img6_ourTeam} alt="five gold stars"/>
                    <p className="p1-testimonials">"Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe
                        nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="client-testimonials">
                        <div>
                            <img src={img9_ourTeam}
                                alt="a circle image of the Key Account Manager Jack McDogglas"/>
                        </div>

                        <div>
                            <h4 className="h4-testimonials">Jack McDogglas</h4>
                            <p className="p2-testimonials">Key Account Manager, Gobona</p>
                        </div>
                    </div>
             
                </div>
            </div>
             <article className="button-testimonials">
            <div>
                <button className="btn-black"> All Reviews
                    <i className="fa-regular fa-arrow-up-right"></i>
                </button>
            </div>
        </article>
        </article>
       

    </div>
</section>
  )
}

export default OurTeam