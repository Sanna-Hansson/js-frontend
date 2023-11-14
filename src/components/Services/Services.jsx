import React from 'react'
import './Services.css'
import img_back_services from '../../assets/images/background-lines-right.svg'
const Services = () => {
  return (
    
    <section className="services">
    <img className="img-back-services" src={img_back_services} alt=""/>
   <div className="container">

       <div className="content ">
           <div className="box-1 ">
               <p className="p1-services">Our Services</p>
               <h2 className="h2-services">We Provide The Best <br/> Service For Consulting</h2>
           </div>

           <div className="box-2 ">
               <hr className="hr-services"/>
               <p className="p2-services"> <strong>Business Advice</strong>
                   <br/><br/>
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.
               </p>
               <a href="http://"><button className="btn-circle btn-cs"><i
                           className="fa-light fa-arrow-right "></i></button></a>
           </div>

           <div className="box-3 ">
               <hr className="hr-services"/>
               <p className="p2-services"><strong>Startup Business</strong>
                   <br/><br/>
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.
               </p>
               <a href="http://"><button className="btn-circle btn-cs"><i
                           className="fa-light fa-arrow-right "></i></button></a>
           </div>


           <div className="box-4 ">
               <hr className="hr-services"/>
               <p className="p2-services"><strong>Finacial Advice</strong>
                   <br/><br/>
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.
               </p>
               <a href="http://"><button className="btn-circle btn-cs"><i
                           className="fa-light fa-arrow-right "></i></button></a>
           </div>


           <div className="box-5 ">
               <hr className="hr-services"/>
               <p className="p2-services"> <strong>Risk Management</strong>
                   <br/><br/>
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.
               </p>
               <a href="http://"><button className="btn-circle btn-cs"><i
                           className="fa-light fa-arrow-right "></i></button></a>
           </div>
           <div className="box-6 ">

               <a href="http://services.html"> <button className="btn-transparent btn-services">Browse
                       Services <i className="fa-regular fa-arrow-up-right"></i> </button></a>


           </div>
       </div>
   </div>
</section>

  )
}

export default Services