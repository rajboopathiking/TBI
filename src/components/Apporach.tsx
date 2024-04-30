
import nn from "../../public/Images/nn.jpg"
import "../../src/App.css"
export default function Apporach() {
  return (
    <div>

      <div id="Scroll">
        <h1 className='text-center font-bold text-lg'>Model Details</h1>
        <div className='flex justify-center m-5 gap-20 items-center'>
          <div className='px-5'>
            <p className='text-[blue]' id='scroll'>Model-Accuracy: <span className='text-[red]'>98%</span> </p>
            
            <div className='flex flex-col'>
            <p className='text-[blue]'>Model Name: <span className='text-[red]'>Neural Network</span></p>
            <p className='text-[blue]'>Department: <span className='text-[red]'>Machine Learning/AI</span></p>
            </div>
            
          </div>
          <div>
            <img className='h-[200px] rounded-2xl' src={nn} alt="" />
          </div>
        </div>


      </div>


    </div>
  )
}
