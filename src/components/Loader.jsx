import React, { useEffect, useState } from 'react';
import './Loader.css';

function Loader({ onComplete }) {
  const [progress, setProgress] = useState(1);


  useEffect(() => {
  const interval = setInterval(() => {
    setProgress((prev) => {
      if (prev >= 100) {
        clearInterval(interval);
        if (onComplete) onComplete();
        return 100;
      }
      return prev + 1;
    });
  }, 10); 

  return () => clearInterval(interval);
}, [onComplete]);




  return (
    <div className="circle-loader-container">
      <div className="circle">
        <svg className="progress-ring" width="120" height="120">
          <circle
            className="progress-ring__circle"
            stroke="blue"
            strokeWidth="10"
            fill="transparent"
            r="50"
            cx="60"
            cy="60"
            style={{
              strokeDasharray: 314,
              strokeDashoffset: 314 - (314 * progress) / 100,
            }}
          />
        </svg>
        <div className="loader-text">{progress}%</div>
      </div>
    </div>
  );
}

export default Loader;
