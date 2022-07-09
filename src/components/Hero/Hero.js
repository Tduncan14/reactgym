import React from 'react'
import Header from '../Header/Header';
import './Hero.css';
import './../Header/Header.css'


const Hero = () => {
  return (
    <div className="hero">


        <div className="left-h"> 
        <Header />
{/* the best ad */}
        <div className="the-best-ad">
          <div></div>
          <span> The best fitness club in the town</span>
        </div>
        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">
              Shape
            </span>
            <span>
              Your
            </span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In Here we will help you to shape and build your ideal body and live up your life to fullest
            </span>
          </div>
          
        </div>

        {/* figures */}

        <div className="figures">
          <div>
            <span></span>
            <span></span>
          </div>
          <div>
            <span></span>
            <span></span>
          </div>
          <div>
           <span></span>
           <span></span>
          </div>
        </div>


      </div>
        <div className="right-h"> </div>
       
    </div>
  )
}

export default Hero
