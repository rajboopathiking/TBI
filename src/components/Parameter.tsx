import TrainAcc from "../../public/Images/Plots/Accuracy.png"
import Loss from "../../public/Images/Plots/Loss.png"
import "../App.css"

export default function Parameter() {
    return (
        <div>
            <h1 className='text-xl font-bold text-center'>Evaluation</h1>
            <div className='flex justify-center items-center gap-20 m-5'>
                <div>
                    <h1 className='text-[red]'>ACCURACY:</h1>
                    <p className='w-[500px] p-5'>This Graph representation Provide complete details regarding training and testing Accuracy per Epochs.Total Epochs and Accuracy Provided</p>
                </div>

                <img className='h-[200px] rounded-2xl' src={TrainAcc} alt="" />
            </div>
            <div className='flex justify-center items-center gap-20'>
                <img className='h-[200px] rounded-2xl' src={Loss} alt="" />
                <div>

                    <h1 className='text-[red]'>LOSS:</h1>
                    <p className='w-[500px] m-5'>This Graph representation Provide complete details regarding training and testing Loss per Epochs.Total Epochs and Loss Provided</p>
                </div>


            </div>
        </div>
    )
}
