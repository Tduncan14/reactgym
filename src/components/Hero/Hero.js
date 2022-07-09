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
            <span>+140</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+978</span>
            <span>members</span>
          </div>
          <div>
           <span>+50</span>
           <span>fitness programs</span>
          </div>
        </div>

{/* hero buttons */}
        
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn"> Learn More</buttons>
        </div>
        
      </div>
        <div className="right-h"> 
           <button className="btn">Join Now</button>
        
           <div className="heart-rate"> 
              <img src={'./assets/heart.png'} alt="heart" />
              <span>Heart Rate</span> 
              <span>116 bpm</span>
           </div>



           {/* hero images */}

           <img src='./assets/hero_image.png' alt="" className="hero-image" />
           <img src='./assets/hero_image_back.png' alt="" className="hero-image-back"/>

           {/* calories */}

           <div className="calories">
              <img src='./assets/calories.png'/>
              <div>
              <span>Calories Burned</span>   
              <span>220 kcal</span>
              </div>
           </div>
        </div>
       
    </div>
  )
}

export default Hero
