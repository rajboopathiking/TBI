
import "../App.css"
export default function Contact() {
    return (
        <div className='flex items-center justify-center' id='Contact'>
            <div className='m-10  bg-purple-300 p-2 py-10 rounded-[20px]'>
            <h1 className='font-bold relative left-[15%] text-[30px] flex m-2  text-black'>Contact</h1>
            <p className='mx-10 sm:hidden text-black'>For Any Queries Contact via Mail</p>
                <form action="mailto:{}">
                    <div>
                        <label htmlFor="Username">
                            <input className='border border-black rounded h-10 m-2 p-2 sm:w-[90%]' type="text" id='Username' placeholder='Username'/>
                        </label>
                        <label htmlFor="email">
                            <input className='border border-black rounded h-10 m-2 p-2 sm:w-[90%]' type="text" id='email' placeholder='email'/>
                        </label>
                    </div>

                    <div>
                        <label htmlFor="Query" >
                            <input className='border h-30 w-[500px] border-black rounded h-10 m-2 p-2 sm:w-[90%]' type="text" id='Query' placeholder='Please Write Your Queries'/>
                        </label>
                    </div>
                    <div className='m-5'>
                        <button className='bg-[red] text-white rounded w-20 h-10 ' type="submit">Contact</button>
                    </div>
                    
                </form>
            </div>
            <div className='w-[300px] font-bold sm:hidden md:hidden' id='Scroll'>
                For More Details regarding the project and Anyother Project Related Queries Contact Me Via Mail
            </div>
        </div>
    )
}
