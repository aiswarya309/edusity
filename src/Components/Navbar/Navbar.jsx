import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

export const Navbar = () => {
    const [sticky,setSticky] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY >50 ?setSticky(true):setSticky(false)
        })
    })
    return (
        <nav className={`container ${sticky?'dark-nav':''}`}>
            <img src={logo} alt='logo image' className='logo'/>
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li><button className='btn'>contact us</button></li>
            </ul>
        </nav>
    )
}
