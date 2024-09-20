import React from 'react'
import html from '../Images/HTML5.png';
import css from '../Images/CSS3.png';
import js from '../Images/Javascript.png';
import reactjs from '../Images/React.png';
import node from '../Images/Nodejs.png';
import figma from '../Images/Figma.png';
import chrome from '../Images/Google Chrome.png';
import vscode from '../Images/Visual Studio Code.png';
import git from '../Images/git.png';
import npm from '../Images/npm.png';
import car from '../Images/project-card-image-size 1.png';
import black from '../Images/Rectangle 3.png';
import right from '../Images/right-arrow-svgrepo-com.svg'

import { useNavigate } from 'react-router-dom';

import Blog from '../Blob'
import BlogCss from '../Blob.css';
import '../ABOUT-ME/AboutMe.css'



function AboutMe() {


    const navigate = useNavigate();


    const handleClick = (targetPath) => {
        const button = document.querySelector('.slides-button button.active');
        if (button) {
            button.classList.remove('active');
        }
        const clickedButton = document.activeElement;
        clickedButton.classList.add('active');

        setTimeout(() => {
            navigate(targetPath);
        }, 2500);
    };





    return (
        <div className='Container'>
            <div className='container-about'>
                <Blog></Blog>



                <div className='my-skill'>

                    <h2>My Skills</h2>


                    <div className='skills'>
                        <div className='skills-1'>
                            <img src={html} alt="" />
                            <p>HTML</p>
                        </div>

                        <div className="skills-1">
                            <img src={css} alt="" />
                            <p>CSS</p>
                        </div>

                        <div className="skills-1">
                            <img src={js} alt="" />
                            <p>JavaScript</p>
                        </div>


                        <div className="skills-1">
                            <img src={reactjs} alt="" />
                            <p>React.JS</p>
                        </div>


                        <div className="skills-1">
                            <img src={node} alt="" />
                            <p>NodeJS</p>
                        </div>


                        <div className="skills-1">
                            <img src={figma} alt="" />
                            <p>Figma</p>
                        </div>

                        <div className="skills-1">
                            <img src={chrome} alt="" />
                            <p>Chrome</p>
                        </div>


                        <div className="skills-1">
                            <img src={vscode} alt="" />
                            <p>VSCode</p>
                        </div>

                        <div className="skills-1">
                            <img src={git} alt="" />
                            <p>Git</p>
                        </div>

                        <div className="skills-1">
                            <img src={npm} alt="" />
                            <p>NPM</p>
                        </div>

                    </div>

                </div>



            </div>



            <div className='slides-container'>

                <div className='slides-container-mini'>
                    <div className='slides-box'>
                        <div className='slides'>
                            <div className="slides-wrap">
                                <img src={black} alt="" />
                                <img src={car} alt="" />

                                <p className='project'>Project Title - Here comes the name of the Project</p>
                                <p className='here'>Here are the Tech's used</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                    class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                                </svg>
                            </div>


                            <div className="slides-wrap-2">
                                <img src={black} alt="" />
                                <img src={car} alt="" />

                                <p className='project'>Project Title - Here comes the name of the Project</p>
                                <p className='here'>Here are the Tech's used</p>

                         

                            </div>



                            <div className="slides-wrap-3">
                                <img src={black} alt="" />
                                <img src={car} alt="" />

                                <p className='project'>Project Title - Here comes the name of the Project</p>
                                <p className='here'>Here are the Tech's used</p>




                            </div>

                            <div className="slides-wrap-4">
                                <img src={black} alt="" />
                                <img src={car} alt="" />

                                <p className='project'>Project Title - Here comes the name of the Project</p>
                                <p className='here'>Here are the Tech's used</p>

                            </div>


                            <div className="slides-wrap-5">
                                <img src={black} alt="" />
                                <img src={car} alt="" />

                                <p className='project'>Project Title - Here comes the name of the Project</p>
                                <p className='here'>Here are the Tech's used</p>

                            </div>


                        </div>




                    </div>



                    <div className='slides-box'>
                        <div className='slides'>
                            <div className="slides-wrap">
                                <img src={black} alt="" />
                                <img src={car} alt="" />

                                <p className='project'>Project Title - Here comes the name of the Project</p>
                                <p className='here'>Here are the Tech's used</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                    class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                                </svg>
                            </div>


                            <div className="slides-wrap-2">
                                <img src={black} alt="" />
                                <img src={car} alt="" />

                                <p className='project'>Project Title - Here comes the name of the Project</p>
                                <p className='here'>Here are the Tech's used</p>

                            </div>



                            <div className="slides-wrap-3">
                                <img src={black} alt="" />
                                <img src={car} alt="" />

                                <p className='project'>Project Title - Here comes the name of the Project</p>
                                <p className='here'>Here are the Tech's used</p>

                            </div>

                            <div className="slides-wrap-4">
                                <img src={black} alt="" />
                                <img src={car} alt="" />

                                <p className='project'>Project Title - Here comes the name of the Project</p>
                                <p className='here'>Here are the Tech's used</p>

                            </div>


                            <div className="slides-wrap-5">
                                <img src={black} alt="" />
                                <img src={car} alt="" />

                                <p className='project'>Project Title - Here comes the name of the Project</p>
                                <p className='here'>Here are the Tech's used</p>

                            </div>


                        </div>




                    </div>



                    <div className='slides-box'>
                        <div className='slides'>
                            <div className="slides-wrap">
                                <img src={black} alt="" />
                                <img src={car} alt="" />

                                <p className='project'>Project Title - Here comes the name of the Project</p>
                                <p className='here'>Here are the Tech's used</p>


                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                    class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                                </svg>



                            </div>


                            <div className="slides-wrap-2">
                                <img src={black} alt="" />
                                <img src={car} alt="" />

                                <p className='project'>Project Title - Here comes the name of the Project</p>
                                <p className='here'>Here are the Tech's used</p>

                            </div>



                            <div className="slides-wrap-3">
                                <img src={black} alt="" />
                                <img src={car} alt="" />

                                <p className='project'>Project Title - Here comes the name of the Project</p>
                                <p className='here'>Here are the Tech's used</p>

                            </div>

                            <div className="slides-wrap-4">
                                <img src={black} alt="" />
                                <img src={car} alt="" />

                                <p className='project'>Project Title - Here comes the name of the Project</p>
                                <p className='here'>Here are the Tech's used</p>

                            </div>


                            <div className="slides-wrap-5">
                                <img src={black} alt="" />
                                <img src={car} alt="" />

                                <p className='project'>Project Title - Here comes the name of the Project</p>
                                <p className='here'>Here are the Tech's used</p>

                            </div>


                        </div>




                    </div>

                </div>



                <div className='slides-button'>
               
                    <button onClick={() => handleClick('/projects')}>
                        <img width="30" height="30" src={right} alt="right--v1" />
                        <span>All Projects</span>
                    </button>
                    <button onClick={() => handleClick('/contact')}>
                        <img width="30" height="30" src={right} alt="right--v1" />
                        <span>Contact Me</span>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default AboutMe