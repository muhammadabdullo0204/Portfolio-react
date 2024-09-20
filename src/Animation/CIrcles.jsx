// import React, { useState, useEffect } from 'react';
// import '../Animation/Circles.css';

// const NUM_SEGMENTS = 15; 
// const SMOOTHNESS = 0.5; 

// const Circles = () => {
//   const [positions, setPositions] = useState(
//     Array.from({ length: NUM_SEGMENTS }, () => ({ top: "50%", left: "50%" }))
//   );

//   useEffect(() => {
//     let animationFrame;
//     const animate = () => {
//       setPositions((prevPositions) => {
//         const newPositions = [...prevPositions];
//         for (let i = 1; i < NUM_SEGMENTS; i++) {
//           newPositions[i] = {
//             top: `${parseFloat(newPositions[i].top) + (parseFloat(prevPositions[i - 1].top) - parseFloat(newPositions[i].top)) * SMOOTHNESS}px`,
//             left: `${parseFloat(newPositions[i].left) + (parseFloat(prevPositions[i - 1].left) - parseFloat(newPositions[i].left)) * SMOOTHNESS}px`,
//           };
//         }
//         return newPositions;
//       });
//       animationFrame = requestAnimationFrame(animate);
//     };

//     animationFrame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationFrame);
//   }, []);

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     setPositions((prevPositions) => {
//       const newPositions = [...prevPositions];
//       newPositions[0] = { top: `${y}px`, left: `${x}px` };
//       return newPositions;
//     });
//   };

//   return (
//     <div className="card-2" onMouseMove={handleMouseMove}>
//       {positions.map((pos, index) => (
//         <div
//           key={index}
//           className="blob-2"
//           style={{
//             top: pos.top,
//             left: pos.left,
//           }}
//         ></div>
//       ))}
//     </div>
//   );
// };

// export default Circles;
