import { useState, useEffect } from 'react';

const useTimer = (initialTime = 0) => {
  const [time, setTime] = useState(initialTime);
  const [formattedTime, setFormattedTime] = useState('00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    setFormattedTime(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
  }, [time]);

  return formattedTime;
};

export default useTimer;
