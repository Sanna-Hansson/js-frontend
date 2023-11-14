import React from 'react'
import './Projects.css'
import img_projects from '../../assets/images/adeolu-eletu-E7RLgUjjazc-unsplash.jpg'
import img2_projects from '../../assets/images/marek-levak-zANXcXyByos-unsplash.jpg'
import img3_projects from '../../assets/images/oli-dale-xjSkI_seiZY-unsplash.jpg'
import img4_projects from '../../assets/images/carlos-muza-hpjSkU2UYSU-unsplash.jpg'

const Projects = () => {
  return (
    <section className="projects">
    <div className="container">

        <div className="section-title">
            <p className="p1-projects">Project & Case Studies</p>
            <h2 className="h2-projects">Lets Looks Our Global Projects</h2>
        </div>
        <div className="article-projects">
            <div className="box">
                <img className="img-projects" src={img_projects}
                    alt=" man in suit reading a buisnesspaper"/>
                <h4 className="h4-projects">Grow your business</h4>

                <a className="alink-projects" href="http://"> Read More <i
                        className="fa-regular fa-arrow-up-right"></i></a>
            </div>
            <div className="box">
                <img className="img-projects" src={img2_projects}
                    alt=" desk with pink suplies"/>
                <h4 className="h4-projects">Why your client needs a responsive website</h4>

                <a className="alink-projects" href="http://"> Read More <i
                        className="fa-regular fa-arrow-up-right"></i></a>
            </div>
            <div className="box">
                <img className="img-projects" src={img3_projects}
                    alt="a white coffeecup sitting on a desk by a notebook"/>
                <h4 className="h4-projects">Educate your employees to get better results</h4>

                <a className="alink-projects" href="http://"> Read More <i
                        className="fa-regular fa-arrow-up-right"></i></a>
            </div>
            <div className="box">
                <img className="img-projects" src={img4_projects}
                    alt=" a laptop on a glass table"/>
                <h4 className="h4-projects">Business Insights is a important piece of your business</h4>

                <a className="alink-projects" href="http://"> Read More <i
                        className="fa-regular fa-arrow-up-right"></i></a>
            </div>

        </div>
        <div className="btn-box">
            <button className="btn-black btn-projects">All Recent Projects <i
                    className="fa-regular fa-arrow-up-right"></i></button>
        </div>



    </div>
</section>
  )
}

export default Projects