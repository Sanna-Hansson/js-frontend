import React from 'react'
import './Footer.css'

import img_footer from '../../assets/images/background-lines-white-right.svg'
import img2_footer from '../../assets/images/Logo-2.svg'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-img-back">
        <img className="svg-footer-back" src={img_footer} alt=""/>
    </div>
    <div className="container">
        <div className="footer-head">
            <div className="box">
                <div className="colorbox"></div>
                <img className="img-footer" src={img2_footer} alt="Nitro-logo"/>
                <p className="p-footer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati
                    voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.
                </p>
            </div>
            <div className="box">
                <h3 className="h3-footer">Company</h3>
                <a className="a-footer" href="http://">About</a>
                <a className="a-footer" href="http://">Features</a>
                <a className="a-footer" href="http://">Works</a>
                <a className="a-footer" href="http://">Career</a>
            </div>
            <div className="box">
                <h3 className="h3-footer">Help</h3>
                <a className="a-footer" href="http://">Customer Support</a>
                <a className="a-footer" href="http://">Delivery Details</a>
                <a className="a-footer" href="http://">Terms & Conditions</a>
                <a className="a-footer" href="http://">Privacy Policy</a>
            </div>
            <div className="box">
                <h3 className="h3-footer">Resources</h3>
                <a className="a-footer" href="http://">Free Ebooks</a>
                <a className="a-footer" href="http://">Development Tutorial</a>
                <a className="a-footer" href="http://">How to - Blog</a>
                <a className="a-footer" href="http://">Youtube Playlist</a>
            </div>
            <div className="box">
                <h3 className="h3-footer">Link</h3>
                <a className="a-footer" href="http://">Free Ebooks</a>
                <a className="a-footer" href="http://">Development Tutorial</a>
                <a className="a-footer" href="http://">How to - Blog</a>
                <a className="a-footer" href="http://">Youtube Playlist</a>
            </div>
          
        </div>

    </div>
    <hr/>

    <div className="footer-socials">
        <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
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

    </div>
</footer>
  )
}

export default Footer