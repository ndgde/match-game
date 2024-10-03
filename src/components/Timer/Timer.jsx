import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Timer.css';

const Timer = ({ initialTime, onFinish = () => {}, className = '', style = {} }) => {
  const [time, setTime] = useState(new Date(0));

  const validInitialTime = new Date(initialTime);

  if (isNaN(validInitialTime.getTime())) {
    throw new Error('initialTime must be a valid Date');
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date(new Date().getTime() - validInitialTime.getTime()));
    }, 1000);

    return () => clearInterval(timerId);
  }, [validInitialTime, onFinish]);

  return (
    <div className={`timer ${className}`} style={style}>
      {`${time.getMinutes().toString().padStart(2, '0')}:${time.getSeconds().toString().padStart(2, '0')}`}
    </div>
  );
};

Timer.propTypes = {
  initialTime: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]).isRequired,
  onFinish: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Timer;
