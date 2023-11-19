import './Header.css'
import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import phone from '../../assets/images/https-www.flaticon.com-free-icon-telephone-call_3059457related_id=3059457.svg'
import logotype from '../../assets/images/Img_logo.svg'
import mailadress from '../../assets/images/https-www.flaticon.com-free-icon-message_7831721related_id=7831721&origin=search.svg'
import location from '../../assets/images/https-www.flaticon.com-free-icon-location_1008001term=location&page=1&position=46&page=1&position=46&related_id=1008001&origin=search.svg'

const Header = () => {
  return (
    <header>
        <div className=" container">
                <button className="btn-menu"><i className="fa fa-bars"></i></button>
                <div> <Link to="/"> <img src={logotype} alt="logotype"/> </Link>
                </div>

                <div className="contact">

                <div className="content-box">

                        <img src={phone} alt="phone" /> 
                        <i>+46 (8) 121 470 50</i>
                </div>

                <div className="content-box">

                        <img src={mailadress} alt="mailadress"/>
                        <i>info@crito.com</i>
                </div>

                <div className="content-box">

                        <img src={location} alt="location"/>
                         <i>Sveavägen 31, 111 34 STOCKHOLM</i>
                </div>

                </div>
                <div className="socials">
                    <a className="alink-socials" href="http://facebook.com/" target="_blank"><i
                            className="fa-brands fa-facebook fa-xl"></i></a>
                    <a className="alink-socials" href="http://twitter.com/" target="_blank"><i
                            className="fa-brands fa-square-x-twitter fa-xl"></i></a>
                    <a className="alink-socials" href="http://instagram.com/" target="_blank"><i
                            className="fa-brands fa-instagram fa-xl"></i></a>
                    <a className="alink-socials" href="http://linkedin.com/" target="_blank"><i
                            className="fa-brands fa-linkedin fa-xl"></i></a>
                </div>
                <div className="main-menu">
                    <nav>
                        <ul>
                        <NavLink className=' alink-mainMenu' to="/"> Home </NavLink>
                        <NavLink className=' alink-mainMenu' to="/Services"> Services </NavLink>
                        <NavLink className=' alink-mainMenu' to="/News"> News </NavLink>
                        <NavLink className=' alink-mainMenu' to="/Contacts"> Contacts </NavLink>
                               
                        </ul>
                       
                       
                       
                    </nav>
                    <a href="http://login.html" className="btn-yellow btn-login">Login <i
                            className="fa-regular fa-arrow-up-right"></i> </a>

                </div>
            </div>
    </header>
    )
  }
export default Header