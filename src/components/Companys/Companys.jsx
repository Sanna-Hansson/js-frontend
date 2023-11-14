import React from 'react'
import './Companys.css'
const Companys = () => {
  return (
    <section className="company-friends">
    
    <div className="container">
        <div className="content">
            <a href="http://paperz.com" target="_blank" className="alink-cf"> <img src="src/assets/images/paperz.svg"
                    alt="Paperz, our friend"/> </a>
            <a href="http://dorfus.com" target="_blank" className="alink-cf"> <img src="src/assets/images/dorfus.svg"
                    alt="Dorfus, our friend"/> </a>
            <a href="http://martino.com" target="_blank" className="alink-cf"> <img src="src/assets/images/martino.svg"
                    alt="Martino, our friend"/> </a>
            <a href="http://square.com" target="_blank" className="alink-cf"> <img src="src/assets/images/square.svg"
                    alt="Square, our friend"/> </a>
            <a href="http://gobona.com" target="_blank" className="alink-cf"> <img src="src/assets/images/gobona.svg"
                    alt="Gobona, our friend"/> </a>
        </div>
    </div>
</section>
  )
}

export default Companys