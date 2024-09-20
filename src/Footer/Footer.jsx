import React,  { useState, useRef, useEffect } from 'react'
import logo from '../rpLogoWhite.png';
import'../Footer/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {

    const [blurredButtonIndex, setBlurredButtonIndex] = React.useState(null);

    const handleMouseOver = (index) => {
        setBlurredButtonIndex(index);
    };

    const handleMouseOut = () => {
        setBlurredButtonIndex(null);
    };

    const navItems = [
        { name: 'HOME', path: '/' },
        { name: 'PROJECTS', path: '/projects' },
        { name: 'ABOUT', path: '/about' },
        { name: 'CONTACT', path: '/contact' },
    ];



  return (
    <div className='Footer'>
        <div className='Main'>
           
            <div className='mobile-nav-items-3'>
            {navItems.map((item, index) => (
                        <Link
                            to={item.path}
                            key={index}
                            className="nav-link"
                        >
                            <button
                                className={blurredButtonIndex !== null && blurredButtonIndex !== index ? 'blur' : ''}
                                onMouseOver={() => handleMouseOver(index)}
                                onMouseOut={handleMouseOut}
                            >
                                {item.name}
                            </button>
                        </Link>
                    ))}
            </div>

            <div className='contact'>
                <p>muhammadabdullo0204@gmail.com</p>
                <p>+998 94 683 14 59</p>

            </div>

            <div className='logo'>
            <a href="#">  <img width="80px" height="80px" src={logo} alt="Logo" /></a>
            </div>
        </div>
        
    </div>
  )
}

export default Footer