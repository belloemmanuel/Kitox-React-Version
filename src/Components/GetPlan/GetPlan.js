import React from "react";
import './GetPlan.css'
import CalculatePlan from "../CalculatePlan/CalculatePlan";

const GetPlan=()=>{
return(
    <>
      <div className="getplan">
        <div className="getplan-form">
            <div className="form-content">
                <h3>SAVE 50%</h3>
                <h1>LIFETIME ACCESS <br/>TO YOUR MEAL PLAN</h1>
                <img src="./images/mealplan.png" alt=""/>
            </div>
            <CalculatePlan/>
        </div>
    </div>
    </>
)
}

export default GetPlan;
