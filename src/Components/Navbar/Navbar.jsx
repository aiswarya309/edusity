import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

export const Navbar = () => {
    return (
        <nav className='container'>
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
