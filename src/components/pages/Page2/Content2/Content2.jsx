import React from 'react'

export default function Content2() {
  return (
    <div>
        <h1>TBI Prediction</h1>


        <div>
            <form action="">
                <input type="text" placeholder='Age'/>
                <select name="Sex" id="">
                    <option value="1">Female</option>
                    <option value="2">Male</option>
                </select>
                <input type="text" placeholder='Automated BP SBP'/>
                <input type="text" placeholder='Automated BP DBP'/>
                <input type="text" placeholder='Automated BP MAP'/>
                <select name="Oxygenation(spO2)" id="">
                    <option value="0">Normal (SpO2 ≥ 95%)</option>
                    <option value="1">ABNormal (SpO2 ≥ 95%)</option>
                </select>
                <select name="Place of ICP Monitoring" id="">
                    <option value="0">Not Monitored</option>
                    <option value="1">Subdural</option>
                    <option value="2">Ventricle</option>
                    <option value="3">Cerebellum</option>
                </select>
                <select name="ICP Range" id="">
                    <option value="0">Normal (ICP ≤ 20 mmHg)</option>
                    <option value="1">ABNormal (ICP ≤ 20 mmHg)</option>
                </select>
                <button type="submit">Predict</button>
            </form>
        </div>
    </div>
  )
}
