import React, { useState, useEffect } from 'react';

const Eyes = () => {
  const [pupilPosition, setPupilPosition] = useState({ leftX: 0, leftY: 0, rightX: 0, rightY: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      // Left Eye Position
      let leftEye = document.getElementById('left-eye').getBoundingClientRect();
      let leftCenterX = leftEye.left + leftEye.width / 2;
      let leftCenterY = leftEye.top + leftEye.height / 2;
      let leftRadius = leftEye.width / 6; // Half of the black circle (iris) size for pupil restriction

      // Right Eye Position
      let rightEye = document.getElementById('right-eye').getBoundingClientRect();
      let rightCenterX = rightEye.left + rightEye.width / 2;
      let rightCenterY = rightEye.top + rightEye.height / 2;
      let rightRadius = rightEye.width / 6; // Half of the black circle (iris) size for pupil restriction

      // Calculate direction for left eye
      let leftDeltaX = mouseX - leftCenterX;
      let leftDeltaY = mouseY - leftCenterY;
      let leftDistance = Math.sqrt(leftDeltaX ** 2 + leftDeltaY ** 2);
      
      // Limit movement of left pupil within the iris (black circle)
      if (leftDistance > leftRadius) {
        leftDeltaX = (leftDeltaX / leftDistance) * leftRadius;
        leftDeltaY = (leftDeltaY / leftDistance) * leftRadius;
      }

      // Calculate direction for right eye
      let rightDeltaX = mouseX - rightCenterX;
      let rightDeltaY = mouseY - rightCenterY;
      let rightDistance = Math.sqrt(rightDeltaX ** 2 + rightDeltaY ** 2);
      
      // Limit movement of right pupil within the iris (black circle)
      if (rightDistance > rightRadius) {
        rightDeltaX = (rightDeltaX / rightDistance) * rightRadius;
        rightDeltaY = (rightDeltaY / rightDistance) * rightRadius;
      }

      // Update pupil positions
      setPupilPosition({
        leftX: leftDeltaX,
        leftY: leftDeltaY,
        rightX: rightDeltaX,
        rightY: rightDeltaY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div  className='eyes w-full h-screen overflow-hidden relative'>
      <div  data-scroll data-scroll-speed="-0.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-10 justify-center items-center">
        
        {/* Left Eye */}
        <div id="left-eye" className='flex items-center justify-center w-[25vw] h-[25vw] rounded-full bg-zinc-100'>
          <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
            <div
              className='absolute w-10 h-10 rounded-full bg-zinc-600'
              style={{
                transform: `translate(calc(${pupilPosition.leftX}px - 50%), calc(${pupilPosition.leftY}px - 50%))`
              }}
            ></div>
          </div>
        </div>

        {/* Right Eye */}
        <div id="right-eye" className='flex items-center justify-center w-[25vw] h-[25vw] rounded-full bg-zinc-100'>
          <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
            <div
              className='absolute w-10 h-10 rounded-full bg-zinc-600'
              style={{
                transform: `translate(calc(${pupilPosition.rightX}px - 50%), calc(${pupilPosition.rightY}px - 50%))`
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
