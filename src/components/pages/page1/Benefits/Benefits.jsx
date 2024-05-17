import React from 'react'
import "./Benefits.css"
import Benefit from "../../../../assets/Resource/benefits.png"
export default function Benefits() {
    return (
        <div>
            <h1 className='be-h'>Benefits</h1>
            <div className='be-a'>
                <div className='be-1'>
                    <img src={Benefit} width={"350px"} height={"350px"} alt="" />
                </div>
                <div className='be-2'>
                    <ul>
                        <li><h3>Early Detection:</h3><p>Our system enables early detection of critical conditions, allowing
                            for proactive interventions to improve patient outcomes.</p></li>
                        <li><h3>Improved Patient Outcomes:</h3><p>By facilitating timely interventions, we help improve
                            patient outcomes and enhance overall healthcare delivery.</p></li>
                        <li><h3>Streamlined Healthcare Delivery:</h3><p>Our system streamlines healthcare delivery
                            processes, reducing inefficiencies and enhancing workflow efficiency.</p></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
