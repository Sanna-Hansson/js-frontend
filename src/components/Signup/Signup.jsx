import React from 'react'
import './Signup.css'

import img_signup from '../../assets/images/background-wavy-lines.svg'

const Signup = () => {
  return (
    <section className="signup">
    <img className="img-back-signup" src={img_signup}  alt=""/>
    <div className="container">
        <h2 className="h2-signup">Get News Updates By Signup </h2>
        <form action="/action_page.php" className="form-container">
            <div> <input className="form-signup" type="text" placeholder="username@domain.com"/></div>
            <div> <button className="btn-yellow btn-signup" type="submit"> Subscribe </button></div>
        </form>
    </div>
</section>
  )
}

export default Signup