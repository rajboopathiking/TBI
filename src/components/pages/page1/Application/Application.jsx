import React from 'react'
import "./Application.css"
import application1 from "../../../../assets/Resource/Application1.jpg"
import application2 from "../../../../assets/Resource/Application2.jpg"
export default function Application() {
    return (
        <div >
            <h1>Applications</h1>
            <div className='a-main'>
                <div className='a-1'>
                    <ul>
                        <li><h3>Monitoring and Prediction for Various Illnesses:</h3><p>Our system is versatile and can be
                            customized to monitor and predict a wide range of illnesses and medical conditions.</p></li>
                    </ul>
                    <div>
                        <img src={application1} width={"200px"} height={"200px"} alt="" />
                    </div>

                </div>
                <div className='a-2'>
                    <div>
                        <img src={application2} width={"200px"} height={"200px"} alt="" />
                    </div>
                    <ul>
                        <li><h3>Monitoring and Prediction for Various Illnesses:</h3><p>Our system is versatile and can be
                            customized to monitor and predict a wide range of illnesses and medical conditions.</p></li>
                    </ul>

                </div>
            </div>

        </div>
    )
}
