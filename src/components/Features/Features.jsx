import React from 'react'
import './Features.css'
import handshake from '../../assets/images/icon-handshake.svg'
import bulb from '../../assets/images/icon-bulb.svg'
import stock from '../../assets/images/icon-stocks.svg'
import cogbox from '../../assets/images/icon-cogbox.svg'

const Features = () => {
  return (
    <section className="features">
    <div className="container border">

        <div className="content ">
            <div className="box-1 ">
                <p className="p-features">Features</p>
                <h2 className="h2-features">Our Accounting is<br/>
                    trusted by thousand<br/>
                    of companies</h2>
                <button className="btn-yellow btn-features">Learn more <i
                        className="fa-regular fa-arrow-up-right"></i></button>
            </div>
            <div className="box-2 ">
                <img src={handshake} alt="handshake with sparkles"/>
                <h4 className="h4-features">Business advice</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="box-3 ">
                <img src={bulb} alt="bulb with sparkles"/>
                <h4 className="h4-features">Startup Business</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="box-4 ">
                <img src={stock} alt="stocks with sparkles"/>
                <h4 className="h4-features">Financial Advice</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="box-5 ">
                <img src={cogbox} alt="cogbox with sparkles"/>
                <h4 className="h4-features">Risk Management</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>


        </div>
    </div>
</section>
  )
}

export default Features