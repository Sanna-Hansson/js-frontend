import './Contactbox.css'
import React from 'react'

const Contactbox = () => {
    return (


        <section className="contact-links">
            <div className="container">
                <div className="contact-links-box border">
                    <div>
                        <a href="http://"><button className="btn-circle btn-contact-list"><i className="fa-sharp fa-solid fa-location-dot"></i></button></a>
                    </div>
                    <div>
                        <h5>Visit Us</h5>
                        <p>Sveavägen 31 <br />
                            111 34 STOCKHOLM</p>
                    </div>

                </div>

                <div className="contact-links-box border">
                    <div>
                        <a href="tel:+46 (8) 121 470 50"><button className="btn-circle btn-contact-list"><i className="fa-duotone fa-phone"></i></button></a>
                    </div>
                    <div> <h5>Call Us</h5>
                        <p>+46 (8) 121 470 50 <br />
                            +46 (8) 121 470 51</p></div>

                </div>

                <div className="contact-links-box border">
                    <div>
                        <a href="http://"><button className="btn-circle btn-contact-list"><i className="fa-sharp fa-solid fa-envelope"></i></button></a>
                    </div>
                    <div>
                        <h5>Email Us</h5>
                        <p>info@crito.com <br />
                            support@crito.com</p>
                    </div>


                </div>


            </div>



        </section>
    )
}

export default Contactbox