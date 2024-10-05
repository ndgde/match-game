import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Timer.css';

const Timer = ({ callback, onMilliseconds = false, className = '', style = {} }) => {
  const [startTime, setStartTime] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let timerId;

    if (isRunning) {
      timerId = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 9);
    }

    return () => clearInterval(timerId);
  }, [isRunning, startTime]);

  const startTimer = () => {
    setStartTime(Date.now() - elapsedTime);
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  useEffect(() => {
    if (callback) {
      callback({
        startTimer: startTimer,
        stopTimer: stopTimer,
        resetTimer: resetTimer,
      });
    }
  }, []);

  const getTime = () => {
    let minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = elapsedTime % 1000;

    let mStr = minutes.toString().padStart(2, '0');
    let sStr = seconds.toString().padStart(2, '0');
    let msStr = milliseconds.toString().padStart(3, '0');

    return `${mStr}:${sStr}${onMilliseconds ? `:${msStr}` : ''}`;
  };

  return (
    <div className={`timer ${className} ${onMilliseconds ? 'timer-on-milliseconds' : ''}`} style={style}>
      {getTime()}
    </div>
  );
};

Timer.propTypes = {
  callback: PropTypes.func.isRequired,
  onMilliseconds: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Timer;
