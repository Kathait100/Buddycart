import React from 'react'
import './Section.css';
import homeimg1 from '../Assets/homeimg1.png'
const Section = () => {
    return (
        <div id = "section">
          <div id ="section-1">
            <div id ="inner-section-1">
                <h1>Want Your Local</h1>
                <h1> Street Food?</h1>
            </div>
               
            <div id = "inner-section-2">
               <h3>Order Smart And Save It Now.</h3>
               <span>Order Now</span>
            </div>
            </div>
            <div className = "section-2">
                 <img src = {homeimg1}  alt = "" />
            </div>
        </div>
    )
}

export default Section
