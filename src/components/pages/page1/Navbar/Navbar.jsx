import React, { useState } from 'react'
import "./Navbar.css"

export default function Navbar() {
return (
        <div className='nav-main'>
            <div className='nav-logo'>
                <h1 className='logo'>insightmedix</h1>
            </div>
            <div>
                <ul className='list-items'>
                    <li><a href="/"  className='home'>Home</a></li>
                    <li ><a href="/prediction" >Prediction</a></li>
                    <li><a href="/Contact" >Contact</a></li>
                </ul>
                
            </div>
        </div>
    )
}
