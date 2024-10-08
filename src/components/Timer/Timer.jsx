import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Timer.module.scss';

const Timer = ({ timeAmount, callback, endTrigger, onMilliseconds = false, className = '', style = {} }) => {
  const [startTime, setStartTime] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let timerId;

    if (isRunning) {
      timerId = setInterval(() => {
        setElapsedTime(Date.now() - startTime);

        if (elapsedTime >= timeAmount) {
          endTrigger();
        }
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

  const getElapsedTime = () => elapsedTime;
  const getEasternTime = () => timeAmount - elapsedTime;

  useEffect(() => {
    if (callback) {
      callback({
        startTimer: startTimer,
        stopTimer: stopTimer,
        resetTimer: resetTimer,
        getEasternTime: getEasternTime,
        getElapsedTime: getElapsedTime,
      });
    }
  }, []);

  const getTime = () => {
    let easternTime = timeAmount - elapsedTime;
    let minutes = Math.floor((easternTime / 1000 / 60) % 60);
    let seconds = Math.floor((easternTime / 1000) % 60);
    let milliseconds = easternTime % 1000;

    let mStr = minutes.toString().padStart(2, '0');
    let sStr = seconds.toString().padStart(2, '0');
    let msStr = milliseconds.toString().padStart(3, '0');

    return `${mStr}:${sStr}${onMilliseconds ? `:${msStr}` : ''}`;
  };

  return (
    <div className={`timer ${styles.container} ${className} ${onMilliseconds ? styles.on_ms : ''}`} style={style}>
      {getTime()}
    </div>
  );
};

Timer.propTypes = {
  timeAmount: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
  endTrigger: PropTypes.func.isRequired,
  onMilliseconds: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Timer;
