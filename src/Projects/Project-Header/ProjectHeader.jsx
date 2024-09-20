import React, { useState, useEffect } from 'react';


const NUM_SEGMENTS = 15;
const SMOOTHNESS = 0.5; 

function ProjectHeader() {
    const [positions, setPositions] = useState(
        Array.from({ length: NUM_SEGMENTS }, () => ({ top: "50%", left: "50%" }))
      );
      const [cursorPosition, setCursorPosition] = useState({ top: "50%", left: "50%" });
    
      useEffect(() => {
        let animationFrame;
    
        const animate = () => {
          setPositions((prevPositions) => {
            const newPositions = [...prevPositions];
            
            newPositions[0] = {
              top: `${parseFloat(newPositions[0].top) + (parseFloat(cursorPosition.top) - parseFloat(newPositions[0].top)) * SMOOTHNESS}px`,
              left: `${parseFloat(newPositions[0].left) + (parseFloat(cursorPosition.left) - parseFloat(newPositions[0].left)) * SMOOTHNESS}px`,
            };
    
            for (let i = 1; i < NUM_SEGMENTS; i++) {
              newPositions[i] = {
                top: `${parseFloat(newPositions[i].top) + (parseFloat(prevPositions[i - 1].top) - parseFloat(newPositions[i].top)) * SMOOTHNESS}px`,
                left: `${parseFloat(newPositions[i].left) + (parseFloat(prevPositions[i - 1].left) - parseFloat(newPositions[i].left)) * SMOOTHNESS}px`,
              };
            }
    
            return newPositions;
          });
    
          animationFrame = requestAnimationFrame(animate);
        };
    
        animationFrame = requestAnimationFrame(animate);
    
        return () => cancelAnimationFrame(animationFrame);
      }, [cursorPosition]);
    
      const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        setCursorPosition({ top: `${y}px`, left: `${x}px` });
      };
    
      
      return (
        <div className='body'  onMouseMove={handleMouseMove}>
         {positions.map((pos, index) => {
            const size = 20 - index; 
            return (
              <div
                key={index}
                className="blob-2"
                style={{
                  top: pos.top,
                  left: pos.left,
                  position: "absolute",
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: "blue", 
                  borderRadius: "50%",
                  transition: "transform 0.2s ease", 
                }}
              ></div>
            );
          })}
    
          <div className='container' >
       
    
            <h1 className='animate__fadeInDown'>MY PROJECTS</h1>
            <h3 className='animate__fadeInDown'>MADE WITH LOVE</h3>
          </div>
    
    
        </div>
    
    
      )
}

export default ProjectHeader