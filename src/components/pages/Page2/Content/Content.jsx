import React, { useState } from 'react';
import axios from 'axios';
import "../Content/Content.css";

export default function Content() {
    const [isclick, setIsclick] = useState(false);
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        Age: '',
        Sex: '',
        Automated_BP_SBP: '',
        Automated_BP_DBP: '',
        Automated_BP_MAP: '',
        Oxygenation: '',
        Place_of_ICP_Monitoring: '',
        ICP_Range: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Convert form data to list of floats
            const dataList = [
                parseFloat(formData.Age),
                parseFloat(formData.Sex),
                parseFloat(formData.Automated_BP_SBP),
                parseFloat(formData.Automated_BP_DBP),
                parseFloat(formData.Automated_BP_MAP),
                parseFloat(formData.Oxygenation),
                parseFloat(formData.Place_of_ICP_Monitoring),
                parseFloat(formData.ICP_Range)
            ];

            // Make POST request to API
            const response = await axios.post('https://tbi-backend.onrender.com/api', { data: dataList });
            setIsclick(true);
            setResult(response.data["Prediction"]);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <p className='co-1'>TBI Prediction</p>

            <div>
                <form className='forms' id='form' onSubmit={handleSubmit}>
                    <label htmlFor="Age">
                        Age:
                        <input
                            type='text'
                            id='Age'
                            placeholder='Age'
                            value={formData.Age}
                            onChange={handleChange}
                            className='inputs'
                        />
                    </label>

                    <label htmlFor="Sex">
                        Sex:
                        <select
                            id='Sex'
                            value={formData.Sex}
                            onChange={handleChange}
                            className='inputs'
                        >
                            <option value="1">Female</option>
                            <option value="2">Male</option>
                        </select>
                    </label>

                    <label htmlFor="Automated_BP_SBP">
                        Automated BP SBP:
                        <input
                            type='text'
                            id='Automated_BP_SBP'
                            placeholder='Automated BP SBP'
                            value={formData.Automated_BP_SBP}
                            onChange={handleChange}
                            className='inputs'
                        />
                    </label>

                    <label htmlFor="Automated_BP_DBP">
                        Automated BP DBP:
                        <input
                            type='text'
                            id='Automated_BP_DBP'
                            placeholder='Automated BP DBP'
                            value={formData.Automated_BP_DBP}
                            onChange={handleChange}
                            className='inputs'
                        />
                    </label>
                    
                    <label htmlFor="Automated_BP_MAP">
                        Automated BP MAP:
                        <input
                            type='text'
                            id='Automated_BP_MAP'
                            placeholder='Automated BP MAP'
                            value={formData.Automated_BP_MAP}
                            onChange={handleChange}
                            className='inputs'
                        />
                    </label>

                    <label htmlFor="Oxygenation">
                        Oxygenation(spO2):
                        <select
                            id='Oxygenation'
                            value={formData.Oxygenation}
                            onChange={handleChange}
                            className='inputs'
                        >
                            <option value="0">Normal (SpO2 ≥ 95%)</option>
                            <option value="1">AbNormal (SpO2 ≥ 95%)</option>
                        </select>
                    </label>

                    <label htmlFor="Place_of_ICP_Monitoring">
                        Place of ICP Monitoring:
                        <select
                            id='Place_of_ICP_Monitoring'
                            value={formData.Place_of_ICP_Monitoring}
                            onChange={handleChange}
                            className='inputs'
                        >
                            <option value="0">Not Monitored</option>
                            <option value="1">Subdural</option>
                            <option value="2">Ventricle</option>
                            <option value="3">Cerebellum</option>
                        </select>
                    </label>

                    <label htmlFor="ICP_Range">
                        ICP Range:
                        <select
                            id='ICP_Range'
                            value={formData.ICP_Range}
                            onChange={handleChange}
                            className='inputs'
                        >
                            <option value="0">Normal(ICP ≤ 20 mmHg)</option>
                            <option value="1">AbNormal(ICP ≤ 20 mmHg)</option>
                        </select>
                    </label>

                    <button className="b-p" type="submit">Predict</button>
                </form>
            </div>

            {loading && (
                <div className="spinner"></div>
            )}

            {isclick && !loading && (
                <div className='result-main'>
                    <div className='result-main-1'>
                        <p className='result-s'>Condition of the Patient Based On Your Data:</p>
                        <p className='result-d'>{result}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
