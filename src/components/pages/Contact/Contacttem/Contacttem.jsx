import React from "react"
import "../Contacttem/Contacttem.css"
export default function Contacttem() {
    return (
        <div className='main-1' id='Contact'>
            <div className='main-2'>
            <h1 className='main-3'>Contact</h1>
            <p className='main-4'>For Any Queries Contact via Mail</p>
                <form action="boopathiraj.researchbrains@gmail.com">
                    <div className="fo-1">
                        <label htmlFor="Username" >
                            <input className="l-1" type="text" id='Username' placeholder='Username'/>
                        </label>
                        <label htmlFor="email" >
                            <input className="l-2" type="text" id='email' placeholder='Gmail'/>
                        </label>
                    </div>

                    <div className="b-a">
                        <label htmlFor="Query" >
                            <button className="b-c" type="submit">Contact</button>
                        </label >
                    </div>
                    
                </form>
            </div>
            <div className="more" id='Scroll'>
                For More Details regarding the project and Anyother Project Related Queries Contact Me Via Mail
            </div>
        </div>
    )
}
