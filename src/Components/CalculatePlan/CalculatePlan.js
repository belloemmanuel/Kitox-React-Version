import React, { useState, useRef } from "react";
import './CalculatePlan.css'

const CalculatePlan =()=>{

    const [text, setText] = useState('')
    const isNaNColor = useRef()
    let totalPrice = parseInt(text)*0.5
    let message;
    if (text == '') {
        message = <p><span id="totalprice"><em>Please Enter A Regular Price</em></span></p>;
    } else if (isNaN(text)) {
        message = <p ref={isNaNColor}><span id="totalprice"><em>Please Enter A Valid Price</em>
        </span></p>
        console.log(isNaNColor)
    } else{
        message = <p><span id="totalprice">${totalPrice}</span></p>;
    }

return(
    <>
     <div className="form-entry">
                <div className="first-form-entry">
                    <p>Regular price</p>
                    <p>$<input value={text} maxLength="2" className="regularprice" onChange={e => setText(e.target.value)}/></p> 
                </div>
                <div className="first-form-entry" style={{color:"#FF3D00"}}>
                    <p>Flash-Sale Discount applied</p>
                    <p>-50%</p>
                </div>
                <hr/>
                <div id="third-form-entry" className="first-form-entry">
                    <p>Total price</p>
                   <span>
                    {message}
                   </span>
                </div>
                <h3>ENJOY A LIFETIME OF HEALTH JUST CLICK <br/> BELOW TO GET STARTED!</h3>  
            </div>
            <button id="form-button">Get Your Plan</button>
    </>
)
}

export default CalculatePlan;