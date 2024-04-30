import Image1 from "../../public/Images/Edge TBI - Images/DC.jpg"
import Image2 from "../../public/Images/Edge TBI - Images/Severe TBI.jpg"
import Hematoma from "../../public/Images/Edge TBI - Images/Hematoma.jpg"
import Image6 from "../../public/Images/Downloads/Image-6.jpg"
import Image7 from "../../public/Images/Downloads/Image7.jpg"
import Image5 from "../../public/Images/Downloads/Image5.jpg"
import Image8 from "../../public/Images/Downloads/Image-8.jpg"
import Image9 from "../../public/Images/Downloads/Image9.jpg"
export default function Features() {
  return (
    <div>
        <h1 className='text-xl font-bold text-center m-5'>Features</h1>


        <div>
            <ol className='flex justify-center gap-20 p-5 flex-wrap'>
                <li>
                    <div className='w-[250px] h-[500px] p-5 bg-white text-black rounded-lg flex justify-center flex-col items-center'>
                        <img className='rounded-2xl w-[250px]' src={Image1} alt="" />
                        <h1 className='text-[blue] font-bold'>DC - Decompressive Craniectomy:</h1>
                        <p>Surgical procedure involving the removal of a portion of the skull to relieve pressure on the brain. </p>

                        
                    </div>
                    
                </li>
                <li><div className='w-[250px] h-[500px] p-5 bg-white text-black rounded-lg flex justify-center flex-col items-center'>
                        <img className='rounded-2xl w-[250px]' src={Image2} alt="" />
                        <h1 className='text-[blue] font-bold'>TBI - Traumatic Brain Injury:</h1>
                        <p> Refers to an injury to the brain caused by an external force, potentially resulting in cognitive, physical, and emotional impairments.</p>

                        
                    </div></li>
                <li><div className='w-[250px] p-5 h-[500px] bg-white text-black rounded-lg flex justify-center flex-col items-center'>
                        <img className='rounded-2xl w-[250px]' src={Hematoma} alt="" />
                        <h1 className='text-[blue] font-bold'>Hematoma after DC - Hematoma after Decompressive Craniectomy:</h1>
                        <p>Refers to the occurrence of blood clots or collections of blood in the brain following a decompressive craniectomy.</p>

                        
                    </div></li>
                <li><div className='w-[250px] h-[500px] p-5 bg-white text-black rounded-lg flex justify-center flex-col items-center'>
                        <img className='rounded-2xl w-[200px]' src={Image6} alt="" />
                        <h1 className='text-[blue] font-bold'>SBP - Systolic Blood Pressure:</h1>
                        <p className='w-[200px]'> Represents the maximum pressure exerted by the blood against the arterial walls when the heart contracts. </p>

                        
                    </div></li>
                <li><div className='w-[250px] h-[500px] p-5 bg-white text-black rounded-lg flex justify-center flex-col items-center'>
                        <img className='rounded-2xl w-[200px]' src={Image5} alt="" />
                        <h1 className='text-[blue] font-bold'>DBP - Diastolic Blood Pressure: </h1>
                        <p>Reflects the minimum pressure in the arteries between heartbeats when the heart is at rest.</p>

                        
                    </div></li>
                <li><div className='w-[250px] h-[500px] p-5 bg-white text-black rounded-lg flex justify-center flex-col items-center'>
                        <img className='rounded-2xl w-[200px]' src={Image7} alt="" />
                        <h1 className='text-[blue] font-bold'>MAP - Mean Arterial Pressure:</h1>
                        <p> Represents the average pressure in the arteries during one cardiac cycle. </p>

                        
                    </div></li>
                <li><div className='w-[250px] h-[500px] p-5 bg-white text-black rounded-lg flex justify-center flex-col items-center'>
                        <img className='rounded-2xl w-[200px]' src={Image8} alt="" />
                        <h1 className='text-[blue] font-bold'>Oxygenation / SpO2 - Oxygen Saturation Levels:</h1>
                        <p> Measures the percentage of hemoglobin saturated with oxygen in the blood. </p>

                        
                    </div></li>
                <li><div className='w-[250px] h-[500px] p-5 bg-white text-black rounded-lg flex justify-center flex-col items-center'>
                        <img className='rounded-2xl w-[200px]' src={Image9} alt="" />
                        <h1 className='text-[blue] font-bold'> Place of ICP Monitoring - Intracranial Pressure Monitoring Location:</h1>
                        <p> Refers to the site where intracranial pressure measurements are taken to assess brain pressure.</p>

                        
                    </div></li>
                {/* <li><div className='w-[200px] p-5 bg-white text-black rounded-lg flex justify-center flex-col items-center'>
                        <img className='rounded-2xl w-[200px]' src={Image1} alt="" />
                        <h1>DC</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis excepturi placeat dolorem sit nostrum harum porro, totam cupiditate temporibus voluptate!</p>

                        
                    </div></li>
                <li><div className='w-[200px] p-5 bg-white text-black rounded-lg flex justify-center flex-col items-center'>
                        <img className='rounded-2xl w-[200px]' src={Image1} alt="" />
                        <h1>ICU - Intensive Care Unit:</h1>
                        <p> Specialized medical unit providing intensive care to critically ill patients. </p>

                        
                    </div></li>
                <li><div className='w-[200px] p-5 bg-white text-black rounded-lg flex justify-center flex-col items-center'>
                        <img className='rounded-2xl w-[200px]' src={Image1} alt="" />
                        <h1>DC</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis excepturi placeat dolorem sit nostrum harum porro, totam cupiditate temporibus voluptate!</p>

                        
                    </div></li>
                <li><div className='w-[200px] p-5 bg-white text-black rounded-lg flex justify-center flex-col items-center'>
                        <img className='rounded-2xl w-[200px]' src={Image1} alt="" />
                        <h1>DC</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis excepturi placeat dolorem sit nostrum harum porro, totam cupiditate temporibus voluptate!</p>

                        
                    </div></li>
                <li><div className='w-[200px] p-5 bg-white text-black rounded-lg flex justify-center flex-col items-center'>
                        <img className='rounded-2xl w-[200px]' src={Image1} alt="" />
                        <h1>DC</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis excepturi placeat dolorem sit nostrum harum porro, totam cupiditate temporibus voluptate!</p>

                        
                    </div></li>
                <li><div className='w-[200px] p-5 bg-white text-black rounded-lg flex justify-center flex-col items-center'>
                        <img className='rounded-2xl w-[200px]' src={Image1} alt="" />
                        <h1>DC</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis excepturi placeat dolorem sit nostrum harum porro, totam cupiditate temporibus voluptate!</p>

                        
                    </div></li>
                <li><div className='w-[200px] p-5 bg-white text-black rounded-lg flex justify-center flex-col items-center'>
                        <img className='rounded-2xl w-[200px]' src={Image1} alt="" />
                        <h1>DC</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis excepturi placeat dolorem sit nostrum harum porro, totam cupiditate temporibus voluptate!</p> */}

{/*                         
                    </div></li> */}
            </ol>
        </div>
    </div>
  )
}
