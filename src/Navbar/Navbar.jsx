import React, { useState, useRef, useEffect } from 'react';
import logo from '../rpLogoWhite.png';
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 770) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);




    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);



    const handleMenuOpen = () => {
        setIsMenuOpen(true);
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };




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
        <div>
            <div className="Navbar" id='Navbar'>
                <div className="nav-logo animate__fadeInLeft ">
                    <a href="#">  <img width="80px" height="80px" src={logo} alt="Logo" /></a>
                </div>

                <div id="hamburger-menu" onClick={handleMenuOpen}>
                    <div className='animate__fadeInRight'></div>
                    <div className='animate__fadeInRight'></div>
                    <div className='animate__fadeInRight'></div>
                </div>
            </div>

            <div
                id="mobile-menu"
                ref={mobileMenuRef}
                style={{
                    display: 'flex',
                    transform: isMenuOpen ? 'translateX(0%)' : 'translateX(-100%)',
                    transition: 'transform 0.4s ease',
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    height: '100%',
                    width: '100%',
                    backgroundColor: '#333',
                    zIndex: '9999',
                }}
             >

                <div className='menu-button'>
                <p className='menu'>Menu</p>
                <div id="hamburger-cross" onClick={handleMenuClose}>&#215;</div>
                </div>

                <div className='mobile-menu-container'>

                    <div className="mobile-nav-items">
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


                    <div className='mobile-nav-items-2'>
                        <p>Muhammadabdullo0204@gmail.com</p>
                        <p>+998 94 683 14 59</p>


                        <div className="contacts">
                            <a href="https://t.me/ZTM081" target="_blank" rel="noopener noreferrer">
                                <button className="Btn">
                                    <span className="svgContainer">
                                        <svg viewBox="0 0 496 512" height="1.6em" xmlns="http://www.w3.org/2000/svg" fill="white">
                                            <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" fill="white" />
                                        </svg>
                                    </span>
                                    <span className="BG"></span>
                                </button>
                            </a>

                            <a href="https://github.com/muhammadabdullo0204" target="_blank" rel="noopener noreferrer">
                                <button className="Btn">
                                    <span className="svgContainer">
                                        <svg fill="white" viewBox="0 0 496 512" height="1.6em">
                                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                                        </svg>
                                    </span>
                                    <span className="BG"></span>
                                </button>
                            </a>


                            <a href="https://wa.me/+998946831459">
                                <button class="Btn">
                                    <span class="svgContainer">
                                        <svg viewBox="0 0 448 512" fill="white" height="1.6em" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="BG"></span>
                                </button>

                            </a>

                            <a href="http://www.facebook.com/Uhammadabdullo Ziyodulloyev">

                                <button class="Btn">
                                    <span class="svgContainer">
                                        <svg viewBox="0 0 320 512" height="1.3em" xmlns="http://www.w3.org/2000/svg" class="svgIcon"
                                            fill="white">
                                            <path
                                                d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="BG"></span>
                                </button>

                            </a>

                        </div>


                    </div>






                </div>


               
            </div>
        </div>
    );
}

export default Navbar;
