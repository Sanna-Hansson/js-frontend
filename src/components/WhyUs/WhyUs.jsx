import React from 'react'
import './WhyUs.css'
import img_whyUs from '../../assets/images/amy-hirschi-K0c8ko3e6AA-unsplash.jpg'
import img2_whyUs from '../../assets/images/Glitter-thumbsup.svg'
import img3_whyUs from '../../assets/images/webbing.svg'
import img4_whyUs from '../../assets/images/Fountainpen-magic.svg'
import img5_whyUS from '../../assets/images/Head-cogwheel.svg'


const WhyUs = () => {
  return (
    <section className="why-us">
    <div className="container">
        <div className="content">
            <div className="textbox">
                <div className="box-1">
                    <p className="p1-whyus">Why Choose Us</p>
                    <h2 className="h2-whyus">Why We Are The Best Business Consulting Agency</h2>
                </div>
                <div className="box-2">
                    <div> <a href="http://"><button className="btn-circle btn-whyus">
                                <img className="img2-whyus" src={img2_whyUs} alt=""/>
                            </button></a></div>
                    <div>
                        <h4 className="h4-whyus">Process Excellence</h4>
                        <p className="p2-whyus">Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="box-2">
                    <div> <a href="http://"><button className="btn-circle btn-whyus">
                                <img src={img3_whyUs} alt=""/>
                            </button></a></div>
                    <div>
                        <h4 className="h4-whyus">Strategic Planning</h4>
                        <p className="p2-whyus">Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="box-2">
                    <div> <a href="http://"><button className="btn-circle btn-whyus">
                                <img src={img4_whyUs} alt=""/>
                            </button></a></div>
                    <div>
                        <h4 className="h4-whyus">Experience Design</h4>
                        <p className="p2-whyus">Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="box-2 ">
                    <div> <a href="http://"><button className="btn-circle btn-whyus">
                                <img src={img5_whyUS} alt=""/>
                            </button></a></div>
                    <div>
                        <h4 className="h4-whyus">Artificial Inteligence</h4>
                        <p className="p2-whyus">Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
            <div className="imgbox">
                <div className="colorbox">
                </div>
                <div>
                    <img className="img-whyus" src={img_whyUs}
                        alt=" two middle aged women sitting in a meeting"/>
                </div>
            </div>

        </div>

    </div>
</section>
  )
}

export default WhyUs