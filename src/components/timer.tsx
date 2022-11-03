// timer.js
import React, { useEffect, useState } from "react";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const Timer = ({ expireIn, onComplete }: { expireIn: number; onComplete: () => void }) => {
  const [currentTime, setCurrentTime] = useState(expireIn);

  const getFormattedTime = (time: number) => {
    const day = Math.floor(time / DAY);
    const hour = Math.floor((time % DAY) / HOUR); // hours left after removing days
    const minutes = Math.floor((time % HOUR) / MINUTE); // minutes left after removing hours
    const seconds = Math.floor((time % MINUTE) / SECOND); // seconds left after removing minutes

    return (
      <div>
        {day < 10 ? `0${day}` : day} : {hour < 10 ? `0${hour}` : hour} : {minutes < 10 ? `0${minutes}` : minutes} :{" "}
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
    );
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentTime(currentTime - 1000);
    }, 1000);

    if (currentTime <= 0) {
      onComplete && onComplete();
      clearTimeout(timerId);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [currentTime, onComplete]);

  return getFormattedTime(currentTime);
};

Timer.defaultProps = {
  expireIn: 1 * 60 * 1000,
};

export default Timer;
