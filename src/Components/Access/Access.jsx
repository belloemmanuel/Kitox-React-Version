import React from "react";
import './Access.css'

const Access=()=>{
    return(
        <>
        <div className="instant-access">
            <div className="firstsection">
                <div className="firstsection-head">
                <h3>What You Get</h3>
                <h1>INSTANT ACCESS</h1>
                <p>For a Low 1-Time Payment</p>  
                </div>
                <div className="benefits">
                    <div className="benefits-items">
                        <i className="fa-light fa fa-circle-check"></i>
                        <div className="benefits-item">
                        <p><strong>Daily 5-Star Keto Meal Plan</strong></p> 
                         <p>100% personalized to YOUR metabolic type & weight loss goal</p>
                        </div>
                    </div>
                    <div className="benefits-items">
                        <i className="fa-light fa fa-circle-check"></i>
                        <div className="benefits-item">
                        <p><strong>Get Results Quickly & Easily</strong></p>
                        <p>Breakfast, lunch, afternoon snack, dinner & even dessert — every day!</p>
                        </div>
                    </div>
                    <div className="benefits-items">
                        <i className="fa-light fa fa-circle-check"></i>
                        <div className="benefits-item">
                        <p><strong>We’ve Done All The Work For You!</strong></p>
                        <p>Save time and money because we've done everything for you!</p>
                        </div>
                    </div>
                    <div className="benefits-items">
                        <i className="fa-light fa fa-circle-check"></i>
                        <div className="benefits-item">
                        <p><strong>Cravings Eliminator System</strong></p> 
                        <p>Discover how to avoid common mistakes & do keto right</p>
                        </div>
                    </div>
                    <div className="benefits-items">
                        <i className="fa-light fa fa-circle-check"></i>
                        <div className="benefits-item">
                        <p><strong>Keto-On-The-Go Manual</strong></p>
                        <p>Stay on track — even when eating out! We show you how.</p>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="secondsection">
                <img src="./images/bg2.png" alt=""/>
            </div>
        </div>
        </>
    )
}

export default Access;