import React from "react";
import './HowKitoWorks.css'

const HowKitoWorks=()=>{
return(
    <>
    <div className="how-keto-works">
        <img src="./images/howitworks.png" className="img1" alt=""/>
        <h1>HOW KETO WORKS...</h1>
        <div className="how-keto-works-contents">
            <h3>Quick Tips</h3>
            <p>The Keto Diet is a low carb, high fat, moderate protein diet. When you eat according to this plan, your metabolism switches to burning stored body fat for energy.</p>
            <p>The keto diet has been shown to reduce and stabilize blood sugar, help immunity and promote weight loss. The keto diet works for many people who have not had success losing weight in the past.</p>
            <h3>Clinical Benefits Of The Keto Diet</h3>
            <div className="benefits">
                <div className="benefits-items">
                    <i className="fa-light fa fa-circle-check"></i>
                    <p><strong>weight Loss And Anti-Aging</strong><span> - Harvard 2018 Study, Cell Metab 2017</span></p>
                </div>
                <div className="benefits-items">
                    <i className="fa-light fa fa-circle-check"></i>
                    <p><strong>Boost Immune Response</strong><span> - Science Immunology Yale 2019 Study</span></p>
                </div>
                <div className="benefits-items">
                    <i className="fa-light fa fa-circle-check"></i>
                    <p><strong>Help Regulate Blood Sugar</strong><span> - London 2005 Study
                    </span></p>
                </div>
                <div className="benefits-items">
                    <i className="fa-light fa fa-circle-check"></i>
                    <p><strong>Reduce Cholesterol And Triglycerides</strong><span> - Clinical Cardiology 2004 Study
                    </span></p>
                </div>
                <div className="benefits-items">
                    <i className="fa-light fa fa-circle-check"></i>
                    <p><strong>Improve Mood, Wellbeing & Quality Of Life</strong><span> - Neuroscience 2018 Study</span></p>
                </div>
                <div className="benefits-items">
                    <i className="fa-light fa fa-circle-check"></i>
                    <p><strong>Reduced Blood Pressure</strong><span> - Archives of Internal Medicine 2010 Study</span></p>
                </div>
            </div>     
        </div>
        <img src="./images/bg.png" className="img2" alt=""/>
    </div>
    </>
)
}

export default HowKitoWorks;

