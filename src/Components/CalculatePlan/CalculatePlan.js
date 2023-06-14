import React, { useState, useRef } from "react";
import './CalculatePlan.css'

const CalculatePlan =()=>{
    const [text, setText] = useState('')
    const isNaNColor = useRef()
    let totalPrice = Number(text*0.5)
    let message;
    if (totalPrice == '') {
        message = <p><span id="totalprice"><em>Please Enter A Regular Price</em></span></p>;
    } else if (isNaN(totalPrice)) {
        console.log(isNaNColor.current)
        message = <p ref={isNaNColor}><span id="totalprice"><em>Please Enter A Valid Price</em>
        </span></p>
    } else{
        message = <p><span id="totalprice">{totalPrice}</span></p>;
    }

return(
    <>
     <div className="form-entry">
                <div className="first-form-entry">
                    <p>Regular price</p>
                    <p>$<input value={text} maxLength="" className="regularprice" onChange={e => setText(e.target.value)}/></p> 
                </div>
                <div className="first-form-entry" style={{color:"#FF3D00"}}>
                    <p>Flash-Sale Discount applied</p>
                    <p>-50%</p>
                </div>
                <hr/>
                <div id="third-form-entry" className="first-form-entry">
                    <p>Total price</p>
                    {message}
                </div>
                <h3>ENJOY A LIFETIME OF HEALTH JUST CLICK <br/> BELOW TO GET STARTED!</h3>  
            </div>
            <button id="form-button">Get Your Plan</button>
    </>
)
}

export default CalculatePlan;