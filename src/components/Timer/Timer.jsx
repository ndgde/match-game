import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Timer.css';

const Timer = ({ initialTime, isCountingDown, onFinish = () => {}, className = '', style = {} }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time <= 0 && isCountingDown) {
      onFinish();
      return;
    }

    const timerId = setInterval(() => {
      setTime((prevTime) => (isCountingDown ? prevTime - 1 : prevTime + 1));
    }, 1000);

    return () => clearInterval(timerId);
  }, [time, isCountingDown, onFinish]);

  return (
    <div className={`timer ${className}`} style={style}>
      {time}s
    </div>
  );
};

Timer.propTypes = {
  initialTime: PropTypes.number.isRequired,
  isCountingDown: PropTypes.bool.isRequired,
  onFinish: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Timer;
