import { useState } from 'react';
import React from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import "../Content/Content.css";

export default function Content() {
    const [isclick, setIsclick] = useState(false);
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false); // State to track loading status
    const [formData, setFormData] = useState({
        Age: '',
        Sex: '',
        Problem_nature: '',
        TBI: '',
        DC: '',
        Craniectomy: '',
        Haematom_after_DC: '',
        Type_of_hematoma: '',
        Other_surgeries_post_operatively: '',
        Days_after_1st_surgery: '',
        Oxygenation: '',
        Place_of_ICP_monitoring: '',
        ICP_Range: '',
        Hospitalization: '',
        ICU_stay: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when the form is submitted
        try {
            // Convert form data to list of floats
            const dataList = Object.values(formData).map(parseFloat);

            // Make POST request to API
            const response = await axios.post('https://tbi-backend.onrender.com/api', { data: dataList });
            
            // Update state and display prediction
            setIsclick(true);
            console.log(response.data);
            setResult(response.data["Prediction"]);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false); // Set loading to false when the request is complete
        }
    };

    return (
        <div>
            <p className='co-1'>TBI Prediction</p>

            <div>
                <form className='forms' id='form' onSubmit={handleSubmit}>
                    {/* Render input fields */}
                    {Object.entries(formData).map(([key, value]) => (
                        <label key={key} htmlFor={key}>
                            <input
                                type='text'
                                id={key}
                                placeholder={key}
                                value={value}
                                onChange={handleChange}
                                className='inputs'
                            />
                        </label>
                    ))}
                    <button className="b-p" type="submit">Predict</button>
                </form>
            </div>
            
            {/* Display loading spinner */}
            {loading && (
                <div className="spinner"></div>
            )}

            {/* Display prediction */}
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
