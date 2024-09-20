import React from 'react';
import './NotFound.css';
import Frame from '../Images/Frame 14.svg'
import Camera from '../Images/camera.svg'
import Rectangle from '../Images/Rectangle 1 copy 4.svg'
import Shape3 from '../Images/Shape 3 copy 2.svg'
import Shape2 from '../Images/Shape 2 copy 2.svg'
import touchpad from '../Images/touchpad.svg'
import Frame2 from '../Images/Frame 33.svg'

import right from '../Images/right-arrow-svgrepo-com.svg'
import { useNavigate } from 'react-router-dom';

function NotFound() {

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
    <div className="macbook-img">
        <img className="ellipse animation-chap" width="289px" height="289px" src={Frame} alt="ellipse" />

      <img className="camera animation-chap" width="5px" height="5px" src={Camera} alt="camera" />
      <img className="macbook-imgs animation-ong" src={Rectangle} alt="macbook background" />
      <div className='artwork animation-chap'>
        <h1>404</h1>
        <p>PAGE NOT FOUND</p>

        <div className='slides-button'>
               
           
               <button onClick={() => handleClick('/')}>
                   <img width="30" height="30" src={right} alt="right--v1" />
                   <span>Home</span>
               </button>
           </div>
      </div>
      <img className="shape animation-chap" width="890px" height="17px" src={Shape3} alt="shape" />
      <img className="shape-2 animation-chap" width="945px" height="7.5px" src={Shape2} alt="shape-2" />
      <img className="touchpad animation-ong" width="135px" height="4.75px" src={touchpad} alt="touchpad" />
      <img className="frame animation-ong" width="150px" height="200px" src={Frame2} alt="frame" />

 

    </div>


  );
}

export default NotFound;
