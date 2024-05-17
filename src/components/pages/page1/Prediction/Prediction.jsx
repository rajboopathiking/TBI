import React from 'react'
import "./Prediction.css"
import prediction from "../../../../assets/Resource/prediction.png"

export default function Prediction() {
  return (
    <div>
        <h1>Prediction</h1>
        <div className='p-1'>
            <img src={prediction} alt="" />
            <button><a href="/prediction" className='prediction'>Predict</a></button>
        </div>
    </div>
  )
}
