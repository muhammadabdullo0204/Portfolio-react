import React from 'react'
import car from '/Users/pcmci-tech//visual code/React/amalyot-website/src/Images/project-card-image-size 1.png'
import black from '/Users/pcmci-tech//visual code/React/amalyot-website/src/Images/Rectangle 3.png';
import right from '/Users/pcmci-tech//visual code/React/amalyot-website/src/Images/right-arrow-svgrepo-com.svg';

import { useNavigate } from 'react-router-dom';
function Pagination() {
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
        <div className='Pagination '>
            <div className="slides-wrap-2 ">
                <img src={black} alt="" />
                <img src={car} alt="" />

                <p className='project'>Project Title - Here comes the name of the Project</p>
                <p className='here'>Here are the Tech's used</p>

                <div className='slides-wrap-button'>
                    <div className='slides-button'>

                        <button onClick={() => handleClick('/contact')}>
                            <img width="30" height="30" src={right} alt="right--v1" />
                            <span>VISIT THE WEBSITE</span>
                        </button>
                    </div>

                </div>


            </div>


            <div className="slides-wrap-2 ">
                <img src={black} alt="" />
                <img src={car} alt="" />

                <p className='project'>Project Title - Here comes the name of the Project</p>
                <p className='here'>Here are the Tech's used</p>



                <div className='slides-wrap-button'>
                    <div className='slides-button'>

                        <button onClick={() => handleClick('/contact')}>
                            <img width="30" height="30" src={right} alt="right--v1" />
                            <span>VISIT THE WEBSITE</span>
                        </button>
                    </div>

                </div>


            </div>



            <div className="slides-wrap-2 ">
                <img src={black} alt="" />
                <img src={car} alt="" />

                <p className='project'>Project Title - Here comes the name of the Project</p>
                <p className='here'>Here are the Tech's used</p>




                <div className='slides-wrap-button'>
                    <div className='slides-button'>

                        <button onClick={() => handleClick('/contact')}>
                            <img width="30" height="30" src={right} alt="right--v1" />
                            <span>VISIT THE WEBSITE</span>
                        </button>
                    </div>

                </div>


            </div>



            <div className="slides-wrap-2">
                <img src={black} alt="" />
                <img src={car} alt="" />

                <p className='project'>Project Title - Here comes the name of the Project</p>
                <p className='here'>Here are the Tech's used</p>



                <div className='slides-wrap-button'>
                    <div className='slides-button'>

                        <button onClick={() => handleClick('/contact')}>
                            <img width="30" height="30" src={right} alt="right--v1" />
                            <span>VISIT THE WEBSITE</span>
                        </button>
                    </div>

                </div>


            </div>







            <div className="slides-wrap-2">
                <img src={black} alt="" />
                <img src={car} alt="" />

                <p className='project'>Project Title - Here comes the name of the Project</p>
                <p className='here'>Here are the Tech's used</p>



                <div className='slides-wrap-button'>
                    <div className='slides-button'>

                        <button onClick={() => handleClick('/contact')}>
                            <img width="30" height="30" src={right} alt="right--v1" />
                            <span>VISIT THE WEBSITE</span>
                        </button>
                    </div>

                </div>


            </div>


            <div className="slides-wrap-2">
                <img src={black} alt="" />
                <img src={car} alt="" />

                <p className='project'>Project Title - Here comes the name of the Project</p>
                <p className='here'>Here are the Tech's used</p>



                <div className='slides-wrap-button'>
                    <div className='slides-button'>

                        <button onClick={() => handleClick('/contact')}>
                            <img width="30" height="30" src={right} alt="right--v1" />
                            <span>VISIT THE WEBSITE</span>
                        </button>
                    </div>

                </div>


            </div>


            <div className="slides-wrap-2">
                <img src={black} alt="" />
                <img src={car} alt="" />

                <p className='project'>Project Title - Here comes the name of the Project</p>
                <p className='here'>Here are the Tech's used</p>



                <div className='slides-wrap-button'>
                    <div className='slides-button'>

                        <button onClick={() => handleClick('/contact')}>
                            <img width="30" height="30" src={right} alt="right--v1" />
                            <span>VISIT THE WEBSITE</span>
                        </button>
                    </div>

                </div>


            </div>



            <div className="slides-wrap-2">
                <img src={black} alt="" />
                <img src={car} alt="" />

                <p className='project'>Project Title - Here comes the name of the Project</p>
                <p className='here'>Here are the Tech's used</p>



                <div className='slides-wrap-button'>
                    <div className='slides-button'>

                        <button onClick={() => handleClick('/contact')}>
                            <img width="30" height="30" src={right} alt="right--v1" />
                            <span>VISIT THE WEBSITE</span>
                        </button>
                    </div>

                </div>


            </div>



            <div className="slides-wrap-2">
                <img src={black} alt="" />
                <img src={car} alt="" />

                <p className='project'>Project 1 Title - Here comes the name of the Project</p>
                <p className='here'>Here are the Tech's used</p>



                <div className='slides-wrap-button'>
                    <div className='slides-button'>

                        <button onClick={() => handleClick('/contact')}>
                            <img width="30" height="30" src={right} alt="right--v1" />
                            <span>VISIT THE WEBSITE</span>
                        </button>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Pagination