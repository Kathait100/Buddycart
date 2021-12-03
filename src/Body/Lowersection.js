import React from 'react'
import './Lowersection.css';
import sectionimg1 from '../Assets/sectionimg1.jpg';
import sectionimg2 from '../Assets/sectionimg2.jpg';
import sectionimg3 from '../Assets/sectionimg3.jpg';
import sectionimg4 from '../Assets/sectionimg4.png';
const Lowersection = () => {
    return (
        <div className = "lower-section">
            <div className = "lower-section-1">
                <div className="lower-section-1-1">
                   <div className = "lower-section-1-1-1">
                     <h2>1. Connect Your Buddy</h2>
                     <span>Scan Or Add Your Buddy Cart</span>
                   </div>
                     <img src = {sectionimg1} width = "120px" alt = "Image1" />
                </div>
                <div className="lower-section-1-2">
                 <img src ={sectionimg2} width = "120px" alt = "Image2" />
                    <div className ="lower-section-1-2-1">
                      <h2>2. Order Your Meal</h2>
                      <span className = "subtitle">Request Your Order</span>
                    </div>
                </div>
            </div>
            <div className ="lower-section-2">
            <div className="lower-section-2-1">
                   <div className = "lower-section-2-1-1">
                     <h2>3. Get Qoutes</h2>
                     <span>Get Preparation Time And Availability</span>
                   </div>
                     <img src = {sectionimg3} width = "120px" alt = "Image3" />
                </div>
                <div className="lower-section-2-2">
                 <img src ={sectionimg4} width = "100px" height ="100px" alt = "Image4" />
                    <div className ="lower-section-2-2-1">
                      <h2>4.Enjoy Your Meal</h2>
                      <span className = "subtitle">Save Your Time And Grab Your Hot</span><br/> 
                      <span className = "subtitle">And Fresh Prepared Meal On Time.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lowersection
