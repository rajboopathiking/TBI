import React from 'react'
import "./Hero.css"
import Image1 from "../../../../assets/Resource/Hero.png"
import Image2 from "../../../../assets/Resource/contact us.png"
export default function Hero() {
    return (
        <div>
            <div className='hero-image'>
                <div className='hero-1'>
                    <h1>insightmedix</h1>
                    <p className='intro-1'>Welcome to InsightMedix </p>
                    <p className='intro-p-1'>Revolutionizing Healthcare Predictive Analytics!</p>
                    <p className='intro-2'>At InsightMedix, we're dedicated to transforming healthcare delivery through advanced
                        predictive analytics. Our cutting-edge system leverages the power of data to enable timely
                        interventions, improving patient outcomes and revolutionizing healthcare delivery.</p>
                    <button><a href="/Contact" className='c-1'>Contact Us</a></button>
                </div>
                <div className='hero-2'>
                    <img src={Image1} height={"350px"} width={"350px"} className='hero-img-2' alt="" />
                </div>
            </div>

        </div>
    )
}
