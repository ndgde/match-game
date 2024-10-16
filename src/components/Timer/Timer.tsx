import React, { useState, useEffect } from 'react';
import styles from './Timer.module.scss';

interface TimerProps extends React.HTMLAttributes<HTMLDivElement> {
  timeAmount: number;
  callback: (controls: TimerControls) => void;
  endTrigger: () => void;
  onMilliseconds?: boolean;
  style?: React.CSSProperties;
}

interface TimerControls {
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
  getEasternTime: () => number;
  getElapsedTime: () => number;
  getElapsedTimeRender: () => string;
  getEasternTimeRender: () => string;
}

export { TimerControls };

const Timer: React.FC<TimerProps> = ({
  timeAmount,
  callback,
  endTrigger,
  onMilliseconds = false,
  className = '',
  style,
}) => {
  const [startTime, setStartTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (isRunning) {
      timerId = setInterval(
        () => {
          setElapsedTime(Date.now() - startTime);

          if (elapsedTime >= timeAmount) {
            endTrigger();
          }
        },
        onMilliseconds ? 9 : 900
      );
    }

    return () => clearInterval(timerId);
  }, [isRunning, startTime]);

  const startTimer = () => {
    setIsRunning(true);
    setStartTime(Date.now());
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

  const renderTime = (time: number) => {
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = time % 1000;

    const mStr = minutes.toString().padStart(2, '0');
    const sStr = seconds.toString().padStart(2, '0');
    const msStr = milliseconds.toString().padStart(3, '0');

    return `${mStr}:${sStr}${onMilliseconds ? `:${msStr}` : ''}`;
  };

  const getElapsedTimeRender = () => renderTime(getElapsedTime());
  const getEasternTimeRender = () => renderTime(getEasternTime());

  useEffect(() => {
    if (callback) {
      callback({
        startTimer,
        stopTimer,
        resetTimer,
        getEasternTime,
        getElapsedTime,
        getElapsedTimeRender,
        getEasternTimeRender,
      });
    }
  }, [elapsedTime]);

  return (
    <div className={`timer ${styles.container} ${className} ${onMilliseconds ? styles.on_ms : ''}`} style={style}>
      {getEasternTimeRender()}
    </div>
  );
};

export default Timer;
