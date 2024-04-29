import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import "../App.css"


export default function Content() {
    const [isclick, setIsclick] = useState(false);
    const[result,setResult] = useState('')
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
        try {
            // Convert form data to list of floats
            const dataList = Object.values(formData).map(parseFloat);

            // Make POST request to API
            const response = await axios.post('http://127.0.0.1:5000/api', { data: dataList });
            
            // Update state and display prediction
            setIsclick(true);
            console.log(response.data);
            setResult(response.data["Prediction"])
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <p className='text-center  font-bold m-5'>TBI Prediction</p>

            <div>
                <form  className='gap-5 my-10 grid m-10 content-center lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 justify-center' id='form' onSubmit={handleSubmit}>
                    {/* Render input fields */}
                    {Object.entries(formData).map(([key, value]) => (
                        <label key={key} htmlFor={key}>
                            <input
                                type='text'
                                id={key}
                                placeholder={key}
                                value={value}
                                onChange={handleChange}
                                className='font-bold border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500'
                            />
                        </label>
                    ))}
                    <button className='w-[200px] px-5 bg-[blue] text-white rounded-[5px] h-10 m-2' type="submit">Predict</button>
                </form>
            </div>
            {/* Display prediction */}
            {isclick && (
                <div className='m-10 border rounded'>
                    <p className='text-center font-bold mt-10'>Condition of the Patient Based On Your Data:</p>
                    <p className='text-center mb-10' >{result}</p>
                </div>
            )}
        </div>
    );
}
