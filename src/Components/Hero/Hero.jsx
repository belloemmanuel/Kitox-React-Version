import React from "react";
import './Hero.css'

const Hero =()=>{
    return(
        <>
         <div className="hero" style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + '/images/kitox.jpg'})` 
}}>
        <div className="hero-content">
            <img src={"./images/logo.png"} alt=""/>
            <h1>30 DAY KETOGENIC MEAL PLAN ULTIMATE WEIGHT LOSS</h1>
            <p>Find out how much weight you'll lose with our diet</p>
            <img src="./images/img1.png" id="img2"  alt=""/>
            <p>*Results vary depending on your starting point, goals, and effort.
                The average participant can expect to lose 1-2 lbs/week.</p>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <p>1028 Customer Reviews</p>
            <button id="hero-button">Get Your Plan</button>
        </div>   
    </div>
        </>
    )
}

export default Hero;