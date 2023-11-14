import React from 'react'
import './Articles.css'

import img_articles from '../../assets/images/articles-1.jpg'
import img2_articles from '../../assets/images/articles-2.jpg'
import img3_articles from '../../assets/images/articles-3.jpg'
import img4_articles from '../../assets/images/dot.png'

const Articles = () => {
  return (
    <section className="articles">
    <div className="container">
        <article className="head-articles">
            <p className="p1-articles"> Articles & News</p>
            <div className="head-flex-articles">
                <h2 className="h2-articles"> Get Every Single Articles & News</h2>
                <button className="btn-yellow btn-articles"> Browse Articles <i
                        className="fa-regular fa-arrow-up-right"></i> </button>
            </div>
        </article>
        <article className="grid-articles">

            <div className="box">
                <div className="img-container">
                    <img className="img-articles" src={img_articles}
                        alt="a teacher sits on a chair in a classroom, smiling shyly looking to the left"/>
                    <div className="text-block">
                        <p className="p-img-container">
                            <strong>25</strong>
                            Mar
                        </p>
                    </div>

                </div>

                <p className="p2-articles">Business</p>
                <h4 className="h4-articles">How To Use Digitalization In The Classroom</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.
                </p>

            </div>


            <div className="box">
                <div className="img-container">
                    <img className="img-articles" src={img2_articles}
                        alt="picture of a computerscreen"/>
                    <div className="text-block">
                        <p className="p-img-container">
                            <strong>17</strong>
                            Mar
                        </p>
                    </div>
                </div>
                <p className="p2-articles">Business</p>
                <h4 className="h4-articles">How To Implement Chat GPT In Your Projects</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.
                </p>
            </div>


            <div className="box">
                <div className="img-container">
                    <img className="img-articles" src={img3_articles}
                        alt="a image of a mobile lying on a stack of books on a desk."/>
                    <div className="text-block">
                        <p className="p-img-container">
                            <strong>13</strong>
                            Mar
                        </p>
                    </div>
                </div>
                <p className="p2-articles">Business</p>
                <h4 className="h4-articles">The Guide To Support Modern CSS Design</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.
                </p>
            </div>
        </article>
        <article className="dots-articles"> <img src={img4_articles} alt=""/> </article>
    </div>
</section>
  )
}

export default Articles