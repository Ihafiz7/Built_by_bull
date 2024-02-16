import React from 'react';

const CircularProgressBar = ({ percentage, text }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const dashArray = circumference;
  const dashOffset = dashArray - (percentage / 100) * dashArray;
  const textX = 80;
  const textY = 80;
  const rotation = 90

  return (
    <div className='flex flex-col items-center justify-center'>
      <svg width="160" height="160" viewBox="0 0 160 160" style={{ transform: 'rotate(-90deg)' }}>
        <circle r={radius} cx="80" cy="80" fill="transparent" stroke="#e0e0e0" stroke-width="5px"></circle>
        <circle
          r={radius}
          cx="80"
          cy="80"
          fill="transparent"
          stroke="#60e6a8"
          stroke-linecap="round"
          stroke-width="3px"
          stroke-dasharray={`${dashArray}px`}
          stroke-dashoffset={`${dashOffset}px`}
        ></circle>
        <text x={textX} y={textY} fill="#000" textAnchor="middle" dominantBaseline="middle" fontSize="20" transform={`rotate(${rotation} ${textX} ${textY})`}>
            {percentage}%
        </text>
      </svg>
      <p className='w-24 font-roboto font-normal text-xs text-black text-center tracking-widest'>{text}</p>
    </div>

  );
};

export default CircularProgressBar;
