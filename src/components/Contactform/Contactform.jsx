import React from 'react'
import './Contactform.css'

const Contactform = () => {
  return (
    <section  className="contact-form">
<div className="container">
    <div className="content-box border">
        <div className="contact-head">
            <h2 className="h2-contact-form">Leave us a message <br/>
                for any information.</h2>
        </div>
        <div className="contact-form-input">

            <form onsubmit="register(event)" novalidate method="post">
                <div>
                    <input className="form-input" required id="nameInput" type="text" placeholder="Name*"/>
                    <span id="nameInput-error"></span>
                </div>
                <div>
                    <input  className="form-input" required id="emailInput" type="email" placeholder="Email*"/>
                    <span id="emailInput-error"></span>
                </div>
                <div> 
                    <input className="form-input form-input-message" required id="messageInput" type="text" placeholder="Your Message*"/>
                    <span id="messageInput-error"></span>
                </div>
                <div>
                    <button className="btn-yellow btn-signup" type="submit"> Send Message <i></i></button>
                </div>

               </form>
           
        </div>
      
       
    </div>
</div>
</section>
  )
}

export default Contactform