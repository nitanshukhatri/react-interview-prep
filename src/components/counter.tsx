import { useState, useEffect } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  let [frozen, setFrozen] = useState(false);

  const increment = () => {
    setCount((prevCount) => {
      if (frozen) {
        return prevCount;
      }
      return prevCount + 1;
    });
  };

  useEffect(() => {
    increment();
    setFrozen(true);
    increment();
  }, []);

  return <div>{count}</div>;
};

export default Counter;
