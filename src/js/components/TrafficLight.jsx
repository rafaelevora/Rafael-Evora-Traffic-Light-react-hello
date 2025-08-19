import React, { useState, useEffect } from 'react';

const TrafficLight = () => {
  const [color, setColor] = useState('green');
  const [timeLeft, setTimeLeft] = useState(2000); // milliseconds
  const intervalTime = 2000; // duration of each light in milliseconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          // Switch to the next light
          setColor(prevColor => {
            if (prevColor === 'red') return 'yellow';
            if (prevColor === 'yellow') return 'green';
            return 'red';
          });
          return intervalTime; // reset timer
        }
        return prev - 50; // decrement by 50ms
      });
    }, 50); // update every 50ms for smooth countdown

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="trafficLight-wrapper">
      <div className="timer-display">{timeLeft} ms</div>
      <div className="trafficLight">
        <div className="trafficLight-stick"></div>
        <div className="trafficLight-body">
          <div className="lights-box">
            <div className={`light red ${color === 'red' ? 'active-red' : ''}`} onClick={() => setColor('red')}></div>
            <div className={`light yellow ${color === 'yellow' ? 'active-yellow' : ''}`} onClick={() => setColor('yellow')}></div>
            <div className={`light green ${color === 'green' ? 'active-green' : ''}`} onClick={() => setColor('green')}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficLight;
