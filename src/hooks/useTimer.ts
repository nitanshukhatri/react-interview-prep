import React, { useState, useEffect } from "react";

export default function useTimer() {
  const [time, setTime] = useState(5);
  const [interval, setinterval] = useState<any>();
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (time === 0) {
      stop();
    }
  }, [time]);

  const start = () => {
    setStarted(true);
    const id = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    setinterval(id);
  };

  const stop = () => {
    setStarted(false);
    clearInterval(interval);
    setTime(5);
  };

  return [start, stop, time, started];
}
