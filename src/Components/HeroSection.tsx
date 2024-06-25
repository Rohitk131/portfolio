import React from 'react';
import './heroStyle.css'; // Import the CSS file for keyframes

const Marquee: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="marquee-wrapper">
        <div className="marquee">
          <span className="marquee-text text-[250px] font-bold text-white">
            ROHIT KUMAR ROHIT KUMAR ROHIT KUMAR ROHIT KUMAR ROHIT KUMAR ROHIT KUMAR ROHIT KUMAR ROHIT KUMAR ROHIT KUMAR ROHIT KUMAR ROHIT KUMAR ROHIT KUMAR&nbsp;
          </span>
          <span className="marquee-text text-[250px] font-bold text-white">
            ROHIT KUMAR ROHIT KUMAR ROHIT KUMAR ROHIT KUMAR ROHIT KUMAR ROHIT KUMAR ROHIT KUMAR ROHIT KUMAR ROHIT KUMAR ROHIT KUMAR ROHIT KUMAR ROHIT KUMAR&nbsp;
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
