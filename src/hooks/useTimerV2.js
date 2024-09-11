import { useState, useEffect, useCallback } from 'react';

const useTimer = (initialTime = 0, autoStart = false) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(autoStart);
  const [formattedTime, setFormattedTime] = useState('00:00');

  // Start the timer
  const start = useCallback(() => {
    setIsRunning(true);
  }, []);

  // Stop the time
  const stop = useCallback(() => {
    setIsRunning(false);
  }, []);

  // Reset the timer
  const reset = useCallback(() => {
    setIsRunning(false);
    setTime(initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (autoStart) {
      start(); // Start automatically if autoStart is true
    }
  }, [autoStart, start]);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== initialTime) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, time, initialTime]);

  useEffect(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    setFormattedTime(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
  }, [time]);

  return { formattedTime, start, stop, reset };
};

export default useTimer;
