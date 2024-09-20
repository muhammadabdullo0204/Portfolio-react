import React, { useState, useEffect } from 'react';

const SMOOTHNESS = 1; 

function Blob() {
  const [blobPosition, setBlobPosition] = useState({ top: "50%", left: "50%" });
  const [targetPosition, setTargetPosition] = useState({ top: "50%", left: "50%" });

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      setBlobPosition((prevPosition) => {
        return {
          top: `${parseFloat(prevPosition.top) + (parseFloat(targetPosition.top) - parseFloat(prevPosition.top)) * SMOOTHNESS}px`,
          left: `${parseFloat(prevPosition.left) + (parseFloat(targetPosition.left) - parseFloat(prevPosition.left)) * SMOOTHNESS}px`,
        };
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [targetPosition]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setTargetPosition({ top: `${y}px`, left: `${x}px` });
  };

  return (
    <div className="card " onMouseMove={handleMouseMove} style={{ position: "relative", height: "400px" }}>
      <div className="bg">
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div
        className="blob"
        style={{
          position: "absolute",
          top: blobPosition.top,
          left: blobPosition.left,
          width: "100px", 
          height: "100px",
          backgroundColor: "#ff0000", 
          borderRadius: "50%", 
          pointerEvents: "none", 
        }}
      ></div>
    </div>
  );
}

export default Blob;
