import React, { useEffect, useRef, useState } from "react";

const TOTAL_TIME_IN_SEC = 10;
function ProgressBar() {
  const [time, setTime] = useState(TOTAL_TIME_IN_SEC);
  const timeRef = useRef<any>();

  useEffect(() => {
    timeRef.current = window.setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    return () => timeRef && window.clearInterval(timeRef.current);
  }, []);

  useEffect(() => {
    if (time < 1) {
      clearInterval(timeRef.current);
    }
  }, [time]);

  return (
    <>
      <h4>{`${time} seconds...`}</h4>
      <div className="progressRoot">
        <div style={{ width: `${100 - time}%` }} className="progressSpan" />
      </div>
    </>
  );
}
export default ProgressBar;
